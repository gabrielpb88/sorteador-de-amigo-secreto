import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';
import { useNavigate } from 'react-router-dom';
import sacolas from 'assets/imagens/sacolas.png';
import './Rodape.css';

const Rodape = () => {
  const participantes = useListaDeParticipantes();
  const navigate = useNavigate();
  const iniciar = () => {
    navigate('/sorteio');
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participantes.length < 3}
        onClick={iniciar}>
        Iniciar brincadeira
      </button>
      <img src={sacolas} alt="Sacolas de compras" />
    </footer>
  );
};
export default Rodape;
