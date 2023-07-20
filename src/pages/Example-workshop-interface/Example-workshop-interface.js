import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import  Navbar  from '../../components/Navbar'
import SectionMenu from './Sections-menu';

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      {/* "Mount" this app under the /inbox URL pathname. All routes and links
          are relative to this name. */}
      <BrowserRouter basename="Example-workshop-interface">
      <Navbar/>
        <h1>Example workshop interface</h1>
        <SectionMenu/>
      </BrowserRouter>
    </React.StrictMode>
  );