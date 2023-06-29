import styled from "styled-components";


export const Container = styled.div`   
`;

export const Content = styled.div``;

export const Filters = styled.div`
    width:  100%;
    display: flex;
    justify-content:center;
    margin-bottom: 40px;

    .tag-filter{
        font-size: 18px;
        font-weight: 450;
        background: none;
        color: ${props => props.theme.color.white};
        margin: 0 10px;
        transition: opacity .3s ;
        opacity: 0.3;
        &:hover{
        transform: translateX(5px);
        opacity: .7;
    }
        &::after{
            content:'';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.color.warning};
        }
}

    .tag-filter-eventual::after{
        content:'';
            display: block;
            width: 55px;
            margin: 0 auto;
            border-bottom: 10px solid ${props => props.theme.color.succes};
    }

    .tag-activited{
        opacity: 1;
    }

`;
