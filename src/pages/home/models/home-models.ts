export interface Fields {
    id: string;
    type: string;
}

export interface Location {
    locationName: string;
    weatherElement: WeatherElement[];
}

export interface Parameter {
    parameterName: string;
    parameterUnit: string;
}

export interface Records {
    datasetDescription: string;
    location: Location[];
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
    parameter: Parameter;
}

export interface WeatherElement {
    elementName: string;
    time: Time[];
}

export interface test {
    records: Records;
    result: Result;
    success: string;
}

export class test {
    constructor() {
        return {
            records: { datasetDescription: "", location: [] },
            result: {
                resource_id: "",
                fields: [],
            },
            success: "",
        };
    }
}
