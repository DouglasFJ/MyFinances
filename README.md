# INSIGHT IDEIA DE APP PARA ORGANIZAÇÃO FINANCEIRA

> NOME: MyFinances <br>
> SITE BANCO DE DADOS: [planet scale](https://planetscale.com/) <br>
> SITE HOSPEDAR BACKEND: [railway](https://railway.app/)

- Acessar planilha no onedrive do cliente (Microsoft Graph)
- Cadastrar entradas financeiras mensal
- Cadastrar saídas fixas financeiras mensais
- Cadastrar Gastos mensais que não são fixos
- Cadastrar Gastos mensais compostos
- Cadastrar cartões de crédito (apenas o valor e a data de vencimento da fatura) - tabela separada para cartões de crédito
- Cadastrar a quantidade de meses que conterá na planilha
- Cadastrar gastos anteriores (no inicio do app, ter opção de alterar dps)

## FLUXO DO APP

1. Futura Tela de apresentação (landing page)
2. Tela de Login (conta Microsoft - conta do app no firebase)
3. Tela principal (Terá uma pré visualização da Tabela do Excel, e tbm as funcionalidades descritas acima em volta)

## Telas:

- Tela principal / pré-visualização da tabela do Excel / funcionalidades do sistema em volta da tela
- Tela de cadastrar entradas
- Tela de Saídas fixas mensais
- Tela de gastos mensais não fixos (outra tabela excel talvez)
- Tela de Cadastro de cartões de crédito (Cada cartão de crédito é uma tabela diferente do Excel)


# MyFinances App - DATABASE

## Entidades:

1. Usuario
2. Cartões de crédito
3. Gastos fixos
4. Gastos mensais não fixos
5. Tabela Relacional para gastos fixos compostos
5. Entrada de capital
6. Meses de vizualização na planilha
