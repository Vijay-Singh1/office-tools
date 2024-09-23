import { ReactElement } from "react";


export interface SidebarItem {
   
    text: string;
    icon: ReactElement;
  }
  
 export interface SidebarProps {
    items: SidebarItem[]; // Array of SidebarItem objects
  }

  export interface RenderedElement {
   
    text: string;
    icon: ReactElement;
  }
  
 export interface RenderedElementProps {
    items: RenderedElement[]; // Array of SidebarItem objects
  }