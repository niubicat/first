function $(id){
  return typeof id==='string'?document.getElementById(id):id;
}

window.onload= function(){
	// var wrapt = document.getElementById('wrap-tit').className('wrap-tit');
 //    var wrLis = wrapt.getElementsByTagName('li');
   var wrLis = $("wrap-tit").getElementsByTagName('li');
   var divs=$("wrap-con").getElementsByTagName('div');
  // var divs=$('notice-con').getElementsByTagName('div');
    for(var i=0; i< wrLis.length;i++){
        wrLis[i].id=i;
        wrLis[i].onclick = function(){
				
					wrLis[i].className ='';
			
        		wrLis[this.id].className ='select';
        		alert(wrLis[this.id].className);
        }

    }
}	