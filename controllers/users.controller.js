//The purpose of these controllers is to communicate with the database, usually performing some data manipulation
const { query } = require("../db/utils");

export async function getAllUsers() {
    console.log('getAllUsers ran')
    return await query(`SELECT * FROM employees`);
}

export async function getSingleUser(userId) {
    console.log('getSingleUser ran')
    return await query(`SELECT * FROM employees WHERE EmployeeId = ?`, [userId]);
}
