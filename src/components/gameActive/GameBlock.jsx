import React, { useState, useReducer } from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Timer from '../Timer';
import { wordsRandom } from '../../const';
// import Maps from './GameMapsBlock'; FOR FUTURES
import LeftBlock from './GameLeftBlock';
import RightBlock from './GameRightBlock';
import CorrectBlock from './GameCorrectBlock';
import SkipBlock from './GameSkipBlock';
import reducer from "../../reducer";
import { useTranslation } from 'react-i18next';
import { FaRegClock, FaClock } from 'react-icons/fa';
import {
  Box,
  Progress,
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
  Tag,
  TagLeftIcon,
  TagLabel,
  VStack,
  ButtonGroup,
} from '@chakra-ui/react';

function Game({ userName, users, roomId, stateTimer, sec }) {
  const { t } = useTranslation();
  const SwitchIconTimer = useColorModeValue(FaRegClock, FaClock);
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
      <Flex>
        {<LeftBlock userName={userName} roomId={roomId} />}
        <Spacer />
        {<RightBlock />}
      </Flex>
      <Divider mb='5' size='4' colorScheme='purple'/>
      <Flex h='100%'>
        <Box w='25%'>
          {<SkipBlock />}
        </Box>
        <VStack w='50%'>
          <Box>{t('game.points')} <strong>0</strong></Box>
          <Box>{t('game.pass')} <strong>0</strong></Box>
          <Box>
            <Timer/>
          </Box>
          <Box>
            <div>{word}</div>
          </Box>
          <Box>
            <ButtonGroup>
              <Button type="button" onClick={newWord}>{t('btn.skip')}</Button>
              <Button type="button" onClick={newWord}>{t('btn.win')}</Button>
            </ButtonGroup>
          </Box>
        </VStack>
        <Box w='25%'>
          {<CorrectBlock />}
        </Box>
      </Flex>
      
    </Box>
  );
}

export default Game;