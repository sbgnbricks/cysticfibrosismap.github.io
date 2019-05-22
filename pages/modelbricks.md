---
layout: default
title: ModelBricks
permalink: /modelbricks/
---

# ModelBricks

Complex molecular networks often can be constructed from simpler modules that we call bricks. The adaptive behaviour of living cells is shown to be represented as a combination of functional motifs that reproduce different patterns of cell response to a signal – from simple linear and sigmoidal responses to more complex behaviours like toggle switches and oscillators. The topology of these modules can be captured in graphical form and represented as a wiring diagram in SBGN. However, to understand why these models work the way they do, one must develop a precise mathematical description of molecular circuitry and describe it in a different type of a brick, that we call an executable brick or a <strong>ModelBrick</strong>.

## Process Description ModelBricks

A computable ModelBrick is essentially a small model that is thoroughly annotated, and minted a DOI for a permanent reference. A ModelBrick is a small model that adds a mathematical description and simulation context to an SBGN brick. To enable reproducibility, it is thoroughly annotated, and minted a DOI for a permanent reference. Element annotations will include stable identifiers such as <a href="https://www.ncbi.nlm.nih.gov/pubmed/">PubMed</a> PMIDs for models and parameters, <a href="http://www.geneontology.org/">Gene Ontology</a> GO terms for processes, <a href="http://www.ebi.ac.uk/sbo/main/">Systems Biology Ontology</a> SBO terms for model elements, <a href="https://reactome.org/">Reactome</a> IDs for reactions, <a href="https://www.ebi.ac.uk/chebi/">ChEBI</a> and <a href="https://www.uniprot.org/">UniProt</a> for species, as well as identifiers from other public databases such as <a href="https://www.genome.jp/kegg/">KEGG</a>.<br>

