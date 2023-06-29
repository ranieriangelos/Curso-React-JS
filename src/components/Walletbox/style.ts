import styled from "styled-components";

interface IContainerProps{
    color: string;
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.color};
    width:  32%;
    height: 170px;
    border-radius: 10px;
    color: ${props => props.theme.color.white};
    padding: 10px 20px;
    overflow: hidden;
    position: relative;

    > img {
        position: absolute;
        height: 110%;
        opacity: .3;
        top: -10px;
        right: -20px;
    
    }
    > span{
        font-size: 18px;
        font-weight: 300;
    }
    >small{
        font-size: 12px;
        position: absolute;
        bottom: 15px;
    }
`;