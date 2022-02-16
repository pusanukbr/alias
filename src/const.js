import ru from './ru';

const wordsRandom  = () => {
  return ru[Math.floor(Math.random()*ru.length)];
};


export { wordsRandom };