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
          if (lang === "UZB") {
            const str = await getStation(ctx, "UZB", "addAction 38");
            bekor_qilish_uzb(
              ctx,
              "✏️ Ёқилғи қуйиш шахобчаси номини киритинг",
              `${str}`
            );
          } else {
            const str = await getStation(ctx, "RUS", "addAction 45");
            bekor_qilish_rus(ctx, "✏️ Введите название заправки", `${str}`);
          }
        }
        break;
      }
      case "address": {
        if ("text" in ctx.message) {
          station.address = ctx.message.text;
          station.station_state = "phone";
          await station.save();
          if (lang === "UZB") {
            const str = await getStation(ctx, "UZB", "addAction 38");
            bekor_qilish_uzb(
              ctx,
              "✏️ Ёқилғи қуйиш шахобчаси телефон рақамини киритинг (намуна: 913331144)",
              `${str}`
            );
          } else {
            const str = await getStation(ctx, "RUS", "addAction 45");
            bekor_qilish_rus(
              ctx,
              "✏️ Введите номер телефона заправки (пример: 913331144)",
              `${str}`
            );
          }
        } else {
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
        }
        break;
      }
      case "phone": {
        if ("text" in ctx.message) {
          console.log(
            ctx.message.text,
            /^([378]{2}|(9[013-57-9]))\d{7}$/.test(ctx.message.text)
          );
          if (/^([378]{2}|(9[013-57-9]))\d{7}$/.test(ctx.message.text)) {
            station.phone = ctx.message.text;
            station.station_state = "photo";
            await station.save();
            if (lang === "UZB") {
              const str = await getStation(ctx, "UZB", "addAction 38");
              bekor_qilish_uzb(
                ctx,
                "✏️ Ёқилғи қуйиш шахобчаси расмини киритинг",
                `${str}`
              );
            } else {
              const str = await getStation(ctx, "RUS", "addAction 45");
              bekor_qilish_rus(ctx, "✏️ Вставьте картинку заправки", `${str}`);
            }
          } else {
            if (lang === "UZB") {
              const str = await getStation(ctx, "UZB", "addAction 38");
              bekor_qilish_uzb(
                ctx,
                "✏️ Ёқилғи қуйиш шахобчаси телефон рақамини тўғри киритинг (намуна: 913331144)",
                `${str}`
              );
            } else {
              const str = await getStation(ctx, "RUS", "addAction 45");
              bekor_qilish_rus(
                ctx,
                "✏️ Введите правильный номер телефона заправки (пример: 913331144)",
                `${str}`
              );
            }
          }
        } else {
          if (lang === "UZB") {
            const str = await getStation(ctx, "UZB", "addAction 38");
            bekor_qilish_uzb(
              ctx,
              "✏️ Ёқилғи қуйиш шахобчаси телефон рақамини киритинг (намуна: 913331144)",
              `${str}`
            );
          } else {
            const str = await getStation(ctx, "RUS", "addAction 45");
            bekor_qilish_rus(
              ctx,
              "✏️ Введите номер телефона заправки (пример: 913331144)",
              `${str}`
            );
          }
        }
        break;
      }
      case "photo": {
        if ("photo" in ctx.message) {
          station.image =
            ctx.message.photo[ctx.message.photo.length - 1].file_id;
          station.station_state = "time";
          await station.save();
          if (lang === "UZB") {
            const str = await getStation(ctx, "UZB", "addAction 38");
            bekor_qilish_uzb(
              ctx,
              "✏️ Ёқилғи қуйиш шахобчаси ишлаш вақтини киритинг. намуна(6:00-22:00, 7/24)",
              `${str}`
            );
          } else {
            const str = await getStation(ctx, "RUS", "addAction 45");
            bekor_qilish_rus(
              ctx,
              "✏️ Zapravkaning ишлаш вақтини киритинг. намуна(6:00-22:00, 7/24)",
              `${str}`
            );
          }
        } else {
          if (lang === "UZB") {
            const str = await getStation(ctx, "UZB", "addAction 38");
            bekor_qilish_uzb(
              ctx,
              "✏️ Ёқилғи қуйиш шахобчаси расмини киритинг",
              `${str}`
            );
          } else {
            const str = await getStation(ctx, "RUS", "addAction 45");
            bekor_qilish_rus(ctx, "✏️ Вставьте картинку заправки", `${str}`);
          }
        }
        break;
      }
      case "time": {
        if ("text" in ctx.message) {
          station.work_time = ctx.message.text;
          station.station_state = "fuel";
          await station.save();
          if (lang === "UZB") {
            const str = await getStation(ctx, "UZB", "addAction 38");
            bekor_qilish_uzb(ctx, "✏️ Ёқилғи турини танланг", `${str}`);
          } else {
            const str = await getStation(ctx, "RUS", "addAction 45");
            bekor_qilish_rus(ctx, "✏️ Выберите тип топлива", `${str}`);
          }
        } else {
          if (lang === "UZB") {
            const str = await getStation(ctx, "UZB", "addAction 38");
            bekor_qilish_uzb(
              ctx,
              "✏️ Ёқилғи қуйиш шахобчаси ишлаш вақтини киритинг. намуна(6:00-22:00, 7/24)",
              `${str}`
            );
          } else {
            const str = await getStation(ctx, "RUS", "addAction 45");
            bekor_qilish_rus(
              ctx,
              "✏️ Zapravkaning ишлаш вақтини киритинг. намуна(6:00-22:00, 7/24)",
              `${str}`
            );
          }
        }
        break;
      }
    }
  }
});

bot.use(composer.middleware());
