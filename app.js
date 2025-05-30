
(function(){

    const createGame = function(){
        return gameBoardObject =  {
            gameboard : [
                "0","1","2",
                "3","4","5",
                "6","7","8"
            ]
        };
    };

    
   const gameBoard = createGame();
   
})();

const createPlayer = function(name){
    let player = {};
    player.name = name;


    return player;
};

