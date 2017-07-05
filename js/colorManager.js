function createColorManager(){

  var rgbColor = 'rgb(255,0,0)'
  var r = 255, g = 0, b = 0
  var hexColor = '#ff0000'


  function setColor(x, y, board){
    var ctx = board.ctx
    var pixelInfo = ctx.getImageData(x, y, 1, 1).data   
    r = pixelInfo[0]
    g = pixelInfo[1]
    b = pixelInfo[2]
    hexColorR = r.toString(16)
    hexColorG = g.toString(16)
    hexColorB = b.toString(16)
    if(hexColorR.length === 1 ) hexColorR = '0' + hexColorR 
    if(hexColorG.length === 1 ) hexColorG = '0' + hexColorG 
    if(hexColorB.length === 1 ) hexColorB = '0' + hexColorB 
  

    rgbColor = 'rgb(' + r + ',' + g + ',' + b + ')'
    hexColor = '#' + hexColorR + hexColorG + hexColorB
    
    if(blockControler){
      blockControler.ele.style.backgroundColor = rgbColor
    }
    if(showArea){
      showArea.changeColor(rgbColor, hexColor)
    }

  }

  function setColorForScontroler(x, board){
    var ctx = board.ctx
    var height = board.ele.height
    var pixelInfo = ctx.getImageData(x, 0.5 * height, 1, 1).data
    var r = pixelInfo[0]
    var g = pixelInfo[1]
    var b = pixelInfo[2]
    var rgbColor= 'rgb(' + r + ',' + g + ',' + b + ')'

    if(stripControler){
      stripControler.ele.style.backgroundColor = rgbColor
    }
    blockBoard.fillBlockGradient(rgbColor)
    blockControler.setColor()
  }

  function getRgbColor(){
    return rgbColor
  }

  function getHexColor(){
    return hexColor
  }

  function isBlackColor(){
    return ( (r + g + b)/3 < 127 )
  }

  return{
    setColor : setColor,
    getRgbColor : getRgbColor,
    getHexColor: getHexColor,
    setColorForStripControler: setColorForScontroler,
    isBlackColor: isBlackColor
  }
}