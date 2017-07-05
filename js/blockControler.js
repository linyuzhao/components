function createControler(){
  function showControler(wrapperId, controlerEle){
    controlerEle.className = 'color_picker-controler'
    var blockWrapper = document.getElementById(wrapperId)

    blockWrapper.appendChild(controlerEle)
  
    return controlerEle
  } 

  return{
    showControler: showControler
  }
}


function createBlockControler(){
  var controler = createControler()
  var blockBoardWidth = blockBoard.width
  var blockBoardHeight = blockBoard.height
  var centerOffset = 12
  // 视觉上显示 controler
  var controlerEle = document.createElement('div')
  var controlerStyle = controlerEle.style
  var positionX = blockBoardWidth - 1,
      positionY = 0

  
  
  
  // 根据 controler 相对于 blockboard 的位置定位定位 controler
  function moveToCurPosition(){
    controlerStyle.left = positionX - centerOffset
    controlerStyle.top = positionY - centerOffset
  }
  
  
  function addDargHandles(){

    var isDraging = false   

    var mouseDown = function(e){
      isDraging = true
      
      setPosition(e)
      colorManager.setColor(positionX,positionY,blockBoard)
      showArea.forbidTextSelect()
      document.documentElement.addEventListener('mousemove', mouseMove, false)
    }

    var mouseUp = function(){
      isDraging = false
      showArea.permitTextSelect()
      document.documentElement.removeEventListener('mousemove', mouseMove, false)
    }
     
    var mouseMove = function(e){ 
      if(isDraging){
        setPosition(e)
        colorManager.setColor(positionX,positionY,blockBoard)
      }
    }

    var setPosition = (function(){
      var blockBoardEle = blockBoard.ele
      var rect, blockToViewportY, blockToViewportX

      function refreshBlockBoardPosition(){
        rect = blockBoardEle.getBoundingClientRect()
        blockToViewportX  = rect.left
        blockToViewportY = rect.top
      }

      refreshBlockBoardPosition()
      window.addEventListener('resize', refreshBlockBoardPosition, false)
      window.addEventListener('scroll', refreshBlockBoardPosition, false)

      return function(e){       
        positionX = e.clientX - blockToViewportX 
        positionY = e.clientY - blockToViewportY

        if ( positionX >= blockBoardWidth ) positionX = blockBoardWidth - 1
        if ( positionX < 0   ) positionX = 0
        if ( positionY >= blockBoardHeight ) positionY = blockBoardHeight - 1
        if ( positionY < 0   ) positionY = 0

        moveToCurPosition()    
      }
    })()


    blockBoard.ele.addEventListener('mousedown',mouseDown,false)
    controlerEle.addEventListener('mousedown', mouseDown, false)
    document.documentElement.addEventListener('mouseup', mouseUp, false)        
  }

  // 初始化
  
  controler.showControler( 'color_picker-block-wrapper', controlerEle )
  addDargHandles()
  moveToCurPosition()
  controlerEle.style.backgroundColor = colorManager.getRgbColor()

  function setColor(){
    colorManager.setColor(positionX,positionY,blockBoard)
  }
  return{
    ele: controlerEle,
    setColor: setColor
  }
}

