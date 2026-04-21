import { ErrorBoundary } from "react-error-boundary";
import AddButton from "./AddButton";

export default function App() {
  return (
    <ErrorBoundary 
    /* fallbackRender={({ error, resetErrorBoundary }) => (<ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />)} */
    FallbackComponent={ErrorFallback}
    onError={(e) => console.log(e)}>
      <AddButton/>
    </ErrorBoundary>
  )
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
