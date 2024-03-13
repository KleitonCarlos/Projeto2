function toggleMode () {
 const html = document.documentElement
  //if ( html.classList.contains('ligth')) {
   //   html.classList.remove('ligth')

 // }else{
    //  html.classList.add('ligth')//
  
  html.classList.toggle ('light')

  const img = document.querySelector(" #profile img"  )

  if(html.classList.contains('light')){
    img.setAttribute("src","./assets/avatar-light.png")
  } else{
    img.setAttribute("src","./assets/avatar.png")

  }
  //pegar a tag img
  //substituir img
  //se tiver light mode, adicionar a imagem light
  //se tiver sem light mode, manter a imagem normal
}