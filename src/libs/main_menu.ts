import { Context, Markup } from "telegraf";
import { Fuel } from "../models/fuel.model.js";
import { deleteChat } from "./clearHistory.js";

export async function main_menu_uzb(ctx: Context) {
  await deleteChat(ctx);
  await ctx.reply(`<b>Bosh sahifa!</b>`, {
    parse_mode: "HTML",
    ...Markup.keyboard([
      ["⛽️ Мавжуд заправкалар", "🆕 Заправка кўшиш"],
      ["🇷🇺 Тилни узгартириш", "⛩ Менинг заправкаларим"],
    ])
      .oneTime()
      .resize(),
  });
}

export async function main_menu_rus(ctx: Context) {
  await deleteChat(ctx);
  await ctx.reply(`<b>Главная страница!</b>`, {
    parse_mode: "HTML",
    ...Markup.keyboard([
      ["⛽️ Доступные Заправки", "🆕 Добавить Заправку"],
      ["🇺🇿 Изменить язык", "⛩ Мои Заправки"],
    ])
      .oneTime()
      .resize(),
  });
}
export async function bekor_qilish_rus(
  ctx: Context,
  text1: string,
  text2: string
) {
  await deleteChat(ctx);
  await ctx.replyWithHTML(text2);
  await ctx.reply(text1, {
    parse_mode: "HTML",
    ...Markup.keyboard([["❌ Отмена"]])
      .oneTime()
      .resize(),
  });
}
export async function bekor_qilish_uzb(
  ctx: Context,
  text1: string,
  text2: string
) {
  await deleteChat(ctx);
  await ctx.replyWithHTML(text2);
  await ctx.reply(text1, {
    parse_mode: "HTML",
    ...Markup.keyboard([["❌ Бекор қилиш"]])
      .oneTime()
      .resize(),
  });
}

export async function fuel_type_uzb(
  ctx: Context,
  text1: string,
  text2: string
) {
  await deleteChat(ctx);
  await ctx.reply(text2);
  await ctx.reply(text1, {
    parse_mode: "HTML",
    ...Markup.keyboard([["❌ Бекор қилиш"]])
      .oneTime()
      .resize(),
  });
}
