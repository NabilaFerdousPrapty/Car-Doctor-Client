
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProviders";
import { useContext } from "react";

const Checkout = () => {
    const service=useLoaderData(null);
    const {user}=useContext(AuthContext);
    const {title,img,price,_id}=service;
    const handleSubmit=(e)=>{

        e.preventDefault(); 
        const form=new FormData(e.target);
        const email=form.get('email');
        const name=form.get('name');
        const date=form.get('date');
        const amount=form.get('amount');
        const order={img,email,name,date,amount,serviceId:_id};
        console.log(order);
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(order)
        }).then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('Order Confirm Successfully');
                
            }
            
        
        })
    } 
    return (
        <div>
            <h2 className="text-center text-5xl font-semibold">Book Service:{title}</h2>
            <div className="">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card shrink-0 w-full shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input readOnly defaultValue={user?.email} name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name="name" type="name" placeholder="name" className="input input-bordered" required />
        </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input name="date" type="date" placeholder="" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input name="amount" type="text" placeholder="" defaultValue={"$ "+price} className="input input-bordered" required />
         
        </div>
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary  w-full">Order Confirm</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Checkout;