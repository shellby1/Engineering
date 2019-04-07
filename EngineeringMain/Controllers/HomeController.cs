using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EngineeringMain.Models;

namespace EngineeringMain.Controllers
{
    public class HomeController : Controller
    {
        ArticlesContext DB = new ArticlesContext();
        public ActionResult Index()
        {
            List<Section> Sections;
                Sections = DB.Sections.ToList();
            return View(Sections);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult TempDrawing()
        {
            return View();
        }
    }
}