/**
 * New node file
 */
exports.setHeaders= function (res)
{
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type,x-requested-with,Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
	res.setHeader('Access-Control-Max-Age', '10');
	res.setHeader('Allow', 'GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH');
}