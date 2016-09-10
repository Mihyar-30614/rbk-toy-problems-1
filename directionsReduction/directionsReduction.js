/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

var dirReduc = function(directions){
	var dir = [];
	var result ={};
	for (var i = 0; i < directions.length; i++) {
		if(result[directions[i]] === undefined){
			result[directions[i]]=1;
		}else{
			result[directions[i]]++;
		}
	}
	if(result.WEST !== result.EAST){
		if (result.WEST > result.EAST) {
			var x = result.WEST - result.EAST;
			for (var i = 0; i < x; i++) {
				dir.push("WEST");
			}
		}else{
			var x = result.EAST - result.WEST;
			for (var i = 0; i < x; i++) {
				dir.push("EAST");
			}
		}
	}else if (result.NORTH !== result.SOUTH) {
		if (result.NORTH > result.SOUTH) {
			var x = result.NORTH - result.SOUTH;
			for (var i = 0; i < x; i++) {
				dir.push("NORTH");
			}
		}else{
			var x = result.SOUTH - result.NORTH;
			for (var i = 0; i < x; i++) {
				dir.push("SOUTH");
			}
		}
	}
	return dir;
};

// RBK Solution 
var dirReduc = function(directions){
  //Create an object that matches the direction with the opposite direction.
  //Object is chosen because it consists of key-value pairs
  //We can use directions as keys and opposite directions as values
  var opposite = {
    'NORTH': 'SOUTH', 
    'SOUTH': 'NORTH',
    'EAST': 'WEST', 
    'WEST': 'EAST'};
  
  //We can use forEach to go through directions and populate the result array.
  //EXTRA PRACTICE: try to use reduce function instead
  var result = [];
  directions.forEach(function(currentDir){
    //If last direction that we added to result is the opposite of current direction,
    //we need to cancel the last added direction
    if (result[result.length - 1] === opposite[currentDir]){
      result.pop();
    } else {
      //Otherwise, add the current direction to the path
      result.push(currentDir);
    }
  });
  return result;
};

// With reduce function 
var dirReduc = function (directions) {
	var opposite = {
		'NORTH':'SOUTH',
		'SOUTH':'NORTH',
		'EAST':'WEST',
		'WEST':'EAST'
	};
	return directions.reduce(function(dirs, dir){
		if (dirs[dirs.length -1] === opposite[dir])
			dirs.pop();
		else
			dirs.push(dir);
			return dirs;
	},[])
}