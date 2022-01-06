const Comment = require('../models/comment.model.js');
const Article = require('../models/article.model.js');

exports.create = (req, res) => {

    if(!req.body.comment) {
        return res.status(400).send({
            message: "Comment can't be empty"
        });
    }
    if(!req.body.article) {
        return res.status(400).send({
            message: "Article ID can't be empty"
        });
    }


    Article.findById(req.body.article)
    .then(article => {
        if(!article) {
            return res.status(404).send({
                message: "Article not found with id " + req.params.id
            });            
        }
        const comment = new Comment({
            comment: req.body.comment, 
            article: req.body.article
        });

        comment.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Comment."
            });
        });

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

exports.findAll = (req, res) => {
	
	Comment.find()
    .then(comments => {
        res.send(comments);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Comments."
        });
    });

};


exports.findByArticle = (req, res) => {
    
    Comment.find({ article: req.params.id })
    .then(comments => {
        res.send(comments);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Comments."
        });
    });

};


exports.findOne = (req, res) => {
	Comment.findById(req.params.id)
    .then(comment => {
        if(!comment) {
            return res.status(404).send({
                message: "Comment not found with id " + req.params.id
            });            
        }
        res.send(comment);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Comment not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Comment with id " + req.params.id
        });
    });
};


exports.update = (req, res) => {

    if(!req.body.comment) {
        return res.status(400).send({
            message: "Comment can't be empty"
        });
    }

    Comment.findByIdAndUpdate(req.params.id, {
        comment: req.body.comment,
    }, {new: true})
    .then(comment => {
        if(!comment) {
            return res.status(404).send({
                message: "Comment not found with id " + req.params.id
            });
        }
        res.send(comment);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Comment not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating Comment with id " + req.params.id
        });
    });
};


exports.delete = (req, res) => {
	Comment.findByIdAndRemove(req.params.id)
    .then(comment => {
        if(!comment) {
            return res.status(404).send({
                message: "Comment not found with id " + req.params.id
            });
        }
        res.send({message: "Comment deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Comment not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete Comment with id " + req.params.id
        });
    });
};