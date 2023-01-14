import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Rodape from './Rodape';
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';

const mockNavigate = jest.fn();
const mockSorteador = jest.fn();

jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

jest.mock('../state/hooks/useSorteador', () => {
  return {
    useSorteador: () => mockSorteador,
  };
});

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('Quando não existem participantes suficientes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test('A brincadeira não pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>,
    );
    const botao = screen.getByRole('button');
    expect(botao).toBeDisabled();
  });
});

describe('Quando existem participantes suficientes', () => {
  const participantes = ['Ana', 'Lea', 'Lia'];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test('A brincadeira pode ser iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>,
    );
    const botao = screen.getByRole('button');
    expect(botao).toBeEnabled();
  });

  test('A brincadeira foi iniciada', () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>,
    );
    const botao = screen.getByRole('button');
    fireEvent.click(botao);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('/sorteio');
    expect(mockSorteador).toHaveBeenCalledTimes(1);
  });
});
