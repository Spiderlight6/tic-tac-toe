
(function(){

    const createGame = function(){
        return gameBoardObject =  {
            gameboard : [
                "","","",
                "","","",
                "","",""
            ]
        };
    };

    
   const gameBoard = createGame();


   function makeMove(array){
        array.forEach(element => {
            
        });
    };
    console.log(makeMove(gameBoard.gameboard));
    
   
})();

const createPlayer = function(name){
    let player = {};
    player.name = name;


    return player;
};

const player1 = createPlayer("Player1");
const player2 = createPlayer("Player2");


