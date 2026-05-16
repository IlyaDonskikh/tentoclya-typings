import { TentoclyaBrokerQueue } from "../broker";
import { BrokerAINeuralRequestCompletedPayload } from "./ai/neuralRequest";
import { BrokerAIGenerationRequestCompletedPayload } from "./ai/generationRequest";

export interface TentoclyaBrokerAI {
  [TentoclyaBrokerQueue.aiNeuralRequestCompleted]: BrokerAINeuralRequestCompletedPayload;
  [TentoclyaBrokerQueue.aiGenerationRequestCompleted]: BrokerAIGenerationRequestCompletedPayload;
}
