console.log("📄", "hello-world.ts");

(function () {
	function helloWorld(name: string) {
		return "Hola Mundo! Soy " + name;
	}

	var name = "Víctor Robles";
	var result = helloWorld(name);

	var tag = <HTMLElement>document.getElementById("container");
	tag.innerHTML = result;

	// alert("HOLA MUNDO ALERT");
})();



(function () {
	function helloWorld(name: string): string {
		return `Hello world! I'm ${name}`;
	}

	const name: string = "Víctor Robles";
	const container = document.getElementById("container");

	if (container && container instanceof HTMLElement) {
		const greeting = helloWorld(name);
		console.log(greeting);

		const greetingContent = document.createElement("p");
		const greetingText = document.createTextNode(greeting);

		greetingContent.appendChild(greetingText);
		container.appendChild(greetingContent);
	}
})();
