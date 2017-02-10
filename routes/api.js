var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    if (req.query && req.query.type) {
        //console.log(params.query.callback);
        //res.jsonp({status: 200, message: "这是一个JSONP接口", data:[]});
        res.render('index', {
            "title":"新闻",
            "URL":"www.api.com?type="
        });
    } else {
        //res.json({status: 200, message: "这是一个JSON接口", data:[]});
        res.render('index', {
            "title":"新闻",
            "URL":"www.api.com"
        });
    }
});

module.exports = router;
