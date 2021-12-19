import React from "react";
// components
import SideDrawer from './SideDrawer';

export default function MainContent() {

   return (
      <div>
         <aside>
            <SideDrawer />
         </aside>
         <main>
            <h1>AgPro</h1>
         </main>
      </div>
   );
}