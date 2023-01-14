import shuffle from 'just-shuffle';

export const realizarSorteio = (participantes: string[]) => {
  const embaralhado = shuffle(participantes);
  const resultado = new Map<string, string>();

  for (let i = 0; i < embaralhado.length; i++) {
    const amigoSorteado = i === embaralhado.length - 1 ? 0 : i + 1;
    resultado.set(embaralhado[i], embaralhado[amigoSorteado]);
  }
  return resultado;
};
