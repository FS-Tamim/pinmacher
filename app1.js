const generatePin=document.querySelector(".generate-btn");
const numberBtns=document.querySelectorAll(".button");
const submitBtn=document.querySelector(".submit-btn");
var randomPin;
var output="";
let count=0;
let t;

generatePin.addEventListener("click",function(e){
    count=0;
    randomPin=Math.round(Math.random()*9000+1000);
    document.querySelector(".randomnumber").value=randomPin;
    document.querySelector(".randomnumber").style.textAlign="center";
    document.querySelector(".userPin").value="";
    output="";
    document.querySelector(".notify1").style.display="none";
    document.querySelector(".notify2").style.display="none";
});
   numberBtns.forEach(function(btn){
       btn.addEventListener("click",function(e){

        const classes=e.currentTarget.classList;
           if(classes.contains("number")){
            const value=e.currentTarget.innerText;
            if(output.length<4){
             output+=value;
            }
            document.querySelector(".userPin").value=output;
            document.querySelector(".userPin").style.textAlign="center";
           }
           if(classes.contains("clk")){
               console.log("hi");
               document.querySelector(".userPin").value="";
               output="";
           
           } 
           if(classes.contains("backspace") && output.length>0){
               output=output.slice(0,-1);
               document.querySelector(".userPin").value=output;
            
            }
        });
    });

    submitBtn.addEventListener("click",function(){
                
        const pin=document.querySelector(".randomnumber").value
        const userPin=document.querySelector(".userPin").value
        if(pin==userPin && pin.length>3){
            document.querySelector(".notify2").style.display="block";
            count=0;
        }else{
            document.querySelector(".notify1").style.display="block";
            document.querySelector(".notify2").style.display="none";
            count++;
             
            if(count==1){
                document.querySelector(".action-left").innerText="2 try left";
        
            }else if(count==2){
                document.querySelector(".action-left").innerText="1 try left";
            }else if(count==3){
                document.querySelector(".generate-btn").disabled=true;
                document.querySelector(".submit-btn").disabled=true;

                const nowTime=Math.floor(((new Date().getTime())/1000));
                let futureTime=nowTime+5;
               function getRemaingTime()
                {
                    const presentTime=Math.floor((new Date().getTime())/1000);
                    t=futureTime-presentTime;
                    document.querySelector(".action-left").innerText=`remaing ${t} seconds`;
                    if(t<1){
                        clearInterval(countdown);
                        document.querySelector(".action-left").innerText=`<span class="count">3</span> try left`;
                        document.querySelector(".notify1").style.display="none";
                        document.querySelector(".randomnumber").value="";
                        document.querySelector(".userPin").value="";
                        document.querySelector(".action-left").innerHTML="3 try left";
                        document.querySelector(".generate-btn").disabled=false;
                        document.querySelector(".submit-btn").disabled=false;
                        count=0;
                        
                    }
                }
                const countdown=setInterval(getRemaingTime,1000);
                getRemaingTime();
            }   
        }
          
});

  
       
        

