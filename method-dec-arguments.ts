class Project {
	budget: number = 900;

	constructor() {
		console.log("Invoking constructor")
	}

	// @logDecoratorsInternal
	writeTest() {
		console.log("tests imports");
	}

	@logDecoratorsInternal2
	fixBugInProduction() {
		console.log("fixBugInProduction")
	}

}

// function logDecoratorsInternal<T extends Object>(target: T, propertyKey: string, descriptor: PropertyDescriptor) {
// 	console.log("target",target);
// 	console.log("property", propertyKey, target[propertyKey]);
// 	console.log(descriptor);
// }

function logDecoratorsInternal2(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalMethod: Function = descriptor.value;
	descriptor.value = function(...args: any[]) {
		console.log("what is this, run the code in this");
		originalMethod(this, args)
	}
}

const project = new Project();
project.fixBugInProduction()