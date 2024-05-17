// Получаем все элементы с классом 'ratingItem'
var ratingItemsList = document.querySelectorAll('.ratingItem');

// Преобразуем NodeList в массив
var ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

// Для каждого элемента массива добавляем обработчик события 'click'
ratingItemsArray.forEach(function(item) {
	item.addEventListener('click', function() {
		// Устанавливаем значение 'totalValue' у родительского элемента
		item.parentNode.dataset.totalValue = item.dataset.itemValue;
	});
});

// Функция показа содержимого 1
function displayer1() {
	lesser();
	document.getElementById('headerContent1').style.display = 'flex';
	animateHeight('headerContent1', window.innerWidth > 500 ? 400 : 750);
	document.getElementById('arrow1').style.display = 'block';
}

// Функция показа содержимого 2
function displayer2() {
	lesser();
	document.getElementById('headerContent2').style.display = 'flex';
	animateHeight('headerContent2', window.innerWidth > 500 ? 400 : 800);
	document.getElementById('arrow2').style.display = 'block';
}

// Функция показа содержимого 3
function displayer3() {
	lesser();
	document.getElementById('headerContent3').style.display = 'flex';
	animateHeight('headerContent3', window.innerWidth > 500 ? 400 : 750);
	document.getElementById('arrow3').style.display = 'block';
}

// Функция показа содержимого 4
function displayer4() {
	lesser();
	document.getElementById('headerContent4').style.display = 'flex';
	animateHeight('headerContent4', window.innerWidth > 500 ? 400 : 800);
	document.getElementById('arrow4').style.display = 'block';
}

// Функция показа содержимого 5
function displayer5() {
	lesser();
	document.getElementById('headerContent5').style.display = 'flex';
	animateHeight('headerContent5', window.innerWidth > 500 ? 400 : 750);
	document.getElementById('arrow5').style.display = 'block';
}

// Функция скрытия содержимого
function lesser() {
	var headerContents = document.querySelectorAll('.headerContent');
	headerContents.forEach(function(element) {
		element.style.display = 'none';
	});

	var arrows = document.querySelectorAll('.arrow');
	arrows.forEach(function(element) {
		element.style.display = 'none';
	});
}

// Функция анимации высоты элемента
function animateHeight(elementId, targetHeight) {
	var element = document.getElementById(elementId);
	var currentHeight = parseInt(getComputedStyle(element).height) || 0;
	var increment = targetHeight > currentHeight ? 10 : -10;
	var requestId;

	function updateHeight() {
		currentHeight += increment;
		element.style.height = currentHeight + 'px';
		if ((increment > 0 && currentHeight >= targetHeight) || (increment < 0 && currentHeight <= targetHeight)) {
			cancelAnimationFrame(requestId);
		} else {
			requestId = requestAnimationFrame(updateHeight);
		}
	}

	updateHeight();
}

// Функция скрытия содержимого 1
function lesser1() {
	document.getElementById('headerContent1').style.display = 'none';
	document.getElementById('arrow1').style.display = 'none';
}

// Функция анимации скрытия содержимого 1
function noneplayer1() {
	setTimeout(lesser1, 100);
	animateHeight('headerContent1', 0);
}

// Функция скрытия содержимого 2
function lesser2() {
	document.getElementById('headerContent2').style.display = 'none';
	document.getElementById('arrow2').style.display = 'none';
}

// Функция анимации скрытия содержимого 2
function noneplayer2() {
	setTimeout(lesser2, 100);
	animateHeight('headerContent2', 0);
}

// Функция скрытия содержимого 3
function lesser3() {
	document.getElementById('headerContent3').style.display = 'none';
	document.getElementById('arrow3').style.display = 'none';
}

// Функция анимации скрытия содержимого 3
function noneplayer3() {
	setTimeout(lesser3, 100);
	animateHeight('headerContent3', 0);
}
function lesser4() {
	document.getElementById('headerContent4').style.display = 'none';
	document.getElementById('arrow4').style.display = 'none';
}

// Функция анимации скрытия содержимого 3
function noneplayer4() {
	setTimeout(lesser4, 100);
	animateHeight('headerContent4', 0);

}
function lesser5() {
	document.getElementById('headerContent5').style.display = 'none';
	document.getElementById('arrow5').style.display = 'none';
}

// Функция анимации скрытия содержимого 3
function noneplayer5() {
	setTimeout(lesser5, 100);
	animateHeight('headerContent5', 0);
}


