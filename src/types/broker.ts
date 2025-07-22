export enum TentoclyaBrokerQueue {
  coreMessageCreated = "core.message.created",
  coreUserProviderCreated = "core.userProvider.created",
  coreSubscriptionCreated = "core.subscription.created",
  telegramCommandStart = "telegram.command.start",
  telegramTelegramMessageCreated = "telegram.telegramMessage.created",
  telegramSubscriptionRequestCreated = "telegram.subscriptionRequest.created",
}

export * from "./broker/core";
export * from "./broker/telegram";
