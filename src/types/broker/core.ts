import { TentoclyaBrokerQueue } from "../broker";
import { CoreUserProviderCreatedPayload } from "./core/userProvider";
import { CoreMessageCreatedPayload } from "./core/message";
import { CoreSubscriptionCreatedPayload } from "./core/subscription";

export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueue.coreMessageCreated]: CoreMessageCreatedPayload;
  [TentoclyaBrokerQueue.coreUserProviderCreated]: CoreUserProviderCreatedPayload;
  [TentoclyaBrokerQueue.coreSubscriptionCreated]: CoreSubscriptionCreatedPayload;
}

export * from "./core/message";
export * from "./core/userProvider";
export * from "./core/subscription";
