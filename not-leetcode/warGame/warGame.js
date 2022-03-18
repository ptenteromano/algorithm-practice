const Player = require("./player");

class WarGame {
  constructor() {
    this.cardsValues = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };

    this.cards = Object.keys(this.cardsValues);
    this.reset();
  }

  reset() {
    this.fullDeck = this.shuffleDeck(this.buildDeck()).reverse();
    this.player2 = new Player(this.fullDeck.slice(0, 26));
    this.player1 = new Player(this.fullDeck.slice(26));

    // console.log({ deck: this.fullDeck });
    // console.log({ 1: this.player1.deck, 2: this.player2.deck });
    // console.log({
    //   1: this.sumDeckVal(this.player1.deck),
    //   2: this.sumDeckVal(this.player2.deck),
    // });
  }

  sumDeckVal(deck) {
    let sum = 0;
    for (const card of deck) sum += this.cardsValues[card];
    return sum;
  }

  buildDeck() {
    const deckSize = 52;
    const numCards = this.cards.length;
    const deck = new Array(deckSize);

    for (let idx = 0; idx < deckSize; idx++) {
      deck[idx] = this.cards[idx % numCards];
    }
    return deck;
  }

  shuffleDeck(deck) {
    let count = 0;
    while (count < 2) {
      for (let idx = 0; idx < deck.length; idx++) {
        const swapIdx = Math.floor(Math.random() * deck.length);
        const temp = deck[idx];
        deck[idx] = deck[swapIdx];
        deck[swapIdx] = temp;
      }
      count++;
    }
    return deck;
  }

  compare(card1, card2) {
    const cardVal1 = this.cardsValues[card1];
    const cardVal2 = this.cardsValues[card2];

    if (cardVal1 === cardVal2) return 0;
    if (cardVal1 > cardVal2) return 1;
    if (cardVal1 < cardVal2) return 2;
  }

  faceOff(winningPile = []) {
    if (!this.player1.stillIn(this.shuffleDeck)) return { winner: -1 };
    if (!this.player2.stillIn(this.shuffleDeck)) return { winner: -2 };

    const card1 = this.player1.playCard();
    const card2 = this.player2.playCard();
    const winner = this.compare(card1, card2);
    winningPile.push(card1, card2);

    // Recursively play again
    if (winner === 0) this.faceOff(winningPile);

    return { winner, winningPile };
  }

  play() {
    const { winner, winningPile } = this.faceOff();

    if (winner < 0) return this.handleWinner(winner);

    if (winner === 1) this.player1.addToPile(winningPile);
    else if (winner === 2) this.player2.addToPile(winningPile);
    return this.play();
  }

  handleWinner(winner) {
    this.reset();

    if (winner === -1) {
      console.log("Player 2 wins!");
      return 2;
    }
    if (winner === -2) {
      console.log("Player 1 wins!");
      return 1;
    }

    console.log({ one: this.player1.cardCount() });
    console.log({ two: this.player2.cardCount() });
  }
}
const game = new WarGame();

let numWins = { 1: 0, 2: 0 };

for (let idx = 0; idx < 500000; idx++) {
  numWins[game.play()]++;
}
console.log({ numWins });

const total = numWins[1] + numWins[2];
const player1Rate = `${((numWins[1] / total) * 100).toFixed(3)}%`;
const player2Rate = `${((numWins[2] / total) * 100).toFixed(3)}%`;
console.log(`Total games: ${total}. Win rates:`, {
  1: player1Rate,
  2: player2Rate,
});
