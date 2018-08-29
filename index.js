function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  const array_ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for( element of array_ranked){
    let num=0;
    num = parseInt(element.innerHTML)
    console.log(num);
    num = num + n;
    element.innerHTML = num.toString();
  }
}

function deepestChild(){
  // div#grand-node
  const grand_node= document.getElementById('grand-node').querySelectorAll('div');
  let counter = -1;
  for( element of grand_node){
    counter++;
  }
  return grand_node[counter];
}
