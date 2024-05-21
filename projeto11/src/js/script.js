function mudarFiltro() {
    var imagem = document.getElementById("imagem");
    var filtros = ["grayscale(100%)", "brightness(150%)", "contrast(150%)", "sepia(100%)", "hue-rotate(90deg)"];
    var indice = Math.floor(Math.random() * filtros.length);
    imagem.style.filter = filtros[indice];
  }
  
  // Chame a função mudarFiltro() quando a imagem for clicada
  document.getElementById("imagem").addEventListener("click", mudarFiltro);
  