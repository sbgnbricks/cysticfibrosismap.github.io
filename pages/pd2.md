---
layout: default
title: About
permalink: /pd2/
---

<link rel="stylesheet" type="text/css" href="/pages/styles.css">

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.js"></script>

<script src="/pages/model_lang.js" type="text/javascript"></script>

<script>
var to_display = [
    {
        "section": "Metabolic network",
        "bricks": [],
        "sub_sections": [
            {
                "section": "Metabolic reaction",
                "bricks": [],
                "sub_sections": []
            },
            {
                "section": "Catalysis",
                "bricks": ["Catalysis of an irreversible metabolic reaction"],
                "sub_sections": []
            },
            {
                "section": "Inhibition",
                "bricks": ["Inhibition of an irreversible metabolic reaction", "Inhibition of a catalyzed irreversible metabolic reaction"],
                "sub_sections": []
            }
        ]
    },
    {
        "section": "Signalling network",
        "bricks": [],
        "sub_sections": [
            {
                "section": "Protein phosphorylation",
                "bricks": ["Phosphorylation of a protein by a kinase on an unknown site"],
                "sub_sections": []
            }

        ]
    }

]

var ratio = 1.5;
var data_dir = "/bricks3/";
</script>

# Process Description Bricks

This page presents a collection of Process Description bricks. Please note that here we show general patterns, more complex cases are possible. For example metabolic reaction can include multiple substrate and products and more than one protein or complex can catalyze a reaction.

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
    [[#bricks]]
        [[>brick]]
    [[/bricks]]
    [[#sub_sections]]
        [[>subsection]]
    [[/sub_sections]]
</script>

<script id="template_subsection" type="x-tmpl-mustache">
    [[#section]]
        [[>subcategory]]
    [[/section]]
    [[#bricks]]
        [[>brick]]
    [[/bricks]]
    [[#sub_sections]]
        [[>subsubsection]]
    [[/sub_sections]]
</script>

<script id="template_subsubsection" type="x-tmpl-mustache">
    [[#section]]
        [[>subsubcategory]]
    [[/section]]
    [[#bricks]]
        [[>brick]]
    [[/bricks]]
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

<script id="template_brick" type="x-tmpl-mustache">
    <table class="brick">
        <tr>
            <td class="pd_image"><img src="[[png_file]]"/></td>
            <td class="descr"><b>[[name]]</b>. [[description]]</td>
        </tr>
        <tr>
            <td><a href="[[sbgn_file]]"><img src="../images/sbgnml_logo.png" width="60"/></a></td>
            <td></td>
        </tr>
    </table>
</script>
