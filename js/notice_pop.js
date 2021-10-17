    var ShowMsg={  
        title:'访客公告',  
        content:'1950年10月19日，中国人民志愿军奉命开赴朝鲜战场，与朝鲜人民军并肩作战。1950年10月25日，中国人民志愿军打响入朝后的第一次战役，以光荣的胜利拉开了伟大的抗美援朝战争的帷幕。',  
        width:'100%',  
        height:'120px',  
        setTitle:function(value){  
            this.title=value;  
        },  
        setContent:function(value){  
            this.content=value;  
        },  
        getTitle:function(){  
            return this.title;  
        },  
        getContent:function(){  
            return this.content;  
        },  
        show:function(){  
            //弹窗div  
            var _winPopDiv = document.createElement('div');    
                _winPopDiv.id="_winPopDiv";    
                _winPopDiv.style.cssText = '/* width: 300px; *//* position: absolute; *//* right: 0px; *//* bottom: 0px; *//* border: 1px solid rgb(102, 102, 102); *//* margin: 0px; *//* padding: 1px; *//* overflow: hidden; *//* display: block; *//* left: 0px; */';  
            //消息标题div  
            var _titleDiv= document.createElement('div');    
                _titleDiv.id="_titleDiv";     
                _titleDiv.innerHTML=this.getTitle();    
                _titleDiv.style.cssText = 'width: 100%;height: 22px;line-height: 20px;/* background: rgb(0 0 0); */font-weight: bold;text-align: left;font-size: 14px;position: absolute;display: block;bottom: 0px;right: 1px !important;right: 18px;width: 300px;/* height:200px; *//* line-height: 30px; */position: fixed;border: 1px solid #fff;text-align: center;color: #fff;/* background: #efefef; */;left: 0px;"';    
                _winPopDiv.appendChild(_titleDiv);  
            //关闭消息按钮span  
            var _closeSpan= document.createElement('span');    
                _closeSpan.id="_closeSpan";   
                _closeSpan.innerHTML="X";  
                _closeSpan.style.cssText = 'position:absolute; right:4px; top:-1px; color:#FFF; cursor:pointer;font-size:14px;';    
                _titleDiv.appendChild(_closeSpan);   
            //内容div  
            var _conDiv= document.createElement('div');   
                _conDiv.id="_conDiv";    
                _conDiv.style.cssText = 'height: 150px;font-weight: bold;/* text-decoration: underline; */display: block;bottom: 0px;width: 300px;line-height: 20px;position: fixed;border: 1px solid rgb(255, 255, 255);text-align: center;color: rgb(255, 255, 255);right: 1px !important;;left: 0px;"';    
                _conDiv.innerHTML=this.getContent();  
                _winPopDiv.appendChild(_conDiv);      
            document.body.appendChild(_winPopDiv);    
            //关闭span绑定事件  
            var closeDiv = document.getElementById("_closeSpan");  
            if(closeDiv.addEventListener){  
                closeDiv.addEventListener("click",function(e){   
                    if (window.event != undefined) {    
                        window.event.cancelBubble = true;    
                    } else if (e.stopPropagation) {    
                        e.stopPropagation();    
                    }    
                    document.getElementById('_winPopDiv').style.cssText="display:none;";  
                },false);  
            }else if(closeDiv.attachEvent){  
                closeDiv.attachEvent("onclick",function(e){    
                    if (window.event != undefined) {    
                        window.event.cancelBubble = true;    
                    } else if (e.stopPropagation) {    
                        e.stopPropagation();    
                    }    
                    document.getElementById('_winPopDiv').style.cssText="display:none;";  
                });  
            }  
        }  
    };  
    ShowMsg.show();  