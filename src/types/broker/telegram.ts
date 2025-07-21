import { TentoclyaBrokerQueue } from "../broker";
import { BrokerTelegramTelegramMessageCreatedPayload } from "./telegram/telegramMessage";
import { BrokerTelegramSubscriptionRequestCreatedPayload } from "./telegram/subscriptionRequest";

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueue.telegramTelegramMessagesCreated]: BrokerTelegramTelegramMessageCreatedPayload;
  [TentoclyaBrokerQueue.telegramSubscriptionRequestsCreated]: BrokerTelegramSubscriptionRequestCreatedPayload;
}
