const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

let nicknames = [];

const players = [{
        nick: 'Dan10z',
        role: 'adc',
        rank: '50'
    },
    {
        nick: 'Trayker',
        role: 'jungle',
        rank: 500
    }
];

client.on('ready', () => {
    console.log('bot on');
});

client.on('message', message => {

    const msgs = message.content.slice(config.prefix.length).trim().split(/ +/g);
    
    if(message.author.username != 'InHouse-Pelotao'){

        if (message.content.startsWith(config.prefix + 'fila')){
            nicknames.push(buscarJogador(msgs[1]));
            console.log(nicknames);
        }
    }

    function buscarJogador(jogador){
        let posicao;
    
            for(let i=0; i<players.length; i++){
    
                if(players[i].nick == jogador){
                    posicao = i;
                }
            }
            
            if(posicao != null){
                console.log('jogador localizado na posição ' + posicao)
                message.channel.send(players[posicao].nick + ` está na fila!`);
                return jogador;
            } else {
                message.channel.send('jogador nao identificado');
            }
    } 
});

client.login(config.token);