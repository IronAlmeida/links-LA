function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar tag imagem
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light mode
    img.setAttribute("src", "./assets/perfil-light.png")
    img.setAttribute(
      "alt",
      "Foto de Iron Almeida sorrindo com fundo cinza e oculos escuro."
    )
  } else {
    //se tiver dark mode, mante imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Iron Almeida sorrindo, usando oculos, de barba e fundo cinza."
    )
  }
}

let data = new Date()
const anoAtual = data.getFullYear()

document.getElementById("footer").innerHTML = `Iron Almeida - Desenvolvedor Web Full Stack | ${anoAtual}`