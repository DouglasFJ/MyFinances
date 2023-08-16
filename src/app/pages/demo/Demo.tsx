import * as Circle from "../../../assets/circleMyFinances.svg";

export default function Demo() {
  

    return (
      <>
        <a href="" className="logo">
          <img className="" src={Circle.default} alt="Logo MyFinances" />
        </a>
        <h1 className="text-9xl" >MyFinances</h1>
        <h2>React + TypeScript</h2>
        <p>{import.meta.env.VITE_TEST}</p>
      </>
    )
  }