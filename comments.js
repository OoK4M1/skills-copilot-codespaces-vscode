// create web server with express
const express = require('express');
const app = express();

// create route handler for get request
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id]);
});

// listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});

// Comments
const commentsByPostId = {
  1: [
    { id: 1, content: 'Comment 1' },
    { id: 2, content: 'Comment 2' },
    { id: 3, content: 'Comment 3' },
  ],
  2: [
    { id: 4, content: 'Comment 4' },
    { id: 5, content: 'Comment 5' },
    { id: 6, content: 'Comment 6' },
  ],
  3: [
    { id: 7, content: 'Comment 7' },
    { id: 8, content: 'Comment 8' },
    { id: 9, content: 'Comment 9' },
  ],
  4: [
    { id: 10, content: 'Comment 10' },
    { id: 11, content: 'Comment 11' },
    { id: 12, content: 'Comment 12' },
  ],
};
```

###

