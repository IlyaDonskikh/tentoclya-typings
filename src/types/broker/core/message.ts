export interface CoreMessageCreatedPayload {
  message: CoreMessage;
}

export enum CoreMessageName {
  telegram = "telegram",
  email = "email",
}

export enum CoreMessageStatus {
  created = "created",
  completed = "completed",
}

export interface CoreMessage {
  uuid: string;
  userUUID?: string | null;
  chatUUID: string;
  text?: string | null;
  isSystem?: boolean;
  replyToMessageUUID?: string | null;
  replyToText?: string | null;
  subscriptionGroupContentReviewUUID?: string | null;
  isTopic?: boolean;
  topicMessageUUID?: string | null;
  status: CoreMessageStatus;
  createdAt: Date;
  updatedAt: Date;
}
