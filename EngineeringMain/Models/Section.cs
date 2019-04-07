namespace EngineeringMain.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Section
    {
        public Section()
        {
            Paragraphs = new HashSet<Paragraph>();
        }
        [Key]
        public int SectionId { get; set; }
        [Required]
        public string Name { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public string ImageCanvas { get; set; }
        public virtual ICollection<Paragraph> Paragraphs { get; set; }
    }
}
