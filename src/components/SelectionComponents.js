import React from 'react';
import "./styles/selectionComponents.css";
import { RoomDetails } from './RoomDetails';

export const SelectionComponents = () => {
  return (
    <div>
        <h1 className='selection-header'>Select property type</h1>
        <RoomDetails />
    </div>
  )
}
