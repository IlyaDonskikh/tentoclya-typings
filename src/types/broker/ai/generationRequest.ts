import {
  AIGenerationArtifactKind,
  AIGenerationArtifactMimeType,
  AIGenerationRequestAdapterForModality,
  AIGenerationRequestModality,
  AIGenerationRequestOutputSpecForModality,
  AIGenerationRequestResultForModality,
  AIGenerationRequestStatus,
  AIGenerationRequestType,
} from "../../models";

export interface BrokerAIGenerationRequestCompletedPayload<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> {
  generationRequest: AIGenerationRequest<M>;
}

export type AIGenerationRequest<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> = {
  uuid: string;
  resourceUUID: string;
  adapter: AIGenerationRequestAdapterForModality<M>;
  modality: M;
  type: AIGenerationRequestType;
  requestPrompt: string;
  responseSchema?: any;
  outputSpec?: AIGenerationRequestOutputSpecForModality<M>;
  status: AIGenerationRequestStatus;
  responseText?: string;
  responseObject?: any;
  result?: AIGenerationRequestResultForModality<M>;
  artifacts: AIGenerationArtifact[];
};

export interface AIGenerationArtifact {
  uuid: string;
  kind: AIGenerationArtifactKind;
  position: number;
  storageKey: string;
  mimeType: AIGenerationArtifactMimeType;
  byteSize?: number;
  width?: number;
  height?: number;
  durationMS?: number;
  metadata?: any;
}
