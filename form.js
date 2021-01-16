class Form{
        constructor(){
        this.title=createElement('h1');
        this.input=createInput('Name');
        this.button=createButton('PLAY');
        this.greeting=createElement('h2');
        this.reset=createButton('RESET');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Tic Tac Toe");
        this.title.position(displayWidth/2,20);
        this.input.position(500,300);
        this.button.position(500,400);
        this.reset.position(displayWidth-100,20);
        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
    
        })
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount++;
            console.log(playerCount);
            player.index=playerCount;
            console.log(player.index);
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Hello" + player.name + "your token is");
            
                        this.greeting.position(displayWidth/2-70,displayHeight/4);
        }
        )

    }
}