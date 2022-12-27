import { User } from "../models/user.model.js";
import { bot } from "../core/bot.js";
import { Composer, Markup } from "telegraf";

import { getLang } from "../libs/lang.js";
import { Station } from "../models/station.model.js";
import { bekor_qilish_rus, bekor_qilish_uzb } from "../libs/main_menu.js";
import { getStation } from "../libs/addStation.js";
const composer = new Composer();

composer.on("contact", async (ctx) => {
  const contact = ctx.message.contact.phone_number;
  const lang = await getLang(String(ctx.from.id));

  if (lang === "UZB") {
    if (ctx.message.contact.user_id !== ctx.from.id) {
      await ctx.reply("O'zingizni telefon raqamingizni kiriting", {
        parse_mode: "HTML",
      });
      await ctx.reply(
        `Iltimos, <b>"Telefon raqamni yuborish"</b> tugmasini bosing! `,
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
      const user_id = ctx.from.id;
      const user = await User.findOne({ where: { user_id: `${user_id}` } });
      if (!user) {
        await ctx.reply(`👉 /start`);
      } else {
        await user.update({ phone_number: contact });
        await Station.create({ user_id: `${user_id}`, station_state: "name" });
        const str = getStation(ctx, lang, "onKontact42");
        bekor_qilish_uzb(
          ctx,
          `✏️ Ёқилғи қуйиш шахобчаси номини киритинг`,
          `${str}`
        );
      }
    }
  } else {
    if (ctx.message.contact.user_id !== ctx.from.id) {
      await ctx.reply("Введите свой номер телефона", {
        parse_mode: "HTML",
      });
      await ctx.reply(`Нажмите кнопку <b>Отправить номер телефона</b> 👇`, {
        parse_mode: "HTML",
        ...Markup.keyboard([
          [
            Markup.button.contactRequest("📞 Отправить номер телефона"),
            "🏠 Главная страница",
          ],
        ])
          .oneTime()
          .resize(),
      });
    } else {
      const user_id = ctx.from.id;
      const user = await User.findOne({ where: { user_id: `${user_id}` } });
      if (!user) {
        await ctx.reply(`👉 /start`);
      } else {
        await user.update({ phone_number: contact });
        console.log("buyer");
        await Station.create({ user_id: `${user_id}`, station_state: "name" });
        const str = await getStation(ctx, `${lang}`, "onKontact75");
        bekor_qilish_rus(ctx, `✏️ Введите название заправки`, `${str}`);
      }
    }
  }
});

bot.use(composer.middleware());
