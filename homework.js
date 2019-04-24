//##1
const sum = function (n){
        let a = null

        for(n; n > 0 ; n-- ){
            a = a + n;

        }
        return a;
}
sum(10);

//##2
const sum = function (n){
    let a = null
   
    for(n; n > 0 ; n-- ){
        if (n%2===0){
            a = a + n;

        }
        
     

    }
    return a;
}

sum(10);

//##3

const sum = function (n){
    let a = null
    
    for(i = 0; i < n.length; i++ ){  
            a = a + n[i]; 
            
            

    }
    return a / n.length;
}

//##4
const a = function(str){

   return  str.split("").reverse().join("");
}

//##5

const a = function(str){

    return str.join("-");

}

//##6
const a = function(n){
    let speed= 1;
    let str='';
    let num=null;
    for(i=1;i<(n*2);i++){
        num+=speed;
        str+=num
        
        if(i===n){
            speed=-1;
        }
        
    }
    return str ;
}

