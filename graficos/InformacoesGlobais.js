const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const totaltrabalhadoresmundo = (dados.total_trabalhadores_mundo / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const totalpessoasquenecessitamtransporteparatrabalho = (dados.total_pessoas_que_necessitam_transporte_para_trabalho / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((totaltrabalhadoresmundo / pessoasNoMundo ) * 100).toFixed(2)
    

    //console.log(dados)
    
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Com <span>${pessoasNoMundo}</span>  bilhões de pessoas no mundo, <span>${totaltrabalhadoresmundo}</span> bilhões são trabalhadores e  <span>${totalpessoasquenecessitamtransporteparatrabalho}</span> bilhões estão empregadas e passam em média. Isso representa 38% e 67% da força de trabalho, respectivamente, com um tempo médio de deslocamento de  <span>${dados.tempo_medio_deslocamento_para_trabalho}</span> minutos. Temos, portanto, mais da metade da população mundial que não exerce trabalhos com vínculos empregatícios legais. O que pode significar que há longevidade e desse modo, muitas pessoas aposentadas. Porém, também pode significar muitos postos de trabalho chamados informais. `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();



