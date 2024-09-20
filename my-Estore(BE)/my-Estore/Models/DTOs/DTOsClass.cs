namespace my_Estore.Models.DTOs
{
    public class DTOsClass
    {
    }

    public class CartDto
    {
        public int CartId { get; set; }
        public string UserName { get; set; }
        public int Status { get; set; }
        public string RecipientName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string PaymentMethod { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public List<CartItemDto> CartItems { get; set; }
    }

    public class CartItemDto
    {
        public int CartItemId { get; set; }
        public int ProductId { get; set; }
        public ProductCartDto Product { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public DateTime? PurchaseDate { get; set; }
    }

    public class ProductCartDto
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }

        public decimal Price { get; set; }

        public string Category { get; set; }

        public string Brand { get; set; }
        public string Color { get; set; }
                
        public IEnumerable<string> ProductImages { get; set; }

    }

}
