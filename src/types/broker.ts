// Queue names as const for type safety
export const TentoclyaBrokerQueue = {
  coreMessageCreated: "core.message.created",
  telegramTelegramMessagesCreated: "telegram.telegramMessage.created",
} as const;

// Type for queue names
export type TentoclyaBrokerQueueType =
  (typeof TentoclyaBrokerQueue)[keyof typeof TentoclyaBrokerQueue];

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

// Queue to payload mapping
export interface TentoclyaBrokerPayloads {
  [TentoclyaBrokerQueue.coreMessageCreated]: CoreMessageCreatedPayload;
  [TentoclyaBrokerQueue.telegramTelegramMessagesCreated]: TelegramMessageCreatedPayload;
}
