require("dotenv").config();

process.env.NTBA_FIX_319 = 1; //Fixing 319 bug
process.env.NTBA_FIX_350 = 1; //Fixing 350 bug File upload

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.TOKEN, { polling: true });

const start = () => {
  bot.on("message", (msg) => {

    switch (msg.text) {
      case "👦 Про нас":
        bot.sendMessage(msg.chat.id, "Веб студія MonoWeb");
        break;
      case "🎯 Чим займаємось":
        bot.sendMessage(
          msg.chat.id,
          "Розробляэмо сайти і телеграм-ботів для бізнесу"
        );
        break;
      case "🚩 Де знаходимось":
        bot.sendLocation(msg.chat.id, 50.012519, 33.004008);
        break;
      case "✅ Портфоліо":
        bot.sendMessage(msg.chat.id, "https://monoweb.com.ua/portfolio.html");
        break;
      case "💌 Отримати пропозицію":
        bot.sendMessage(msg.chat.id, "Завантажую....")
        .then(() => {
          bot.sendDocument(msg.chat.id, "offer.pdf")
        })
        .catch(err=>console.log(err))
        break;
      case "☎️ Зв'язатися":
        bot.sendMessage(
          msg.chat.id,
          "☎️ +38 063 162 8228   ✉️ manager@monoweb.com.ua"
        );
        break;
        case "/start":
          bot.sendMessage(msg.chat.id, `Привіт ${msg.from.first_name}`, {
                reply_markup: {
                  keyboard: [
                    [
                      { text: "👦 Про нас" },
                      { text: "🎯 Чим займаємось" },
                      { text: "🚩 Де знаходимось" },
                    ],
                    [
                      { text: "✅ Портфоліо" },
                      { text: "💌 Отримати пропозицію" },
                      { text: "☎️ Зв'язатися" },
                    ],
                  ],
                },
              });
          break;
      default:
        bot.sendMessage(msg.chat.id, "Нажміть кнопку на клавіатурі для вибору питання");
        break;
    }
  });

};

start();
