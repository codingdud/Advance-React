/**
 * Profiler onRender callback for measuring React component performance
 * 
 * @param {string} id - The "id" prop of the Profiler tree that has just committed
 * @param {string} phase - Either "mount" (first render) or "update" (re-render)
 * @param {number} actualDuration - Time spent rendering the committed update
 * @param {number} baseDuration - Estimated time to render the entire subtree without memoization
 * @param {number} startTime - When React began rendering this update
 * @param {number} commitTime - When React committed this update
 */
export default function onRender(id:string, phase:string, actualDuration:number, baseDuration:number, startTime:number, commitTime:number) {
  // Aggregate or log render timings...
  
  // Example 1: Simple console logging
  console.log(`[Profiler: ${id}]`, {
    phase,
    actualDuration: `${actualDuration.toFixed(2)}ms`,
    baseDuration: `${baseDuration.toFixed(2)}ms`,
    startTime: `${startTime.toFixed(2)}ms`,
    commitTime: `${commitTime.toFixed(2)}ms`
  });
  
  // Example 2: Performance threshold warning
  const SLOW_RENDER_THRESHOLD = 16; // 60fps = ~16ms per frame
  if (actualDuration > SLOW_RENDER_THRESHOLD) {
    console.warn(
      `⚠️ Slow render detected in "${id}" (${phase}): ${actualDuration.toFixed(2)}ms`
    );
  }
  
  // Example 3: Send to analytics service
  // sendToAnalytics({
  //   metric: 'react-render',
  //   componentId: id,
  //   phase,
  //   duration: actualDuration,
  //   timestamp: commitTime
  // });
}