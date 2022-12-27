import { Context } from "telegraf";
import { Station } from "../models/station.model.js";

export async function getStation(ctx: Context, lang: String, place: string) {
  const user_id = String(ctx?.from?.id);
  const station = await Station.findOne({
    where: { user_id: `${user_id}` },
  });
  console.log(place);
  if (station) {
    if (lang === "UZB") {
      return `Номи: <b>${station.dataValues.name || "❌"}</b>
Манзили:<b>${station.dataValues.address || "❌"}</b>
Телефон рақами: <b>${station.dataValues.phone || "❌"}</b>
Расми:<b>${station.dataValues.image ? "✅" : "❌"}</b>
Иш вақти:<b>${station.dataValues.work_time || "❌"}</b>
Ёқилғи тури:<b>${"❌"}</b>
Маълумот:<b>${station.dataValues.info || "❌"}</b>
Жойлашув:<b>${station.dataValues.location ? "✅" : "❌"}</b>`;
    } else {
      return `Имя: <b>${station.dataValues.name || "❌"}</b>
Адрес: <b>${station.dataValues.address || "❌"}</b>
Номер телефона: <b>${station.dataValues.phone || "❌"}</b>
Изображение: <b>${station.dataValues.image ? "✅" : "❌"}</b>
Время работы:<b>${station.dataValues.work_time || "❌"}</b>
Тип топлива:<b>${"❌"}</b>
Информация: <b>${station.dataValues.info || "❌"}</b>
Местоположение:<b>${station.dataValues.location ? "✅" : "❌"}</b>`;
    }
  }
}
