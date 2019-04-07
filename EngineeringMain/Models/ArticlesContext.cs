namespace EngineeringMain.Models
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Linq;

    public class ArticlesContext : DbContext
    {
        public ArticlesContext()
            : base(@"Data Source=(LocalDB)\MSSQLLocalDB;Initial Catalog=Sections;AttachDbFilename=|DataDirectory|\Articles.mdf;Integrated Security=True")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<ArticlesContext>());
        }
        public virtual DbSet<Section> Sections { get; set; }
        public virtual DbSet<Paragraph> Paragraphs { get; set; }
        public virtual DbSet<Title> Titles { get; set; }
    }
    /*public class ArticlesInitializer : DropCreateDatabaseIfModelChanges<ArticlesContext>
    {
        protected override void Seed(ArticlesContext context)
        {
            List<Section> sections = new List<Section>()
            {
                new Section{ Name = "Math", ShortDescription = "Базовые инструменты по алгебре и геометрии", Description = "Краткое изложение по работе с графикой, диаграммами, эпюрами и т.д." },
                new Section{ Name = "Mechanics", ShortDescription = "Базовые инструменты по теоретической механике" },
                new Section{ Name = "SOFM", ShortDescription = "Основы сопротивления материалов" },
                new Section{ Name = "MOMS", ShortDescription = "Основы строительной механики" }
            };
            sections.ForEach(s => context.Sections.Add(s));
            context.Paragraphs.Add(new Paragraph { Name = "new", Description = "new" });
            context.Titles.Add(new Title { Name = "new", Type = TitleType.Text, content = "new" });
            context.SaveChanges();
        }
        
    }*/
}