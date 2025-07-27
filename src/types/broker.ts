export enum TentoclyaBrokerQueue {
  coreMessageCreated = "core.message.created",
  coreUserProviderCreated = "core.userProvider.created",
  coreSubscriptionCreated = "core.subscription.created",
  coreErrorBuilderThrow = "core.errorBuilder.throw",
  telegramCommandStart = "telegram.command.start",
  telegramTelegramMessageCreated = "telegram.telegramMessage.created",
  telegramSubscriptionRequestCreated = "telegram.subscriptionRequest.created",
  telegramTelegramUserInputCreated = "telegram.telegramUserInput.created",
}

export * from "./broker/core";
export * from "./broker/telegram";
