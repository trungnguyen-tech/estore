namespace my_Estore.Models.Requests
{
    public class CartRequest
    {
        public string UserName { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
    }
    public class CheckoutRequest
    {
        public string UserName { get; set; }
        public string RecipientName { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string PaymentMethod { get; set; }
    }
}
