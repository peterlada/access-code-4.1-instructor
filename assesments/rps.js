var http = require('http');
var users = {};
http.createServer((req, res) => {
  req.on('error', (err) => {
    response.statusCode = 404;
    response.end();
    return;
  });
  var url = req.url.slice(1).split('/');
  if (url[0] === 'favicon.ico') {
    res.statusCode = 404;
    res.end();
    return;
  }
  if (['rock','paper','scissors'].includes(url[0])) {
    rps = Math.random();
    rps = (rps < .33 ? 'rock':(rps < .66) ? 'paper':'scissors');
    var obj = {};
    obj.user = url[0];
    obj.ai = rps;
    if (obj.user === obj.ai) {
      obj.result = 'tie';
    } else if (obj.user === 'rock' && obj.ai === 'scissors'
        || obj.user === 'scissors' && obj.ai === 'paper'
        || obj.user === 'paper' && obj.ai === 'rock') {
      obj.result = 'win';
    } else {
      obj.result = 'lose';
    }
    if (url.length === 2 && url[1]) {
      u = url[1];
      if (!users[u]) {
        users[u] = { name: u, win: 0, lose: 0, tie: 0 };
      }
      users[u][obj.result] += 1;
      obj.stats = users[u];
    }
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');
    res.setHeader('access-control-allow-origin', '*');
    res.end(JSON.stringify(obj));
    return;
  } else {
    res.statusCode = 200;
    res.setHeader('content-type', 'application/json');
    res.setHeader('access-control-allow-origin', '*');
    res.end(JSON.stringify({
      hello: 'Welcome to the Rock Paper Scissors API.',
      hint1: 'Try visiting http://codyhess.com:9001/rock',
      hint2: 'Try visiting http://codyhess.com:9001/rock/cody',
      endpoints: {
        'http://codyhess.com:9001': 'show this message',
        'http://codyhess.com:9001/{rock|paper|scissors}':
          'apply {rock|paper|scissors} against the AI and return'
          + ' the result',
        'http://codyhess.com:9001/{rock|paper|scissors}/{name}':
          'apply {rock|paper|scissors} against the AI and track'
          + ' the statistics for {name}'
      }
    }));
    return;
  }
}).listen(9001);
