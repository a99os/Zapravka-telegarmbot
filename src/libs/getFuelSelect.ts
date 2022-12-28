import { Context } from "telegraf";
import { Station } from "../models/station.model.js";

export async function getFuelSelectUzb(ctx: Context) {
  const user_id = ctx.from?.id;
  const station = await Station.findOne({ where: { user_id: `${user_id}` } });
  return {
    benzin: station?.dataValues.fuel_list?.includes("benzin")
      ? "⛽️ ☑️"
      : "⛽️ Бензин",
    gaz: station?.dataValues.fuel_list?.includes("gaz") ? "🧯 ☑️" : "🧯 Газ",
    elektr: station?.dataValues.fuel_list?.includes("elektr")
      ? "🔋 ☑️"
      : "🔋 Электр",
    dizel: station?.dataValues.fuel_list?.includes("dizel")
      ? "🛢 ☑️"
      : "🛢 Дизель",
  };
}
export async function getFuelSelectRus(ctx: Context) {
  const user_id = ctx.from?.id;
  const station = await Station.findOne({ where: { user_id: `${user_id}` } });
  return {
    benzin: station?.dataValues.fuel_list?.includes("benzin")
      ? "⛽️ ☑️"
      : "⛽️ Бензин",
    gaz: station?.dataValues.fuel_list?.includes("gaz") ? "🧯 ☑️" : "🧯 Газ",
    elektr: station?.dataValues.fuel_list?.includes("elektr")
      ? "🔋 ☑️"
      : "🔋 Электричество",
    dizel: station?.dataValues.fuel_list?.includes("dizel")
      ? "🛢 ☑️"
      : "🛢 Дизель",
  };
}
