console.log("📄", "decorators.ts");

(function () {
	function initialize(message: string) {
		return function (target: Function) {
			target.prototype.logInfo = function(): void {
				console.log(message);
			};
		}
	}

	@initialize('Launch of NodeJS and Angular 2 course')
	class Software {
		public name?: string;
		public version?: number;
		logInfo!: () => void;

		getName() {
			return this.name;
		}

		setName(name: string) {
			this.name = name;
		}

		getVersion() {
			return this.version;
		}

		setVersion(version: number) {
			this.version = version;
		}
	}

	var software = new Software();
	software.logInfo();
})();