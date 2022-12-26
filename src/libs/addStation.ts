import { Context } from "telegraf";
import { Station } from "../models/station.model.js";

export async function addStation(ctx: Context, lang: String) {
  const user_id = String(ctx?.from?.id);
  const station = await Station.create({
    user_id,
    station_state: "name",
  });
}
