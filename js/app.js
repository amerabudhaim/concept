'use strict';

//alert('hello');
let query = new URLSearchParams(window.location.search);
let themeLink = document.getElementById('theme');
themeLink.href='css/theme-' + query.get('theme') + '.css';

