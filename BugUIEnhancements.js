name:          BugUIEnhancements
description:   Show last comment in bug's tooltip, color Priority 1 bugs Red
author:        Faisal Mansoor
version:       1.0.0.0

js:

$(".titleExtra").each( function (index) { this.title = this.innerText; });
$("tr td span").filter( function() { return $(this).text() == '1 – Fix immediately'}).addClass('criticalInfo');


css:

/* body { background-color: red !important; } */

