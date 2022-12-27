import { Context } from "telegraf";

export async function deleteChat(ctx: Context) {
  let i = 0;
  while (true) {
    if (ctx.message)
      try {
        if (i == ctx.message.message_id) break;
        await ctx.deleteMessage(ctx.message.message_id - i++);
      } catch (e) {
        console.log(e);
        break;
      }
  }
}
