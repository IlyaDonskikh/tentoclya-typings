import { CoreMessageStatus } from "../../models/core/message";

export interface BrokerCoreMessageCompletedPayload {
  message: CoreMessage;
}

export interface BrokerCoreMessageCreatedPayload {
  message: CoreMessage;
}

interface CoreMessage {
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
  chat: {
    uuid: string;
    userUUID: string;
  };
}
