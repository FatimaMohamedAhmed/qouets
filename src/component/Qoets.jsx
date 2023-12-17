import {useState} from "react"
function Qoets(){
    const [index, setIndex] = useState(0)
    const mahmah =[
        "1. Nin is faanshay waa ri isnuugtay",
        "2. Af daboolan waa dahab",
        "3. Labo kala bariday kala war la",
        "4. far kaliya fool madhaqdo",
        "5. Hubsimo hal baa lasistaa",
        "6. Miro gundi kujiro kuwa geed saran loma daadiyo",
        "7. Habar fadhiso lagdan lafududa",
        "8.Alla aamin ma iisho",
        "9.Gacmo wadjir bey wax ku gooyaan",
        "10. Af joogo looma adeego"
    ]
    const nextBtn =()=> {
     if(index<mahmah.length -1){
         setIndex(index+1)
     }
    }
    const PreviousBtn =()=>{
        if(index > 0){
            setIndex(index -1)
        }
    }
   
    return <div className="text-center ">
        <p  className={`font-bold text-red-500 ${index === mahmah.length -1 ? "block": "hidden" }`}> Dhamaad </p>
        <p style={{color: index== mahmah.length -8? "red" : "" }}className="my-20 text-3xl ">{mahmah [index]}</p>
        
        <button onClick={PreviousBtn} className="bg-blue-500 px-8 py-3 text-white rounded">Previous</button>
        <button  onClick={nextBtn} className="bg-blue-500 px-8 py-3 text-white rounded ml-3">Next</button>
    </div>
}
export default Qoets