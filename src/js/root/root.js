var grab = (val) => {
	'use strict';
	return document.getElementById(val);
},
	grabNm = (val) => { return document.getElementsByName(val)[0] },
	make = (val) => {
		return document.createElement(val);
	},
	put = (elem, item) => { return elem.appendChild(item) },
	addId = (elem, id) => { 'use strict'; elem.map((elmVal, elmKey) => { elmVal.id = id[elmKey]; }); },
	addClass = (elm, clName) => {
		'use strict';
		elm.map(
			(elmVal, elmKey) => {
				let clArr = elmVal.className.split(" ");
				if (clArr.indexOf(clName[elmKey] == -1)) {
					elmVal.className += " " + clName[elmKey];
				}
			}
		);
	},
	delClass = (elm, clName) => {
		'use strict';
		elm.className = elm.className.replace(clName, "");
	},
	cekClass = (ele, clName) => {
		'use strict';
		return ele.className.includes(clName);
	},
	pacth_addEV = (elem, event, fun) => {
		'use strict';
		if (elem.attachEvent) {
			elem.attachEvent("on" + event, fun);
		} else {
			elem.addEventListener(event, fun);
		}
	},
	pactch_Ajax = (elem) => {
		if (window.XMLHttpRequest) {
			return elem = new XMLHttpRequest();
		} else {
			return elem = new ActiveXObject("Microsoft.XMLHTTP");
		}
	},
	fileScan = (ele, type, rawData) => {
		'use strict';
		var file = ele.files[0],
			scanner = new FileReader(),
			data;
		switch (type) {
			case 'size':
				return bToSize(file.size);
			case 'name':
				return file.name;
			case 'type':
				return file.type;
			case 'imgSrc':
				if (file.type.match(/image.*/)) {
					scanner.onload = function () {
						rawData.src = scanner.result;
					}
				} else {
					return false;
				}
				scanner.readAsDataURL(file);
				break;
			case 'imgUrl':
				scanner.onload = function () {
					rawData.style.backgroundImage = "url(" + scanner.result + ")";
				}
				scanner.readAsDataURL(file);
		}
	},
	bToSize = (bytes) => {
		'use strict';
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'],
			i;
		if (bytes === 0) {
			return 'n/a';
		}
		i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		if (i === 0) {
			return bytes + ' ' + sizes[i];
		}
		return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
	},
	preSub = (elem, typ) => {
		'use strict';
		if (typ == "direct") { event.preventDefault(); }
		else { pacth_addEV(elem, "submit", function (evt) { evt.preventDefault(); }); }
	},
	addStyle = (link) => {
		var Head = document.getElementsByTagName('head')[0],
			css = document.createElement('link');
		css.type = 'text/css';
		css.rel = 'stylesheet';
		Head.appendChild(css);
		css.href = link;
	},
	show = (text) => {
		var h1 = document.createElement('p'),
			body = document.getElementsByTagName('body')[0];
		h1.setAttribute("id", "show");
		h1.style.color = 'black';
		h1.innerHTML = text;
		grab('show') != undefined ? grab('show').innerHTML = text : body.appendChild(h1);
	},
	HideShow = (elm) => {
		elm.style.display == 'none' ||  elm.style.display == '' ? elm.style.display = 'inline-block' : elm.style.display = 'none';
	},
	hide = (elm)=>{elm.style.display = 'none';},
	server = (info)=>{
		switch(info){
			case 'origin':
				return window.location.origin;
			case 'host':
				return window.location.host;
				case 'http':
                    return window.location.protocol;
		}
	},
	https = function (){
		if(server('host') != 'localhost:3000'){
			if(server('http') != 'https:'){
			document.getElementsByTagName('body').innerHTML = 'please wait...';
			window.location.replace('https://honvutrade.herokuapp.com');
		}}
	}