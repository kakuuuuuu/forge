var mongoose = require('mongoose');
module.exports = {
  getuser: function(req, res){
    res.json(req.user)
  },
  amazonsearch: function(req, res){
    console.log('searching')
    console.log(req.body)
    client.itemSearch({
      searchIndex: 'VideoGames',
      keywords: req.body.name,
      responseGroup: 'ItemAttributes,Offers,Images'
    }).then(function(results){
      console.log(results);
      res.json(results)
    }).catch(function(err){
      console.log(err);
      res.json({error:err})
    });
  }
}
