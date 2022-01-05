
const input = document.querySelector('#search_field');
const submitButton = document.querySelector('#submit')
let requestURL = "https://ipgeolocation.abstractapi.com/v1/?api_key=c5094700a1614fa08030c502c0fdf9f2";

navigator.geolocation.getCurrentPosition(
	function (position) {
	   initMap(position.coords.latitude, position.coords.longitude)
	},
	function errorCallback(error) {
	   console.log(error)
	}
 );

function initMap(lat, lng) {
	var myLatLng = {
		lat,
		lng
	},
	image = 'img/location_icon.svg',
	infoWindow;
	
	var map = new google.maps.Map(document.querySelector('#map'), {
		zoom: 15,
		center: myLatLng,
		streetViewControl: false,
		fullscreenControl: false,
		mapTypeControl: false,
	})

	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: {
			url: image,
			scaledSize: new google.maps.Size(32,40),
			}
	})
}

function showData(data) {
	document.querySelector('#isp_get').textContent = data.connection.isp_name;

	if (data.timezone.gmt_offset>0) {
		document.querySelector('#timezone_get').textContent = 'UTC+0' + data.timezone.gmt_offset + ':00'
	} else 
	if (data.timezone.gmt_offset < 0) {
		document.querySelector('#timezone_get').textContent = 'UTC' + data.timezone.gmt_offset + ':00'
	}
	document.querySelector('#location_get').textContent = data.city;
	document.querySelector('#ip_get').textContent = data.ip_address;
}

submitButton.addEventListener('click', function() {
	if(input.value) {
		requestURL = "https://ipgeolocation.abstractapi.com/v1/?api_key=c5094700a1614fa08030c502c0fdf9f2&ip_address=" + input.value;
		sendRequest('GET', requestURL)
		.then(data => {
			initMap(data.latitude, data.longitude);
			showData(data)
		})
		.catch(err => customAlert());
		input.value = '';
	}
})

function sendRequest(method, url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()

		xhr.open(method, url)

		xhr.responseType = 'json'

		xhr.onload = () => {
			if (xhr.status >= 400) {
				reject(xhr.response)
			} else {
				resolve(xhr.response)
			}
		}

		xhr.onerror = () => {
			reject(xhr.response)
		}

		xhr.send()
	})
}
sendRequest('GET', requestURL)
	.then(data => {
		showData(data)
	})
	.catch(err => console.log(err))

const alert = document.querySelector('#alert')

function customAlert() {
	alert.classList.remove('hide')
	alert.classList.add('show')
	alert.classList.add('showAlert')
	setTimeout(() => {
		alert.classList.add('hide')
		alert.classList.remove('show')
	}, 5000);
}
const closeButton = document.querySelector('.close-btn')
	closeButton.addEventListener('click', () => {
		alert.classList.add('hide')
		alert.classList.remove('show')
	})

	