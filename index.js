function writeCards(names, event) {
  let cards = []
  for (let count = 0; count < names.length; count++) {
    cards.push(`Thank you ${names} for the $(event) gift!` )
  }
  return cards 
  }