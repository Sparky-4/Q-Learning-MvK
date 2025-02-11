learningRate = 0.2;
discountFactor = 0.9;
explorationRate = 0.3;
numStates = Math.floor((VIRTUAL_WIDTH*2)/10)*2;
actions = [0, 1, 2, 3, 4];
// Qvals = Array.from({ length: numStates }, () => new Array(actions.length).fill(0));

class PlayState{

    constructor(){
    }

    enter(params){
      this.reset();
      this.train();
    }

    reset(){
      this.mack = new Agent(0);
      this.kenji = new Trainer(1);
      // this.kenji = new Sprite(1);
    }

    train(){
      for(let i = 0; i < iterations; i++){
        this.reset();
        while(!this.terminalCheck()) {
          this.step();
        }
      }
      explorationRate = 0;
    }

    step(){
        let action = actions[randInt(0, actions.length-1)];
				if(Math.random() > explorationRate) 
					action = this.getBestAction();

				let prevState = this.mack.getState(this.kenji);
				let rewardRecieved = this.mack.update(this.kenji, action);
        this.kenji.update(this.mack);
				let bestAction = this.getBestAction();
				Qvals[prevState][action] = Qvals[prevState][action]+learningRate*(rewardRecieved + (discountFactor*this.getQValue(bestAction)) - Qvals[prevState][action]);
    }

    getBestAction(){
      let valsToCheck = [];
      for(let i = 0; i < actions.length; i++){
        valsToCheck[i] = this.getQValue(i);
      }
      let maxIndex = actions[randInt(0, actions.length-1)];
      for(let i = 0; i < valsToCheck.length; i++){
        if(valsToCheck[i] > valsToCheck[maxIndex])
          maxIndex = i;
      }
      // if(keys[81]){
      //   console.log(this.mack.getState(this.kenji))
      //   console.log(valsToCheck)
      //   console.log(maxIndex)
      // }
      return maxIndex;
    }

    getQValue(action) {
      return Qvals[this.mack.getState(this.kenji)][action];
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
      // console.log(this.mack.getState(this.kenji))
      // console.log(this.getBestAction())
      this.handleInputs();
      if(this.terminalCheck()){
        this.reset();
      }
      this.step();
      
    }

    handleInputs(){
      if(keys[32])
        this.kenji = new Sprite(1);
    }

    /*
    * renders the state
    */
    render(){
      this.mack.draw();
      this.kenji.draw();

        //Timer
        // ctx.fillStyle = 'white';
        // ctx.strokeRect(460.8*SCALE_FACTOR_WIDTH, 23.04*SCALE_FACTOR_HEIGHT, 102.4*SCALE_FACTOR_WIDTH, 40.32*SCALE_FACTOR_HEIGHT);
        // ctx.textAlign = 'center';
        // ctx.textBaseline = 'alphabetic';
        // ctx.font = gFonts.medium;
        // ctx.fillText(Math.floor(this.pop.bestPlayer.lifespan/60), 512*SCALE_FACTOR_WIDTH, 55*SCALE_FACTOR_HEIGHT);

    }
}