console.log("📄", "modules.ts");

(function(){
	// module Store { // Throws an error
	// 	export class Clothing {
	// 		constructor(public title: string) {
	// 			alert(title);
	// 		}
	// 	}

	// 	export class Electronics {
	// 		constructor(title: string) {
	// 			alert("Technology Store: " + title);
	// 		}
	// 	}
	// }

	// import Electronics = Store.Electronics; // Throws an error
	// let load_electronics = new Electronics("supershop");
})();



(function(){
	// namespace ClothingStore { // Throws an error
	// 	export class Clothing {
	// 		constructor(public title: string) {
	// 			alert(title);
	// 		}
	// 	}

	// 	export class Electronics {
	// 		constructor(title: string) {
	// 			alert('Technology Store: ' + title);
	// 		}
	// 	}
	// }

	// let clothingItem = new ClothingStore.Clothing('Super Jacket');
	// let electronicItem = new ClothingStore.Electronics('Super Computer');
})();
