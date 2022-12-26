import { Context, Markup } from "telegraf";

export async function main_menu_uzb(ctx: Context) {
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
