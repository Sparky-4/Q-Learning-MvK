learningRate = 0.1;
discountFactor = 0.5;
explorationRate = 0.2;
numStates = Math.floor((VIRTUAL_WIDTH*2)/10);
actions = [0, 1, 2, 3, 4];
Qvals = Array.from({ length: numStates }, () => new Array(actions.length).fill(0));

class PlayState{

    constructor(){
      // if(mode == 0)
      //   this.runOnePop();
      // else if(mode == 1)
      //   this.runDoublePop();
      // else if(mode == 2)
      //   this.fightTrainer();
      // else if(mode == 3)
      //   this.runAltPop();
      this.mack = new Agent(0);
      this.kenji = new Trainer(1);
      this.train();
    }

    enter(params){}

    reset(){
      this.mack = new Agent(0);
      this.kenji = new Trainer(1);
    }

    train(){
      for(let i = 0; i < 100; i++){
        this.reset();
        while(!terminalCheck()) {
          this.step();
        }
      }
    }

    step(){
      let action = actions[new Random().nextInt(actions.length)];
				while(!checkStep(action))
					action = actions[new Random().nextInt(actions.length)];
				if(Math.random() > explorationRate) 
					action = getBestAction();

				let prevState = this.mack.getState();
				let rewardRecieved = step(action);
				let bestAction = getBestAction();
				Qvals[prevState][action] = Qvals[prevState][action]+learningRate*(rewardRecieved + (discountFactor*getQValue(bestAction)) - Qvals[prevState][action]);
    }

    /**********
     * 
     * DO THIS NEXT
     * 
     * 
     * *********** */
    getValue(){
      // TODO
    }

    terminalCheck(){
      if(this.mack.dead || this.kenji.dead)
        return true;
      return false;
    }

    /*
    * updates the state
    */
    update(){

    }

    // handleInputs(){
    //   if(keys[32]){
    //     this.pop.bestEnemy = new Sprite(this.pop.character == 0?1:0);
    //     this.pop.bestPlayer = this.pop.bestPlayer.clone();
    //     this.pop.bestPlayer.lifespan = 5940;
    //     console.log(this.pop.bestPlayer);
    //   }
    //   else if (keys[16]){
    //     this.pop.bestEnemy = this.pop.newTrainer();
    //     this.pop.bestPlayer = this.pop.bestPlayer.clone();
    //     this.pop.bestPlayer.lifespan = 5940;
    //   }
    // }

    /*
    * renders the state
    */
    render(){

        //Timer
        // ctx.fillStyle = 'white';
        // ctx.strokeRect(460.8*SCALE_FACTOR_WIDTH, 23.04*SCALE_FACTOR_HEIGHT, 102.4*SCALE_FACTOR_WIDTH, 40.32*SCALE_FACTOR_HEIGHT);
        // ctx.textAlign = 'center';
        // ctx.textBaseline = 'alphabetic';
        // ctx.font = gFonts.medium;
        // ctx.fillText(Math.floor(this.pop.bestPlayer.lifespan/60), 512*SCALE_FACTOR_WIDTH, 55*SCALE_FACTOR_HEIGHT);

    }
}