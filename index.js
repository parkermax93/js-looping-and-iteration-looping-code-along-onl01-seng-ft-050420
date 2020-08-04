function writeCards(names, event) {
  let cards = []
  for (let count = 0; count < names.length; count++) {
    cards.push(`Thank you, ${names[count]}, for the wonderful ${event} gift!` )
  }
  return cards 
  }
  
function countdown( countdown ) {
  let countdown = []; 
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}