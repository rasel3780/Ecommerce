var ProductController = {
    LstProducts: () => {
        //data have analysis, so need call back function

        ProductService.LstProducts(function (response) {
            let productContent = '';
            $.each(response, function (index, value) {
                productContent += `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img src="${value.picture}" class="card-img-top" alt="${value.name}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${value.name}</h5>
                                <p class="card-text">Price: ${value.price}</p>
                                <button class="btn btn-primary">
                                    <i class="fas fa-shopping-cart"></i> Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            })

            $('#productContainer').html(productContent);
        })

    }
}