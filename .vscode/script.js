function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/IMG_1551.JPG")
    img.style.objectPosition = "center"
    img.setAttribute(
      "alt",
      "Foto de Clarice Brasil sorrindo, usando blusa preta e céu azul com algumas nuvens de fundo"
    )
  } else {
    img.setAttribute("src", "./assets/imagem-light.jpg")
    img.style.objectPosition = "center top"
    img.setAttribute(
      "alt",
      "Foto de Clarice Brasil com outro cenário, no modo escuro"
    )
  }
}
