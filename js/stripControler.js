function createStripControler(){
  var controler = createControler()
  var stripBoardWidth = stripBoard.width
  var centerOffset = 12
  var controlerEle = document.createElement('div')
  var positionX = 0
  
  function moveToCurPosition(){
    controlerEle.style.left = positionX - centerOffset 
  }

  function addDargHandles(){
  	var isDraging = false

  	var mouseDown = function(e){
      isDraging = true
     
      setPosition(e)
      colorManager.setColorForStripControler(positionX, stripBoard)
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
        colorManager.setColorForStripControler(positionX, stripBoard)
      }
    }

	  var setPosition = (function(){
	  	var stripBoardEle = stripBoard.ele
      var rect,stripToViewportX
	  	function refreshStripBoardPosition(){
	  		rect = stripBoardEle.getBoundingClientRect()
	      stripToViewportX  = rect.left		
	  	}

	  	refreshStripBoardPosition()
	  	window.addEventListener('resize', refreshStripBoardPosition, false)
	    window.addEventListener('scroll', refreshStripBoardPosition, false)

	    return function(e){
	     	positionX = e.clientX - stripToViewportX
	      
	      if( positionX >= stripBoardWidth)  positionX = stripBoardWidth - 1
	      if( positionX < 0 ) positionX = 0
	      
	      moveToCurPosition()
	    }
	  })()
    
    stripBoard.ele.addEventListener('mousedown',mouseDown,false)
    controlerEle.addEventListener('mousedown', mouseDown, false)
    document.documentElement.addEventListener('mouseup', mouseUp, false)

  	
  }

  

  controler.showControler( 'color_picker-strip-wrapper_inner', controlerEle )
  addDargHandles()
  moveToCurPosition()
  controlerEle.style.backgroundColor = colorManager.getRgbColor()

  return {
  	ele: controlerEle
  }
}

