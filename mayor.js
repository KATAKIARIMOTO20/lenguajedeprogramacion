//declaramos variables
 var varA =0;
 var varB =0;
 var varC =0;


//Damos valor a las variables 

varA = parseInt(prompt("ingresa valor variable"));
varB = parseInt(prompt("ingresa valor variable"));
varC = parseInt(prompt("ingresa valor variable"));

if (varA > varB & varA > varC){
    
        console.log(varA);
}
else{
        if((varB>varA)&&(varB> varC)){
            console.log(varB);
    }
    else{
        console.log(varC);

    }
}