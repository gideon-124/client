import React from 'react'
interface DataRow {
    timestamp:string; 
    purchaseid:number; 
    email:string; 
    name:string; 
    source:string; 
    status:string; 
    select:string;
  } 
  
export const data: DataRow[] = [
    {timestamp:'1 minutes', purchaseid:1,email:"Chetan@gmail.com", name:"Chetan", source:"", status:"Failed", select:"Select"}, 
    {timestamp:'2 minutes', purchaseid:2,email:"Kumar@gmail.com", name:"Kumar", source:"", status:"Paid", select:"Select"}, 
    {timestamp:'3 minutes', purchaseid:3,email:"Babu@gmail.com", name:"Babu", source:"", status:"Failed", select:"Select"}, 
    {timestamp:'4 minutes', purchaseid:4,email:"Yeshwanth@gmail.com", name:"Yeshwanth", source:"", status:"Paid", select:"Select"}, 
    {timestamp:'5 minutes', purchaseid:5,email:"Yashu@gmail.com", name:"Yashu", source:"", status:"Failed", select:"Select"}, 
    {timestamp:'6 minutes', purchaseid:6,email:"Bala@gmail.com", name:"Bala", source:"", status:"Failed", select:"Select"}, 
    {timestamp:'7 minutes', purchaseid:7,email:"Karthik@gmail.com", name:"Karthik", source:"", status:"Waiting", select:"Select"},
    {timestamp:'8 minutes', purchaseid:8,email:"Vikas@gmail.com", name:"Vikas", source:"", status:"Failed", select:"Select"},
    {timestamp:'9 minutes', purchaseid:9,email:"Hitesh@gmail.com", name:"Hitesh", source:"", status:"Waiting", select:"Select"},
    {timestamp:'10 minutes', purchaseid:10,email:"Dinesh@gmail.com", name:"Dinesh", source:"", status:"Failed", select:"Select"},
    {timestamp:'11 minutes', purchaseid:11,email:"Chaitu@gmail.com", name:"Chaitu", source:"", status:"Failed", select:"Select"},
  ];  
