function tellStory() {

    let nounArray = document.querySelector('#nouns')
        .value
        .toLowerCase()
        .split(/\s+/)

    let adjArray = document.querySelector('#adjectives')
        .value
        .toLowerCase()
        .split(/\s+/)

    let verbArray = document.querySelector('#verbs')
        .value
        .toLowerCase()
        .split(/\s+/)

    const myStory = document.querySelector('#story')
    myStory.innerHTML = `Once upon a time there was a <strong>${adjArray[0]}</strong> farmer who lived near a <strong>${adjArray[1]} ${nounArray[0]}</strong>. Every day, the farmer would <strong>${verbArray[0]}</strong>, call his <strong>${nounArray[1]}</strong>, and together they would set off to visit the <strong>${adjArray[1]} ${nounArray[0]}</strong>. Once they got there, they would <strong>${verbArray[1]}</strong> and eat lots of <strong>${nounArray[2]}s</strong>. They always made sure to bring a <strong>${nounArray[3]}</strong> and a <strong>${nounArray[4]}</strong> in case they ran into a <strong>${adjArray[2]} ${nounArray[5]}</strong>. One day, they did run into a <strong>${adjArray[2]} ${nounArray[5]}</strong>, but instead of using their <strong>${nounArray[3]}</strong> or <strong>${nounArray[4]}</strong>, the <strong>${nounArray[1]}</strong> told it a <strong>${nounArray[6]}</strong> and they all became friends!`

}