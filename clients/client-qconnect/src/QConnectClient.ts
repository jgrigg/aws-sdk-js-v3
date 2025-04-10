// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
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
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
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
  defaultQConnectHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
} from "./commands/CreateAssistantAssociationCommand";
import { CreateAssistantCommandInput, CreateAssistantCommandOutput } from "./commands/CreateAssistantCommand";
import {
  CreateContentAssociationCommandInput,
  CreateContentAssociationCommandOutput,
} from "./commands/CreateContentAssociationCommand";
import { CreateContentCommandInput, CreateContentCommandOutput } from "./commands/CreateContentCommand";
import {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import {
  CreateQuickResponseCommandInput,
  CreateQuickResponseCommandOutput,
} from "./commands/CreateQuickResponseCommand";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "./commands/CreateSessionCommand";
import {
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "./commands/DeleteAssistantAssociationCommand";
import { DeleteAssistantCommandInput, DeleteAssistantCommandOutput } from "./commands/DeleteAssistantCommand";
import {
  DeleteContentAssociationCommandInput,
  DeleteContentAssociationCommandOutput,
} from "./commands/DeleteContentAssociationCommand";
import { DeleteContentCommandInput, DeleteContentCommandOutput } from "./commands/DeleteContentCommand";
import { DeleteImportJobCommandInput, DeleteImportJobCommandOutput } from "./commands/DeleteImportJobCommand";
import {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import {
  DeleteQuickResponseCommandInput,
  DeleteQuickResponseCommandOutput,
} from "./commands/DeleteQuickResponseCommand";
import {
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "./commands/GetAssistantAssociationCommand";
import { GetAssistantCommandInput, GetAssistantCommandOutput } from "./commands/GetAssistantCommand";
import {
  GetContentAssociationCommandInput,
  GetContentAssociationCommandOutput,
} from "./commands/GetContentAssociationCommand";
import { GetContentCommandInput, GetContentCommandOutput } from "./commands/GetContentCommand";
import { GetContentSummaryCommandInput, GetContentSummaryCommandOutput } from "./commands/GetContentSummaryCommand";
import { GetImportJobCommandInput, GetImportJobCommandOutput } from "./commands/GetImportJobCommand";
import { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "./commands/GetKnowledgeBaseCommand";
import { GetQuickResponseCommandInput, GetQuickResponseCommandOutput } from "./commands/GetQuickResponseCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "./commands/GetRecommendationsCommand";
import { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "./commands/ListAssistantAssociationsCommand";
import { ListAssistantsCommandInput, ListAssistantsCommandOutput } from "./commands/ListAssistantsCommand";
import {
  ListContentAssociationsCommandInput,
  ListContentAssociationsCommandOutput,
} from "./commands/ListContentAssociationsCommand";
import { ListContentsCommandInput, ListContentsCommandOutput } from "./commands/ListContentsCommand";
import { ListImportJobsCommandInput, ListImportJobsCommandOutput } from "./commands/ListImportJobsCommand";
import { ListKnowledgeBasesCommandInput, ListKnowledgeBasesCommandOutput } from "./commands/ListKnowledgeBasesCommand";
import { ListQuickResponsesCommandInput, ListQuickResponsesCommandOutput } from "./commands/ListQuickResponsesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
} from "./commands/NotifyRecommendationsReceivedCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import { QueryAssistantCommandInput, QueryAssistantCommandOutput } from "./commands/QueryAssistantCommand";
import {
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/RemoveKnowledgeBaseTemplateUriCommand";
import { SearchContentCommandInput, SearchContentCommandOutput } from "./commands/SearchContentCommand";
import {
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "./commands/SearchQuickResponsesCommand";
import { SearchSessionsCommandInput, SearchSessionsCommandOutput } from "./commands/SearchSessionsCommand";
import { StartContentUploadCommandInput, StartContentUploadCommandOutput } from "./commands/StartContentUploadCommand";
import { StartImportJobCommandInput, StartImportJobCommandOutput } from "./commands/StartImportJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateContentCommandInput, UpdateContentCommandOutput } from "./commands/UpdateContentCommand";
import {
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/UpdateKnowledgeBaseTemplateUriCommand";
import {
  UpdateQuickResponseCommandInput,
  UpdateQuickResponseCommandOutput,
} from "./commands/UpdateQuickResponseCommand";
import { UpdateSessionCommandInput, UpdateSessionCommandOutput } from "./commands/UpdateSessionCommand";
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
  | CreateAssistantAssociationCommandInput
  | CreateAssistantCommandInput
  | CreateContentAssociationCommandInput
  | CreateContentCommandInput
  | CreateKnowledgeBaseCommandInput
  | CreateQuickResponseCommandInput
  | CreateSessionCommandInput
  | DeleteAssistantAssociationCommandInput
  | DeleteAssistantCommandInput
  | DeleteContentAssociationCommandInput
  | DeleteContentCommandInput
  | DeleteImportJobCommandInput
  | DeleteKnowledgeBaseCommandInput
  | DeleteQuickResponseCommandInput
  | GetAssistantAssociationCommandInput
  | GetAssistantCommandInput
  | GetContentAssociationCommandInput
  | GetContentCommandInput
  | GetContentSummaryCommandInput
  | GetImportJobCommandInput
  | GetKnowledgeBaseCommandInput
  | GetQuickResponseCommandInput
  | GetRecommendationsCommandInput
  | GetSessionCommandInput
  | ListAssistantAssociationsCommandInput
  | ListAssistantsCommandInput
  | ListContentAssociationsCommandInput
  | ListContentsCommandInput
  | ListImportJobsCommandInput
  | ListKnowledgeBasesCommandInput
  | ListQuickResponsesCommandInput
  | ListTagsForResourceCommandInput
  | NotifyRecommendationsReceivedCommandInput
  | PutFeedbackCommandInput
  | QueryAssistantCommandInput
  | RemoveKnowledgeBaseTemplateUriCommandInput
  | SearchContentCommandInput
  | SearchQuickResponsesCommandInput
  | SearchSessionsCommandInput
  | StartContentUploadCommandInput
  | StartImportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateContentCommandInput
  | UpdateKnowledgeBaseTemplateUriCommandInput
  | UpdateQuickResponseCommandInput
  | UpdateSessionCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateAssistantAssociationCommandOutput
  | CreateAssistantCommandOutput
  | CreateContentAssociationCommandOutput
  | CreateContentCommandOutput
  | CreateKnowledgeBaseCommandOutput
  | CreateQuickResponseCommandOutput
  | CreateSessionCommandOutput
  | DeleteAssistantAssociationCommandOutput
  | DeleteAssistantCommandOutput
  | DeleteContentAssociationCommandOutput
  | DeleteContentCommandOutput
  | DeleteImportJobCommandOutput
  | DeleteKnowledgeBaseCommandOutput
  | DeleteQuickResponseCommandOutput
  | GetAssistantAssociationCommandOutput
  | GetAssistantCommandOutput
  | GetContentAssociationCommandOutput
  | GetContentCommandOutput
  | GetContentSummaryCommandOutput
  | GetImportJobCommandOutput
  | GetKnowledgeBaseCommandOutput
  | GetQuickResponseCommandOutput
  | GetRecommendationsCommandOutput
  | GetSessionCommandOutput
  | ListAssistantAssociationsCommandOutput
  | ListAssistantsCommandOutput
  | ListContentAssociationsCommandOutput
  | ListContentsCommandOutput
  | ListImportJobsCommandOutput
  | ListKnowledgeBasesCommandOutput
  | ListQuickResponsesCommandOutput
  | ListTagsForResourceCommandOutput
  | NotifyRecommendationsReceivedCommandOutput
  | PutFeedbackCommandOutput
  | QueryAssistantCommandOutput
  | RemoveKnowledgeBaseTemplateUriCommandOutput
  | SearchContentCommandOutput
  | SearchQuickResponsesCommandOutput
  | SearchSessionsCommandOutput
  | StartContentUploadCommandOutput
  | StartImportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateContentCommandOutput
  | UpdateKnowledgeBaseTemplateUriCommandOutput
  | UpdateQuickResponseCommandOutput
  | UpdateSessionCommandOutput;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type QConnectClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  RetryInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of QConnectClient class constructor that set the region, credentials and other options.
 */
export interface QConnectClientConfig extends QConnectClientConfigType {}

/**
 * @public
 */
export type QConnectClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of QConnectClient class. This is resolved and normalized from the {@link QConnectClientConfig | constructor configuration interface}.
 */
export interface QConnectClientResolvedConfig extends QConnectClientResolvedConfigType {}

/**
 * <note>
 *             <p>
 *                <b>Powered by Amazon Bedrock</b>: Amazon Web Services implements <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html">automated abuse
 *           detection</a>. Because Amazon Q in Connect is built on Amazon Bedrock, users can take full advantage of
 *         the controls implemented in Amazon Bedrock to enforce safety, security, and the responsible use of
 *         artificial intelligence (AI).</p>
 *          </note>
 *          <p>Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced
 *       evolution of Amazon Connect Wisdom that delivers real-time recommendations to help contact
 *       center agents resolve customer issues quickly and accurately.</p>
 *          <p>Amazon Q in Connect automatically detects customer intent during calls and chats using conversational
 *       analytics and natural language understanding (NLU). It then provides agents with immediate,
 *       real-time generative responses and suggested actions, and links to relevant documents and
 *       articles. Agents can also query Amazon Q in Connect directly using natural language or keywords to answer
 *       customer requests.</p>
 *          <p>Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or
 *       manage content by uploading custom files.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use Amazon Q in Connect for generative AI
 *         powered agent assistance in real-time</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 * @public
 */
export class QConnectClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QConnectClientResolvedConfig
> {
  /**
   * The resolved configuration of QConnectClient class. This is resolved and normalized from the {@link QConnectClientConfig | constructor configuration interface}.
   */
  readonly config: QConnectClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<QConnectClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveUserAgentConfig(_config_4);
    const _config_6 = resolveRetryConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultQConnectHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: QConnectClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
