export enum TentoclyaBrokerQueue {
  coreMessageCreated = "core.message.created",
  coreUserProviderCreated = "core.userProvider.created",
  telegramTelegramMessagesCreated = "telegram.telegramMessage.created",
  telegramSubscriptionRequestsCreated = "telegram.subscriptionRequest.created",
}

export * from "./broker/core";
export * from "./broker/telegram";
