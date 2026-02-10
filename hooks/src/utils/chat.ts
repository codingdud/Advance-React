export default function chat(server:string,roomid:number){
    return{
        connected(){
            console.log(`${server} is connect to room id:${roomid}`)
        },
        disconnected(){
            console.log(`${server} is disconnect to room id:${roomid}`)
        }
    }
}