/**
 * @author Aromal Anil <aromalanilkannan@gmail.com>
 */

$(document).ready(() => {

  //NavBar Drop Shadow on scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $('.nav-bar').addClass('floatingNav');
    } else {
      $('.nav-bar').removeClass('floatingNav');
    }
  });


  // Menu bar for Mobile
  $('.ham').click(function clickMenu() {

    //Making Side Menu Bar Visible/Invisible On Menu Click
    $('.nav-elements').toggleClass('nav-visible');


    //Making Side Menu Invisible when clicked on any link/btn in menu
    if ($('.nav-elements').hasClass('nav-visible')) {
      $('.nav-link').click(() => {
        $('.ham').click();
        $('.ham').removesClass('active');
      })
      $('.nav-btn').click(() => {
        $('.ham').click();
        $('.ham').removesClass('active');
      })
    }

  });
  

 


  //Changing Title Effect
  const b = baffle(".title");
  b.set({
    characters: '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
    speed: 120
  });

  var i = 1;
  let changeTitle = () => {
    let titles = ["Web Developer", "UI/UX Designer", "Android Developer", "Programmer"];
    if (i == titles.length) {
      i = 0;
    }
    b.text(currentText => titles[i]).reveal(1500);
    i++;
  }

  let interval = setInterval(changeTitle, 3000);



});

