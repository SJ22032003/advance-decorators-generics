type TTodos = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

async function fetchDetails<T>(url: string): Promise<T> {
	const resp = await fetch(url, { method: "GET" });
	return await resp.json();
}

async function getAllTodos(): Promise<TTodos[]> {
	const url = `https://jsonplaceholder.typicode.com/todos`;
	const todos = await fetchDetails<TTodos[]>(url);
	return todos;
}

function addStatusToTodos<T extends TTodos>(todos: T[]): (TTodos & { status: 'active' | 'inactive'})[] {
	const updatedTodos: (T & { status: 'active' | 'inactive'})[] = [];
	for(let i = 0; i < todos.length; i++) {
		updatedTodos.push({
			...todos[i],
			status: 'active',
		})
	}
	return updatedTodos;
}

async function run() {
	try {

		const allTodos = await getAllTodos();
		const a = addStatusToTodos(allTodos);

		console.log(a);

	} catch(error) {
		if(error instanceof Error) {
			console.log(error.message)
		}
	}
}

run();