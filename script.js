fetch('dados.json')
    .then(response => response.json())
    .then(hqs => {
        const estante = document.getElementById('estante');
        hqs.forEach(hq => {
            estante.innerHTML += `
                <div class="hq-card">
                    <img src="${hq.capa}" class="capa">
                    <h3>${hq.titulo}</h3>
                    <div class="info">
                        <p><strong>Resumo:</strong> ${hq.resumo}</p>
                        <p><strong>Personagens:</strong> ${hq.personagens}</p>
                    </div>
                    <a href="${hq.link}" target="_blank" class="botao-ler">LER AGORA</a>
                </div>
            `;
        });
    });