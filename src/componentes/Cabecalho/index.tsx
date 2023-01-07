import s from './Formulario.module.scss';
import participante from 'assets/imagens/participante.png';
const Cabecalho = () => {
  return (
    <header className={s.cabecalho}>
      <div
        className={s['imagem-logo']}
        role="img"
        aria-label="Logo do Sorteador"></div>
      <img
        className={s.participante}
        src={participante}
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Cabecalho;
