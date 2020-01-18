//モジュールの読み込み
var keys = require('./modules/keys.js');

// ---------- discord ----------
const Discord = require('discord.js');
const client = new Discord.Client();

//botのログイン処理
client.login(keys.discord);

//botの準備ができたら呼ばれる
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(client);
});

client.on('message', msg => {
    //コマンド系の場合
    if(msg.content.startsWith('/xiv')){
	commandCont(msg);
    }
    //安否確認
    if(msg.content.startsWith('/xiv ping')){
        msg.channel.send('hello!!');
    }

});

//コマンドをさばくメソッド
function commandCont(msg){
    if (msg.content.startsWith('/xiv tts')){
	//ttsコマンドをスマホからでもできるように代行する
	tts(msg);
    }
}

function tts(msg){
    //スペースで分割
    var content = msg.content.slice(4);
    var op={tts:true};
    var cu = client.user;
    msg.channel.send(msg.author.username+ 'のメッセージを代行します、' + content,op).then(message => message.delete());
}
