useTransition is a React Hook that lets you render a part of the UI in the background.


**Side by side:**

| | `useTransition` | `startTransition` |
|---|---|---|
| Where | Inside components only | Anywhere (components, utils, router) |
| `isPending` state | ✅ Yes | ❌ No |
| Import | `import { useTransition }` | `import { startTransition }` |
| Returns | `[isPending, startTransition]` | just a function |
| Use case | When you need a loading indicator | Fire-and-forget, no UI feedback needed |

---