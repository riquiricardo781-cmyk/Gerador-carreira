function gerarCarreira() {

    const desafios = [
        "🚨Desafio:A cada temporada tem que vender pelo menos 5 jogadores",
        "🚨Desafio: Tem que  vender seu melhor jogador a cada 2 derrotas",
        "🚨Desafio: a cada 3 gols tomado  tem que tirar seu melhor defensor(inclue  goleiros) ",
        "🚨Desafio: Não pode comprar nenhum jogador(se quiser novos jogadores só pode pegar da base)",
        "🚨Desafio: seu time se baseia  apenas em um jogador escolha o  jogador ele vai precisar ser líder de gols e assistencias",
        "🚨Desafio: Só  poderá contratar jogadores da mesma nacionalidade do seu time",
        "🚨Desafio: Só poderá contratar jogadores da mesma nacionalidade do seu jogador com maior over",
        "🚨Desafio: A cada temporada tem que vender todos  os  jogadores e contratar novos jogadores",
        "🚨Desafio: Ganhar uma competição sem tomar 1 gol",
        "🚨Desafio: Não poderá  tomar amarelo em nenhum jogo",
        "🚨Desafio: Você será um treinador agressivo tem que tomar pelo menos 3 amarelos por jogo",
        "🚨Desafio: Ser o melhor ataque de todas as competições disputadas",
        "🚨Desafio: conseguir ser a melhor defesa de todas as competições disputadas"
    ];
    const objetivos = [
        "🎯Objetivo:Inovar e ganhar uma triplíce coroa  usando  o  tiki-taka",
        "🎯Objetivo: ganhar duas triplíce coroa seguida",
        "🎯Objetivo: Ganhar todos os título nacionais",
        "🎯Objetivo: fazer um domínio total na liga",
        "🎯Objetivo: Ganhar a Champions League com o prazo de 5 temporadas",
        "🎯Objetivo: Ser o melhor ataque  de todas as competições disputadas",
        "🎯Objetivo: Bater um recorde de 102 pontos na liga",
        "🎯Objetivo:  Ganhar uma  Champions League  com o gengepressing como principal  tática",
        "Objetivo: Ganhar 4 títulos em umma  temporada apenas"
    ];

    const formacoes = [
        "📋4-4-2",
        "📋4-3-3",
        "📋4-2-5",
        "📋3-5-2",
        "📋4-2-3-1",
        "📋5-3-2",
        "📋2-4-4",
        "📋2-5-3",
        "📋3-1-5-1",
        "📋4-5-1",
        "📋3-4-3"
    ];

    const times = [
        "⚽Chelsea", "⚽Milan", "⚽Barcelona", "⚽Juventus", "⚽Real Madrid",
        "⚽Borussia Dortmund", "⚽Newcastle", "⚽Arsenal", "⚽Internazionale",
        "⚽Napoli", "⚽Liverpool", "⚽Bayern de Munique", "⚽Manchester United",
        "⚽Manchester City", "⚽PSG", "⚽Atlético de Madrid", "⚽Benfica", 
        "⚽Porto", "⚽Olympique de Marseille"
    ];
    const desafio = desafios[Math.floor(Math.random() * desafios.length)];
    const objetivo = objetivos[Math.floor(Math.random() * objetivos.length)];
    const formacao = formacoes[Math.floor(Math.random() * formacoes.length)];
    const time = times[Math.floor(Math.random() * times.length)];

    document.getElementById("resultado").innerHTML = `
        <h2>${time}</h2>
        <hr>
        <h2> ${objetivo}</h2>
        <hr>
        <h2> ${desafio}<h2>
        <hr>
        <h3> ${formacao}</h3>
        
    `;
}
function gerarCarreira1() {

    const desafios1 = [
        "🚨Desafio:A cada temporada tem que vender pelo menos 5 jogadores",
        "🚨Desafio: Tem que  vender seu melhor jogador a cada 2 derrotas",
        "🚨Desafio: a cada 3 gols tomado  tem que tirar seu melhor defensor(inclue  goleiros) ",
        "🚨Desafio: Não pode comprar nenhum jogador(se quiser novos jogadores só pode pegar da base)",
        "🚨Desafio: seu time se baseia  apenas em um jogador escolha o  jogador ele vai precisar ser líder de gols e assistencias",
        "🚨Desafio: Só  poderá contratar jogadores da mesma nacionalidade do seu time",
        "🚨Desafio: Só poderá contratar jogadores da mesma nacionalidade do seu jogador com maior over",
        "🚨Desafio: A cada temporada tem que vender todos  os  jogadores e contratar novos jogadores",
        "🚨Desafio: Ganhar uma competição sem tomar 1 gol",
        "🚨Desafio: Não poderá  tomar amarelo em nenhum jogo",
        "🚨Desafio: Você será um treinador agressivo tem que tomar pelo menos 3 amarelos por jogo",
        "🚨Desafio: Ser o melhor ataque de todas as competições disputadas",
        "🚨Desafio: conseguir ser a melhor defesa de todas as competições disputadas"
    ];
    const objetivos1 = [
        "🎯Objetivo: ganhar uma  champions league como  tática central utilizando o tiki-taka",
        "🎯Objetivo: ganhar a sua liga 5 vezes",
        "🎯Objetivo: ganhar copa, super copa  e liga 2 vezes",
        "🎯Objetivo: Ganhar todos os título nacionais",
        "🎯Objetivo: ganhar a champions league com um time focado em  drible",
        "🎯Objetivo: Ser o melhor ataque  da liga 3 vezes",
        "🎯Objetivo: Ser a melhor  defesa de uma competição três vezes",
        "🎯Objetivo: Fazer uma  temporada invicta",
        "🎯Objetivo: Ganhar uma final em cima de  um gigante",
        "🎯Objetivo:  ganhar 5 títulos  mas não pode contratar só  pode utilizar jogadores da base",
        "🎯Objetivo: ganhar 4 títulos em uma temporada"
    ];

    const formacoes1 = [
        "📋4-4-2",
        "📋4-3-3",
        "📋4-2-5",
        "📋3-5-2",
        "📋4-2-3-1",
        "📋5-3-2",
        "📋2-4-4",
        "📋2-5-3",
        "📋3-1-5-1",
        "📋4-5-1",
        "📋3-4-3"
    ];

    const times1 = [
        "⚽Ajax", "⚽Brighton", "⚽Leicester City", "⚽Ispwich Town", "⚽Braga",
        "⚽Eintracht Frankfurt", "⚽Hamburgo SV", "⚽Fiorentina", "⚽Wolverhampton",
        "⚽West Ham", "⚽Celtic", "⚽Sevilla", "⚽Lyon",
        "⚽Lille", "⚽Rayo Valhecano", "⚽Atalanta", "⚽Lazio","⚽Bayern Leverkusen", "⚽Leipzing","⚽Nottingham Forest",
        "⚽Luton Town", "⚽Sassuolo", "⚽Stuttgart", "⚽Feyenoord", "⚽Rangers", "⚽Sporting CP", "⚽Aston Villa", "⚽Roma"
    ];
    const desafio1 = desafios1[Math.floor(Math.random() * desafios1.length)];
    const objetivo1 = objetivos1[Math.floor(Math.random() * objetivos1.length)];
    const formacao1 = formacoes1[Math.floor(Math.random() * formacoes1.length)];
    const time1 = times1[Math.floor(Math.random() * times1.length)];

    document.getElementById("resultado").innerHTML = `
        <h2>${time1}</h2>
        <hr>
        <h2> ${objetivo1}</h2>
        <hr>
        <h2> ${desafio1}</h2>
        <hr>
        <h3> ${formacao1}</h3>
        
    `;
}
function gerarCarreira2() {

      const desafios2 = [
        "🚨Desafio:A cada temporada tem que vender pelo menos 5 jogadores",
        "🚨Desafio: Tem que  vender seu melhor jogador a cada 2 derrotas",
        "🚨Desafio: a cada 3 gols tomado  tem que tirar seu melhor defensor(inclue  goleiros) ",
        "🚨Desafio: Não pode comprar nenhum jogador(se quiser novos jogadores só pode pegar da base)",
        "🚨Desafio: seu time se baseia  apenas em um jogador escolha o  jogador ele vai precisar ser líder de gols e assistencias",
        "🚨Desafio: Só  poderá contratar jogadores da mesma nacionalidade do seu time",
        "🚨Desafio: Só poderá contratar jogadores da mesma nacionalidade do seu jogador com maior over",
        "🚨Desafio: A cada temporada tem que vender todos  os  jogadores e contratar novos jogadores",
        "🚨Desafio: Ganhar uma competição sem tomar 1 gol",
        "🚨Desafio: Não poderá  tomar amarelo em nenhum jogo",
        "🚨Desafio: Você será um treinador agressivo tem que tomar pelo menos 3 amarelos por jogo",
        "🚨Desafio: Ser o melhor ataque de todas as competições disputadas",
        "🚨Desafio: conseguir ser a melhor defesa de todas as competições disputadas"
    ];

    const objetivos2 = [
        "🎯Objetivo: nunca ser rebaixado e ganhar a liga pelo menos 3 vezes",
        "🎯Objetivo: chegar em uma final em pelo menos 3 temporadas e em 5 temporadas ganhar 1 título de liga  ou copa",
        "🎯Objetivo: ganhar copa, super copa  e liga 2",
        "🎯Objetivo: Ganhar todos os título nacionais",
        "🎯Objetivo: ser o melhor ataque  de todas as competiçôes disputadas",
        "🎯Objetivo: ganhar 1 tríplice coroa",
        "🎯Objetivo: Aumentar o  valor do  elenco  em 70%",
        "🎯Objetivo: Fazer uma  temporada invicta na liga",
        "🎯Objetivo: Ganhar uma final em cima de  um gigante",
        "🎯Objetivo:  ganhar 5 títulos  mas não pode contratar só  pode utilizar jogadores da base",
    ];

    const formacoes2 = [
        "📋4-4-2",
        "📋4-3-3",
        "📋4-2-5",
        "📋3-5-2",
        "📋4-2-3-1",
        "📋5-3-2",
        "📋2-4-4",
        "📋2-5-3",
        "📋3-1-5-1",
        "📋4-5-1",
        "📋3-4-3"
    ];

    const times2 = [
        "⚽Levante", "⚽Weverton", "⚽Athletic Club ", "⚽Burnley FC", "⚽Sunderland AFC",
        "⚽Norwich City FC", "⚽Schalke 04", "⚽Hannover Sportverein", "⚽SC Heerenveen",
        "⚽FC Twente", "Hearts", "⚽Como", "⚽Espanyol FC",
        "⚽FC Salzburgo", "⚽AFC Bournemouth", "⚽Greuther Furth", 
        "⚽UD Las Palmas","⚽FC Viktoria Colónia ", "⚽Borussia Mönchengladbach"
    ]
     const desafio2 = desafios2[Math.floor(Math.random() * desafios2.length)];
    const objetivo2 = objetivos2[Math.floor(Math.random() * objetivos2.length)];
    const formacao2 = formacoes2[Math.floor(Math.random() * formacoes2.length)];
    const time2 = times2[Math.floor(Math.random() * times2.length)];

    document.getElementById("resultado").innerHTML = `
        <h2>${time2}</h2>
        <hr>
        <h2> ${objetivo2}</h2>
        <hr>
        <h2> ${desafio2}</h2>
        <hr>
        <h3> ${formacao2}</h3>
        
    `;
}