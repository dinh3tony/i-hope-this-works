var Author = require('../models/author.js');
module.exports = {
  index: function(req, res){
    Author.find({}, function(err, data){
      if(err) {
        res.json({msg:"Couldn't find properly", data:data})
      } else {
        res.json({msg:"Found", data:data})
      }
    })
  },
  addNew: function(req,res){
    var author = new Author({
      name:req.body.name,
      created_at:new Date(),
      updated_at:new Date()
    });
    author.save(function(err, data){
      if(err){
        res.json({msg:"Could not save", data:data})
      } else {
        res.json({msg:"Successfully Created", data:data})
      }
    })
  },
  destroy: function(req,res){
    Author.deleteOne({_id:req.params.id}, function(err, data){
      if(err){
        res.json({msg:"Could not delete", data:data})
      } else {
        res.json({msg:"success",data:data});
      }
    })
  },
  update: function(req, res){
    Author.updateOne({_id:req.params.id}, {name:req.body.name}, function(err,data){
      if(err){
        res.json({msg:"Could not delete", data:data})
      } else {
        res.json({msg:"success", data:data})
      }
    })
  },
  show: function(req,res){
    Author.find({_id:req.params.id}, function(err, data){
      if(err){
        res.json({msg:"Could not find",data:data});
      } else {
        res.json({msg:"success",data:data});
      }
    })
  }
};
