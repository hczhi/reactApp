var express = require("express");
var router = express.Router();

router.get("/getdemo", function (req, res) {
    res.send({
        code: 1,
        msg: "成功"
    });
})
router.post("/postdemo", function (req, res) {
    res.send({
        code: 1,
        msg: "成功"
    });
})

module.exports = router;






