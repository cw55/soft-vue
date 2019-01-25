var models = require('../db');
var express = require('express');
var fd=require('formidable');
var sd=require('silly-datetime');
var fs=require('fs');
var path=require('path');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.age], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/select', (req, res) => {
    var sql = $sql.user.select_table;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.date1,params.date2], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/upload', (req, res) => {
    var form=fd.IncomingForm();
    form.uploadDir='../static/uploads/photos/';
    form.maxFieldsSize = 5 * 1024 * 1024;
    form.encoding = 'utf-8'; //设置编辑
    form.parse(req,function(err,fields,files){
        if(err){
            console.log(err);
            return;
        }
        
        var oldPath=files.multipartFiles.path;
        var oldName=files.multipartFiles.name;
        var time=sd.format(new Date(),'YYYYMMDDHHmmss');
        var extName=path.extname(oldName);
        var newName='../static/uploads/photos/'+time+extName;
        fs.rename(oldPath,newName,function(err){
            
            // res.redirect('/');
            var data = {flag:"ok",'newName':time+extName};
            if(err){
                console.log(err);
                data.flag = "no";
            }
            res.end(JSON.stringify(data));
        });
    });
});

//login登陆
router.post('/Login', (req, res) => {
    var sql = $sql.user.Login;
    var params = req.body;
    // console.log(params);
    conn.query(sql, [params.email,params.password], function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
        // res.end(JSON.stringify(result));
        // if (result) {
        //     res.end(JSON.stringify(result));
        // }else{
        //     res.end(JSON.stringify(result));
        // }
    })
});

router.post('/Register', (req, res) => {
    var sql = $sql.user.Register1;
    var params = req.body;
    // console.log(params);
    //先判断是否存在相同的手机号和邮箱
    conn.query(sql, [params.phone,params.email], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log(result);
            console.log(result.length);
            // res.end(JSON.stringify(result));
            //判断是否有相同的，如果存在直接返回值，并提示
            if(result.length>0){
                res.end(JSON.stringify({'zt':'0'}));
            }else{
                // jsonWrite(res, result);
                console.log('okok');
                console.log(params);
                var sql1 = $sql.user.Register;
                conn.query(sql1, [params.user,params.phone,params.email,params.password], function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                    console.log(result)
                    if(result){
                        //注册完成
                        res.end(JSON.stringify({'zt':'1','user_id':result.insertId}));
                    }
                })
            }
        }
    })
});

//测试向留言liuyan 表中添加数据
router.post('/add_contact', (req, res) => {
    //liuyan_title,liuyan_author,liuyan_neirong,liuyan_news,liuyan_fabu_time,
    //liuyan_img_address
    var sql = $sql.user.add_contact;
    var params = req.body;
    // console.log(params);
    var arr = [params.biaoti,params.name,params.neirong,params.news,params.fabu_time,params.address,params.userid];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        if (result) {
            jsonWrite(res, result);
            //向评论表中插入一条数据
            // console.log("bb："+result.insertId)
            var shengchengID = result.insertId;//本次新增留言的生成id
            var sql2 = $sql.user.add_pinglun;
            var arr2 = [params.name,1,shengchengID,params.neirong,params.address,params.fabu_time];
            conn.query(sql2,arr2,function(e,result){
                if(e){
                    console.log('向评论表中插入一条数据:'+e)
                }
            })
        }
        // res.end(JSON.stringify(result));
        // if (result) {
        //     res.end(JSON.stringify(result));
        // }else{
        //     res.end(JSON.stringify(result));
        // }
    })
});

//添加回复
router.post('/insert_huifu', (req, res) => {
    var sql = $sql.user.insert_huifu;
    var params = req.body;
    // console.log(params);
    var arr = [params.name,params.neirong,params.tiezi_id,params.louceng,params.time];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});
//添加评论
router.post('/add_pinglun', (req, res) => {
    var sql = $sql.user.add_pinglun;
    var params = req.body;
    // console.log(params);
    var arr = [params.name,params.louceng,params.tiezi_id,params.neirong,params.address,params.time];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/select_contact', (req, res) => {
    var sql = $sql.user.select_contact;
    var params = req.body;
    // console.log(params);
    var arr = [params.yema];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//取评论数据 
router.post('/pinglun_take', (req, res) => {
    var sql = $sql.user.pinglun_take;
    var params = req.body;
    // console.log(params);
    var arr = [params.user_id];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});


router.post('/chaxun_pinglun', (req, res) => {
    var sql = $sql.user.chaxun_pinglun;
    var params = req.body;
    // console.log(params);
    var arr = [params.tiezi_id];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/take_select', (req, res) => {
    var sql = $sql.user.take_select;
    var params = req.body;
    console.log(params);
    var arr = [params.fromselect,params.where,params.zhi];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//通过liuyan_id 查出一条记录并做为1楼数据
router.post('/take_liuyan', (req, res) => {
    var sql = $sql.user.take_liuyan;
    var params = req.body;
    // console.log(params);
    var arr = [params.id];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//通过tiezi_id取评论前10条数据
router.post('/select_pinglun', (req, res) => {
    var sql = $sql.user.select_pinglun;
    var params = req.body;
    console.log(params);
    var arr = [params.yema];
    conn.query(sql, arr, function(err, result) {
        if (err) {
            console.log(err);
        }
        // console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//取评论表中所有记录的个数
router.post('/every_pinglun', (req, res) => {
    var sql = $sql.user.every_pinglun;
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});
router.post('/every_liuyan', (req, res) => {
    var sql = $sql.user.every_liuyan;
    conn.query(sql, [], function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result)
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//获取回复表中tiezi_id的数据
router.post('/take_huifu', (req, res) => {
    var sql = $sql.user.take_huifu;
    var params = req.body;
    var arr = [params.tiezi_id];
    conn.query(sql, arr, function(err,result) {
        if(err){
            console.log(err)
        }
        console.log(result)
        if(result){
            jsonWrite(res, result);
        }
    })
})

module.exports = router;