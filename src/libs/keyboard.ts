import { Markup } from "telegraf";

export const fuelKeyboard = {
  umumiy_uzb: Markup.inlineKeyboard([
    [
      Markup.button.callback("⛽️ Бензин", "benzin"),
      Markup.button.callback("🧯 Газ", "gaz"),
    ],
    [
      Markup.button.callback("🔋 Электр", "elektr"),
      Markup.button.callback("🛢 Дизель", "dizel"),
    ],
    [Markup.button.callback("🆗 Тайёр", "tayyor")],
  ]),

  umumiy_rus: Markup.inlineKeyboard([
    [
      Markup.button.callback("⛽️ Бензин", "benzin"),
      Markup.button.callback("🧯 Газ", "gaz"),
    ],
    [
      Markup.button.callback("🔋 Электричество", "elektr"),
      Markup.button.callback("🛢 Дизель", "dizel"),
    ],
    [Markup.button.callback("🆗 Готово", "tayyor")],
  ]),
};
