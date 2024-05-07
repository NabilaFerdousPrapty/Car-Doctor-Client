import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProviders";
import BookingTable from "./BookingTable";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDelete=(id)=>{
    const procced=window.confirm('Are you sure you want to delete');
    if(procced){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{

            if(data.deletedCount>0){
                console.log(data);
                alert('deleted successfully');
                const remaining=bookings.filter(booking=>booking._id!==id);
                setBookings(remaining);
            }
        })
    }
    console.log('delete');
}
const handleConfirm=(id)=>{ 

    fetch(`http://localhost:5000/bookings/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({status:'confirmed'})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            const updated=bookings.map(booking=>{
                if(booking._id===id){
                    booking.status='confirmed';
                }
                return booking;
            })
            setBookings(updated);
            alert('confirmed successfully');
            setConfirm(true);
        }
    })
    console.log('confirm');
}
  return (
    <div >
      <h2 className="text-center text-5xl font-semibold">My Bookings</h2>
     <div className="overflow-x-auto">
     <table className="table">
    {/* head */}
   
   
   
    <tbody >
        <tr>
      {/* row 1 */}
      {
        bookings.map(booking=><BookingTable handleConfirm={handleConfirm} handleDelete={handleDelete} booking={booking} key={booking._id}></BookingTable>)
      }
      </tr>
     
    </tbody>
    {/* foot */}
   
    
  </table>
     </div>
    </div>
  );
};

export default Bookings;
