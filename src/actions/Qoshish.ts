import { Composer, Markup } from "telegraf";
import { getLang } from "../libs/lang.js";
import { bot } from "../main.js";
import { User } from "../models/user.model.js";

const composer = new Composer();
composer.hears("🆕 Заправка кўшиш", async (ctx) => {
  const user_id = ctx.from.id;
  await User.findOne({ where: { user_id: `${user_id}` } }).then(
    async (user) => {
      if (!user) {
        await ctx.reply(`Botga "/start" tugmasi orqali qayta kiring`);
      } else {
        if (
          user.dataValues.phone_number == "" ||
          user.dataValues.phone_number == null
        ) {
          await ctx.reply(
            `Iltimos, <b>"Telefon raqamni yuborish"</b> tugmasini bosing! 👇`,
            {
              parse_mode: "HTML",
              ...Markup.keyboard([
                [
                  Markup.button.contactRequest("📞 Telefon raqamni yuborish"),
                  "🏠 Bosh sahifa",
                ],
              ])
                .oneTime()
                .resize(),
            }
          );
        } else {
        }
      }
    }
  );
});
composer.hears("🆕 Добавить Заправку", async (ctx) => {
  const user_id = ctx.from.id;
  await User.findOne({ where: { user_id: `${user_id}` } }).then(
    async (user) => {
      if (!user) {
        await ctx.reply(`Повторно войти в бота через кнопку "/start"`);
      } else {
        if (
          user.dataValues.phone_number == "" ||
          user.dataValues.phone_number == null
        ) {
          await ctx.reply(
            `Пожалуйста, нажмите <b>"Отправить номер телефона"</b>! 👇`,
            {
              parse_mode: "HTML",
              ...Markup.keyboard([
                [
                  Markup.button.contactRequest("📞 Отправить номер телефона"),
                  "🏠 Главная страница",
                ],
              ])
                .oneTime()
                .resize(),
            }
          );
        } else {
        }
      }
    }
  );
});

bot.use(composer.middleware());
