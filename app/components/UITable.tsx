import React from 'react' 
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer, 
  Button
} from '@chakra-ui/react' 

const data = [
  {timestamp:'1 minutes', purchaseid:1,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"}, 
  {timestamp:'2 minutes', purchaseid:2,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"}, 
  {timestamp:'3 minutes', purchaseid:3,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"}, 
  {timestamp:'4 minutes', purchaseid:4,email:"cc@gmail.com", name:"chetan", source:"", status:"Pass", select:"Select"}, 
  {timestamp:'5 minutes', purchaseid:5,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"}, 
  {timestamp:'6 minutes', purchaseid:6,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"}, 
  {timestamp:'7 minutes', purchaseid:7,email:"cc@gmail.com", name:"chetan", source:"", status:"waiting", select:"Select"},
  {timestamp:'8 minutes', purchaseid:8,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"},
  {timestamp:'9 minutes', purchaseid:9,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"},
  {timestamp:'10 minutes', purchaseid:10,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"},
  {timestamp:'11 minutes', purchaseid:11,email:"cc@gmail.com", name:"chetan", source:"", status:"Failed", select:"Select"},
]; 

const UITable = () => { 
  const headerData=[{time:'TIMESTAMP', id:'PURCHASE ID', mail:'MAIL',name:'NAME',source:'SOURCE',status:'STATUS',select:'SELECT'}]
   

const getStatusColor = (status:any) => {
  switch (status) {
    case 'Failed':
      return 'red';
    case 'Pass':
      return 'green';
    case 'Waiting':
      return 'yellow';
    default:
      return 'yellow';
  }
}; 

const header = headerData.map((headerObj, index) => (
  <Tr key={index}>
    {Object.values(headerObj).map((headerText, innerIndex) => (
      <Th key={innerIndex}>{headerText}</Th>
    ))}
  </Tr>
));
  
  const rows = data.map((element) => (
    <Tr key={element.name}>
      <Td>{element.timestamp}</Td>
      <Td>{element.purchaseid}</Td>
      <Td>{element.email}</Td>
      <Td>{element.name}</Td> 
      <Td>{element.source}</Td>
      <Td style={{backgroundColor: getStatusColor(element.status),minWidth:"30px", maxWidth:"100px", color:"black", borderRadius:"30px",  boxSizing: 'content-box', padding:"6px 12px", display:"flex", alignItems:"center", justifyContent:"center", marginTop:"16px"}}>{element.status}</Td> 
      <Td> <Button> {element.select}</Button> </Td>
    </Tr>
  )); 
  return ( 
    <div> 
    <div> 
      <TableContainer>
  <Table>
    <Thead>  
      {header}
    </Thead>
    <Tbody>
      {rows}
    </Tbody>
  </Table>
</TableContainer> 
</div> 
    </div>
  )
}

export default UITable