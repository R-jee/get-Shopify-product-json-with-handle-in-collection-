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




  $( window ).on( "load", function() {
    console.log( "window loaded" );
    var arr_length = $(".amr-item-list li .bundle-part-types .bundle-part-types-span").length;
    // console.log( arr_length );
    for (let index = 0; index < arr_length; index++) {
        var temp = $($(".amr-item-list li .bundle-part-types .bundle-part-types-span")[index]);
        // console.log( temp );
        var check_temp_hendle = $(temp[0]).attr('data-handle');
        // console.log( check_temp_hendle );
        
        if( check_temp_hendle !== undefined ){
          if(  check_temp_hendle != "" ){
            jQuery.getJSON(window.Shopify.routes.root + 'products/'+ check_temp_hendle +'.js', function(product) {
              // console.log( product.variants[0].id );
              // console.log( product.variants[0].sku );
              // /* console.log( "{{ cart.currency.symbol  }}" + product.variants[0].price / 100 ); */
              
              var sku__got = product.variants[0].sku;
              ($( $(".amr-item-list li .bundle-part-types .bundle-part-types-span")[index] ).html(sku__got + "  "));
              ($( $(".amr-item-list li .bundle-part-types .bundle-part-types-span")[index] ).attr("data-single-price", ( product.variants[0].price) ));
              
            });
            
          }else{
            ($( $(".amr-item-list li .bundle-part-types .bundle-part-types-span")[index] ).html(""));
            ($( $(".amr-item-list li .bundle-part-types .bundle-part-types-span")[index] ).attr("data-single-price", ("0") ));
          }
        }else{
            ($( $(".amr-item-list li .bundle-part-types .bundle-part-types-span")[index] ).html(""));
            ($( $(".amr-item-list li .bundle-part-types .bundle-part-types-span")[index] ).attr("data-single-price", ("0") ));
        }
  
    } // end for loop
    
  }); // end ready function



$( window ).on( "load", function() {
  setTimeout(function(){
    console.log("ready");
      var temp_____ = $(".bundle-part-types.desc-color").length; // length is 13
      for (var index = 0; index < temp_____ ; index++) {
         // console.log( $($(".bundle-part-types.desc-color span")[0]).attr("data-single-price"));
          var single_list_prod__ = $($(".bundle-part-types.desc-color")[index]).children();
          // console.log( single_list_prod__ );
          var single_list_prod_length = $($(".bundle-part-types.desc-color")[index]).children().length;
          // console.log( single_list_prod_length ); // block child length of bundle products
          
        var list_product_bundle_total_sum = 0;
        for (var c_prod = 1; c_prod < single_list_prod_length ; c_prod++) {
          var temp_price = $($($(".bundle-part-types.desc-color")[index]).children()[c_prod]).attr("data-single-price");
          // console.log(temp_price);
          list_product_bundle_total_sum = list_product_bundle_total_sum + parseInt(temp_price);
        }
        // console.log(list_product_bundle_total_sum);
        $($(".nws_invidual_product .ab.entry-price.price .ProductPrice-")[index]).text( "{{ cart.currency.symbol  }}" + (list_product_bundle_total_sum / 100) );
        
        
        
      } // end for loop
      
    }, 5000);

});
  
