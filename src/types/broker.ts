export enum TentoclyaBrokerQueue {
  coreMessageCreated = "core.message.created",
  coreMessageCompleted = "core.message.completed",
  coreUserProviderCreated = "core.userProvider.created",
  coreUserProviderUpdated = "core.userProvider.updated",
  coreSubscriptionCreated = "core.subscription.created",
  coreErrorBuilderThrow = "core.errorBuilder.throw",
  telegramCommandStart = "telegram.command.start",
  telegramCommandBlock = "telegram.command.block",
  telegramTelegramMessageCreated = "telegram.telegramMessage.created",
  telegramSubscriptionRequestCreated = "telegram.subscriptionRequest.created",
  telegramTelegramInputCreated = "telegram.telegramInput.created",
}

export * from "./broker/core";
export * from "./broker/telegram";
