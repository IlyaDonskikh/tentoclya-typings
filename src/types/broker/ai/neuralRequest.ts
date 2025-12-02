import {
  AINeuralRequestAdapter,
  AINeuralRequestStatus,
  AINeuralRequestType,
} from "../../models";

export interface BrokerAINeuralRequestRequestedPayload {
  neuralRequest: AINeuralRequest;
}

export interface BrokerAINeuralRequestCompletedPayload {
  neuralRequest: AINeuralRequestCompleted;
}

interface AINeuralRequest {
  resourceUUID: string;
  adapter: AINeuralRequestAdapter;
  type: AINeuralRequestType;
  requestPrompt: string;
  responseSchema?: string;
}

interface AINeuralRequestCompleted extends AINeuralRequest {
  status: AINeuralRequestStatus;
  responseText: string;
}
