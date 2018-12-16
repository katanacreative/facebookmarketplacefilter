//Hide old crap in Facebook marketplace:
function contains(selector, text) {
	var elements = document.querySelectorAll(selector);
	return [].filter.call(elements, function (element) {
		return RegExp(text).test(element.textContent);
	});
}

function show_hide(str, do_show) {
	x = contains("a._1oem", str);
	for (var i = 0, len = x.length; i < len; i++) {
		x[i].style.opacity = (do_show) ? 1 : .2;
		//x[i].style.display=block/none
	}
}


(function () {

	// just place a div at top right
	var div = document.createElement('div');
	div.style.position = 'fixed';
	div.style.top = 0;
	div.style.right = 0;
	div.id = 'myselector';
	div.innerHTML = "<label style='color:#fff'><input type='checkbox' id='days' name='days' checked>Hide Days</label><br/><label style='color:#fff'><input type='checkbox' id='weeks' name='weeks' checked>Hide Weeks</label>"
	document.getElementById('blueBarDOMInspector').appendChild(div);

	var chkDays = document.querySelector("input[name='days']");
	chkDays.addEventListener('change', function () {
		if (this.checked) {
			show_hide('day', false)
		} else {
			show_hide('day', true)
		}
	});

	var chkWeeks = document.querySelector("input[name='weeks']");
	chkWeeks.addEventListener('change', function () {
		if (this.checked) {
			show_hide('week', false);
		} else {
			show_hide('week', true);
		}
	});

	show_hide('week', false);
	show_hide('day', false);


})();



window.addEventListener("scroll", function () {
	if (document.getElementById('days').checked) {
		show_hide('day', false);
	}
	if (document.getElementById('weeks').checked) {
		show_hide('week', false);
	}
});