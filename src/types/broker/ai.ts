import { TentoclyaBrokerQueue } from "../broker";
import { BrokerAINeuralRequestCompletedPayload } from "./ai/neuralRequest";

export interface TentoclyaBrokerAI {
  [TentoclyaBrokerQueue.aiNeuralRequestCompleted]: BrokerAINeuralRequestCompletedPayload;
}
