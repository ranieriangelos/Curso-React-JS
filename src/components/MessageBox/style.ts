import style, { styled } from 'styled-components';

export const Container = styled.div`
    width: 48%;
    height: 260px;
    background-color: ${props => props.theme.color.tertiary};
    color: ${props => props.theme.color.white};
    border-radius: 7px;
    margin: 20px 0;
    padding: 20px 20px;
    flex-direction: column;
    justify-content: space-between;

    >header img{
        width: 28px;
        margin: 0 0 0 15px;
    }

    >header p{
        font-size: 18px;
    }

    >footer{
        margin-top: 130px;
    }
`;