The ModelBricks project is led by Michael Blinov (<a href="mailto:blinov@uchc.edu">blinov@uchc.edu</a>) and Ann Cowan (<a href="mailto:acowan@uchc.edu">acowan@uchc.edu</a>). It is a part of the Virtual Cell modeling and simulation framework (<a href="http://vcell.org">http://vcell.org</a>). VCell BioModels composed of ModelBricks will be interoperable with the <a href="http://sbml.org/Documents/Specifications/SBML_Level_3/Packages/Hierarchical_Model_Composition_%28comp%29">SBML Hierarchical Model Composition standard</a>. Different modeling techniques can be used to link multiplex bricks to computable ModelBricks. A ModelBrick comprising a reaction network is a computable extension of of SBGN-PD representation. Kinetic laws and numerical parameters need to be added to such brick in order to make it computable. Rule-based features may be added to identify each species in a model as a composition of uniquely identifiable molecules, and accounts for internal species connectivity and posttranslational modifications. <br>

Tyson and collaborators suggested in their seminal paper "Sniffers, buzzers, toggles and blinkers: dynamics of regulatory
and signaling pathways in the cell" (<a href="https://www.ncbi.nlm.nih.gov/pubmed/12648679">PubMed ID:12648679</a>) that complex molecular networks, like electrical circuits, can be constructed from simpler modules. Below we implement these modules as SBGN bricks and as computable ModelBricks reproducing plots from this paper. 



### Protein synthesis and degradation

<table>
    <tr>
    <td style="width:410px; text-align:center; font-size:90%;"><img src="/images/modelbricks/LinearSBGN.PNG" width="600"/></td>
    <td style="width:410px; text-align:center; font-size:90%;"><img src="/images/modelbricks/LinearResponse.PNG" width="200"/></td>
    </tr>
</table>

If synthesis of a protein R is regulated by a signal S, with a constant degradation, then R is characterised by a <strong>linear response</strong>: the amount of R is directly proportional to the strength of signal S. SBGN-PD brick alove provides visualisation of this module. The VCell model <a href="/modelbricks/Tyson_2003_1a.vcml">Tyson_2003_1a.vcml</a> provides an executable counterpart for this brick. 

 <div class="img" style="font-size:90%; text-align:center;"><br />
    <a href="/modelbricks/LinearResponse.graphml">SBGN-PD brick</a> &ensp; 
    <a href="/modelbricks/Tyson_2003_1a.vcml">ModelBrick (VCell)</a> &ensp; 
    <a href="/modelbricks/Tyson_2003_1a.xml">ModelBrick (SBML)</a>
</div>

### Protein phosphorylation

<table>
    <tr>
    <td style="width:360px; text-align:center; font-size:90%;"><img src="/images/modelbricks/PhosphorylationSBGN.PNG" width="600"/></td> 
 <td style="width:190px; text-align:center; font-size:90%;"><img src="/images/modelbricks/HyperbolicResponse.PNG" width="200"/> </td> 
 <td style="width:210px; text-align:center; font-size:90%;"><img src="/images/modelbricks/SigmoidalResponse.PNG" width="170"/></td>      </tr>
</table>

If phosphorylation of a protein R is regulated by a signal S, then the amount of phosphorylated RP is characterised by either a <strong>hyperbolic</strong> or a <strong>sigmoidal response</strong>. The visualisation cannot provide the exact response pattern, as it depends on the kinetics of phosphorylation and dephosphorylation reactions. Below is SBGN brick that includes visualisation of this motif. This brick corresponds to two different executable bricks reproducing both signal-response patterns: VCell BioModel <a href="/modelbricks/Tyson_2003_1b.vcml">Tyson_2003_1b.vcml</a> provides an executable counterpart for this brick for a hyperbolic response, while VCell BioModel <a href="/modelbricks/Tyson_2003_1c.vcml">Tyson_2003_1c.vcml</a> provides an executable counterpart for a sigmoidal response.

 <div class="img" style="font-size:90%; text-align:center;"><br />
 <a href="/modelbricks/PhosphorylationSBGN.graphml">SBGN-PD brick</a> &ensp; 
 <a href="/modelbricks/Tyson_2003_1b.vcml">ModelBrick (VCell) Hyperbolic</a> &ensp; 
 <a href="/modelbricks/Tyson_2003_1c.vcml">ModelBrick (VCell) Sigmoidal</a> &ensp;
 <a href="/modelbricks/Tyson_2003_1b.xml">ModelBrick (SBML) Hyperbolic</a> &ensp;
<a href="/modelbricks/Tyson_2003_1c.xml">ModelBrick (SBML) Sigmoidal</a>
</div>

### Perfectly adapted signal-response

<table>
    <tr>
    <td style="width:380px; text-align:center; font-size:90%;"><img src="/images/modelbricks/PerfectlyAdaptedSBGN.PNG" width="600"/></td> 
 <td style="width:410px; text-align:center; font-size:90%;"><img src="/images/modelbricks/PerfectlyAdaptedResponse.PNG" width="200"/></td>
    </tr>
</table>

Although the signalling pathway exhibits a transient response to changes in signal strength, its steady-state response R is independent of S. Such behaviour is typical of chemotactic systems, which respond to an abrupt change in attractants or repellents, but then adapt to a constant level of the signal. The human sense of smell operates the same way. Below is SBGN brick that provides visualisation of this motif. The VCell BioModel <a href="/modelbricks/Tyson_2003_1d.vcml">Tyson_2003_1d.vcml</a> provides an executable counterpart for this brick.

 <div class="img" style="font-size:90%; text-align:center;"><br />
 <a href="/modelbricks/PerfectlyAdaptedSBGN.graphml">SBGN-PD brick</a> &ensp; 
 <a href="/modelbricks/Tyson_2003_1b.vcml">ModelBrick (VCell) </a> &ensp; 
 <a href="/modelbricks/Tyson_2003_1b.xml">ModelBricks (SBML)</a> &ensp;
</div>
