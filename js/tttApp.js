var tttApp = angular.module("tttApp", []);

tttApp.controller('myCtrl', ['$scope', function($scope){

	$scope.players = [                  
    {
      name:      'Ernie',
      symbol:    'X',
      img_url:   'img/ernie.jpg',
      tiles:     []
    },
    {
      name:      'Bert',
      symbol:    'O',
      img_url:   'img/bert.jpg',
      tiles:     []
    }
  ];

  $scope.tiles = [
 		{ letter: "", id: 0, active: false },
 		{ letter: "", id: 1, active: false },
  	{ letter: "", id: 2, active: false }, 
  	{ letter: "", id: 3, active: false },
  	{ letter: "", id: 4, active: false },
  	{ letter: "", id: 5, active: false },
  	{ letter: "", id: 6, active: false },
  	{ letter: "", id: 7, active: false },
  	{ letter: "", id: 8, active: false }
  ];

  $scope.winCombos = [
    [0,1,2], [2, 5, 8], [0, 3, 6], [6, 7, 8], [0, 4, 8], [2, 4,6], [1, 4, 7], [3, 4, 5]
  ];

  $scope.currentPlayer = $scope.players[0];

  var togglePlayer = function(){
  	if($scope.currentPlayer === $scope.players[0]){
  		$scope.currentPlayer = $scope.players[1];
  	} else {
  		$scope.currentPlayer = $scope.players[0];
  	}
  };

  $scope.clickTile = function(id){
  	var tiles = $scope.tiles;
  	var tile = $.grep(tiles, function(t) { return t.id == id;})[0];
  	if (tile.active === false){
  		var player = $scope.currentPlayer;
  		tile.letter = player.symbol;
  		tile.active = true;
  		player.tiles.push(id);
  		var status = checkGameStatus(player);
  		if(status === 'you win'){
  			winGame(player);
  		} else {
  			tieGame();
  		}
  	}
  		togglePlayer();
  };


  var winGame = function(player) {
  	console.log(player + "you win" )
  	console.log( 'winning line is:' + $scope.winningLine)
  }

  var tieGame = function() {
  	console.log("You Tied!")
  }


  // seems to be working 
  var fullBoard = function() {
  	var tilesFull = [];
  	var tiles = $scope.tiles;
  	_.each(tiles, function(tile){
  		if(tile.active === true){
  			tilesFull.push(tile);
	  	}
  	})
  	return tilesFull.length === 9;
  }

  $scope.winningLine;
  var checkGameStatus = function(player){
  	var status;
  	var lines = $scope.winCombos;
  	if ( fullBoard() ) {
  		status = "tied";
  	}
  	_.each(lines, function(line){
  		if( include( line[0], player.tiles) && include(line[1], player.tiles) && include(line[2], player.tiles) ) {
  			status = "you win";
  			$scope.winningLine = line;
  		}
  	});
	return status;
  }


   var initialize = function(){
    $scope.currentPlayer = $scope.players[0];
    _.each($scope.tiles, function(tile){
      tile.letter = "";
      tile.active = false;
    })
    _.each($scope.players, function(play){
      play.tiles = [];
    })
    console.log("New game...")
  }

   var include = function(value, array) {
  	return array.indexOf(value) > -1;
  	console.log(array)  
  }



}]);