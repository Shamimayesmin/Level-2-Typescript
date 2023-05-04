// Mocking

const makePromise = (): Promise<string> => {
	return new Promise<string>((resolve, reject) => {
		const data: string = "Data is fetched";
		if (data) {
			resolve(data);
		} else {
			reject("Failed to fetch data");
		}
	});
};
const makePromiseBoolean = (): Promise<boolean> => {
	return new Promise<boolean>((resolve, reject) => {
		const data: boolean = true;
		if (data) {
			resolve(data);
		} else {
			reject("Failed to fetch data");
		}
	});
};

type dataType = {
	data: string;
};
const makePromiseObject = (): Promise<dataType> => {
	return new Promise<dataType>((resolve, reject) => {
		const data: dataType = { data: "Data is fetched" };
		if (data) {
			resolve(data);
		} else {
			reject("Failed to fetch data");
		}
	});
};

const getPromiseData = async (): Promise<string> => {
	const data = await makePromise();
	return data;
};
const getPromiseDataBoolean = async (): Promise<boolean> => {
	const data = await makePromiseBoolean();
	return data;
};
const getPromiseDataObject = async (): Promise<dataType> => {
	const data = await makePromiseObject();
	return data;
};

// JSON Placeholder

interface ITodo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}
const getTodo = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	return await response.json();
};

const getTodoData = async(): Promise<void>=>{
    const result = await getTodo();
    console.log(result);
}

getTodoData()
