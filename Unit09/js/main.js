function duplicateMenu() {
    // get all of the anchor elements from the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    // create the new list items for the bottom of the page
    let newList = document.createElement('ul')

    // loops through the top menu items 
    topList.forEach((menuItem, i) => {
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))

        // 'copy' the textContent of top menu to new menu
        newLink.textContent = topList[i].textContent

        // append children to make them appear in the DOM
        document.querySelector('#smallNavArea')
            .appendChild(newList)
            .appendChild(newLI)
            .appendChild(newLink)
    })


}

duplicateMenu()