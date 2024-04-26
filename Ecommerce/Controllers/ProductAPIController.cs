using Ecommerce.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Controllers
{
    public class ProductAPIController : Controller
    {
        public IActionResult ProductList()
        {
            List<Product> productsList = new List<Product>();
            
            Product product = new Product();
            product.Name = "Laptop-1";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 81500;
            product.Quantity = 15;
            productsList.Add(product);

            product = new Product();
            product.Name = "Laptop-2";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 36500;
            product.Quantity = 45;
            productsList.Add(product);

            product = new Product();
            product.Name = "Laptop-3";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 52000;
            product.Quantity = 45;
            productsList.Add(product);

            product = new Product();
            product.Name = "Laptop-3";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 52000;
            product.Quantity = 45;
            productsList.Add(product);

            product = new Product();
            product.Name = "Laptop-3";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 52000;
            product.Quantity = 45;
            productsList.Add(product);

            product = new Product();
            product.Name = "Laptop-3";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 52000;
            product.Quantity = 45;
            productsList.Add(product);

            product = new Product();
            product.Name = "Laptop-3";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 52000;
            product.Quantity = 45;
            productsList.Add(product);

            product = new Product();
            product.Name = "Laptop-3";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 52000;
            product.Quantity = 45;
            productsList.Add(product);


            product = new Product();
            product.Name = "Laptop-3";
            product.Picture = "https://img.freepik.com/free-vector/screen-tv-mockup_1053-198.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714003200&semt=sph";
            product.Price = 52000;
            product.Quantity = 45;
            productsList.Add(product);


            return Ok(productsList);
        }
    }
}
