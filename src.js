console.log("connected...")

const capitalize = str => {
    return (typeof str !== 'string') ? '' : str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

const getComputerChoice = () => {     // function to gain computer choice
    const choiceArr = ['Rock', 'Paper','Scissors'];
    const choice = choiceArr[Math.floor(Math.random()*choiceArr.length)]
    return choice
}

const playRound = (playerSelection, computerSelection) => {
    // Compare player selection to computer selection and declare winner.

    const result = {
        outcome : '',
        message : '',
    }

    if(playerSelection == computerSelection){
        result.message = `You Draw!  ${computerSelection} vs. ${computerSelection}`;
    } else {
        switch(playerSelection.toLowerCase()){
            case 'rock':
                // player selection rock: rock beats scissors, loses against paper
                result.outcome = (computerSelection=='Scissors') ? 'Win' : 'Lose';
                break;
            case 'paper':
                // player selection paper: paper beats rock, loses against scissors
                result.outcome = (computerSelection=='Rock') ? 'Win' : 'Lose';    
                break;
            case 'scissors':
                // player selection scissors: scissors beats paper, loses against rock
                result.outcome = (computerSelection=='Paper') ? 'Win' : 'Lose';    
                break;
            default:
                // player selection unknown
                console.warn(`Unknown Play: ${playerSelection}. Choice either Rock, Paper or Scissors.`);
        };

        if(result.outcome){
            result.message = `You ${result.outcome}! ${
                (result.outcome == 'Win') ? `${capitalize(playerSelection)} beats ${computerSelection}` : 
                                            `${computerSelection} beats ${capitalize(playerSelection)}`
            }`
        }
                     
    }

    return result;
    
}

const game = () => {
    const roundLimit = 5;
    let playerScore = 0;
    let computerScore = 0;
    
    console.log(`Let's Play 'Rock, Paper, Scissors!!\n\nYou will battle against the computer in ${roundLimit} round${(roundLimit>1)?'s':''} of 'Rock, Paper, Scissors'.\n\nRock Beats Scissors, Scissors beats Paper and Paper beats Rock!\n\n\nGood Luck!!\n`);

    for(let round = 1; round <= roundLimit; round++){
        console.log(`${(round==roundLimit)?'Final ':''}Round ${(round==roundLimit)?'':round}:\n\nawaiting your selection.....\n`)
        const playerSelection = capitalize(prompt(`Round ${round}.\n\nMake your selection: \n(type 'Rock', 'Paper', or 'Scissors')`)).trim();
        const result = playRound(playerSelection, getComputerChoice());

        if(result.outcome){
            (result.outcome == 'Win') ? (playerScore += 1) : (computerScore += 1);
        }
        

        console.log(`\n${result.message}\n---------------------------------\n Score -  You: ${playerScore} vs. Computer: ${computerScore}\n---------------------------------\n`)
    }

    if(playerScore==computerScore){
        console.log('\nIt was a Draw.  Better luck next time!')
    } else if(playerScore>computerScore){
        console.log('Congratulations!!!  You Win.')
    }else{
        console.log('Bad Luck!!!  You Lost. Better luck next time!')
    }


}


game()