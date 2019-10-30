window.onload = function ()  {
    var theme = localStorage.getItem ('theme');
  if (localStorage.getItem ('theme') ==='dark') {
    $('.main-table').toggleClass('dark')
   } else {
   $('.main-table').toggleClass('light')
  }
};

$('.change-theme').on('click', function () {
    var theme = localStorage.getItem ('theme');

  if (theme === 'dark'){
    $('.main-table').removeClass('dark');
   $('.main-table').toggleClass('light'); 
   localStorage.setItem('theme','light');

  } else if (theme === 'light'){
    $('.main-table').removeClass('light');
   $('.main-table').toggleClass('dark');
      localStorage.setItem('theme','dark');}
  });