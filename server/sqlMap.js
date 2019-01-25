// sql语句

var sqlMap = {

    // 用户

    user: {

        // add: 'insert into user(id, name, age) values (0, ?, ?)',
        add: "insert into student values(null,'aa','男','1988-10-2','哈哈哈哈')",
        select_table: "select * from student where date>? and date<?",
        // login: "insert into student values(null,?,?,?,?,?)"
        Login: "select * from student where email=? and password=?",
        Register1: "select * from student where phone=? or email=?",
        Register:'insert into student (name,phone,email,password) values (?,?,?,?)',
        add_contact:'insert into liuyan (liuyan_title,liuyan_author,liuyan_neirong,liuyan_news,liuyan_fabu_time,liuyan_img_address,liuyan_user_id) values (?,?,?,?,?,?,?)',
        select_contact: "select * from (select * from liuyan iat order by liuyan_fabu_time desc,liuyan_id desc) as n limit ?,10",
        //取评论数据
        pinglun_take:'select * from pinglun where user_id=?',
        take_select:'select * from ? where ?=?',
        take_liuyan:"select * from liuyan where liuyan_id=?",
        //获取评论表中的关于tiezi的数据
        chaxun_pinglun:"select * from pinglun where tiezi_id=?",
        select_pinglun:"select * from (select * from pinglun iat order by pinglun_time desc) as n limit ?,10",
        //取总留言个数
        every_liuyan:"SELECT COUNT(*) FROM liuyan",
        //取总评论个数
        every_pinglun:"SELECT COUNT(*) FROM pinglun",
        add_pinglun:"insert into pinglun (pinglun_name,pinglun_biao_id,tiezi_id,pinglun_neirong,pinglun_img_address,pinglun_time) values (?,?,?,?,?,?)",
        //查询评论表中的帖子评论个数
        cahxun_geshu:"SELECT COUNT(*) FROM pinglun WHERE tiezi_id=?",
        //回复表插入数据
        insert_huifu:"insert into huifu values(null, ?,?,?,?,?)",
        //获取回复表中的关于tiezi的数据
        take_huifu:"select * from huifu where tiezi_id=?"
    
    }

}

module.exports = sqlMap;