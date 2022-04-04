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
  Flex,
  Spacer,
  Divider,
  Badge,
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
    <Box>
      <Stack direction='row' maxW="lg" m={4} spacing={4} align='center' justify='space-between'>
        <ColorModeSwitcher />
      </Stack>
      <Flex colorScheme='teal'>
        {<LeftBlock userName={userName} roomId={roomId} />}
        <Spacer />
        {<RightBlock />}
      </Flex>
      <Divider mb='5' size='4' colorScheme='purple'/>
      <div>
        {<SkipBlock />}
        <div>
          <div>{t('game.points')} <strong>0</strong></div>
          <div>{t('game.pass')} <strong>0</strong></div>
          <Badge colorScheme='purple' px='4' fontSize='1.5em'>{stateTimer}</Badge>
          <div>
            <div>{word}</div>
          </div>
          <div>
            <button
            type="button"
              onClick={startTimer}>{t('game.start')}</button>
            </div>
          <div>
            <button type="button" onClick={newWord}>{t('btn.win')}</button>
            <button type="button" onClick={newWord}>{t('btn.skip')}</button>
          </div>
          <div>
            <button type="button">Продолжить</button>
          </div>
        </div>
        {<CorrectBlock />}
      </div>
      
    </Box>
  );
}

export default Game;