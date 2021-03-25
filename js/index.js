//jQuery Smooth Scroll
$('.navigation a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();

        const hash= this.hash;

       $('html, body').animate({
           scrollTop: $(hash).offset().top
       }, 800
    );
    }
});
//logo click
$('.scrolltotop').on('click', function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});