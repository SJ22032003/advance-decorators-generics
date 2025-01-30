@withDepartment('HR')
class Manager {
	task:string = "small task";

	constructor() {
		console.log("constructor")
	}
}

function withDepartment(department: string) {
	return function <T extends { new (...args: any[]): {}}>(baseClass: T){
		return class extends baseClass {
			department = department || "department";
			constructor(...args: any[]) {
				super(...args);
				console.log(`adding department: ${department} in ${baseClass.name} class`)
			}
		}
	}
}


const manager = new Manager();

console.log(manager)