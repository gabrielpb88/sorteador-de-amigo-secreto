import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ListaDeParticipantes from './ListaDeParticipantes';
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';

// o código abaixo cria um mock da função useListaDeParticipantes.
// o jest.fn() configura o jest para que trate aquele recurso como uma função.
jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn(),
  };
});

describe('uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });
  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>,
    );

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(0);
  });
});

describe('uma lista preenchida de participantes', () => {
  const participantes = ['Ana', 'Catarina'];
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });
  test('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaDeParticipantes />
      </RecoilRoot>,
    );

    const items = screen.queryAllByRole('listitem');
    expect(items).toHaveLength(participantes.length);
  });
});
