module.exports = function solveEquation(equation) {
  var D, a, b, c, solutions,x1,x2;
   var str=equation.split(' ');
    a=parseInt(str[0]);
    b=parseInt(str[4]);
    c=parseInt(str[8]);
    if(str[3]=='-')
        b= -b;
    if(str[7]=='-')
        c= -c;
    D=b*b-4*a*c;
    x1=((-b-Math.sqrt(D))/(2*a));
   //Math.round(x1);
    x1=parseInt(x1.toFixed(0));
    x2=((-b+Math.sqrt(D))/(2*a));
//Math.round(x2);
   x2=parseInt( x2.toFixed(0));
    if (x1>x2)
    solutions=[x2,x1];
    //Math.ceil(solutions);
    else
         solutions=[x1,x2];
    return solutions;
        
}
