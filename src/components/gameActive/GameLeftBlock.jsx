import React from "react";
import './GameLeftBlock.css';
import { useTranslation } from 'react-i18next';

function GameLeftBlock({ userName, roomId }) {
  const { t } = useTranslation();
  return (
    <div className="leftBlock">
      <div className='game__gamer'>{t('user')} <span>({userName})</span></div>
      <div className='game__id'>{t('id.room')} <span>({roomId})</span></div>
    </div>
  );
}

export default GameLeftBlock;