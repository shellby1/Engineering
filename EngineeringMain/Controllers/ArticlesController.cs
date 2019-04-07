using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EngineeringMain.Models;

namespace EngineeringMain.Controllers
{
    public class ArticlesController : Controller
    {
        ArticlesContext DB = new ArticlesContext();
        // GET: Articles
        public ActionResult Index(int SectionId)
        {
            List<Paragraph> paragraphs;
            Section section =
                DB
                .Sections
                .Where(s => s.SectionId == SectionId)
                .First();
            paragraphs = section.Paragraphs.ToList();
            ViewBag.Title = section.Name;
            return View(paragraphs);
        }
        // GET: Paragrapg
        public ActionResult Paragraph(int ParagraphId)
        {
            List<Title> titles;
            Paragraph paragraph =
                DB
                .Paragraphs
                .Where(s => s.ParagraphId == ParagraphId)
                .First();
            titles =
                paragraph
                .Titles
                .ToList();
            ViewBag.Title = paragraph.Name;
            return View(paragraph);
        }
    }
}