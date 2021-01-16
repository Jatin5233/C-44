class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.token=null;
    }
    getPlayerCount(){
        var playerRef=database.ref('playerCount');
        playerRef.on("value",(data)=>{
            playerCount=data.val();
        })
        console.log(playerCount);
    }
    updateCount(x){
        database.ref('/').update({
            playerCount:x
        })
    }
    update(){
      
        var playerIndex="players/player"+this.index;
        if(this.index===1){
           this.token=0;
        }
        else{this.token=1};
        database.ref(playerIndex).set({
            name:this.name,
            token:this.token
                   })
    }
}