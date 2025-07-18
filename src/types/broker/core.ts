import { CoreMessageCreatedPayload, TentoclyaBrokerQueue } from "../broker";
import { CoreUserProviderCreatedPayload } from "./core/userProvider";

export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueue.coreMessageCreated]: CoreMessageCreatedPayload;
  [TentoclyaBrokerQueue.coreUserProviderCreated]: CoreUserProviderCreatedPayload;
}

export * from "./core/message";
export * from "./core/userProvider";
