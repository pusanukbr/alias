import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import {
    Box,
    Button,
} from '@chakra-ui/react';

const Timer = () => {
    const { t } = useTranslation();
    const sec = 5;
    const [seconds, setSeconds] = useState(sec);
    const [isActive, setIsActive] = useState(false);
    const styleSec = {
        width: '100%',
        position: 'relative',
        display: 'flex',
        alightItem: 'center',
        justifyContent: 'center',
        borderRadius: '50%'
    }
    const afterSec = {
        content: '""',
        position: 'absolute',
        width: '120%',
        height: '120%',
        top: '-10%',
        left: '-10%',
        backgroundColor: '#FF0000',
        borderRadius: '50%',
        zIndex: '-1'
    }
    const styleAnimetion = {
        width: '25px',
        height: '25px',
        backgroundColor: '#00FF00',
        borderRadius: '50%',

    }
    function startTimer() {
        setIsActive(true);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
                if (isActive && seconds === 0) {
                    clearInterval(interval);
                    setSeconds(sec);
                    setIsActive(false);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <Box className="app">
            <motion.div
                style={styleAnimetion}
                animate={{transform: `scale(${isActive ? 1.2 : 1})`}}>
                <Box _after={isActive ? afterSec : null} style={styleSec}>{seconds}</Box>
            </motion.div>
            <Box>
                <Button className="button button-primary" onClick={startTimer}>
                {t('game.start')}</Button>
            </Box>
        </Box>
    );
};

export default Timer;