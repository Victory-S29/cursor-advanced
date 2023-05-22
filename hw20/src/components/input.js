import styled from 'styled-components';

const InputStyle = styled.input`
    color: white;
    background: #161616;
    border: 1px solid white;
    padding:10px;
    border-radius:5px;
    width:100%;
    ::placeholder {
        color: white;  
        font-family: 'Roboto', sans-serif;
        letter-spacing:4px;
    }
    :hover{
        background:#191919;
    }
`;

export default InputStyle;