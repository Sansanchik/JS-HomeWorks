window.onload = function ()  {
    let theme = localStorage.getItem ('theme');
    let mainTable=document.querySelectorAll('.main-table')[0];  
  if (theme ==='dark') {
      mainTable.classList.add('dark');
   } else {
      mainTable.classList.add('ligth');
  }
};

let changeTheme=document.querySelectorAll('.change-theme')[0];
changeTheme.addEventListener( "click" , function () {
   let theme = localStorage.getItem ('theme'); 
    let mainTable=document.querySelectorAll('.main-table')[0];  
  if (theme === 'dark'){
   mainTable.classList.remove('dark');
   mainTable.classList.toggle('light'); 
   localStorage.setItem('theme','light');

  } else if (theme === 'light'){
   mainTable.classList.remove('light');
   mainTable.classList.toggle('dark');
      localStorage.setItem('theme','dark');}
  });