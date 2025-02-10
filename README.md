
# Spotify Imersão

Este projeto é uma interface de usuário para um aplicativo de música inspirado no Spotify. Ele permite que os usuários pesquisem artistas e visualizem playlists.

## Estrutura do Projeto

### HTML

O arquivo `index.html` define a estrutura da página web, incluindo a barra lateral, a área de pesquisa, a lista de playlists e os cartões de artistas.

### CSS

Os arquivos CSS são usados para estilizar a página web. Eles incluem:

- `Reset.css`: Redefine os estilos padrão do navegador.
- `vars.css`: Define variáveis CSS para cores e fontes.
- `siderbar-footer.css`: Estiliza a barra lateral e o rodapé.
- `main-content.css`: Estiliza o conteúdo principal da página.
- `media-queries.css`: Define estilos responsivos para diferentes tamanhos de tela.

### JavaScript

O arquivo `script.js` é responsável por buscar os dados dos artistas, filtrar os resultados com base no termo de pesquisa e atualizar a interface do usuário para exibir apenas os artistas correspondentes.

## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Certifique-se de que você tenha um servidor JSON rodando localmente com os dados dos artistas.
3. Abra o arquivo `index.html` no seu navegador.
4. Use a barra de pesquisa para procurar artistas. Apenas os artistas correspondentes ao termo de pesquisa serão exibidos.

## Estrutura do JSON

O JSON deve ter a seguinte estrutura:

```json```
[
  { "name": "Foo Fighters", "urlImg": "./src/assets/images/foo-fighters.jpg" },
  { "name": "Artista 2", "urlImg": "./src/assets/images/artista2.jpg" }
  // Adicione mais objetos conforme necessário
]

## Tecnologias Utilizadas
HTML
CSS
JavaScript
FontAwesome
Contribuição
Sinta-se à vontade para contribuir com este projeto. Você pode abrir uma issue ou enviar um pull request.

## Explicação

- **HTML**: Define a estrutura da página web.
- **CSS**: Estiliza a página web.
- **JavaScript**: Busca dados dos artistas, filtra os resultados e atualiza a interface do usuário.
- **README.md**: Fornece uma visão geral do projeto, instruções de uso, estrutura do JSON, tecnologias utilizadas
