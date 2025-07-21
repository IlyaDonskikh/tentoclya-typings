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
    sourceableUUID: string;
    externalId: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
