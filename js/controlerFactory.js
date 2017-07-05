

(function(global){

// obj.moveTocurrentPosition
// obj.eleWrapperClassName
global.controlerFactory = function(obj){
  var ele = document.createElement('div')

  
  showControler(obj.eleWrapperClassName, ele)  
  addDragHandles()
  // obj.moveToCurPosition()
}

function showControler(wrapperId, ele){
  ele.className = 'color_picker-controler'
  var blockWrapper = document.getElementById(wrapperId)

  blockWrapper.appendChild(ele)

  return ele
}

function addDragHandles(){
  var isDraging = false

  var mouseDown = function(e){
    isDraging = true

    setPosition(e)
  }
}

function setPosition(e){
  
}



})(window)

 

