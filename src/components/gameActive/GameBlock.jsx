import React, { useState, useReducer } from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { wordsRandom } from '../../const';
// import Maps from './GameMapsBlock'; FOR FUTURES
import LeftBlock from './GameLeftBlock';
import RightBlock from './GameRightBlock';
import CorrectBlock from './GameCorrectBlock';
import SkipBlock from './GameSkipBlock';
import reducer from "../../reducer";
import { useTranslation } from 'react-i18next';
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';

function Game({ userName, users, roomId, startTimer, stateTimer }) {
  const { t } = useTranslation();
  const [word, setWord] = useState(wordsRandom())
  const [state, dispatch] = useReducer(reducer, {
    win_word: [],
    lose_word: [],
  });
  const newWord = () => {
    setWord(wordsRandom());
  };
  console.log(users);
  return (
    <div className='game'>
      <Stack direction='row' maxW="lg" m={4} spacing={4} align='center' justify='space-between'>
        <ColorModeSwitcher />
      </Stack>
      <div className='game__topBlock'>
        {<LeftBlock userName={userName} roomId={roomId} />}
        {<RightBlock />}
      </div>
      <div className='game__bottomBlock'>
        {<SkipBlock />}
        <div className='game__center'>
          <div className='game__points'>{t('game.points')} <strong>0</strong></div>
          <div className='game__pass'>{t('game.pass')} <strong>0</strong></div>
          <div className='game__timer'>{stateTimer}</div>
          <div className='game__word'>
            <div className="card-item">{word}</div>
          </div>
          <div className='game__start'>
            <button
            type="button"
              className='btn btn-secondary btn__start'
              onClick={startTimer}>{t('game.start')}</button>
            </div>
          <div className='game__button'>
            <button type="button" className='btn btn-primary btn__right' onClick={newWord}>{t('btn.win')}</button>
            <button type="button" className='btn btn-warning btn__skip'onClick={newWord}>{t('btn.skip')}</button>
          </div>
          <div className='game_continue'>
            <button type="button" className='btn btn-secondary btn__continue'>Продолжить</button>
          </div>
        </div>
        {<CorrectBlock />}
      </div>
      
    </div>
  );
}

export default Game;