import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';
import Sorteio from '../componentes/Sorteio';

jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});
describe('Pagina do sorteio', () => {
  const participantes = ['Ana', 'Catarina', 'Josias'];

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test('todos os nomes dos participantes devem ser exibidos', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>,
    );

    const opcoes = screen.getAllByRole('option');
    expect(opcoes.length).toBe(participantes.length);
  });
});
