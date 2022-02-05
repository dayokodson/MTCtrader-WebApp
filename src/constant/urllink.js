 
//const baseUrl = //"https://connect.vairtualtoken.com/wp-json/api/v1";
//const baseUrl = "http://localhost/wp-json/mobile/v1";  //"http://localhost/wp-json/vatt/v1";
const baseUrl = "https://mtctraders.com/wp-json/mobile/v1";  //"http://localhost/wp-json/vatt/v1";

const puk = window.localStorage.getItem("@puk");

const loginUrl = baseUrl + "/login/"
const registerUrl = baseUrl + "/signup";
const depositCrypto = baseUrl + "/deposit";
const addwallet = baseUrl + "/add_wallet";
const creditGas = baseUrl + "/creditgas";
const forecastList = baseUrl + "/forecastlist";
const marketfundlist = baseUrl + "/marketfundlist";
const confirmdeposit = baseUrl + "/confirmdeposit";
const savedeposit = baseUrl + "/savedeposit";


 
export default {

    loginUrl,
    registerUrl,
    baseUrl, 
    puk,
    addwallet,
    creditGas,
    forecastList,
    marketfundlist,
    confirmdeposit,
    savedeposit

    
    
    
}