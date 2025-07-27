export interface BrokerTelegramTelegramInputCreatedPayload {
  telegramInput: TelegramTelegramInput;
}
interface TelegramTelegramInput {
  uuid?: string; // UUID
  userUUID: string; // UUID with no reference
  telegramMessageId: string; // BigInt
  telegramForwardFromMessageId?: string; // BigInt
  telegramMediaGroupId?: string; // BigInt
  replyToTelegramMessageId?: string; // BigInt
  replyToTelegramMessageText?: string; // Text
  replyToTelegramMessageQuoteText?: string; // Text
  text?: string; // Text
  caption?: string; // Text
  createdAt?: Date;
  updatedAt?: Date;
}
