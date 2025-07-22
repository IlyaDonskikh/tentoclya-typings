import { TentoclyaBrokerQueue } from "../broker";
import { BrokerTelegramTelegramMessageCreatedPayload } from "./telegram/telegramMessage";
import { BrokerTelegramSubscriptionRequestCreatedPayload } from "./telegram/subscriptionRequest";
import { BrokerTelegramCommandStartPayload } from "./telegram/start";

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueue.telegramTelegramMessageCreated]: BrokerTelegramTelegramMessageCreatedPayload;
  [TentoclyaBrokerQueue.telegramSubscriptionRequestCreated]: BrokerTelegramSubscriptionRequestCreatedPayload;
  [TentoclyaBrokerQueue.telegramCommandStart]: BrokerTelegramCommandStartPayload;
}
