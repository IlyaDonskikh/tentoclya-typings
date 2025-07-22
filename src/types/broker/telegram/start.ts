import {
  TelegramTelegramMessageType,
  TelegramTelegramMessageCode,
  TelegramTelegramMessageStatus,
} from "../../models/telegram/telegramMessage";

export interface BrokerTelegramCommandStartPayload {
  telegramFromUser: TelegramTelegramFromUser;
}

interface TelegramTelegramFromUser {
  id: string;
  isBot: boolean;
  firstName: string;
  lastName?: string;
  username?: string;
  languageCode?: string;
}
