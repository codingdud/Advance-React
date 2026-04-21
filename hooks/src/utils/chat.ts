export default function chat(server:string,roomid:string){
    return{
        connected(){
            console.log(`${server} is connect to room id:${roomid}`)
        },
        disconnected(){
            console.log(`${server} is disconnect to room id:${roomid}`)
        }
    }
}

// chat.js
export function createConnection<T>(roomId:T) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let connected = false;
  const listeners = new Set<(arg:T)=>void>();

  return {
    connect() {
      setTimeout(() => {
        connected = true;
        listeners.forEach(cb => cb(roomId));
      }, 500); // simulate async connect
    },
    disconnect() {
      connected = false;
    },
    on(event:string, callback:(arg:T)=>void) {
      if (event === 'connected') {
        listeners.add(callback);
      }
      return () => listeners.delete(callback);
    }
  };
}

// notifications.js
export function showNotification(message:string) {
  console.log(`🔔 ${message}`);
  // Or real notification:
  // if ('Notification' in window && Notification.permission === 'granted') {
  //   new Notification('Chat', { body: message });
  // }
}