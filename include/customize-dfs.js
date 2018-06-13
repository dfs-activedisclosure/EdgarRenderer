// This file contains customizations that are meant only for our own hosting.
// Do not publish it back to SEC's official repository!

$(document).ready(function() {
    // TFS #225850: [Interactive Data Viewer] Remove Feature Print Document and View Excel Document from Arelle Output
    $('body div table tbody tr:first-child').hide();
});
