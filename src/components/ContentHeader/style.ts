import styled from "styled-components";
interface ITitleContainerProps{
    lineColor: string;
}
export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    `;

export const Controllers = styled.div`
        display: flex;
    `;

export const TitleContainer = styled.div<ITitleContainerProps>`
    >h2 {
        color: ${props => props.theme.color.white};
    }

    &::after{
        content:'';
        display: block;
        border-bottom: 7px solid ${props => props.lineColor};
        width: 55px;
        display: block;
        height: 2px;
    }
`;