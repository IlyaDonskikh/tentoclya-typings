import { TentoclyaBrokerQueue } from "../broker";
import { TelegramTelegramMessageCreatedPayload } from "./telegram/telegramMessage";

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueue.telegramTelegramMessagesCreated]: TelegramTelegramMessageCreatedPayload;
}

export * from "./telegram/telegramMessage";
