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
		} else {
			item.onclick = addElement;
		}
	}
}

function addElement() {
	const cloneElement = element.cloneNode(true);
	area.prepend(cloneElement);
	setTimeout(function() {
		cloneElement.classList.add("spamming-area__column_show");
	})
}

function addElementFive() {
	for (let i = 0; i < 5; i++) {
		const cloneElement = element.cloneNode(true);
		area.prepend(cloneElement);
		setTimeout(function() {
			cloneElement.classList.add("spamming-area__column_show");
		})
	}
}

function addElementTen() {
	for (let i = 0; i < 10; i++) {
		const cloneElement = element.cloneNode(true);
		area.prepend(cloneElement);
		setTimeout(function() {
			cloneElement.classList.add("spamming-area__column_show");
		})
	}
}

function deleteElementAll() {
	const spamElements = document.querySelectorAll(".spamming-area__column");
	for (let item of spamElements) {
		setTimeout(function() {
			item.classList.remove("spamming-area__column_show");
		})
		setTimeout(function() {
			item.remove();
		},500)
	}
}

function deleteElement() {
	const spamElements = document.querySelector(".spamming-area__column");
	setTimeout(function() {
		spamElements.classList.remove("spamming-area__column_show");
	})
	setTimeout(function() {
		spamElements.remove();
	},500)
}
