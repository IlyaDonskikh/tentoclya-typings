import {
  AIGenerationRequestAdapterForModality,
  AIGenerationRequestInputForModality,
  AIGenerationRequestModality,
  AIGenerationRequestOutputSpecForModality,
  AIGenerationRequestResponseSchema,
} from "../../models";

export interface BrokerCoreGenerationRequestInitPayload<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> {
  generationRequest: CoreGenerationRequest<M>;
}

export type CoreGenerationRequest<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> = {
  [K in M]: {
    requestID: string;
    metadata?: Record<string, unknown>;
    adapter: AIGenerationRequestAdapterForModality<K>;
    modality: K;
    responseSchema?: AIGenerationRequestResponseSchema;
    outputSpec?: AIGenerationRequestOutputSpecForModality<K>;
    temperature?: number;
  } & AIGenerationRequestInputForModality<K>;
}[M];
