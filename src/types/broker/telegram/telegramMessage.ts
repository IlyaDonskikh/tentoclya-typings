export interface TelegramTelegramMessageCreatedPayload {
  telegramMessage: TelegramTelegramMessage;
}

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

export enum TelegramTelegramMessageSourceableType {
  message = "message",
}

export enum TelegramTelegramMessageCode {
  startInfo = "startInfo",
}

export enum TelegramTelegramMessageParseMode {
  markdownV2 = "MarkdownV2",
}

export interface TelegramTelegramMessage {
  uuid?: string;
  type: TelegramTelegramMessageType;
  code: TelegramTelegramMessageCode;
  status: TelegramTelegramMessageStatus;
  payload: Array<any>;
  externalTelegramMessageId?: string | null;
  sourceableUUID?: string | null;
  sourceableType?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
