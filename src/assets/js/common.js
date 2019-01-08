
    //模板1
    function moban1(title,name,content,image){
        var content_val = content.split("&").join("<br>");
        var div = '<div class="my_advantage"><div class="my_title"><span>'+title+'</span></div>'+
                '<div class="my_box"><p>'+
                '<span>'+name+'</span>'+
                '<span>'+content_val+'</span> </p>'+
                '<img src="'+image+'" alt="">'+
                '</div></div>'
        return div
    }

    //模板2
    function moban2(title,content_ul,image){
        var ul = "";
        for(var r=0;r<content_ul.length;r++){
            ul += '<li><span>- '+content_ul[r]+'</span></li>';
        }
        var div = '<div class="my_advantage"><div class="my_title"><span>'+title+'</span></div>'+
                '<div class="my_box row">'+
                '<div class="my_left col-md-6 col-sm-6 col-xs-12"><ul>'+ul+'</ul></div>'+
                '<div class="my_right col-md-6 col-sm-6 col-xs-12">'+
                '<img src="'+image+'" alt="">'+
                '</div></div></div>';
        return div
    }

    //模板3
    function moban3(name,main){
        var div = '<div class="my_main">'+
                '<p><span>'+name+'</span><span>主要功能：</span></p>'+
                '<p><span>'+main+'</span></p>'+
                '</div>'
        return div
    }
    
    //填充到页面
    export const append = function (arr){
        var div_box = "";
        for(var j=0;j<arr.length;j++){
            var div = arr[j];
            if(div["main"]==""&&div["content"]!=""){
                //moban1 格式
                div_box += moban1(div["title"],div["name"],div["content"],div["image"]);
            }else if(div["main"]==""&&div["content_ul"]!=""){
                div_box += moban2(div["title"],div["content_ul"],div["image"]);
            }else if(div["main"]!=""){
                div_box += moban3(div["name"],div["main"]);
            }
        }
        // $(div_box).appendTo("#my_content");
        // $("#my_content").html(div_box);
        return div_box
    }
