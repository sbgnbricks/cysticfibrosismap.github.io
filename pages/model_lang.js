/* gets all objects of a collection whose prop is set to val or whose prop contains val*/
function get_obj_by_prop(coll, prop, val) {
    var ret = [];
    for (var i = 0; i < coll.length; i++) {
        if (coll[i][prop] == val) {
            ret.push(coll[i]);
        }
        if (Array.isArray(coll[i][prop])) {
            if (coll[i][prop].includes(val)) {
                ret.push(coll[i]);
            }
        }
    }
    return ret;
}

function display_to_model(to_display, bricks, categories) {
    model = [];
    for (var i = 0; i < to_display.length; i++) {
        elem = to_display[i];
        model.push(elem_to_model(elem, bricks, categories));
    }
    return model;
}

function elem_to_model(elem, bricks, categories) {
    var cat_name = elem["section"];
    var cat = get_obj_by_prop(categories, "name", cat_name)[0];
    var brs = [];
    var imgs = [];
    brick_names = elem["bricks"];
    for (var j = 0; j < brick_names.length; j++) {
        brick_name = brick_names[j];
        brick = get_obj_by_prop(bricks, "name", brick_name)[0];
        // We preload images to get their width in order to scale them correctly before they are displayed
        imgs.push(new Image());
        imgs[imgs.length - 1].png_file = brick["png_file"];
        src = data_dir + brick["png_file"]
        imgs[imgs.length - 1].onload = function () { // Once loaded we set the <img> width to the width of the image divided by the ratio
            $("img[src='" + data_dir + this.png_file + "']").attr("width", this.naturalWidth / ratio + "px");
        };
        imgs[imgs.length - 1].src = src;
        brick["png_file"] = data_dir + brick["png_file"];
        brick["sbgn_file"] = data_dir + brick["sbgn_file"];
        brs.push(brick);
        var lang = brick["lang"];
        if (lang == "PD") {
            brick["class"] = "pd_image";
        }
        else if (lang == "AF") {
            brick["class"] = "af_image";
        }
        else if (lang == "ER") {
            brick["class"] = "er_image";
        }
    }
    var subcats = [];
    var subelems = elem["sub_sections"];
    for (var k = 0; k < subelems.length; k++) {
        subelem = subelems[k];
        subcat = elem_to_model(subelem, bricks, categories);
        subcats.push(subcat);

    }
    return {"section": cat, "bricks": brs, "sub_sections": subcats};
}

$(function () {
    // var list = $("#bricks");
    /* We get the bricks and the categories asynchronously fron JSON files
     * We wait for both downloads to finish
    */
    bricks_req = $.getJSON(data_dir + "bricks.json");
    cat_req = $.getJSON(data_dir + "categories.json");
    // Once the two files are downloaded
    $.when(bricks_req, cat_req).done(function (bricks_res, categories_res) {
        bricks = bricks_res[0];
        categories = categories_res[0];
        var model = display_to_model(to_display, bricks, categories);
        Mustache.tags = ["[[", "]]"]; // because {{ and }} do not work on github pages
        var disp = $("#target").html();
        var temp_display = $("#template_display").html();
        var temp_section = $("#template_section").html();
        var temp_subsection = $("#template_subsection").html();
        var temp_subsubsection = $("#template_subsubsection").html();
        var temp_category = $("#template_category").html();
        var temp_subcategory = $("#template_subcategory").html();
        var temp_subsubcategory = $("#template_subsubcategory").html();
        var temp_goterm = $("#template_goterm").html();
        var temp_brick = $("#template_brick").html();
        Mustache.parse(temp_display);
        var rendered = Mustache.render(temp_display, {sections: model}, {section: temp_section, subsection: temp_subsection, subsubsection: temp_subsubsection, category: temp_category, subcategory: temp_subcategory, subsubcategory: temp_subsubcategory, goterm: temp_goterm, brick: temp_brick});
        $('#target').html(rendered);
    });
});
