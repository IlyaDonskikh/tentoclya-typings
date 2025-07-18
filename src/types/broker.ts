export enum TentoclyaBrokerQueueList {
  coreMessageCreated = "core.message.created",
  telegramTelegramMessagesCreated = "telegram.telegramMessage.created",
}

// Message payload types
interface CoreMessageCreatedPayload {
  message: {
    uuid: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

interface TelegramMessageCreatedPayload {
  telegramMessage: {
    uuid: string;
  };
}

// Define the Core type mapping
export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueueList.coreMessageCreated]: CoreMessageCreatedPayload;
}

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueueList.telegramTelegramMessagesCreated]: TelegramMessageCreatedPayload;
}
