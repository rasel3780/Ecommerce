var ProductController = {
    LstProducts: () => {
        //data have analysis, so need call back function

        ProductService.LstProducts(function (response) {
            let productContent = '';
            $.each(response, function (index, value) {
                productContent += `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img id='pdPicture_${index}' src="${value.picture}" class="card-img-top" alt="${value.name}">
                            <div class="card-body text-center">
                                <h5 id='pdName_${index}' class="card-title">${value.name}</h5>
                                <p id='pdPrice_${index}' class="card-text">Price: ${value.price}</p>
                                <a id='btnPdAddToCart_${index}' class="btn btn-primary" onclick='ProductController.AddToCart(this)'>
                                    <i class="fas fa-shopping-cart"></i> Add to Cart
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            })

            $('#productContainer').html(productContent);
        })

    },

    AddToCart: (cntrl) => {
       
        var LstCartProducts = [];

        if (localStorage.getItem("LstCartProducts") != undefined && localStorage.getItem("LstCartProducts") != null) {
            LstCartProducts = localStorage.getItem("LstCartProducts");
        }

        console.log("----Existing Product-----");
        console.log(LstCartProducts);
        var targetIndex = $(cntrl).attr("id").split('_')[1];
        var targetImage = $('#pdPicture_' + targetIndex).attr('src');
        var targetName = $('#pdName_' + targetIndex).html();
        var targetPrice = $('#pdPrice_' + targetIndex).html();

        $('#lblCartCnt').html(parseInt($('#lblCartCnt').html()) + 1);

        var targetProduct = {
            Image: targetImage,
            Name: targetName,
            Price: targetPrice
        }

        var LstCartProductsNew = [];

        LstCartProductsNew.push(targetProduct);
        localStorage.setItem("LstCartProducts", LstCartProductsNew);

        console.log("----After adding Product-----");
        console.log(LstCartProductsNew);

        alert("Porduct Added");

    }
}