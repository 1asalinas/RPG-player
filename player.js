//generic stats object

let p1Name = "Saitama";

let p1Stats = {

  hp: 200,
  mp: 0,
  atk: 100,
  def: 20,
  sp: 0
}

let p1Moves = {
  RazorPunch: function(){

    let baseDamage = this.stats.atk * 0.75;
    let bonus = 0.5 * this.stats.atk * Math.random();
    return baseDamage + bonus;
  },

  FalconPunch: function(){

    let baseDamage = this.stats.atk * 0.50;
    let bonus = this.stats.atk * Math.random();
    return baseDamage + bonus;
  },

  Charge: function(){

    let pain = Math.random();
    let bonus = 0.5 * this.stats.atk * Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - this.stats.atk / 4;
      return this.stats.atk + bonus;
    }
    else{
      return this.stats.atk + bonus;
    }
  },

  Roundhouse_Kick: function(){

    let tetraDice = Math.random();
    let kick = Math.ceil(this.stats.atk / 2);

    if(tetraDice < 0.33){
      return kick;
    }

    else if(tetraDice < 0.66){
      return 2 * kick;
    }

    else{
     return 3 * kick;
    }
  }
}

let p1Battle = {

  attack: function(mv){
    if (mv == 1){
      return this.moves.Charge();
    }

    else if(mv == 2){
      return this.moves.RazorPunch();
    }
    else if(mv == 3){
      return this.moves.Roundhouse_Kick();
    }
    else if(mv == 4){
      return this.moves.FalconPunch();
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

let player1 = {
  name: p1Name,
  stats: p1Stats,
  moves: p1Moves,
  battle: p1Battle
}






let p2Name = "";

let p2Stats = {

  hp: 80,
  mp: 120,
  atk: 0,
  def: 20,
  sp: 100
}

let p2Moves = {
  Pyro_ball: function(){

    if(this.stats.mp >= 6){

      this.stats.mp = this.stats.mp - 6;
      let baseDamage = this.stats.atk * 0.88;
      let bonus = 0.32 * this.stats.atk * Math.random();
      return baseDamage + bonus;
    }
  },

  HydroPump: function(){

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

  },

  Blizzard: function(){

    if(this.stats.mp >= 14){
      this.stats.mp = this.stats.mp - 14;
      let baseDamage = this.stats.atk * 0.50;
      let bonus = this.stats.atk * Math.random();
      return baseDamage + bonus;
    }
  },

  HyperBeam: function(){

    if(this.stats.mp >= 20){
      this.stats.mp = this.stats.mp - 20;
    let damage = this.stats.sp * 1.50;
    return damage;
    }

  }
  
}

let p2Battle = {

  attack: function(mv){
    if (mv == 1){
      return this.moves.HyperBeam();
    }

    else if(mv == 2){
      return this.moves.HyperBeam();
    }
    else if(mv == 3){
      return this.moves.Blizzard();
    }
    else if(mv == 4){
      return this.moves.Pyro_ball();
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

let player2 = {
  name: p2Name,
  stats: p2Stats,
  moves: p2Moves,
  battle: p2Battle
}










































































//not finished


let physical = {

  RazorPunch: function(){
    let baseDamage = this.stats.atk * 0.75;
    let bonus = 0.5 * this.stats.atk * Math.random();
    return baseDamage + bonus;
  },

  FalconPunch: function(){
    let baseDamage = this.stats.atk * 0.50;
    let bonus = this.stats.atk * Math.random();
    return baseDamage + bonus;
  },

  Charge: function(){
    let pain = Math.random();
    let bonus = 0.5 * this.stats.atk * Math.random();
    if(pain < 0.50){
      this.stats.hp = this.stats.hp - this.stats.atk / 4;
      return this.stats.atk + bonus;
    }
    else{
      return this.stats.atk + bonus;
    }
  },

  Roundhouse_Kick: function(){
    let tetraDice = Math.random();
    let kick = Math.ceil(this.stats.atk / 2);

    if(tetraDice < 0.33){
      return kick;
    }

    else if(tetraDice < 0.66){
      return 2 * kick;
    }

    else{
     return 3 * kick;
    }
  }

}

let magic = {
  Pyro_ball: function(){
    if(this.stats.mp >= 6){
      this.stats.mp = this.stats.mp - 6;
      
    }
  },

  HydroPump: function(){
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

  },

  HyperBeam: function(){
    if(this.stats.mp >= 20){
      this.stats.mp = this.stats.mp - 20;
    let damage = this.stats.sp * 1.50;
    return damage;
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
