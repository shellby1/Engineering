using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EngineeringMain.Models
{
    public class Title
    {
        public int TitleId { get; set; }
        public string Name { get; set; }
        public TitleType Type { get; set; }
        public string Content { get; set; }
        public int ParagraphId { get; set; }
        public virtual Paragraph Paragraph { get; set; }
    }
    public enum TitleType
    {
        Text,
        Image,
        Canvas,
        Table
    }
}