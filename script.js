function trocarImagem(filename, nameAnimal) {
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename)

    document.querySelector('.imagem').setAttribute('data-animal',nameAnimal)

}

function pegarAnimal(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal')

    alert("o animal é um: " + animal)
}