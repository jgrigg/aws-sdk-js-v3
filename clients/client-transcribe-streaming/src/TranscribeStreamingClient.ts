// smithy-typescript generated code
import {
  EventStreamInputConfig,
  EventStreamResolvedConfig,
  resolveEventStreamConfig,
} from "@aws-sdk/middleware-eventstream";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getTranscribeStreamingPlugin } from "@aws-sdk/middleware-sdk-transcribe-streaming";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { resolveWebSocketConfig, WebSocketInputConfig, WebSocketResolvedConfig } from "@aws-sdk/middleware-websocket";
import {
  Credentials as __Credentials,
  EventStreamPayloadHandlerProvider as __EventStreamPayloadHandlerProvider,
} from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  StartCallAnalyticsStreamTranscriptionCommandInput,
  StartCallAnalyticsStreamTranscriptionCommandOutput,
} from "./commands/StartCallAnalyticsStreamTranscriptionCommand";
import {
  StartMedicalStreamTranscriptionCommandInput,
  StartMedicalStreamTranscriptionCommandOutput,
} from "./commands/StartMedicalStreamTranscriptionCommand";
import {
  StartStreamTranscriptionCommandInput,
  StartStreamTranscriptionCommandOutput,
} from "./commands/StartStreamTranscriptionCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | StartCallAnalyticsStreamTranscriptionCommandInput
  | StartMedicalStreamTranscriptionCommandInput
  | StartStreamTranscriptionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | StartCallAnalyticsStreamTranscriptionCommandOutput
  | StartMedicalStreamTranscriptionCommandOutput
  | StartStreamTranscriptionCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The function that provides necessary utilities for handling request event stream.
   * @internal
   */
  eventStreamPayloadHandlerProvider?: __EventStreamPayloadHandlerProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type TranscribeStreamingClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  EventStreamInputConfig &
  WebSocketInputConfig &
  UserAgentInputConfig &
  RetryInputConfig &
  EventStreamSerdeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of TranscribeStreamingClient class constructor that set the region, credentials and other options.
 */
export interface TranscribeStreamingClientConfig extends TranscribeStreamingClientConfigType {}

/**
 * @public
 */
export type TranscribeStreamingClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  EventStreamResolvedConfig &
  WebSocketResolvedConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  EventStreamSerdeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of TranscribeStreamingClient class. This is resolved and normalized from the {@link TranscribeStreamingClientConfig | constructor configuration interface}.
 */
export interface TranscribeStreamingClientResolvedConfig extends TranscribeStreamingClientResolvedConfigType {}

/**
 * <p>Amazon Transcribe streaming offers three main types of real-time transcription:
 *       <b>Standard</b>, <b>Medical</b>, and
 *       <b>Call Analytics</b>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Standard transcriptions</b> are the most common option. Refer
 *       to  for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Medical transcriptions</b> are tailored to medical professionals
 *       and incorporate medical terms. A common use case for this service is transcribing doctor-patient
 *       dialogue in real time, so doctors can focus on their patient instead of taking notes. Refer to
 *        for details.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Call Analytics transcriptions</b> are designed for use with call
 *           center audio on two different channels; if you're looking for insight into customer service calls, use this
 *           option. Refer to  for details.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class TranscribeStreamingClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  TranscribeStreamingClientResolvedConfig
> {
  /**
   * The resolved configuration of TranscribeStreamingClient class. This is resolved and normalized from the {@link TranscribeStreamingClientConfig | constructor configuration interface}.
   */
  readonly config: TranscribeStreamingClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<TranscribeStreamingClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveEventStreamConfig(_config_5);
    const _config_7 = resolveWebSocketConfig(_config_6);
    const _config_8 = resolveUserAgentConfig(_config_7);
    const _config_9 = resolveRetryConfig(_config_8);
    const _config_10 = resolveEventStreamSerdeConfig(_config_9);
    const _config_11 = resolveRuntimeExtensions(_config_10, configuration?.extensions || []);
    super(_config_11);
    this.config = _config_11;
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getTranscribeStreamingPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
