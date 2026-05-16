import {
  AIGenerationRequestAdapterForModality,
  AIGenerationRequestModality,
  AIGenerationRequestType,
  AINeuralRequestTemperature,
} from "../../models";

export interface BrokerCoreGenerationRequestInitPayload<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> {
  generationRequest: CoreGenerationRequest<M>;
}

export type CoreGenerationRequest<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> = {
  resourceUUID: string;
  adapter: AIGenerationRequestAdapterForModality<M>;
  modality: M;
  type: AIGenerationRequestType;
  requestPrompt: string;
  responseSchema?: any;
  outputSpec?: any;
  temperature: AINeuralRequestTemperature;
};
