using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Windows.Media.Imaging;

namespace EngineeringMain.Controllers
{
    public class HidenController : Controller
    {
        // GET: Hiden
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult CreateGifFromImages(List<int> Delay)
        {
            if (Delay.Count() > 0)
            {/*
                GifBitmapEncoder gif = new GifBitmapEncoder();
                foreach(System.Drawing.Bitmap bt in Delay)
                {
                    BitmapSource src =
                    System.Windows.Interop.Imaging.CreateBitmapSourceFromHBitmap(
                        bt.GetHbitmap(),
                        IntPtr.Zero,
                        emp
                        );
                }*/
            }
            return new HttpNotFoundResult();
        }
    }
}