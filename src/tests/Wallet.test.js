import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';

const MOCK_EMAIL = 'test@tester.te.st';

describe('Tests if the Wallet screen works as intended', () => {
  it('should render the users email adress', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByRole('textbox');
    const pwdInput = screen.getByTestId('password-input');
    const bttn = screen.getByRole('button', { name: /entrar/i });
    userEvent.type(emailInput, MOCK_EMAIL);
    userEvent.type(pwdInput, '123456');
    userEvent.click(bttn);
    history.push('/carteira');
    expect(history.location.pathname);
    const userGreeting = screen.getByTestId('email-field');
    expect(userGreeting).toBeInTheDocument();
    expect(userGreeting.innerHTML).toBe(`Olá, ${MOCK_EMAIL}`);
  });
});
