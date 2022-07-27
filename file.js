$( window ).on( "load", function() {
        console.log( "window loaded" );
        var arr_length = $(".amr-item-list li .bundle-part-types-span").length;
        for (let index = 0; index < arr_length; index++) {
            var temp = $($(".amr-item-list li .bundle-part-types-span")[index]);
            // console.log($(temp[0]).attr('data-handle'));
            var check_temp_hendle = $(temp[0]).attr('data-handle');
            if( check_temp_hendle !== undefined ){
              if(  check_temp_hendle != "" ){
                jQuery.getJSON(window.Shopify.routes.root + 'products/'+ check_temp_hendle +'.js', function(product) {
                  // console.log( product.variants[0].id );
                  // console.log( product.variants[0].sku );
                  // /* console.log( "{{ cart.currency.symbol  }}" + product.variants[0].price / 100 ); */
                  
                  var sku__got = product.variants[0].sku;
                  ($( $(".amr-item-list li .bundle-part-types-span")[index] ).html(sku__got + " "));
                });
                
              }else{
                ($( $(".amr-item-list li .bundle-part-types-span")[index] ).html(""));
              }
            }else{
                ($( $(".amr-item-list li .bundle-part-types-span")[index] ).html(""));
            }
        }
    
});
