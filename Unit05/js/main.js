// create an array with four trees listed
let trees = ['Blue Spruce', 'aspen', 'Northern Red Oak', 'juniper']

const errorElement = document.querySelector('#error')
const displayResultsElement = document.querySelector('#displayResults')




// display the list of trees inside the displayResults div
const listOfTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResultsElement.innerHTML = `${treeList} <span><strong>Total: ${trees.length} trees</strong></span>`
}

listOfTrees()



// add a redwood to the end of the list, add a pear to the start
document.querySelector('#add_redwood').onclick = () => { 
    trees.push('redwood')
    listOfTrees();
}

document.querySelector('#add_pear').onclick = () => { 
    trees.unshift('pear')
    listOfTrees();
}



// remove the first tree - with error message
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0){
        trees.shift()
        listOfTrees()
    } else {
        errorElement.textContent = 'There are no trees to remove.'
    }
}



// remove the second tree - with error message
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1){
        trees.splice(1, 1)
        listOfTrees()
    } else {
        errorElement.textContent = 'There are not enough trees in the list.'
    }
}



// remove the last tree - with error message
document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0){
        trees.pop()
        listOfTrees()
    } else {
        errorElement.textContent = 'There are no trees to remove.'
    }
}


// sort the trees A-Z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listOfTrees()
}



// make all the trees lowercase
document.querySelector('#lowerTrees').onclick = () => {
    trees = trees.map(tree => tree.toLowerCase());
    listOfTrees()
}



// display the name of tree number 3 - with error 
document.querySelector('#showName3').onclick = () => {
    if (trees.length >= 3){
        errorElement.textContent = trees[2]
    } else {
        errorElement.textContent = 'Cannot display tree number three. There are not enough trees in the list.'
    }
}



// display the name of tree number 4 - with error
document.querySelector('#showName4').onclick = () => {
    if (trees.length >= 4){
        errorElement.textContent = trees[3]
    } else {
        errorElement.textContent = 'Cannot display tree number four. There are not enough trees in the list.'
    }
}