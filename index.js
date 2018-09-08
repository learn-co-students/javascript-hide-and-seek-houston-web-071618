// There is a bug with this lab. I went in and edited the dependancy to fix it

function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div')
  return nodes[nodes.length - 1]
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list')
  rankedList.forEach(list => {
    let childList = list.children
    for (let i = 0; i < childList.length; i++) {
      childList[i].innerHTML = parseInt(childList[i].innerHTML) + n
    }
  }
  )

}

// function increaseRankBy(n) {
//   const rankedLists = document.querySelectorAll('.ranked-list');

//   for (let i = 0, l = rankedLists.length; i < l; i++) {
//     let children = rankedLists[i].children;

//     for (let j = 0, k = children.length; j < k; j++) {
//       children[j].innerHTML = parseInt(children[j].innerHTML) + n;
//     }
//   }
// }