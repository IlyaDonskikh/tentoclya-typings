import { TentoclyaBrokerQueue } from "../broker";
import {
  BrokerCoreUserProviderCreatedPayload,
  BrokerCoreUserProviderUpdatedPayload,
} from "./core/userProvider";
import {
  BrokerCoreMessageCompletedPayload,
  BrokerCoreMessageCreatedPayload,
} from "./core/message";
import { BrokerCoreSubscriptionCreatedPayload } from "./core/subscription";
import { BrokerCoreErrorBuilderThrowPayload } from "./core/errorBuilder";
import { BrokerCoreTutorLessonCreatedPayload } from "./core/tutorLesson";

export interface TentoclyaBrokerCore {
  [TentoclyaBrokerQueue.coreMessageCreated]: BrokerCoreMessageCreatedPayload;
  [TentoclyaBrokerQueue.coreMessageCompleted]: BrokerCoreMessageCompletedPayload;
  [TentoclyaBrokerQueue.coreUserProviderCreated]: BrokerCoreUserProviderCreatedPayload;
  [TentoclyaBrokerQueue.coreUserProviderUpdated]: BrokerCoreUserProviderUpdatedPayload;
  [TentoclyaBrokerQueue.coreSubscriptionCreated]: BrokerCoreSubscriptionCreatedPayload;
  [TentoclyaBrokerQueue.coreErrorBuilderThrow]: BrokerCoreErrorBuilderThrowPayload;
  [TentoclyaBrokerQueue.coreTutorLessonCreated]: BrokerCoreTutorLessonCreatedPayload;
}
