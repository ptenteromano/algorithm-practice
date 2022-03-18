class Player {
  constructor(deck) {
    this.deck = deck;
    this.winningPile = [];
  }

  playCard() {
    return this.deck.pop();
  }

  /**
   *
   * @param {Array} cards
   */
  addToPile(cards) {
    this.winningPile.push(...cards);
  }

  // @return [Boolean] true if still in the game, false otherwise
  stillIn(shuffleFn) {
    if (this.lost()) return false;
    if (this.deck.length) return true;

    this.deck = shuffleFn([...this.winningPile]);
    this.winningPile = [];

    return true;
  }

  cardCount() {
    return this.deck.length + this.winningPile.length;
  }

  lost() {
    return this.cardCount() === 0;
  }
}

module.exports = Player;
