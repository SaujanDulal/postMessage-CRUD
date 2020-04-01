const mongoose = require('mongoose');
mongoose.connect(
	'mongodb://localhost:27017/postManagerDB',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err) => {
		// if not error, error is false, ! converts to true
		if (!err) {
			console.log('MongoDb connection succeeded');
		} else {
			console.log(`Error while connecting to MongoDb : ${JSON.stringify(err, undefined, 2)}`);
		}
	}
);
