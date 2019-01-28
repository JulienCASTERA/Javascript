function useSortingHat(char) {
  let choice = ''
  
  switch (char) {
    case 'Harry Potter':
      choice = 'Gryffindor';
      break;
    case 'Draco Malfoy':
      choice = 'Ravenclaw';
      break;
    case 'Luna Lovegood':
      choice = 'Ravenclaw';
      break;
    default:
      choice = 'Gryffindor';
      break;
  }
  return choice;
}


myCharacter = 'Luna Lovegood';
myCharacterHouse = useSortingHat(myCharacter);


const checkMyGringottsAccount = () => {
  myMoney = Math.random() * 100;

  if (myMoney > 0 || myMoney < 30) {
    return 'Hello Weasley';
  } else if ( myMoney > 30 ||  myMoney < 75 ) {
    return `Hey, that's cool`;
  } else {
    return `You're reach!`;
  }
}

isMyCharacterRich = checkMyGringottsAccount();
