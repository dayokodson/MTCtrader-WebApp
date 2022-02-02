import React, {useEffect, useState}  from "react"; 
import BalanceBoard from "../components/BalanceBoard"; 
import Header from "../components/Header";
import ForecastList from "../components/ForecastList";
 
const Forecast = () => {

 
     
    const [forecastList, setForecastList] = useState([]);
    useEffect(() => {

        if(window.localStorage.getItem("@forecastList")){
            let list = JSON.parse(window.localStorage.getItem("@forecastList"));
            setForecastList(list);
        }
        

    })
 

 return (
    <>
     <section className="body-scroll" data-page="" msg="Checking your gas">
            
                    <main className="h-100">

                       <Header title="Market Forecast"/>
                        <div  style={{ marginTop: "80px" }}>
                            <BalanceBoard />
                        </div>
                        
                        <div className="main-container container">
                           
                            <ForecastList items={forecastList} />

                        </div>


                    </main>

               
     </section>
    </>
 );
}

export default Forecast;
