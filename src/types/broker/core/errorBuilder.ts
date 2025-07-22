export interface BrokerCoreErrorBuilderThrowPayload {
  errorBuilder: CoreErrorBuilder;
}

interface CoreErrorBuilder {
  userUUID: string;
  messages: string[];
}
