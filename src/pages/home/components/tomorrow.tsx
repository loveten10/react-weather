import { useEffect } from "react";
import { useState } from "react";
import { Location, WeatherElement } from "../models/tomorrow";
const Tomorrow = () => {
    const [data, setData] = useState<Location[]>();
    const [inputValue, setInputValue] = useState<string>("");
    const search = () => {
        fetch(
            `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-2701D371-6038-458C-B1C4-60F3E729E587&locationName=${inputValue}`
        )
            .then((res) => res.json())
            .then((res) => {
                setData(() => {
                    return res.records.location;
                });
            });
    };
    const weatherDetail = (data: WeatherElement[]) => {
        let arr: any = [];
        arr = data.map((item, idx) => {
            return (
                <div key={idx}>
                    <div>{item.elementName}</div>
                    <div>
                        {item.time[0].parameter.parameterName}
                        {item.time[0].parameter.parameterUnit}
                    </div>
                </div>
            );
        });
        return arr;
    };
    const weatherCard = () => {
        let arr: any = [];
        arr = data?.map((item, idx) => {
            return (
                <div key={idx}>
                    {item.locationName}
                    <div>{weatherDetail(item.weatherElement)}</div>
                </div>
            );
        });

        return arr;
    };
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(() => {
                        return e.target.value;
                    });
                }}
            />
            <button onClick={() => search()}>搜尋</button>
            {weatherCard()}
        </div>
    );
};

export default Tomorrow;
