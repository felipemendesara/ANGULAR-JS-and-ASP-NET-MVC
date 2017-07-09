using Angular_1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular_1.Controllers
{
    public class DBController : Controller
    {
        // GET: DB
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetProduto()
        {
            Produtos _produto = null;

            using (CadastroEntities dc = new CadastroEntities())
            {
                _produto = dc.Produtos.OrderByDescending(p => p.Id).Take(1).FirstOrDefault();
            }
            return new JsonResult { Data = _produto, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
    }
}