const campoPesquisa = document.getElementById("pesquisa");
const resultadoPesquisa = document.getElementById("resultado-pesquisa");

const livros = [
  {
    titulo: "O Pequeno Príncipe",
    descricao: "Disponível para troca ou empréstimo",
    imagem: "img/pequeno-principe.jpg",
    link: "html/livro-pequeno-principe.html"
  },

  {
    titulo: "Dom Casmurro",
    descricao: "Disponível para empréstimo",
    imagem: "img/dom-casmurro.jpg",
    link: "html/livro-dom-casmurro.html"
  }
];

if (campoPesquisa && resultadoPesquisa) {
  campoPesquisa.addEventListener("input", function () {
    const textoDigitado = campoPesquisa.value.toLowerCase().trim();

    resultadoPesquisa.innerHTML = "";

    if (textoDigitado === "") {
      resultadoPesquisa.style.display = "none";
      return;
    }

    const livrosFiltrados = livros.filter(function (livro) {
      return livro.titulo.toLowerCase().includes(textoDigitado);
    });

    if (livrosFiltrados.length === 0) {
      resultadoPesquisa.innerHTML = "<p>Nenhum livro encontrado.</p>";
      resultadoPesquisa.style.display = "block";
      return;
    }

    livrosFiltrados.forEach(function (livro) {
  resultadoPesquisa.innerHTML += `
    <a href="${livro.link}" class="item-pesquisa">

      <img
        src="${livro.imagem}"
        alt="${livro.titulo}">

      <div class="texto-pesquisa">
        <strong>${livro.titulo}</strong>
        <span>${livro.descricao}</span>
      </div>

    </a>
  `;
});

    resultadoPesquisa.style.display = "block";
  });
}

const banners = [
  {
    tag: "BiblioShare",
    titulo: "Compartilhe livros, espalhe conhecimento",
    descricao:
      "Uma plataforma para incentivar a troca e o empréstimo de livros, promovendo educação, sustentabilidade e acesso à leitura.",
    imagens: `
      <img
        src="img/logo-biblioshare.png"
        alt="Logo BiblioShare"
        class="banner-logo">
    `
  },
  {
    tag: "Objetivos de Desenvolvimento Sustentável",
    titulo: "Apoiamos educação, comunidades sustentáveis e consumo responsável",
    descricao:
      "O BiblioShare está alinhado aos ODS 4, 11 e 12, incentivando o acesso ao conhecimento, a colaboração entre pessoas e a reutilização de livros.",
    imagens: `
      <a href="https://brasil.un.org/pt-br/sdgs/4" target="_blank">
        <img src="img/ods4.png" alt="ODS 4 - Educação de Qualidade">
      </a>

      <a href="https://brasil.un.org/pt-br/sdgs/11" target="_blank">
        <img src="img/ods11.png" alt="ODS 11 - Cidades e Comunidades Sustentáveis">
      </a>

      <a href="https://brasil.un.org/pt-br/sdgs/12" target="_blank">
        <img src="img/ods12.png" alt="ODS 12 - Consumo Responsável">
      </a>
    `
  },
  {
  tag: "Sobre o projeto",
  titulo: "Uma rede de leitores para compartilhar livros",
  descricao:
    "A proposta do BiblioShare é aproximar pessoas que desejam trocar ou emprestar livros, tornando a leitura mais acessível e fortalecendo a comunidade.",
  imagens: `
    <img
      src="img/biblioteca.jpg"
      alt="Biblioteca compartilhada"
      class="banner-biblioteca">
  `
}
];

let bannerAtual = 0;

const bannerTag = document.getElementById("banner-tag");
const bannerTitulo = document.getElementById("banner-titulo");
const bannerDescricao = document.getElementById("banner-descricao");
const bannerImagens = document.getElementById("banner-imagens");

const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");

function mostrarBanner(indice) {
  bannerTag.textContent = banners[indice].tag;
  bannerTitulo.textContent = banners[indice].titulo;
  bannerDescricao.textContent = banners[indice].descricao;
  bannerImagens.innerHTML = banners[indice].imagens;
}

if (btnAvancar && btnVoltar) {
  btnAvancar.addEventListener("click", function () {
    bannerAtual++;

    if (bannerAtual >= banners.length) {
      bannerAtual = 0;
    }

    mostrarBanner(bannerAtual);
  });

  btnVoltar.addEventListener("click", function () {
    bannerAtual--;

    if (bannerAtual < 0) {
      bannerAtual = banners.length - 1;
    }

    mostrarBanner(bannerAtual);
  });

  setInterval(function () {
    bannerAtual++;

    if (bannerAtual >= banners.length) {
      bannerAtual = 0;
    }

    mostrarBanner(bannerAtual);
  }, 5000);
}

const botoesSolicitar = document.querySelectorAll(".btn-solicitar");

botoesSolicitar.forEach(function (botao) {
  botao.addEventListener("click", function (event) {
    event.preventDefault();

    alert("Solicitação realizada com sucesso!");
  });
});