**Mod 1 - Game Project (Black Jack)**:

**TO DO**
1. Set up repo in Github 
2. Write README.MD 
3. Pseudo Code/ notes
4. Set up code environment
5. Code and pseudo code black jack game + daily commits/update
    - HTML - must use divs for gameplay area
    - CSS - must use flex-box
    - JS - must use functions 
 

**Black Jack**:
 - 2 player black jack (dealer vs player)
 - First to 21 wins unless dealer and player tie.
 - Get code working completely by the 6th with no errors!

 **Game Overview**
 - On page load the deck is created and shuffled for dealer to distribute.
 - Dealer keeps on card face down and deals the player 2 cards.
 - Dealers deals one more card to self and player is then given the option to 'hit or 'stay'.
 - Goal of game is to beat the dealer, first player to have more than the dealer without busting but less than or equal to 21 is the winner.
 - Depending on outcome, a message is sent to player displaying game score and whether the player has won or loss.
 - When game is finished, player can press 'reset' to reshuffle the deck and begin to play again.

**Resources**: 
https://www.youtube.com/watch?v=bMYCWccL-3Us/

https://codesandbox.io/s/javascript-beginner-tutorial-blackjack-epegw?from-embed


**HTML**: 
 - Dealer hand
 - Player hand
 - Hit/Stay buttons
 - Restart button
 - Score output
 - Image input
 - Div creation
 
**CSS**: 
 - Class/Id styling
 - Container for play area (Flex box) -> "display: flex; align-items: center; justify-content: center;" -> (Center alignment for game container)
 - Botton styling (hit/stay/restart button)
 - Asset sizing
 - Game back-drop
 - Color scheme and font styling

**JS**:
 - Game logic (Deck creation, deck shuffle, dealer output, card link)
 - Game flow (score/blackjack count)
 

**Code Building Steps**
 1. Create HTML structure for game using button tags, classes, divs and img tags.
 2. Create CSS to stay any objects in HTML structure.
 3. Create JavaScript logic for gameplay:
 4. First we must declare global variables for: 
    - Dealer card sum       - Face down card
    - Player card sum       - Card deck 
    - Dealer ace count      
    - Player ace count
    - Dealer ace count      
    - Player ace count
    - "Hit" boolean -> action which allows player to draw.

 5. On page load figure a way to build/shuffle deck for gameplay start.   
 6. Create a loop or function to wrap gameplay.
 7. Must declare value of deck -> Array or variable declaration?
 8. When naming cards in JS logic (array or declaration), must match value('') of card with card name in image file (HTML index).
 9. Use a loop to cycle through card options for game load and deck shuffling -> (for-loop or while-loop?).
 10. For deck shuffle, must get random card output for playerand dealer hands -> Math.random()?
 ----------------Game Start----------------------->
 




**REMEMEMBER**

Stretch Goals (Not Mandatory):

Recommended Features:
- A way to reset the board and play again
- CSS to give your game a personal and fun style
- Responsive mobile design
- Work with your instructor to determine additional stretch goals

If you build a you Game must have:
1. Must be a two player game (either against the computer or against another player)
- Example: Blackjack: A player plays against the dealer. The dealer is the computer - Example: Connect Four: Two players pass the game between themselves to take turns
2. A win state - a way for the player to win the game High score can be considered a win state
3. A lose state - a way for the player to lose the game
Example: Blackjack - a player must be able to lose all of their money with losing hands and cannot play if their bankroll is at 0
Example: Connect Four - the other player has won or there are no possible plays le"
4. A way to keep playing if the game is not over
5. Mul#ple rounds to play - a round must begin, end, and there must be a way to check if the game should con!nue or the overall game is won or lost 
- Example: Blackjack: a player takes turns playing a hand versus a computer 
- the player's hand can either win, lose or !e the dealer. If the player has enough money in their bankroll they can keep playing. A player must be able to win several rounds and increase their bankroll 
- Example: Connect Four: two (non-computer) players take turns adding chips to the board. The game will check if a player won or if the board is full and there are no more plays possible. A player gets four chips in a row (ver!cally or horizontally)
- one person wins, one loses, there are no further plays in this case
# Mod1-Project_BlackJack
