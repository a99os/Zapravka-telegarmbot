import { Composer, Markup } from "telegraf";
import { getLang } from "../libs/lang.js";
import { bot } from "../main.js";
import { User } from "../models/user.model.js";
import {
  bekor_qilish_rus,
  bekor_qilish_uzb,
  main_menu_rus,
  main_menu_uzb,
} from "../libs/main_menu.js";
import { Station } from "../models/station.model.js";
import { getStation } from "../libs/addStation.js";

const composer = new Composer();
composer.hears("🆕 Заправка кўшиш", async (ctx) => {
  const user_id = ctx.from.id;

  const station = await Station.findOne({ where: { user_id: `${user_id}` } });
  if (!station) {
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
            await Station.create({
              user_id: `${user_id}`,
              station_state: "name",
            });
            const str = await getStation(ctx, "UZB", "qoshish48");
            bekor_qilish_uzb(
              ctx,
              `✏️ Ёқилғи қуйиш шахобчаси номини киритинг`,
              `${str}`
            );
          }
        }
      }
    );
  } else {
    await ctx.replyWithHTML("🚨 Сизда ёқилғи қуйиш шахобчаси мавжуд");
    main_menu_uzb(ctx);
  }
});
composer.hears("🆕 Добавить Заправку", async (ctx) => {
  const user_id = ctx.from.id;
  const station = await Station.findOne({ where: { user_id: `${user_id}` } });
  if (!station) {
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
            await Station.create({
              user_id: `${user_id}`,
              station_state: "name",
            });
            const str = await getStation(ctx, "RUS", "qoshish95");
            bekor_qilish_rus(ctx, `✏️ Введите название заправки`, String(str));
          }
        }
      }
    );
  } else {
    await ctx.replyWithHTML("🚨 У вас есть заправка");
    main_menu_rus(ctx);
  }
});

bot.use(composer.middleware());
