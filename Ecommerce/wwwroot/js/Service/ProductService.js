var ProductService = {
    LstProducts: (callback) => {
        $.get("http://localhost:58345/ProductAPI/ProductList", function (data, status) {
            callback(data);
        })
    }
}