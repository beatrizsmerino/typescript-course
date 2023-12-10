console.log("📄", "poo.ts");

(function () {
	console.group("Class with properties and methods and without create a constructor:");

	class Car {
		// public color: string; // Throws an error
		public color: string = "";
		public speed: number = 0;
		// public model: string; // Throws an error
		public model: string = "";

		public getColor() {
			return this.color;
		}

		public setColor(color: string) {
			this.color = color;
		}

		public getSpeed() {
			return this.speed;
		}

		public speedUp() {
			this.speed++;
		}

		public slowDown() {
			this.speed--;
		}
	}

	var car = new Car();
	var car_two = new Car();
	var car_three = new Car();

	car.setColor("red");
	car_two.setColor("blue");
	car_three.setColor("green");
	console.log("The colour of car 1 is: " + car.getColor());
	console.log("The colour of car 2 is: " + car_two.getColor());
	console.log("The colour of car 3 is: " + car_three.getColor());

	car.speedUp();
	car.speedUp();
	car.speedUp();
	console.log("The speed of car 1, after acceleration, is: " + car.getSpeed());
	car.slowDown();
	console.log("The speed of car 1, after braking, is: " + car.getSpeed());

	console.groupEnd();
})();



(function () {
	console.group("Class with properties and methods and adding a constructor:");

	class Car {
		public color: string;
		public speed: number;
		public model: string;

		constructor(color: string, speed: number, model: string) {
			this.color = color;
			this.speed = speed;
			this.model = model;
		}

		public getColor() {
			return this.color;
		}

		public setColor(color: string) {
			this.color = color;
		}

		public getSpeed() {
			return this.speed;
		}

		public speedUp() {
			this.speed++;
		}

		public slowDown() {
			this.speed--;
		}
	}

	const car1 = new Car("red", 100, "audi");
	console.log(car1);

	const car2 = new Car("blue", 50, "cadillac");
	console.log(car2);

	const car3 = new Car("green", 20, "citroen");
	console.log(car3);

	console.log(`The colour of car 1 was ${car1.getColor()}...`);
	car1.setColor("green");
	console.log(`..and has been painted ${car1.getColor()}.`);

	console.log(`The speed of car 1 was ${car1.getSpeed()}, ...`);
	car1.speedUp();
	car1.speedUp();
	car1.speedUp();
	car1.speedUp();
	car1.speedUp();
	console.log(`...then accelerated to ${car1.getSpeed()}...`);
	car1.slowDown();
	car1.slowDown();
	car1.slowDown();
	car1.slowDown();
	car1.slowDown();
	car1.slowDown();
	car1.slowDown();
	car1.slowDown();
	console.log(`...and finally slowed to ${car1.getSpeed()}.`);

	console.groupEnd();
})();



(function () {
	console.group("Class with constructor and Interface implemented:");

	interface CarBasic {
		getColor(): string;
		getSpeed(): number;
		getModel(): string;
	}

	class Car implements CarBasic {
		public color: string;
		public speed: number;
		public model: string;

		constructor(model: any = null) {
			this.color = "white";
			this.speed = 0;

			if (model == null) {
				this.model = "BMW Generico";
			} else {
				this.model = model;
			}
		}

		public getColor() {
			return this.color;
		}

		public setColor(color: string) {
			this.color = color;
		}

		public getModel() {
			return this.model;
		}

		public setModel(model: string) {
			this.model = model;
		}

		public getSpeed() {
			return this.speed;
		}

		public speedUp() {
			this.speed++;
		}

		public slowDown() {
			this.speed--;
		}
	}

	var car = new Car("Renault Clio");
	var car_two = new Car();

	console.log("The colour of car 1 is: " + car.getColor());
	console.log("The model of car 1 is: " + car.getModel());
	console.log("The model of car 2 is: " + car_two.getModel());

	console.groupEnd();
})();



(function () {
	console.group("Classes and inheritance: public, private, protected, static");

	class Car {
		static totalCars: number = 0; // static
		public color: string; // public
		private maintenanceHistory: string[]; // private
		private odometer: number;
		protected engineRunning: boolean; // protected

		constructor(color: string = "white") {
			this.color = color;
			this.maintenanceHistory = [];
			this.odometer = 0;
			this.engineRunning = false;
			Car.totalCars++;
		}

		public drive(miles: number) { // public
			if (miles > 0) {
				this.odometer += miles;
				this.checkMaintenance();
			}
			console.log("odometer", this.odometer);
		}

		public getColor(): string {
			console.log("color", this.color);
			return this.color;
		}

		public setColor(color: string) {
			this.color = color;
		}

		private addMaintenanceRecord(record: string) { // private
			this.maintenanceHistory.push(record);
			console.log("maintenanceHistory", this.maintenanceHistory);
		}

		private checkMaintenance() {
			if (this.odometer % 5000 === 0) {
				this.performMaintenance();
			}
		}

		private performMaintenance() {
			this.addMaintenanceRecord(`Maintenance at ${this.odometer} miles.`);
			console.log("Maintenance performed.");
		}

		protected toggleEngine() { // protected
			this.engineRunning = !this.engineRunning;
			console.log("engineRunning", this.engineRunning);
		}

		static getTotalCars(): number { // static
			console.log("totalCars", this.totalCars);
			return Car.totalCars;
		}
	}

	class SportsCar extends Car { // class inheritance
		constructor(color: string) {
			super(color);
		}

		public startEngine() {
			this.toggleEngine(); // Access 'protected' method
			console.log(`Engine running: ${this.engineRunning}`);
		}
	}

	let myCar = new Car("red");
	myCar.drive(5000);
	console.log(myCar.getColor()); // Access 'public' method
	// myCar.addMaintenanceRecord("Oil change"); // Throws an error: Method is private
	// myCar.checkMaintenance(); // Throws an error: Method is private
	// myCar.toggleEngine(); // Throws an error: Method is protected

	let mySportsCar = new SportsCar("blue");
	mySportsCar.startEngine(); // 'Public' method can access 'protected' method internally
	console.log(`Total cars: ${Car.getTotalCars()}`); // Access to 'static' method

	console.groupEnd();
})();



(function () {
	console.group("Classes and inheritance:");

	class Software {
		public name: string;
		public version: number;

		constructor(name: string, version: number) {
			this.name = name;
			this.version = version;
		}

		protected getName(): string {
			return this.name;
		}

		protected setName(name: string) {
			this.name = name;
		}

		protected getVersion(): number {
			return this.version;
		}

		protected setVersion(version: number) {
			this.version = version;
		}
	}


	class VideoEditor extends Software {
		public timeline: number;

		constructor(name: string, version: number, timeline: number) {
			super(name, version);
			this.timeline = timeline;
		}

		private getTimeline() {
			return this.timeline;
		}

		setTimeline(timeline: number) {
			this.timeline = timeline;
		}

		getAllData():void {
			console.log(`${this.getName()} - ${this.getVersion()} - ${this.getTimeline().toString()}`);
		}
	}

	const editor = new VideoEditor("Camtasia Studio", 8, 4000);
	console.log(editor);
	editor.getAllData();

	console.groupEnd();
})();
