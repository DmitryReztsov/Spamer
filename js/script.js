
const area = document.querySelector(".spamming-area__row");

const buttons = document.querySelector(".functions__row");

//Вешаем обработчики на кнопки

buttons.addEventListener("click", function (event) {
	if (event.target.closest(".functions__button_addOne")) {
		addElements(1);
	}
	if (event.target.closest(".functions__button_addFive")) {
		addElements(5);
	}
	if (event.target.closest(".functions__button_addTen")) {
		addElements(10);
	}
	if (event.target.closest(".functions__button_deleteAll")) {
		deleteElementAll();
	}
	if (event.target.closest(".functions__button_deleteOne")) {
		deleteElement();
	}
	if (event.target.closest(".functions__button_round")) {
		roundElement();
	}
	if (event.target.closest(".functions__button_triangle")) {
		triangleElement();
	}
	if (event.target.closest(".functions__button_square")) {
		squareElement();
	}
});

function addElements(num) {
	for (let i = 0; i < num; i++) {
		const newElement = document.createElement("div")
		newElement.classList.add("spamming-area__column")
		newElement.innerHTML = `<div class="spamming-area__element"></div>`;
		area.append(newElement);
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
		item.classList.remove("spamming-area__element_triangle")
		item.classList.add("spamming-area__element_round")
	}
}

function triangleElement() {
	const spamElements = document.querySelectorAll(".spamming-area__element");
	for (let item of spamElements) {
		item.classList.remove("spamming-area__element_round")
		item.classList.add("spamming-area__element_triangle")
	}
}

function squareElement() {
	const spamElements = document.querySelectorAll(".spamming-area__element");
	for (let item of spamElements) {
		item.classList.remove("spamming-area__element_round")
		item.classList.remove("spamming-area__element_triangle")
	}
}

//Scroll Up

const scrollButton = document.querySelector(".scrollUp");
scrollButton.addEventListener("click", scrollingTop);

function scrollingTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
}

// Форма поиска

const searchForm = document.querySelector(".search-form");

document.addEventListener("click", openForm);

function openForm(event) {
	if (event.target.closest(".search-form__icon")) {
		searchForm.classList.add("active");
	}
	if (!event.target.closest(".search-form")) {
		searchForm.classList.remove("active");
	}
};

document.addEventListener("keyup", closeForm);

function closeForm(event) {
	if (event.code === "Escape") {
		searchForm.classList.remove("active");
	}
}

const inputForm = document.querySelector(".search-form__input");
const spanCounter = document.querySelector(".search-form__span");



inputForm.addEventListener("keyup", countLetters);
inputForm.addEventListener("keydown", function(event) {
	if (event.repeat) countLetters();
})

function countLetters() {
	const counted = inputForm.value.length;
	spanCounter.innerHTML = `${counted} введенных символов`;
}














// function ibg() {

// 	$.each($('.ibg'), function (index, val) {
// 		if ($(this).find('img').length > 0) {
// 			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
// 		}
// 	});
// }

// ibg();

// $('.icon-menu').click(function (event) {
// 	$(this).toggleClass('active');
// 	$('.menu__body').toggleClass('active');
// 	$('body').toggleClass('lock');
// });

// const swiper = new Swiper('.swiper', {
// 	// If we need pagination
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	}
// });