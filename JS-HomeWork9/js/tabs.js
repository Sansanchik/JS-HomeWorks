window.onload = function(){
	document.querySelector('.tabs').addEventListener("click", fTabs);
    var tabBody = document.querySelectorAll('.tabs-content-item');
    for (var i = 1; i < tabBody.length; i++) {
    	tabBody[i].style.display = 'none'; //скрываем весь контент, кроме первой позции
    }
function fTabs(event) {
		if (event.target.className == 'tabs-title'){
			var dataTab = event.target.getAttribute('data-tab');
			var tabH = document.getElementsByClassName('tabs-title');
			for (var i = 0; i < tabH.length; i++) {
				tabH[i].classList.remove('active');
			} //удаляем класс active во всех табсах
			event.target.classList.add('active'); //добавляем выбранному
			
			for (var i=0; i < tabBody.length; i++){
				if (dataTab==i){
					tabBody[i].style.display = 'block'; //показываем конетент для текущего табса
				}
				else {
					tabBody[i].style.display = 'none'; //убираем для остальных
				}
			}
		}
	}
}