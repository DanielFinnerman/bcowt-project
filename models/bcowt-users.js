'use strict';

const connection = require('../database/db.js');

exports.getAll = async () => {
	try {
		const [results, fields] = await connection.query('SELECT * FROM users');
		console.log(results);
		console.log(fields);
		return results;
	} catch (e) {
		console.log(e);
		throw 'db error :(';
	}
};

exports.search = async (name) => {
	try {
		const [results] = await connection.query('SELECT * FROM users WHERE user_name LIKE ?', [name]);
		return results;
	} catch(e) {
		console.log(e);
		throw 'db error :(';
	}
};

exports.insert = async (name, email, pass) => {
	if (name && email && pass) {
		try {
			const [results] = await connection.query('INSERT INTO users (user_name, user_email, user_pass) VALUES (?, ?, ?)', [name, email, pass]);
			return results;
		} catch (e) {
			console.log(e);
			throw('db error :(');
		}
	}
};

exports.getName = async (name) => {
	if (name) {
		try {
			const [results] = await connection.query('SELECT user_name FROM users WHERE user_name = ?', [name]);
			if (results[0] === undefined){
				console.log("user not found");
			}else {
				console.log(results[0].user_name);
				return results[0].user_name;
			}
			return results[0].user_name;
		} catch(e) {
			console.log(e);
			throw 'db error :(';
		}
	}
};

exports.getId = async (name) => {
	if (name) {
		try {
			const [results] = await connection.query('SELECT user_id FROM users WHERE user_name = ?', [name]);
			if (results[0] === undefined){
				console.log("user not found");
			}else {
				console.log(results[0].user_id);
				return results[0].user_id;
			}
			return results[0].user_id;
		} catch(e) {
			console.log(e);
			throw 'db error :(';
		}
	}
};

exports.getPass = async (name) => {
	if (name) {
		try {
			const [results] = await connection.query('SELECT user_pass FROM users WHERE user_name = ?', [name]);
			if (results[0] === undefined){
				console.log("no pass");
				return "no pass found";
			}else {
                console.log(results[0].user_pass);
                return results[0].user_pass;
            }
		} catch (e) {
			console.log(e);
			throw('db error :(');
		}
	}
};
