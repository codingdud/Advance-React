export function product(count:number){
  console.log("expensive call")
  let product=1;
  for(let i=0;i<100_000;i++){
    product+=i;
  }
  return product+count;
}
