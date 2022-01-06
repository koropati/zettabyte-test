const Article = require('../models/article.model.js');
const Comment = require('../models/comment.model.js');

exports.create = (req, res) => {

    if(!req.body.content) {
        return res.status(400).send({
            message: "Article content can't be empty"
        });
    }

    const article = new Article({
        title: req.body.title || "Untitled Article", 
        content: req.body.content
    });


    article.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Article."
        });
    });
};

exports.findAll = (req, res) => {
	
	Article.find()
    .then(articles => {
        res.send(articles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Articles."
        });
    });

};


exports.findOne = (req, res) => {
	Article.findById(req.params.id)
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });            
        }
        res.send(article);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Article with id " + req.params.id
        });
    });
};


exports.update = (req, res) => {

    if(!req.body.content) {
        return res.status(400).send({
            message: "Article content can not be empty"
        });
    }

    Article.findByIdAndUpdate(req.params.id, {
        title: req.body.title || "Untitled Article",
        content: req.body.content
    }, {new: true})
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });
        }
        res.send(article);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating Article with id " + req.params.id
        });
    });
};


exports.delete = (req, res) => {

    Comment.deleteMany({ article: req.params.id })
    .then(comments => {
        console.log("Comment in this article has been deleted!");
    }).catch(err => {
        console.log("ERROR when deleting Comments, ", err.message);
    });

	Article.findByIdAndRemove(req.params.id)
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });
        }
        res.send({message: "Article deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Article with id " + req.params.id
        });
    });
};