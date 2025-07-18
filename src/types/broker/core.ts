import { TentoclyaBrokerQueue } from "../broker";
import { CoreUserProviderCreatedPayload } from "./core/userProvider";
import { CoreMessageCreatedPayload } from "./core/message";

export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueue.coreMessageCreated]: CoreMessageCreatedPayload;
  [TentoclyaBrokerQueue.coreUserProviderCreated]: CoreUserProviderCreatedPayload;
}

export * from "./core/message";
export * from "./core/userProvider";
