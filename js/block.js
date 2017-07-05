function createBoard(ele){
  var eleWidth = ele.getAttribute('width')
  var eleHeight = ele.getAttribute('height')
  var ctx = ele.getContext('2d')
  return {
    ele: ele,
    width: eleWidth,
    height: eleHeight,
    ctx: ctx
  }
}

function createBlockBoard(ele){
  var board = createBoard(ele)

  board.fillBlockGradient = function(color){
    var whiteGradientCover = this.ctx.createLinearGradient(0, 0, this.width, 0)
    whiteGradientCover.addColorStop(0, 'rgba(255,255,255,1)')
    whiteGradientCover.addColorStop(1, 'rgba(255,255,255,0)')

    var blackGradientCover = this.ctx.createLinearGradient(0, 0, 0, this.height)
    blackGradientCover.addColorStop(0, 'rgba(0,0,0,0)')
    blackGradientCover.addColorStop(1, 'rgba(0,0,0,1)')
    
    this.fillBlockGradient = function(color){
      var ctx = this.ctx
      var width = this.width
      var height = this.height
      ctx.fillStyle = color
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = whiteGradientCover
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = blackGradientCover
      ctx.fillRect(0, 0, width, height)
    }
    this.fillBlockGradient(color)
  }

  function init(){
    board.fillBlockGradient(colorManager.getRgbColor())
  }
  init()

  return board
}

