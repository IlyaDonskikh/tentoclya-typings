import { TentoclyaBrokerQueue } from "../broker";
import { BrokerCoreUserProviderCreatedPayload } from "./core/userProvider";
import { BrokerCoreMessageCreatedPayload } from "./core/message";
import { BrokerCoreSubscriptionCreatedPayload } from "./core/subscription";

export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueue.coreMessageCreated]: BrokerCoreMessageCreatedPayload;
  [TentoclyaBrokerQueue.coreUserProviderCreated]: BrokerCoreUserProviderCreatedPayload;
  [TentoclyaBrokerQueue.coreSubscriptionCreated]: BrokerCoreSubscriptionCreatedPayload;
}
