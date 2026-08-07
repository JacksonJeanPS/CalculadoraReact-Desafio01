import { InputContainer } from './styles';

const Input = ({ value }) => {
  return (
    <InputContainer>
      <input
        aria-label="Resultado da calculadora"
        readOnly
        value={value}
      />
    </InputContainer>
  );
}

export default Input;
