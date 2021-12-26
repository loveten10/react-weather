export interface ElementValue {
    value: string;
    measures: string;
}

export interface Fields {
    id: string;
    type: string;
}

export interface Location {
    locationName: string;
    geocode: string;
    lat: string;
    lon: string;
    weatherElement: WeatherElement[];
}

export interface Locations {
    datasetDescription: string;
    locationsName: string;
    dataid: string;
    location: Location[];
}

export interface Records {
    locations: Locations[];
}

export interface Result {
    resource_id: string;
    fields: Fields[];
}

export interface RootInterface {
    success: string;
    result: Result;
    records: Records;
}

export interface Time {
    startTime: string;
    endTime: string;
    elementValue: ElementValue[];
}

export interface WeatherElement {
    elementName: string;
    description: string;
    time: Time[];
}
