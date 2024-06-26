
// Code for cursor moving
var cursor = document.querySelector(".cursor");
var blur   = document.querySelector(".blur");
document.addEventListener("mousemove", function(details){
    cursor.style.left = details.x  + "px"
    cursor.style.top  = details.y +"px"
    blur.style.left = details.x - 200 + "px"
    blur.style.top  = details.y - 200 + "px"
})

//code for cursor when hovering
var h4all = document.querySelectorAll("#navbar h4 , #navbar button , #food-text button , #page-1 #page-1-arrow , .card-sec .card , #img-move img , #green-box-sec .green-box");
var menu = document.querySelector("#navbar h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    // document.addEventListener("mousemove", function(details){
    //     cursor.style.left = details.x + "px"
    //     cursor.style.top  = details.y +"px"
    //     blur.style.left = details.x - 200 + "px"
    //     blur.style.top  = details.y - 200 + "px"
    // });
    cursor.style.scale = 4;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
    cursor.style.zIndex = "9999";

  });
  elem.addEventListener("mouseleave", function () {
    // document.addEventListener("mousemove", function(details){
    //     cursor.style.left = details.x  + "px"
    //     cursor.style.top  = details.y  + "px"
    //     blur.style.left = details.x - 200 + "px"
    //     blur.style.top  = details.y - 200 + "px"
    // });
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});


// Gsap code for navbar droping menu
var tl = gsap.timeline();
tl.from("#navbar img, .main-menu-1 h4, .main-menu-2 button", {
    y : -100,
    duration : 0.8,
    delay : 0.5,
    opacity : 0,
    stagger : 0.3,
})

tl.from("#page-1 h3, #page-1 h1, #page-1 p", {
    scale : 0,
    opacity : 0,
    stagger : 0.3
})

//code for about text appearing
var about = gsap.timeline();
about.from(".about-text h3 , .about-text p" , {
    scale : 0,
    opacity : 0,
    stagger : 0.3,
    scrollTrigger : {
        trigger : ".about-text",
        scroller : "body",
        // markers : true,
        start : ("top 60%"),
        end : ("top 40%"),
        scrub : 1.5
    }
})

//code for about images appearing
gsap.from(".about img" , {
    scale : 0,
    opacity : 0,
    stagger : 0.3,
    scrollTrigger : {
        trigger : ".about-text",
        scroller : "body",
        // markers : true,
        start : ("top 50%"),
        end : ("top 40%"),
        scrub : 1.5
    }
})

// GSAP code for scrolling 
gsap.to("#navbar", {
    backgroundColor: "#000",
    duration : 0.7,
    height : "90px",
    scrollTrigger :{
        trigger : "#navbar",
        scroller : "body",
        start : ("top -10%"),
        end : ("top -11%"),
        scrub : 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger :{
        trigger : "#main",
        scroller : "body",
        start : ("top -25%"),
        end : ("top -75%"),
        scrub : 1
    }
})

var counter = 0;
exchanger();
//Code for image changer after 1.5 sec
function exchanger(){

    var img = document.getElementsByClassName("food-drink-img");
    
    for(var i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }

    counter++;
    if(counter > img.length){
        counter = 1;
    }
   
    img[counter - 1].style.display = "block";
   
    setTimeout(exchanger, 2000);
}

// Code for colon moving when scrolling
gsap.to("#colon-1" , {
    top: "20%",
    left: "14%",
    scrollTrigger:{
        trigger: "#colon-1",
        scroller: "body",
        start: ("top 42%"),
        end: ("top 27%"),
        scrub: 3,
        // markers:true
    }  
})
gsap.to("#colon-2" , {
    right: "16%",
    bottom: "22%",
    scrollTrigger:{
        trigger: "#colon-1",
        scroller: "body",
        start: ("top 42%"),
        end: ("top 27%"),
        scrub: 3,
        // markers:true
    }  
})

//code for greenbx upr text
gsap.from("#page-4-h4" , {
    y:20,
    scrollTrigger: {
        trigger:"#page-4-h4",
        scroller:"body",
        start:("top 90%"),
        end:("top 70%"),
        // markers:true,
        scrub: 2
    }
})