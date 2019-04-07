(
    function (window, document)
    {
        var cnt2 = document.getElementById("Draw2");
        var cnvs2 = new Drawer(cnt2);
        cnvs2.drawCoord();
        cnvs2.drawVectorByCoord(0, 0, 100, 200);
        cnvs2.drawVectorByCoord(100, 200, -100, 50);
        cnvs2.drawVectorByCoord(0, 0, -100, 50);
    }
)(window, document);