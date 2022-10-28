// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {config} from '../models';
import {backend} from '../models';
import {interactor} from '../models';
import {jsonrpc} from '../models';

export function GetAppConfig():Promise<config.Config>;

export function GetServiceState():Promise<backend.GetServiceStateResponse>;

export function GetVersion():Promise<backend.GetVersionResponse>;

export function InitialiseApp(arg1:backend.InitialiseAppRequest):Promise<Error>;

export function IsAppInitialised():Promise<boolean>;

export function RespondToInteraction(arg1:interactor.Interaction):Promise<Error>;

export function SearchForExistingConfiguration():Promise<backend.SearchForExistingConfigurationResponse>;

export function StartService(arg1:backend.StartServiceRequest):Promise<Error>;

export function StopService():Promise<Error>;

export function SubmitWalletAPIRequest(arg1:jsonrpc.Request):Promise<jsonrpc.Response>;

export function UpdateAppConfig(arg1:config.Config):Promise<Error>;
