import {
  AINeuralRequestAdapter,
  AINeuralRequestStatus,
  AINeuralRequestType,
} from "../../models";
export interface BrokerAINeuralRequestCompletedPayload {
  neuralRequest: AINeuralRequest;
}

interface AINeuralRequest {
  uuid: string;
  resourceUUID: string;
  adapter: AINeuralRequestAdapter;
  type: AINeuralRequestType;
  requestPrompt: string;
  responseSchema?: string;
  status: AINeuralRequestStatus;
  responseText: string;
  responseObject: any;
}
