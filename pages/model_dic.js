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

function display_to_model(to_display, bricks, multi_bricks, categories) {
    model = [];
    for (var i = 0; i < to_display.length; i++) {
        elem = to_display[i];
        model.push(elem_to_model(elem, bricks, multi_bricks, categories));
    }
    return model;
}

function elem_to_model(elem, bricks, multi_bricks, categories) {
    var cat_name = elem["section"];
    var cat = get_obj_by_prop(categories, "name", cat_name)[0];
    var mbrs = [];
    var imgs = [];
    var mbrick_names = elem["multi_bricks"];
    for (var j = 0; j < mbrick_names.length; j++) {
        var mbrs = [];
        var mbrick_name = mbrick_names[j];
        var mbrick = get_obj_by_prop(multi_bricks, "name", mbrick_name)[0];
        pd_name = mbrick["pd"];
        if (pd_name != null) {
            pd_brick = get_obj_by_prop(bricks, "name", pd_name)[0];
            pd_brick["sbgn_file"] = data_dir + pd_brick["sbgn_file"];
            pd_image = new Image();
            src = data_dir + pd_brick["png_file"];
            pd_brick["png_file"] = src;
            pd_image["png_file"] = src;
            pd_image.onload = function () { // Once loaded we set the <img> width to the width of the image divided by the ratio
                console.log($("img[src='" + this.png_file + "']"));
                $("img[src='" + this.png_file + "']").attr("width", this.naturalWidth / ratio + "px");
            };
            pd_image.src = src;
        } else {
            pd_brick = {"text": "Not applicable"};
        }
        af_name = mbrick["af"];
        if (af_name != null) {
            af_brick = get_obj_by_prop(bricks, "name", af_name)[0];
            af_brick["sbgn_file"] = data_dir + af_brick["sbgn_file"];
            af_image = new Image();
            src = data_dir + af_brick["png_file"];
            af_brick["png_file"] = src;
            af_image["png_file"] = src;
            af_image.onload = function () { // Once loaded we set the <img> width to the width of the image divided by the ratio
                console.log($("img[src='" + this.png_file + "']"));
                $("img[src='" + this.png_file + "']").attr("width", this.naturalWidth / ratio + "px");
            };
            af_image.src = src;
        } else {
            af_brick = {"text": "Not applicable"};
        }
        er_name = mbrick["er"];
        if (er_name != null) {
            er_brick = get_obj_by_prop(bricks, "name", er_name)[0];
            er_brick["sbgn_file"] = data_dir + er_brick["sbgn_file"];
            er_image = new Image();
            src = data_dir + er_brick["png_file"];
            er_brick["png_file"] = src;
            er_image["png_file"] = src;
            er_image.onload = function () { // Once loaded we set the <img> width to the width of the image divided by the ratio
                console.log($("img[src='" + this.png_file + "']"));
                $("img[src='" + this.png_file + "']").attr("width", this.naturalWidth / ratio + "px");
            };
            er_image.src = src;
        } else {
            er_brick = {"text": "Not applicable"};
        }
        mbrick["pd"] = pd_brick;
        mbrick["af"] = af_brick;
        mbrick["er"] = er_brick;
        mbrs.push(mbrick);
    }
    var subcats = [];
    var subelems = elem["sub_sections"];
    for (var k = 0; k < subelems.length; k++) {
        subelem = subelems[k];
        subcat = elem_to_model(subelem, bricks, multi_bricks, categories);
        subcats.push(subcat);

    }
    return {"section": cat, "multi_bricks": mbrs, "sub_sections": subcats};
}

$(function () {
    // var list = $("#bricks");
    /* We get the bricks and the categories asynchronously fron JSON files
     * We wait for both downloads to finish
    */
    bricks_req = $.getJSON(data_dir + "bricks.json");
    multi_bricks_req = $.getJSON(data_dir + "multi_bricks.json");
    cat_req = $.getJSON(data_dir + "categories.json");
    // Once the two files are downloaded
    $.when(bricks_req, multi_bricks_req, cat_req).done(function (bricks_res, multi_bricks_res, categories_res) {
        bricks = bricks_res[0];
        multi_bricks = multi_bricks_res[0];
        categories = categories_res[0];
        var model = display_to_model(to_display, bricks, multi_bricks, categories);
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
        var temp_multi_brick = $("#template_multi_brick").html();
        var temp_pd_im = $("#template_pd_im").html();
        var temp_af_im = $("#template_af_im").html();
        var temp_er_im = $("#template_er_im").html();
        var temp_pd_link = $("#template_pd_link").html();
        var temp_af_link = $("#template_af_link").html();
        var temp_er_link = $("#template_er_link").html();
        Mustache.parse(temp_display);
        var rendered = Mustache.render(temp_display, {sections: model},
            {
                section: temp_section,
                subsection: temp_subsection,
                subsubsection: temp_subsubsection,
                category: temp_category,
                subcategory: temp_subcategory,
                subsubcategory: temp_subsubcategory,
                goterm: temp_goterm,
                multi_brick: temp_multi_brick,
                pd_im: temp_pd_im,
                af_im: temp_af_im,
                er_im: temp_er_im,
                pd_link: temp_pd_link,
                af_link: temp_af_link,
                er_link: temp_er_link
            }
        );
        // console.log(rendered);
        $('#target').html(rendered);
    });
});
