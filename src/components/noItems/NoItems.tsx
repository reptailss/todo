import React, {FC} from 'react';
import {Typography} from "@mui/material";

import styles from './styles.module.scss'

interface INoItemsProps {
    text: string
}

const NoItems:FC<INoItemsProps> = ({text}) => {
    return (
        <Typography
            variant={'body1'}
            className={styles.root}>
            {text}
        </Typography>
    );
};

export default NoItems;