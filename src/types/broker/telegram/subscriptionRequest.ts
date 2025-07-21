export interface BrokerTelegramSubscriptionRequestCreatedPayload {
  subscriptionRequest: TelegramSubscriptionRequest;
}

export enum TelegramSubscriptionRequestStatus {
  created = "created",
  completed = "completed",
}

export interface TelegramSubscriptionRequest {
  uuid?: string;
  telegramChannelId: string; // BIGINT in database
  userUUID: string; // Not reference
  status: TelegramSubscriptionRequestStatus;
  createdAt?: Date;
  updatedAt?: Date;
  telegramChannel: TelegramSubscriptionRequestTelegramChannel;
}

interface TelegramSubscriptionRequestTelegramChannel {
  id: string; // BIGINT in database
  title: string;
  username?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
