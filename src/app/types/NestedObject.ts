
export interface TimeObject {
    updated: string;
    updatedISO: string;
    updateduk: string;
}


export interface Currency {
    code: string;
    symbol: string;
    rate: string;
    description: string;
    rate_float: number;
}

export interface BpiObject {
    usd: Currency;
    gbp: Currency;
    eur: Currency;
}

export interface NestedObject {
    time: TimeObject;
    disclamer: string;
    chartName: string;
    bpi: BpiObject;

}