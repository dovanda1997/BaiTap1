var a, b, c;
let x1, x2, delta;
function  PTbac2 ( a, b,c){
 if (a == 0){
    console.log('phuong trinh co mot nghiem',-1/(-c/a));
    console.log(c/a);
    return;
 }
 if(a!== 0 && b == 0){
    
    console.log('phuong trinh co hai nghiem', -1/(Math.sqrt(-c/a)));
    return;
 }else{
    delta = (b*2 - 4*a*c);
    console.log(delta);
    
    if( delta <0){
        x1= -b/(2*a);
        x2 = b/(2*a);
        console.log('phuong trinh co hai nghiem kep ',x1, x2);
        return;
    }
    if(delta == 0){
        console.log('phuong trinh vo nghiem');
        return
    }
    if(delta > 0){
        x1=  (-b -Math.sqrt(delta))/2*a;
        x2 = (-b + Math.sqrt(delta))/2*a;
        console.log('phuong trinh co 2 nghiem', x1, x2);      
        return;
    }
 } 

}


PTbac2(4,-2,-6);


 

 
