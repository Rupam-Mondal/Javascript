//to solve without problem we can use IFEE


function downloadscript() {
    console.log("This is an old function");
}

downloadscript();
(function(params) {
    function downloadscript() {
        console.log("New function");
    }
    downloadscript();
}) ();