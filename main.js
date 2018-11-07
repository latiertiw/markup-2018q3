
 var names=['John Doe','Johny Doe','Jonhnathan Doe']
 var i=1;
 document.getElementById('button-1').style.backgroundColor='white';

    /* function first(){
         i=1; document.getElementById('name').textContent=names[i-1];
        //document.getElementById("button-1").style.backgroundColor='white';
       // document.getElementById("button-2").style.backgroundColor='#ffffff00';
        
    }

    
    function second(){i=2;document.getElementById('name').textContent=names[i-1];
    //document.getElementById("button-2").style.backgroundColor='white';
       
}
    function third(){i=3;document.getElementById('name').textContent=names[i-1];;
    
     //  document.getElementById("button-3").style.backgroundColor='white';
}
 */
  function func(){
      let str='button-';
      let name=' ';

      for(let j=1;j<=3;j++){
        name=str+j;
        document.getElementById(name).style.backgroundColor='#ffffff00';
      }
      
      name=str+i;
      document.getElementById(name).style.backgroundColor='white';
       document.getElementById('name').textContent=names[i-1]; 


     i++;
     if(i==4){i=1;}
  }

  var timer=setInterval(func,1000);
   