let a = [1,3,5,9]
function array(arr){
let x = 2;
for(let i=0; i<arr.length ;i++)
{
arr[i]=arr[i]+x
}
return arr;
}
console.log(array(a))