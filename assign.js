$(document).ready(function(e){
    jsonObject.products.forEach((i)=>loadProducts(i));

});

// function example(){
//     jsonObject.products.forEach((i)=>loadProducts(i));

// }
function loadProducts(data){

var mydata = document.createElement('div');
   mydata.innerHTML =  '<div class="card1" id="'+ data.e_id +'"><div class="box2">' +
   '<img src="' + data.image +'">' +
   '<div class="myname">' +
   '<p class="p1">' + data.title +'</p>' +
   '<p class="p2">' + data.description +'</p>' + 
   '<p class="p3">' + data.content +'</p>' +
   '</div>' +'</div>';
//    +
// '</div>'+'<div class="box1" style="display:none;">'+
// '<p class = "para">'+ data.details +'</p>'+

// '<button type="button" class="btn">View Details</button>'+ '</div>';
//document.getElementById("content1").appendChild(mydata);
//console.log(data);
//}
// example();


mydata.addEventListener("mouseover", function(){
    //var g_id = e.getElementById(e.e_id);

    var g_id = document.getElementById(data.e_id);
    g_id.style.display="none";
    mydata.innerHTML =   '<div class="box1" style="display:block;" id="'+ data.e_id +'">'+
                        '<p class="para">'+ data.details + '</p>'+
                        '<button type="button" class="btn btn-primary btn-sm" id="btn">View Details</button>'+
                    '</div>';
    
    //document.getElementById("card1").style.display="block";
    //console.log(e.target);
});
mydata.addEventListener("mouseleave", function(){

    mydata.innerHTML =  '<div class="card1" id="'+ data.e_id +'" style="display:inline-flex;"><div class="box2">' +
   '<img src="' + data.image +'">' +
   '<div class="myname">' +
   '<p class="p1">' + data.title +'</p>' +
   '<p class="p2">' + data.description +'</p>' + 
   '<p class="p3">' + data.content +'</p>' +
   '</div>' +'</div>';
});
document.getElementById("content1").appendChild(mydata);

     }