function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){
  var index=0;
  var timer= null;
  var wrapT = document.getElementById('wrap-tit');
  var  conTabs = document.getElementById('wrap-con').getElementsByTagName('div');
  var lis=wrapT.getElementsByTagName('li');  
  //遍历每一个页签绑定事件
  for(var i=0;i<lis.length;i++){
    lis[i].id=i;
    //鼠标滑过清定时器
    lis[i].onmouseover=function (){           
      clearInterval(timer);
      chaOpt(this.id);
      }
    //鼠标滑过后定时器2秒后工作
    lis[i].onmouseout=function(){
         timer=setInterval(autoPlay,2000);
      }     
    }

    //定时器是否存在
    if(timer){
    clearInterval(timer);
    timer=null;
   }
   //定时间开始工作 
    timer=setInterval(autoPlay,2000);
    //定时器轮播工作
    function autoPlay(){
      index++;
      if(index>=lis.length){
         index=0;
      }
      chaOpt(index);
    }

  function chaOpt(curIndex){
    
    console.log(index);
      for(var j=0;j<lis.length;j++){
      lis[j].className='';
      conTabs[j].style.display='none';
      }
      lis[curIndex].className='select';
      conTabs[curIndex].style.display='block';
      index=curIndex;
  }
}