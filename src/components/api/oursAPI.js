import ours from "./ours";

export const getThings = ours.get("/things.json");
export const getTables = ours.get("/tables.json");
export const getMonths = ours.get("/months.json");
export const deleteItem = (arr, tableName, year) =>
	ours.put(`/tables/${tableName}/${year}.json`, arr);
export const getCashFlow = ours.get('/cashFlow.json');
