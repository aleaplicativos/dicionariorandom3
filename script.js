async function getPalavraAleatoria() {
  const response = await fetch('https://api.dicionario-aberto.net/random');
  const data = await response.json();

  return {
    nome: data.word,
    significados: data.meanings.map((m) => m.def),
  };
}

function mostrarPalavra(palavra) {
  const container = document.getElementById('palavra-container');

  container.innerHTML = `
    <h2>${palavra.nome}</h2>
    <ul>
      ${palavra.significados.map((s) => `<li>${s}</li>`).join('')}
    </ul>
  `;
}

const btnBuscar = document.getElementById('btn-buscar');
btnBuscar.addEventListener('click', async () => {
  try {
    const palavra = await getPalavraAleatoria();
    mostrarPalavra(palavra);
  } catch (error) {
    alert('Erro ao buscar palavra aleatória.');
    console.error(error);
  }
});
