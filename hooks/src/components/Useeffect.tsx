import { useEffect } from "react"
import  chat from '../utils/chat'

export default function Useeffect() {
    useEffect(()=>{
        const session=chat("server",123)
        session.connected();
        return ()=>{
            session.disconnected()
        }
    },[])
  return (
    <div>

        <select >
            <option value="general"> general </option>
            <option value="travel"> travel </option>
            <option value="music"> music </option>
            <option value="log"> log </option>
        </select>
    </div>
  )
}
