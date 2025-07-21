import { CoreChannelType } from "../../models/core";

export interface BrokerCoreSubscriptionCreatedPayload {
  userProvider: CoreSubscription;
}

interface CoreSubscription {
  uuid: string;
  sourceUUID: string;
  group: {
    uuid: string;
    userUUID: string;
  };
  channel: {
    uuid: string;
    type: CoreChannelType;
    sourceableUUID: string;
    externalId: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
