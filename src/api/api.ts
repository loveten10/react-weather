import axios, { AxiosResponse } from "axios";
import { RootInterface } from "../pages/home/models/tomorrow";

const Authorization: string = "CWB-2701D371-6038-458C-B1C4-60F3E729E587";

const ApiUrl = axios.create({
    baseURL: "https://opendata.cwb.gov.tw/api/",
});

export const getTomorrowApi = (
    inputValue: string
): Promise<AxiosResponse<RootInterface>> =>
    ApiUrl.get<RootInterface>(
        `v1/rest/datastore/F-C0032-001?Authorization=${Authorization}&locationName=${inputValue}`
    );
