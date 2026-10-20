import {
  AIGenerationArtifactKind,
  AIGenerationArtifactMimeType,
  AIGenerationRequestModality,
  AIGenerationRequestResultForModality,
  AIGenerationRequestStatus,
} from "../../models";
import { CoreGenerationRequest } from "../core/generationRequest";

export interface BrokerAIGenerationRequestCompletedPayload<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> {
  generationRequest: AIGenerationRequest<M>;
}

export type AIGenerationRequest<
  M extends AIGenerationRequestModality = AIGenerationRequestModality,
> = {
  [K in M]: CoreGenerationRequest<K> & {
    uuid: string;
    status: AIGenerationRequestStatus;
    responseText?: string;
    responseObject?: any;
    result?: AIGenerationRequestResultForModality<K>;
    artifacts: AIGenerationArtifact[];
  };
}[M];

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
