a=[2,3,4,56,7,8,9,1,3];
function name1(a){
max=a[0];
low=a[0];

for(let i=0;i<a.length;i++){
    
    if(a[i]>max){
        max=a[i];
    }

    if(a[i]<low){
        low=a[i];
    }
    
    a[i]==a[i+1];

    console.log(i,"",i+1);
    return(i,i+1);


}

return max;
return low;

}
let ans=name1(a);
console.log(max);
console.log(low);
console.log(ans);
