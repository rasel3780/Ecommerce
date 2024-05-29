var LstCartProducts = [];
var ProductController = {

    LoadProductCategory: (url) => {
        var LiCategories = "";
        ProductService.LoadCategories(function (response) {

            $.each(response, function (index, value) {
                LiCategories = LiCategories+ `<a href="${url}/${value}">${value.name}</a><br/>`
            })
            $('#ulMenu').html(LiCategories)
        })

        
    },

    LstCategoryProducts: (CategoryName) => {

        ProductService.LoadProductByCategory(CategoryName, function (response) {
            let productContent = '';
            $.each(response.products, function (index, value) { 
                productContent += `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img id='pdPicture_${value.id}' src="${value.thumbnail}" class="card-img-top" alt="${value.title}" onclick="window.location.href='/Product/SingleProduct/${value.id}'">
                            <div class="card-body text-center">
                                <h5 id='pdName_${value.id}' class="card-title" onclick="window.location.href='/Product/SingleProduct/${value.id}'">${value.title}
                                </h5>
                                <p id='pdPrice_${value.id}' class="card-text">Price: ${value.price}</p>
                                <a id='btnPdAddToCart_${value.id}' class="btn btn-primary" onclick='ProductController.AddToCart(this)'>
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

    LstProducts: () => {
        //data have analysis, so need call back function

        ProductService.LstProducts(function (response) {
            let productContent = '';
            $.each(response.products, function (index, value) {
                productContent += `
                    <div class="col-md-3 mb-4">
                        <div class="card h-100">
                            <img id='pdPicture_${value.id}' src="${value.thumbnail}" class="card-img-top" alt="${value.title}" onclick="window.location.href='/Product/SingleProduct/${value.id}'">
                            <div class="card-body text-center">
                                <h5 id='pdName_${value.id}' class="card-title" onclick="window.location.href='/Product/SingleProduct/${value.id}'">${value.title}
                                </h5>
                                <p id='pdPrice_${value.id}' class="card-text">Price: ${value.price}</p>
                                <a id='btnPdAddToCart_${value.id}' class="btn btn-primary" onclick='ProductController.AddToCart(this)'>
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
            id: targetIndex,
            Image: targetImage,
            Name: targetName,
            Price: targetPrice
        }
        LstCartProducts.push(targetProduct);

        ProductController.ArrangeProductsForCart();
        alert("Porduct Added");

    },

    DeleteFromCart: (targetIndex) => {
        debugger;
        let LstCartProducts_upd = [];
        $.each(LstCartProducts, function (index, value) {
            if (targetIndex != value.id) {
                LstCartProducts_upd.push(value)
            }
        })
       
        LstCartProducts = LstCartProducts_upd;
        localStorage.setItem("LstCartProducts", JSON.stringify(LstCartProducts));
        ProductController.ArrangeProductsForCart();
        alert("Cart updated");
    },

    ViewCart: () => {

        /*  $("#dvViewCarts").css("right", parseInt($("#dvViewCarts").css("right").replace('px',''))-20);*/
        if ($("#dvViewCartsWrapper").css('right') == "0" || $("#dvViewCartsWrapper").css('right') == "0px") {
            $("#dvViewCartsWrapper").animate({
                right: "-300"
            }, "fast");
        }
        else {
            $("#dvViewCartsWrapper").animate({
                right: "0"
            }, "fast");
        }
    },

    ArrangeProductsForCart: () => {
        $('#lblCartCnt').html("0");
        $("#dvViewCarts").html('');
        if ($('body').find('#dvDetailsCartsProduct').length > 0) {
            $("#dvDetailsCartsProduct").html('');
        }

        if (LstCartProducts.length > 0) {
            //cart count update
            $('#lblCartCnt').html(LstCartProducts.length);

       
            $.each(LstCartProducts, function (index, value) {
                $("#dvViewCarts").append(`
                    <div id="dvCartWrapper_${value.id}" style="clear:both; display:black; border:1px solid #eee; height:100px; width:100%;">
                        <div class="row" style="padding:5px;">
                            <div class="col col-sm-3">
                                <img  src="${value.Image}" style="width: 100px;" onclick="window.location.href='/Product/SingleProduct/${value.id}'" />
                            </div>
                            <div class="col col-sm-3">
                                <span onclick="window.location.href='/Product/SingleProduct/${value.id}'">${value.Name}</span>
                            </div>
                            <div class="col col-sm-3">
                                <span>${value.Price}</span>
                            </div>
                            <div class="col col-sm-3">
                                <span id="delCartProduct_${value.id}" style="padding:3px; background:red;color:white; cursor:pointer" onclick="javascript:ProductController.DeleteFromCart(${value.id})">x</span>
                            </div>
                        </div>
                     </div>
                `);
            })

            //Checkout details update
            if ($('body').find('#dvDetailsCartsProduct').length > 0) {
                $.each(LstCartProducts, function (index, value) {
                    $("#dvDetailsCartsProduct").append(`
                 <div id='dvCheckOutCartWrapper_${value.id}' style="clear:both; display:black; border:1px solid #eee; height:100px; width:100%;">
                     <div class="row" style="padding:5px;">
                         <div class="col col-sm-3">
                             <img src="${value.Image}" onclick="window.location.href='/Product/SingleProduct/${value.id}'" style="width: 100px; " />
                         </div>
                         <div class="col col-sm-3">
                             <span onclick="window.location.href='/Product/SingleProduct/${value.id}'">${value.Name}</span>
                         </div>
                         <div class="col col-sm-3">
                             <span>${value.Price}</span>
                         </div>
                         <div class="col col-sm-3">
                             <span id='delCheckOutProduct_${value.id}' style="padding:3px; background:red;color:white; cursor:pointer" onclick="javascript:ProductController.DeleteFromCart(${value.id})">x</span>
                         </div>
                     </div>
                  </div>
             `);
                })
            }
            

        }
       
    },

    PrepareCartForCheckoutUI: (url) => {
        if (LstCartProducts.length > 0) {
            localStorage.setItem("LstCartProducts", JSON.stringify(LstCartProducts));
            window.location.href = url;
        }
        else {
            alert('Cart Empty');
        }
    },

    LoadCartCommon: () => {
        if (localStorage.getItem("LstCartProducts") != null && localStorage.getItem("LstCartProducts") != undefined) {
            LstCartProducts = JSON.parse(localStorage.getItem("LstCartProducts"));
            $('#lblCartCnt').html(LstCartProducts.length);
            ProductController.ArrangeProductsForCart();

        }
    },

    SingleProduct: (ProductID) => {
        ProductService.GetSingleProduct(ProductID, function (response) {

            var ImageHtml=''
            $.each(response.images, function (index, value) {
                if (index == 0) {
                    ImageHtml = ImageHtml + `<div class="col" style="width:100px; height:100px;">
                            <img src="${value}" onclick="$('#imgTargetBigView').attr('src','${value}')" style="width:100px; height:100px;" />
                        </div>`
                }

                else {
                    ImageHtml = ImageHtml + `<div class="col" style="width:100px; height:100px;margin-left:5px">
                            <img src="${value}" onclick="$('#imgTargetBigView').attr('src','${value}')" style="width:100px; height:100px;" />
                        </div>`
                }


               

            })

            $('#dvSingleViewProduct').html(
                `
                <div class="row">
                <div class="col col-4">
                    <div class="row">
                        <div class="col col-12" style="width:400px; height:264px">
                            <img id="imgTargetBigView" src="${response.images[0]}" style="width:100%; height:264px" />
                        </div>
                    </div>

                    <div class="row" style="margin-top:10px">
                        ${ImageHtml}
                    </div>
                </div>

                <div class="col col-8">
                    <span>${response.title}</span><br />
                    <span>${response.description}</span><br />
                    <span>${response.price}</span><br />
                    <span class="btn btn-primary">Add To Cart</span><br />
                </div>
            </div>
 
                `);
        })
    }


}