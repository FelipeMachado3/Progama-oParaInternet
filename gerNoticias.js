// ===============================
// GERADOR DE NOTÍCIAS HTML
// Blog dos Caneludos
// ===============================

const fs = require("fs");

// ===================================
// DADOS DA NOTÍCIA
// ===================================

const noticia = {

    categoria: "Brasileirão",

    titulo: "Liderança em jogo: Flamengo encosta e pressiona o Palmeiras",

    subtitulo:
        "Enquanto o Verdão vence sem convencer, o Mengão faz 2 a 0 no Bahia e entra de vez na disputa",

    autor: "Redação",

    data: "Atualizado hoje",

    imagemPrincipal: "imagens/flaXpal.jpg",

    conteudo1: `
        O Palmeiras fez o dever de casa…
        mas daquele jeitão sofrido:
        1 a 0 magrinho contra o Furacão.

        Enquanto isso, o Flamengo venceu
        o Bahia por 2 a 0 e encostou
        de vez na liderança.
    `,

    imagemSecundaria: "imagens/noticia1.jpg",

    conteudo2: `
        A rivalidade entre Palmeiras e Flamengo
        cresceu absurdamente nos últimos anos.

        Hoje, qualquer confronto entre os dois
        tem clima de decisão.
    `
};

// ===================================
// TEMPLATE HTML
// ===================================

const html = `
<!DOCTYPE html>
<html lang="pt-br">

<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>${noticia.titulo}</title>

  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

  <link rel="preconnect" href="https://fonts.googleapis.com">

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:ital,wght@0,400;0,600;0,700;1,400&family=Barlow+Condensed:wght@700;900&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="style.css">

</head>

<body>

  <!-- TOPO -->
  <div class="top-logo">

    <a href="index.html" class="logo-area">

      <div class="logo-text">

        <span class="top">Blog dos Caneludos</span>

        <span class="sub">Futebol do jeito certo</span>

      </div>

    </a>

  </div>

  <!-- NAVBAR -->
  <header>

    <nav>

      <ul>

        <li>

          <button class="nav-btn" id="menuToggle">☰ Menu</button>

        </li>

        <li class="nav-spacer"></li>

        <li>

          <a href="sobre.html" class="nav-link">Sobre</a>

        </li>

      </ul>

    </nav>

    <div class="nav-dropdown" id="navDropdown">

      <div class="dropdown-col">

        <p class="dropdown-cat">Futebol BR</p>

        <a href="brasileirao.html">Brasileirão</a>
        <a href="cdb.html">Copa do Brasil</a>
        <a href="SerieB.html">Série B</a>
        <a href="Estaduais.html">Estaduais</a>

      </div>

      <div class="dropdown-col">

        <p class="dropdown-cat">Sul-americano</p>

        <a href="liberta.html">Copa Libertadores</a>
        <a href="sula.html">Copa Sul-Americana</a>

      </div>

      <div class="dropdown-col">

        <p class="dropdown-cat">Futebol Mundial</p>

        <a href="uefaCL.html">Champions League</a>
        <a href="uefaEL.html">Europa League</a>
        <a href="PL.html">Premier League</a>
        <a href="Laliga.html">La Liga</a>
        <a href="SeriaA.html">Serie A</a>

      </div>

      <div class="dropdown-col">

        <p class="dropdown-cat">Mercado</p>

        <a href="mercado.html">Transferências</a>

      </div>

    </div>

  </header>

  <!-- CONTEÚDO -->
  <main class="noticia-main">

    <article class="noticia-container">

      <!-- CATEGORIA -->
      <span class="noticia-categoria">
        ${noticia.categoria}
      </span>

      <!-- TITULO -->
      <h1>
        ${noticia.titulo}
      </h1>

      <!-- SUBTITULO -->
      <h2 class="noticia-sub">
        ${noticia.subtitulo}
      </h2>

      <!-- META -->
      <div class="noticia-meta">

        <span>Por ${noticia.autor}</span>

        <span>•</span>

        <span>${noticia.data}</span>

      </div>

      <!-- IMAGEM -->
      <img src="${noticia.imagemPrincipal}" class="noticia-img">

      <!-- TEXTO -->
      <div class="noticia-texto">

        <p>
          ${noticia.conteudo1}
        </p>

        <img src="${noticia.imagemSecundaria}" class="noticia-img">

        <p>
          ${noticia.conteudo2}
        </p>

      </div>

    </article>

    <!-- PUBLICIDADE -->
    <div class="ad-banner">

      <span class="ad-label">Publicidade</span>

      <a href="https://multivix.edu.br/" target="_blank">

        <img src="imagens/multivix1.jpg" alt="Faculdade Multivix">

      </a>

    </div>

  </main>

  <!-- FOOTER -->
  <footer>

    <div class="footer-inner">

      <div>

        <p class="footer-links-label">Links úteis</p>

        <ul class="footer-links">

          <li>
            <a href="https://ge.globo.com/" target="_blank">
              GE Globo
            </a>
          </li>

          <li>
            <a href="https://cazetv.com.br/" target="_blank">
              CazéTV
            </a>
          </li>

        </ul>

      </div>

      <p class="footer-copy">

        &copy; 2026 Blog dos Caneludos.<br>

        Todos os direitos reservados.

      </p>

    </div>

  </footer>

  <!-- MENU -->
  <script>

    const menuToggle = document.getElementById('menuToggle');

    const navDropdown = document.getElementById('navDropdown');

    menuToggle.addEventListener('click', (e) => {

      e.stopPropagation();

      const isOpen = navDropdown.classList.contains('open');

      navDropdown.classList.toggle('open', !isOpen);

      menuToggle.classList.toggle('active', !isOpen);

    });

    document.addEventListener('click', () => {

      navDropdown.classList.remove('open');

      menuToggle.classList.remove('active');

    });

    navDropdown.addEventListener('click', (e) => e.stopPropagation());

  </script>

</body>

</html>
`;

// ===================================
// GERAR ARQUIVO HTML
// ===================================

fs.writeFileSync(
    "flamengo-palmeiras.html",
    html
);

console.log("HTML gerado com sucesso!");