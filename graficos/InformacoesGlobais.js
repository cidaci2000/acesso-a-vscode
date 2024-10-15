const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'


async function vizualizarInformacoesGlobais() {

    const respota = await fetch(url)

    const dados = await respota.json()

    console.log(dados)

}

vizualizarInformacoesGlobais()