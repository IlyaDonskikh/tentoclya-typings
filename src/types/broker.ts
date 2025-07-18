// Queue names as const for type safety
export const TentoclyaBrokerQueue = {
  core: {
    userCreated: "core.user.created",
    userProviderCreated: "core.userProvider.created",
    messageCreated: "core.message.created",
  },
  telegram: {
    start: "telegram.start",
    block: "telegram.block",
    telegramMessageCreated: "telegram.telegramMessage.created",
  },
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
export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueue.core.messageCreated]: CoreMessageCreatedPayload;
}

export interface TentoclyaBrokerTelegram {
  [TentoclyaBrokerQueue.telegram
    .telegramMessageCreated]: TelegramMessageCreatedPayload;
}
