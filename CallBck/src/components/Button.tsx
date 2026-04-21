import { memo } from "react"
export default memo(function Button({...props}) {
  console.log("button called")
  return (
    <div {...props}>Button</div>
  )
})
