import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.color.gray};
`;

 
export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;

`;

export const LogImg = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
`; 

export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItemLink = styled.a`
        color: ${props => props.theme.color.info};
        text-decoration: none;
        display: flex;
        align-items: center;
        margin: 7px 0;
        transition:opacity.0,3s;
        &:hover{
            opacity: .7;
        }
        >svg { 
        margin-right: 15px;
        font-size:20px;    
    }
        `;

export const Title = styled.h3`
        color: ${props => props.theme.color.white}
    `;