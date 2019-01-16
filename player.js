//generic stats object

let p1Name = "";

let p1Stats = {
  hp: 125,
  mp: 75,
  atk: 75,
  def: 20,
  sp: 25
}

let p2Name = "";

let p2Stats = {
  hp: 75,
  mp: 125,
  atk: 10,
  def: 10,
  sp: 100
}

let battle = {

  attack: function(){},
  defend: function(){}

}



















let p1Pack = [2,2,1,0,1,1,0,0];


//Assembling your player.

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  use: function(){
    //fill in with a ton of if and else ifs
  },
  pack: myPack,
  battle: {
    attack: function(mv){
      //fill in logic
    },
    defend: function(atkmv){
      //fill in logic
    }
  }
}
