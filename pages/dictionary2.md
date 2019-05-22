---
layout: default
title: About
permalink: /dictionary2/
---

<link rel="stylesheet" type="text/css" href="/pages/styles.css">

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.js"></script>

<script src="/pages/model_dic.js" type="text/javascript"></script>

<script>
var to_display = [
    {
        "section": "Metabolic network",
        "multi_bricks": [],
        "sub_sections": [
            {
                "section": "Metabolic reaction",
                "multi_bricks": ["Irreversible metabolic reaction"],
                "sub_sections": []
            }
        ]
    },
    {
        "section": "Signalling network",
        "multi_bricks": [],
        "sub_sections": [
            {
                "section": "Protein phosphorylation",
                "multi_bricks": ["Phosphorylation on an unknown site"],
                "sub_sections": []
            }

        ]
    }

]

var ratio = 1.5;
var data_dir = "/bricks3/";
</script>

<div id="target">Loading...</div>

<script id="template_display" type="x-tmpl-mustache">
[[#sections]]
    [[>section]]
[[/sections]]
</script>

<script id="template_section" type="x-tmpl-mustache">
    [[#section]]
        [[>category]]
    [[/section]]
    <!-- [[#multi_bricks]] -->
    <!--     [[>multi_brick]] -->
    <!-- [[/multi_bricks]] -->
    [[#sub_sections]]
        [[>subsection]]
    [[/sub_sections]]
</script>

<script id="template_subsection" type="x-tmpl-mustache">
    [[#section]]
        [[>subcategory]]
    [[/section]]
    [[#multi_bricks]]
        [[>multi_brick]]
    [[/multi_bricks]]
    [[#sub_sections]]
        [[>subsubsection]]
    [[/sub_sections]]
</script>

<script id="template_subsubsection" type="x-tmpl-mustache">
    [[#section]]
        [[>subsubcategory]]
    [[/section]]
    [[#multi_bricks]]
        [[>multi_brick]]
    [[/multi_bricks]]
    [[#sub_sections]]
        [[>subsubsection]]
    [[/sub_sections]]
</script>

<script id="template_category" type="x-tmpl-mustache">
    <h2>[[name]]</h2>
    [[#go_terms]]
        [[>goterm]]
    [[/go_terms]]</br>
    [[description]]
</script>

<script id="template_subcategory" type="x-tmpl-mustache">
    <h3>[[name]]</h3>
    [[#go_terms]]
        [[>goterm]]
    [[/go_terms]]</br>
    [[description]]
</script>

<script id="template_subsubcategory" type="x-tmpl-mustache">
    <h4>[[name]]</h4>
    [[#go_terms]]
        [[>goterm]]
    [[/go_terms]]</br>
    [[description]]
</script>

<script id="template_goterm" type="x-tmpl-mustache">
    <a href="[[link]]">[[go]]</a>: [[term]]
</script>

<script id="template_multi_brick" type="x-tmpl-mustache">
    <table class="brick">
        <tr>
            [[>pd_im]]
            [[>af_im]]
            [[>er_im]]
        </tr>
        <tr>
            [[>pd_link]]
            [[>af_link]]
            [[>er_link]]
        </tr>
    </table>
</script>

<script id="template_pd_im" type="x-tmpl-mustache">
    [[#pd]]
        [[#png_file]]
            <td class="pd_image"><img src="[[png_file]]"/></td>
        [[/png_file]]
        [[#text]]
            <td class="pd_image">[[text]]</td>
        [[/text]]
    [[/pd]]
</script>

<script id="template_af_im" type="x-tmpl-mustache">
    [[#af]]
        [[#png_file]]
            <td class="af_image"><img src="[[png_file]]"/></td>
        [[/png_file]]
        [[#text]]
            <td class="af_image">[[text]]</td>
        [[/text]]
    [[/af]]
</script>

<script id="template_er_im" type="x-tmpl-mustache">
    [[#er]]
        [[#png_file]]
            <td class="er_image"><img src="[[png_file]]"/></td>
        [[/png_file]]
        [[#text]]
            <td class="er_image">[[text]]</td>
        [[/text]]
    [[/er]]
</script>

<script id="template_pd_link" type="x-tmpl-mustache">
    [[#pd]]
        [[#sbgn_file]]
            <td><a href="[[sbgn_file]]"><img src="../images/sbgnml_logo.png" width="60"/></a></td>
        [[/sbgn_file]]
        [[#text]]
            <td></td>
        [[/text]]
    [[/pd]]
</script>

<script id="template_af_link" type="x-tmpl-mustache">
    [[#af]]
        [[#sbgn_file]]
            <td><a href="[[sbgn_file]]"><img src="../images/sbgnml_logo.png" width="60"/></a></td>
        [[/sbgn_file]]
        [[#text]]
            <td></td>
        [[/text]]
    [[/af]]
</script>

<script id="template_er_link" type="x-tmpl-mustache">
    [[#af]]
        [[#sbgn_file]]
            <td><a href="[[sbgn_file]]"><img src="../images/sbgnml_logo.png" width="60"/></a></td>
        [[/sbgn_file]]
        [[#text]]
            <td></td>
        [[/text]]
    [[/af]]
</script>
