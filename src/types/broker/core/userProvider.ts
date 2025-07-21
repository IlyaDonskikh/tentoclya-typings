import { CoreUserProviderName } from "../../models/core/userProvider";

export interface BrokerCoreUserProviderCreatedPayload {
  userProvider: CoreUserProvider;
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
