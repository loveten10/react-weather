import { useState } from "react";
import { useEffect } from "react";
import { test } from "./models/home-models";

const Home = () => {
    const test1 = new test();
    const [data, setData] = useState(test1);

    useEffect(() => {
        fetch(
            "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-2701D371-6038-458C-B1C4-60F3E729E587"
        )
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return <div>{data.records.location}</div>;
};

export default Home;
