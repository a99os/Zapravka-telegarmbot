import { User } from "../models/user.model.js";
import { bot } from "../core/bot.js";
import { Composer, Markup } from "telegraf";

import { getLang } from "../libs/lang.js";
import { Station } from "../models/station.model.js";
import { bekor_qilish_rus, bekor_qilish_uzb } from "../libs/main_menu.js";
import { getStation } from "../libs/addStation.js";
const composer = new Composer();

composer.on("message", async (ctx) => {
  let lang = "";
  let tg_link = "";
  await User.findOne({ where: { user_id: `${ctx.from.id}` } }).then(
    async (user) => {
      if (!user) {
        await ctx.reply(`👉 "/start" `);
      } else {
        lang = user.dataValues.user_lang;
        tg_link = user.dataValues.username;
      }
    }
  );
  let elon_state;
  const station = await Station.findOne({
    where: { user_id: `${ctx.from.id}` },
    order: [["createdAt", "DESC"]],
  });
  if (station) {
    switch (station.station_state) {
      case "name": {
        if ("text" in ctx.message) {
          console.log("salom");
          station.name = ctx.message.text;
          station.station_state = "address";
          await station.save();
          if (lang === "UZB") {
            const str = await getStation(ctx, "UZB", "addAction 38");
            bekor_qilish_uzb(
              ctx,
              "✏️ Ёқилғи қуйиш шахобчаси манзилини киритинг",
              `${str}`
            );
          } else {
            const str = await getStation(ctx, "RUS", "addAction 45");
            bekor_qilish_rus(ctx, "✏️ Введите адрес заправки", `${str}`);
          }
        } else {
        }
        break;
      }
    }
  }
});

bot.use(composer.middleware());
