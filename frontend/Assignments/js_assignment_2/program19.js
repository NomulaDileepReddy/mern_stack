n = parseInt(prompt("Enter size of array:"))
arr=[]
for(let i=0;i<n;i++){
    arr[i] = parseInt(prompt("Enter the element:"))
}
console.log(arr)
arrnew = []
index = []
for(i=0;i<n;i++)
{
    for(j=i+1;j<n;j++)
    {
        if(arr[i]==arr[j]){
            index[j]=-1;
        }
    }
}
j=-1;
for(i=0;i<n;i++)
{
    if(index[i]!=-1){
        j=j+1;
        arrnew[j]=arr[i];
    }
}
console.log(arrnew)

