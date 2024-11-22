const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json';

async function quantidadeUsuario() {
    try {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Erro ao buscar os dados: ${res.statusText}`);
        }

        const dados = await res.json();
        const nomeDasRedes = Object.keys(dados);
        const quantidadeUsuarios = Object.values(dados);

        // Função para gerar uma cor aleatória
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Gerar cores aleatórias para cada barra
        const colors = nomeDasRedes.map(() => getRandomColor());
        
        const data = [
            {
                x: nomeDasRedes,
                y: quantidadeUsuarios,
                type: 'bar',
                marker: {
                    color: colors
                }
            }
        ];
        
        const grafico = document.createElement('div');
        grafico.className = 'grafico';
        document.getElementById('graficos-container').appendChild(grafico);
        
        Plotly.newPlot(grafico, data);
        
    } catch (error) {
        console.error('Erro:', error);
    }
}

quantidadeUsuario();

