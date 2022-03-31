import ru from './ru';
import en from './en';
import ua from './ua';
import i18n from 'i18next';

const langWord = () => {
  if(i18n.language === 'ru') return ru;
  if(i18n.language === 'en') return en;
  if(i18n.language === 'ua') return ua;
}

const wordsRandom  = () => {
  const word = langWord();
  return word[Math.floor(Math.random() * word.length)];
};


// Color dev

const primeryBG = '#151316'
const lightBG = '#1a1b1d'
const accentColor = '#3ddbe6'


export {
  wordsRandom
};