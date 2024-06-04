var perguntas_quiz = [
    {
        pergunta: "Qual é o nome da filha de Joel?",
        alternativas: ["Ellie", "Sarah", "Tess", "Maria"],
        resposta: 1
    },
    {
        pergunta: "Quem é o líder do grupo dos Vaga-lumes?",
        alternativas: ["Marlene", "Tommy", "David", "Henry"],
        resposta: 0
    },
    {
        pergunta: "Em que cidade Joel e Ellie encontram Bill?",
        alternativas: ["Pittsburgh", "Boston", "Jackson", "Lincoln"],
        resposta: 3
    },
    {
        pergunta: "Qual é o nome da amiga de Ellie que aparece em 'Left Behind'?",
        alternativas: ["Marlene", "Tess", "Riley", "Dina"],
        resposta: 2
    },
    {
        pergunta: "Qual é o nome do irmão de Joel?",
        alternativas: ["David", "Bill", "Henry", "Tommy"],
        resposta: 3
    }
];

var pergunta_atual = 0;
var pontos = 0;

function iniciar() {

    iniciar_quiz.style.display = "none";
    game.style.display = "flex";

    div_pergunta.innerHTML = `${perguntas_quiz[pergunta_atual].pergunta}`;
    resposta1.innerHTML = `${perguntas_quiz[pergunta_atual].alternativas[0]}`;
    resposta2.innerHTML = `${perguntas_quiz[pergunta_atual].alternativas[1]}`;
    resposta3.innerHTML = `${perguntas_quiz[pergunta_atual].alternativas[2]}`;
    resposta4.innerHTML = `${perguntas_quiz[pergunta_atual].alternativas[3]}`;
}

function check(selected) {

    var correta = perguntas_quiz[pergunta_atual].resposta;
    var selectedElement = document.getElementById(`resposta${selected + 1}`);
    var corretaElement = document.getElementById(`resposta${correta + 1}`);

    if (selected === correta) {
        selectedElement.classList.add('correto');
        pontos++;
    } else {
        selectedElement.classList.add('errado');
        corretaElement.classList.add('correto');
    }

    setTimeout(() => {
        pergunta_atual++;

        if (pergunta_atual < perguntas_quiz.length) {
            selectedElement.classList.remove('correto');
            selectedElement.classList.remove('errado');
            corretaElement.classList.remove('correto');
            iniciar();
        } else {
            pergunta_atual = 0;

            iniciar_quiz.style.display = "flex";
            game.style.display = "none";
            titulo.style.display = "none";
            btnInicio.style.display = "none";


            if (pontos > (perguntas_quiz.length / 2)) {
                div_pontos.innerHTML = `PARABÉNS! VOCÊ ACERTOU ${pontos} de ${perguntas_quiz.length}`
            } else {
                div_pontos.innerHTML = `VOCÊ ACERTOU APENAS ${pontos} de ${perguntas_quiz.length}, TENTE NOVAMENTE!`;
            }
            selectedElement.classList.remove('correto');
            selectedElement.classList.remove('errado');
            corretaElement.classList.remove('correto');
            pontos = 0
        }
    }, 400)

}

iniciar();