
    //Added a shoplist    
    var shoplist={};
    shoplist.name="WEEKLY SHOPPING LIST";
    shoplist.time="2018/07/21";
    // The list in the shoplist is an array;The shopitem is included in the array.    
    shoplist.list=[
      {name:"Milk",qty:1,price:17},
      {name:"Avocado",qty:2,price:17},
      {name:"Mushroom",qty:1,price:5.45},
      {name:"Detergent",qty:1,price:11.99},
      {name:"Garbage Bags",qty:1,price:12.69},
      {name:"Hand Soap",qty:1,price:9.34},
    ];


   // Define the html layout for the element.**{name} 
   var item_html="<li id={id} class='buy_item'>{num}.{item}<div class='qty'>{qty}</div><div class='price'> {price} </div><div id='{del_id}' data-del-id='{delid}'class='del_btn'><i class='btn_shopitem icon-window-close-o'></i></div></li>";
   var total_html="<li  class='buy_item4'>Total<div class='qty'>{qty}</div><div class='price'>{price}</div></li>";
 
  function showlist(){
     $('#items_list').html("");
     var total_qty=0;
     var total_price=0;
     for(var i=0;i<shoplist.list.length;i++){
       var item=shoplist.list[i];
       var item_id="buyitem_"+i;
       var del_item_id="del_item_id"+i
       total_qty+=parseInt(item.qty);
       total_price+=parseInt(item.price);

       var current_item_html=
           item_html.replace("{delid}",i)
                    .replace("{del_id}",del_item_id)
                    .replace("{price}",item.price)
                    .replace("{qty}",item.qty)
                    .replace("{item}",item.name)
                    .replace("{num}",i+1)
                    .replace("{id}",item_id)
                     ;
       
        $("#items_list").append(current_item_html);

        // Start the delete button
        $("#"+del_item_id).click(
          function(){
            remove_item($(this).attr("data-del-id"));
          }
        );
        // End the delete button         
       

     }
   // Start the total function
    var current_total_html=
        total_html.replace("{qty}",total_qty)
                  .replace("{price}",total_price);
    $("#items_list").append(current_total_html);
   // End the total function    
//      $("#items_list").append(current_item_html);
  }
      showlist();

  //  Start Add btn functionnction //
  $(".addbtn").click(
    function(){
      shoplist.list.push(
        {
          name:$("#input_name").val(),
          qty:$("#input_qty").val(),
          price: $("#input_price").val()
        }
      );
      $("#input_name").val("");
      $("#input_qty").val("");
      $("#input_price").val("");
      showlist();
    }
  );
  //  End Add btn function //

  //    Start remove function //
  function remove_item(id){
    shoplist.list.splice(id,1);
    showlist();
  }