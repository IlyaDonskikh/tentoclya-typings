import { TentoclyaBrokerQueue } from "../broker";
import { BrokerTelegramTelegramMessageCreatedPayload } from "./telegram/telegramMessage";
import { BrokerTelegramSubscriptionRequestCreatedPayload } from "./telegram/subscriptionRequest";
import { BrokerTelegramCommandStartPayload } from "./telegram/start";
import { BrokerTelegramTelegramInputCreatedPayload } from "./telegram/telegramInput";

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueue.telegramTelegramMessageCreated]: BrokerTelegramTelegramMessageCreatedPayload;
  [TentoclyaBrokerQueue.telegramSubscriptionRequestCreated]: BrokerTelegramSubscriptionRequestCreatedPayload;
  [TentoclyaBrokerQueue.telegramCommandStart]: BrokerTelegramCommandStartPayload;
  [TentoclyaBrokerQueue.telegramTelegramInputCreated]: BrokerTelegramTelegramInputCreatedPayload;
}
