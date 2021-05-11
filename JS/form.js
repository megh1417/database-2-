class Form{
    constuctor(){

    }

    display(){
        var title = createElement('h2');
        title.html('Car Racing Game');
        title.position(480,130);
        var input= createInput(""); 
        input.position(490,210);
        var button = createButton("start game");
        button.position(535, 250); 
        var greeting = createElement('h2');

        button.mousePressed(function(){
            console.log("Pressed!");
            input.hide();
            button.hide();

            var name = input.value();
            playerCount +=1;
            console.log("PC  "+playerCount);
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hi" + name);
            game.position(130,160);
            
        });

        



    }

}