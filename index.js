function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }
  function Monday() {
   exerciseRoutine (liftWeights);
  }
function Tuesday() {
    exerciseRoutine(swimFortyLaps); 
}
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function receivesAFunction(callback) {
    return callback(); 
  }
 function returnsANamedFunction() {
    return function namedFunction() {
    return 'I am a name function!';
    }; 
 }
 
 function returnsAnAnonymousFunction() {
    return function () {
    return 'I am an anonymous function';
    }; 
 }
  