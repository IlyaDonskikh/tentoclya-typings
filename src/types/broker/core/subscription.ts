import { CoreChannelType } from "../../models/core";

export interface BrokerCoreSubscriptionCreatedPayload {
  subscription: CoreSubscription;
}

interface CoreSubscription {
  uuid: string;
  sourceUUID: string;
  group: {
    uuid: string;
    userUUID: string;
    createdAt: Date;
    updatedAt: Date;
  };
  channel: {
    uuid: string;
    type: CoreChannelType;
    sourceUUID: string;
    externalId: string;
    createdAt: Date;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}
