export enum TelegramTelegramMessageStatus {
  new = "new",
  completed = "completed",
  failed = "failed",
}

export enum TelegramTelegramMessageType {
  sendPhoto = "sendPhoto",
  sendMessage = "sendMessage",
  editMessageText = "editMessageText",
  editMessageCaption = "editMessageCaption",
  editMessageMedia = "editMessageMedia",
  setChatMenuButton = "setChatMenuButton",
  answerCbQuery = "answerCbQuery",
}

export enum TelegramTelegramMessageCode {
  startInfo = "startInfo",
  subscriptionRequestCompleted = "subscriptionRequestCompleted",
  errorBuilderFlatRegular = "errorBuilderFlatRegular",
  coreMessageCreated = "coreMessageCreated",
}

export enum TelegramTelegramMessageParseMode {
  markdownV2 = "MarkdownV2",
}
