fetch('dados.json')
    .then(response => response.json())
    .then(hqs => {
        const estante = document.getElementById('estante');
        hqs.forEach(hq => {
            estante.innerHTML += `
                <div class="hq-card">
                    <img src="${hq.capa}" class="capa" onerror="this.src='https://via.placeholder.com/250x350?text=Capa+Indisponivel'">
                    <h3>${hq.titulo}</h3>
                    
                    <div class="sessao-info">
                        <details>
                            <summary>📖 Ver Resumo</summary>
                            <p>${hq.resumo}</p>
                        </details>
                        
                        <details>
                            <summary>💭 Minhas Notas</summary>
                            <p><strong>Personagens:</strong> ${hq.personagens}</p>
                            <p class="nota-pessoal">${hq.meu_resumo}</p>
                        </details>
                    </div>

                    <a href="${hq.link}" target="_blank" class="botao-ler">LER AGORA</a>
                </div>
            `;
        });
    });