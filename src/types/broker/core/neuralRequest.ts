import { AINeuralRequestAdapter, AINeuralRequestType } from "../../models";

export interface BrokerCoreNeuralRequestInitPayload {
  neuralRequest: CoreNeuralRequest;
}

interface CoreNeuralRequest {
  resourceUUID: string;
  adapter: AINeuralRequestAdapter;
  type: AINeuralRequestType;
  requestPrompt: string;
  responseSchema?: string;
  temperature?: number;
}
