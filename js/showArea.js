function createShowArea(){
  var showAreaEle = document.getElementById('color_picker-show_area')
  var textCon = document.createElement('div')
  textCon.className = 'color_picker-show_area-textCon'
  document.getElementById('color_picker-show_area-wrapper').appendChild(textCon)

  var fillColor = function(color){
    showAreaEle.style.backgroundColor = color
  }
   
  function showText(rgbColor, hexColor){
  	if(colorManager.isBlackColor()){
  		textCon.style.color = 'white'
  	} else {
  		textCon.style.color = 'black'
  	}
    textCon.innerHTML = rgbColor + '</br>' + hexColor 
  }

  function changeColor(color, hexColor){
  	fillColor( color )
  	showText( color, hexColor )
  }

  function forbidTextSelect(){
  	if( textCon.style.webkitUserSelect !== undefined){
  		textCon.style.webkitUserSelect = 'none'
  	}
  }
  function permitTextSelect(){
    if( textCon.style.webkitUserSelect !== undefined){
  		textCon.style.webkitUserSelect = 'text'
  	} 
  }

  changeColor(colorManager.getRgbColor(), colorManager.getHexColor())
  
  return{
    changeColor: changeColor,
    ele: showAreaEle,
    forbidTextSelect: forbidTextSelect,
    permitTextSelect: permitTextSelect
  }
}