/*蓝科企业网站系统PHP版
http://www.lankecms.com*/

function left_active(){      
    if(document.getElementById("cat_active"+catid)!=null){
        document.getElementById("cat_active"+catid).className="category_active";
    }else{
        var tid=document.getElementById('left_cat').getElementsByTagName('a')[0].id;
        document.getElementById(tid).className="category_active";
        
        var sid=document.getElementById('left_cat').getElementsByTagName('ul')[0].id
        if(document.getElementById(sid)!=null)document.getElementById(sid).style.display="block";

        if (document.getElementById(sid)) {
            var sul=document.getElementById(sid).getElementsByTagName('li').length;
            if(!sul)document.getElementById(sid).style.display="none";
        }
    }

    if(document.getElementById("smallshow"+catid)!=null){
        document.getElementById("smallshow"+catid).style.display="block";
    }else{
        if(document.getElementById("smallshow"+pid)!=null)document.getElementById("smallshow"+pid).style.display="block";     
    }

    if (document.getElementById('smallshow'+catid)) {
        var sul=document.getElementById('smallshow'+catid).getElementsByTagName('li').length;
        if(!sul)document.getElementById('smallshow'+catid).style.display="none";
    }
}
window.onload=left_active;