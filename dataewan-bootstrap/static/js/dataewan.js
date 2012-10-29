// Some custom jquery changes for the dataewan theme.
//

// Put all the admonitions in wells.
//
//

$("div.attention, div.caution, div.danger, div.error, div.hint, div.important, div.note, div.tip, div.warning, div.admonition").addClass("well");

$("div.well > .admonition-title").addClass("label");

$("div.well.attention > .admonition-title").addClass("label-sucess");
$("div.well.danger > .admonition-title").addClass("label-important");
$("div.well.warning > .admonition-title").addClass("label-warning");
$("div.well.tip > .admonition-title").addClass("label-info");
$("div.well.important > .admonition-title").addClass("label-important");
