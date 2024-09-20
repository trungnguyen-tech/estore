using System.Security.Cryptography.X509Certificates;

namespace my_Estore.Models.Requests
{

    public class ProductDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }

        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Stock { get; set; }
        public string Category { get; set; }

        public string Brand { get; set; }
        public string Color { get; set; }
        public IEnumerable<string> ProductImages { get; set; }
    }
    public class CreateProductRequest
    {
        public string ProductName { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set; }
        public int? Stock { get; set; }
        public string Category { get; set; }
        public string Brand { get; set; }
        public string Color { get; set; }
    }

    public class UppdateProductRequest
    {
        public string ProductName { get; set; }
        public string Description { get; set; }
        public decimal? Price { get; set;}
        public int? Stock { get; set;}
        
        public string Category { get; set; }

        public string Brand { get; set; }

    }


}
