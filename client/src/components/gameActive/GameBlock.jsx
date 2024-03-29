import React, { useState } from 'react';
import Timer from '../Timer';
import { wordsRandom } from '../../const';
// import Maps from './GameMapsBlock'; FOR FUTURES
import { useTranslation } from 'react-i18next';
import { Box, Button, ButtonGroup, Divider, Flex, VStack } from '@chakra-ui/react';

function Game() {
  const { t } = useTranslation();
  // const SwitchIconTimer = useColorModeValue(FaRegClock, FaClock);
  const [word, setWord] = useState(wordsRandom());
  const winWord = () => {
    // dispatch({
    //   type: 'FINISH_WORD',
    //   payload: {
    //     win_word: word,
    //   }
    // });
    setWord(wordsRandom());
  };
  const skipWord = () => {
    // dispatch({
    //   type: 'FINISH_WORD',
    //   payload: {
    //     skip_word: word,
    //   }
    // });
    setWord(wordsRandom());
  };
  return (
    <Box>
      <Flex>
        {/* {<LeftBlock userName={userName} roomId={roomId} />}
        <Spacer />
        {<RightBlock />} */}
      </Flex>
      <Divider mb="5" size="4" colorScheme="purple" />
      <Flex h="100%">
        <Box w="25%">{/* {<SkipBlock skip={state.skip_word} />} */}</Box>
        <VStack w="50%">
          {/* <Box>{t('game.points')} <strong>{state.win_word.length}</strong></Box>
          <Box>{t('game.pass')} <strong>{state.skip_word.length}</strong></Box> */}
          <Box>
            <Timer sec={60} />
          </Box>
          <Box>
            <div>{word}</div>
          </Box>
          <Box>
            <ButtonGroup>
              <Button type="button" onClick={skipWord}>
                {t('btn.skip')}
              </Button>
              <Button type="button" onClick={winWord}>
                {t('btn.win')}
              </Button>
            </ButtonGroup>
          </Box>
        </VStack>
        <Box w="25%">{/* {<CorrectBlock win={state.win_word} />} */}</Box>
      </Flex>
    </Box>
  );
}

export default Game;
