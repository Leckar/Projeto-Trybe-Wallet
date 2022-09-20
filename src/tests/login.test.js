import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';

describe('Tests if the login screen works as intended', () => {
  it('should validate coherent email adressess and password', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const loginInput = screen.getByRole('textbox');
    const pwdInput = screen.getByTestId('password-input');
    const bttn = screen.getByRole('button', { name: /entrar/i });
    expect(loginInput).toBeInTheDocument();
    expect(pwdInput).toBeInTheDocument();
    expect(bttn).toBeInTheDocument();
    userEvent.type(loginInput, 'test@tester.te.st');
    userEvent.type(pwdInput, '123456');
    userEvent.click(bttn);
    await waitFor(() => {
      expect(bttn).not.toBeInTheDocument();
    });
    history.push('/carteira');
    await waitFor(() => {
      expect(history.location.pathname).toBe('/carteira');
    });
  });
});
