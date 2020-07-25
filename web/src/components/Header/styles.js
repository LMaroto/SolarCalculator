import styled from 'styled-components';

export const Container = styled.div`

    background: #EE8143;
    padding: 0px;
`;

export const Content = styled.div`
    
    height: 50px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 17px;

    nav{
        display: flex;
        align-items: center;

        strong {
            font-weight: bold;
            color: #fff;
        }
    }

    aside {
        display: flex;
        align-items: center;
        color: #fff;
    }
`;
