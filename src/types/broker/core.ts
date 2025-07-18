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
  userProvider: UserProviderAttributes;
}

export enum UserProviderName {
  telegram = "telegram",
  email = "email",
}

interface UserProviderAttributes {
  uuid: string;
  name: UserProviderName;
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
