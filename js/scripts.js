// JAVSCRIPT WITH MODULES
// =================================================

import * as footer from './modules/layouts/_layouts-footer.js'
import * as exercise1 from './modules/pages/_pages-exercise-1.js'



document.addEventListener('DOMContentLoaded', function () {
	footer.init();
	exercise1.init();
}, false);