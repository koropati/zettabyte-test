module.exports = (app) => {
    const article = require('../controllers/article.controller.js');

    // Create a new Article
    app.post('/article', article.create);

    // Retrieve all Article
    app.get('/article', article.findAll);

    // Retrieve a single Article with id
    app.get('/article/:id', article.findOne);

    // Update a Article with id
    app.put('/article/:id', article.update);

    // Delete a Article with id
    app.delete('/article/:id', article.delete);
}