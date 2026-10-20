import {
  AIGenerationArtifactKind,
  AIGenerationArtifactMimeType,
  AIGenerationRequest,
  AIGenerationRequestAdapter,
  AIGenerationRequestMessage,
  AIGenerationRequestModality,
  AIGenerationRequestStatus,
  AIGenerationRequestTextAdapter,
  AIGenerationRequestTextOutputSpec,
  BrokerAIGenerationRequestCompletedPayload,
  BrokerCoreGenerationRequestInitPayload,
  CoreGenerationRequest,
  TentoclyaBrokerAI,
  TentoclyaBrokerCore,
  TentoclyaBrokerQueue,
} from "../src/types";

// @ts-expect-error Generation contracts do not export business request types.
import { AIGenerationRequestType } from "../src/types";

const messages: AIGenerationRequestMessage[] = [
  { role: "system", content: "Follow the supplied instructions." },
  { role: "user", content: "Input supplied by the caller." },
  { role: "assistant", content: "Previous response supplied by the caller." },
  { role: "user", content: "Continue using the supplied material." },
];

const provider = {
  order: ["baidu/fp8"],
  allow_fallbacks: true,
  require_parameters: true,
};

// Each profile is a standalone technical request. The caller owns sequencing.
const profiles = [
  {
    requestID: "caller.search.1",
    metadata: { callerRun: "example", position: 1 },
    modality: AIGenerationRequestModality.text,
    adapter: "deepseek/deepseek-v4-pro-0813",
    messages,
    outputSpec: {
      provider,
      reasoning: { effort: "medium" },
      maxTokens: 12_000,
      tools: [
        { type: "openrouter:web_search", parameters: { max_results: 5 } },
        { type: "openrouter:web_fetch" },
      ],
      maxToolCalls: 8,
    },
  },
  {
    requestID: "caller.writer.2",
    modality: AIGenerationRequestModality.text,
    adapter: "google/gemini-4-argon",
    messages,
    outputSpec: { reasoning: { effort: "high" }, maxTokens: 8_000 },
  },
  {
    requestID: "caller.checker.3",
    modality: AIGenerationRequestModality.text,
    adapter: "deepseek/deepseek-v4-pro-0813",
    messages,
    outputSpec: {
      provider,
      reasoning: { effort: "high" },
      tools: [{ type: "openrouter:web_fetch" }],
      maxToolCalls: 3,
    },
  },
  {
    requestID: "caller.editor.4",
    modality: AIGenerationRequestModality.text,
    adapter: "deepseek/deepseek-v4-pro-0813",
    messages,
    outputSpec: { provider, reasoning: { effort: "high" } },
  },
  {
    requestID: "caller.finalizer.5",
    modality: AIGenerationRequestModality.text,
    adapter: "deepseek/deepseek-v4-pro-0813",
    messages,
    outputSpec: {
      provider,
      reasoning: { effort: "high" },
      tools: [{ type: "openrouter:web_fetch" }],
      maxToolCalls: 3,
    },
  },
  {
    requestID: "caller.packager.6",
    modality: AIGenerationRequestModality.text,
    adapter: "deepseek/deepseek-v4-pro-0813",
    messages,
    responseSchema: {
      type: "object",
      properties: {
        title: { type: "string" },
        body: { type: "string" },
      },
      required: ["title", "body"],
      additionalProperties: false,
    },
    outputSpec: {
      provider,
      reasoning: { effort: "none" },
      schemaName: "response",
    },
  },
  {
    requestID: "caller.translation.7",
    modality: AIGenerationRequestModality.text,
    adapter: "google/gemini-4-argon",
    messages,
    outputSpec: { reasoning: { effort: "high", exclude: true } },
  },
] satisfies CoreGenerationRequest<AIGenerationRequestModality.text>[];

const modelIDs: AIGenerationRequestTextAdapter[] = [
  "deepseek/deepseek-v4.1-flash",
  "anthropic/claude-haiku-5.5",
  "anthropic/claude-opus-5.5",
  "openai/gpt-6-astra",
  "openai/gpt-6.1-sol",
  "openai/gpt-6-luna",
  "another-provider/future-model-version",
  AIGenerationRequestAdapter.deepseekChat,
  AIGenerationRequestAdapter.deepseekReasoner,
  AIGenerationRequestAdapter.deepseekV4Flash,
  AIGenerationRequestAdapter.deepseekV4Pro,
];

const explicitOptions: AIGenerationRequestTextOutputSpec = {
  provider,
  reasoning: { enabled: true, effort: "xhigh", max_tokens: 2_000 },
  maxTokens: 6_000,
  tools: [],
  maxToolCalls: 0,
};

const image: CoreGenerationRequest = {
  requestID: "caller.image",
  modality: AIGenerationRequestModality.image,
  adapter: AIGenerationRequestAdapter.openrouterGoogleGemini25FlashImage,
  requestPrompt: "Create the requested image.",
  outputSpec: { aspectRatio: "16:9", outputFormat: "png" },
};

