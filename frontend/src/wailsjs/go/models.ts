export namespace interactor {
	
	export class Interaction {
	    traceID: string;
	    name: string;
	    data: any;
	
	    static createFrom(source: any = {}) {
	        return new Interaction(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.traceID = source["traceID"];
	        this.name = source["name"];
	        this.data = source["data"];
	    }
	}

}

export namespace jsonrpc {
	
	export class Request {
	    jsonrpc: string;
	    method: string;
	    params?: any;
	    id?: string;
	
	    static createFrom(source: any = {}) {
	        return new Request(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.jsonrpc = source["jsonrpc"];
	        this.method = source["method"];
	        this.params = source["params"];
	        this.id = source["id"];
	    }
	}
	export class ErrorDetails {
	    code: number;
	    message: string;
	    data?: string;
	
	    static createFrom(source: any = {}) {
	        return new ErrorDetails(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.code = source["code"];
	        this.message = source["message"];
	        this.data = source["data"];
	    }
	}
	export class Response {
	    jsonrpc: string;
	    result?: any;
	    error?: ErrorDetails;
	    id?: string;
	
	    static createFrom(source: any = {}) {
	        return new Response(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.jsonrpc = source["jsonrpc"];
	        this.result = source["result"];
	        this.error = this.convertValues(source["error"], ErrorDetails);
	        this.id = source["id"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

export namespace backend {
	
<<<<<<< HEAD
	export class SentTransaction {
	    txId: string;
	    txHash: string;
	    tx: string;
	    // Go type: time.Time
	    sentAt: any;
	    error: string;
	
	    static createFrom(source: any = {}) {
	        return new SentTransaction(source);
=======
	export class ConsentToTransactionRequest {
	    txId: string;
	    decision: boolean;
	
	    static createFrom(source: any = {}) {
	        return new ConsentToTransactionRequest(source);
>>>>>>> 4b7bcbaf9f80a96f2cc4ccea59a46be6e67f5923
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.txId = source["txId"];
<<<<<<< HEAD
	        this.txHash = source["txHash"];
	        this.tx = source["tx"];
	        this.sentAt = this.convertValues(source["sentAt"], null);
	        this.error = source["error"];
=======
	        this.decision = source["decision"];
	    }
	}
	export class GetConsentRequestRequest {
	    txId: string;
	
	    static createFrom(source: any = {}) {
	        return new GetConsentRequestRequest(source);
>>>>>>> 4b7bcbaf9f80a96f2cc4ccea59a46be6e67f5923
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
<<<<<<< HEAD
	export class ListSentTransactionsResponse {
	    transactions: SentTransaction[];
	
	    static createFrom(source: any = {}) {
	        return new ListSentTransactionsResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.transactions = this.convertValues(source["transactions"], SentTransaction);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class CheckVersionResponse {
	    version: string;
	    releaseUrl: string;
=======
	export class GetServiceStateResponse {
	    url: string;
	    running: boolean;
>>>>>>> 4b7bcbaf9f80a96f2cc4ccea59a46be6e67f5923
	
	    static createFrom(source: any = {}) {
	        return new CheckVersionResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.version = source["version"];
	        this.releaseUrl = source["releaseUrl"];
	    }
	}
	export class ConsentToTransactionRequest {
	    txId: string;
	    decision: boolean;
	
	    static createFrom(source: any = {}) {
	        return new ConsentToTransactionRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.txId = source["txId"];
	        this.decision = source["decision"];
	    }
	}
<<<<<<< HEAD
	export class InitialiseAppRequest {
	    vegaHome: string;
	
	    static createFrom(source: any = {}) {
	        return new InitialiseAppRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.vegaHome = source["vegaHome"];
	    }
	}
	export class ConsentRequest {
=======
	export class SentTransaction {
>>>>>>> 4b7bcbaf9f80a96f2cc4ccea59a46be6e67f5923
	    txId: string;
	    tx: string;
	    // Go type: time.Time
	    receivedAt: any;
	
	    static createFrom(source: any = {}) {
	        return new ConsentRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.txId = source["txId"];
	        this.tx = source["tx"];
	        this.receivedAt = this.convertValues(source["receivedAt"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class ListConsentRequestsResponse {
	    requests: ConsentRequest[];
	
	    static createFrom(source: any = {}) {
	        return new ListConsentRequestsResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.requests = this.convertValues(source["requests"], ConsentRequest);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class GetVersionResponse {
	    version: string;
	    gitHash: string;
	
	    static createFrom(source: any = {}) {
	        return new GetVersionResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.version = source["version"];
	        this.gitHash = source["gitHash"];
	    }
	}
<<<<<<< HEAD
	export class SearchForExistingConfigurationResponse {
	    wallets: string[];
	    networks: string[];
	
	    static createFrom(source: any = {}) {
	        return new SearchForExistingConfigurationResponse(source);
=======
	export class ClearSentTransactionRequest {
	    txId: string;
	
	    static createFrom(source: any = {}) {
	        return new ClearSentTransactionRequest(source);
>>>>>>> 4b7bcbaf9f80a96f2cc4ccea59a46be6e67f5923
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
<<<<<<< HEAD
	        this.wallets = source["wallets"];
	        this.networks = source["networks"];
	    }
	}
	export class StartServiceRequest {
	    network: string;
=======
	        this.txId = source["txId"];
	    }
	}
	export class ConsentRequest {
	    txId: string;
	    tx: string;
	    // Go type: time.Time
	    receivedAt: any;
	
	    static createFrom(source: any = {}) {
	        return new ConsentRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.txId = source["txId"];
	        this.tx = source["tx"];
	        this.receivedAt = this.convertValues(source["receivedAt"], null);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class InitialiseAppRequest {
	    vegaHome: string;
>>>>>>> 4b7bcbaf9f80a96f2cc4ccea59a46be6e67f5923
	
	    static createFrom(source: any = {}) {
	        return new StartServiceRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.network = source["network"];
	    }
	}
<<<<<<< HEAD
	export class ClearSentTransactionRequest {
	    txId: string;
=======
	export class ListConsentRequestsResponse {
	    requests: ConsentRequest[];
	
	    static createFrom(source: any = {}) {
	        return new ListConsentRequestsResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.requests = this.convertValues(source["requests"], ConsentRequest);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class SearchForExistingConfigurationResponse {
	    wallets: string[];
	    networks: string[];
>>>>>>> 4b7bcbaf9f80a96f2cc4ccea59a46be6e67f5923
	
	    static createFrom(source: any = {}) {
	        return new ClearSentTransactionRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.txId = source["txId"];
	    }
	}
	export class GetConsentRequestRequest {
	    txId: string;
	
	    static createFrom(source: any = {}) {
	        return new GetConsentRequestRequest(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.txId = source["txId"];
	    }
	}
	
	export class GetServiceStateResponse {
	    url: string;
	    running: boolean;
	
	    static createFrom(source: any = {}) {
	        return new GetServiceStateResponse(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.url = source["url"];
	        this.running = source["running"];
	    }
	}

}

export namespace config {
	
	export class TelemetryConfig {
	    consentAsked: boolean;
	    enabled: boolean;
	
	    static createFrom(source: any = {}) {
	        return new TelemetryConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.consentAsked = source["consentAsked"];
	        this.enabled = source["enabled"];
	    }
	}
	export class Config {
	    logLevel: string;
	    vegaHome: string;
	    defaultNetwork: string;
	    telemetry: TelemetryConfig;
	
	    static createFrom(source: any = {}) {
	        return new Config(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.logLevel = source["logLevel"];
	        this.vegaHome = source["vegaHome"];
	        this.defaultNetwork = source["defaultNetwork"];
	        this.telemetry = this.convertValues(source["telemetry"], TelemetryConfig);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

