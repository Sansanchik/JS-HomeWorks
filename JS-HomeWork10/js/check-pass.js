let icon = document.getElementsByClassName('icon-password');
let input = document.getElementsByTagName('input');
let check = document.getElementById('btn');

icon[0].addEventListener("click", () => {
  if (icon[0].classList.contains("fa-eye-slash")){
icon[0].classList.remove("fa-eye-slash");
icon[0].classList.add("fa-eye");
input[0].setAttribute('type','text');
}
else {
  icon[0].classList.remove("fa-eye");
icon[0].classList.add("fa-eye-slash");
input[0].setAttribute('type','password');
}
});
icon[1].addEventListener("click", () => {
  if (icon[1].classList.contains("fa-eye-slash")){
icon[1].classList.remove("fa-eye-slash");
icon[1].classList.add("fa-eye");
input[1].setAttribute('type','text');
}
else {
  icon[1].classList.remove("fa-eye");
icon[1].classList.add("fa-eye-slash");
input[1].setAttribute('type','password');
}
});

 
 check.addEventListener('click', () => {
        if (input[0].value === input[1].value) {
            alert('You are welcome');
        } else {
          const error = document.getElementById('password_error');
           input[0].setAttribute('type','text');
           input[0].style.border = "2px solid red";
           input[1].setAttribute('type','text');
           input[1].style.border = "2px solid red";
          error.innerText = "Нужно ввести одинаковые значения";
        }
    });
