$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});

// function example(){
//     jsonObject.products.forEach((i)=>loadProducts(i));

// }
function loadProducts(data){

var mydata = document.createElement('div');
   mydata.innerHTML =  '<div class="box2">' +
   '<img src="' + data.image +'">' +
   '<div class="myname">' +
   '<p class="p1">' + data.title +'</p>' +
   '<p class="p2">' + data.description +'</p>' + 
   '<p class="p3">' + data.content +'</p>' +
   '</div>' +
'</div>';
document.getElementById("content1").appendChild(mydata);
//console.log(data);
}
// example();