using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EngineeringMain.Models
{
    public class Paragraph
    {
        public Paragraph()
        {
            this.Titles = new HashSet<Title>();
        }
        public int ParagraphId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int SectionId { get; set; }
        public virtual Section Section { get; set; }
        public virtual ICollection<Title> Titles { get; set; }
    }
}