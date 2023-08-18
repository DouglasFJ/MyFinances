import { Link } from "react-router-dom";
import * as Circle from "../../../assets/circleMyFinances.svg";
import { useMsal } from "@azure/msal-react";

export default function Demo({text, url}: {text: string, url: string} ) {

    const msal = useMsal()
    console.log(msal.instance.getTokenCache())

    const api = async () => {
      const response = fetch("http://localhost:8080/app", {
        method: "POST",
        body: JSON.stringify(msal.instance.getTokenCache())
      })
      console.log(response)
    }
    

    return (
      <>
        <a href="" className="logo">
          <img className="" src={Circle.default} alt="Logo MyFinances" />
        </a>
        <h1 className="text-9xl" >MyFinances</h1>
        <h2>React + TypeScript</h2>
        <p>{import.meta.env.VITE_TEST}</p>
        <Link to={url}>Outra pagina</Link>
        <button onClick={api} >Chamar API</button>
        <h3>{text}</h3>
      </>
    )
  }