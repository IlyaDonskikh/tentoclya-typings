import {
  TelegramTelegramMessageCreatedPayload,
  TentoclyaBrokerQueue,
} from "../broker";

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueue.telegramTelegramMessagesCreated]: TelegramTelegramMessageCreatedPayload;
}

export * from "./telegram/telegramMessage";
