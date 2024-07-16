const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const TelegramBot = require('node-telegram-bot-api')


const port = 3000
const token = "7115254379:AAE5EyQJ6QLC2Nht0xQbOAFsSxj5R3iOV0I"

// botni yaratish 

const bot = new TelegramBot(token, {polling:true})

app.use(bodyParser.json())

// klientdan keluvchi savol

const savollar = {
    '/start' : "Salom qaysi kinoni ko'rishni hohlaysiz? Kodini yuboring!",
    'Aka yaxshimisiz?' : 'Da yaxshi rahmat'
}

bot.on('message', (msg) =>{
    const chatId = msg.chat.id
    const text = msg.text.toLowerCase()

    if(savollar[text]){
        bot.sendMessage(chatId, savollar[text]),
        bot.sendPhoto("")
    }

    else{
        'Tori yozing brat'
    }
})


app.listen(port, () =>{
    console.log("bot ishga tushdi");
})