

var prompt = require("prompt-sync")();

let respostasSim = 0;
let respostaHero = "nao";
let playAgain = "nao";


do{
    console.clear();
    console.log('introdução. \n');

    respostaHero = prompt('PRIMEIRA PERGUNTA! Responta com "sim" ou "nao": ');
    console.clear();

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim") {
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
            console.clear();    
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim") {
        respostasSim++
    }

    respostaHero = prompt('SEGUNDA PERGUNTA! Responta com "sim" ou "nao": ');
    console.clear();

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim") {
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
            console.clear();    
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim") {
        respostasSim++
    }

    respostaHero = prompt('TERCEIRA PERGUNTA! Responta com "sim" ou "nao": ');
    console.clear();

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim") {
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
            console.clear();    
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim") {
        respostasSim++
    }

    respostaHero = prompt('QUARTA PERGUNTA! Responta com "sim" ou "nao": ');
    console.clear(); 

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim") {
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
            console.clear();     
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim"){
        respostasSim++
    }

    respostaHero = prompt('QUINTA PERGUNTA! Responta com "sim" ou "nao": ');
    console.clear(); 

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim") {
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');
            console.clear();     
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim") {
        respostasSim++
    }

    console.clear(); 

    if(respostasSim == 5) {
        console.log(`Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações. completou ${respostasSim} desafios.\n\n`);
    }else if(respostasSim == 4) {
        console.log(`Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita. completou ${respostasSim} desafios.\n\n`);
    }else if(respostasSim == 3) {
        console.log(`Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco. completou ${respostasSim} desafios.\n\n`);
    }else if(respostasSim == 0) {
        console.log(`Você falha miseravelmente. completou ${respostasSim} desafios.`);
    }else 
        console.log(`Você falha, mas ainda consegue fugir da situação. completou ${respostasSim} desafios.\n\n`);

    playAgain = prompt('Deseja jogar novamente? Responda "sim" ou "nao": ');
    console.clear(); 

}while(playAgain == "sim");

console.log('Obrigado, nos vemos em uma próxima aventura!\n\n');
