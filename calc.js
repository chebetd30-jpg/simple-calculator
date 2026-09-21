const display=document.getElementById("display");
const buttons= document.querySelectorAll("button");

buttons. forEach(button=>{
    button.addEventListener("click", ()=>{
        const value = button.value;

        if(value==="C"){
            display.value="";
            return;
        }

        if(value==="DEL"){
            display.value= display.value.slice(0, -1);
            return;
        }

        if(value==="="){
            try{
                display.value = Function(' "use strict"; return (' + display.value + ')')();
            } catch (error) {
                display.value = "Error";
            }
            return;
        }
        display.value += value;
    });
});