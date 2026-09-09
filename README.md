# Projeto 4 – Exportação de Relatório com Node.js

## Descrição

Este projeto foi desenvolvido em **Node.js** para praticar a manipulação de arquivos utilizando o módulo nativo **fs**, conforme atividade da FATEC.

O programa realiza a leitura de um arquivo CSV contendo dados de estudantes e gera um arquivo de relatório (`export_relatorio.txt`) com um cabeçalho contendo a data e hora da execução. Caso o relatório já exista, os dados do CSV são adicionados ao final do arquivo.

---

## Objetivo da Atividade

Desenvolver um script que:

* Leia um arquivo `estudantes.csv`.
* Crie um arquivo `export_relatorio.txt` caso ele não exista.
* Adicione um cabeçalho com a data e hora da geração do relatório.
* Caso o relatório já exista, acrescente o conteúdo do CSV ao final do arquivo.
* Execute o programa através do comando personalizado `npm run export`.

---

## Tecnologias Utilizadas

* Node.js
* JavaScript
* Módulo nativo `fs`
* Módulo nativo `path`

---

## Estrutura do Projeto

```text
projeto4_exer_5/
│
├── app.js                  # Arquivo principal da aplicação
├── estudantes.csv          # Arquivo de entrada com os dados dos estudantes
├── export_relatorio.txt    # Arquivo de saída (criado automaticamente)
├── package.json            # Configuração do projeto e scripts npm
└── README.md               # Documentação do projeto
```

---

## Como Executar o Projeto

### 1. Instale o Node.js

Verifique se o Node.js está instalado:

```bash
node -v
npm -v
```

### 2. Execute o projeto

No terminal, dentro da pasta do projeto, utilize o comando:

```bash
npm run export
```

Esse comando executa o arquivo `app.js` definido no `package.json`.

---

## Funcionamento do Programa

1. O programa localiza o arquivo `estudantes.csv`.
2. Lê todo o conteúdo do arquivo CSV.
3. Verifica se `export_relatorio.txt` já existe.
4. Se o arquivo não existir:

   * Cria o relatório.
   * Escreve o cabeçalho com a data e hora.
   * Insere os dados do CSV.
5. Se o arquivo existir:

   * Adiciona os dados do CSV ao final do relatório, preservando o conteúdo anterior.

---

## Exemplo de Saída

### Arquivo `estudantes.csv`

```csv
Nome,Curso
Ana,ADS
Carlos,DSM
Marina,ADS
```

### Arquivo `export_relatorio.txt`

```text
Relatório gerado para FATEC - 09/09/2026 09:30:15

Nome,Curso
Ana,ADS
Carlos,DSM
Marina,ADS
```

---

## Scripts do Projeto

O `package.json` possui um script personalizado para executar a aplicação:

```json
"scripts": {
  "export": "node app.js"
}
```

Com isso, basta utilizar:

```bash
npm run export
```

---

## Conceitos Praticados

Durante o desenvolvimento deste projeto foram utilizados os seguintes conceitos de Node.js:

* Manipulação de arquivos com `fs.readFile()`.
* Criação de arquivos com `fs.writeFile()`.
* Adição de conteúdo em arquivos com `fs.appendFile()`.
* Verificação da existência de arquivos com `fs.access()`.
* Manipulação de caminhos utilizando `path.join()` e `__dirname`.

---

## Autor

**Eduardo Alves**

Projeto desenvolvido como exercício da disciplina de **Node.js – FATEC**.
