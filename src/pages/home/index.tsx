import { useState } from "react";
import { useEffect } from "react";
import {
    Locations,
    Records,
    RootInterface,
    WeatherElement,
} from "./models/home-models";
import NextWeek from "../home/components/next-week"

const Home = () => {
    const [data, setData] = useState<Locations>();
    useEffect(() => {
        fetch(
            "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-2701D371-6038-458C-B1C4-60F3E729E587"
        )
            .then((res) => res.json())
            .then((res) => {
                setData(() => {
                    return res.records.locations[0];
                });
            });
    }, []);

    return (
        <div>
            <NextWeek></NextWeek>
        </div>
    );
};

export default Home;
