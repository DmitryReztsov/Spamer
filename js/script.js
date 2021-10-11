function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

const swiper = new Swiper('.swiper', {
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});

const area = document.querySelector(".spamming-area__row");

const element = document.querySelector(".spamming-area__column");



function clickButton() {
	const button = document.querySelectorAll(".functions__button");
	for (let item of button) {
		if (item.classList.contains("functions__button_addTen")) {
			item.onclick = addElementTen;
		} else if (item.classList.contains("functions__button_addFive")) {
			item.onclick = addElementFive;
		} else if (item.classList.contains("functions__button_deleteAll")) {
			item.onclick = deleteElementAll;
		} else if (item.classList.contains("functions__button_deleteOne")) {
			item.onclick = deleteElement;
		} else if (item.classList.contains("functions__button_round")) {
			item.onclick = roundElement;
		} else if (item.classList.contains("functions__button_triangle")) {
			item.onclick = triangleElement;
		} else if (item.classList.contains("functions__button_square")) {
			item.onclick = squareElement;
		} else {
			item.onclick = addElement;
		}
	}
}

function addElement() {
	const newElement = document.createElement("div")
	newElement.classList.add("spamming-area__column")
	newElement.innerHTML = `<div class="spamming-area__element"></div>`;
	area.prepend(newElement);
	setTimeout(function () {
		newElement.classList.add("spamming-area__column_show");
	})
}

function addElementFive() {
	for (let i = 0; i < 5; i++) {
		const newElement = document.createElement("div")
		newElement.classList.add("spamming-area__column")
		newElement.innerHTML = `<div class="spamming-area__element"></div>`;
		area.prepend(newElement);
		setTimeout(function () {
			newElement.classList.add("spamming-area__column_show");
		})
	}
}

function addElementTen() {
	for (let i = 0; i < 10; i++) {
		const newElement = document.createElement("div")
		newElement.classList.add("spamming-area__column")
		newElement.innerHTML = `<div class="spamming-area__element"></div>`;
		area.prepend(newElement);
		setTimeout(function () {
			newElement.classList.add("spamming-area__column_show");
		})
	}
}

function deleteElementAll() {
	const spamElements = document.querySelectorAll(".spamming-area__column");
	for (let item of spamElements) {
		setTimeout(function () {
			item.classList.remove("spamming-area__column_show");
		})
		setTimeout(function () {
			item.remove();
		}, 500)
	}
}

function deleteElement() {
	const spamElements = document.querySelector(".spamming-area__column");
	setTimeout(function () {
		spamElements.classList.remove("spamming-area__column_show");
	})
	setTimeout(function () {
		spamElements.remove();
	}, 500)
}

function roundElement() {
	const spamElements = document.querySelectorAll(".spamming-area__element");
	for (let item of spamElements) {
		if (item.classList.contains("spamming-area__element_round")) {
			return
		} else {
			item.classList.remove("spamming-area__element_triangle")
			item.classList.add("spamming-area__element_round")
		}
	}
}

function triangleElement() {
	const spamElements = document.querySelectorAll(".spamming-area__element");
	for (let item of spamElements) {
		if (item.classList.contains("spamming-area__element_triangle")) {
			return
		} else {
			item.classList.remove("spamming-area__element_round")
			item.classList.add("spamming-area__element_triangle")
		}
	}
}

function squareElement() {
	const spamElements = document.querySelectorAll(".spamming-area__element");
	for (let item of spamElements) {
		item.classList.remove("spamming-area__element_round")
		item.classList.remove("spamming-area__element_triangle")
	}
}
