
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget () {
  return document.querySelector('#nested .target');
}
function deepestChild() {
  let firstNode = document.getElementById('grand-node');
  let nextNode = firstNode.children[0];
  while (nextNode) {
    firstNode = nextNode;
    nextNode = firstNode.children[0];
  }
  return firstNode;
}


function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');

  for (let i = 0; i< rankedLists.length; i++) {
    let childrenOfList = rankedLists[i].children;

    for (let j = 0; j< childrenOfList.length; j++) {
      childrenOfList[j].innerHTML = parseInt(childrenOfList[j].innerHTML) + n;
    }
  }
}
