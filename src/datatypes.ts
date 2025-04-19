export type Service = {
    type: "group" | "subgroup" | "item";
    name: string;
    description?: string;
    price?: string;
};

export type Artist = {
    name: string;
    position: string;
    bio?: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    services?: Service[];
    externalServicesLink?: string;
    isAcceptingNewClients?: boolean;
};

export type HoursOfOp = {
    sunday: string,
    monday: string,
    tuesday: string,
    wednesday: string,
    thursday: string,
    friday: string,
    saturday: string,
    notes?: string,
};