// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DataZoneServiceException as __BaseException } from "./DataZoneServiceException";

/**
 * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the
 *          target (for example, a column name) that can be accepted.</p>
 * @public
 */
export interface AcceptChoice {
  /**
   * <p>Specifies the target (for example, a column name) where a prediction can be
   *          accepted.</p>
   * @public
   */
  predictionTarget: string | undefined;

  /**
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) that can
   *          be accepted.</p>
   * @public
   */
  predictionChoice?: number;

  /**
   * <p>The edit of the prediction.</p>
   * @public
   */
  editedValue?: string;
}

/**
 * @public
 * @enum
 */
export const AcceptRuleBehavior = {
  ALL: "ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type AcceptRuleBehavior = (typeof AcceptRuleBehavior)[keyof typeof AcceptRuleBehavior];

/**
 * <p>Specifies the rule and the threshold under which a prediction can be accepted.</p>
 * @public
 */
export interface AcceptRule {
  /**
   * <p>Specifies whether you want to accept the top prediction for all targets or none.</p>
   * @public
   */
  rule?: AcceptRuleBehavior;

  /**
   * <p>The confidence score that specifies the condition at which a prediction can be
   *          accepted.</p>
   * @public
   */
  threshold?: number;
}

/**
 * @public
 */
export interface AcceptPredictionsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  revision?: string;

  /**
   * <p>Specifies the rule (or the conditions) under which a prediction can be accepted.</p>
   * @public
   */
  acceptRule?: AcceptRule;

  /**
   * <p>Specifies the prediction (aka, the automatically generated piece of metadata) and the
   *          target (for example, a column name) that can be accepted.</p>
   * @public
   */
  acceptChoices?: AcceptChoice[];

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is
   *          automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface AcceptPredictionsOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The revision that is to be made to the asset.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>There is a conflict while performing this action.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>The request has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The specified resource cannot be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>You do not have permission to perform this action.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface AcceptSubscriptionRequestInput {
  /**
   * <p>The Amazon DataZone domain where the specified subscription request is being accepted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the subscription request that is to be accepted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A description that specifies the reason for accepting the specified subscription
   *          request.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * @public
 * @enum
 */
export const SubscriptionRequestStatus = {
  ACCEPTED: "ACCEPTED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type SubscriptionRequestStatus = (typeof SubscriptionRequestStatus)[keyof typeof SubscriptionRequestStatus];

/**
 * <p>Details of a glossary term attached to the inventory asset.</p>
 * @public
 */
export interface DetailedGlossaryTerm {
  /**
   * <p>The name of a glossary term attached to the inventory asset.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The shoft description of a glossary term attached to the inventory asset.</p>
   * @public
   */
  shortDescription?: string;
}

/**
 * <p>The details of the published asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedAssetListing {
  /**
   * <p>The identifier of the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  entityId?: string;

  /**
   * <p>The revision of the published asset for which the subscription grant is created.</p>
   * @public
   */
  entityRevision?: string;

  /**
   * <p>The type of the published asset for which the subscription grant is created.</p>
   * @public
   */
  entityType?: string;

  /**
   * <p>The forms attached to the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  forms?: string;

  /**
   * <p>The glossary terms attached to the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[];
}

/**
 * <p>The published asset for which the subscription grant is created.</p>
 * @public
 */
export type SubscribedListingItem = SubscribedListingItem.AssetListingMember | SubscribedListingItem.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedListingItem {
  /**
   * <p>The asset for which the subscription grant is created.</p>
   * @public
   */
  export interface AssetListingMember {
    assetListing: SubscribedAssetListing;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    assetListing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    assetListing: (value: SubscribedAssetListing) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SubscribedListingItem, visitor: Visitor<T>): T => {
    if (value.assetListing !== undefined) return visitor.assetListing(value.assetListing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The details of the published asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedListing {
  /**
   * <p>The identifier of the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revision of the published asset for which the subscription grant is created.</p>
   * @public
   */
  revision?: string;

  /**
   * <p>The name of the published asset for which the subscription grant is created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The published asset for which the subscription grant is created.</p>
   * @public
   */
  item: SubscribedListingItem | undefined;

  /**
   * <p>The identifier of the project of the published asset for which the subscription grant is
   *          created.</p>
   * @public
   */
  ownerProjectId: string | undefined;

  /**
   * <p>The name of the project that owns the published asset for which the subscription grant
   *          is created.</p>
   * @public
   */
  ownerProjectName?: string;
}

/**
 * <p>The project that has the subscription grant.</p>
 * @public
 */
export interface SubscribedProject {
  /**
   * <p>The identifier of the project that has the subscription grant.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The name of the project that has the subscription grant.</p>
   * @public
   */
  name?: string;
}

/**
 * <p>The principal that has the subscription grant for the asset.</p>
 * @public
 */
export type SubscribedPrincipal = SubscribedPrincipal.ProjectMember | SubscribedPrincipal.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipal {
  /**
   * <p>The project that has the subscription grant.</p>
   * @public
   */
  export interface ProjectMember {
    project: SubscribedProject;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    project?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    project: (value: SubscribedProject) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SubscribedPrincipal, visitor: Visitor<T>): T => {
    if (value.project !== undefined) return visitor.project(value.project);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface AcceptSubscriptionRequestOutput {
  /**
   * <p>The identifier of the subscription request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user that accepted the specified subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the specified subscription request
   *          was accepted.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>Specifies the status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp that specifies when the subscription request was accepted.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Specifies the timestamp when subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Specifies the reason for requesting a subscription to the asset.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone users who are subscribed to the asset specified in the
   *          subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>Specifies the asset for which the subscription request was created.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>Specifes the ID of the Amazon DataZone user who reviewed the subscription request.</p>
   * @public
   */
  reviewerId?: string;

  /**
   * <p>Specifies the reason for accepting the subscription request.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * <p>The parameters of the console link specified as part of the environment action.</p>
 * @public
 */
export interface AwsConsoleLinkParameters {
  /**
   * <p>The URI of the console link specified as part of the environment action.</p>
   * @public
   */
  uri?: string;
}

/**
 * <p>The parameters of the environment action.</p>
 * @public
 */
export type ActionParameters = ActionParameters.AwsConsoleLinkMember | ActionParameters.$UnknownMember;

/**
 * @public
 */
export namespace ActionParameters {
  /**
   * <p>The console link specified as part of the environment action.</p>
   * @public
   */
  export interface AwsConsoleLinkMember {
    awsConsoleLink: AwsConsoleLinkParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsConsoleLink?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    awsConsoleLink: (value: AwsConsoleLinkParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ActionParameters, visitor: Visitor<T>): T => {
    if (value.awsConsoleLink !== undefined) return visitor.awsConsoleLink(value.awsConsoleLink);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const ListingStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type ListingStatus = (typeof ListingStatus)[keyof typeof ListingStatus];

/**
 * <p>The details of an asset published in an Amazon DataZone catalog. </p>
 * @public
 */
export interface AssetListingDetails {
  /**
   * <p>The identifier of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The status of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listingStatus: ListingStatus | undefined;
}

/**
 * <p>The details of a metadata form.</p>
 * @public
 */
export interface FormInput {
  /**
   * <p>The name of the metadata form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The ID of the metadata form type.</p>
   * @public
   */
  typeIdentifier?: string;

  /**
   * <p>The revision of the metadata form type.</p>
   * @public
   */
  typeRevision?: string;

  /**
   * <p>The content of the metadata form.</p>
   * @public
   */
  content?: string;
}

/**
 * <p>The configuration of the business name generation.</p>
 * @public
 */
export interface BusinessNameGenerationConfiguration {
  /**
   * <p>Specifies whether the business name generation is enabled.</p>
   * @public
   */
  enabled?: boolean;
}

/**
 * <p>The configuration of the prediction.</p>
 * @public
 */
export interface PredictionConfiguration {
  /**
   * <p>The business name generation mechanism.</p>
   * @public
   */
  businessNameGeneration?: BusinessNameGenerationConfiguration;
}

/**
 * @public
 */
export interface CreateAssetInput {
  /**
   * <p>Asset name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Amazon DataZone domain where the asset is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The external identifier of the asset.</p>
   * @public
   */
  externalIdentifier?: string;

  /**
   * <p>The unique identifier of this asset's type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of this asset's type.</p>
   * @public
   */
  typeRevision?: string;

  /**
   * <p>Asset description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>Glossary terms attached to the asset.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>Metadata forms attached to the asset.</p>
   * @public
   */
  formsInput?: FormInput[];

  /**
   * <p>The unique identifier of the project that owns this asset.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The details of a metadata form.</p>
 * @public
 */
export interface FormOutput {
  /**
   * <p>The name of the metadata form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The name of the metadata form type.</p>
   * @public
   */
  typeName?: string;

  /**
   * <p>The revision of the metadata form type.</p>
   * @public
   */
  typeRevision?: string;

  /**
   * <p>The content of the metadata form.</p>
   * @public
   */
  content?: string;
}

/**
 * <p>The summary of the time series data points form.</p>
 * @public
 */
export interface TimeSeriesDataPointSummaryFormOutput {
  /**
   * <p>The name of the time series data points summary form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The type ID of the time series data points summary form.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The type revision of the time series data points summary form.</p>
   * @public
   */
  typeRevision?: string;

  /**
   * <p>The timestamp of the time series data points summary form.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The content of the summary of the time series data points form.</p>
   * @public
   */
  contentSummary?: string;

  /**
   * <p>The ID of the time series data points summary form.</p>
   * @public
   */
  id?: string;
}

/**
 * @public
 */
export interface CreateAssetOutput {
  /**
   * <p>The unique identifier of the created asset.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the created asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the created asset type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the asset.</p>
   * @public
   */
  externalIdentifier?: string;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the created asset.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The timestamp of when the asset was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user that created this asset in the catalog.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the first revision of the asset took place.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date;

  /**
   * <p>The Amazon DataZone user that made the first revision of the asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string;

  /**
   * <p>The glossary terms that are attached to the created asset.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The ID of the Amazon DataZone project that owns the created asset. </p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the asset was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The details of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  listing?: AssetListingDetails;

  /**
   * <p>The metadata forms that are attached to the created asset.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms that are attached to the created asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[];

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[];

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration;
}

/**
 * <p>The request has exceeded the specified service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 */
export interface CreateAssetRevisionInput {
  /**
   * <p>Te revised name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique identifier of the domain where the asset is being revised.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision?: string;

  /**
   * <p>The revised description of the asset.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The glossary terms to be attached to the asset as part of asset revision.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The metadata forms to be attached to the asset as part of asset revision.</p>
   * @public
   */
  formsInput?: FormInput[];

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateAssetRevisionOutput {
  /**
   * <p>The unique identifier of the asset revision.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The revised name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the revision type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the asset.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the asset.</p>
   * @public
   */
  externalIdentifier?: string;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The revised asset description.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The timestamp of when the asset revision occured.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who performed the asset revision.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the first asset revision occured.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who performed the first asset revision.</p>
   * @public
   */
  firstRevisionCreatedBy?: string;

  /**
   * <p>The glossary terms that were attached to the asset as part of asset revision.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The unique identifier of the revised project that owns the asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the asset was revised.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The details of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  listing?: AssetListingDetails;

  /**
   * <p>The metadata forms that were attached to the asset as part of the asset revision.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms that were attached to the asset as part of the asset
   *          revision.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[];

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[];

  /**
   * <p>The configuration of the automatically generated business-friendly metadata for the
   *          asset.</p>
   * @public
   */
  predictionConfiguration?: PredictionConfiguration;
}

/**
 * @public
 */
export interface DeleteAssetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetOutput {}

/**
 * @public
 */
export interface GetAssetInput {
  /**
   * <p>The ID of the Amazon DataZone domain to which the asset belongs.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the Amazon DataZone asset.</p>
   * @public
   */
  revision?: string;
}

/**
 * @public
 */
export interface GetAssetOutput {
  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset type.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external ID of the asset.</p>
   * @public
   */
  externalIdentifier?: string;

  /**
   * <p>The revision of the asset.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the Amazon DataZone asset.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The timestamp of when the asset was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the asset.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the first revision of the asset was created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the first revision of the asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string;

  /**
   * <p>The business glossary terms attached to the asset.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The ID of the project that owns the asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain to which the asset belongs.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The listing of the asset.</p>
   * @public
   */
  listing?: AssetListingDetails;

  /**
   * <p>The metadata forms attached to the asset.</p>
   * @public
   */
  formsOutput: FormOutput[] | undefined;

  /**
   * <p>The read-only metadata forms attached to the asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[];

  /**
   * <p>The latest data point that was imported into the time series form for the asset. </p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[];
}

/**
 * <p>The column configuration of the asset filter.</p>
 * @public
 */
export interface ColumnFilterConfiguration {
  /**
   * <p>Specifies whether to include column names.</p>
   * @public
   */
  includedColumnNames?: string[];
}

/**
 * <p>Specifies whether the value is equal to an expression.</p>
 * @public
 */
export interface EqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether the value is greater than an expression.</p>
 * @public
 */
export interface GreaterThanExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be greater than an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether the value is greater than or equal to an expression.</p>
 * @public
 */
export interface GreaterThanOrEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be greater than or equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies whether values are in the expression.</p>
 * @public
 */
export interface InExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The values that might be in the expression.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Specifies that the expression is not null.</p>
 * @public
 */
export interface IsNotNullExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;
}

/**
 * <p>Specifies that the expression is null.</p>
 * @public
 */
export interface IsNullExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;
}

/**
 * <p>Specifies that a value is less than an expression.</p>
 * @public
 */
export interface LessThanExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be less than the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is less than or equal to an expression.</p>
 * @public
 */
export interface LessThanOrEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be less than or equal to an expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is like the expression.</p>
 * @public
 */
export interface LikeExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might be like the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is not equal to the expression.</p>
 * @public
 */
export interface NotEqualToExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be equal to the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Specifies that a value is not in the expression.</p>
 * @public
 */
export interface NotInExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be in the expression.</p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * <p>Specifies that a value might be not like the expression.</p>
 * @public
 */
export interface NotLikeExpression {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  columnName: string | undefined;

  /**
   * <p>The value that might not be like the expression.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The row filter expression.</p>
 * @public
 */
export type RowFilterExpression =
  | RowFilterExpression.EqualToMember
  | RowFilterExpression.GreaterThanMember
  | RowFilterExpression.GreaterThanOrEqualToMember
  | RowFilterExpression.InMember
  | RowFilterExpression.IsNotNullMember
  | RowFilterExpression.IsNullMember
  | RowFilterExpression.LessThanMember
  | RowFilterExpression.LessThanOrEqualToMember
  | RowFilterExpression.LikeMember
  | RowFilterExpression.NotEqualToMember
  | RowFilterExpression.NotInMember
  | RowFilterExpression.NotLikeMember
  | RowFilterExpression.$UnknownMember;

/**
 * @public
 */
export namespace RowFilterExpression {
  /**
   * <p>The 'equal to' clause of the row filter expression.</p>
   * @public
   */
  export interface EqualToMember {
    equalTo: EqualToExpression;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'no equal to' clause of the row filter expression.</p>
   * @public
   */
  export interface NotEqualToMember {
    equalTo?: never;
    notEqualTo: NotEqualToExpression;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'greater than' clause of the row filter expression.</p>
   * @public
   */
  export interface GreaterThanMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan: GreaterThanExpression;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'less than' clause of the row filter expression.</p>
   * @public
   */
  export interface LessThanMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan: LessThanExpression;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'greater than or equal to' clause of the filter expression.</p>
   * @public
   */
  export interface GreaterThanOrEqualToMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo: GreaterThanOrEqualToExpression;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'less than or equal to' clause of the row filter expression.</p>
   * @public
   */
  export interface LessThanOrEqualToMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo: LessThanOrEqualToExpression;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'is null' clause of the row filter expression.</p>
   * @public
   */
  export interface IsNullMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull: IsNullExpression;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'is not null' clause of the row filter expression.</p>
   * @public
   */
  export interface IsNotNullMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull: IsNotNullExpression;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'in' clause of the row filter expression.</p>
   * @public
   */
  export interface InMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in: InExpression;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'not in' clause of the row filter expression.</p>
   * @public
   */
  export interface NotInMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn: NotInExpression;
    like?: never;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'like' clause of the row filter expression.</p>
   * @public
   */
  export interface LikeMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like: LikeExpression;
    notLike?: never;
    $unknown?: never;
  }

  /**
   * <p>The 'not like' clause of the row filter expression.</p>
   * @public
   */
  export interface NotLikeMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike: NotLikeExpression;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    equalTo?: never;
    notEqualTo?: never;
    greaterThan?: never;
    lessThan?: never;
    greaterThanOrEqualTo?: never;
    lessThanOrEqualTo?: never;
    isNull?: never;
    isNotNull?: never;
    in?: never;
    notIn?: never;
    like?: never;
    notLike?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    equalTo: (value: EqualToExpression) => T;
    notEqualTo: (value: NotEqualToExpression) => T;
    greaterThan: (value: GreaterThanExpression) => T;
    lessThan: (value: LessThanExpression) => T;
    greaterThanOrEqualTo: (value: GreaterThanOrEqualToExpression) => T;
    lessThanOrEqualTo: (value: LessThanOrEqualToExpression) => T;
    isNull: (value: IsNullExpression) => T;
    isNotNull: (value: IsNotNullExpression) => T;
    in: (value: InExpression) => T;
    notIn: (value: NotInExpression) => T;
    like: (value: LikeExpression) => T;
    notLike: (value: NotLikeExpression) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RowFilterExpression, visitor: Visitor<T>): T => {
    if (value.equalTo !== undefined) return visitor.equalTo(value.equalTo);
    if (value.notEqualTo !== undefined) return visitor.notEqualTo(value.notEqualTo);
    if (value.greaterThan !== undefined) return visitor.greaterThan(value.greaterThan);
    if (value.lessThan !== undefined) return visitor.lessThan(value.lessThan);
    if (value.greaterThanOrEqualTo !== undefined) return visitor.greaterThanOrEqualTo(value.greaterThanOrEqualTo);
    if (value.lessThanOrEqualTo !== undefined) return visitor.lessThanOrEqualTo(value.lessThanOrEqualTo);
    if (value.isNull !== undefined) return visitor.isNull(value.isNull);
    if (value.isNotNull !== undefined) return visitor.isNotNull(value.isNotNull);
    if (value.in !== undefined) return visitor.in(value.in);
    if (value.notIn !== undefined) return visitor.notIn(value.notIn);
    if (value.like !== undefined) return visitor.like(value.like);
    if (value.notLike !== undefined) return visitor.notLike(value.notLike);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FilterStatus = {
  INVALID: "INVALID",
  VALID: "VALID",
} as const;

/**
 * @public
 */
export type FilterStatus = (typeof FilterStatus)[keyof typeof FilterStatus];

/**
 * <p>The summary of the asset filter.</p>
 * @public
 */
export interface AssetFilterSummary {
  /**
   * <p>The ID of the asset filter.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the domain where the asset filter lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The name of the asset filter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the asset filter.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the asset filter.</p>
   * @public
   */
  status?: FilterStatus;

  /**
   * <p>The effective column names of the asset filter.</p>
   * @public
   */
  effectiveColumnNames?: string[];

  /**
   * <p>The effective row filter of the asset filter.</p>
   * @public
   */
  effectiveRowFilter?: string;

  /**
   * <p>The timestamp at which the asset filter was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The error message that is displayed if the action does not succeed.</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * <p>The additional attributes of an inventory asset.</p>
 * @public
 */
export interface AssetItemAdditionalAttributes {
  /**
   * <p>The forms included in the additional attributes of an inventory asset.</p>
   * @public
   */
  formsOutput?: FormOutput[];

  /**
   * <p>The read-only forms included in the additional attributes of an inventory asset.</p>
   * @public
   */
  readOnlyFormsOutput?: FormOutput[];

  /**
   * <p>The latest time series data points forms included in the additional attributes of an
   *          asset.</p>
   * @public
   */
  latestTimeSeriesDataPointFormsOutput?: TimeSeriesDataPointSummaryFormOutput[];
}

/**
 * <p>A Amazon DataZone inventory asset.</p>
 * @public
 */
export interface AssetItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the inventory asset exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>the identifier of the Amazon DataZone inventory asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the Amazon DataZone inventory asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the asset type of the specified Amazon DataZone inventory asset.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision of the inventory asset type.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>The external identifier of the Amazon DataZone inventory asset.</p>
   * @public
   */
  externalIdentifier?: string;

  /**
   * <p>The description of an Amazon DataZone inventory asset.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The timestamp of when the Amazon DataZone inventory asset was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the inventory asset.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the first revision of the inventory asset was created.</p>
   * @public
   */
  firstRevisionCreatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the first revision of the inventory asset.</p>
   * @public
   */
  firstRevisionCreatedBy?: string;

  /**
   * <p>The glossary terms attached to the Amazon DataZone inventory asset.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The identifier of the Amazon DataZone project that owns the inventory asset.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The additional attributes of a Amazon DataZone inventory asset. </p>
   * @public
   */
  additionalAttributes?: AssetItemAdditionalAttributes;
}

/**
 * <p>An asset published in an Amazon DataZone catalog.</p>
 * @public
 */
export interface AssetListing {
  /**
   * <p>The identifier of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetId?: string;

  /**
   * <p>The revision of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetRevision?: string;

  /**
   * <p>The type of an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  assetType?: string;

  /**
   * <p>The timestamp of when an asset published in an Amazon DataZone catalog was created. </p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The metadata forms attached to an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  forms?: string;

  /**
   * <p>The latest time series data points forms included in the additional attributes of an
   *          asset.</p>
   * @public
   */
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[];

  /**
   * <p>The glossary terms attached to an asset published in an Amazon DataZone catalog. </p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[];

  /**
   * <p>The identifier of the project where an asset published in an Amazon DataZone catalog exists.
   *       </p>
   * @public
   */
  owningProjectId?: string;
}

/**
 * <p>Additional attributes of an inventory asset.</p>
 * @public
 */
export interface AssetListingItemAdditionalAttributes {
  /**
   * <p>The metadata forms that form additional attributes of the metadata asset.</p>
   * @public
   */
  forms?: string;

  /**
   * <p>The latest time series data points forms included in the additional attributes of an
   *          asset.</p>
   * @public
   */
  latestTimeSeriesDataPointForms?: TimeSeriesDataPointSummaryFormOutput[];
}

/**
 * <p>The details of an asset published in an Amazon DataZone catalog.</p>
 * @public
 */
export interface AssetListingItem {
  /**
   * <p>The identifier of the listing (asset published in Amazon DataZone catalog).</p>
   * @public
   */
  listingId?: string;

  /**
   * <p>The revision of the listing (asset published in Amazon DataZone catalog).</p>
   * @public
   */
  listingRevision?: string;

  /**
   * <p>The name of the inventory asset.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The identifier of the inventory asset.</p>
   * @public
   */
  entityId?: string;

  /**
   * <p>The revision of the inventory asset.</p>
   * @public
   */
  entityRevision?: string;

  /**
   * <p>The type of the inventory asset.</p>
   * @public
   */
  entityType?: string;

  /**
   * <p>The description of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The timestamp of when an asset published in an Amazon DataZone catalog was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the listing.</p>
   * @public
   */
  listingCreatedBy?: string;

  /**
   * <p>The Amazon DataZone user who updated the listing.</p>
   * @public
   */
  listingUpdatedBy?: string;

  /**
   * <p>Glossary terms attached to the inventory asset.</p>
   * @public
   */
  glossaryTerms?: DetailedGlossaryTerm[];

  /**
   * <p>The identifier of the project that owns the inventory asset.</p>
   * @public
   */
  owningProjectId?: string;

  /**
   * <p>The additional attributes of an asset published in an Amazon DataZone catalog.</p>
   * @public
   */
  additionalAttributes?: AssetListingItemAdditionalAttributes;
}

/**
 * <p>The revision of an inventory asset.</p>
 * @public
 */
export interface AssetRevision {
  /**
   * <p>The Amazon DataZone user who created the inventory asset.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The identifier of the inventory asset revision.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The revision details of the inventory asset.</p>
   * @public
   */
  revision?: string;

  /**
   * <p>The Amazon DataZone user who created the asset revision.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when an inventory asset revison was created.</p>
   * @public
   */
  createdAt?: Date;
}

/**
 * <p>The name map for assets.</p>
 * @public
 */
export interface AssetTargetNameMap {
  /**
   * <p>The identifier of the inventory asset.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The target name in the asset target name map.</p>
   * @public
   */
  targetName: string | undefined;
}

/**
 * <p>The details of the form entry.</p>
 * @public
 */
export interface FormEntryInput {
  /**
   * <p>The type ID of the form entry.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The type revision of the form entry.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>Specifies whether a form entry is required.</p>
   * @public
   */
  required?: boolean;
}

/**
 * @public
 */
export interface CreateAssetTypeInput {
  /**
   * <p>The unique identifier of the Amazon DataZone domain where the custom asset type is being
   *          created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the custom asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The descripton of the custom asset type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The metadata forms that are to be attached to the custom asset type.</p>
   * @public
   */
  formsInput: Record<string, FormEntryInput> | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project that is to own the custom asset type.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;
}

/**
 * <p>The details of the form entry.</p>
 * @public
 */
export interface FormEntryOutput {
  /**
   * <p>The name of the type of the form entry.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The type revision of the form entry.</p>
   * @public
   */
  typeRevision: string | undefined;

  /**
   * <p>Specifies whether a form entry is required.</p>
   * @public
   */
  required?: boolean;
}

/**
 * @public
 */
export interface CreateAssetTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the custom asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the custom asset type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The metadata forms that are attached to the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that currently owns this asset type.</p>
   * @public
   */
  owningProjectId?: string;

  /**
   * <p>The ID of the Amazon DataZone domain where the asset type was originally created.</p>
   * @public
   */
  originDomainId?: string;

  /**
   * <p>The ID of the Amazon DataZone project where the asset type was originally created.</p>
   * @public
   */
  originProjectId?: string;

  /**
   * <p>The timestamp of when the asset type is to be created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who creates this custom asset type.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the custom type was created.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user that created the custom asset type.</p>
   * @public
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface DeleteAssetTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset type that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetTypeOutput {}

/**
 * @public
 */
export interface GetAssetTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset type.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision?: string;
}

/**
 * @public
 */
export interface GetAssetTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the asset type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The metadata forms attached to the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that owns the asset type.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the asset type was originally created.</p>
   * @public
   */
  originDomainId?: string;

  /**
   * <p>The ID of the Amazon DataZone project in which the asset type was originally created.</p>
   * @public
   */
  originProjectId?: string;

  /**
   * <p>The timestamp of when the asset type was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the asset type.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the asset type was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user that updated the asset type.</p>
   * @public
   */
  updatedBy?: string;
}

/**
 * <p>The details of the asset type.</p>
 * @public
 */
export interface AssetTypeItem {
  /**
   * <p>The identifier of the Amazon DataZone domain where the asset type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the asset type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the asset type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of the asset type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The forms included in the details of the asset type.</p>
   * @public
   */
  formsOutput: Record<string, FormEntryOutput> | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project that owns the asset type.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain where the asset type was originally
   *          created.</p>
   * @public
   */
  originDomainId?: string;

  /**
   * <p>The identifier of the Amazon DataZone project where the asset type exists.</p>
   * @public
   */
  originProjectId?: string;

  /**
   * <p>The timestamp of when the asset type was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the asset type.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the asset type was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who updated the asset type.</p>
   * @public
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface AssociateEnvironmentRoleInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment role is associated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone environment.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ARN of the environment role.</p>
   * @public
   */
  environmentRoleArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateEnvironmentRoleOutput {}

/**
 * @public
 * @enum
 */
export const AuthType = {
  DISABLED: "DISABLED",
  IAM_IDC: "IAM_IDC",
} as const;

/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 */
export interface CancelMetadataGenerationRunInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata generation run is to be
   *          cancelled.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the metadata generation run.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface CancelMetadataGenerationRunOutput {}

/**
 * @public
 */
export interface CancelSubscriptionInput {
  /**
   * <p>The unique identifier of the Amazon DataZone domain where the subscription request is being
   *          cancelled.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the subscription that is being cancelled.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  APPROVED: "APPROVED",
  CANCELLED: "CANCELLED",
  REVOKED: "REVOKED",
} as const;

/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/**
 * @public
 */
export interface CancelSubscriptionOutput {
  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Specifies the Amazon DataZone user who is cancelling the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user that cancelled the subscription.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The unique identifier of the Amazon DataZone domain where the subscription is being
   *          cancelled.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the request to cancel the subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp that specifies when the request to cancel the subscription was
   *          created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp that specifies when the subscription was cancelled.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon DataZone user who is made a subscriber to the specified asset by the subscription
   *          that is being cancelled.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The asset to which a subscription is being cancelled.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The unique ID of the subscripton request for the subscription that is being
   *          cancelled.</p>
   * @public
   */
  subscriptionRequestId?: string;

  /**
   * <p>Specifies whether the permissions to the asset are retained after the subscription is
   *          cancelled.</p>
   * @public
   */
  retainPermissions?: boolean;
}

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  PUBLISH: "PUBLISH",
  UNPUBLISH: "UNPUBLISH",
} as const;

/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * <p>Part of the provisioning properties of the environment blueprint.</p>
 * @public
 */
export interface CloudFormationProperties {
  /**
   * <p>The template URL of the cloud formation provisioning properties of the environment
   *          blueprint.</p>
   * @public
   */
  templateUrl: string | undefined;
}

/**
 * <p>The details of the parameters for the configurable environment action.</p>
 * @public
 */
export interface ConfigurableActionParameter {
  /**
   * <p>The key of the configurable action parameter.</p>
   * @public
   */
  key?: string;

  /**
   * <p>The value of the configurable action parameter.</p>
   * @public
   */
  value?: string;
}

/**
 * @public
 * @enum
 */
export const ConfigurableActionTypeAuthorization = {
  HTTPS: "HTTPS",
  IAM: "IAM",
} as const;

/**
 * @public
 */
export type ConfigurableActionTypeAuthorization =
  (typeof ConfigurableActionTypeAuthorization)[keyof typeof ConfigurableActionTypeAuthorization];

/**
 * <p>The configurable action of a Amazon DataZone environment.</p>
 * @public
 */
export interface ConfigurableEnvironmentAction {
  /**
   * <p>The type of a configurable action in a Amazon DataZone environment.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The authentication type of a configurable action of a Amazon DataZone environment. </p>
   * @public
   */
  auth?: ConfigurableActionTypeAuthorization;

  /**
   * <p>The parameters of a configurable action in a Amazon DataZone environment.</p>
   * @public
   */
  parameters: ConfigurableActionParameter[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FilterExpressionType = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;

/**
 * @public
 */
export type FilterExpressionType = (typeof FilterExpressionType)[keyof typeof FilterExpressionType];

/**
 * <p>A filter expression in Amazon DataZone.</p>
 * @public
 */
export interface FilterExpression {
  /**
   * <p>The search filter explresison type.</p>
   * @public
   */
  type: FilterExpressionType | undefined;

  /**
   * <p>The search filter expression.</p>
   * @public
   */
  expression: string | undefined;
}

/**
 * <p>The relational filter configuration for the data source.</p>
 * @public
 */
export interface RelationalFilterConfiguration {
  /**
   * <p>The database name specified in the relational filter configuration for the data
   *          source.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The schema name specified in the relational filter configuration for the data
   *          source.</p>
   * @public
   */
  schemaName?: string;

  /**
   * <p>The filter expressions specified in the relational filter configuration for the data
   *          source.</p>
   * @public
   */
  filterExpressions?: FilterExpression[];
}

/**
 * <p>The configuration details of the Amazon Web Services Glue data source.</p>
 * @public
 */
export interface GlueRunConfigurationInput {
  /**
   * <p>The data access role included in the configuration details of the Amazon Web Services Glue data
   *          source.</p>
   * @public
   */
  dataAccessRole?: string;

  /**
   * <p>The relational filter configurations included in the configuration details of the Amazon Web Services
   *          Glue data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>Specifies whether to automatically import data quality metrics as part of the data
   *          source run.</p>
   * @public
   */
  autoImportDataQualityResult?: boolean;
}

/**
 * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
 * @public
 */
export interface RedshiftCredentialConfiguration {
  /**
   * <p>The ARN of a secret manager for an Amazon Redshift cluster.</p>
   * @public
   */
  secretManagerArn: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift cluster storage.</p>
 * @public
 */
export interface RedshiftClusterStorage {
  /**
   * <p>The name of an Amazon Redshift cluster.</p>
   * @public
   */
  clusterName: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift Serverless workgroup storage.</p>
 * @public
 */
export interface RedshiftServerlessStorage {
  /**
   * <p>The name of the Amazon Redshift Serverless workgroup.</p>
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
 *          Redshift data source run.</p>
 * @public
 */
export type RedshiftStorage =
  | RedshiftStorage.RedshiftClusterSourceMember
  | RedshiftStorage.RedshiftServerlessSourceMember
  | RedshiftStorage.$UnknownMember;

/**
 * @public
 */
export namespace RedshiftStorage {
  /**
   * <p>The details of the Amazon Redshift cluster source.</p>
   * @public
   */
  export interface RedshiftClusterSourceMember {
    redshiftClusterSource: RedshiftClusterStorage;
    redshiftServerlessSource?: never;
    $unknown?: never;
  }

  /**
   * <p>The details of the Amazon Redshift Serverless workgroup source.</p>
   * @public
   */
  export interface RedshiftServerlessSourceMember {
    redshiftClusterSource?: never;
    redshiftServerlessSource: RedshiftServerlessStorage;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    redshiftClusterSource?: never;
    redshiftServerlessSource?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    redshiftClusterSource: (value: RedshiftClusterStorage) => T;
    redshiftServerlessSource: (value: RedshiftServerlessStorage) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RedshiftStorage, visitor: Visitor<T>): T => {
    if (value.redshiftClusterSource !== undefined) return visitor.redshiftClusterSource(value.redshiftClusterSource);
    if (value.redshiftServerlessSource !== undefined)
      return visitor.redshiftServerlessSource(value.redshiftServerlessSource);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The configuration details of the Amazon Redshift data source.</p>
 * @public
 */
export interface RedshiftRunConfigurationInput {
  /**
   * <p>The data access role included in the configuration details of the Amazon Redshift data
   *          source.</p>
   * @public
   */
  dataAccessRole?: string;

  /**
   * <p>The relational filger configurations included in the configuration details of the Amazon
   *          Redshift data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
   * @public
   */
  redshiftCredentialConfiguration: RedshiftCredentialConfiguration | undefined;

  /**
   * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
   *          Redshift data source run.</p>
   * @public
   */
  redshiftStorage: RedshiftStorage | undefined;
}

/**
 * <p>The configuration of the data source.</p>
 * @public
 */
export type DataSourceConfigurationInput =
  | DataSourceConfigurationInput.GlueRunConfigurationMember
  | DataSourceConfigurationInput.RedshiftRunConfigurationMember
  | DataSourceConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfigurationInput {
  /**
   * <p>The configuration of the Amazon Web Services Glue data source.</p>
   * @public
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationInput;
    redshiftRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration of the Amazon Redshift data source.</p>
   * @public
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glueRunConfiguration: (value: GlueRunConfigurationInput) => T;
    redshiftRunConfiguration: (value: RedshiftRunConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceConfigurationInput, visitor: Visitor<T>): T => {
    if (value.glueRunConfiguration !== undefined) return visitor.glueRunConfiguration(value.glueRunConfiguration);
    if (value.redshiftRunConfiguration !== undefined)
      return visitor.redshiftRunConfiguration(value.redshiftRunConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const EnableSetting = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EnableSetting = (typeof EnableSetting)[keyof typeof EnableSetting];

/**
 * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
 *          action.</p>
 * @public
 */
export interface RecommendationConfiguration {
  /**
   * <p>Specifies whether automatic business name generation is to be enabled or not as part of
   *          the recommendation configuration.</p>
   * @public
   */
  enableBusinessNameGeneration?: boolean;
}

/**
 * @public
 * @enum
 */
export const Timezone = {
  AFRICA_JOHANNESBURG: "AFRICA_JOHANNESBURG",
  AMERICA_MONTREAL: "AMERICA_MONTREAL",
  AMERICA_SAO_PAULO: "AMERICA_SAO_PAULO",
  ASIA_BAHRAIN: "ASIA_BAHRAIN",
  ASIA_BANGKOK: "ASIA_BANGKOK",
  ASIA_CALCUTTA: "ASIA_CALCUTTA",
  ASIA_DUBAI: "ASIA_DUBAI",
  ASIA_HONG_KONG: "ASIA_HONG_KONG",
  ASIA_JAKARTA: "ASIA_JAKARTA",
  ASIA_KUALA_LUMPUR: "ASIA_KUALA_LUMPUR",
  ASIA_SEOUL: "ASIA_SEOUL",
  ASIA_SHANGHAI: "ASIA_SHANGHAI",
  ASIA_SINGAPORE: "ASIA_SINGAPORE",
  ASIA_TAIPEI: "ASIA_TAIPEI",
  ASIA_TOKYO: "ASIA_TOKYO",
  AUSTRALIA_MELBOURNE: "AUSTRALIA_MELBOURNE",
  AUSTRALIA_SYDNEY: "AUSTRALIA_SYDNEY",
  CANADA_CENTRAL: "CANADA_CENTRAL",
  CET: "CET",
  CST6CDT: "CST6CDT",
  ETC_GMT: "ETC_GMT",
  ETC_GMT0: "ETC_GMT0",
  ETC_GMT_ADD_0: "ETC_GMT_ADD_0",
  ETC_GMT_ADD_1: "ETC_GMT_ADD_1",
  ETC_GMT_ADD_10: "ETC_GMT_ADD_10",
  ETC_GMT_ADD_11: "ETC_GMT_ADD_11",
  ETC_GMT_ADD_12: "ETC_GMT_ADD_12",
  ETC_GMT_ADD_2: "ETC_GMT_ADD_2",
  ETC_GMT_ADD_3: "ETC_GMT_ADD_3",
  ETC_GMT_ADD_4: "ETC_GMT_ADD_4",
  ETC_GMT_ADD_5: "ETC_GMT_ADD_5",
  ETC_GMT_ADD_6: "ETC_GMT_ADD_6",
  ETC_GMT_ADD_7: "ETC_GMT_ADD_7",
  ETC_GMT_ADD_8: "ETC_GMT_ADD_8",
  ETC_GMT_ADD_9: "ETC_GMT_ADD_9",
  ETC_GMT_NEG_0: "ETC_GMT_NEG_0",
  ETC_GMT_NEG_1: "ETC_GMT_NEG_1",
  ETC_GMT_NEG_10: "ETC_GMT_NEG_10",
  ETC_GMT_NEG_11: "ETC_GMT_NEG_11",
  ETC_GMT_NEG_12: "ETC_GMT_NEG_12",
  ETC_GMT_NEG_13: "ETC_GMT_NEG_13",
  ETC_GMT_NEG_14: "ETC_GMT_NEG_14",
  ETC_GMT_NEG_2: "ETC_GMT_NEG_2",
  ETC_GMT_NEG_3: "ETC_GMT_NEG_3",
  ETC_GMT_NEG_4: "ETC_GMT_NEG_4",
  ETC_GMT_NEG_5: "ETC_GMT_NEG_5",
  ETC_GMT_NEG_6: "ETC_GMT_NEG_6",
  ETC_GMT_NEG_7: "ETC_GMT_NEG_7",
  ETC_GMT_NEG_8: "ETC_GMT_NEG_8",
  ETC_GMT_NEG_9: "ETC_GMT_NEG_9",
  EUROPE_DUBLIN: "EUROPE_DUBLIN",
  EUROPE_LONDON: "EUROPE_LONDON",
  EUROPE_PARIS: "EUROPE_PARIS",
  EUROPE_STOCKHOLM: "EUROPE_STOCKHOLM",
  EUROPE_ZURICH: "EUROPE_ZURICH",
  ISRAEL: "ISRAEL",
  MEXICO_GENERAL: "MEXICO_GENERAL",
  MST7MDT: "MST7MDT",
  PACIFIC_AUCKLAND: "PACIFIC_AUCKLAND",
  US_CENTRAL: "US_CENTRAL",
  US_EASTERN: "US_EASTERN",
  US_MOUNTAIN: "US_MOUNTAIN",
  US_PACIFIC: "US_PACIFIC",
  UTC: "UTC",
} as const;

/**
 * @public
 */
export type Timezone = (typeof Timezone)[keyof typeof Timezone];

/**
 * <p>The details of the schedule of the data source runs.</p>
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * <p>The timezone of the data source run. </p>
   * @public
   */
  timezone?: Timezone;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: string;
}

/**
 * @public
 */
export interface CreateDataSourceInput {
  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the Amazon DataZone domain where the data source is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone project in which you want to add this data
   *          source.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone environment to which the data source publishes
   *          assets. </p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>Specifies the configuration of the data source. It can be set to either
   *             <code>glueRunConfiguration</code> or <code>redshiftRunConfiguration</code>.</p>
   * @public
   */
  configuration?: DataSourceConfigurationInput;

  /**
   * <p>Specifies whether the business name generation is to be enabled for this data
   *          source.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration;

  /**
   * <p>Specifies whether the data source is enabled.</p>
   * @public
   */
  enableSetting?: EnableSetting;

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean;

  /**
   * <p>The metadata forms that are to be attached to the assets that this data source works
   *          with.</p>
   * @public
   */
  assetFormsInput?: FormInput[];

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The configuration details of the Amazon Web Services Glue data source.</p>
 * @public
 */
export interface GlueRunConfigurationOutput {
  /**
   * <p>The Amazon Web Services account ID included in the configuration details of the Amazon Web Services Glue data
   *          source. </p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The Amazon Web Services region included in the configuration details of the Amazon Web Services Glue data source.
   *       </p>
   * @public
   */
  region?: string;

  /**
   * <p>The data access role included in the configuration details of the Amazon Web Services Glue data
   *          source. </p>
   * @public
   */
  dataAccessRole?: string;

  /**
   * <p>The relational filter configurations included in the configuration details of the Amazon Web Services
   *          Glue data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>Specifies whether to automatically import data quality metrics as part of the data
   *          source run.</p>
   * @public
   */
  autoImportDataQualityResult?: boolean;
}

/**
 * <p>The configuration details of the Amazon Redshift data source.</p>
 * @public
 */
export interface RedshiftRunConfigurationOutput {
  /**
   * <p>The ID of the Amazon Web Services account included in the configuration details of the Amazon Redshift
   *          data source.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The Amazon Web Services region included in the configuration details of the Amazon Redshift data
   *          source.</p>
   * @public
   */
  region?: string;

  /**
   * <p>The data access role included in the configuration details of the Amazon Redshift data
   *          source.</p>
   * @public
   */
  dataAccessRole?: string;

  /**
   * <p>The relational filger configurations included in the configuration details of the Amazon
   *          Redshift data source.</p>
   * @public
   */
  relationalFilterConfigurations: RelationalFilterConfiguration[] | undefined;

  /**
   * <p>The details of the credentials required to access an Amazon Redshift cluster.</p>
   * @public
   */
  redshiftCredentialConfiguration: RedshiftCredentialConfiguration | undefined;

  /**
   * <p>The details of the Amazon Redshift storage as part of the configuration of an Amazon
   *          Redshift data source run.</p>
   * @public
   */
  redshiftStorage: RedshiftStorage | undefined;
}

/**
 * <p>The configuration of the data source.</p>
 * @public
 */
export type DataSourceConfigurationOutput =
  | DataSourceConfigurationOutput.GlueRunConfigurationMember
  | DataSourceConfigurationOutput.RedshiftRunConfigurationMember
  | DataSourceConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfigurationOutput {
  /**
   * <p>The configuration of the Amazon Web Services Glue data source.</p>
   * @public
   */
  export interface GlueRunConfigurationMember {
    glueRunConfiguration: GlueRunConfigurationOutput;
    redshiftRunConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration of the Amazon Redshift data source.</p>
   * @public
   */
  export interface RedshiftRunConfigurationMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration: RedshiftRunConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueRunConfiguration?: never;
    redshiftRunConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glueRunConfiguration: (value: GlueRunConfigurationOutput) => T;
    redshiftRunConfiguration: (value: RedshiftRunConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataSourceConfigurationOutput, visitor: Visitor<T>): T => {
    if (value.glueRunConfiguration !== undefined) return visitor.glueRunConfiguration(value.glueRunConfiguration);
    if (value.redshiftRunConfiguration !== undefined)
      return visitor.redshiftRunConfiguration(value.redshiftRunConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const DataSourceErrorType = {
  ACCESS_DENIED_EXCEPTION: "ACCESS_DENIED_EXCEPTION",
  CONFLICT_EXCEPTION: "CONFLICT_EXCEPTION",
  INTERNAL_SERVER_EXCEPTION: "INTERNAL_SERVER_EXCEPTION",
  RESOURCE_NOT_FOUND_EXCEPTION: "RESOURCE_NOT_FOUND_EXCEPTION",
  SERVICE_QUOTA_EXCEEDED_EXCEPTION: "SERVICE_QUOTA_EXCEEDED_EXCEPTION",
  THROTTLING_EXCEPTION: "THROTTLING_EXCEPTION",
  VALIDATION_EXCEPTION: "VALIDATION_EXCEPTION",
} as const;

/**
 * @public
 */
export type DataSourceErrorType = (typeof DataSourceErrorType)[keyof typeof DataSourceErrorType];

/**
 * <p>The details of the error message that is returned if the operation cannot be
 *          successfully completed.</p>
 * @public
 */
export interface DataSourceErrorMessage {
  /**
   * <p>The type of the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorType: DataSourceErrorType | undefined;

  /**
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   * @public
   */
  errorDetail?: string;
}

/**
 * @public
 * @enum
 */
export const DataSourceRunStatus = {
  FAILED: "FAILED",
  PARTIALLY_SUCCEEDED: "PARTIALLY_SUCCEEDED",
  REQUESTED: "REQUESTED",
  RUNNING: "RUNNING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type DataSourceRunStatus = (typeof DataSourceRunStatus)[keyof typeof DataSourceRunStatus];

/**
 * @public
 * @enum
 */
export const DataSourceStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED_CREATION: "FAILED_CREATION",
  FAILED_DELETION: "FAILED_DELETION",
  FAILED_UPDATE: "FAILED_UPDATE",
  READY: "READY",
  RUNNING: "RUNNING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DataSourceStatus = (typeof DataSourceStatus)[keyof typeof DataSourceStatus];

/**
 * @public
 */
export interface CreateDataSourceOutput {
  /**
   * <p>The unique identifier of the data source.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DataSourceStatus;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type?: string;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which the data source is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project to which the data source is added.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon DataZone environment to which the data source publishes
   *          assets. </p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>Specifies the configuration of the data source. It can be set to either
   *             <code>glueRunConfiguration</code> or <code>redshiftRunConfiguration</code>.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput;

  /**
   * <p>Specifies whether the business name generation is to be enabled for this data
   *          source.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration;

  /**
   * <p>Specifies whether the data source is enabled.</p>
   * @public
   */
  enableSetting?: EnableSetting;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean;

  /**
   * <p>The metadata forms attached to the assets that this data source creates.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[];

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration;

  /**
   * <p>The status of the last run of this data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * <p>The timestamp that specifies when the data source was last run.</p>
   * @public
   */
  lastRunAt?: Date;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * <p>The timestamp of when the data source was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  updatedAt?: Date;
}

/**
 * @public
 * @enum
 */
export const UserAssignment = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;

/**
 * @public
 */
export type UserAssignment = (typeof UserAssignment)[keyof typeof UserAssignment];

/**
 * <p>The single sign-on details in Amazon DataZone.</p>
 * @public
 */
export interface SingleSignOn {
  /**
   * <p>The type of single sign-on in Amazon DataZone.</p>
   * @public
   */
  type?: AuthType;

  /**
   * <p>The single sign-on user assignment in Amazon DataZone.</p>
   * @public
   */
  userAssignment?: UserAssignment;
}

/**
 * @public
 */
export interface CreateDomainInput {
  /**
   * <p>The name of the Amazon DataZone domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Amazon DataZone domain.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The single-sign on configuration of the Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn;

  /**
   * <p>The domain execution role that is created when an Amazon DataZone domain is created. The
   *          domain execution role is created in the Amazon Web Services account that houses the
   *          Amazon DataZone domain.</p>
   * @public
   */
  domainExecutionRole: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   * @public
   */
  kmsKeyIdentifier?: string;

  /**
   * <p>The tags specified for the Amazon DataZone domain.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  CREATION_FAILED: "CREATION_FAILED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  DELETION_FAILED: "DELETION_FAILED",
} as const;

/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 */
export interface CreateDomainOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the Amazon DataZone domain.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the Amazon DataZone domain.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The single-sign on configuration of the Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn;

  /**
   * <p>The domain execution role that is created when an Amazon DataZone domain is created. The
   *          domain execution role is created in the Amazon Web Services account that houses the
   *          Amazon DataZone domain.</p>
   * @public
   */
  domainExecutionRole?: string;

  /**
   * <p>The ARN of the Amazon DataZone domain.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   * @public
   */
  kmsKeyIdentifier?: string;

  /**
   * <p>The status of the Amazon DataZone domain.</p>
   * @public
   */
  status?: DomainStatus;

  /**
   * <p>The URL of the data portal for this Amazon DataZone domain.</p>
   * @public
   */
  portalUrl?: string;

  /**
   * <p>The tags specified for the Amazon DataZone domain.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * <p>The parameter details of an evironment profile.</p>
 * @public
 */
export interface EnvironmentParameter {
  /**
   * <p>The name of an environment profile parameter.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The value of an environment profile parameter.</p>
   * @public
   */
  value?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentInput {
  /**
   * <p>The identifier of the Amazon DataZone project in which this environment is created.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The description of the Amazon DataZone environment.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The name of the Amazon DataZone environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the environment profile that is used to create this Amazon DataZone
   *          environment.</p>
   * @public
   */
  environmentProfileIdentifier: string | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[];

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone environment.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The ID of the account in which the environment is being created.</p>
   * @public
   */
  environmentAccountIdentifier?: string;

  /**
   * <p>The region of the account in which the environment is being created.</p>
   * @public
   */
  environmentAccountRegion?: string;

  /**
   * <p>The ID of the blueprint with which the environment is being created.</p>
   * @public
   */
  environmentBlueprintIdentifier?: string;
}

/**
 * <p>The deployment properties of the Amazon DataZone blueprint.</p>
 * @public
 */
export interface DeploymentProperties {
  /**
   * <p>The start timeout of the environment blueprint deployment.</p>
   * @public
   */
  startTimeoutMinutes?: number;

  /**
   * <p>The end timeout of the environment blueprint deployment.</p>
   * @public
   */
  endTimeoutMinutes?: number;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING_DEPLOYMENT: "PENDING_DEPLOYMENT",
  SUCCESSFUL: "SUCCESSFUL",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * <p>The failure reasons for the environment deployment.</p>
 * @public
 */
export interface EnvironmentError {
  /**
   * <p>The error code for the failure reason for the environment deployment.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The error message for the failure reason for the environment deployment.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The details of the last deployment of the environment.</p>
 * @public
 */
export interface Deployment {
  /**
   * <p>The identifier of the last deployment of the environment.</p>
   * @public
   */
  deploymentId?: string;

  /**
   * <p>The type of the last deployment of the environment.</p>
   * @public
   */
  deploymentType?: DeploymentType;

  /**
   * <p>The status of the last deployment of the environment.</p>
   * @public
   */
  deploymentStatus?: DeploymentStatus;

  /**
   * <p>The failure reason of the last deployment of the environment.</p>
   * @public
   */
  failureReason?: EnvironmentError;

  /**
   * <p>The messages of the last deployment of the environment.</p>
   * @public
   */
  messages?: string[];

  /**
   * <p>Specifies whether the last deployment of the environment is complete.</p>
   * @public
   */
  isDeploymentComplete?: boolean;
}

/**
 * <p>The details of a provisioned resource of this Amazon DataZone environment.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The provider of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  provider?: string;

  /**
   * <p>The name of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The value of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The type of a provisioned resource of this Amazon DataZone environment.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * <p>The provisioning properties of an environment blueprint.</p>
 * @public
 */
export type ProvisioningProperties =
  | ProvisioningProperties.CloudFormationMember
  | ProvisioningProperties.$UnknownMember;

/**
 * @public
 */
export namespace ProvisioningProperties {
  /**
   * <p>The cloud formation properties included as part of the provisioning properties of an
   *          environment blueprint.</p>
   * @public
   */
  export interface CloudFormationMember {
    cloudFormation: CloudFormationProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudFormation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    cloudFormation: (value: CloudFormationProperties) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProvisioningProperties, visitor: Visitor<T>): T => {
    if (value.cloudFormation !== undefined) return visitor.cloudFormation(value.cloudFormation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const EnvironmentStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  DISABLED: "DISABLED",
  EXPIRED: "EXPIRED",
  INACCESSIBLE: "INACCESSIBLE",
  SUSPENDED: "SUSPENDED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;

/**
 * @public
 */
export type EnvironmentStatus = (typeof EnvironmentStatus)[keyof typeof EnvironmentStatus];

/**
 * <p>The details of user parameters of an environment blueprint.</p>
 * @public
 */
export interface CustomParameter {
  /**
   * <p>The key name of the parameter.</p>
   * @public
   */
  keyName: string | undefined;

  /**
   * <p>The description of the parameter.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The filed type of the parameter.</p>
   * @public
   */
  fieldType: string | undefined;

  /**
   * <p>The default value of the parameter.</p>
   * @public
   */
  defaultValue?: string;

  /**
   * <p>Specifies whether the parameter is editable.</p>
   * @public
   */
  isEditable?: boolean;

  /**
   * <p>Specifies whether the custom parameter is optional.</p>
   * @public
   */
  isOptional?: boolean;
}

/**
 * @public
 */
export interface CreateEnvironmentOutput {
  /**
   * <p>The ID of the Amazon DataZone project in which this environment is created.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of this Amazon DataZone environment.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which the environment is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon DataZone user who created this environment.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when this environment was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The name of this environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the environment profile with which this Amazon DataZone environment was
   *          created.</p>
   * @public
   */
  environmentProfileId?: string;

  /**
   * <p>The Amazon Web Services account in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services region in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountRegion?: string;

  /**
   * <p>The provider of this Amazon DataZone environment.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioned resources of this Amazon DataZone environment.</p>
   * @public
   */
  provisionedResources?: Resource[];

  /**
   * <p>The status of this Amazon DataZone environment.</p>
   * @public
   */
  status?: EnvironmentStatus;

  /**
   * <p>The configurable actions of this Amazon DataZone environment.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[];

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone environment.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The user parameters of this Amazon DataZone environment.</p>
   * @public
   */
  userParameters?: CustomParameter[];

  /**
   * <p>The details of the last deployment of this Amazon DataZone environment.</p>
   * @public
   */
  lastDeployment?: Deployment;

  /**
   * <p>The provisioning properties of this Amazon DataZone environment.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties;

  /**
   * <p>The deployment properties of this Amazon DataZone environment.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * <p>The ID of the blueprint with which this Amazon DataZone environment was created.</p>
   * @public
   */
  environmentBlueprintId?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentActionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment action is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment in which the environment action is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The description of the environment action that is being created in the
   *          environment.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentActionOutput {
  /**
   * <p>The ID of the domain in which the environment action is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the environment in which the environment is created.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the environment action.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The description of the environment action.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this Amazon DataZone environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment profile.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * <p>The identifier of the project in which to create the environment profile.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The user parameters of this Amazon DataZone environment profile.</p>
   * @public
   */
  userParameters?: EnvironmentParameter[];

  /**
   * <p>The Amazon Web Services account in which the Amazon DataZone environment is created.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services region in which this environment profile is created.</p>
   * @public
   */
  awsAccountRegion?: string;
}

/**
 * @public
 */
export interface CreateEnvironmentProfileOutput {
  /**
   * <p>The ID of this Amazon DataZone environment profile.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID in which this Amazon DataZone environment profile is
   *          created.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services region in which this Amazon DataZone environment profile is
   *          created.</p>
   * @public
   */
  awsAccountRegion?: string;

  /**
   * <p>The Amazon DataZone user who created this environment profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when this environment profile was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when this environment profile was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The name of this Amazon DataZone environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone environment profile.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project in which this environment profile is created.</p>
   * @public
   */
  projectId?: string;

  /**
   * <p>The user parameters of this Amazon DataZone environment profile.</p>
   * @public
   */
  userParameters?: CustomParameter[];
}

/**
 * <p>The model of the API.</p>
 * @public
 */
export type Model = Model.SmithyMember | Model.$UnknownMember;

/**
 * @public
 */
export namespace Model {
  /**
   * <p>Indicates the smithy model of the API.</p>
   * @public
   */
  export interface SmithyMember {
    smithy: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    smithy?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    smithy: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Model, visitor: Visitor<T>): T => {
    if (value.smithy !== undefined) return visitor.smithy(value.smithy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const FormTypeStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type FormTypeStatus = (typeof FormTypeStatus)[keyof typeof FormTypeStatus];

/**
 * @public
 */
export interface CreateFormTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this Amazon DataZone metadata form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The model of this Amazon DataZone metadata form type.</p>
   * @public
   */
  model: Model | undefined;

  /**
   * <p>The ID of the Amazon DataZone project that owns this metadata form type.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The status of this Amazon DataZone metadata form type.</p>
   * @public
   */
  status?: FormTypeStatus;

  /**
   * <p>The description of this Amazon DataZone metadata form type.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateFormTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of this Amazon DataZone metadata form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of this Amazon DataZone metadata form type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The description of this Amazon DataZone metadata form type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the project that owns this Amazon DataZone metadata form type.</p>
   * @public
   */
  owningProjectId?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type was originally
   *          created.</p>
   * @public
   */
  originDomainId?: string;

  /**
   * <p>The ID of the project in which this Amazon DataZone metadata form type was originally
   *          created.</p>
   * @public
   */
  originProjectId?: string;
}

/**
 * @public
 * @enum
 */
export const GlossaryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type GlossaryStatus = (typeof GlossaryStatus)[keyof typeof GlossaryStatus];

/**
 * @public
 */
export interface CreateGlossaryInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of this business glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the project that currently owns business glossary.</p>
   * @public
   */
  owningProjectIdentifier: string | undefined;

  /**
   * <p>The description of this business glossary.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of this business glossary.</p>
   * @public
   */
  status?: GlossaryStatus;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateGlossaryOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of this business glossary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of this business glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the project that currently owns this business glossary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The description of this business glossary.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of this business glossary.</p>
   * @public
   */
  status?: GlossaryStatus;
}

/**
 * @public
 * @enum
 */
export const GlossaryTermStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type GlossaryTermStatus = (typeof GlossaryTermStatus)[keyof typeof GlossaryTermStatus];

/**
 * <p>The details of the term relations.</p>
 * @public
 */
export interface TermRelations {
  /**
   * <p>The <code>isA</code> property of the term relations.</p>
   * @public
   */
  isA?: string[];

  /**
   * <p>The classifies of the term relations.</p>
   * @public
   */
  classifies?: string[];
}

/**
 * @public
 */
export interface CreateGlossaryTermInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary in which this term is created.</p>
   * @public
   */
  glossaryIdentifier: string | undefined;

  /**
   * <p>The name of this business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of this business glossary term.</p>
   * @public
   */
  status?: GlossaryTermStatus;

  /**
   * <p>The short description of this business glossary term.</p>
   * @public
   */
  shortDescription?: string;

  /**
   * <p>The long description of this business glossary term.</p>
   * @public
   */
  longDescription?: string;

  /**
   * <p>The term relations of this business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateGlossaryTermOutput {
  /**
   * <p>The ID of this business glossary term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the business glossary in which this term is created.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The name of this business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of this business glossary term.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The short description of this business glossary term.</p>
   * @public
   */
  shortDescription?: string;

  /**
   * <p>The long description of this business glossary term.</p>
   * @public
   */
  longDescription?: string;

  /**
   * <p>The term relations of this business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations;
}

/**
 * @public
 */
export interface CreateGroupProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the group for which the group profile is created.</p>
   * @public
   */
  groupIdentifier: string | undefined;

  /**
   * <p> A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const GroupProfileStatus = {
  ASSIGNED: "ASSIGNED",
  NOT_ASSIGNED: "NOT_ASSIGNED",
} as const;

/**
 * @public
 */
export type GroupProfileStatus = (typeof GroupProfileStatus)[keyof typeof GroupProfileStatus];

/**
 * @public
 */
export interface CreateGroupProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile is created.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The status of the group profile.</p>
   * @public
   */
  status?: GroupProfileStatus;

  /**
   * <p>The name of the group for which group profile is created.</p>
   * @public
   */
  groupName?: string;
}

/**
 * @public
 * @enum
 */
export const EntityType = {
  ASSET: "ASSET",
} as const;

/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 */
export interface CreateListingChangeSetInput {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of an entity.</p>
   * @public
   */
  entityType: EntityType | undefined;

  /**
   * <p>The revision of an asset.</p>
   * @public
   */
  entityRevision?: string;

  /**
   * <p>Specifies whether to publish or unpublish a listing.</p>
   * @public
   */
  action: ChangeAction | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateListingChangeSetOutput {
  /**
   * <p>The ID of the listing (a record of an asset at a given time).</p>
   * @public
   */
  listingId: string | undefined;

  /**
   * <p>The revision of a listing.</p>
   * @public
   */
  listingRevision: string | undefined;

  /**
   * <p>Specifies the status of the listing.</p>
   * @public
   */
  status: ListingStatus | undefined;
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this project is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The name of the Amazon DataZone project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the Amazon DataZone project.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The glossary terms that can be used in this Amazon DataZone project.</p>
   * @public
   */
  glossaryTerms?: string[];
}

/**
 * <p>Specifies the error message that is returned if the operation cannot be successfully
 *          completed.</p>
 * @public
 */
export interface ProjectDeletionError {
  /**
   * <p>The code of the project deletion error.</p>
   * @public
   */
  code?: string;

  /**
   * <p>The message of the project deletion error.</p>
   * @public
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  ACTIVE: "ACTIVE",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the project was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the Amazon DataZone project that was created.</p>
   * @public
   */
  projectStatus?: ProjectStatus;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  failureReasons?: ProjectDeletionError[];

  /**
   * <p>The Amazon DataZone user who created the project.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the project was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the project was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The glossary terms that can be used in the project.</p>
   * @public
   */
  glossaryTerms?: string[];
}

/**
 * @public
 * @enum
 */
export const UserDesignation = {
  PROJECT_CONTRIBUTOR: "PROJECT_CONTRIBUTOR",
  PROJECT_OWNER: "PROJECT_OWNER",
} as const;

/**
 * @public
 */
export type UserDesignation = (typeof UserDesignation)[keyof typeof UserDesignation];

/**
 * <p>The details about a project member.</p>
 * @public
 */
export type Member = Member.GroupIdentifierMember | Member.UserIdentifierMember | Member.$UnknownMember;

/**
 * @public
 */
export namespace Member {
  /**
   * <p>The user ID of a project member.</p>
   * @public
   */
  export interface UserIdentifierMember {
    userIdentifier: string;
    groupIdentifier?: never;
    $unknown?: never;
  }

  /**
   * <p>The ID of the group of a project member.</p>
   * @public
   */
  export interface GroupIdentifierMember {
    userIdentifier?: never;
    groupIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    userIdentifier?: never;
    groupIdentifier?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    userIdentifier: (value: string) => T;
    groupIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Member, visitor: Visitor<T>): T => {
    if (value.userIdentifier !== undefined) return visitor.userIdentifier(value.userIdentifier);
    if (value.groupIdentifier !== undefined) return visitor.groupIdentifier(value.groupIdentifier);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateProjectMembershipInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which project membership is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the project for which this project membership was created.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The project member whose project membership was created.</p>
   * @public
   */
  member: Member | undefined;

  /**
   * <p>The designation of the project membership.</p>
   * @public
   */
  designation: UserDesignation | undefined;
}

/**
 * @public
 */
export interface CreateProjectMembershipOutput {}

/**
 * <p>A revision to be made to an asset published in a Amazon DataZone catalog.</p>
 * @public
 */
export interface ListingRevisionInput {
  /**
   * <p>An identifier of revision to be made to an asset published in a Amazon DataZone
   *          catalog.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The details of a revision to be made to an asset published in a Amazon DataZone
   *          catalog.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>The details of a listing for which a subscription is to be granted.</p>
 * @public
 */
export type GrantedEntityInput = GrantedEntityInput.ListingMember | GrantedEntityInput.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntityInput {
  /**
   * <p>The listing for which a subscription is to be granted.</p>
   * @public
   */
  export interface ListingMember {
    listing: ListingRevisionInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    listing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    listing: (value: ListingRevisionInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GrantedEntityInput, visitor: Visitor<T>): T => {
    if (value.listing !== undefined) return visitor.listing(value.listing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateSubscriptionGrantInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment in which the subscription grant is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription target for which the subscription grant is created.</p>
   * @public
   */
  subscriptionTargetIdentifier: string | undefined;

  /**
   * <p>The entity to which the subscription is to be granted.</p>
   * @public
   */
  grantedEntity: GrantedEntityInput | undefined;

  /**
   * <p>The names of the assets for which the subscription grant is created.</p>
   * @public
   */
  assetTargetNames?: AssetTargetNameMap[];

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>Specifies the error message that is returned if the operation cannot be successfully
 *          completed.</p>
 * @public
 */
export interface FailureCause {
  /**
   * <p>The description of the error message.</p>
   * @public
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const SubscriptionGrantStatus = {
  GRANTED: "GRANTED",
  GRANT_FAILED: "GRANT_FAILED",
  GRANT_IN_PROGRESS: "GRANT_IN_PROGRESS",
  GRANT_PENDING: "GRANT_PENDING",
  REVOKED: "REVOKED",
  REVOKE_FAILED: "REVOKE_FAILED",
  REVOKE_IN_PROGRESS: "REVOKE_IN_PROGRESS",
  REVOKE_PENDING: "REVOKE_PENDING",
} as const;

/**
 * @public
 */
export type SubscriptionGrantStatus = (typeof SubscriptionGrantStatus)[keyof typeof SubscriptionGrantStatus];

/**
 * <p>The details of the asset for which the subscription grant is created.</p>
 * @public
 */
export interface SubscribedAsset {
  /**
   * <p>The identifier of the asset for which the subscription grant is created.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The revision of the asset for which the subscription grant is created.</p>
   * @public
   */
  assetRevision: string | undefined;

  /**
   * <p>The status of the asset for which the subscription grant is created.</p>
   * @public
   */
  status: SubscriptionGrantStatus | undefined;

  /**
   * <p>The target name of the asset for which the subscription grant is created.</p>
   * @public
   */
  targetName?: string;

  /**
   * <p>The failure cause included in the details of the asset for which the subscription grant
   *          is created.</p>
   * @public
   */
  failureCause?: FailureCause;

  /**
   * <p>The timestamp of when the subscription grant to the asset is created.</p>
   * @public
   */
  grantedTimestamp?: Date;

  /**
   * <p>The failure timestamp included in the details of the asset for which the subscription
   *          grant is created.</p>
   * @public
   */
  failureTimestamp?: Date;
}

/**
 * <p>A revision of an asset published in a Amazon DataZone catalog.</p>
 * @public
 */
export interface ListingRevision {
  /**
   * <p>An identifier of a revision of an asset published in a Amazon DataZone catalog.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The details of a revision of an asset published in a Amazon DataZone catalog.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * <p>The details of a listing for which a subscription is granted.</p>
 * @public
 */
export type GrantedEntity = GrantedEntity.ListingMember | GrantedEntity.$UnknownMember;

/**
 * @public
 */
export namespace GrantedEntity {
  /**
   * <p>The listing for which a subscription is granted.</p>
   * @public
   */
  export interface ListingMember {
    listing: ListingRevision;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    listing?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    listing: (value: ListingRevision) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GrantedEntity, visitor: Visitor<T>): T => {
    if (value.listing !== undefined) return visitor.listing(value.listing);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const SubscriptionGrantOverallStatus = {
  COMPLETED: "COMPLETED",
  GRANT_AND_REVOKE_FAILED: "GRANT_AND_REVOKE_FAILED",
  GRANT_FAILED: "GRANT_FAILED",
  INACCESSIBLE: "INACCESSIBLE",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  REVOKE_FAILED: "REVOKE_FAILED",
} as const;

/**
 * @public
 */
export type SubscriptionGrantOverallStatus =
  (typeof SubscriptionGrantOverallStatus)[keyof typeof SubscriptionGrantOverallStatus];

/**
 * @public
 */
export interface CreateSubscriptionGrantOutput {
  /**
   * <p>The ID of the subscription grant.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription grant.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>A timestamp of when the subscription grant is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>A timestamp of when the subscription grant was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ID of the subscription target for which the subscription grant is created.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The entity to which the subscription is granted.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status of the subscription grant.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p>The assets for which the subscription grant is created.</p>
   * @public
   */
  assets?: SubscribedAsset[];

  /**
   * <p>The identifier of the subscription grant.</p>
   * @public
   */
  subscriptionId?: string;
}

/**
 * <p>The published asset for which the subscription grant is to be created.</p>
 * @public
 */
export interface SubscribedListingInput {
  /**
   * <p>The identifier of the published asset for which the subscription grant is to be
   *          created.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>The project that is to be given a subscription grant.</p>
 * @public
 */
export interface SubscribedProjectInput {
  /**
   * <p>The identifier of the project that is to be given a subscription grant.</p>
   * @public
   */
  identifier?: string;
}

/**
 * <p>The principal that is to be given a subscriptiong grant.</p>
 * @public
 */
export type SubscribedPrincipalInput = SubscribedPrincipalInput.ProjectMember | SubscribedPrincipalInput.$UnknownMember;

/**
 * @public
 */
export namespace SubscribedPrincipalInput {
  /**
   * <p>The project that is to be given a subscription grant.</p>
   * @public
   */
  export interface ProjectMember {
    project: SubscribedProjectInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    project?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    project: (value: SubscribedProjectInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SubscribedPrincipalInput, visitor: Visitor<T>): T => {
    if (value.project !== undefined) return visitor.project(value.project);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateSubscriptionRequestInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription request is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The Amazon DataZone principals for whom the subscription request is created.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipalInput[] | undefined;

  /**
   * <p>The published asset for which the subscription grant is to be created.</p>
   * @public
   */
  subscribedListings: SubscribedListingInput[] | undefined;

  /**
   * <p>The reason for the subscription request.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateSubscriptionRequestOutput {
  /**
   * <p>The ID of the subscription request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in whcih the subscription request is created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>A timestamp of when the subscription request is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the subscription request.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>The subscribed principals of the subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The published asset for which the subscription grant is to be created.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The ID of the reviewer of the subscription request.</p>
   * @public
   */
  reviewerId?: string;

  /**
   * <p>The decision comment of the subscription request.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * <p>The details of the subscription target configuration.</p>
 * @public
 */
export interface SubscriptionTargetForm {
  /**
   * <p>The form name included in the subscription target configuration.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The content of the subscription target configuration.</p>
   * @public
   */
  content: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionTargetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which subscription target is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment in which subscription target is created.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The name of the subscription target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the subscription target.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The configuration of the subscription target.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The authorized principals of the subscription target.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The manage access role that is used to create the subscription target.</p>
   * @public
   */
  manageAccessRole: string | undefined;

  /**
   * <p>The asset types that can be included in the subscription target.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The provider of the subscription target.</p>
   * @public
   */
  provider?: string;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface CreateSubscriptionTargetOutput {
  /**
   * <p>The ID of the subscription target.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The authorised principals of the subscription target.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription target was created.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>???</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environment in which the subscription target was created.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the subscription target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the subscription target.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription target.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The timestamp of when the subscription target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription target was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The manage access role with which the subscription target was created.</p>
   * @public
   */
  manageAccessRole: string | undefined;

  /**
   * <p>The asset types that can be included in the subscription target.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The configuration of the subscription target.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The provider of the subscription target.</p>
   * @public
   */
  provider: string | undefined;
}

/**
 * @public
 * @enum
 */
export const UserType = {
  IAM_ROLE: "IAM_ROLE",
  IAM_USER: "IAM_USER",
  SSO_USER: "SSO_USER",
} as const;

/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 */
export interface CreateUserProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a user profile is created.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the user for which the user profile is created.</p>
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * <p>The user type of the user for which the user profile is created.</p>
   * @public
   */
  userType?: UserType;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * <p>The details of an IAM user profile in Amazon DataZone.</p>
 * @public
 */
export interface IamUserProfileDetails {
  /**
   * <p>The ARN of an IAM user profile in Amazon DataZone.</p>
   * @public
   */
  arn?: string;
}

/**
 * <p>The single sign-on details of the user profile.</p>
 * @public
 */
export interface SsoUserProfileDetails {
  /**
   * <p>The username included in the single sign-on details of the user profile.</p>
   * @public
   */
  username?: string;

  /**
   * <p>The first name included in the single sign-on details of the user profile.</p>
   * @public
   */
  firstName?: string;

  /**
   * <p>The last name included in the single sign-on details of the user profile.</p>
   * @public
   */
  lastName?: string;
}

/**
 * <p>The details of the user profile in Amazon DataZone.</p>
 * @public
 */
export type UserProfileDetails =
  | UserProfileDetails.IamMember
  | UserProfileDetails.SsoMember
  | UserProfileDetails.$UnknownMember;

/**
 * @public
 */
export namespace UserProfileDetails {
  /**
   * <p>The IAM details included in the user profile details.</p>
   * @public
   */
  export interface IamMember {
    iam: IamUserProfileDetails;
    sso?: never;
    $unknown?: never;
  }

  /**
   * <p>The single sign-on details included in the user profile details.</p>
   * @public
   */
  export interface SsoMember {
    iam?: never;
    sso: SsoUserProfileDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    iam?: never;
    sso?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    iam: (value: IamUserProfileDetails) => T;
    sso: (value: SsoUserProfileDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UserProfileDetails, visitor: Visitor<T>): T => {
    if (value.iam !== undefined) return visitor.iam(value.iam);
    if (value.sso !== undefined) return visitor.sso(value.sso);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const UserProfileStatus = {
  ACTIVATED: "ACTIVATED",
  ASSIGNED: "ASSIGNED",
  DEACTIVATED: "DEACTIVATED",
  NOT_ASSIGNED: "NOT_ASSIGNED",
} as const;

/**
 * @public
 */
export type UserProfileStatus = (typeof UserProfileStatus)[keyof typeof UserProfileStatus];

/**
 * @public
 * @enum
 */
export const UserProfileType = {
  IAM: "IAM",
  SSO: "SSO",
} as const;

/**
 * @public
 */
export type UserProfileType = (typeof UserProfileType)[keyof typeof UserProfileType];

/**
 * @public
 */
export interface CreateUserProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a user profile is created.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The identifier of the user profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType;

  /**
   * <p>The status of the user profile.</p>
   * @public
   */
  status?: UserProfileStatus;

  /**
   * <p>The details of the user profile in Amazon DataZone.</p>
   * @public
   */
  details?: UserProfileDetails;
}

/**
 * @public
 * @enum
 */
export const DataAssetActivityStatus = {
  FAILED: "FAILED",
  PUBLISHING_FAILED: "PUBLISHING_FAILED",
  SKIPPED_ALREADY_IMPORTED: "SKIPPED_ALREADY_IMPORTED",
  SKIPPED_ARCHIVED: "SKIPPED_ARCHIVED",
  SKIPPED_NO_ACCESS: "SKIPPED_NO_ACCESS",
  SUCCEEDED_CREATED: "SUCCEEDED_CREATED",
  SUCCEEDED_UPDATED: "SUCCEEDED_UPDATED",
  UNCHANGED: "UNCHANGED",
} as const;

/**
 * @public
 */
export type DataAssetActivityStatus = (typeof DataAssetActivityStatus)[keyof typeof DataAssetActivityStatus];

/**
 * @public
 */
export interface DeleteDataSourceInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the data source is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source that is deleted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies that the granted permissions are retained in case of a self-subscribe
   *          functionality failure for a data source.</p>
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean;
}

/**
 * @public
 * @enum
 */
export const SelfGrantStatus = {
  GRANTED: "GRANTED",
  GRANT_FAILED: "GRANT_FAILED",
  GRANT_IN_PROGRESS: "GRANT_IN_PROGRESS",
  GRANT_PENDING: "GRANT_PENDING",
  REVOKE_FAILED: "REVOKE_FAILED",
  REVOKE_IN_PROGRESS: "REVOKE_IN_PROGRESS",
  REVOKE_PENDING: "REVOKE_PENDING",
} as const;

/**
 * @public
 */
export type SelfGrantStatus = (typeof SelfGrantStatus)[keyof typeof SelfGrantStatus];

/**
 * <p>The details for the self granting status.</p>
 * @public
 */
export interface SelfGrantStatusDetail {
  /**
   * <p>The name of the database used for the data source.</p>
   * @public
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the schema used in the data source.</p>
   * @public
   */
  schemaName?: string;

  /**
   * <p>The self granting status of the data source.</p>
   * @public
   */
  status: SelfGrantStatus | undefined;

  /**
   * <p>The reason for why the operation failed.</p>
   * @public
   */
  failureCause?: string;
}

/**
 * <p>The details of the self granting status.</p>
 * @public
 */
export interface GlueSelfGrantStatusOutput {
  /**
   * <p>The details for the self granting status for a Glue data source.</p>
   * @public
   */
  selfGrantStatusDetails: SelfGrantStatusDetail[] | undefined;
}

/**
 * <p>The details for the self granting status for an Amazon Redshift data source.</p>
 * @public
 */
export interface RedshiftSelfGrantStatusOutput {
  /**
   * <p>The details for the self granting status for an Amazon Redshift data source.</p>
   * @public
   */
  selfGrantStatusDetails: SelfGrantStatusDetail[] | undefined;
}

/**
 * <p>The details for the self granting status for a data source.</p>
 * @public
 */
export type SelfGrantStatusOutput =
  | SelfGrantStatusOutput.GlueSelfGrantStatusMember
  | SelfGrantStatusOutput.RedshiftSelfGrantStatusMember
  | SelfGrantStatusOutput.$UnknownMember;

/**
 * @public
 */
export namespace SelfGrantStatusOutput {
  /**
   * <p>The details for the self granting status for a Glue data source.</p>
   * @public
   */
  export interface GlueSelfGrantStatusMember {
    glueSelfGrantStatus: GlueSelfGrantStatusOutput;
    redshiftSelfGrantStatus?: never;
    $unknown?: never;
  }

  /**
   * <p>The details for the self granting status for an Amazon Redshift data source.</p>
   * @public
   */
  export interface RedshiftSelfGrantStatusMember {
    glueSelfGrantStatus?: never;
    redshiftSelfGrantStatus: RedshiftSelfGrantStatusOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    glueSelfGrantStatus?: never;
    redshiftSelfGrantStatus?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    glueSelfGrantStatus: (value: GlueSelfGrantStatusOutput) => T;
    redshiftSelfGrantStatus: (value: RedshiftSelfGrantStatusOutput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelfGrantStatusOutput, visitor: Visitor<T>): T => {
    if (value.glueSelfGrantStatus !== undefined) return visitor.glueSelfGrantStatus(value.glueSelfGrantStatus);
    if (value.redshiftSelfGrantStatus !== undefined)
      return visitor.redshiftSelfGrantStatus(value.redshiftSelfGrantStatus);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface DeleteDataSourceOutput {
  /**
   * <p>The ID of the data source that is deleted.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of this data source.</p>
   * @public
   */
  status?: DataSourceStatus;

  /**
   * <p>The type of this data source.</p>
   * @public
   */
  type?: string;

  /**
   * <p>The name of the data source that is deleted.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source that is deleted.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which the data source is deleted.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the project in which this data source exists and from which it's
   *          deleted.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environemnt associated with this data source.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The configuration of the data source that is deleted.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput;

  /**
   * <p>The enable setting of the data source that specifies whether the data source is enabled
   *          or disabled.</p>
   * @public
   */
  enableSetting?: EnableSetting;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean;

  /**
   * <p>The asset data forms associated with this data source.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[];

  /**
   * <p>The schedule of runs for this data source.</p>
   * @public
   */
  schedule?: ScheduleConfiguration;

  /**
   * <p>The status of the last run of this data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * <p>The timestamp of when the data source was last run.</p>
   * @public
   */
  lastRunAt?: Date;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * <p>The timestamp of when this data source was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when this data source was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>Specifies the status of the self-granting functionality.</p>
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput;

  /**
   * <p>Specifies that the granted permissions are retained in case of a self-subscribe
   *          functionality failure for a data source.</p>
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean;
}

/**
 * @public
 */
export interface GetDataSourceInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone data source.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataSourceOutput {
  /**
   * <p>The ID of the data source.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DataSourceStatus;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type?: string;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the data source.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the project where the data source creates and publishes assets.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environment where this data source creates and publishes assets,</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The configuration of the data source.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput;

  /**
   * <p>The recommendation configuration of the data source.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration;

  /**
   * <p>Specifies whether this data source is enabled or not.</p>
   * @public
   */
  enableSetting?: EnableSetting;

  /**
   * <p>Specifies whether the assets that this data source creates in the inventory are to be
   *          also automatically published to the catalog.</p>
   * @public
   */
  publishOnImport?: boolean;

  /**
   * <p>The metadata forms attached to the assets created by this data source.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[];

  /**
   * <p>The schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration;

  /**
   * <p>The status of the last run of the data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * <p>The timestamp of the last run of the data source.</p>
   * @public
   */
  lastRunAt?: Date;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * <p>The number of assets created by the data source during its last run.</p>
   * @public
   */
  lastRunAssetCount?: number;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * <p>The timestamp of when the data source was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>Specifies the status of the self-granting functionality.</p>
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput;
}

/**
 * @public
 */
export interface ListDataSourcesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to list the data sources.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project in which to list data sources.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment in which to list the data sources.</p>
   * @public
   */
  environmentIdentifier?: string;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type?: string;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DataSourceStatus;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name?: string;

  /**
   * <p>When the number of data sources is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of data sources, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListDataSources</code> to
   *          list the next set of data sources.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of data sources to return in a single call to
   *             <code>ListDataSources</code>. When the number of data sources to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListDataSources</code> to list the
   *          next set of data sources.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The details of the data source.</p>
 * @public
 */
export interface DataSourceSummary {
  /**
   * <p>The ID of the Amazon DataZone domain in which the data source exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the environment in which the data source exists.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the data source.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The name of the data source.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the data source.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status: DataSourceStatus | undefined;

  /**
   * <p>Specifies whether the data source is enabled.</p>
   * @public
   */
  enableSetting?: EnableSetting;

  /**
   * <p>The details of the schedule of the data source runs.</p>
   * @public
   */
  schedule?: ScheduleConfiguration;

  /**
   * <p>The status of the last data source run.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * <p>The timestamp of when the data source run was last performed.</p>
   * @public
   */
  lastRunAt?: Date;

  /**
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * <p>The count of the assets created during the last data source run.</p>
   * @public
   */
  lastRunAssetCount?: number;

  /**
   * <p>The timestamp of when the data source was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSourcesOutput {
  /**
   * <p>The results of the <code>ListDataSources</code> action.</p>
   * @public
   */
  items: DataSourceSummary[] | undefined;

  /**
   * <p>When the number of data sources is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of data sources, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListDataSources</code> to
   *          list the next set of data sources.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDataSourceInput {
  /**
   * <p>The identifier of the domain in which to update a data source.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The enable setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  enableSetting?: EnableSetting;

  /**
   * <p>The publish on import setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  publishOnImport?: boolean;

  /**
   * <p>The asset forms to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  assetFormsInput?: FormInput[];

  /**
   * <p>The schedule to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  schedule?: ScheduleConfiguration;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  configuration?: DataSourceConfigurationInput;

  /**
   * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration;

  /**
   * <p>Specifies that the granted permissions are retained in case of a self-subscribe
   *          functionality failure for a data source.</p>
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean;
}

/**
 * @public
 */
export interface UpdateDataSourceOutput {
  /**
   * <p>The identifier of the data source to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  status?: DataSourceStatus;

  /**
   * <p>The type to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  type?: string;

  /**
   * <p>The name to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a data source is to be updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the project where data source is to be updated.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the environment in which a data source is to be updated.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The configuration to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  configuration?: DataSourceConfigurationOutput;

  /**
   * <p>The recommendation to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  recommendation?: RecommendationConfiguration;

  /**
   * <p>The enable setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  enableSetting?: EnableSetting;

  /**
   * <p>The publish on import setting to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  publishOnImport?: boolean;

  /**
   * <p>The asset forms to be updated as part of the <code>UpdateDataSource</code>
   *          action.</p>
   * @public
   */
  assetFormsOutput?: FormOutput[];

  /**
   * <p>The schedule to be updated as part of the <code>UpdateDataSource</code> action.</p>
   * @public
   */
  schedule?: ScheduleConfiguration;

  /**
   * <p>The last run status of the data source.</p>
   * @public
   */
  lastRunStatus?: DataSourceRunStatus;

  /**
   * <p>The timestamp of when the data source was last run.</p>
   * @public
   */
  lastRunAt?: Date;

  /**
   * <p>The last run error message of the data source.</p>
   * @public
   */
  lastRunErrorMessage?: DataSourceErrorMessage;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the data source was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>Specifies the status of the self-granting functionality.</p>
   * @public
   */
  selfGrantStatus?: SelfGrantStatusOutput;

  /**
   * <p>Specifies that the granted permissions are retained in case of a self-subscribe
   *          functionality failure for a data source.</p>
   * @public
   */
  retainPermissionsOnRevokeFailure?: boolean;
}

/**
 * @public
 * @enum
 */
export const DataSourceRunType = {
  PRIORITIZED: "PRIORITIZED",
  SCHEDULED: "SCHEDULED",
} as const;

/**
 * @public
 */
export type DataSourceRunType = (typeof DataSourceRunType)[keyof typeof DataSourceRunType];

/**
 * @public
 */
export interface GetDataSourceRunInput {
  /**
   * <p>The ID of the domain in which this data source run was performed.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data source run.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * <p>The asset statistics from the data source run.</p>
 * @public
 */
export interface RunStatisticsForAssets {
  /**
   * <p>The <code>added</code> statistic for the data source run.</p>
   * @public
   */
  added?: number;

  /**
   * <p>The <code>updated</code> statistic for the data source run.</p>
   * @public
   */
  updated?: number;

  /**
   * <p>The <code>unchanged</code> statistic for the data source run.</p>
   * @public
   */
  unchanged?: number;

  /**
   * <p>The <code>skipped</code> statistic for the data source run.</p>
   * @public
   */
  skipped?: number;

  /**
   * <p>The <code>failed</code> statistic for the data source run.</p>
   * @public
   */
  failed?: number;
}

/**
 * @public
 */
export interface GetDataSourceRunOutput {
  /**
   * <p>The ID of the domain in which this data source run was performed.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the data source for this data source run.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The ID of the data source run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the project in which this data source run occured.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The status of this data source run.</p>
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * <p>The type of this data source run.</p>
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * <p>The configuration snapshot of the data source run.</p>
   * @public
   */
  dataSourceConfigurationSnapshot?: string;

  /**
   * <p>The asset statistics from this data source run.</p>
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * <p>The timestamp of when the data source run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when this data source run was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The timestamp of when this data source run started.</p>
   * @public
   */
  startedAt?: Date;

  /**
   * <p>The timestamp of when this data source run stopped.</p>
   * @public
   */
  stoppedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSourceRunsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to invoke the
   *             <code>ListDataSourceRuns</code> action.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source.</p>
   * @public
   */
  dataSourceIdentifier: string | undefined;

  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DataSourceRunStatus;

  /**
   * <p>When the number of runs is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of runs, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of runs to return in a single call to
   *          <code>ListDataSourceRuns</code>. When the number of runs to be listed is greater than the
   *          value of <code>MaxResults</code>, the response contains a <code>NextToken</code> value that
   *          you can use in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The details of a data source run.</p>
 * @public
 */
export interface DataSourceRunSummary {
  /**
   * <p>The identifier of the data source run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the data source of the data source run.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The type of the data source run.</p>
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * <p>The status of the data source run.</p>
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * <p>The project ID of the data source run.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The asset statistics from the data source run.</p>
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets;

  /**
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * <p>The timestamp of when a data source run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when a data source run was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The timestamp of when a data source run was started.</p>
   * @public
   */
  startedAt?: Date;

  /**
   * <p>The timestamp of when a data source run was stopped.</p>
   * @public
   */
  stoppedAt?: Date;
}

/**
 * @public
 */
export interface ListDataSourceRunsOutput {
  /**
   * <p>The results of the <code>ListDataSourceRuns</code> action.</p>
   * @public
   */
  items: DataSourceRunSummary[] | undefined;

  /**
   * <p>When the number of runs is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of runs, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDataSourceRuns</code> to list the next set of
   *          runs.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartDataSourceRunInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to start a data source run.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source.</p>
   * @public
   */
  dataSourceIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface StartDataSourceRunOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to start a data source run.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the data source.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The identifier of the data source run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The status of the data source run.</p>
   * @public
   */
  status: DataSourceRunStatus | undefined;

  /**
   * <p>The type of the data source run.</p>
   * @public
   */
  type: DataSourceRunType | undefined;

  /**
   * <p>The configuration snapshot of the data source that is being run.</p>
   * @public
   */
  dataSourceConfigurationSnapshot?: string;

  /**
   * <p>Specifies run statistics for assets.</p>
   * @public
   */
  runStatisticsForAssets?: RunStatisticsForAssets;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * <p>The timestamp of when data source run was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the data source run was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the data source run was started.</p>
   * @public
   */
  startedAt?: Date;

  /**
   * <p>The timestamp of when the data source run was stopped.</p>
   * @public
   */
  stoppedAt?: Date;
}

/**
 * <p>The activity details of the data source run.</p>
 * @public
 */
export interface DataSourceRunActivity {
  /**
   * <p>The database included in the data source run activity.</p>
   * @public
   */
  database: string | undefined;

  /**
   * <p>The identifier of the data source for the data source run activity.</p>
   * @public
   */
  dataSourceRunId: string | undefined;

  /**
   * <p>The technical name included in the data source run activity.</p>
   * @public
   */
  technicalName: string | undefined;

  /**
   * <p>The status of the asset included in the data source run activity.</p>
   * @public
   */
  dataAssetStatus: DataAssetActivityStatus | undefined;

  /**
   * <p>The project ID included in the data source run activity.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The identifier of the asset included in the data source run activity.</p>
   * @public
   */
  dataAssetId?: string;

  /**
   * <p>The technical description included in the data source run activity.</p>
   * @public
   */
  technicalDescription?: string;

  /**
   * <p>The details of the error message that is returned if the operation cannot be
   *          successfully completed.</p>
   * @public
   */
  errorMessage?: DataSourceErrorMessage;

  /**
   * <p>The timestamp of when data source run activity was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when data source run activity was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAssetFilterInput {
  /**
   * <p>The ID of the domain where you want to delete an asset filter.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The ID of the asset filter that you want to delete.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment that is to be deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentActionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which an environment action is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment where an environment action is deleted.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the environment action that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentProfileInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment profile is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment profile that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the project is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the project that is to be deleted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specifies the optional flag to delete all child entities within the project.</p>
   * @public
   */
  skipDeletionCheck?: boolean;
}

/**
 * @public
 */
export interface DeleteProjectOutput {}

/**
 * @public
 */
export interface DeleteProjectMembershipInput {
  /**
   * <p>The ID of the Amazon DataZone domain where project membership is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project the membership to which is deleted.</p>
   * @public
   */
  projectIdentifier: string | undefined;

  /**
   * <p>The project member whose project membership is deleted.</p>
   * @public
   */
  member: Member | undefined;
}

/**
 * @public
 */
export interface DeleteProjectMembershipOutput {}

/**
 * @public
 */
export interface DeleteSubscriptionGrantInput {
  /**
   * <p>The ID of the Amazon DataZone domain where the subscription grant is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription grant that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionGrantOutput {
  /**
   * <p>The ID of the subscription grant that is deleted.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription grant that is deleted.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant that is deleted.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant is deleted.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The timestamp of when the subscription grant that is deleted was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription grant that is deleted was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ID of the subscription target associated with the subscription grant that is
   *          deleted.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The entity to which the subscription is deleted.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status of the subscription grant that is deleted.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p>The assets for which the subsctiption grant that is deleted gave access.</p>
   * @public
   */
  assets?: SubscribedAsset[];

  /**
   * <p>The identifier of the subsctiption whose subscription grant is to be deleted.</p>
   * @public
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface DeleteSubscriptionRequestInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription request is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription request that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriptionTargetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription target is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone environment in which the subscription target is deleted.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription target that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TimeSeriesEntityType = {
  ASSET: "ASSET",
  LISTING: "LISTING",
} as const;

/**
 * @public
 */
export type TimeSeriesEntityType = (typeof TimeSeriesEntityType)[keyof typeof TimeSeriesEntityType];

/**
 * @public
 */
export interface DeleteTimeSeriesDataPointsInput {
  /**
   * <p>The ID of the Amazon DataZone domain that houses the asset for which you want to delete
   *          a time series form.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset for which you want to delete a time series form.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset for which you want to delete a time series form.</p>
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * <p>The name of the time series form that you want to delete.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This field is
   *          automatically populated if not provided.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteTimeSeriesDataPointsOutput {}

/**
 * @public
 */
export interface DisassociateEnvironmentRoleInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which an environment role is disassociated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ARN of the environment role.</p>
   * @public
   */
  environmentRoleArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateEnvironmentRoleOutput {}

/**
 * @public
 */
export interface DeleteDomainInput {
  /**
   * <p>The identifier of the Amazon Web Services domain that is to be deleted.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;

  /**
   * <p>Specifies the optional flag to delete all child entities within the domain.</p>
   * @public
   */
  skipDeletionCheck?: boolean;
}

/**
 * @public
 */
export interface DeleteDomainOutput {
  /**
   * <p>The status of the domain.</p>
   * @public
   */
  status: DomainStatus | undefined;
}

/**
 * @public
 */
export interface GetDomainInput {
  /**
   * <p>The identifier of the specified Amazon DataZone domain.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDomainOutput {
  /**
   * <p>The identifier of the specified Amazon DataZone domain.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the Amazon DataZone domain.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the Amazon DataZone domain.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The single sing-on option of the specified Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn;

  /**
   * <p>The domain execution role with which the Amazon DataZone domain is created.</p>
   * @public
   */
  domainExecutionRole: string | undefined;

  /**
   * <p>The ARN of the specified Amazon DataZone domain.</p>
   * @public
   */
  arn?: string;

  /**
   * <p>The identifier of the Amazon Web Services Key Management Service (KMS) key that is used
   *          to encrypt the Amazon DataZone domain, metadata, and reporting data. </p>
   * @public
   */
  kmsKeyIdentifier?: string;

  /**
   * <p>The status of the specified Amazon DataZone domain.</p>
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * <p>The URL of the data portal for this Amazon DataZone domain.</p>
   * @public
   */
  portalUrl?: string;

  /**
   * <p>The timestamp of when the Amazon DataZone domain was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the Amazon DataZone domain was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The tags specified for the Amazon DataZone domain.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDomainsInput {
  /**
   * <p>The status of the data source.</p>
   * @public
   */
  status?: DomainStatus;

  /**
   * <p>The maximum number of domains to return in a single call to <code>ListDomains</code>.
   *          When the number of domains to be listed is greater than the value of
   *             <code>MaxResults</code>, the response contains a <code>NextToken</code> value that you
   *          can use in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of domains is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of domains, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>A summary of a Amazon DataZone domain.</p>
 * @public
 */
export interface DomainSummary {
  /**
   * <p>The ID of the Amazon DataZone domain.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A name of an Amazon DataZone domain.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of an Amazon DataZone domain.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ARN of the Amazon DataZone domain.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The identifier of the Amazon Web Services account that manages the domain.</p>
   * @public
   */
  managedAccountId: string | undefined;

  /**
   * <p>The status of the Amazon DataZone domain.</p>
   * @public
   */
  status: DomainStatus | undefined;

  /**
   * <p>The data portal URL for the Amazon DataZone domain.</p>
   * @public
   */
  portalUrl?: string;

  /**
   * <p>A timestamp of when a Amazon DataZone domain was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>A timestamp of when a Amazon DataZone domain was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface ListDomainsOutput {
  /**
   * <p>The results of the <code>ListDomains</code> action.</p>
   * @public
   */
  items: DomainSummary[] | undefined;

  /**
   * <p>When the number of domains is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of domains, the response includes a
   *          pagination token named <code>NextToken</code>. You can specify this <code>NextToken</code>
   *          value in a subsequent call to <code>ListDomains</code> to list the next set of
   *          domains.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDomainInput {
  /**
   * <p>The ID of the Amazon Web Services domain that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateDomain</code> action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The single sign-on option to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   * @public
   */
  singleSignOn?: SingleSignOn;

  /**
   * <p>The domain execution role to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   * @public
   */
  domainExecutionRole?: string;

  /**
   * <p>The name to be updated as part of the <code>UpdateDomain</code> action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateDomainOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateDomain</code> action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The single sign-on option of the Amazon DataZone domain.</p>
   * @public
   */
  singleSignOn?: SingleSignOn;

  /**
   * <p>The domain execution role to be updated as part of the <code>UpdateDomain</code>
   *          action.</p>
   * @public
   */
  domainExecutionRole?: string;

  /**
   * <p>The name to be updated as part of the <code>UpdateDomain</code> action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>Specifies the timestamp of when the domain was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;
}

/**
 * @public
 */
export interface DeleteEnvironmentBlueprintConfigurationInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the blueprint configuration is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the blueprint the configuration of which is deleted.</p>
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentBlueprintConfigurationOutput {}

/**
 * @public
 */
export interface GetEnvironmentBlueprintConfigurationInput {
  /**
   * <p>The ID of the Amazon DataZone domain where this blueprint exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>He ID of the blueprint.</p>
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;
}

/**
 * <p>The Lake Formation configuration of the Data Lake blueprint.</p>
 * @public
 */
export interface LakeFormationConfiguration {
  /**
   * <p>The role that is used to manage read/write access to the chosen Amazon S3 bucket(s) for
   *          Data Lake using AWS Lake Formation hybrid access mode.</p>
   * @public
   */
  locationRegistrationRole?: string;

  /**
   * <p>Specifies certain Amazon S3 locations if you do not want Amazon DataZone to
   *          automatically register them in hybrid mode. </p>
   * @public
   */
  locationRegistrationExcludeS3Locations?: string[];
}

/**
 * <p>The provisioning configuration of the blueprint.</p>
 * @public
 */
export type ProvisioningConfiguration =
  | ProvisioningConfiguration.LakeFormationConfigurationMember
  | ProvisioningConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ProvisioningConfiguration {
  /**
   * <p>The Lake Formation configuration of the Data Lake blueprint.</p>
   * @public
   */
  export interface LakeFormationConfigurationMember {
    lakeFormationConfiguration: LakeFormationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lakeFormationConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    lakeFormationConfiguration: (value: LakeFormationConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProvisioningConfiguration, visitor: Visitor<T>): T => {
    if (value.lakeFormationConfiguration !== undefined)
      return visitor.lakeFormationConfiguration(value.lakeFormationConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintConfigurationOutput {
  /**
   * <p>The ID of the Amazon DataZone domain where this blueprint exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the blueprint.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ARN of the provisioning role with which this blueprint is created.</p>
   * @public
   */
  provisioningRoleArn?: string;

  /**
   * <p>The ARN of the manage access role with which this blueprint is created.</p>
   * @public
   */
  manageAccessRoleArn?: string;

  /**
   * <p>The Amazon Web Services regions in which this blueprint is enabled.</p>
   * @public
   */
  enabledRegions?: string[];

  /**
   * <p>The regional parameters of the blueprint.</p>
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The timestamp of when this blueprint was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when this blueprint was upated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The provisioning configuration of a blueprint.</p>
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[];
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintConfigurationsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The maximum number of blueprint configurations to return in a single call to
   *             <code>ListEnvironmentBlueprintConfigurations</code>. When the number of configurations
   *          to be listed is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>When the number of blueprint configurations is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of configurations, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * <p>The configuration details of an environment blueprint.</p>
 * @public
 */
export interface EnvironmentBlueprintConfigurationItem {
  /**
   * <p>The identifier of the Amazon DataZone domain in which an environment blueprint exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the environment blueprint.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ARN of the provisioning role specified in the environment blueprint
   *          configuration.</p>
   * @public
   */
  provisioningRoleArn?: string;

  /**
   * <p>The ARN of the manage access role specified in the environment blueprint
   *          configuration.</p>
   * @public
   */
  manageAccessRoleArn?: string;

  /**
   * <p>The enabled Amazon Web Services Regions specified in a blueprint configuration.</p>
   * @public
   */
  enabledRegions?: string[];

  /**
   * <p>The regional parameters of the environment blueprint.</p>
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The timestamp of when an environment blueprint was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the environment blueprint was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The provisioning configuration of a blueprint.</p>
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[];
}

/**
 * @public
 */
export interface ListEnvironmentBlueprintConfigurationsOutput {
  /**
   * <p>The results of the <code>ListEnvironmentBlueprintConfigurations</code> action.</p>
   * @public
   */
  items?: EnvironmentBlueprintConfigurationItem[];

  /**
   * <p>When the number of blueprint configurations is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of configurations, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListEnvironmentBlueprintConfigurations</code> to list the next set of
   *          configurations.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutEnvironmentBlueprintConfigurationInput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the environment blueprint.</p>
   * @public
   */
  environmentBlueprintIdentifier: string | undefined;

  /**
   * <p>The ARN of the provisioning role.</p>
   * @public
   */
  provisioningRoleArn?: string;

  /**
   * <p>The ARN of the manage access role.</p>
   * @public
   */
  manageAccessRoleArn?: string;

  /**
   * <p>Specifies the enabled Amazon Web Services Regions.</p>
   * @public
   */
  enabledRegions: string[] | undefined;

  /**
   * <p>The regional parameters in the environment blueprint.</p>
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The provisioning configuration of a blueprint.</p>
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[];
}

/**
 * @public
 */
export interface PutEnvironmentBlueprintConfigurationOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the environment blueprint.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ARN of the provisioning role.</p>
   * @public
   */
  provisioningRoleArn?: string;

  /**
   * <p>The ARN of the manage access role.</p>
   * @public
   */
  manageAccessRoleArn?: string;

  /**
   * <p>Specifies the enabled Amazon Web Services Regions.</p>
   * @public
   */
  enabledRegions?: string[];

  /**
   * <p>The regional parameters in the environment blueprint.</p>
   * @public
   */
  regionalParameters?: Record<string, Record<string, string>>;

  /**
   * <p>The timestamp of when the environment blueprint was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the environment blueprint was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The provisioning configuration of a blueprint.</p>
   * @public
   */
  provisioningConfigurations?: ProvisioningConfiguration[];
}

/**
 * @public
 */
export interface DeleteFormTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata form type is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the metadata form type that is deleted.</p>
   * @public
   */
  formTypeIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteFormTypeOutput {}

/**
 * @public
 */
export interface GetFormTypeInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the metadata form type.</p>
   * @public
   */
  formTypeIdentifier: string | undefined;

  /**
   * <p>The revision of this metadata form type.</p>
   * @public
   */
  revision?: string;
}

/**
 * <p>The details of the import of the metadata form type.</p>
 * @public
 */
export interface Import {
  /**
   * <p>The name of the import.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the import.</p>
   * @public
   */
  revision: string | undefined;
}

/**
 * @public
 */
export interface GetFormTypeOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this metadata form type exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the metadata form type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The revision of the metadata form type.</p>
   * @public
   */
  revision: string | undefined;

  /**
   * <p>The model of the metadata form type.</p>
   * @public
   */
  model: Model | undefined;

  /**
   * <p>The ID of the project that owns this metadata form type.</p>
   * @public
   */
  owningProjectId?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which the metadata form type was originally
   *          created.</p>
   * @public
   */
  originDomainId?: string;

  /**
   * <p>The ID of the project in which this metadata form type was originally created.</p>
   * @public
   */
  originProjectId?: string;

  /**
   * <p>The status of the metadata form type.</p>
   * @public
   */
  status?: FormTypeStatus;

  /**
   * <p>The timestamp of when this metadata form type was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created this metadata form type.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The description of the metadata form type.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The imports of the metadata form type.</p>
   * @public
   */
  imports?: Import[];
}

/**
 * @public
 */
export interface GetAssetFilterInput {
  /**
   * <p>The ID of the domain where you want to get an asset filter.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The ID of the asset filter.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentInput {
  /**
   * <p>The ID of the Amazon DataZone domain where the environment exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone environment.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentOutput {
  /**
   * <p>The ID of the Amazon DataZone project in which this environment is created.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The ID of the Amazon DataZone domain where the environment exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the environment.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the environment was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when this environment was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The name of the environment.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the environment profile with which the environment is created.</p>
   * @public
   */
  environmentProfileId?: string;

  /**
   * <p>The ID of the Amazon Web Services account where the environment exists.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services region where the environment exists.</p>
   * @public
   */
  awsAccountRegion?: string;

  /**
   * <p>The provider of this Amazon DataZone environment.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioned resources of this Amazon DataZone environment.</p>
   * @public
   */
  provisionedResources?: Resource[];

  /**
   * <p>The status of this Amazon DataZone environment.</p>
   * @public
   */
  status?: EnvironmentStatus;

  /**
   * <p>The actions of the environment.</p>
   * @public
   */
  environmentActions?: ConfigurableEnvironmentAction[];

  /**
   * <p>The business glossary terms that can be used in this environment.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>The user parameters of this Amazon DataZone environment.</p>
   * @public
   */
  userParameters?: CustomParameter[];

  /**
   * <p>The details of the last deployment of the environment.</p>
   * @public
   */
  lastDeployment?: Deployment;

  /**
   * <p>The provisioning properties of this Amazon DataZone environment.</p>
   * @public
   */
  provisioningProperties?: ProvisioningProperties;

  /**
   * <p>The deployment properties of the environment.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * <p>The blueprint with which the environment is created.</p>
   * @public
   */
  environmentBlueprintId?: string;
}

/**
 * @public
 */
export interface GetEnvironmentActionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the <code>GetEnvironmentAction</code> API is
   *          invoked. </p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The environment ID of the environment action.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the environment action</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentActionOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment action lives.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The environment ID of the environment action.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the environment action.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The description of the environment action.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintInput {
  /**
   * <p>The identifier of the domain in which this blueprint exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of this Amazon DataZone blueprint.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentBlueprintOutput {
  /**
   * <p>The ID of this Amazon DataZone blueprint.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of this Amazon DataZone blueprint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of this Amazon DataZone blueprint.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The provider of this Amazon DataZone blueprint.</p>
   * @public
   */
  provider: string | undefined;

  /**
   * <p>The provisioning properties of this Amazon DataZone blueprint.</p>
   * @public
   */
  provisioningProperties: ProvisioningProperties | undefined;

  /**
   * <p>The deployment properties of this Amazon DataZone blueprint.</p>
   * @public
   */
  deploymentProperties?: DeploymentProperties;

  /**
   * <p>The user parameters of this blueprint.</p>
   * @public
   */
  userParameters?: CustomParameter[];

  /**
   * <p>The glossary terms attached to this Amazon DataZone blueprint.</p>
   * @public
   */
  glossaryTerms?: string[];

  /**
   * <p>A timestamp of when this blueprint was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when this blueprint was updated.</p>
   * @public
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface GetEnvironmentCredentialsInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this environment and its credentials
   *          exist.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment whose credentials this operation gets.</p>
   * @public
   */
  environmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentCredentialsOutput {
  /**
   * <p>The access key ID of the environment.</p>
   * @public
   */
  accessKeyId?: string;

  /**
   * <p>The secret access key of the environment credentials.</p>
   * @public
   */
  secretAccessKey?: string;

  /**
   * <p>The session token of the environment credentials.</p>
   * @public
   */
  sessionToken?: string;

  /**
   * <p>The expiration timestamp of the environment credentials.</p>
   * @public
   */
  expiration?: Date;
}

/**
 * @public
 */
export interface GetEnvironmentProfileInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment profile.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentProfileOutput {
  /**
   * <p>The ID of the environment profile.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which this environment profile exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account where this environment profile exists.</p>
   * @public
   */
  awsAccountId?: string;

  /**
   * <p>The Amazon Web Services region where this environment profile exists.</p>
   * @public
   */
  awsAccountRegion?: string;

  /**
   * <p>The Amazon DataZone user who created this environment profile.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when this environment profile was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when this environment profile was upated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The name of the environment profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the environment profile.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The ID of the blueprint with which this environment profile is created.</p>
   * @public
   */
  environmentBlueprintId: string | undefined;

  /**
   * <p>The ID of the Amazon DataZone project in which this environment profile is created.</p>
   * @public
   */
  projectId?: string;

  /**
   * <p>The user parameters of the environment profile.</p>
   * @public
   */
  userParameters?: CustomParameter[];
}

/**
 * @public
 */
export interface GetGroupProfileInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  groupIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGroupProfileOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which the group profile exists.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The identifier of the group profile.</p>
   * @public
   */
  status?: GroupProfileStatus;

  /**
   * <p>The name of the group for which the specified group profile exists.</p>
   * @public
   */
  groupName?: string;
}

/**
 * @public
 */
export interface GetIamPortalLoginUrlInput {
  /**
   * <p>the ID of the Amazon DataZone domain the data portal of which you want to get.</p>
   * @public
   */
  domainIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetIamPortalLoginUrlOutput {
  /**
   * <p>The data portal URL of the specified Amazon DataZone domain.</p>
   * @public
   */
  authCodeUrl?: string;

  /**
   * <p>The ID of the user profile.</p>
   * @public
   */
  userProfileId: string | undefined;
}

/**
 * @public
 */
export interface GetLineageNodeInput {
  /**
   * <p>The ID of the domain in which you want to get the data lineage node.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data lineage node that you want to get.</p>
   *          <p>Both, a lineage node identifier generated by Amazon DataZone and a
   *             <code>sourceIdentifier</code> of the lineage node are supported. If
   *             <code>sourceIdentifier</code> is greater than 1800 characters, you can use lineage node
   *          identifier generated by Amazon DataZone to get the node details.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The event time stamp for which you want to get the data lineage node.</p>
   * @public
   */
  eventTimestamp?: Date;
}

/**
 * <p>The reference details for the data lineage node.</p>
 * @public
 */
export interface LineageNodeReference {
  /**
   * <p>The ID of the data lineage node.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The event timestamp of the data lineage node.</p>
   * @public
   */
  eventTimestamp?: Date;
}

/**
 * @public
 */
export interface GetLineageNodeOutput {
  /**
   * <p>The ID of the domain where you're getting the data lineage node.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The name of the data lineage node.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description of the data lineage node.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The timestamp at which the data lineage node was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The user who created the data lineage node.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp at which the data lineage node was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The user who updated the data lineage node.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The ID of the data lineage node.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the type of the specified data lineage node.</p>
   * @public
   */
  typeName: string | undefined;

  /**
   * <p>The revision type of the specified data lineage node.</p>
   * @public
   */
  typeRevision?: string;

  /**
   * <p>The source identifier of the data lineage node.</p>
   * @public
   */
  sourceIdentifier?: string;

  /**
   * <p>The timestamp of the event described in the data lineage node.</p>
   * @public
   */
  eventTimestamp?: Date;

  /**
   * <p>The metadata of the specified data lineage node.</p>
   * @public
   */
  formsOutput?: FormOutput[];

  /**
   * <p>The upstream nodes of the specified data lineage node.</p>
   * @public
   */
  upstreamNodes?: LineageNodeReference[];

  /**
   * <p>The downsteam nodes of the specified data lineage node.</p>
   * @public
   */
  downstreamNodes?: LineageNodeReference[];
}

/**
 * @public
 */
export interface GetProjectInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the project exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the project.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetProjectOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the project exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>&gt;The ID of the project.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the project.</p>
   * @public
   */
  projectStatus?: ProjectStatus;

  /**
   * <p>Specifies the error message that is returned if the operation cannot be successfully
   *          completed.</p>
   * @public
   */
  failureReasons?: ProjectDeletionError[];

  /**
   * <p>The Amazon DataZone user who created the project.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The timestamp of when the project was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The timestamp of when the project was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The business glossary terms that can be used in the project.</p>
   * @public
   */
  glossaryTerms?: string[];
}

/**
 * @public
 */
export interface GetSubscriptionInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionOutput {
  /**
   * <p>The ID of the subscription.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription.</p>
   * @public
   */
  status: SubscriptionStatus | undefined;

  /**
   * <p>The timestamp of when the subscription was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The principal that owns the subscription.</p>
   * @public
   */
  subscribedPrincipal: SubscribedPrincipal | undefined;

  /**
   * <p>The details of the published asset for which the subscription grant is created.</p>
   * @public
   */
  subscribedListing: SubscribedListing | undefined;

  /**
   * <p>The ID of the subscription request.</p>
   * @public
   */
  subscriptionRequestId?: string;

  /**
   * <p>The retain permissions of the subscription.</p>
   * @public
   */
  retainPermissions?: boolean;
}

/**
 * @public
 */
export interface GetSubscriptionGrantInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription grant.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionGrantOutput {
  /**
   * <p>The ID of the subscription grant.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription grant.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription grant.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription grant exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The timestamp of when the subscription grant is created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription grant was upated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The subscription target ID associated with the subscription grant.</p>
   * @public
   */
  subscriptionTargetId: string | undefined;

  /**
   * <p>The entity to which the subscription is granted.</p>
   * @public
   */
  grantedEntity: GrantedEntity | undefined;

  /**
   * <p>The status of the subscription grant.</p>
   * @public
   */
  status: SubscriptionGrantOverallStatus | undefined;

  /**
   * <p>The assets for which the subscription grant is created.</p>
   * @public
   */
  assets?: SubscribedAsset[];

  /**
   * <p>The identifier of the subscription.</p>
   * @public
   */
  subscriptionId?: string;
}

/**
 * @public
 */
export interface GetSubscriptionRequestDetailsInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to get the subscription request
   *          details.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the subscription request the details of which to get.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequestDetailsOutput {
  /**
   * <p>The identifier of the subscription request.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription request.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription request.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The Amazon DataZone domain of the subscription request.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The status of the subscription request.</p>
   * @public
   */
  status: SubscriptionRequestStatus | undefined;

  /**
   * <p>The timestamp of when the specified subscription request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription request was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the subscription request.</p>
   * @public
   */
  requestReason: string | undefined;

  /**
   * <p>The subscribed principals in the subscription request.</p>
   * @public
   */
  subscribedPrincipals: SubscribedPrincipal[] | undefined;

  /**
   * <p>The subscribed listings in the subscription request.</p>
   * @public
   */
  subscribedListings: SubscribedListing[] | undefined;

  /**
   * <p>The identifier of the Amazon DataZone user who reviewed the subscription request.</p>
   * @public
   */
  reviewerId?: string;

  /**
   * <p>The decision comment of the subscription request.</p>
   * @public
   */
  decisionComment?: string;
}

/**
 * @public
 */
export interface GetSubscriptionTargetInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription target exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the environment associated with the subscription target.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>The ID of the subscription target.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionTargetOutput {
  /**
   * <p>The ID of the subscription target.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The authorized principals of the subscription target.</p>
   * @public
   */
  authorizedPrincipals: string[] | undefined;

  /**
   * <p>The ID of the Amazon DataZone domain in which the subscription target exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the project associated with the subscription target.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The ID of the environment associated with the subscription target.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The name of the subscription target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the subscription target.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The Amazon DataZone user who created the subscription target.</p>
   * @public
   */
  createdBy: string | undefined;

  /**
   * <p>The Amazon DataZone user who updated the subscription target.</p>
   * @public
   */
  updatedBy?: string;

  /**
   * <p>The timestamp of when the subscription target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp of when the subscription target was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The manage access role with which the subscription target was created.</p>
   * @public
   */
  manageAccessRole: string | undefined;

  /**
   * <p>The asset types associated with the subscription target.</p>
   * @public
   */
  applicableAssetTypes: string[] | undefined;

  /**
   * <p>The configuration of teh subscription target.</p>
   * @public
   */
  subscriptionTargetConfig: SubscriptionTargetForm[] | undefined;

  /**
   * <p>The provider of the subscription target.</p>
   * @public
   */
  provider: string | undefined;
}

/**
 * @public
 */
export interface GetTimeSeriesDataPointInput {
  /**
   * <p>The ID of the Amazon DataZone domain that houses the asset for which you want to get the
   *          data point.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the asset for which you want to get the data point.</p>
   * @public
   */
  entityIdentifier: string | undefined;

  /**
   * <p>The type of the asset for which you want to get the data point.</p>
   * @public
   */
  entityType: TimeSeriesEntityType | undefined;

  /**
   * <p>The ID of the data point that you want to get.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name of the time series form that houses the data point that you want to get.</p>
   * @public
   */
  formName: string | undefined;
}

/**
 * <p>The time series data points form.</p>
 * @public
 */
export interface TimeSeriesDataPointFormOutput {
  /**
   * <p>The name of the time series data points form.</p>
   * @public
   */
  formName: string | undefined;

  /**
   * <p>The ID of the type of the time series data points form.</p>
   * @public
   */
  typeIdentifier: string | undefined;

  /**
   * <p>The revision type of the time series data points form.</p>
   * @public
   */
  typeRevision?: string;

  /**
   * <p>The timestamp of the time series data points form.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The content of the time series data points form.</p>
   * @public
   */
  content?: string;

  /**
   * <p>The ID of the time series data points form.</p>
   * @public
   */
  id?: string;
}

/**
 * @public
 */
export interface GetTimeSeriesDataPointOutput {
  /**
   * <p>The ID of the Amazon DataZone domain that houses the asset data point that you want to
   *          get.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The ID of the asset for which you want to get the data point.</p>
   * @public
   */
  entityId?: string;

  /**
   * <p>The type of the asset for which you want to get the data point.</p>
   * @public
   */
  entityType?: TimeSeriesEntityType;

  /**
   * <p>The name of the time series form that houses the data point that you want to get.</p>
   * @public
   */
  formName?: string;

  /**
   * <p>The time series form that houses the data point that you want to get.</p>
   * @public
   */
  form?: TimeSeriesDataPointFormOutput;
}

/**
 * @public
 */
export interface GetUserProfileInput {
  /**
   * <p>the ID of the Amazon DataZone domain the data portal of which you want to get.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the user for which you want to get the user profile.</p>
   * @public
   */
  userIdentifier: string | undefined;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType;
}

/**
 * @public
 */
export interface GetUserProfileOutput {
  /**
   * <p>the identifier of the Amazon DataZone domain of which you want to get the user
   *          profile.</p>
   * @public
   */
  domainId?: string;

  /**
   * <p>The identifier of the user profile.</p>
   * @public
   */
  id?: string;

  /**
   * <p>The type of the user profile.</p>
   * @public
   */
  type?: UserProfileType;

  /**
   * <p>The status of the user profile.</p>
   * @public
   */
  status?: UserProfileStatus;

  /**
   * <p>The details of the user profile in Amazon DataZone.</p>
   * @public
   */
  details?: UserProfileDetails;
}

/**
 * @public
 */
export interface DeleteGlossaryInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the business glossary is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryOutput {}

/**
 * @public
 */
export interface GetGlossaryInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the business glossary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the project that owns this business glossary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The name of the business glossary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the business glossary.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status of the business glossary.</p>
   * @public
   */
  status: GlossaryStatus | undefined;

  /**
   * <p>The timestamp of when this business glossary was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created this business glossary.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the business glossary was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who updated the business glossary.</p>
   * @public
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface UpdateGlossaryInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a business glossary is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the business glossary to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The description to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  status?: GlossaryStatus;

  /**
   * <p>A unique, case-sensitive identifier that is provided to ensure the idempotency of the
   *          request.</p>
   * @public
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateGlossaryOutput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a business glossary is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the business glossary that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the project in which to update a business glossary.</p>
   * @public
   */
  owningProjectId: string | undefined;

  /**
   * <p>The description to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  description?: string;

  /**
   * <p>The status to be updated as part of the <code>UpdateGlossary</code> action.</p>
   * @public
   */
  status?: GlossaryStatus;
}

/**
 * @public
 */
export interface DeleteGlossaryTermInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the business glossary term is deleted.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary term that is deleted.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGlossaryTermOutput {}

/**
 * @public
 */
export interface GetGlossaryTermInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term exists.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the business glossary term.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetGlossaryTermOutput {
  /**
   * <p>The ID of the Amazon DataZone domain in which this business glossary term exists.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The ID of the business glossary to which this term belongs.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The ID of the business glossary term.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the business glossary term.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The short decription of the business glossary term.</p>
   * @public
   */
  shortDescription?: string;

  /**
   * <p>The long description of the business glossary term.</p>
   * @public
   */
  longDescription?: string;

  /**
   * <p>The relations of the business glossary term.</p>
   * @public
   */
  termRelations?: TermRelations;

  /**
   * <p>The status of the business glossary term.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The timestamp of when the business glossary term was created.</p>
   * @public
   */
  createdAt?: Date;

  /**
   * <p>The Amazon DataZone user who created the business glossary.</p>
   * @public
   */
  createdBy?: string;

  /**
   * <p>The timestamp of when the business glossary term was updated.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The Amazon DataZone user who updated the business glossary term.</p>
   * @public
   */
  updatedBy?: string;
}

/**
 * @public
 */
export interface UpdateGlossaryTermInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which a business glossary term is to be
   *          updated.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the business glossary in which a term is to be updated.</p>
   * @public
   */
  glossaryIdentifier?: string;

  /**
   * <p>The identifier of the business glossary term that is to be updated.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   * @public
   */
  name?: string;

  /**
   * <p>The short description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  shortDescription?: string;

  /**
   * <p>The long description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  longDescription?: string;

  /**
   * <p>The term relations to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  termRelations?: TermRelations;

  /**
   * <p>The status to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   * @public
   */
  status?: GlossaryTermStatus;
}

/**
 * @public
 */
export interface UpdateGlossaryTermOutput {
  /**
   * <p>The identifier of the business glossary term that is to be updated.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identifier of the Amazon DataZone domain in which a business glossary term is to be
   *          updated.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The identifier of the business glossary in which a term is to be updated.</p>
   * @public
   */
  glossaryId: string | undefined;

  /**
   * <p>The name to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status to be updated as part of the <code>UpdateGlossaryTerm</code> action.</p>
   * @public
   */
  status: GlossaryTermStatus | undefined;

  /**
   * <p>The short description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  shortDescription?: string;

  /**
   * <p>The long description to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  longDescription?: string;

  /**
   * <p>The term relations to be updated as part of the <code>UpdateGlossaryTerm</code>
   *          action.</p>
   * @public
   */
  termRelations?: TermRelations;
}

/**
 * @public
 */
export interface ListAssetFiltersInput {
  /**
   * <p>The ID of the domain where you want to list asset filters.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the data asset.</p>
   * @public
   */
  assetIdentifier: string | undefined;

  /**
   * <p>The status of the asset filter.</p>
   * @public
   */
  status?: FilterStatus;

  /**
   * <p>When the number of asset filters is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of asset filters, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetFilters</code> to
   *          list the next set of asset filters.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of asset filters to return in a single call to
   *             <code>ListAssetFilters</code>. When the number of asset filters to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListAssetFilters</code> to list the
   *          next set of asset filters.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssetFiltersOutput {
  /**
   * <p>The results of the <code>ListAssetFilters</code> action.</p>
   * @public
   */
  items: AssetFilterSummary[] | undefined;

  /**
   * <p>When the number of asset filters is greater than the default value for the
   *          <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *          <code>MaxResults</code> that is less than the number of asset filters, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *          <code>NextToken</code> value in a subsequent call to <code>ListAssetFilters</code> to
   *          list the next set of asset filters.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssetRevisionsInput {
  /**
   * <p>The identifier of the domain.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the asset.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>When the number of revisions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of revisions, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetRevisions</code> to
   *          list the next set of revisions.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of revisions to return in a single call to
   *             <code>ListAssetRevisions</code>. When the number of revisions to be listed is greater
   *          than the value of <code>MaxResults</code>, the response contains a <code>NextToken</code>
   *          value that you can use in a subsequent call to <code>ListAssetRevisions</code> to list the
   *          next set of revisions.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssetRevisionsOutput {
  /**
   * <p>The results of the <code>ListAssetRevisions</code> action.</p>
   * @public
   */
  items?: AssetRevision[];

  /**
   * <p>When the number of revisions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of revisions, the response includes
   *          a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListAssetRevisions</code> to
   *          list the next set of revisions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDataSourceRunActivitiesInput {
  /**
   * <p>The identifier of the Amazon DataZone domain in which to list data source run
   *          activities.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The identifier of the data source run.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The status of the data source run.</p>
   * @public
   */
  status?: DataAssetActivityStatus;

  /**
   * <p>When the number of activities is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of activities, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of activities to return in a single call to
   *             <code>ListDataSourceRunActivities</code>. When the number of activities to be listed is
   *          greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListDataSourceRunActivitiesOutput {
  /**
   * <p>The results of the <code>ListDataSourceRunActivities</code> action.</p>
   * @public
   */
  items: DataSourceRunActivity[] | undefined;

  /**
   * <p>When the number of activities is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of activities, the response
   *          includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to
   *             <code>ListDataSourceRunActivities</code> to list the next set of activities.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentActionsInput {
  /**
   * <p>The ID of the Amazon DataZone domain in which the environment actions are listed.</p>
   * @public
   */
  domainIdentifier: string | undefined;

  /**
   * <p>The ID of the envrironment whose environment actions are listed.</p>
   * @public
   */
  environmentIdentifier: string | undefined;

  /**
   * <p>When the number of environment actions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environment actions, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEnvironmentActions</code>
   *          to list the next set of environment actions.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of environment actions to return in a single call to
   *             <code>ListEnvironmentActions</code>. When the number of environment actions to be listed
   *          is greater than the value of <code>MaxResults</code>, the response contains a
   *             <code>NextToken</code> value that you can use in a subsequent call to
   *             <code>ListEnvironmentActions</code> to list the next set of environment actions.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * <p>The details about the specified action configured for an environment. For example, the
 *          details of the specified console links for an analytics tool that is available in this
 *          environment.</p>
 * @public
 */
export interface EnvironmentActionSummary {
  /**
   * <p>The Amazon DataZone domain ID of the environment action.</p>
   * @public
   */
  domainId: string | undefined;

  /**
   * <p>The environment ID of the environment action.</p>
   * @public
   */
  environmentId: string | undefined;

  /**
   * <p>The ID of the environment action.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the environment action.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The parameters of the environment action.</p>
   * @public
   */
  parameters: ActionParameters | undefined;

  /**
   * <p>The environment action description.</p>
   * @public
   */
  description?: string;
}

/**
 * @public
 */
export interface ListEnvironmentActionsOutput {
  /**
   * <p>The results of <code>ListEnvironmentActions</code>.</p>
   * @public
   */
  items?: EnvironmentActionSummary[];

  /**
   * <p>When the number of environment actions is greater than the default value for the
   *             <code>MaxResults</code> parameter, or if you explicitly specify a value for
   *             <code>MaxResults</code> that is less than the number of environment actions, the
   *          response includes a pagination token named <code>NextToken</code>. You can specify this
   *             <code>NextToken</code> value in a subsequent call to <code>ListEnvironmentActions</code>
   *          to list the next set of environment actions.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const AcceptChoiceFilterSensitiveLog = (obj: AcceptChoice): any => ({
  ...obj,
  ...(obj.editedValue && { editedValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AcceptPredictionsInputFilterSensitiveLog = (obj: AcceptPredictionsInput): any => ({
  ...obj,
  ...(obj.acceptChoices && { acceptChoices: obj.acceptChoices.map((item) => AcceptChoiceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const AcceptSubscriptionRequestInputFilterSensitiveLog = (obj: AcceptSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DetailedGlossaryTermFilterSensitiveLog = (obj: DetailedGlossaryTerm): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SubscribedAssetListingFilterSensitiveLog = (obj: SubscribedAssetListing): any => ({
  ...obj,
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SubscribedListingItemFilterSensitiveLog = (obj: SubscribedListingItem): any => {
  if (obj.assetListing !== undefined)
    return { assetListing: SubscribedAssetListingFilterSensitiveLog(obj.assetListing) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SubscribedListingFilterSensitiveLog = (obj: SubscribedListing): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.item && { item: SubscribedListingItemFilterSensitiveLog(obj.item) }),
});

/**
 * @internal
 */
export const SubscribedProjectFilterSensitiveLog = (obj: SubscribedProject): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SubscribedPrincipalFilterSensitiveLog = (obj: SubscribedPrincipal): any => {
  if (obj.project !== undefined) return { project: SubscribedProjectFilterSensitiveLog(obj.project) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AcceptSubscriptionRequestOutputFilterSensitiveLog = (obj: AcceptSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FormInputFilterSensitiveLog = (obj: FormInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssetInputFilterSensitiveLog = (obj: CreateAssetInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsInput && { formsInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FormOutputFilterSensitiveLog = (obj: FormOutput): any => ({
  ...obj,
  ...(obj.typeName && { typeName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssetOutputFilterSensitiveLog = (obj: CreateAssetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAssetRevisionInputFilterSensitiveLog = (obj: CreateAssetRevisionInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsInput && { formsInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssetRevisionOutputFilterSensitiveLog = (obj: CreateAssetRevisionOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetAssetOutputFilterSensitiveLog = (obj: GetAssetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssetFilterSummaryFilterSensitiveLog = (obj: AssetFilterSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AssetItemAdditionalAttributesFilterSensitiveLog = (obj: AssetItemAdditionalAttributes): any => ({
  ...obj,
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
  ...(obj.readOnlyFormsOutput && {
    readOnlyFormsOutput: obj.readOnlyFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssetItemFilterSensitiveLog = (obj: AssetItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.externalIdentifier && { externalIdentifier: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.additionalAttributes && {
    additionalAttributes: AssetItemAdditionalAttributesFilterSensitiveLog(obj.additionalAttributes),
  }),
});

/**
 * @internal
 */
export const AssetListingFilterSensitiveLog = (obj: AssetListing): any => ({
  ...obj,
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const AssetListingItemFilterSensitiveLog = (obj: AssetListingItem): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.glossaryTerms && {
    glossaryTerms: obj.glossaryTerms.map((item) => DetailedGlossaryTermFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateAssetTypeInputFilterSensitiveLog = (obj: CreateAssetTypeInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const FormEntryOutputFilterSensitiveLog = (obj: FormEntryOutput): any => ({
  ...obj,
  ...(obj.typeName && { typeName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAssetTypeOutputFilterSensitiveLog = (obj: CreateAssetTypeOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && {
    formsOutput: Object.entries(obj.formsOutput).reduce(
      (acc: any, [key, value]: [string, FormEntryOutput]) => (
        (acc[key] = FormEntryOutputFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const GetAssetTypeOutputFilterSensitiveLog = (obj: GetAssetTypeOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && {
    formsOutput: Object.entries(obj.formsOutput).reduce(
      (acc: any, [key, value]: [string, FormEntryOutput]) => (
        (acc[key] = FormEntryOutputFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const AssetTypeItemFilterSensitiveLog = (obj: AssetTypeItem): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.formsOutput && {
    formsOutput: Object.entries(obj.formsOutput).reduce(
      (acc: any, [key, value]: [string, FormEntryOutput]) => (
        (acc[key] = FormEntryOutputFilterSensitiveLog(value)), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const CancelSubscriptionOutputFilterSensitiveLog = (obj: CancelSubscriptionOutput): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const ScheduleConfigurationFilterSensitiveLog = (obj: ScheduleConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDataSourceInputFilterSensitiveLog = (obj: CreateDataSourceInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.assetFormsInput && { assetFormsInput: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDataSourceOutputFilterSensitiveLog = (obj: CreateDataSourceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.assetFormsOutput && {
    assetFormsOutput: obj.assetFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomParameterFilterSensitiveLog = (obj: CustomParameter): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentOutputFilterSensitiveLog = (obj: CreateEnvironmentOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
});

/**
 * @internal
 */
export const CreateEnvironmentProfileInputFilterSensitiveLog = (obj: CreateEnvironmentProfileInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentProfileOutputFilterSensitiveLog = (obj: CreateEnvironmentProfileOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ModelFilterSensitiveLog = (obj: Model): any => {
  if (obj.smithy !== undefined) return { smithy: obj.smithy };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateFormTypeInputFilterSensitiveLog = (obj: CreateFormTypeInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.model && { model: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateFormTypeOutputFilterSensitiveLog = (obj: CreateFormTypeOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGlossaryInputFilterSensitiveLog = (obj: CreateGlossaryInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGlossaryOutputFilterSensitiveLog = (obj: CreateGlossaryOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGlossaryTermInputFilterSensitiveLog = (obj: CreateGlossaryTermInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGlossaryTermOutputFilterSensitiveLog = (obj: CreateGlossaryTermOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateGroupProfileOutputFilterSensitiveLog = (obj: CreateGroupProfileOutput): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProjectInputFilterSensitiveLog = (obj: CreateProjectInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateProjectOutputFilterSensitiveLog = (obj: CreateProjectOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionRequestInputFilterSensitiveLog = (obj: CreateSubscriptionRequestInput): any => ({
  ...obj,
  ...(obj.subscribedPrincipals && { subscribedPrincipals: obj.subscribedPrincipals.map((item) => item) }),
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionRequestOutputFilterSensitiveLog = (obj: CreateSubscriptionRequestOutput): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionTargetInputFilterSensitiveLog = (obj: CreateSubscriptionTargetInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSubscriptionTargetOutputFilterSensitiveLog = (obj: CreateSubscriptionTargetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SsoUserProfileDetailsFilterSensitiveLog = (obj: SsoUserProfileDetails): any => ({
  ...obj,
  ...(obj.username && { username: SENSITIVE_STRING }),
  ...(obj.firstName && { firstName: SENSITIVE_STRING }),
  ...(obj.lastName && { lastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserProfileDetailsFilterSensitiveLog = (obj: UserProfileDetails): any => {
  if (obj.iam !== undefined) return { iam: obj.iam };
  if (obj.sso !== undefined) return { sso: SsoUserProfileDetailsFilterSensitiveLog(obj.sso) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateUserProfileOutputFilterSensitiveLog = (obj: CreateUserProfileOutput): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const DeleteDataSourceOutputFilterSensitiveLog = (obj: DeleteDataSourceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.assetFormsOutput && {
    assetFormsOutput: obj.assetFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.selfGrantStatus && { selfGrantStatus: obj.selfGrantStatus }),
});

/**
 * @internal
 */
export const GetDataSourceOutputFilterSensitiveLog = (obj: GetDataSourceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.assetFormsOutput && {
    assetFormsOutput: obj.assetFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.selfGrantStatus && { selfGrantStatus: obj.selfGrantStatus }),
});

/**
 * @internal
 */
export const ListDataSourcesInputFilterSensitiveLog = (obj: ListDataSourcesInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DataSourceSummaryFilterSensitiveLog = (obj: DataSourceSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDataSourcesOutputFilterSensitiveLog = (obj: ListDataSourcesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DataSourceSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateDataSourceInputFilterSensitiveLog = (obj: UpdateDataSourceInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.assetFormsInput && { assetFormsInput: SENSITIVE_STRING }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
});

/**
 * @internal
 */
export const UpdateDataSourceOutputFilterSensitiveLog = (obj: UpdateDataSourceOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: obj.configuration }),
  ...(obj.assetFormsOutput && {
    assetFormsOutput: obj.assetFormsOutput.map((item) => FormOutputFilterSensitiveLog(item)),
  }),
  ...(obj.schedule && { schedule: SENSITIVE_STRING }),
  ...(obj.selfGrantStatus && { selfGrantStatus: obj.selfGrantStatus }),
});

/**
 * @internal
 */
export const DataSourceRunActivityFilterSensitiveLog = (obj: DataSourceRunActivity): any => ({
  ...obj,
  ...(obj.database && { database: SENSITIVE_STRING }),
  ...(obj.technicalName && { technicalName: SENSITIVE_STRING }),
  ...(obj.technicalDescription && { technicalDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DomainSummaryFilterSensitiveLog = (obj: DomainSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDomainsOutputFilterSensitiveLog = (obj: ListDomainsOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DomainSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ImportFilterSensitiveLog = (obj: Import): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFormTypeOutputFilterSensitiveLog = (obj: GetFormTypeOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.model && { model: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.imports && { imports: obj.imports.map((item) => ImportFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetEnvironmentOutputFilterSensitiveLog = (obj: GetEnvironmentOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
});

/**
 * @internal
 */
export const GetEnvironmentBlueprintOutputFilterSensitiveLog = (obj: GetEnvironmentBlueprintOutput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.provisioningProperties && { provisioningProperties: obj.provisioningProperties }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetEnvironmentCredentialsOutputFilterSensitiveLog = (obj: GetEnvironmentCredentialsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEnvironmentProfileOutputFilterSensitiveLog = (obj: GetEnvironmentProfileOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.userParameters && {
    userParameters: obj.userParameters.map((item) => CustomParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const GetGroupProfileOutputFilterSensitiveLog = (obj: GetGroupProfileOutput): any => ({
  ...obj,
  ...(obj.groupName && { groupName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetLineageNodeOutputFilterSensitiveLog = (obj: GetLineageNodeOutput): any => ({
  ...obj,
  ...(obj.formsOutput && { formsOutput: obj.formsOutput.map((item) => FormOutputFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetProjectOutputFilterSensitiveLog = (obj: GetProjectOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSubscriptionOutputFilterSensitiveLog = (obj: GetSubscriptionOutput): any => ({
  ...obj,
  ...(obj.subscribedPrincipal && {
    subscribedPrincipal: SubscribedPrincipalFilterSensitiveLog(obj.subscribedPrincipal),
  }),
  ...(obj.subscribedListing && { subscribedListing: SubscribedListingFilterSensitiveLog(obj.subscribedListing) }),
});

/**
 * @internal
 */
export const GetSubscriptionRequestDetailsOutputFilterSensitiveLog = (
  obj: GetSubscriptionRequestDetailsOutput
): any => ({
  ...obj,
  ...(obj.requestReason && { requestReason: SENSITIVE_STRING }),
  ...(obj.subscribedPrincipals && {
    subscribedPrincipals: obj.subscribedPrincipals.map((item) => SubscribedPrincipalFilterSensitiveLog(item)),
  }),
  ...(obj.subscribedListings && {
    subscribedListings: obj.subscribedListings.map((item) => SubscribedListingFilterSensitiveLog(item)),
  }),
  ...(obj.decisionComment && { decisionComment: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetSubscriptionTargetOutputFilterSensitiveLog = (obj: GetSubscriptionTargetOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetUserProfileOutputFilterSensitiveLog = (obj: GetUserProfileOutput): any => ({
  ...obj,
  ...(obj.details && { details: UserProfileDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const GetGlossaryOutputFilterSensitiveLog = (obj: GetGlossaryOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryInputFilterSensitiveLog = (obj: UpdateGlossaryInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryOutputFilterSensitiveLog = (obj: UpdateGlossaryOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetGlossaryTermOutputFilterSensitiveLog = (obj: GetGlossaryTermOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryTermInputFilterSensitiveLog = (obj: UpdateGlossaryTermInput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateGlossaryTermOutputFilterSensitiveLog = (obj: UpdateGlossaryTermOutput): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.shortDescription && { shortDescription: SENSITIVE_STRING }),
  ...(obj.longDescription && { longDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAssetFiltersOutputFilterSensitiveLog = (obj: ListAssetFiltersOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => AssetFilterSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListDataSourceRunActivitiesOutputFilterSensitiveLog = (obj: ListDataSourceRunActivitiesOutput): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => DataSourceRunActivityFilterSensitiveLog(item)) }),
});
