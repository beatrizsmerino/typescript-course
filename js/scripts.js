// JAVSCRIPT WITH MODULES
// =================================================

import * as footer from './modules/layouts/_layouts-footer.js'
import * as exercise1JS from './modules/pages/_pages-exercise-1-javascript.js'



document.addEventListener('DOMContentLoaded', function () {
	footer.init();
	exercise1JS.init();
}, false);