import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./style.css"
export default function Infobox({info}){
    let Img="https://images.unsplash.com/photo-1679330014394-d285c94b43d1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let Hot="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=";
    let cold="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rain="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    return(
        <div className="infobox">
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="span">
                    {info.city} {
                    info.humidity>80?
                    <ThunderstormIcon/>:(info.temp>15 ?
                    <WbSunnyIcon />
                    :<AcUnitIcon/>)
                    }
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div> Temperature : {info.temp}&deg;C</div>
                    <div> Maximum Temperature : {info.tempmax}&deg;C</div>
                    <div> Minimum Temperature : {info.tempmin}&deg;C</div>
                    <div> Humidity : {info.humidity}</div>
                    <div> The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</div>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </div>      
    )
}