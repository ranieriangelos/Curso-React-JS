import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CT;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.primary};
    height: calc(100vh - 70px);
    padding:20px;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
        width: 20px;
        display: flex;

    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${props => props.theme.color.secondary};
        
    }
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.color.tertiary};
        
    }
`;