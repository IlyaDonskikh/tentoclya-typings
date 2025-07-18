export enum BrokerQueueList {
  coreMessageCreated = "core.message.created",
  telegramTelegramMessagesCreated = "telegram.telegramMessage.created",
}

export const BrokerQueue = {
  coreMessageCreated: BrokerQueueList.coreMessageCreated,
  telegramTelegramMessagesCreated:
    BrokerQueueList.telegramTelegramMessagesCreated,
} as const;

export type BrokerQueueType = typeof BrokerQueue;

// Define the Core type mapping
export interface Core {
  [BrokerQueue.coreMessageCreated]: {
    Message: {
      uuid: string;
      content: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
}

export interface Telegram {
  [BrokerQueue.telegramTelegramMessagesCreated]: {
    TelegramMessage: {
      uuid: string;
    };
  };
}
