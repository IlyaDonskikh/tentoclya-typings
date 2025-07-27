export enum TentoclyaBrokerQueue {
  coreMessageCreated = "core.message.created",
  coreMessageCompleted = "core.message.completed",
  coreUserProviderCreated = "core.userProvider.created",
  coreSubscriptionCreated = "core.subscription.created",
  coreErrorBuilderThrow = "core.errorBuilder.throw",
  telegramCommandStart = "telegram.command.start",
  telegramTelegramMessageCreated = "telegram.telegramMessage.created",
  telegramSubscriptionRequestCreated = "telegram.subscriptionRequest.created",
  telegramTelegramInputCreated = "telegram.telegramInput.created",
}

export * from "./broker/core";
export * from "./broker/telegram";
