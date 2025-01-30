class Project {
	budget: number = 900;

	constructor() {
			console.log("Invoking constructor");
	}

	writeTest() {
			console.log("tests imports");
	}

	fixBugInProduction() {
			console.log("fixBugInProduction");
	}

	addToBuget(@increasedBudget amount: number, @increasedBudget para: string){

		this.budget = this.budget + amount;
	}

	get getBudget() {
			return this.budget;
	}
}


function increasedBudget(target: Object, propertyKey: string, parameterIndex: number) {
	console.log(`${propertyKey} was called with params at index ${parameterIndex}`);
}


const project = new Project();

project.addToBuget(100,20)