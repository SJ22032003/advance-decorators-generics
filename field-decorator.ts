type Task = {
    description: string;
    level: 'easy' | 'medium' | 'hard' | 'challenge';
}

class Manager {

    @withChallengingTaskAdded
    tasks: Task[] = [];

    constructor() {
        console.log('running constructor');
    }

    get getAllTask() {
        return this.tasks;
    }

}

function withChallengingTaskAdded<T, V extends Task[]>(target: undefined, ctx: ClassFieldDecoratorContext<T, V>) {
    return function (this: T, initialValue: V) {
        initialValue.push({
            description: "Adding Challenging Task",
            level: "challenge"
        });
        return initialValue;
    }
}

const manager = new Manager();
console.log(manager.getAllTask);