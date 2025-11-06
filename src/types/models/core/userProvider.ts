export enum CoreUserProviderName {
  telegram = "telegram",
  google = "google",
  apple = "apple",
  email = "email",
}

export interface CoreUserProvider {
  uuid: string;
  name: CoreUserProviderName;
  externalUserId: string;
  userUUID: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
