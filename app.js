const generatePin=document.querySelector(".generate-btn");
const numberBtns=document.querySelectorAll(".button");
const submitBtn=document.querySelector(".submit-btn");
var randomPin;
var output="";
let count=0;



generatePin.addEventListener("click",function(e){
    count=0;

    randomPin=Math.round(Math.random()*9000+1000);
    
    console.log(typeof randomPin);
    console.log(randomPin);
 
    document.querySelector(".randomnumber").value=randomPin;
    document.querySelector(".randomnumber").style.textAlign="center";

    document.querySelector(".userPin").value="";
    output="";
    document.querySelector(".notify1").style.display="none";
    document.querySelector(".notify2").style.display="none";
    document.querySelector(".count").innerText=3;

     
    

});






   numberBtns.forEach(function(btn){
       btn.addEventListener("click",function(e){

        const classes=e.currentTarget.classList;
 

           //displaying output
           if(classes.contains("number")){
            const value=e.currentTarget.innerText;
            if(output.length<4){
             output+=value;
            }
            console.log(output);
            document.querySelector(".userPin").value=output;
            document.querySelector(".userPin").style.textAlign="center";
           }
           
          
           //clear userpin
           if(classes.contains("clk")){
               console.log("hi");
               document.querySelector(".userPin").value="";
               output="";
           
           }

           //use backpace
           if(classes.contains("backspace") && output.length>0){
               output=output.slice(0,-1);
               document.querySelector(".userPin").value=output;
            
            }
        });
    });

      
    submitBtn.addEventListener("click",function(){
                
        const pin=document.querySelector(".randomnumber").value
        const userPin=document.querySelector(".userPin").value
        if(pin==userPin && pin.len>3){
            document.querySelector(".notify2").style.display="block";
            document.querySelector(".notify1").style.display="none";
            count=0;
        }else{
            document.querySelector(".notify1").style.display="block";
            document.querySelector(".notify2").style.display="none";
            count++;
             
            if(count==1){
                document.querySelector(".count").innerText=2;
        
            }else if(count==2){
                document.querySelector(".count").innerText=1;
            }else if(count==3){
               
                 
                 document.querySelector(".count").innerText=" try after 30 second "+0;
                
            }
            
        }
        
      
    });
   
  
       
        

