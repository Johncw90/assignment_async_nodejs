var fs = require('fs');

var fsp = {

	readFile: function(filename) {
		return new Promise(function(resolve,reject) {
			fs.readFile(filename, 'utf8', function(err, data) {
				if (err) {
				 reject(err);
				} else {
				 resolve(data);
				}
			});
		});
	},

	writeFile: function(filename, message) {
		return new Promise(function(resolve,reject) {
			fs.writeFile(filename, message, 'utf8', function(err, data) {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
	},


	appendFile: function(filename, message) {
		return new Promise(function(resolve,reject) {
			fs.appendFile(filename, message, 'utf8', function(err, data) {
				if (err) {
					reject(err);
				} else {
					resolve(data);
				}
			});
		});
	}




































}