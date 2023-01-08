import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from '../state/hooks/useMensagemDeErro';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const adicionar = useAdicionarParticipante();
  const mensagemDeErro = useMensagemDeErro();
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
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  );
};

export default Formulario;
