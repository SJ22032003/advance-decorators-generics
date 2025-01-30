const scrumMasterRole = {
	holdMeetings: false,
	teams: ['Team 1', 'Team 2']
}

const productManagerRole = {
	holdsMeetings: true,
	reportsTo: "Upper Management"
}

function mergeRoles<T extends object, V extends object>(role1:T, role2:V): T & V {
	return {...role1, ...role2};
}

function run() {
	const merger = mergeRoles(scrumMasterRole, productManagerRole);
	console.log(merger);
}

run()