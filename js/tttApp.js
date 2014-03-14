var tttApp = angular.module("tttApp", []);

tttApp.controller('myCtrl', ['$scope', function($scope){

	$scope.message = "Tic Tac Toe";

	$scope.players = [                         // player data
    {
      name:      'Ernie',
      marker:    '&times;',
      img_url:   'img/ernie.jpg',
    },
    {
      name:      'Bert',
      marker:    '&oslash;',
      img_url:   'img/bert.jpg',
    }
  ];

  $scope.tiles = [
 		{letter: "", id: 0, active: false }, 
  	{letter: "", id: 1, active: false }, 
  	{letter: "", id: 2, active: false }, 
  	{letter: "", id: 3, active: false },
  	{letter: "", id: 4, active: false },
  	{letter: "", id: 5, active: false },
  	{letter: "", id: 6, active: false },
  	{letter: "", id: 7, active: false },
  	{letter: "", id: 8, active: false }
  ]


  $scope.winCombos = [
    [0,1,2], [2, 5, 8], [0, 3, 6], [6, 7, 8], [0, 4, 8], [2, 4,6], [1, 4, 7], [3, 4, 5]
  ];


  var include = function(value, index) {
  	return array.indexOf(value) > -1;  
  }

  var fullTile = function() {
  	var fullTiles = [];
  	var tiles = $scope.tiles;
  	_.each(tiles, function(tile){
  		if(tile.active === true){
  			fullTiles.push(tile);
	  	}
  	});
  };

  $scope.currentPlayer = $scope.players[0];

  var togglePlayer = function(currentPlayer){
  	if($scope.currentPlayer === $scope.players[0]){
  		$scope.currentPlayer = $scope.players[1];
  	} else {
  		$scope.currentPlayer = $scope.players[0];
  	}
  };


  // var clickTile = function(){ 
  // 	var 

  // };









}]);