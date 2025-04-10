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
  defaultSupportHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AddAttachmentsToSetCommandInput,
  AddAttachmentsToSetCommandOutput,
} from "./commands/AddAttachmentsToSetCommand";
import {
  AddCommunicationToCaseCommandInput,
  AddCommunicationToCaseCommandOutput,
} from "./commands/AddCommunicationToCaseCommand";
import { CreateCaseCommandInput, CreateCaseCommandOutput } from "./commands/CreateCaseCommand";
import { DescribeAttachmentCommandInput, DescribeAttachmentCommandOutput } from "./commands/DescribeAttachmentCommand";
import { DescribeCasesCommandInput, DescribeCasesCommandOutput } from "./commands/DescribeCasesCommand";
import {
  DescribeCommunicationsCommandInput,
  DescribeCommunicationsCommandOutput,
} from "./commands/DescribeCommunicationsCommand";
import {
  DescribeCreateCaseOptionsCommandInput,
  DescribeCreateCaseOptionsCommandOutput,
} from "./commands/DescribeCreateCaseOptionsCommand";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput } from "./commands/DescribeServicesCommand";
import {
  DescribeSeverityLevelsCommandInput,
  DescribeSeverityLevelsCommandOutput,
} from "./commands/DescribeSeverityLevelsCommand";
import {
  DescribeSupportedLanguagesCommandInput,
  DescribeSupportedLanguagesCommandOutput,
} from "./commands/DescribeSupportedLanguagesCommand";
import {
  DescribeTrustedAdvisorCheckRefreshStatusesCommandInput,
  DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckRefreshStatusesCommand";
import {
  DescribeTrustedAdvisorCheckResultCommandInput,
  DescribeTrustedAdvisorCheckResultCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckResultCommand";
import {
  DescribeTrustedAdvisorChecksCommandInput,
  DescribeTrustedAdvisorChecksCommandOutput,
} from "./commands/DescribeTrustedAdvisorChecksCommand";
import {
  DescribeTrustedAdvisorCheckSummariesCommandInput,
  DescribeTrustedAdvisorCheckSummariesCommandOutput,
} from "./commands/DescribeTrustedAdvisorCheckSummariesCommand";
import {
  RefreshTrustedAdvisorCheckCommandInput,
  RefreshTrustedAdvisorCheckCommandOutput,
} from "./commands/RefreshTrustedAdvisorCheckCommand";
import { ResolveCaseCommandInput, ResolveCaseCommandOutput } from "./commands/ResolveCaseCommand";
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
  | AddAttachmentsToSetCommandInput
  | AddCommunicationToCaseCommandInput
  | CreateCaseCommandInput
  | DescribeAttachmentCommandInput
  | DescribeCasesCommandInput
  | DescribeCommunicationsCommandInput
  | DescribeCreateCaseOptionsCommandInput
  | DescribeServicesCommandInput
  | DescribeSeverityLevelsCommandInput
  | DescribeSupportedLanguagesCommandInput
  | DescribeTrustedAdvisorCheckRefreshStatusesCommandInput
  | DescribeTrustedAdvisorCheckResultCommandInput
  | DescribeTrustedAdvisorCheckSummariesCommandInput
  | DescribeTrustedAdvisorChecksCommandInput
  | RefreshTrustedAdvisorCheckCommandInput
  | ResolveCaseCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddAttachmentsToSetCommandOutput
  | AddCommunicationToCaseCommandOutput
  | CreateCaseCommandOutput
  | DescribeAttachmentCommandOutput
  | DescribeCasesCommandOutput
  | DescribeCommunicationsCommandOutput
  | DescribeCreateCaseOptionsCommandOutput
  | DescribeServicesCommandOutput
  | DescribeSeverityLevelsCommandOutput
  | DescribeSupportedLanguagesCommandOutput
  | DescribeTrustedAdvisorCheckRefreshStatusesCommandOutput
  | DescribeTrustedAdvisorCheckResultCommandOutput
  | DescribeTrustedAdvisorCheckSummariesCommandOutput
  | DescribeTrustedAdvisorChecksCommandOutput
  | RefreshTrustedAdvisorCheckCommandOutput
  | ResolveCaseCommandOutput;

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
export type SupportClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of SupportClient class constructor that set the region, credentials and other options.
 */
export interface SupportClientConfig extends SupportClientConfigType {}

/**
 * @public
 */
export type SupportClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of SupportClient class. This is resolved and normalized from the {@link SupportClientConfig | constructor configuration interface}.
 */
export interface SupportClientResolvedConfig extends SupportClientResolvedConfigType {}

/**
 * <fullname>Amazon Web Services Support</fullname>
 *          <p>The <i>Amazon Web Services Support API Reference</i> is intended for programmers who need detailed
 *             information about the Amazon Web Services Support operations and data types. You can use the API to manage
 *             your support cases programmatically. The Amazon Web Services Support API uses HTTP methods that return
 *             results in JSON format.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 *          <p>You can also use the Amazon Web Services Support API to access features for <a href="http://aws.amazon.com/premiumsupport/trustedadvisor/">Trusted Advisor</a>. You can return a list of
 *             checks and their descriptions, get check results, specify checks to refresh, and get the
 *             refresh status of checks.</p>
 *          <p>You can manage your support cases with the following Amazon Web Services Support API operations:</p>
 *          <ul>
 *             <li>
 *                <p>The <a>CreateCase</a>, <a>DescribeCases</a>, <a>DescribeAttachment</a>, and <a>ResolveCase</a> operations
 *                     create Amazon Web Services Support cases, retrieve information about cases, and resolve cases.</p>
 *             </li>
 *             <li>
 *                <p>The <a>DescribeCommunications</a>, <a>AddCommunicationToCase</a>, and <a>AddAttachmentsToSet</a> operations retrieve and add communications and attachments to Amazon Web Services Support
 *                     cases.</p>
 *             </li>
 *             <li>
 *                <p>The <a>DescribeServices</a> and <a>DescribeSeverityLevels</a> operations return Amazon Web Service names, service codes, service categories, and problem
 *                     severity levels. You use these values when you call the <a>CreateCase</a> operation.</p>
 *             </li>
 *          </ul>
 *          <p>You can also use the Amazon Web Services Support API to call the  Trusted Advisor operations. For more
 *             information, see <a href="https://docs.aws.amazon.com/">Trusted Advisor</a> in the
 *                 <i>Amazon Web Services Support User Guide</i>.</p>
 *          <p>For authentication of requests, Amazon Web Services Support uses <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing
 *                 Process</a>.</p>
 *          <p>For more information about this service and the endpoints to use, see <a href="https://docs.aws.amazon.com/awssupport/latest/user/about-support-api.html">About the
 *                 Amazon Web Services Support API</a> in the <i>Amazon Web Services Support User Guide</i>.</p>
 * @public
 */
export class SupportClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SupportClientResolvedConfig
> {
  /**
   * The resolved configuration of SupportClient class. This is resolved and normalized from the {@link SupportClientConfig | constructor configuration interface}.
   */
  readonly config: SupportClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<SupportClientConfig>) {
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
    return defaultSupportHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: SupportClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
