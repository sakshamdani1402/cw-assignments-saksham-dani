using Microsoft.AspNetCore.Mvc;
using Models;
using DatabaseAccess;
namespace mvc_assignment.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : Controller
{
    private readonly ILogger<ProductController> _logger;
    public ProductController(ILogger<ProductController> logger)
    {
        _logger = logger;
    }
     
    [HttpGet]
    [Route("getall/{page}")]
    public ResultModel GetAll(int page, [FromQuery(Name = "Brand")] string Brand = "",
                                    [FromQuery(Name = "Category")] string Category = "",
                                    [FromQuery(Name = "Price")] string Price = "")
    {
        return LoadData.GetResults(page,Brand,Category,Price);
    }
}