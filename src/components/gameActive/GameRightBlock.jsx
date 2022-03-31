import React from "react";
import './GameRightBlock.css';
import { useTranslation } from 'react-i18next';

function GameRightBlock() {
  const { t } = useTranslation();
  return (
    <div className="rightBlock">
      <div className='game__score'>{t('game.scopes')} <strong>0</strong> - <strong>1</strong></div>
    </div>
  );
}

export default GameRightBlock;