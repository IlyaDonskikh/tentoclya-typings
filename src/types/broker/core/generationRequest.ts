import {
  AIGenerationRequestAdapter,
  AIGenerationRequestModality,
  AIGenerationRequestType,
  AINeuralRequestTemperature,
} from "../../models";

export interface BrokerCoreGenerationRequestInitPayload {
  generationRequest: CoreGenerationRequest;
}

interface CoreGenerationRequest {
  resourceUUID: string;
  adapter?: AIGenerationRequestAdapter;
  modality?: AIGenerationRequestModality;
  type: AIGenerationRequestType;
  requestPrompt: string;
  responseSchema?: any;
  outputSpec?: any;
  temperature?: AINeuralRequestTemperature;
}
