
 // button1

 var input = document.querySelector(' .input1');
 function myogi(){
    input.style.backgroundColor = "var(--primary-ad-color";
    input.style.color = " var(--white-ad-color)";
    
 }
 
    input.addEventListener('mouseover',myogi);
    input.addEventListener('mouseout',myoginout);
 
 function myoginout(){
    input.style.backgroundColor = "";
    input.style.color = "var(--primary-ad-color)";

 }
 
 // button2
var button = document.querySelector(' .input2');
function hover(){
    button.style.color = " var(--primary-ad-color)";
    button.style.backgroundColor = "var(--white-ad-color)";
}

    button.addEventListener('mouseover',hover);
    button.addEventListener('mouseout',unhoverout);

function unhoverout(){
    button.style.backgroundColor = "";
    button.style.color = "var(--white-ad-color)";

}

/*footer */
