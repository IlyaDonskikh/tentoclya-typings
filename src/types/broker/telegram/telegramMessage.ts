import {
  TelegramTelegramMessageType,
  TelegramTelegramMessageCode,
  TelegramTelegramMessageStatus,
} from "../../models/telegram/telegramMessage";

export interface BrokerTelegramTelegramMessageCreatedPayload {
  telegramMessage: TelegramTelegramMessage;
}

export interface TelegramTelegramMessage {
  uuid: string;
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
