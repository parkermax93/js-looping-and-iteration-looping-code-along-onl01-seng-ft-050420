function writeCards(names, event) {
  let cards = []
  for (let count = 0; count < names.length; count++) {
    cards.push(`Thank you ${name[count]} for the $(event) gift!` )
  }
  return cards 
  }