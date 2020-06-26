/* eslint-disable */

const _compression = require('compression');

const _compression2 = _interopRequireDefault(_compression);

const _express = require('express');

const _express2 = _interopRequireDefault(_express);

const _fs = require('fs');

const _fs2 = _interopRequireDefault(_fs);

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

const app = (0, _express2.default)();
const port = process.env.PORT || 8080;
app.use((0, _compression2.default)());
app.enable('trust proxy');

app.use(function(req, res, next) {
	if (req.secure || req.headers.host === `localhost:${port}`) {
		next();
	} else {
		res.redirect(`https://${req.headers.host}${req.url}`);
	}
});

app.use(_express2.default.static('./build'));

app.get('*', function(req, res) {
	res.sendFile(_path2.default.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`App and API is live at http://localhost:${port}`);
});
