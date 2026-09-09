const fs = require("fs");
const path = require("path");

const arquivo = path.join(__dirname, "export_relatorio.txt");
const arquivoCSV = path.join(__dirname, "estudantes.csv");

const dataHora = new Date().toLocaleString("pt-BR");
const cabecalho = `Relatorio gerado para FATEC - ${dataHora}\n\n`;

// Lê o CSV primeiro
fs.readFile(arquivoCSV, "utf8", (erro, data) => {
    if (erro) {
        console.log("Erro ao ler o CSV:", erro);
        return;
    }

    // Depois verifica se o relatório existe
    fs.access(arquivo, fs.constants.F_OK, (erro) => {

        if (erro) {
            // Arquivo não existe: cria com cabeçalho + conteúdo do CSV
            fs.writeFile(arquivo, cabecalho + data, (erro) => {
                if (erro) {
                    console.log("Erro ao criar arquivo.");
                    return;
                }

                console.log("Relatório criado com sucesso!");
            });

        } else {
            // Arquivo existe: adiciona o conteúdo do CSV no final
            fs.appendFile(arquivo, "\n" + data, (erro) => {
                if (erro) {
                    console.log("Erro ao adicionar CSV.");
                    return;
                }

                console.log("CSV adicionado ao relatório com sucesso!");
            });
        }

    });
});