$ (document).ready(function() {

let popup = document.getElementById('popupEnter'),
		popupToggle = document.getElementById('myBtn'),
		popupClose = document.querySelector('.close');

		popupToggle.onclick = function() {
			popup.style.display="block";
		};

		popupClose.onclick = function() {
			popup.style.display="none";
		}

		window.onclick = function(e) {
			if(e.target == popup) {
				popup.style.display="none";
			}
}

let popupCall = document.getElementById('popupRecall'),
		popupToggleCall = document.getElementById('recallBtn'),
		popupCloseCall = document.querySelector('.closeRecall');

		popupToggleCall.onclick = function() {
			popupCall.style.display="block";
		};

		popupCloseCall.onclick = function() {
			popupCall.style.display="none";
		}

		window.onclick = function(e) {
			if(e.target == popupCall) {
				popupCall.style.display="none";
			}
},


//Вход
$('#userRegistration').validate({
	rules: {
		registrationEmail: {
			required: true,
			email: true
		},
		registrationPass: {
			required: true,
			minlength: 4
		}
	}
});

//подписка
$('#userSubscribe').validate({
	rules: {
		inputEmail: {
			required: true,
			email: true
		}
	},
	message: {
		inputEmail: {
			required: "Укажите свой email",
			email: "Введите коректный email"
		}
	}
});

//Filter
$('#searchFilter').validate({
	rules: {
		registrationEmail: {
			required: true,
			email: true
		},
		registrationPass: {
			required: true,
			minlength: 4
		}
	}
});

$('#priceFilter').validate({
	rules: {
		priceFrom: {
			required: true,
			number: true
		},
		priceFor: {
			required: true,
			number: true
		}
	}
});

/*phone mask*/
$("#userPhone").mask("+38 (099) 999-99-99");

/*head menu*/
$('.menu__head-btn').click(function(event){
	$('.menu__head-btn, .menu__body').toggleClass('active')
})

/*main menu*/
$('.head__burger').click(function(event){
	$('.head__burger, .head__list').toggleClass('active')
})

});
