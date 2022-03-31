import ru from './ru';

const wordsRandom  = () => {
  return ru[Math.floor(Math.random()*ru.length)];
};


// Color dev

const primeryBG = '#151316'
const lightBG = '#1a1b1d'
const accentColor = '#3ddbe6'


export {
  wordsRandom
};