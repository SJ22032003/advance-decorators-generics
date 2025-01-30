
@withEmploymentDate
class Manager {
	task:string = "Simple Task"

	project: string = "Simple Project"

	constructor() {
		console.log("running constructor");
	};

}

function watchChange<T extends Object>(target: T, key: keyof T & string) {
	console.log("calling watch decortor", target, key);

	let property = target[key];

	const getter = () => {
		return property;
	}

	const setter = (newValue: any) => {
		console.log(`${key} changed from ${property} to ${newValue}`);
		property = newValue;
	}

	Object.defineProperty(target, key, {
		get: getter,
		set: setter
	})

}

function withEmploymentDate<T extends { new (...args): {}}>(baseClass: T) {
	console.log("Invoking decortor");
	return class extends baseClass {
		employmentDate = new Date().toISOString();
		constructor(...args: any[]) {
			super(...args);
			console.log(`adding employmentDate to ${baseClass.name}`);
		}
	}
}

const manager = new Manager();

console.log(manager);