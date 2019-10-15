let div =  document.querySelector('div');
 	input.onblur = function() {
   let price = document.querySelector('#input').value; 
   if (isNaN(price)) {
    input.classList.add('invalid');
       alert('Please enter correct price')
        input.value = '';
        return false;
  } else {
    input.classList.remove('invalid');
     price = document.querySelector('#input').value;
    
  };

  let span =  document.querySelector('span');
  
  div.classList.remove('price-hide');
  div.classList.add('Span-class');
  input.style.backgroundColor = 'green';
  document.querySelector('span').innerHTML = price;
 
 };

  let strong = document.querySelector('strong');
   strong.addEventListener("click", clear);
  
  function clear (){
   div.classList.add('price-hide');
   input.value = '';
   input.style.backgroundColor = 'white';
};
 