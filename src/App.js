import React from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Avatar } from "primereact/avatar/";
import { Button } from "primereact/button/";

function App() {
  const colors = {
    Github: "green",
    linkedin: "blue",
  };
  const data = {
    name: "Gideony Ewerton",
    image: "https://github.com/gideony.png",
    bio: "aqui é  a Bio",
    links: [
      {
        name: "Meu Github",
        url: "https://github.com/gideony",
        icon: "Github",
      },
      {
        name: "Meu linkedin",
        url: "https://www.linkedin.com/in/gideonyewerton/",
        icon: "linkedin",
      },
    ],
  };
  return (
    <div className="p-m-4">
      <div className="p-d-flex p-jc-center p-ai-center">
        <Avatar image={data.image} size="xlarge" shape="circle"></Avatar>
        <h1 className="p-m-2">{data.name}</h1>
      </div>
      <div className="p-d-flex p-jc-center p-ai-center">{data.bio}</div>
      <div className="p-d-flex p-jc-center p-ai-center">
        <div className="p-d-flex p-flex-column">
          {data.links.map((link) => (
            <Button 
            className="p-m-2 p-button-outlined"
            style={{ color: colors[link.icon]}}
            >
              <i classeName= {`pi pi-${link.icon} p-px-3`}></i>
              {link.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
