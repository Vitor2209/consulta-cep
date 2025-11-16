📦 Consulta CEP — Frontend

Interface simples e responsiva feita com HTML + CSS + JavaScript para consultar informações de CEP utilizando sua API local.

🚀 Funcionalidades

🔍 Campo para buscar CEP

⚙️ Validação para garantir que o CEP possui 8 dígitos

🔄 Exibição de loader durante a busca

🗂️ Card organizado com dados do endereço retornado pela API

⚠️ Tratamento de erros (CEP inválido, não encontrado ou falha na API)

📱 Layout responsivo e moderno com CSS puro

🧩 Tecnologias utilizadas

HTML5

CSS3

JavaScript Vanilla (Fetch API)

API Local em Spring Boot

Live Server (VS Code) para rodar no navegador (opcional)

🗂️ Estrutura do projeto
/consulta-cep-frontend
│── index.html
│── style.css
└── script.js

🖥️ Como executar o projeto
1️⃣ Certifique-se de que sua API está rodando

Backend Spring Boot deve estar ativo em:

http://localhost:8080/api/cep/{cep}


Exemplo:

http://localhost:8080/api/cep/01001000

2️⃣ Rode o frontend
Opção 1 — Via Live Server (recomendado)

No VS Code:

Clique com o botão direito no index.html → Open with Live Server

A aplicação abrirá em:

http://127.0.0.1:5500/

Opção 2 — Abrir diretamente o arquivo

Basta clicar em index.html, porém algumas versões do Chrome bloqueiam requisições fetch() de file://.
Se isso acontecer, use o Live Server.

🧪 Exemplo de uso

Digite um CEP válido (somente números):

21250560


Clique em Buscar

Aguarde o loader aparecer e os dados retornarem.

Se o CEP não existir, será exibida uma mensagem de erro.

🧱 Endpoints utilizados
GET — Buscar CEP
GET http://localhost:8080/api/cep/{cep}

Exemplo de resposta JSON
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308"
}

❗ Possíveis erros
Situação	Motivo	Solução
"Ocorreu um erro. Tente novamente mais tarde."	API offline ou porta errada	Verifique se o backend está rodando
Nenhum dado aparece	CEP não encontrado	Teste outro CEP
CORS error	Browser bloqueando requisição local	Rode com Live Server
📌 Melhorias futuras

Criar versão em React + TailwindCSS

Adicionar histórico de buscas

Guardar último CEP buscado no localStorage

Melhorar animações e transições

👨‍💻 Autor

Vitor Melo
