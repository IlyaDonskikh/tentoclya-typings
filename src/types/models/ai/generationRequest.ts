export enum AIGenerationRequestAdapter {
  deepseekReasoner = "deepseek-reasoner",
  deepseekChat = "deepseek-chat",
  deepseekV4Flash = "deepseek-v4-flash",
  deepseekV4Pro = "deepseek-v4-pro",
  openrouterOpenAIGPT5Chat = "openai/gpt-5-chat",
  openrouterOpenAIGPT51Chat = "openai/gpt-5.1-chat",
  openrouterOpenAIGPT55 = "openai/gpt-5.5",
  openrouterGoogleGemini25FlashImage = "google/gemini-2.5-flash-image",
  openrouterGoogleGemini31FlashTTSPreview = "google/gemini-3.1-flash-tts-preview",
  openrouterXAIGrokVoiceTTS10 = "x-ai/grok-voice-tts-1.0",
}

export enum AIGenerationRequestModality {
  text = "text",
  image = "image",
  audio = "audio",
}

export type AIGenerationRequestDirectDeepSeekAdapter =
  | AIGenerationRequestAdapter.deepseekReasoner
  | AIGenerationRequestAdapter.deepseekChat
  | AIGenerationRequestAdapter.deepseekV4Flash
  | AIGenerationRequestAdapter.deepseekV4Pro;

export type AIGenerationRequestOpenRouterAdapter = `${string}/${string}`;

export type AIGenerationRequestTextAdapter =
  | AIGenerationRequestDirectDeepSeekAdapter
  | AIGenerationRequestOpenRouterAdapter;

export type AIGenerationRequestImageAdapter =
  AIGenerationRequestAdapter.openrouterGoogleGemini25FlashImage;

export type AIGenerationRequestAudioAdapter =
  | AIGenerationRequestAdapter.openrouterGoogleGemini31FlashTTSPreview
  | AIGenerationRequestAdapter.openrouterXAIGrokVoiceTTS10;

export interface AIGenerationRequestAdapterByModality {
  [AIGenerationRequestModality.text]: AIGenerationRequestTextAdapter;
  [AIGenerationRequestModality.image]: AIGenerationRequestImageAdapter;
  [AIGenerationRequestModality.audio]: AIGenerationRequestAudioAdapter;
}

export type AIGenerationRequestAdapterForModality<
  M extends AIGenerationRequestModality,
> = AIGenerationRequestAdapterByModality[M];

export interface AIGenerationRequestMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIGenerationRequestTextInput {
  messages: AIGenerationRequestMessage[];
  requestPrompt?: never;
}

export interface AIGenerationRequestPromptInput {
  requestPrompt: string;
  messages?: never;
}

export interface AIGenerationRequestInputByModality {
  [AIGenerationRequestModality.text]: AIGenerationRequestTextInput;
  [AIGenerationRequestModality.image]: AIGenerationRequestPromptInput;
  [AIGenerationRequestModality.audio]: AIGenerationRequestPromptInput;
}

export type AIGenerationRequestInputForModality<
  M extends AIGenerationRequestModality,
> = AIGenerationRequestInputByModality[M];

export type AIGenerationRequestJSONValue =
  | null
  | boolean
  | number
  | string
  | AIGenerationRequestJSONValue[]
  | { [key: string]: AIGenerationRequestJSONValue };

export type AIGenerationRequestResponseSchema =
  | boolean
  | { [keyword: string]: AIGenerationRequestJSONValue };

export interface AIGenerationRequestProviderOptions {
  order?: string[];
  allow_fallbacks?: boolean;
  require_parameters?: boolean;
}

export interface AIGenerationRequestReasoningOptions {
  enabled?: boolean;
  effort?: "none" | "minimal" | "low" | "medium" | "high" | "xhigh";
  exclude?: boolean;
  max_tokens?: number;
}

export interface AIGenerationRequestTool {
  type: "openrouter:web_search" | "openrouter:web_fetch";
  parameters?: Record<string, unknown>;
}

export interface AIGenerationRequestTextOutputSpec {
  provider?: AIGenerationRequestProviderOptions;
  reasoning?: AIGenerationRequestReasoningOptions;
  maxTokens?: number;
  tools?: AIGenerationRequestTool[];
  maxToolCalls?: number;
  schemaName?: string;
}

export interface AIGenerationRequestDirectDeepSeekOutputSpec {
  maxTokens?: number;
  reasoning?: Pick<
    AIGenerationRequestReasoningOptions,
    "enabled" | "effort"
  > & {
    exclude?: never;
    max_tokens?: never;
  };
  provider?: never;
  tools?: never;
  maxToolCalls?: never;
  schemaName?: never;
}

