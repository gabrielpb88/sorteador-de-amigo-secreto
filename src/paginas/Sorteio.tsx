import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';
import { useState } from 'react';
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';
import './Sorteio.css';
import Card from '../componentes/Card';
import aviao from 'assets/imagens/aviao.png';

const Sorteio = () => {
  const participantes: string[] = useListaDeParticipantes();
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };

  return (
    <Card>
      <section className="sorteio">
        <form onSubmit={sortear}>
          <select
            required
            placeholder="Selecione o seu nome"
            onChange={(evento) => {
              setParticipanteDaVez(evento.target.value);
            }}>
            {participantes.map((participante) => (
              <option key={participante} value={participante}>
                {participante}
              </option>
            ))}
          </select>
          <button className="botao-sortear">Sortear!</button>
        </form>
        {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
        <footer className="sorteio">
          <img
            src={aviao}
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};
export default Sorteio;
