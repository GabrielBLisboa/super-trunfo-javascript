const diretores = document.querySelectorAll(".diretor");

    
diretores.forEach((diretor) => {
    diretor.addEventListener("mouseenter", () => {
        removerSelecaoDodiretor();

        diretor.classList.add('selecionado');
        
        const imagemdiretorGrande = document.querySelector('.diretor-grande');
        const iddiretor = diretor.attributes.id.value;
        if (iddiretor == "indisponivel") {
            imagemdiretorGrande.src = "src/imagens/nao-disponivel.jpg";
        } else {
            imagemdiretorGrande.src = `src/imagens/${iddiretor}.jpg`;
        }
        const nomediretor = document.getElementById('nome-diretor');
        nomediretor.innerText = diretor.getAttribute('data-name');
       
        // diretor.addEventListener("click", () => { 
        //     if (iddiretor == "tarantino") {
        //         document = "src/imagens/nao-disponivel.jpg";
        //     } else {
        //         imagemdiretorGrande.src = `src/imagens/${iddiretor}.jpg`;
        //     }
        // })
    }) 
})

function removerSelecaoDodiretor() {
    const diretorSelecionado = document.querySelector('.selecionado');
    diretorSelecionado.classList.remove('selecionado');
}