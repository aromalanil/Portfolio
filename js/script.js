/**
 * @author Aromal Anil <aromalanilkannan@gmail.com>
 */

 $(document).ready(()=>{

    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('.nav-bar').addClass('floatingNav');
        } else {
            $('.nav-bar').removeClass('floatingNav');
        }
    });

    $('.ham').click(function(){
		$('.nav-elements').toggleClass('nav-visible');
	});

    const b=baffle(".title");
    b.set({
      characters : '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
      speed: 120
    });


    var i=1;
    let changeTitle = () =>
    {
      let titles= ["Web Developer","UI/UX Designer","Android Developer","Programmer"];
      if(i==titles.length)
      {
          i=0;
      }
      b.text(currentText => titles[i]).reveal(1500);
      i++;
    }

    let interval = setInterval(changeTitle, 3000);
    


      

 });

