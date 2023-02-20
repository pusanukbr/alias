import ru from '../locales/ru/word';
import en from '../locales/en/word';
import ua from '../locales/ua/word';
import i18n from 'i18next';

const langWord = () => {
  if(i18n.language === 'ru') return ru;
  if(i18n.language === 'en') return en;
  if(i18n.language === 'ua') return ua;
}

const getRandomArbitrary = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numbers = [];
const getRandomUniqueNumber = (min, max) => {
  console.log(min, max);
  const number = Math.floor(min + Math.random() * (max - min))
  if (numbers.includes(number)) return getRandomUniqueNumber(min, max)
  else {
    numbers.push(number)
    return number
  }
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
  wordsRandom,
  getRandomArbitrary,
  getRandomUniqueNumber
};