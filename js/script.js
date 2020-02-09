/**
 * @author Aromal Anil <aromalanilkannan@gmail.com>
 */

 $(document).ready(()=>{

    console.log('done');
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('.nav-bar').addClass('floatingNav');
        } else {
            $('.nav-bar').removeClass('floatingNav');
        }
    });
 });