export enum TentoclyaBrokerQueueList {
  coreMessageCreated = "core.message.created",
  telegramTelegramMessagesCreated = "telegram.telegramMessage.created",
}

export const TentoclyaBrokerQueue = {
  coreMessageCreated: TentoclyaBrokerQueueList.coreMessageCreated,
  telegramTelegramMessagesCreated:
    TentoclyaBrokerQueueList.telegramTelegramMessagesCreated,
} as const;

export type TentoclyaBrokerQueueType = typeof TentoclyaBrokerQueue;

// Define the Core type mapping
export interface Core {
  [TentoclyaBrokerQueue.coreMessageCreated]: {
    message: {
      uuid: string;
      content: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
}

export interface Telegram {
  [TentoclyaBrokerQueue.telegramTelegramMessagesCreated]: {
    telegramMessage: {
      uuid: string;
    };
  };
}
