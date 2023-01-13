import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';
import { useNavigate } from 'react-router-dom';

const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navigate = useNavigate();

  return (
    <footer>
      <button
        disabled={participantes.length < 3}
        onClick={() => {
          navigate('/sorteio');
        }}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};
export default Rodape;
