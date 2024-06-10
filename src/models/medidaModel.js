var database = require("../database/config");

function buscarUltimasMedidas(fkUsuario) {
    var instrucaoSql = `SELECT 
    acertos FROM pontuacao WHERE fkUsuario = ${fkUsuario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ultimaRodada(fkUsuario){
   
    var instrucaoSql = `
    SELECT dtHora,DATE_FORMAT(dtHora, '%d/%m/%y') AS ultima_rodada FROM pontuacao WHERE fkUsuario = ${fkUsuario} ORDER BY dtHora DESC
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function ultimaPontuacao(fkUsuario){
   
    var instrucaoSql = `
    SELECT acertos AS UltimaPontuacao 
    FROM pontuacao 
    WHERE dtHora <= CURRENT_TIMESTAMP 
    AND fkUsuario = ${fkUsuario}
    ORDER BY dtHora DESC 
    LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function medianota(fkUsuario){
    var instrucaoSql = `
    SELECT ROUND(AVG(acertos), 2) AS mediaPontuacao
FROM pontuacao WHERE fkUsuario = ${fkUsuario}
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function mediageral() {
    
    var instrucaoSql = `
    SELECT SUM(acertos) AS AcertosGerais FROM pontuacao;
    `
    return database.executar(instrucaoSql);
}

function mediageralGraph() {
    var instrucaoSql = `
        SELECT usuario.nome AS NomeUsuario, 
        pontuacao.acertos AS AcertosTotal
        FROM usuario 
        INNER JOIN pontuacao ON usuario.id = pontuacao.fkUsuario
        INNER JOIN 
        (SELECT fkUsuario, MAX(dtHora) AS UltimaTentativa
        FROM pontuacao
        GROUP BY fkUsuario) AS ultima_tentativa 
            ON pontuacao.fkUsuario = ultima_tentativa.fkUsuario 
            AND pontuacao.dtHora = ultima_tentativa.UltimaTentativa;  
    `;
    return database.executar(instrucaoSql);
}

function buscarPersonagem() {
    
    var instrucaoSql = `
    SELECT COUNT(usuario.id) AS NumeroUsuarios
    FROM personagem
    LEFT JOIN usuario ON personagem.idPersonagem = usuario.fkPersonagem
    GROUP BY personagem.idPersonagem, personagem.nome;
    `
    console.log("Executando album")
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    ultimaRodada,
    ultimaPontuacao,
    medianota,
    mediageral,
    buscarPersonagem,
    mediageralGraph
}
