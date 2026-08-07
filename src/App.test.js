import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

function clickButton(name) {
  fireEvent.click(screen.getByRole('button', { name }));
}

test('renderiza o visor com zero', () => {
  render(<App />);
  expect(screen.getByLabelText('Resultado da calculadora')).toHaveValue('0');
});

test('realiza uma soma', () => {
  render(<App />);

  clickButton('2');
  clickButton('+');
  clickButton('3');
  clickButton('=');

  expect(screen.getByLabelText('Resultado da calculadora')).toHaveValue('5');
});

test('limpa o cálculo', () => {
  render(<App />);

  clickButton('8');
  clickButton('c');

  expect(screen.getByLabelText('Resultado da calculadora')).toHaveValue('0');
});
