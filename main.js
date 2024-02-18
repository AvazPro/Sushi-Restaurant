var menuBtn = document.querySelector(".btn");
var navList = document.querySelector(".nav-list");


var show = function(){
    navList.classList.add('navlist-show');
    menuBtn.classList.add('btn-close');
    navList.removeEventListener('animationend', remove);
}

var hide = function(){
    navList.classList.add('navlist-hide');
    menuBtn.classList.remove('btn-close');
    navList.addEventListener('animationend', remove);
}

var remove = function(){
    navList.classList.remove('navlist-hide', 'navlist-show');
}

menuBtn.addEventListener('click', function(){
    if(navList.classList.contains('navlist-show')){
        hide();
    } else {
        show();
    }
});

