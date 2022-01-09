import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../../api/api";
import { Location, RootInterface, WeatherElement } from "../models/tomorrow";

const Tomorrow = () => {
    const [data, setData] = useState<Location[]>();
    const [inputValue, setInputValue] = useState<string>("");
    const search = async () => {
        try {
            const res = await api.getTomorrowApi(inputValue);
            setData(() => {
                return res.data.records.location;
            });
        } catch {}
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
