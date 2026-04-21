profiler: help to mesaser react component performance and reder time
1: wrap around component(id:string,onRender:cb) :react call every update
callback recive the inforamation of what was render and how much time it took
strict mode: let us catch eray bugs in deveopment by adding extra development behaviour and warnings
1: two time rendering ,warnings
2: effect two
3: Memory leaks
4: Impure components
5: Hidden side effects
6: Unsafe lifecycle usage

suspence: display fallback utill its child get finished loading

code spliting:
is techine where we breake big bundle to smaller chukes and download required chunks only for time bening and later we 
download as perrequirement dynamicly using react.lazy and suspens
 minimum required code, reducing Time to Interactive (TTI),  improves  user retention.

Error Boundary i:
s a special React class component that catches rendering errors in its child components and displays fallback UI instead of crashing the whole application. 
It uses getDerivedStateFromError and componentDidCatch lifecycle methods.