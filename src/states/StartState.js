class StartState {
  constructor () {
    this.shopAnim = new Animation([0, 1, 2, 3, 4, 5], 6);
  }

  enter (params) {}

  update () {
    if (keys[13]) {
      gStateMachine.change('play', {shopAnim: this.shopAnim});
    }
    this.shopAnim.update()
  }

  render () {
    gFrames.shop[this.shopAnim.getCurFrame()].draw(600*SCALE_FACTOR_WIDTH, 128*SCALE_FACTOR_HEIGHT);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.font = gFonts.large;
    ctx.fillText('Mack vs Kenji', 512*SCALE_FACTOR_WIDTH, 288*SCALE_FACTOR_HEIGHT);
    ctx.textBaseline = 'top';
    ctx.font = gFonts.medium;
    ctx.fillText('Press Enter', 512*SCALE_FACTOR_WIDTH, 288*SCALE_FACTOR_HEIGHT);
  }
}
