# Automação de Testes Web - Cypress

Projeto de automação E2E utilizando Cypress para o site [automationexercise.com](https://automationexercise.com).

## 🚀 Como executar os testes

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute todos os testes em modo headless (Chrome):
   ```bash
   npm run cy:run:chrome
   ```
   Ou abra o Cypress interativo:
   ```bash
   npm run cy:open
   ```

3. Para rodar em outros browsers:
   ```bash
   npm run cy:run:firefox
   npm run cy:run:edge
   ```

## 📊 Relatórios de Teste

Após a execução, gere o relatório HTML consolidado:
```bash
npm run cy:report
```
O arquivo estará em `cypress/reports/html/index.html`.

No GitHub Actions, baixe o artifact `mochawesome-report-{browser}` e abra o `index.html`.

## 📁 Estrutura principal
- `cypress/e2e/` - Testes automatizados
- `cypress/support/` - Page Objects e comandos customizados
- `cypress/reports/` - Relatórios Mochawesome (não versionado)

## 🛠️ Scripts úteis
- `npm run cy:run:chrome` - Executa testes no Chrome
- `npm run cy:run:firefox` - Executa testes no Firefox
- `npm run cy:run:edge` - Executa testes no Edge
- `npm run cy:report` - Gera relatório HTML consolidado

