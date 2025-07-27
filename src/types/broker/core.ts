import { TentoclyaBrokerQueue } from "../broker";
import { BrokerCoreUserProviderCreatedPayload } from "./core/userProvider";
import {
  BrokerCoreMessageCompletedPayload,
  BrokerCoreMessageCreatedPayload,
} from "./core/message";
import { BrokerCoreSubscriptionCreatedPayload } from "./core/subscription";
import { BrokerCoreErrorBuilderThrowPayload } from "./core/errorBuilder";

export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueue.coreMessageCreated]: BrokerCoreMessageCreatedPayload;
  [TentoclyaBrokerQueue.coreMessageCompleted]: BrokerCoreMessageCompletedPayload;
  [TentoclyaBrokerQueue.coreUserProviderCreated]: BrokerCoreUserProviderCreatedPayload;
  [TentoclyaBrokerQueue.coreSubscriptionCreated]: BrokerCoreSubscriptionCreatedPayload;
  [TentoclyaBrokerQueue.coreErrorBuilderThrow]: BrokerCoreErrorBuilderThrowPayload;
}
