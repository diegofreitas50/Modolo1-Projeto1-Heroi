

var prompt = require("prompt-sync")();

console.log ('\nintrodução. \n');

let respostasSim = 0;
let respostaHero = "nao";
let playAgain = "nao";


do{
    respostaHero = prompt('PRIMEIRA PERGUNTA! Responta com "sim" ou "nao": ');

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim"){
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');    
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim"){
        respostasSim++
    }

    respostaHero = prompt('SEGUNDA PERGUNTA! Responta com "sim" ou "nao": ');

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim"){
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');    
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim"){
        respostasSim++
    }

    respostaHero = prompt('TERCEIRA PERGUNTA! Responta com "sim" ou "nao": ');

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim"){
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');    
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim"){
        respostasSim++
    }

    respostaHero = prompt('QUARTA PERGUNTA! Responta com "sim" ou "nao": ');

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim"){
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');    
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim"){
        respostasSim++
    }

    respostaHero = prompt('QUINTA PERGUNTA! Responta com "sim" ou "nao": ');

    do{      
        if(respostaHero !== "nao" && respostaHero !== "sim"){
            respostaHero = prompt('Resposta inválida! Responda com "sim" ou "nao": ');    
        }
    }while(respostaHero !== "nao" && respostaHero !== "sim");

    if(respostaHero === "sim"){
        respostasSim++
    }

    if(respostasSim == 5){
        console.log(`\nVocê triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações. completou ${respostasSim} desafios.` );
    }else if(respostasSim == 4){
        console.log(`\nDepois de muito esforço você conquista seu objetivo, embora não de maneira perfeita. completou ${respostasSim} desafios.`);
    }else if(respostasSim == 3){
        console.log(`\nVocê chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco. completou ${respostasSim} desafios.`);
    }else if(respostasSim == 0){
        console.log(`\nVocê falha miseravelmente. completou ${respostasSim} desafios.`);
    }else console.log(`\nVocê falha, mas ainda consegue fugir da situação. completou ${respostasSim} desafios.`);

    playAgain = prompt('Deseja jogar novamente? Responda "sim" ou "nao": ');

}while(playAgain == "sim");

console.log('\nObrigado, nos vemos em uma próxima aventura!\n');
