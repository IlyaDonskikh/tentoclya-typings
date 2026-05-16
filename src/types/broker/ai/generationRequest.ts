import {
  AIGenerationArtifactKind,
  AIGenerationArtifactMimeType,
  AIGenerationRequestAdapterForModality,
  AIGenerationRequestModality,
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
  outputSpec?: any;
  status: AIGenerationRequestStatus;
  responseText?: string;
  responseObject?: any;
  result?: any;
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
