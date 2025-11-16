const searchBtn = document.getElementById('searchBtn');
const cepInput = document.getElementById('cepInput');
const resultDiv = document.getElementById('result');
const loader = document.getElementById('loader');
const errorDiv = document.getElementById('error');

searchBtn.addEventListener('click', () => {
    const cep = cepInput.value.trim();

    // Limpar resultados anteriores
    resultDiv.innerHTML = '';
    errorDiv.textContent = '';

    if (!/^\d{8}$/.test(cep)) {
        errorDiv.textContent = 'Digite um CEP válido com 8 números.';
        return;
    }

    loader.classList.remove('hidden');

    fetch(`http://localhost:8080/api/cep/${cep}`)
        .then(async (res) => {
            loader.classList.add('hidden');

            if (res.status === 404) {
                resultDiv.innerHTML = `
                    <div class="text-center p-6">
                        <p class="text-6xl mb-4">😢</p>
                        <h2 class="text-2xl font-bold mb-2">Nada foi encontrado</h2>
                        <p class="text-gray-600 mb-4">Tente outro CEP</p>
                        <button id="backBtn" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Voltar
                        </button>
                    </div>
                `;
                document.getElementById('backBtn').addEventListener('click', () => {
                    resultDiv.innerHTML = '';
                    cepInput.value = '';
                });
                return;
            }

            if (!res.ok) throw new Error('Erro na requisição');

            const data = await res.json();

            resultDiv.innerHTML = `
                <div class="p-4 bg-gray-50 rounded shadow">
                    <p><strong>CEP:</strong> ${data.cep}</p>
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Complemento:</strong> ${data.complemento}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>UF:</strong> ${data.uf}</p>
                    <p><strong>DDD:</strong> ${data.ddd}</p>
                </div>
            `;
        })
        .catch((err) => {
            loader.classList.add('hidden');
            errorDiv.textContent = 'Ocorreu um erro, tente novamente mais tarde.';
            console.error(err);
        });
});
