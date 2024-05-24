var LstCartProducts = [];
var ProductController = {
    LstProducts: () => {
        //data have analysis, so need call back function

        ProductService.LstProducts(function (response) {
            let productContent = '';
            $.each(response.products, function (index, value) {
                productContent += `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img id='pdPicture_${index}' src="${value.thumbnail}" class="card-img-top" alt="${value.title}">
                            <div class="card-body text-center">
                                <h5 id='pdName_${index}' class="card-title">${value.title}</h5>
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
        var targetIndex = $(cntrl).attr("id").split('_')[1];
        var targetImage = $('#pdPicture_' + targetIndex).attr('src');
        var targetName = $('#pdName_' + targetIndex).html();
        var targetPrice = $('#pdPrice_' + targetIndex).html();

        
        var targetProduct = {
            Image: targetImage,
            Name: targetName,
            Price: targetPrice
        }
        LstCartProducts.push(targetProduct);

        ProductController.ArrangeProductsForCart();
        alert("Porduct Added");

    },

    ViewCart: () => {

        /*  $("#dvViewCarts").css("right", parseInt($("#dvViewCarts").css("right").replace('px',''))-20);*/
        if ($("#dvViewCarts").css('right') == "0" || $("#dvViewCarts").css('right') == "0px") {
            $("#dvViewCarts").animate({
                right: "-300"
            }, "fast");
        }
        else {
            $("#dvViewCarts").animate({
                right: "0"
            }, "fast");
        }
        //if (LstCartProducts.length > 0) {
        //    $.each(LstCartProducts, function (index, value) {

        //    })
        //}
    },
    ArrangeProductsForCart: () => {
        if (LstCartProducts.length > 0) {
            //cart count update
            $('#lblCartCnt').html(LstCartProducts.length); 

            //view cart update
            $("#dvViewCarts").html('');
            $.each(LstCartProducts, function (index, value) {
                $("#dvViewCarts").append(`
                    <div style="clear:both; display:black; border:1px solid #eee; height:100px; width:100%;">
        <div class="row" style="padding:5px;">
            <div class="col col-sm-3">
                <img src="${value.Image}" style="width: 100px; " />
            </div>
            <div class="col col-sm-3">
                <span>${value.Name}</span>
            </div>
            <div class="col col-sm-3">
                <span>${value.Price}</span>
            </div>
            <div class="col col-sm-3">
                <span>x</span>
            </div>
        </div>
    </div>
    `);
            })
        }
    }

}