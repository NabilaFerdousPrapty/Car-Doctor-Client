import React from 'react';

const BookingTable = ({booking,handleDelete,handleConfirm}) => {
    
    const {name,email,img,date,amount,_id,status}=booking;
    return (
        <div className="overflow-x-auto">
        
    <th>
      <label>
      <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>

      </label>
    </th>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm opacity-50">{email}</div>
        </div>
      </div>
    </td>
    <td>
      
      {
        date
      
      }
    </td>
    <td>{amount}</td>
    <th>
      <button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">{status ||'Pending' }</button>
    </th>
 
</div>
    );
};

export default BookingTable;