import { TentoclyaBrokerQueue } from "../broker";

interface TelegramMessageCreatedPayload {
  telegramMessage: {
    uuid: string;
  };
}

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueue.telegramTelegramMessagesCreated]: TelegramMessageCreatedPayload;
}
