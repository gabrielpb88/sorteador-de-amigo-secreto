import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionar = useAdicionarParticipante();
  const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    adicionar(nome);
    setNome('');
    inputRef.current?.focus();
  };
  return (
    <form
      onSubmit={(evento) => {
        adicionarParticipante(evento);
      }}>
      <input
        type="text"
        placeholder="Insira os nomes dos participantes"
        onChange={(evento) => {
          setNome(evento.target.value);
        }}
        value={nome}
        ref={inputRef}
      />
      <button disabled={!nome}>Adicionar</button>
    </form>
  );
};

export default Formulario;
