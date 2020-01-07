 var a,b,i,x,m,n,p,flag=0;
    var score = 0;
  var counter;
 var playing=false;
    function time(){
   if(playing==false)
 {
   flag=1;
   playing = !playing;
   document.getElementById("timeremaining").style.display="block";
   document.getElementById("startreset").innerHTML="Reset";
     var y = document.getElementById("timevalue");
     x = 60;
     counter = setInterval(function(){if(x==0){stopcount();}y.innerHTML = --x;},1000);
   fun();
 }
 else
 location.reload();
 }

    function fun(){
     a = Math.floor(Math.random()*10);
     b = Math.floor(Math.random()*10);
    document.getElementById("board1").innerHTML = a+"x"+b;
     i = Math.floor(Math.random()*4);
    document.getElementsByClassName("box")[i].innerHTML = a*b;
    for(m=0;m<5;m++)
     {
          n=Math.floor(100*Math.random());
          if(n==a*b)
          n=Math.floor(100*Math.random());
          if(i!=m)
          document.getElementsByClassName("box")[m].innerHTML = n;
     }
    }
    function checkans1(z){
       if(playing==true && flag==1)
       {
              if(i==z)
       {
       document.getElementById("correct").style.display="block";
       setTimeout(function(){document.getElementById("correct").style.display="none";},500);
       score++;
       document.getElementById("scorecard").innerHTML = score;
       if(x>0)
       fun();
       else
         {
          clearSetInterval(counter);
          document.getElementById("gameover").style.display="block";
         }
       }
       else
       {
       document.getElementById("wrong").style.display="block";
       setTimeout(function(){document.getElementById("wrong").style.display="none";},500);
        if(x>0)
       fun();
       else
         {
          clearSetInterval(counter);
          document.getElementById("gameover").style.display="block";
         }
       }
       }

    }
     function checkans2(z){
       if(playing==true && flag==1)
        {
        if(i==z)
         {
       document.getElementById("correct").style.display="block";
       setTimeout(function(){document.getElementById("correct").style.display="none";},500);
       score++;
       document.getElementById("scorecard").innerHTML = score;
       fun();
       }
       else
       {
       document.getElementById("wrong").style.display="block";
       setTimeout(function(){document.getElementById("wrong").style.display="none";},500);
       fun();
       }
        }
    }
     function checkans3(z){
     if(playing==true && flag==1)
     {
               if(i==z)
       {
       document.getElementById("correct").style.display="block";
       setTimeout(function(){document.getElementById("correct").style.display="none";},500);
       score++;
       document.getElementById("scorecard").innerHTML = score;
        if(x>0)
       fun();
       else
         {
          clearSetInterval(counter);
          document.getElementById("gameover").style.display="block";
         }
       }
       else
       {
       document.getElementById("wrong").style.display="block";
       setTimeout(function(){document.getElementById("wrong").style.display="none";},500);
       if(x>0)
       fun();
       else
         {
          clearSetInterval(counter);
          document.getElementById("gameover").style.display="block";
         }
       }
     }
    }
     function checkans4(z){
       if(playing==true  && flag==1)
         {
           if(i==z)
       {
       document.getElementById("correct").style.display="block";
       setTimeout(function(){document.getElementById("correct").style.display="none";},500);
       score++;
       document.getElementById("scorecard").innerHTML = score;
        if(x>0)
       fun();
       else
         {
          clearSetInterval(counter);
          document.getElementById("gameover").style.display="block";
         }
       }
       else
       {
       document.getElementById("wrong").style.display="block";
       setTimeout(function(){document.getElementById("wrong").style.display="none";},500);
        if(x>0)
       fun();
       else
         {
          clearSetInterval(counter);
          document.getElementById("gameover").style.display="block";
         }
       }
         }
    }
 function stopcount()
 {
   flag=0;
     document.getElementById("startreset").innerHTML="Play Again!";
   clearInterval(counter);
   document.getElementById("gameover").style.display="block";
   document.getElementById("finalscore").innerHTML = score;
   for(p=0;p<5;p++)
     document.getElementsByClassName("box")[p].innerHTML = "";

 }