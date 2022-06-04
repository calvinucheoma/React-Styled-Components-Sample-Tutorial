import styled /*{keyframes}*/ from 'styled-components';

export const StyledButton = styled.button`
  border: 2px solid black;
  margin-left: 100px;
  margin-top: 100px;
  width: 120px;
  height: 50px;
  padding: 15px 32px;
  background-color: ${(props) => props.variant === 'outline' ? 'white' : 'blue'};
  color: ${(props) => props.variant === 'outline' ? 'blue' : 'white'};
  border-radius: 25px;
  cursor: pointer;
  text-align: center;
  transition: 0.5s all ease-out;
  display: inline-block;
  &:hover{
  background-color: ${(props) => props.variant !== 'outline' ? 'white' : 'blue'};
  color: ${(props) => props.variant !== 'outline' ? 'blue' : 'white'};
  }
`;

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
    type: 'submit'
})`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) => props.variant !== 'outline' ? 'white' : 'blue'};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`;

// const rotate = keyframes`

//     from {
//         transform: rotate(0deg);
//     }
//     to {
//         transform: rotate(360deg);
//     }

// `;


// export const AnimatedLogo = styled.img`

//     height: 40vmin;
//     pointer-events: none;
//     animation: ${rotate} infinite 2s linear;

// `;

export const DarkButton = styled(StyledButton)`

    border: 2px solid ${(props) => props.theme.dark.primary};
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
`;

export const LightButton = styled(StyledButton)`

    border: 2px solid ${(props) => props.theme.light.primary};
    background-color: ${(props) => props.theme.light.primary};
    color: ${(props) => props.theme.light.text};
`;