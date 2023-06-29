import React, {useMemo} from 'react';
import styled from 'styled-components';
import {Container} from './style';
import dollarImg from '../../assets/dollar.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'
import CountUp from 'react-countup';


interface IWalletBoxProps{
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const Walletbox: React.FC<IWalletBoxProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color
}) =>{

    const IconSelected = useMemo(() =>{

        switch(icon){
            case 'dolar':
                return dollarImg;
            case 'arrowDown':
                return arrowDown;
            case 'arrowUp':
                return arrowUp;
            default:
                return undefined;
            }
    },[icon]);

    return(
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <CountUp
                    end={amount}
                    prefix={"R$ "}
                    separator="."
                    decimals={2}
                    preserveValue={true}/>
            </h1>
            <small>{footerlabel}</small>
            {IconSelected && <img src={IconSelected} alt={title}></img>}
        </Container>
    );
}

export default Walletbox;