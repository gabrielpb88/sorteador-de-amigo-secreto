import { useRecoilValue, useSetRecoilState } from 'recoil';
import { erroState, listaParticipantesState } from '../atom';

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState);
  const setErro = useSetRecoilState(erroState);
  const participantes = useRecoilValue(listaParticipantesState);
  return (nomeDoParticipante: string) => {
    if (participantes.includes(nomeDoParticipante)) {
      setErro('Nomes duplicados não são permitidos.');
      setTimeout(() => {
        setErro('');
      }, 5000);
    }
    return setLista((prevState) => [...prevState, nomeDoParticipante]);
  };
};
