export default function debounce<T extends unknown[]>(fn:(...args:T)=>void,sec:number){
    let rtime:ReturnType<typeof setTimeout>;
    return (...arg:T)=>{
        clearTimeout(rtime);
        rtime=setTimeout(()=>{fn(...arg)},sec)
    }
}