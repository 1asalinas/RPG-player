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


//not finished
let p1battle = {

  attack: function(mv){
    if (mv == 1){
      return this.moves.punch();
    }

    else if(mv == 2){
      return this.moves.other();
    }
  },
  defend: function(atkmv){
    let rawDamage = atkmv - this.stats.def;

    this.stats.hp = this.stats.hp - rawDamage;

    if(this.stats.hp < 0){
      this.stats.hp = 0;
    }
  }

}

let physical = {
  razorPunch: function(){
    let baseDamage = this.stats.atk * 0.75;
    let bonus = 0.5 * this.stats.atk * Math.random();
    return baseDamage + bonus;
  },
  charge: function(){
    let pain = Math.random();
    let bonus = 0.5 * this.stats.atk * Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - this.stats.atk / 4;
      return this.stats.atk + bonus;
    }
    else{
      return this.stats.atk + bonus;
    }
  }
}

let magic = {
  hydroPump: function(){
    if(this.stats.mp >= 8){
      this.stats.mp = this.stats.mp - 8;
      let tetraDice = Math.random();
      let pump = Math.ceil(this.stats.sp / 3);

      if(tetraDice < 0.10){
        return pump;
      }

      else if(tetraDice < 0.30){
        return 2 * pump;
      }

      else if(tetraDice < 0.60){
        return 3 * pump;
      }

      else{
        return 4 * pump;
      }

    }

  }
  
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
