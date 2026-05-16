import {
  AIGenerationRequestAdapterForModality,
  AIGenerationRequestModality,
  AIGenerationRequestOutputSpecForModality,
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
  outputSpec?: AIGenerationRequestOutputSpecForModality<M>;
  temperature: AINeuralRequestTemperature;
};