export type AIGenerationRequestTextConfiguration =
  | {
      adapter: AIGenerationRequestDirectDeepSeekAdapter;
      outputSpec?: AIGenerationRequestDirectDeepSeekOutputSpec;
    }
  | {
      adapter: AIGenerationRequestOpenRouterAdapter;
      outputSpec?: AIGenerationRequestTextOutputSpec;
    };

export type AIGenerationRequestImageOutputFormat = "jpeg" | "png" | "webp";

export type AIGenerationRequestImageQuality =
  | "auto"
  | "low"
  | "medium"
  | "high";

export type AIGenerationRequestImageBackground =
  | "auto"
  | "transparent"
  | "opaque";

export interface AIGenerationRequestImageConfig {
  aspect_ratio?: string;
  background?: AIGenerationRequestImageBackground | string;
  output_compression?: number;
  output_format?: AIGenerationRequestImageOutputFormat | string;
  quality?: AIGenerationRequestImageQuality | string;
  size?: string;
  style?: string;
}

export interface AIGenerationRequestImageOutputSpec {
  imageConfig?: AIGenerationRequestImageConfig;
  image_config?: AIGenerationRequestImageConfig;
  aspectRatio?: string;
  aspect_ratio?: string;
  background?: AIGenerationRequestImageBackground | string;
  outputCompression?: number;
  output_compression?: number;
  outputFormat?: AIGenerationRequestImageOutputFormat | string;
  output_format?: AIGenerationRequestImageOutputFormat | string;
  quality?: AIGenerationRequestImageQuality | string;
  size?: string;
  style?: string;
  modalities?: Array<"image" | "text">;
}

export type AIGenerationRequestAudioResponseFormat = "mp3" | "wav";

export enum AIGenerationRequestAudioVoice {
  zephyr = "Zephyr",
  puck = "Puck",
  charon = "Charon",
  kore = "Kore",
  fenrir = "Fenrir",
  leda = "Leda",
  orus = "Orus",
  aoede = "Aoede",
  callirrhoe = "Callirrhoe",
  autonoe = "Autonoe",
  enceladus = "Enceladus",
  iapetus = "Iapetus",
  umbriel = "Umbriel",
  algieba = "Algieba",
  despina = "Despina",
  erinome = "Erinome",
  algenib = "Algenib",
  rasalgethi = "Rasalgethi",
  laomedeia = "Laomedeia",
  achernar = "Achernar",
  alnilam = "Alnilam",
  schedar = "Schedar",
  gacrux = "Gacrux",
  pulcherrima = "Pulcherrima",
  achird = "Achird",
  zubenelgenubi = "Zubenelgenubi",
  vindemiatrix = "Vindemiatrix",
  sadachbia = "Sadachbia",
  sadaltager = "Sadaltager",
  sulafat = "Sulafat",
}

export interface AIGenerationRequestAudioOutputSpec {
  instructions?: string;
  provider?: any;
  responseFormat?: AIGenerationRequestAudioResponseFormat | string;
  response_format?: AIGenerationRequestAudioResponseFormat | string;
  speed?: number;
  voice?: string;
}

export interface AIGenerationRequestOutputSpecByModality {
  [AIGenerationRequestModality.text]: AIGenerationRequestTextOutputSpec;
  [AIGenerationRequestModality.image]: AIGenerationRequestImageOutputSpec;
  [AIGenerationRequestModality.audio]: AIGenerationRequestAudioOutputSpec;
}

export type AIGenerationRequestOutputSpecForModality<
  M extends AIGenerationRequestModality,
> = AIGenerationRequestOutputSpecByModality[M];

export interface AIGenerationRequestResult {
  text?: string;
  object?: any;
}

export interface AIGenerationRequestResultByModality {
  [AIGenerationRequestModality.text]: AIGenerationRequestResult;
  [AIGenerationRequestModality.image]: AIGenerationRequestResult;
  [AIGenerationRequestModality.audio]: AIGenerationRequestResult;
}

export type AIGenerationRequestResultForModality<
  M extends AIGenerationRequestModality,
> = AIGenerationRequestResultByModality[M];

export enum AIGenerationRequestStatus {
  created = "created",
  completed = "completed",
  failed = "failed",
}

export enum AIGenerationArtifactKind {
  image = "image",
  audio = "audio",
}

export enum AIGenerationArtifactMimeType {
  imageJPEG = "image/jpeg",
  imagePNG = "image/png",
  imageWEBP = "image/webp",
  audioMPEG = "audio/mpeg",
  audioOGG = "audio/ogg",
  audioWAV = "audio/wav",
}
