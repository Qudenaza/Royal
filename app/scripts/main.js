/* eslint-disable */

/**
 * REMOVE IT
 *
 * Скрипты можно писать тут, либо подключать с помощь https://github.com/coderhaoxin/gulp-file-include
 *
 * ВАЖНО: Файлы просто подключаются, без транспиляции (babel) минификации, поэтому нужно писать на ES5
 * Так же доступа к блокам, которые собираются с помощью вебпака не будет.
 */


/* eslint-enable */

(function () {

  const navMain = document.querySelector(".navigation");
  const navToggle = document.querySelector(".navigation__toggle");


  navMain.classList.remove("navigation_no-js");

  navToggle.addEventListener("click", function () {
    if (navMain.classList.contains("navigation_closed")) {
      navMain.classList.remove("navigation_closed");
      navMain.classList.add("navigation_opened");
    } else {
      navMain.classList.add("navigation_closed");
      navMain.classList.remove("navigation_opened");
    }
  });


  $('.user__download').click(function () {
    $('.user__popup').css('display', 'flex');
  });

  $('.user__bell').click(function () {
    $('.notification__popup').css('display', 'flex');
  });


  $('.services__question').click(function () {
    $('.services__popup').css("display", "block")
  })
  document.addEventListener('keydown', closePopups);


  function closePopups(e) {
    if (e.keyCode === 27) {
      const popups = document.querySelectorAll('.popup');

      popups.forEach(popup => popup.style.display = 'none');
    }
  }


  jQuery(function ($) {
    $(document).mouseup(function (e) {
      const popup = $(".popup");
      if (!popup.is(e.target)
        && popup.has(e.target).length === 0) {
        popup.hide();
      }
    });
  });

})();
