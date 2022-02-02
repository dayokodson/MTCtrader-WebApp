import React, {useEffect, useState}  from "react"; 
import BalanceBoard from "../components/BalanceBoard"; 
import Header from "../components/Header";
import ForecastList from "../components/ForecastList";
import  { useNavigate, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Forecast = () => {

 
    const [loadForecast, setLoadForecast] = useState(false); 
    const [forecastList, setForecastList] = useState([]);
    useEffect(() => {

        if(!loadForecast){
            let list = JSON.parse(window.localStorage.getItem("@forecastList"));
            setForecastList(list);
            setLoadForecast(true);
        }
        

    })
 

 return (
    <>
     <section className="body-scroll" data-page=""  style={{ marginBottom: "80px" }}>
            
                    <main className="h-100">

                       <Header title="Market Forecast"/>
                        <div  style={{ marginTop: "100px" }}>
                            <BalanceBoard />
                        </div>
                        
                        <div className="main-container container">
                           
                           <ForecastList list={forecastList}/>

                        </div>


                    </main>

            <Footer />    
     </section>
    </>
 );
}

export default Forecast;
