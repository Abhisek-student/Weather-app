import { useEffect, useState } from "react";

function useWeather() {
  const [weather, setWeather] = useState(null);

  const [sub, setSub] = useState("kolkata");

  useEffect(() => {
    fetch(`https://goweather.xyz/v2/weather/${sub}`)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);

      })
     
  }, [sub]);

  return {
sub,
    weather,
    setSub
  };
}

export default useWeather;