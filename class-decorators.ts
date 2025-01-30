@withEmploymentDate
class Manager {
	task: string = 'Simple Task'
	project: string = 'Simple Project'

	constructor() {
		console.log('initilize manager class')
	}

}

function withEmploymentDate<T extends { new(...args: any[]): {}}>(baseClass: T, ctx: ClassDecoratorContext){
	return class extends baseClass {
		employmentDate = new Date().toISOString();
		constructor(...args: any[]) {
			super(...args);
			console.log("Adding employmenyDate");
		}
	}
}

const manager = new Manager() as Manager & { employmentDate: string };

console.log(manager.employmentDate)