const audio: CoreGenerationRequest = {
  requestID: "caller.audio",
  modality: AIGenerationRequestModality.audio,
  adapter: AIGenerationRequestAdapter.openrouterXAIGrokVoiceTTS10,
  requestPrompt: "Read the supplied text.",
  outputSpec: { voice: "example-voice", responseFormat: "mp3", speed: 1 },
  temperature: 0,
};

const textResult: AIGenerationRequest = {
  ...profiles[0],
  uuid: "generation-uuid",
  status: AIGenerationRequestStatus.completed,
  responseText: "Result passed through to the caller.",
  result: { text: "Result passed through to the caller." },
  artifacts: [],
};

const imageResult: AIGenerationRequest = {
  ...image,
  uuid: "image-generation-uuid",
  status: AIGenerationRequestStatus.completed,
  artifacts: [{
    uuid: "artifact-uuid",
    kind: AIGenerationArtifactKind.image,
    mimeType: AIGenerationArtifactMimeType.imagePNG,
    position: 0,
    storageKey: "example/image.png",
  }],
};

const audioResult: AIGenerationRequest = {
  ...audio,
  uuid: "audio-generation-uuid",
  status: AIGenerationRequestStatus.completed,
  artifacts: [{
    uuid: "artifact-uuid",
    kind: AIGenerationArtifactKind.audio,
    mimeType: AIGenerationArtifactMimeType.audioMPEG,
    position: 0,
    storageKey: "example/audio.mp3",
  }],
};

const initPayload: BrokerCoreGenerationRequestInitPayload = {
  generationRequest: profiles[0],
};
const initMessage: TentoclyaBrokerCore[TentoclyaBrokerQueue.coreGenerationRequestInit] = initPayload;
const completedPayload: BrokerAIGenerationRequestCompletedPayload = {
  generationRequest: textResult,
};
const completedMessage: TentoclyaBrokerAI[TentoclyaBrokerQueue.aiGenerationRequestCompleted] = completedPayload;

function narrowRequest(request: CoreGenerationRequest) {
  if (request.modality === AIGenerationRequestModality.text) {
    const textMessages: AIGenerationRequestMessage[] = request.messages;
    return textMessages.map((message) => message.content).join("\n");
  }
  const prompt: string = request.requestPrompt;
  return prompt;
}

function narrowResult(result: AIGenerationRequest) {
  if (result.modality === AIGenerationRequestModality.text) {
    return result.messages.map((message) => message.role);
  }
  return result.requestPrompt;
}

// @ts-expect-error Text messages are required even when no prompt is supplied.
const missingMessages: CoreGenerationRequest = { requestID: "x", modality: AIGenerationRequestModality.text, adapter: "google/gemini-4-argon" };
// @ts-expect-error The old text prompt is not a fallback for messages.
const oldTextPrompt: CoreGenerationRequest = { requestID: "x", modality: AIGenerationRequestModality.text, adapter: "google/gemini-4-argon", requestPrompt: "Legacy text" };
// @ts-expect-error Text requests cannot include both input formats.
const mixedTextInput: CoreGenerationRequest = { ...profiles[0], requestPrompt: "Legacy text" };
// @ts-expect-error Images require requestPrompt and do not accept messages.
const imageMessages: CoreGenerationRequest = { requestID: "x", modality: AIGenerationRequestModality.image, adapter: AIGenerationRequestAdapter.openrouterGoogleGemini25FlashImage, messages };
// @ts-expect-error Audio cannot include messages alongside requestPrompt.
const audioMessages: CoreGenerationRequest = { ...audio, messages };
// @ts-expect-error Unsupported tool types must not pass through the contract.
const unsupportedTool: AIGenerationRequestTextOutputSpec = { tools: [{ type: "function" }] };
// @ts-expect-error Unknown top-level output options are rejected.
const misspelledOptions: AIGenerationRequestTextOutputSpec = { max_tokens: 1_000 };
// @ts-expect-error Business type is not part of the generation contract.
const businessType: CoreGenerationRequest = { ...profiles[0], type: "tutorLesson" };
// @ts-expect-error Business resource identifiers are not part of the contract.
const businessResource: CoreGenerationRequest = { ...profiles[0], resourceUUID: "resource-uuid" };
// @ts-expect-error requestID is required instead of business correlation fields.
const missingRequestID: CoreGenerationRequest = { modality: AIGenerationRequestModality.text, adapter: "google/gemini-4-argon", messages };
// @ts-expect-error Completed text results must retain the original messages.
const incompleteResult: AIGenerationRequest = { requestID: "x", uuid: "id", modality: AIGenerationRequestModality.text, adapter: "google/gemini-4-argon", status: AIGenerationRequestStatus.completed, artifacts: [] };
// @ts-expect-error Completed payloads do not restore business fields.
const oldResult: AIGenerationRequest = { ...textResult, resourceUUID: "resource-uuid" };
// @ts-expect-error Arbitrary direct provider IDs are not supported.
const unsupportedDirectModel: AIGenerationRequestTextAdapter = "unknown-model";
// @ts-expect-error Media adapters remain restricted to their own modalities.
const imageWithTextModel: CoreGenerationRequest = { requestID: "x", modality: AIGenerationRequestModality.image, adapter: "google/gemini-4-argon", requestPrompt: "Image" };
