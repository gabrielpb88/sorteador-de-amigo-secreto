import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes';

const Sorteio = () => {
  const participantes: string[] = useListaDeParticipantes();
  return (
    <select>
      {participantes.map((participante) => (
        <option key={participante} value={participante}>
          {participante}
        </option>
      ))}
    </select>
  );
};
export default Sorteio;
