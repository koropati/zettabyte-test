module.exports = (app) => {
    const comment = require('../controllers/comment.controller.js');

    // Create a new Comment
    app.post('/comment', comment.create);

    // Retrieve all Comment
    app.get('/comment', comment.findAll);

    // Retrieve all Comment by Id Article
    app.get('/comment/article/:id', comment.findByArticle);

    // Retrieve a single Comment with id
    app.get('/comment/:id', comment.findOne);

    // Update a Comment with id
    app.put('/comment/:id', comment.update);

    // Delete a Comment with id
    app.delete('/comment/:id', comment.delete);
}