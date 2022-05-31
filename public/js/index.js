import "./jquery.min.js";
import './slick.min.js';
import './bootstrap.bundle.min.js'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
// Add Firebase products that you want to use
// gtag
import "./analytics";
// import "https://www.googletagmanager.com/gtag/js?id=G-45WTYWR6PM"
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-45WTYWR6PM');
(function () {
  // your page initialization code here
  const firebaseConfig = {
    apiKey: "AIzaSyDUZ8fHB6wWjHJUxNlWKw7SguD2ogUqZLw",
    authDomain: "aum-metals.firebaseapp.com",
    projectId: "aum-metals",
    storageBucket: "aum-metals.appspot.com",
    messagingSenderId: "261564995297",
    appId: "1:261564995297:web:95ec17f55db378569d89a0",
    measurementId: "G-P10XVR74GM"
    // measurementId: "G-45WTYWR6PM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app, 'app')
  const analytics = getAnalytics(app);
  // analytics.logEvent('notification_received');
  logEvent(analytics, 'notification_received');
  logEvent(analytics, 'asdasdd_test');
  let b = document.getElementsByClassName('splashLogo');
  if (window.location.pathname === '/public/' || window.location.pathname === '/') {
    $('.splashLogo').addClass('puff-out-center-long')
    setTimeout(function () {
      $('#loading').hide();
    }, 3000);
  }
  else {
    $('.splashLogo').addClass('puff-out-center-short')
    setTimeout(function () {
      $('#loading').hide();
    }, 2000);
  }

  $('.navbar-toggler').on('click', function () {
    $('.cross').toggleClass('d-none slit-in-horizontal')
    $('.patties ').toggleClass('d-none slit-in-horizontal')
  })
  for (let i = 1; i <= 17; i++) {

    $(`#sl${i}`).slick({
      infinite: true,
      dots: true,
      autoplay: true,
      prevArrow: "<button type='button' class='slick-prev pull-left'><div class='arrow-wrapper'><div class='icon-left'><svg viewBox='0 0 24 24' width='30px' height='30px' focusable='false'><path fill='rgba(255,255,255,1)' d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'></path><path d='M0-.75h24v24H0z' fill='none'></path></svg></div></div></button>",
      nextArrow: "<button type='button' class='slick-next pull-right'><div class='arrow-wrapper'><div class='icon-right'><svg viewBox='0 0 24 24' width='30px' height='30px' focusable='false'><path fill='rgba(255,255,255,1)' d='M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z'></path><path d='M0-.75h24v24H0z' fill='none'></path></svg></div></div></button>"
    });
    $("#sl" + i).mouseover(function () {
      $(" .arrow-wrapper", this).css('display', 'flex');
    });
    $("#sl" + i).mouseleave(function () {
      $(" .arrow-wrapper", this).css('display', 'none');
    });
  }
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });
})();
