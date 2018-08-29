
function getFirstSelector(selector) {
  let element = document.querySelector(selector)
  return element
}

function query( className, dom ){
  if(dom.className == className){
      return dom
 }
  let returnValue;
  Array.from(dom.children).forEach(function(child){
      let result = query(className, child)
      if(result){
         returnValue = result
      }
  })
  return returnValue
}


