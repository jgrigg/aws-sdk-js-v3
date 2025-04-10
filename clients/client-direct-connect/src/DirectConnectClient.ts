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
  defaultDirectConnectHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptDirectConnectGatewayAssociationProposalCommandInput,
  AcceptDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/AcceptDirectConnectGatewayAssociationProposalCommand";
import {
  AllocateConnectionOnInterconnectCommandInput,
  AllocateConnectionOnInterconnectCommandOutput,
} from "./commands/AllocateConnectionOnInterconnectCommand";
import {
  AllocateHostedConnectionCommandInput,
  AllocateHostedConnectionCommandOutput,
} from "./commands/AllocateHostedConnectionCommand";
import {
  AllocatePrivateVirtualInterfaceCommandInput,
  AllocatePrivateVirtualInterfaceCommandOutput,
} from "./commands/AllocatePrivateVirtualInterfaceCommand";
import {
  AllocatePublicVirtualInterfaceCommandInput,
  AllocatePublicVirtualInterfaceCommandOutput,
} from "./commands/AllocatePublicVirtualInterfaceCommand";
import {
  AllocateTransitVirtualInterfaceCommandInput,
  AllocateTransitVirtualInterfaceCommandOutput,
} from "./commands/AllocateTransitVirtualInterfaceCommand";
import {
  AssociateConnectionWithLagCommandInput,
  AssociateConnectionWithLagCommandOutput,
} from "./commands/AssociateConnectionWithLagCommand";
import {
  AssociateHostedConnectionCommandInput,
  AssociateHostedConnectionCommandOutput,
} from "./commands/AssociateHostedConnectionCommand";
import { AssociateMacSecKeyCommandInput, AssociateMacSecKeyCommandOutput } from "./commands/AssociateMacSecKeyCommand";
import {
  AssociateVirtualInterfaceCommandInput,
  AssociateVirtualInterfaceCommandOutput,
} from "./commands/AssociateVirtualInterfaceCommand";
import { ConfirmConnectionCommandInput, ConfirmConnectionCommandOutput } from "./commands/ConfirmConnectionCommand";
import {
  ConfirmCustomerAgreementCommandInput,
  ConfirmCustomerAgreementCommandOutput,
} from "./commands/ConfirmCustomerAgreementCommand";
import {
  ConfirmPrivateVirtualInterfaceCommandInput,
  ConfirmPrivateVirtualInterfaceCommandOutput,
} from "./commands/ConfirmPrivateVirtualInterfaceCommand";
import {
  ConfirmPublicVirtualInterfaceCommandInput,
  ConfirmPublicVirtualInterfaceCommandOutput,
} from "./commands/ConfirmPublicVirtualInterfaceCommand";
import {
  ConfirmTransitVirtualInterfaceCommandInput,
  ConfirmTransitVirtualInterfaceCommandOutput,
} from "./commands/ConfirmTransitVirtualInterfaceCommand";
import { CreateBGPPeerCommandInput, CreateBGPPeerCommandOutput } from "./commands/CreateBGPPeerCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "./commands/CreateConnectionCommand";
import {
  CreateDirectConnectGatewayAssociationCommandInput,
  CreateDirectConnectGatewayAssociationCommandOutput,
} from "./commands/CreateDirectConnectGatewayAssociationCommand";
import {
  CreateDirectConnectGatewayAssociationProposalCommandInput,
  CreateDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/CreateDirectConnectGatewayAssociationProposalCommand";
import {
  CreateDirectConnectGatewayCommandInput,
  CreateDirectConnectGatewayCommandOutput,
} from "./commands/CreateDirectConnectGatewayCommand";
import { CreateInterconnectCommandInput, CreateInterconnectCommandOutput } from "./commands/CreateInterconnectCommand";
import { CreateLagCommandInput, CreateLagCommandOutput } from "./commands/CreateLagCommand";
import {
  CreatePrivateVirtualInterfaceCommandInput,
  CreatePrivateVirtualInterfaceCommandOutput,
} from "./commands/CreatePrivateVirtualInterfaceCommand";
import {
  CreatePublicVirtualInterfaceCommandInput,
  CreatePublicVirtualInterfaceCommandOutput,
} from "./commands/CreatePublicVirtualInterfaceCommand";
import {
  CreateTransitVirtualInterfaceCommandInput,
  CreateTransitVirtualInterfaceCommandOutput,
} from "./commands/CreateTransitVirtualInterfaceCommand";
import { DeleteBGPPeerCommandInput, DeleteBGPPeerCommandOutput } from "./commands/DeleteBGPPeerCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "./commands/DeleteConnectionCommand";
import {
  DeleteDirectConnectGatewayAssociationCommandInput,
  DeleteDirectConnectGatewayAssociationCommandOutput,
} from "./commands/DeleteDirectConnectGatewayAssociationCommand";
import {
  DeleteDirectConnectGatewayAssociationProposalCommandInput,
  DeleteDirectConnectGatewayAssociationProposalCommandOutput,
} from "./commands/DeleteDirectConnectGatewayAssociationProposalCommand";
import {
  DeleteDirectConnectGatewayCommandInput,
  DeleteDirectConnectGatewayCommandOutput,
} from "./commands/DeleteDirectConnectGatewayCommand";
import { DeleteInterconnectCommandInput, DeleteInterconnectCommandOutput } from "./commands/DeleteInterconnectCommand";
import { DeleteLagCommandInput, DeleteLagCommandOutput } from "./commands/DeleteLagCommand";
import {
  DeleteVirtualInterfaceCommandInput,
  DeleteVirtualInterfaceCommandOutput,
} from "./commands/DeleteVirtualInterfaceCommand";
import {
  DescribeConnectionLoaCommandInput,
  DescribeConnectionLoaCommandOutput,
} from "./commands/DescribeConnectionLoaCommand";
import {
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "./commands/DescribeConnectionsCommand";
import {
  DescribeConnectionsOnInterconnectCommandInput,
  DescribeConnectionsOnInterconnectCommandOutput,
} from "./commands/DescribeConnectionsOnInterconnectCommand";
import {
  DescribeCustomerMetadataCommandInput,
  DescribeCustomerMetadataCommandOutput,
} from "./commands/DescribeCustomerMetadataCommand";
import {
  DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAssociationProposalsCommand";
import {
  DescribeDirectConnectGatewayAssociationsCommandInput,
  DescribeDirectConnectGatewayAssociationsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAssociationsCommand";
import {
  DescribeDirectConnectGatewayAttachmentsCommandInput,
  DescribeDirectConnectGatewayAttachmentsCommandOutput,
} from "./commands/DescribeDirectConnectGatewayAttachmentsCommand";
import {
  DescribeDirectConnectGatewaysCommandInput,
  DescribeDirectConnectGatewaysCommandOutput,
} from "./commands/DescribeDirectConnectGatewaysCommand";
import {
  DescribeHostedConnectionsCommandInput,
  DescribeHostedConnectionsCommandOutput,
} from "./commands/DescribeHostedConnectionsCommand";
import {
  DescribeInterconnectLoaCommandInput,
  DescribeInterconnectLoaCommandOutput,
} from "./commands/DescribeInterconnectLoaCommand";
import {
  DescribeInterconnectsCommandInput,
  DescribeInterconnectsCommandOutput,
} from "./commands/DescribeInterconnectsCommand";
import { DescribeLagsCommandInput, DescribeLagsCommandOutput } from "./commands/DescribeLagsCommand";
import { DescribeLoaCommandInput, DescribeLoaCommandOutput } from "./commands/DescribeLoaCommand";
import { DescribeLocationsCommandInput, DescribeLocationsCommandOutput } from "./commands/DescribeLocationsCommand";
import {
  DescribeRouterConfigurationCommandInput,
  DescribeRouterConfigurationCommandOutput,
} from "./commands/DescribeRouterConfigurationCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import {
  DescribeVirtualGatewaysCommandInput,
  DescribeVirtualGatewaysCommandOutput,
} from "./commands/DescribeVirtualGatewaysCommand";
import {
  DescribeVirtualInterfacesCommandInput,
  DescribeVirtualInterfacesCommandOutput,
} from "./commands/DescribeVirtualInterfacesCommand";
import {
  DisassociateConnectionFromLagCommandInput,
  DisassociateConnectionFromLagCommandOutput,
} from "./commands/DisassociateConnectionFromLagCommand";
import {
  DisassociateMacSecKeyCommandInput,
  DisassociateMacSecKeyCommandOutput,
} from "./commands/DisassociateMacSecKeyCommand";
import {
  ListVirtualInterfaceTestHistoryCommandInput,
  ListVirtualInterfaceTestHistoryCommandOutput,
} from "./commands/ListVirtualInterfaceTestHistoryCommand";
import {
  StartBgpFailoverTestCommandInput,
  StartBgpFailoverTestCommandOutput,
} from "./commands/StartBgpFailoverTestCommand";
import {
  StopBgpFailoverTestCommandInput,
  StopBgpFailoverTestCommandOutput,
} from "./commands/StopBgpFailoverTestCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "./commands/UpdateConnectionCommand";
import {
  UpdateDirectConnectGatewayAssociationCommandInput,
  UpdateDirectConnectGatewayAssociationCommandOutput,
} from "./commands/UpdateDirectConnectGatewayAssociationCommand";
import {
  UpdateDirectConnectGatewayCommandInput,
  UpdateDirectConnectGatewayCommandOutput,
} from "./commands/UpdateDirectConnectGatewayCommand";
import { UpdateLagCommandInput, UpdateLagCommandOutput } from "./commands/UpdateLagCommand";
import {
  UpdateVirtualInterfaceAttributesCommandInput,
  UpdateVirtualInterfaceAttributesCommandOutput,
} from "./commands/UpdateVirtualInterfaceAttributesCommand";
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
  | AcceptDirectConnectGatewayAssociationProposalCommandInput
  | AllocateConnectionOnInterconnectCommandInput
  | AllocateHostedConnectionCommandInput
  | AllocatePrivateVirtualInterfaceCommandInput
  | AllocatePublicVirtualInterfaceCommandInput
  | AllocateTransitVirtualInterfaceCommandInput
  | AssociateConnectionWithLagCommandInput
  | AssociateHostedConnectionCommandInput
  | AssociateMacSecKeyCommandInput
  | AssociateVirtualInterfaceCommandInput
  | ConfirmConnectionCommandInput
  | ConfirmCustomerAgreementCommandInput
  | ConfirmPrivateVirtualInterfaceCommandInput
  | ConfirmPublicVirtualInterfaceCommandInput
  | ConfirmTransitVirtualInterfaceCommandInput
  | CreateBGPPeerCommandInput
  | CreateConnectionCommandInput
  | CreateDirectConnectGatewayAssociationCommandInput
  | CreateDirectConnectGatewayAssociationProposalCommandInput
  | CreateDirectConnectGatewayCommandInput
  | CreateInterconnectCommandInput
  | CreateLagCommandInput
  | CreatePrivateVirtualInterfaceCommandInput
  | CreatePublicVirtualInterfaceCommandInput
  | CreateTransitVirtualInterfaceCommandInput
  | DeleteBGPPeerCommandInput
  | DeleteConnectionCommandInput
  | DeleteDirectConnectGatewayAssociationCommandInput
  | DeleteDirectConnectGatewayAssociationProposalCommandInput
  | DeleteDirectConnectGatewayCommandInput
  | DeleteInterconnectCommandInput
  | DeleteLagCommandInput
  | DeleteVirtualInterfaceCommandInput
  | DescribeConnectionLoaCommandInput
  | DescribeConnectionsCommandInput
  | DescribeConnectionsOnInterconnectCommandInput
  | DescribeCustomerMetadataCommandInput
  | DescribeDirectConnectGatewayAssociationProposalsCommandInput
  | DescribeDirectConnectGatewayAssociationsCommandInput
  | DescribeDirectConnectGatewayAttachmentsCommandInput
  | DescribeDirectConnectGatewaysCommandInput
  | DescribeHostedConnectionsCommandInput
  | DescribeInterconnectLoaCommandInput
  | DescribeInterconnectsCommandInput
  | DescribeLagsCommandInput
  | DescribeLoaCommandInput
  | DescribeLocationsCommandInput
  | DescribeRouterConfigurationCommandInput
  | DescribeTagsCommandInput
  | DescribeVirtualGatewaysCommandInput
  | DescribeVirtualInterfacesCommandInput
  | DisassociateConnectionFromLagCommandInput
  | DisassociateMacSecKeyCommandInput
  | ListVirtualInterfaceTestHistoryCommandInput
  | StartBgpFailoverTestCommandInput
  | StopBgpFailoverTestCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateConnectionCommandInput
  | UpdateDirectConnectGatewayAssociationCommandInput
  | UpdateDirectConnectGatewayCommandInput
  | UpdateLagCommandInput
  | UpdateVirtualInterfaceAttributesCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptDirectConnectGatewayAssociationProposalCommandOutput
  | AllocateConnectionOnInterconnectCommandOutput
  | AllocateHostedConnectionCommandOutput
  | AllocatePrivateVirtualInterfaceCommandOutput
  | AllocatePublicVirtualInterfaceCommandOutput
  | AllocateTransitVirtualInterfaceCommandOutput
  | AssociateConnectionWithLagCommandOutput
  | AssociateHostedConnectionCommandOutput
  | AssociateMacSecKeyCommandOutput
  | AssociateVirtualInterfaceCommandOutput
  | ConfirmConnectionCommandOutput
  | ConfirmCustomerAgreementCommandOutput
  | ConfirmPrivateVirtualInterfaceCommandOutput
  | ConfirmPublicVirtualInterfaceCommandOutput
  | ConfirmTransitVirtualInterfaceCommandOutput
  | CreateBGPPeerCommandOutput
  | CreateConnectionCommandOutput
  | CreateDirectConnectGatewayAssociationCommandOutput
  | CreateDirectConnectGatewayAssociationProposalCommandOutput
  | CreateDirectConnectGatewayCommandOutput
  | CreateInterconnectCommandOutput
  | CreateLagCommandOutput
  | CreatePrivateVirtualInterfaceCommandOutput
  | CreatePublicVirtualInterfaceCommandOutput
  | CreateTransitVirtualInterfaceCommandOutput
  | DeleteBGPPeerCommandOutput
  | DeleteConnectionCommandOutput
  | DeleteDirectConnectGatewayAssociationCommandOutput
  | DeleteDirectConnectGatewayAssociationProposalCommandOutput
  | DeleteDirectConnectGatewayCommandOutput
  | DeleteInterconnectCommandOutput
  | DeleteLagCommandOutput
  | DeleteVirtualInterfaceCommandOutput
  | DescribeConnectionLoaCommandOutput
  | DescribeConnectionsCommandOutput
  | DescribeConnectionsOnInterconnectCommandOutput
  | DescribeCustomerMetadataCommandOutput
  | DescribeDirectConnectGatewayAssociationProposalsCommandOutput
  | DescribeDirectConnectGatewayAssociationsCommandOutput
  | DescribeDirectConnectGatewayAttachmentsCommandOutput
  | DescribeDirectConnectGatewaysCommandOutput
  | DescribeHostedConnectionsCommandOutput
  | DescribeInterconnectLoaCommandOutput
  | DescribeInterconnectsCommandOutput
  | DescribeLagsCommandOutput
  | DescribeLoaCommandOutput
  | DescribeLocationsCommandOutput
  | DescribeRouterConfigurationCommandOutput
  | DescribeTagsCommandOutput
  | DescribeVirtualGatewaysCommandOutput
  | DescribeVirtualInterfacesCommandOutput
  | DisassociateConnectionFromLagCommandOutput
  | DisassociateMacSecKeyCommandOutput
  | ListVirtualInterfaceTestHistoryCommandOutput
  | StartBgpFailoverTestCommandOutput
  | StopBgpFailoverTestCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateConnectionCommandOutput
  | UpdateDirectConnectGatewayAssociationCommandOutput
  | UpdateDirectConnectGatewayCommandOutput
  | UpdateLagCommandOutput
  | UpdateVirtualInterfaceAttributesCommandOutput;

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
export type DirectConnectClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of DirectConnectClient class constructor that set the region, credentials and other options.
 */
export interface DirectConnectClientConfig extends DirectConnectClientConfigType {}

/**
 * @public
 */
export type DirectConnectClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of DirectConnectClient class. This is resolved and normalized from the {@link DirectConnectClientConfig | constructor configuration interface}.
 */
export interface DirectConnectClientResolvedConfig extends DirectConnectClientResolvedConfigType {}

/**
 * <p>Direct Connect links your internal network to an Direct Connect location over a standard Ethernet fiber-optic cable.
 *       One end of the cable is connected to your router, the other to an Direct Connect router. With this connection
 *       in place, you can create virtual interfaces directly to the Amazon Web Services Cloud (for example, to Amazon EC2
 *       and Amazon S3) and to Amazon VPC, bypassing Internet service providers in your network path. A
 *       connection provides access to all Amazon Web Services Regions except the China (Beijing) and (China) Ningxia Regions.
 *       Amazon Web Services resources in the China Regions can only be accessed through locations associated with those Regions.</p>
 * @public
 */
export class DirectConnectClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DirectConnectClientResolvedConfig
> {
  /**
   * The resolved configuration of DirectConnectClient class. This is resolved and normalized from the {@link DirectConnectClientConfig | constructor configuration interface}.
   */
  readonly config: DirectConnectClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<DirectConnectClientConfig>) {
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
    return defaultDirectConnectHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: DirectConnectClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
