import { Component } from "react";

export interface SidebarItem {
   
    text: string;
    icon: string;
  }
  
 export interface SidebarProps {
    items: SidebarItem[]; // Array of SidebarItem objects
  }