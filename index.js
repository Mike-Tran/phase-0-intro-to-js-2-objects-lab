const employee = {
	name: "Bob",
	streetAddress: "1234 West Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
	return {
		...employee,
		[key]: value,
	};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
	employee[key] = value;
	return employee;
}

function deleteFromEmployeeByKey(employee, key) {
	const newEmployee = {...newEmployee};
	delete newEmployee[key];
	return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
	delete employee[key];
	return employee;
}