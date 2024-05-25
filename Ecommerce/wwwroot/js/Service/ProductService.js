var ProductService = {
    LstProducts: (callback) => {
      
        $.get("https://dummyjson.com/products", function (data, status) {
            callback(data);
        })
    },

    GetSingleProduct: (productID, callback) => {
        $.get("https://dummyjson.com/products/" + productID, function (data, status) {
            callback(data);
        })
    }
}