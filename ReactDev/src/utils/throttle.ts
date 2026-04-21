export default function throllle<T extends unknown[]>(fn:(...arg:T)=>void,sec:number){
    let flag=false;
    return (...arg:T)=>{
        if(!flag){
            flag=true;
            setTimeout(()=>{
                fn(...arg)
            },sec)
        }
    }
}