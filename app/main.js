var a, b, c;
let x1, x2, delta;
function  PTbac2 ( a, b,c){
 if (a == 0){
    x == -c/b;
    console.log('phuong trinh co mot nghiem',x1);
 }
 if(a!== 0 && b == 0){
    x1 == Math.sqrt(-c/a);
    console.log('phuong trinh co hai nghiem', x1);
 }else{
    delta == (b*b - 4*a*c);
    if( delta <0){
        x1= -b/(2*a);
        x2 = b/(2*a);
        console.log('phuong trinh co hai nghiem kep ',x1, x2);

    }
    if(delta = 0){
        console.log('phuong trinh vo nghiem');
    }
    if(delta > 0){
        x1=  (-b -Math.sqrt(delta))/2*a;
        x2 = (-b + Math.sqrt(delta))/2*a;
        console.log('phuong trinh co 2 nghiem', x1, x2);
    }
 }
    
}
 

 

 
