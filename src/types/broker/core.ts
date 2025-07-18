import { TentoclyaBrokerQueue } from "../broker";

interface CoreMessageCreatedPayload {
  message: {
    uuid: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

interface CoreUserProviderCreatedPayload {
  userProvider: CoreUserProvider;
}

export enum CoreUserProviderName {
  telegram = "telegram",
  email = "email",
}

interface CoreUserProvider {
  uuid: string;
  name: CoreUserProviderName;
  externalUserId: string;
  userUUID: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueue.coreMessageCreated]: CoreMessageCreatedPayload;
  [TentoclyaBrokerQueue.coreUserProviderCreated]: CoreUserProviderCreatedPayload;
}
