export interface BrokerTelegramTelegramUserInputCreatedPayload {
  telegramUserInput: TelegramTelegramUserInput;
}
interface TelegramTelegramUserInput {
  uuid?: string; // UUID
  userUUID: string; // UUID with no reference
  telegramMessageId: number; // BigInt
  telegramForwardFromMessageId?: string; // BigInt
  telegramMediaGroupId?: string; // BigInt
  text?: string; // Text
  caption?: string; // Text
  createdAt?: Date;
  updatedAt?: Date;
}
