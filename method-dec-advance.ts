class Project {
	budget: number = 900;

	constructor() {
			console.log("Invoking constructor");
	}

	writeTest() {
			console.log("tests imports");
	}

	@withBudget(40)
	fixBugInProduction() {
			console.log("fixBugInProduction");
	}

	get getBudget() {
			return this.budget;
	}
}

function withBudget(budget: number) {
	return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
			const originalMethod = descriptor.value;
			descriptor.value = function(...args: any[]) {
					const instance = this as { budget: number };
					if (instance.budget) {
							instance.budget = budget;
					}
					originalMethod.apply(this, args);
			};
	};
}

const project = new Project();

console.log(project.getBudget);
project.fixBugInProduction();
console.log(project.getBudget);