import { bot } from "../core/bot.js";
import { Composer, Markup } from "telegraf";
import { selectLang, saveLang } from "../libs/lang.js";
import {
  bekor_qilish_rus,
  main_menu_rus,
  main_menu_uzb,
} from "../libs/main_menu.js";
import { Station } from "../models/station.model.js";
const composer = new Composer();
composer.hears("🏠 Bosh sahifa", async (ctx) => {
  await main_menu_uzb(ctx);
});
composer.hears("🏠 Главная страница", async (ctx) => {
  await main_menu_rus(ctx);
});
composer.hears("❌ Бекор қилиш", async (ctx) => {
  const user_id = ctx.from.id;
  await Station.destroy({ where: { user_id: `${user_id}` } });
  await main_menu_uzb(ctx);
});
composer.hears("❌ Отмена", async (ctx) => {
  const user_id = ctx.from.id;
  await Station.destroy({ where: { user_id: `${user_id}` } });
  await main_menu_rus(ctx);
});

composer.hears("Tilni tanlash / Выбор языка", async (ctx) => {
  await selectLang(ctx);
});

composer.hears("☸ Tilni tanlash", async (ctx) => {
  await selectLang(ctx);
});
composer.hears("🇷🇺 Тилни узгартириш", async (ctx) => {
  await saveLang(ctx, "RUS");
});
composer.hears("🇺🇿 Изменить язык", async (ctx) => {
  await saveLang(ctx, "UZB");
});

composer.hears("☸ Выбор языка", async (ctx) => {
  await selectLang(ctx);
});

composer.hears("🇺🇿 O'zbek tili", async (ctx) => {
  await saveLang(ctx, "UZB");
});

composer.hears("🇷🇺 Русский язык", async (ctx) => {
  await saveLang(ctx, "RUS");
});

bot.use(composer.middleware());
