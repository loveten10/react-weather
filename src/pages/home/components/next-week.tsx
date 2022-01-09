import { useState } from "react"
import { Locations, WeatherElement } from "../models/home-models"
import st from "../styles/next-week.module.scss"
import { Divider } from '@mui/material'



const NextWeek = () => {
    const [searchValue, setSearchValue] = useState('')
    const [result, setResult] = useState<Locations>()

    const searchNextWeek = () => {
        fetch(
            `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-2701D371-6038-458C-B1C4-60F3E729E587&locationName=${searchValue}`
        )
            .then((res) => res.json())
            .then((res) => {
                setResult(() => {
                    return res.records.locations[0];
                });
            });
    }
    const weatherElementData = (weatherData: WeatherElement[]) => {
        let data = []
        data = weatherData.map((item, index) => (<div key={`a+${index}`}>
            {item.description}
            {item.time[0].elementValue[0].value}
        </div>))
        return data
    }
    const nextWeekData = () => {
        let data = []
        data = result && result.location.length > 0 ? result.location.map((item, index) =>
        (<div key={index}>
            {item.locationName}
            {weatherElementData(item.weatherElement)}
        </div>))
            : ([<div>查無資料!!</div>])
        return data
    }
    return (
        <div>
            <div className={st.nextWeek}>
                未來一週預報
                <Divider component="div"></Divider>

                <div></div>
            </div>
        </div>
    )
}

export default NextWeek