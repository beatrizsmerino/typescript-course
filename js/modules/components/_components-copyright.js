// COMPONENTS
// copyright
// =================================================

import * as tools from '../tools/_tools-date.js'





function addCurrentYearToCopyright() {
	const dateCopyright = document.querySelector("#dateCopyright");
	const dateInitProject = '2021';
	const dateCurrentYear = tools.getCurrentYear();
	let date;

	if (dateCurrentYear != dateInitProject) {
		date = `${dateInitProject} - ${dateCurrentYear}`;
	} else {
		date = dateInitProject;
	}

	dateCopyright.innerHTML = date;
}



export { addCurrentYearToCopyright }
