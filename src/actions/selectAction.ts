import { bot } from "../core/bot.js";
import { Composer, Markup } from "telegraf";
import { getLang } from "../libs/lang.js";
import { Station } from "../models/station.model.js";
import { getFuelSelectRus, getFuelSelectUzb } from "../libs/getFuelSelect.js";

const composer = new Composer();
composer.action("benzin", async (ctx) => {
  const lang = await getLang(String(ctx?.from?.id));
  const station = await Station.findOne({
    where: { user_id: `${ctx?.from?.id}` },
  });
  if (station?.dataValues.fuel_list?.includes("benzin")) {
    station.dataValues.fuel_list.splice(
      station.dataValues.fuel_list.indexOf("benzin"),
      1
    );
    station?.changed("fuel_list", true);
    await station.save();
  } else {
    station?.fuel_list?.push("benzin");
    station?.changed("fuel_list", true);
    await station?.save();
  }

  if (lang === "UZB") {
    const fuel = await getFuelSelectUzb(ctx);
    await ctx.editMessageReplyMarkup({
      inline_keyboard: [
        [
          Markup.button.callback(`${fuel.benzin}`, "benzin"),
          Markup.button.callback(`${fuel.gaz}`, "gaz"),
        ],
        [
          Markup.button.callback(`${fuel.elektr}`, "elektr"),
          Markup.button.callback(`${fuel.dizel}`, "dizel"),
        ],
        [Markup.button.callback("🆗 Тайёр", "tayyor")],
      ],
    });
  } else {
    const fuel = await getFuelSelectRus(ctx);
    await ctx.editMessageReplyMarkup({
      inline_keyboard: [
        [
          Markup.button.callback(`${fuel.benzin}`, "benzin"),
          Markup.button.callback(`${fuel.gaz}`, "gaz"),
        ],
        [
          Markup.button.callback(`${fuel.elektr}`, "elektr"),
          Markup.button.callback(`${fuel.dizel}`, "dizel"),
        ],
        [Markup.button.callback("🆗 Готово", "tayyor")],
      ],
    });
  }
});
composer.action("elektr", async (ctx) => {
  const lang = await getLang(String(ctx?.from?.id));
  const station = await Station.findOne({
    where: { user_id: `${ctx?.from?.id}` },
  });
  if (station?.dataValues.fuel_list?.includes("elektr")) {
    station.dataValues.fuel_list.splice(
      station.dataValues.fuel_list.indexOf("elektr"),
      1
    );
    station?.changed("fuel_list", true);
    await station.save();
  } else {
    station?.fuel_list?.push("elektr");
    station?.changed("fuel_list", true);
    await station?.save();
  }

  if (lang === "UZB") {
    const fuel = await getFuelSelectUzb(ctx);
    await ctx.editMessageReplyMarkup({
      inline_keyboard: [
        [
          Markup.button.callback(`${fuel.benzin}`, "benzin"),
          Markup.button.callback(`${fuel.gaz}`, "gaz"),
        ],
        [
          Markup.button.callback(`${fuel.elektr}`, "elektr"),
          Markup.button.callback(`${fuel.dizel}`, "dizel"),
        ],
        [Markup.button.callback("🆗 Тайёр", "tayyor")],
      ],
    });
  } else {
    const fuel = await getFuelSelectRus(ctx);
    await ctx.editMessageReplyMarkup({
      inline_keyboard: [
        [
          Markup.button.callback(`${fuel.benzin}`, "benzin"),
          Markup.button.callback(`${fuel.gaz}`, "gaz"),
        ],
        [
          Markup.button.callback(`${fuel.elektr}`, "elektr"),
          Markup.button.callback(`${fuel.dizel}`, "dizel"),
        ],
        [Markup.button.callback("🆗 Готово", "tayyor")],
      ],
    });
  }
});
composer.action("dizel", async (ctx) => {
  const lang = await getLang(String(ctx?.from?.id));
  const station = await Station.findOne({
    where: { user_id: `${ctx?.from?.id}` },
  });
  if (station?.dataValues.fuel_list?.includes("dizel")) {
    station.dataValues.fuel_list.splice(
      station.dataValues.fuel_list.indexOf("dizel"),
      1
    );
    station?.changed("fuel_list", true);
    await station.save();
  } else {
    station?.fuel_list?.push("dizel");
    station?.changed("fuel_list", true);
    await station?.save();
  }

  if (lang === "UZB") {
    const fuel = await getFuelSelectUzb(ctx);
    await ctx.editMessageReplyMarkup({
      inline_keyboard: [
        [
          Markup.button.callback(`${fuel.benzin}`, "benzin"),
          Markup.button.callback(`${fuel.gaz}`, "gaz"),
        ],
        [
          Markup.button.callback(`${fuel.elektr}`, "elektr"),
          Markup.button.callback(`${fuel.dizel}`, "dizel"),
        ],
        [Markup.button.callback("🆗 Тайёр", "tayyor")],
      ],
    });
  } else {
    const fuel = await getFuelSelectRus(ctx);
    await ctx.editMessageReplyMarkup({
      inline_keyboard: [
        [
          Markup.button.callback(`${fuel.benzin}`, "benzin"),
          Markup.button.callback(`${fuel.gaz}`, "gaz"),
        ],
        [
          Markup.button.callback(`${fuel.elektr}`, "elektr"),
          Markup.button.callback(`${fuel.dizel}`, "dizel"),
        ],
        [Markup.button.callback("🆗 Готово", "tayyor")],
      ],
    });
  }
});
composer.action("gaz", async (ctx) => {
  const lang = await getLang(String(ctx?.from?.id));
  const station = await Station.findOne({
    where: { user_id: `${ctx?.from?.id}` },
  });
  if (station?.dataValues.fuel_list?.includes("gaz")) {
    station.dataValues.fuel_list.splice(
      station.dataValues.fuel_list.indexOf("gaz"),
      1
    );
    station?.changed("fuel_list", true);
    await station.save();
  } else {
    station?.fuel_list?.push("gaz");
    station?.changed("fuel_list", true);
    await station?.save();
  }

  if (lang === "UZB") {
    const fuel = await getFuelSelectUzb(ctx);
    await ctx.editMessageReplyMarkup({
      inline_keyboard: [
        [
          Markup.button.callback(`${fuel.benzin}`, "benzin"),
          Markup.button.callback(`${fuel.gaz}`, "gaz"),
        ],
        [
          Markup.button.callback(`${fuel.elektr}`, "elektr"),
          Markup.button.callback(`${fuel.dizel}`, "dizel"),
        ],
        [Markup.button.callback("🆗 Тайёр", "tayyor")],
      ],
    });
  } else {
    const fuel = await getFuelSelectRus(ctx);
    await ctx.editMessageReplyMarkup({
      inline_keyboard: [
        [
          Markup.button.callback(`${fuel.benzin}`, "benzin"),
          Markup.button.callback(`${fuel.gaz}`, "gaz"),
        ],
        [
          Markup.button.callback(`${fuel.elektr}`, "elektr"),
          Markup.button.callback(`${fuel.dizel}`, "dizel"),
        ],
        [Markup.button.callback("🆗 Готово", "tayyor")],
      ],
    });
  }
});

bot.use(composer.middleware());
