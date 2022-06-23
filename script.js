const num1 = prompt('Enter the first number');
let operator=prompt('Choose an operator (+,-,/,*)')
const num2 = prompt('Enter the second number');

const num1Value=parseFloat(num1);
const num2Value=parseFloat(num2);

// solution=0;


if(operator=='+'){
   alert(num1Value +" + "+num2Value+ " = "+ (num1Value+num2Value));
    
    
}else if(operator =="-"){
    alert(num1Value +" -"+num2Value+ " = "+ (num1Value-num2Value));

}else if(operator =="*"){
    alert(num1Value +" * "+num2Value+ " = "+ (num1Value*num2Value));
    
}else if(operator =="/"){
    if(num2Value==0){
        alert('Cannot divide by 0')

    }else{alert(num1Value +"/"+num2Value+ " = "+ (num1Value/num2Value));}
    
}
else{
    alert ('invalid selection');
}

