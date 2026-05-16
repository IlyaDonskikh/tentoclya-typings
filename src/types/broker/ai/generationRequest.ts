import {
  AIGenerationArtifactKind,
  AIGenerationRequestAdapter,
  AIGenerationRequestModality,
  AIGenerationRequestStatus,
  AIGenerationRequestType,
} from "../../models";

export interface BrokerAIGenerationRequestCompletedPayload {
  generationRequest: AIGenerationRequest;
}

interface AIGenerationRequest {
  uuid: string;
  resourceUUID: string;
  adapter: AIGenerationRequestAdapter;
  modality: AIGenerationRequestModality;
  type: AIGenerationRequestType;
  requestPrompt: string;
  responseSchema?: any;
  outputSpec?: any;
  status: AIGenerationRequestStatus;
  responseText?: string;
  responseObject?: any;
  result?: any;
  artifacts: AIGenerationArtifact[];
}

interface AIGenerationArtifact {
  uuid: string;
  kind: AIGenerationArtifactKind;
  position: number;
  storageKey: string;
  mimeType: string;
  byteSize?: number;
  width?: number;
  height?: number;
  durationMS?: number;
  metadata?: any;
}
