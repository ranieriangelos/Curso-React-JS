import React from 'react';
import{Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles';
import logoimg from '../../assets/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md';

const Aside: React.FC = () => {
    return(
       <Container>
            <Header>
                <LogImg src={logoimg} alt='Logo Minha Carteira'/>
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard></MdDashboard>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward></MdArrowUpward>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward></MdArrowDownward>
                    Saídas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp></MdExitToApp>
                    Sair
                </MenuItemLink>
            </MenuContainer>
       </Container>  
    );
}

export default Aside;