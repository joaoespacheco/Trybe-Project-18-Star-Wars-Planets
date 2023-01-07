# StarWars Planet 🛸

## 📄 Sobre:

Projeto desenvolvido durante o módulo de front-end do curso de desenvolvimento web da [Trybe](https://www.betrybe.com/).

Neste projeto foi desenvolvida uma aplicação contendo uma lista de informações sobre os planetas do universo de StarWars.

Dentro da aplicação o usuário poderá:
> * Filtrar os planetas pelo nome ou características
> * Ordenar a lista de forma descendente ou ascendente

Todos os dados foram obtidos através da [The Star Wars API](https://swapi.dev/).

A aplicação também conta com o uso de <strong>Context API e Hooks</strong> para o controle e gerenciamento dos estados globais e uma cobertura de testes superior a 90%.

</br>
<details>
<summary><strong>Desempenho</strong></summary>
Aprovado com 100% de desempenho em todos os requisitos

![image](https://user-images.githubusercontent.com/99846604/211173771-01c348c5-5d70-46f6-8c72-bb96cf250283.png)

</details>

<details>
<summary><strong>Requisitos</strong></summary>
</br>
<strong>Requisitos Obrigatórios:</strong> 
</br>
1. Faça uma requisição para o endpoint `/planets` da API de Star Wars e preencha uma tabela com os dados retornados, com exceção dos dados da coluna `residents` </br>
2. Crie um filtro de texto para a tabela </br>
3. Crie um filtro para valores numéricos </br>
4. Implemente múltiplos filtros numéricos </br>
5. Desenvolva testes para atingir 30% de cobertura total da aplicação </br>
6. Não utilize filtros repetidos </br>
7. Apague um filtro de valor numérico ao clicar no ícone `X` de um dos filtros e apague todas filtragens numéricas simultaneamente ao clicar em outro botão de `Remover todas filtragens` </br>
8. Desenvolva testes para atingir 60% de cobertura total da aplicação </br>
9. Ordene as colunas de forma ascendente ou descendente </br>
10. Desenvolva testes para atingir 90% de cobertura total da aplicação </br>
</details>

<details>
<summary><strong>Visualizar projeto</strong></summary>

### Tela principal:

![starwars-planets-layout](https://user-images.githubusercontent.com/99846604/211174080-54fa43dd-4fac-4af6-b394-06a83e670f3c.gif)

</details>
</br>

## ⚙️ Execução

Faça o clone deste repositório com o seguinte comando:

        git clone git@github.com:joaoespacheco/Trybe-Project-18-Star-Wars-Planets.git

Para exercutar o projeto utilize o comando abaixo para instalar as dependências:

        npm install

Inicie a aplicação com o comando abaixo:

        npm start
        
Para exeutar os testes deve-se utilizar o seguinte comando:

        npm test

Caso queira executar um teste específico, rode o comando abaixo:

        npm test <nome-do-arquivo>

Para executar e verificar a cobertura de testes, rode o comando abaixo:

        npm run test-coverage

</br>

## 🤹🏽 Habilidades Desenvolvidas:
* Desenvolver uma aplicação react utilizando <strong>Context API</strong> para gerenciar o estado global
  * Utilizar o React Hook useState;
  * Utilizar o React Hook useContext;
  * Utilizar o React Hook useEffect;
  * Criar React Hooks customizados.
* Fazer requisições e consumir dados vindos de uma API
* Realizar testes unitários utilizando <strong>React Testing Library</strong>
</br>

## 🧰 Ferramentas:
* HTML
* CSS
  * SASS
* JavaScript
* React
  * React Context API
  * React Testing Library
</br>

## 📝 Desenvolvido por:
* [João Emanuel Soares Pacheco](https://github.com/joaoespacheco)

