import { TentoclyaBrokerQueue } from "../broker";
import {
  BrokerAINeuralRequestCompletedPayload,
  BrokerAINeuralRequestRequestedPayload,
} from "./ai/neuralRequest";

export interface TentoclyaBrokerAI {
  [TentoclyaBrokerQueue.aiNeuralRequestRequested]: BrokerAINeuralRequestRequestedPayload;
  [TentoclyaBrokerQueue.aiNeuralRequestCompleted]: BrokerAINeuralRequestCompletedPayload;
}
