export interface BrokerCoreUserProviderCreatedPayload {
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
