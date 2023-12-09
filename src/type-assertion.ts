console.log("📄", "type-assertion.ts");

import { GitHubAPIResponse } from "./github-api-response"; // https://app.quicktype.io/

(function () {
	const canvas1 = document.getElementById("canvas");
	if (canvas1 != null) {
		// const ctx = canvas1.getContext("2d"); // Throws an error
	}

	const canvas2 = document.getElementById("canvas") as HTMLCanvasElement; // Can be 'null'
	if (canvas2 != null) {
		const ctx = canvas2.getContext("2d");
	}

	const canvas3 = document.getElementById("span");
	if (canvas3 != null) {
		const ctx = (canvas3 as HTMLCanvasElement).getContext("2d"); // Type assertion
	}

	const canvas = document.getElementById("canvas");
	if (canvas != null && canvas instanceof HTMLCanvasElement) { // inference
		const ctx = canvas.getContext("2d");
	}
})();



(function () {
	const API_URL = "https://api.github.com/search/repositories?q=javascript";


	async function getData1(apiUrl: string) {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error("Request failed");
		}
		const data = await response.json();
		return data;
	}

	getData1(API_URL).then((data) => {
		console.log(data);
		// const repos = data.items.map((repo) => console.log(repo)); // Throws an error
	});


	async function getData2(apiUrl: string) {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error("Request failed");
		}
		type APIResponse = {
			items: object[];
		};
		const data = (await response.json()) as APIResponse;
		return data;
	}

	getData2(API_URL).then((data) => {
		const repos = data.items.map((repo) => console.log(repo));
	});


	async function getData3(apiUrl: string) {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error("Request failed");
		}
		const data = (await response.json()) as GitHubAPIResponse;
		return data;
	}

	getData3(API_URL).then((data) => {
		const repos = data.items.map((repo) => {
			const { id, name, full_name, description, url } = repo;
			return {
				id,
				name,
				full_name,
				description,
				url,
			};
		});
	});
})();
