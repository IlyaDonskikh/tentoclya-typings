import { TentoclyaBrokerQueue } from "../broker";
import { TelegramTelegramMessageCreatedPayload } from "./telegram/telegramMessage";
import { TelegramSubscriptionRequestCreatedPayload } from "./telegram/subscriptionRequest";

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueue.telegramTelegramMessagesCreated]: TelegramTelegramMessageCreatedPayload;
  [TentoclyaBrokerQueue.telegramSubscriptionRequestsCreated]: TelegramSubscriptionRequestCreatedPayload;
}

export * from "./telegram/telegramMessage";
export * from "./telegram/subscriptionRequest";
