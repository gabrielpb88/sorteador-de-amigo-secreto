import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';
import Sorteio from './Sorteio';
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';

jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

jest.mock('../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn(),
  };
});
describe('Pagina do sorteio', () => {
  const participantes = ['Ana', 'Catarina', 'Josias'];
  const resultado = new Map([
    ['Ana', 'Catarina'],
    ['Catarina', 'Josias'],
    ['Josias', 'Ana'],
  ]);

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
    (useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
  });
  test('todos os nomes dos participantes devem ser exibidos', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    );

    const opcoes = screen.getAllByRole('option');
    expect(opcoes.length).toEqual(participantes.length);
  });

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    );

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    });

    const botao = screen.getByRole('button');
    fireEvent.click(botao);

    const amigoSecreto = screen.getByRole('alert');
    expect(amigoSecreto).toBeInTheDocument();
  });
});
