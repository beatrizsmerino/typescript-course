console.log("📄", "classes.ts");

import { type Avenger as AvengerInterface } from "./types.d"

(function () {
	class Avenger {
		readonly id: string = crypto.randomUUID();
		protected name: string;
		public age: number;
		#powerScore: number; // private with JS
		private wonBattles: number = 0; // private with TS

		constructor(name: string, age: number, powerScore: number) {
			this.name = name;
			this.age = age;
			this.#powerScore = powerScore;
		}

		get fullName(): string {
			return `${this.name}, with ${this.#powerScore}`;
		}

		set power(newPower: number) {
			if (newPower <= 100) {
				this.#powerScore = newPower;
			} else {
				throw new Error("Power score cannot be more than 100");
			}
		}
	}

	const spiderman = new Avenger("Spiderman", 17, 80);
	console.log(spiderman);

	// spiderman.name = "Hulk"; // Throws an error
	// console.log(spiderman.powerScore); // Throws an error
	// console.log(spiderman.wonBattles); // Throws an error
})();



(function(){
	class Avenger implements AvengerInterface { // implements interface into class
		id: string = crypto.randomUUID();
		name: string;
		age: number;
		powerScore: number;
		wonBattles: number;

		constructor(name: string, age: number, powerScore: number = 0, wonBattles:number = 0) {
			this.name = name;
			this.age = age;
			this.powerScore = powerScore;
			this.wonBattles = wonBattles;
			// this.city = city; //Throws an error
		}

		battle(win: boolean){
			if(win) {
				this.wonBattles++;
				this.powerScore += 5;
			} else {
				this.wonBattles--;
				this.powerScore -= 5;
			}
		}
	}

	const spiderman = new Avenger("Spiderman", 17);
	console.log(spiderman);

	spiderman.battle(true);
	console.log(spiderman);
})();