(
    function (window, document)
    {
        var Sheet = window.Sheet;
        var sheet = new Sheet(document.getElementById("VectorSum"), 1000, 600);
        window.sheet = sheet;
        sheet.drawCoordSys();
        sheet.drawVectors();
    }
)(window, document);