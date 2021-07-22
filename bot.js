const Telegraf = require('telegraf')

const bot = new Telegraf('TOKEN_KEY')

// /start command
// bot.start((ctx)=>{
//     ctx.reply(ctx.from.first_name + " You have entered the start command and it is a " + ctx.updateSubTypes[0])
//     // console.log(ctx.from)
//     // console.log(ctx.chat)
//     // console.log(ctx.message)
//     // console.log(ctx.updateSubTypes)
// })

// bot.help((ctx) =>{
//     ctx.reply("You have entered the help command")
// })

// bot.settings((ctx) =>{
//     ctx.reply("You have entered the settings command")
// })

// bot.command(['test', 'Test'], (ctx) => {
//     ctx.reply("Hello World")
// })

// bot.hears("cat", (ctx, next)=> {
//     ctx.reply("meow")
//     next(ctx)
// })

// bot.on('sticker', (ctx)=>{
//     ctx.reply('This is a sticker')
//     console.log(ctx.updateSubTypes[0])
// })

// bot.mention('botfather', (ctx) => {
//     ctx.reply("Mention method")
// })

// bot.phone('+1 4242 4242 424', (ctx) => {
//     ctx.reply("Phone method")
// })

// bot.hashtag('hash', (ctx) => {
//     ctx.reply("Hashtag method")
// })

// bot.use((ctx)=>{
//     ctx.reply("You use the bot")
// })

bot.use((ctx, next) => {
    ctx.state.apple = 5
    console.log(ctx)
    ctx.reply('Hello World')
    next(ctx)
})
  
bot.start((ctx) => {
    // ctx.reply("Start command")
    ctx.reply(ctx.state.apple)
})
  

bot.launch()