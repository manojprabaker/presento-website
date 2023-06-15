$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:4,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:true
        }
    }
})
let mobileToggle=document.getElementsByClassName("mobile-nav-toggle")[0];
console.log(mobileToggle);
mobileToggle.addEventListener("click",function(){
  let navbar=document.getElementsByClassName("navibar")[0];
  navbar.classList.toggle("navbar-active");

})
let navLi=document.querySelectorAll("li");
navLi.forEach(function(nav){
	nav.addEventListener("click",hideNav)
	function hideNav()
	{
        let navbar=document.getElementsByClassName("navibar")[0];
		console.log("ddd");
        navbar.classList.remove("navbar-active");
		   
	}
})