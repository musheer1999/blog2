const router = require('express').Router()
const Blog = require('../models/blog.model')
var express = require('express')

router.route('/').get((req,res)=>{
    Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/show/:id').get((req, res) => {
    Blog.findById(req.params.id)
      .then(exercises => res.json(exercises))
      .catch(err => res.status(400).json('Error: ' + err));
  });



router.route('/add').post((req,res)=>{

const username = req.body.username;
const heading = req.body.heading;
const text = req.body.text;
const commentby = req.body.commentby;
const comment = req.body.comment;

   const newblog = new Blog({
        username,
        heading,
        text,
        commentby,
        comment
    })
    newblog.save()
    .then(() => res.json('the blog is added'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Blog.findById(req.params.id)
      .then(blog => {
        blog.commentby = req.body.commentby;
        blog.comment = req.body.comment;
        
  
        blog.save()
          .then(() => res.json('blog!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



module.exports = router;