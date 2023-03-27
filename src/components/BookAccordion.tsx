import { server_calls } from '../api/server';
import { useGetData } from '../custom-hooks/FetchData';
import React, { useState } from 'react'


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function SimpleAccordion() {
    const { bookData, getData } = useGetData();
   


  return (
    <div style={{ height: 400, width: '90%'}} className='m-10 text-center justify-center place-items-center'>
      {bookData.map(item => (
        <div className="text-center justify-center place-items-center">
        <Accordion key={item.id}>
            
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className=''>Author: {item.author}</Typography>
            <Typography>Genre: {item.genre}</Typography>
            <Typography>Page Length: {item.length}</Typography>
            <Typography>ISBN: {item.ISBN}</Typography>
          </AccordionDetails>          
        </Accordion>
        
        </div>
        
      ))}
      
    </div>
  );
}