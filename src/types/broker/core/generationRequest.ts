import {
  AIGenerationRequestAdapterForModality,
  AIGenerationRequestInputForModality,
  AIGenerationRequestModality,
  AIGenerationRequestOutputSpecForModality,
  AIGenerationRequestResponseSchema,
  AIGenerationRequestTextConfiguration,
} from "../../models";

export interface BrokerCoreGenerationRequestInitPayload<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> {
  generationRequest: CoreGenerationRequest<M>;
}

type GenerationConfiguration<
  M extends AIGenerationRequestModality,
> = M extends AIGenerationRequestModality.text
  ? AIGenerationRequestTextConfiguration
  : {
      adapter: AIGenerationRequestAdapterForModality<M>;
      outputSpec?: AIGenerationRequestOutputSpecForModality<M>;
    };

export type CoreGenerationRequest<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> = {
  [K in M]: {
    requestID: string;
    metadata?: Record<string, unknown>;
    modality: K;
    responseSchema?: AIGenerationRequestResponseSchema;
    temperature?: number;
  } & AIGenerationRequestInputForModality<K> & GenerationConfiguration<K>;
}[M];
