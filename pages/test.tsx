import { useEffect, useState } from "react";

export default function Component() {  

    const [list, setList] = useState<JSX.Element[]>();
    const [active, setActive] = useState<JSX.Element>();
    const [ count, setCount ] = useState (0);
    let startTab = <li key={"0000-0000-0000-0000"} onClick={() => onClick()}>Star 1</li>;
    let secondTab = <li key={"0001-0000-0000-0000"} onClick={() => onClick()}>Star 2</li>;

    useEffect(()=>{
  
      setList(() => [startTab, secondTab]);
      setActive(() => startTab);
    },[])
  
    const onClick= () =>{
      setList(() => [startTab, secondTab]);
      console.log(list)
    }
  
    return (
      <div id="BodyMain" >
        <div >
          { (
            <ul >
              {list?.map(tabItem => tabItem)}
            </ul>)
          }
        </div>
        <div >{}</div>
      </div> 
    );
  }