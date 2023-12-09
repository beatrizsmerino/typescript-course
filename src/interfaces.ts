console.log("📄", "interfaces.ts");

(function () {
	interface Hero { // interface
		id: string;
		name: string;
		age: number;
		greeting: () => void;
	}

	const hero: Hero = {
		id: "1",
		name: "Spiderman",
		age: 30,
		greeting: function (): string {
			return `Hello friend and neighbour ${this.name}`;
		},
	};

	console.log(hero);
	console.log(hero.greeting());
})();



(function () {
	interface Product {
		id: number;
		name: string;
		price: number;
		quantity: number;
	}

	interface ProductSize extends Product { // extend interface
		size: number;
	}

	interface Cart {
		totalPrice: number;
		products: (Product | ProductSize)[]; // choose one interface
	}

	const myCart: Cart = {
		totalPrice: 100,
		products: [
			{
				id: 1,
				name: "Product 1",
				price: 100,
				quantity: 1,
				size: 43,
			},
			{
				id: 2,
				name: "Product 2",
				price: 30,
				quantity: 1,
			},
		],
	};

	console.log(myCart);
})();



(function () {
	interface Product {
		id: number;
		name: string;
		price: number;
		quantity: number;
	}

	interface ProductSize extends Product {
		size: number;
	}

	interface Cart {
		totalPrice: number;
		products: (Product | ProductSize)[]; // Type Union
	}

	// Mixing interfaces with the same name
	interface CartActions {
		add: (product: Product) => void;
	}
	interface CartActions {
		remove(id: number): void;
		clear(): void;
	}

	const myCart: Cart = {
		totalPrice: 100,
		products: [
			{
				id: 1,
				name: "Product 1",
				price: 100,
				quantity: 1,
				size: 43,
			},
			{
				id: 2,
				name: "Product 2",
				price: 30,
				quantity: 1,
			},
		],
	};

	const myCartActions: CartActions = {
		add: (product: Product) => {},
		remove: (id: number) => {},
		clear: () => {},
	};

	console.log(myCart);
	console.log(myCartActions);
})();



(function () {
	interface Product {
		id: number;
		name: string;
		price: number;
		quantity: number;
	}

	// Mixin types with the same name
	// type CartActions = { // Throws an error
	// 	add: (product: Product) => void;
	// }
	// type CartActions = { // Throws an error
	// 	remove(id:number): void;
	// 	clear(): void;
	// }
})();



(function () {
	type HeroId = `${string}-${string}`;

	interface Hero {
		id: HeroId;
		name: string;
		age: number;
	}
})();
