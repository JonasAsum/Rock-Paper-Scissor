const finalColumn = document.querySelector("[data-final-column]")
const computerScoreSpan = document.querySelector("[data-computer-score")
const userScoreSpan = document.querySelector("[data-your-score")

const SELECTIONS = [{
    name:"Rock",
    output:"ROCKY",
    beats:"Scissor"
},
{
    name:"Paper",
    output:"PAPPY",
    beats:"Rock"
},
{
    name:"Scissor",
    output:"SISSY",
    beats:"Paper"
}
]

selectionButtons = document.querySelectorAll("[data-selection]")

selectionButtons.forEach(selectionButton => selectionButton.addEventListener('click', event => 
{ 
const selectionName = selectionButton.dataset.selection

const selection = SELECTIONS.find(selection => selection.name === selectionName)
makeSelection(selection)
}));

function computerSelection () {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    console.log(SELECTIONS[randomIndex])
    return SELECTIONS[randomIndex]
    
}


function makeSelection(selection) {
    const computerSelections = computerSelection()
    const comWin = isWinner(computerSelections , selection )
    const userWin = isWinner(selection, computerSelections)

    addSelectionResult(computerSelections, selection)
    addSelectionResult(selection, computerSelections)

    if (comWin) incrementScore(computerScoreSpan)
    if(userWin) incrementScore(userScoreSpan)
}


function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult (selection , winner) {
const div = document.createElement("div")
div.innerText = selection.output
if (winner) {
    finalColumn.after(div)
} 
}

function isWinner(firstSelection , secondSelection){
    return firstSelection.beats === secondSelection.name
}



