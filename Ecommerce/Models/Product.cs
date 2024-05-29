using System.Runtime.Serialization;

namespace Ecommerce.Models
{
    public class Product
    {
        [DataMember]
        public string title { get; set; }
        [DataMember]
        public string thumbnail { get; set; }
        [DataMember]
        public double price { get; set; }
        [DataMember]
        public int Quantity { get; set; }
    }
}
