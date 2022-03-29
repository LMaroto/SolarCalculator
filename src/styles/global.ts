import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        height: 100vh;
    }
    body{
        font-family: 'TrebuchetMS', sans-serif;
    }
    :root{
        --white: #fff;
        --background: #ee8143;
        --background-light: #f6c3a6;
        --inverse-background: #138dd2;
        --text: #535353;
    }

    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
    }
    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }
`
