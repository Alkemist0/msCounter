const counter = document.getElementById('counter');
const dateSelector = document.getElementById('dateSelector');
if(document.cookie == '') {
	dateSelector.value = new Date(new Date().getTime() + 365 * 86400000).toISOString().substring(0, 10);
} else {
	dateSelector.value = getCookie('time')
}

var x =setInterval(() => {
	var now = new Date()
	counter.innerHTML = dateSelector.valueAsDate - now;
	document.cookie = `time=${dateSelector.value}; expires=${dateSelector.valueAsDate.toUTCString()}; path=/; SameSite=None; Secure`
}, 1);

function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}