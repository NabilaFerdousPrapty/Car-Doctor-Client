import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProviders";
import BookingTable from "./BookingTable";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-5xl font-semibold">My Bookings</h2>
      <table className="table">
    {/* head */}
   
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
   
    <tbody>
      {/* row 1 */}
      {
        bookings.map(booking=><BookingTable booking={booking} key={booking._id}></BookingTable>)
      }
      
     
    </tbody>
    {/* foot */}
   
    
  </table>
    </div>
  );
};

export default Bookings;
