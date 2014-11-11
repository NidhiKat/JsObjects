var nano = require('nano')('http://localhost:5984');

var docName = 'bigNames';
var dbName = 'bc_data';

var readIt = function() {
	var prog = nano.db.use(dbName);
	prog.get(docName, { revs_info: true }, function(err, body) {
		if (!err)
			console.log(body);
	});
}

function insert() {
	nano.db.create(dbName);
	var prog = nano.db.use(dbName);

	prog.insert({ 'firstName': 'Suzie', 'lastName': 'Higgins'}, docName, function(err, body) {
	  if (!err)
		console.log(body);
		readIt();
	});
}


insert();
// readIt();
