class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",(data)=>{
        gs=data.val();
        })
        console.log(gs)
    }
    updateState(x){
        database.ref('/').update({
            gameState:x
        })
    }
    async start(){
        console.log(gs);
        if(gs===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if (playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getPlayerCount();
            }
            
            form=new Form();
            form.display();

           
        }
    }
}