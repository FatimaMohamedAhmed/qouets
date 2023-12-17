import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Qoets from "./component/Qoets"

ReactDOM.createRoot(document.getElementById("root")).render(
 <div>
   <Header/>
   <Footer/>
   <Qoets/>
   </div>
)
