function lerNum1(){
    let num1 = parseFloat(document.getElementById('n1').value);
    return num1
}

function lerNum2(){
    let num2 = parseFloat(document.getElementById('n2').value);
    return num2
}

function sum(){
    let resultado = lerNum1() + lerNum2();
    document.getElementById('resultado').innerText = resultado;
}

function div(){
    
    if(lerNum2() === 0){
        document.getElementById('resultado').innerText = "Divisão por zero";
    }else{
        let resultado = lerNum1()/lerNum2();
        document.getElementById('resultado').innerText = resultado.toFixed(2);
    }
}