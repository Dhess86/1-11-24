const prompt = require('prompt-sync')();


function showPage(){

    console.log("You are a wizard exploring a dungeon!")
    console.log("(1) Cast Fireball")
    console.log("(2) Explore")
}



function getUserChoice(){
    return prompt('')
}


function handleChoice(choice) {

    if(choice == 1) {
        console.log('You cast fireball, because of course you do')
    } else if (choice == 2) {
        console.log('You find nothing')
    } else {
        console.log('that is not a valid choice')
    }
    }

    class Page {
        text
        choices
        constructor(text, choices = []) {
            this.text = text
            this.choices = choices
        }
    }

    const page = new Page("You are a wizard exploring a dungeon!", ["Cast Fireball", "Explore"])
    console.log(page)

    showPage()
    const choice = getUserChoice()
    handleChoice(choice)