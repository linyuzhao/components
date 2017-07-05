function createStripBoard(ele){
  var board = createBoard(ele)

  function init(){
    var ctx = board.ctx
    var boardWidth = parseInt(board.width)
    var boardHeight = parseInt(board.height)
    var stripWidth = 16
    var pathLeft = stripWidth * 0.5
    var pathRight = boardWidth - pathLeft
    var colorFulGradient = ctx.createLinearGradient(0, 0, boardWidth, 0)

    colorFulGradient.addColorStop(0, 'rgba(255, 0, 0, 1)')
    colorFulGradient.addColorStop(0.17, 'rgba(255, 255, 0, 1)')
    colorFulGradient.addColorStop(0.34, 'rgba(0, 255, 0, 1)')
    colorFulGradient.addColorStop(0.51, 'rgba(0, 255, 255, 1)')
    colorFulGradient.addColorStop(0.68, 'rgba(0, 0, 255, 1)')
    colorFulGradient.addColorStop(0.85, 'rgba(255, 0, 255, 1)')
    colorFulGradient.addColorStop(1, 'rgba(255, 0, 0, 1)')


    ctx.beginPath()
    ctx.moveTo( pathLeft, 0.5 * boardHeight)
    ctx.lineTo( pathRight, 0.5 * boardHeight)
    ctx.lineWidth = stripWidth
    ctx.lineCap = 'round'
    ctx.strokeStyle = colorFulGradient

    ctx.stroke()
    // board.fillStyle = 'red'
    // board.ctx.fillRect(0,0, 10, 10)
  }

  init()
  
  return board
}