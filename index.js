 circle1=document.getElementById("ad1circle1");
 circle2=document.getElementById("ad1circle2");
 circle3=document.getElementById("ad1circle3");
 ad1btn2=document.getElementById("ad1btn2");
 ad1btn3=document.getElementById("ad1btn3");
 a=1;
 circle1.style.boxShadow ="0px 0px 15px white";
circle1.style.backgroundColor="black";
circle2.onclick= function(){
    circle2.style.backgroundColor="black";
    circle1.style.backgroundColor="white";
    circle3.style.backgroundColor="white";
    document.getElementById("ad1").style.backgroundImage = "url(images/ad1.avif)";
    document.getElementById("ad1p1").innerHTML = "You Dream it, Electra does it";
    circle2.style.boxShadow ="0px 0px 15px white";
    circle1.style.boxShadow = "none";
    circle3.style.boxShadow = "none";
    a=2
    document.getElementById("ad1p2").innerHTML = "Entertainment & personal use, education & hobbies Streaming, entertainment, video calls, email, social media, all that and much more you can find at our store."
}
circle3.onclick= function(){
    circle2.style.backgroundColor="white";
    circle1.style.backgroundColor="white";
    circle3.style.backgroundColor="black";
    document.getElementById("ad1").style.backgroundImage = "url(images/ad3.avif)";
    document.getElementById("ad1p1").innerHTML = "Desktop Computers and More";
    circle3.style.boxShadow ="0px 0px 15px white";
    circle1.style.boxShadow = "none";
    circle2.style.boxShadow = "none";
    a=3
    document.getElementById("ad1p2").innerHTML = "For work, play, gaming, design, or entertainment, there’s an HP desktop or laptop or All-in-One just for you at great prices, Browse the Limited Deals Now.";
}
circle1.onclick= function(){
    circle2.style.backgroundColor="white";
    circle1.style.backgroundColor="black";
    circle3.style.backgroundColor="white";
    circle1.style.boxShadow ="0px 0px 15px white";
    circle2.style.boxShadow = "none";
    circle3.style.boxShadow = "none";
    a=1
    document.getElementById("ad1").style.backgroundImage = "url(images/ad2.avif)";
    document.getElementById("ad1p1").innerHTML = "Smarter Shopping Starts Here";
    document.getElementById("ad1p2").innerHTML = "Shop confidently with the Dell Price Match and Price Guarantee on a very wide selection of products, plus you can earn Dell Rewards and much more."
}
ad1btn3.onclick= function(){
    if(a==1){
        
        circle2.style.backgroundColor="black";
        circle1.style.backgroundColor="white";
        circle3.style.backgroundColor="white";
        document.getElementById("ad1").style.backgroundImage = "url(images/ad1.avif)";
        document.getElementById("ad1p1").innerHTML = "You Dream it, Electra does it";
        circle2.style.boxShadow ="0px 0px 15px white";
        circle1.style.boxShadow = "none";
        circle3.style.boxShadow = "none";
        document.getElementById("ad1p2").innerHTML = "Entertainment & personal use, education & hobbies Streaming, entertainment, video calls, email, social media, all that and much more you can find at our store."
        a=2    
        }
        else if(a==2){
            circle2.style.backgroundColor="white";
            circle1.style.backgroundColor="white";
            circle3.style.backgroundColor="black";
            document.getElementById("ad1").style.backgroundImage = "url(images/ad3.avif)";
            document.getElementById("ad1p1").innerHTML = "Desktop Computers and More";
            circle3.style.boxShadow ="0px 0px 15px white";
            circle1.style.boxShadow = "none";
            circle2.style.boxShadow = "none";
            document.getElementById("ad1p2").innerHTML = "For work, play, gaming, design, or entertainment, there’s an HP desktop or laptop or All-in-One just for you at great prices, Browse the Limited Deals Now.";
            a=3        
        }
        else if(a==3){
            circle2.style.backgroundColor="white";
            circle1.style.backgroundColor="black";
            circle3.style.backgroundColor="white";
            circle1.style.boxShadow ="0px 0px 15px white";
            circle2.style.boxShadow = "none";
            circle3.style.boxShadow = "none";
            document.getElementById("ad1").style.backgroundImage = "url(images/ad2.avif)";
            document.getElementById("ad1p1").innerHTML = "Smarter Shopping Starts Here";
            document.getElementById("ad1p2").innerHTML = "Shop confidently with the Dell Price Match and Price Guarantee on a very wide selection of products, plus you can earn Dell Rewards and much more."
            a=1        
        }
    }
    ad1btn2.onclick=function(){
        if(a==3){
            circle2.style.backgroundColor="black";
            circle1.style.backgroundColor="white";
            circle3.style.backgroundColor="white";
            document.getElementById("ad1").style.backgroundImage = "url(images/ad1.avif)";
            document.getElementById("ad1p1").innerHTML = "You Dream it, Electra does it";
            circle2.style.boxShadow ="0px 0px 15px white";
            circle1.style.boxShadow = "none";
            circle3.style.boxShadow = "none";
            document.getElementById("ad1p2").innerHTML = "Entertainment & personal use, education & hobbies Streaming, entertainment, video calls, email, social media, all that and much more you can find at our store."
            a=2   
        }
        else if(a==2){
            circle2.style.backgroundColor="white";
            circle1.style.backgroundColor="black";
            circle3.style.backgroundColor="white";
            circle1.style.boxShadow ="0px 0px 15px white";
            circle2.style.boxShadow = "none";
            circle3.style.boxShadow = "none";
            document.getElementById("ad1").style.backgroundImage = "url(images/ad2.avif)";
            document.getElementById("ad1p1").innerHTML = "Smarter Shopping Starts Here";
            document.getElementById("ad1p2").innerHTML = "Shop confidently with the Dell Price Match and Price Guarantee on a very wide selection of products, plus you can earn Dell Rewards and much more."
            a=1     
        }
        else if(a==1){
            circle2.style.backgroundColor="white";
            circle1.style.backgroundColor="white";
            circle3.style.backgroundColor="black";
            document.getElementById("ad1").style.backgroundImage = "url(images/ad3.avif)";
            document.getElementById("ad1p1").innerHTML = "Desktop Computers and More";
            circle3.style.boxShadow ="0px 0px 15px white";
            circle1.style.boxShadow = "none";
            circle2.style.boxShadow = "none";
            document.getElementById("ad1p2").innerHTML = "For work, play, gaming, design, or entertainment, there’s an HP desktop or laptop or All-in-One just for you at great prices, Browse the Limited Deals Now.";
            a=3     

        }
    }
    document.getElementById("ad4btn").onclick=function(){
        window.location.href="products.html";
    }
    document.getElementById("homeendproducts").onclick=function(){
        window.location.href="products.html";
    }
    document.getElementById("homeendabout").onclick=function(){
        window.location.href="about.html";
    }
    document.getElementById("homeendcontact").onclick=function(){
        window.location.href="contact.html";
    }
    document.getElementById("homeendaccount").onclick=function(){
        window.location.href="account.html";
    }
    document.getElementById("homeendcart").onclick=function(){
        window.location.href="cart.html";
    }
    document.getElementById("homeendback").onclick=function(){
        window.location.href="#llogo";
    
    }
   homesquare1.onclick=function(){
    window.location.href="products.html";
   }
   homesquare2.onclick=function(){
    window.location.href="products.html";
   }
   homesquare3.onclick=function(){
    window.location.href="products.html";
   }
   homesquare4.onclick=function(){
    window.location.href="products.html";
   }
   homesquare5.onclick=function(){
    window.location.href="products.html";
   }
   homesquare6.onclick=function(){
    window.location.href="products.html";
   }

    




