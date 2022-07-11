
    let menu = document.querySelector('#menu')
    let navbar = document.querySelector('.navbar');
    let header2 = document.querySelector('.header-2');
    
    function navToggle(){
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    }
    
    window.addEventListener('scroll',function(){
    
        menu.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');
    
        if(window.scrollY > 60){
            header2.classList.add('sticky');
        }else{
            header2.classList.remove('sticky');
        }
    
    });




    var  ProductImg = document.getElementById("ProductImg");
    var SmallImg = document.getElementsByClassName("small-img");

      SmallImg[0].onclick = function()
    {
        ProductImg.src = SmallImg[0].src;
    }

      SmallImg[1].onclick = function()
    {
        ProductImg.src = SmallImg[1].src;
    } 

      SmallImg[2].onclick = function()
    {
        ProductImg.src = SmallImg[2].src;
    }

      SmallImg[3].onclick = function()
    {
        ProductImg.src = SmallImg[3].src;
    }
    


    var LoginForm = document.getElementById("LoginForm");
    var RegForm = document.getElementById("RegForm");
    var Indicator = document.getElementById("Indicator");

    function register(){
        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(0px)";
        Indicator.style.transform = "translateX(100px)";
    }

    function login(){
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }
