//VARIABLES//
itemsc=0;
lapbtn1=document.getElementById("lapbtn1");
cartitem1=document.getElementById("cartitem1");
cartitem2=document.getElementById("cartitem2");
cartitem3=document.getElementById("cartitem3");
cartitem4=document.getElementById("cartitem4");
cartitem5=document.getElementById("cartitem5");
cartempty=document.getElementById("cartempty");
cartfull=document.getElementById("cartfull");
emptybuy=document.getElementById("emptybuy");




document.getElementById("emptybuy").onclick=function(){
window.location.href="#productproductbtn";
}



//MAIN CODE//
lapbtn1.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("lapitem1").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("lapitem1").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("lapitem1").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("lapitem1").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("lapitem1").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
lapbtn2.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("lapitem2").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("lapitem2").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("lapitem2").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("lapitem2").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("lapitem2").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
lapbtn3.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("lapitem3").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("lapitem3").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("lapitem3").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("lapitem3").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("lapitem3").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
deskbtn1.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("deskitem1").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("deskitem1").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("deskitem1").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("deskitem1").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("deskitem1").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
deskbtn2.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("deskitem2").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("deskitem2").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("deskitem2").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("deskitem2").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("deskitem2").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
deskbtn3.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("deskitem3").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("deskitem3").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("deskitem3").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("deskitem3").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("deskitem3").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
monbtn1.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("monitem1").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("monitem1").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("monitem1").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("monitem1").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("monitem1").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
monbtn2.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("monitem2").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("monitem2").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("monitem2").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("monitem2").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("monitem2").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
monbtn3.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("monitem3").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("monitem3").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("monitem3").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("monitem3").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("monitem3").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
servbtn1.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("servitem1").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("servitem1").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("servitem1").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("servitem1").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("servitem1").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
servbtn2.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("servitem2").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("servitem2").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("servitem2").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("servitem2").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("servitem2").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
servbtn3.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("servitem3").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("servitem3").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("servitem3").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("servitem3").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("servitem3").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
pcaccbtn1.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("pcaccitem1").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("pcaccitem1").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("pcaccitem1").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("pcaccitem1").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("pcaccitem1").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
pcaccbtn2.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("pcaccitem2").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("pcaccitem2").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("pcaccitem2").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("pcaccitem2").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("pcaccitem2").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
pcaccbtn3.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("pcaccitem3").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("pcaccitem3").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("pcaccitem3").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("pcaccitem3").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("pcaccitem3").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
tabbtn1.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("tabitem1").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("tabitem1").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("tabitem1").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("tabitem1").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("tabitem1").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
tabbtn2.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("tabitem2").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("tabitem2").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("tabitem2").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("tabitem2").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("tabitem2").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}
tabbtn3.onclick=function(){
    if(itemsc==0){
        document.getElementById("cartitem1").innerHTML = document.getElementById("tabitem3").innerHTML;
        cartitem1.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=1;
        alert("Item added to cart");
        
    }
    else if(itemsc==1){
        document.getElementById("cartitem2").innerHTML = document.getElementById("tabitem3").innerHTML;
        cartitem2.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=2;
        alert("Item added to cart");
        
    }
    else if(itemsc==2){
        document.getElementById("cartitem3").innerHTML = document.getElementById("tabitem3").innerHTML;
        cartitem3.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=3;
        alert("Item added to cart");
        
    }
    else if(itemsc==3){
        document.getElementById("cartitem4").innerHTML = document.getElementById("tabitem3").innerHTML;
        cartitem4.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=4;
        alert("Item added to cart");
        
    }
    else if(itemsc==4){
        document.getElementById("cartitem5").innerHTML = document.getElementById("tabitem3").innerHTML;
        cartitem5.style.visibility="visible";
        cartempty.style.visibility="hidden";
        itemsc=5;
        cartfull.style.visibility="visible";
        alert("Item added to cart");
        
    }
    else if(itemsc==5){
        alert("Cart is full...");
    }
}

checkout.onclick=function(){
    if(itemsc>=1){
    alert("Items have been bought");
    window.location.href="products.html"}
    else{
        alert("Cart is empty...")
    }
}

