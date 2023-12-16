import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAllSalons } from "../redux/actions/salonAction";
import "./Salons.css"


const ShopCard = ({_id, location,  timings, images ,name})=> {
  let text = "/specificSalon/"  + _id + "/"+ name;
  return (
    
    <Link to={text}>
    <div className="my-4 mx-6"
    >

      <div className="card">
        <div className="card-img">
          <img src={images[0].url}></img>
        </div>
        <div className="card-info">
          <p className="text-title">{name}</p>
          <p className="text-body">{location}</p>
          <p className="text-body">{timings}</p>
          </div>
          <div className="btn">
            <a className="fancy" href={`https://ropsten.etherscan.io/address/${location}`}>
        <span className="top-key"></span>
        <a className="text">Book Now</a>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
            </a> 
          </div>
        </div>
  </div>
    </Link>
  );
};

const Salons = (props) => {

  const dispatch = useDispatch();
	const {salons} = useSelector((state) => state.salons);
  useEffect(()=>{

    dispatch(getAllSalons())
  },[dispatch])

  return (
    <div className="bg-white" id="Salons" >
    
    <div className="flex w-full justify-center items-center 2xl:px-20 bg-white">
      <div className="flex flex-col md:p-12 py-4 px-4">

          <h3 className="mt-2 text-black text-3xl text-center font-bold">
            Barber's Shops
          </h3>
          <h3 className="py-2 text-black bold text-xl text-center my-2">
            Connect your account to make a appointment with the barber of your choice!
          </h3>


        <div className="flex flex-wrap mt-6 justify-around">
          
        {salons.filter((transaction,id)=>id<props.total).map((transaction, i) => (
            <ShopCard key={i} {...transaction} />))}           
        </div>
       
      </div>
      </div>      
    </div>
  );
};

export default Salons;

//{salons.filter((transaction,id)=>id<props.total).map((salon, i) => (
//  <ShopCard key={i} salon ={salon} />