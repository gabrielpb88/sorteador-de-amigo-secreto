import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';
import { useState } from 'react';
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio';

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
    <section>
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
        <button>Sortear!</button>
      </form>
      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}
    </section>
  );
};
export default Sorteio;
