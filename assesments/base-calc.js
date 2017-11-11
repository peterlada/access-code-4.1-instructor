var http = require('http');
http.createServer((request, response) => {
  if (request.method !== 'GET') {
    response.statusCode = 404;
    response.end();
    return;
  }
  request.on('error', (err) => {
    console.error(err);
  });
  var obj = {};
  obj.original = {};
  obj.conversions = {};
  var url = request.url.slice(1).split('/');
  if (url[0] === 'favicon.ico') {
    response.statusCode = 404;
    response.end();
    return;
  } else if (!url[0].length) {
    obj.hello = 'Welcome to the Base Conversion API.';
    obj.hint1 = 'Try visiting http://codyhess.com:9000/25.';
    obj.hint2 = 'Try visiting http://codyhess.com:9000/25/hex.';

    var std = 'show this message';
    var num = 'assume {number} has a decimal base and';
        num += ' return an object with all conversions';
    var bdh = 'return all conversions for {number} with base';
        bdh += ' {bin|dec|hex}';
    obj.endpoints = e = {};
    e['http://codyhess.com:9000/'] = std;
    e['http://codyhess.com:9000/{number}'] = num;
    e['http://codyhess.com:9000/{number}/{bin|dec|hex}'] = bdh;
    delete obj.original;
    delete obj.conversions;
    response.statusCode = 200;
    response.setHeader('content-type', 'application/json');
    response.setHeader('access-control-allow-origin', '*');
    response.write(JSON.stringify(obj));
    response.end();
    return;
  } else if (url.length === 1) {
    obj.original = {
      value: url[0],
      base: 10
    }
    obj.conversions.decimal = parseInt(url[0],10).toString(10);
    obj.conversions.binary = parseInt(url[0],10).toString(2);
    obj.conversions.hex = parseInt(url[0],10).toString(16);
  } else if (['bin','dec','hex'].includes(url[1])) {
    var b = url[1];
    if (b === 'bin') { b = 2; }
    if (b === 'dec') { b = 10; }
    if (b === 'hex') { b = 16; }
    obj.original = {
      value: url[0],
      base: b
    }
    obj.conversions.decimal = parseInt(url[0],b).toString(10);
    obj.conversions.binary = parseInt(url[0],b).toString(2);
    obj.conversions.hex = parseInt(url[0],b).toString(16);
  } else {
    obj.error = {
      message: 'invalid request',
      url: 'http://codyhess:9000'
    }
  }
  response.statusCode = 200;
  response.setHeader('content-type', 'application/json');
  response.setHeader('access-control-allow-origin', '*');
  response.write(JSON.stringify(obj));
  response.end();
  return;
}).listen(9000);
