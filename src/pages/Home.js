import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import bg from "../images/frontpagebg.png";
import logo from "../images/airbnb.png";
import { ConnectButton, Select, DatePicker, Input, Icon, Button } from "web3uikit";

const Home = () => {
  const [destination, setDestination] = useState("New York");
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [guests, setGuests] = useState(2);

  console.log(destination);
  console.log(checkIn);
  console.log(checkOut);
  console.log(guests);

  return (
    <>
      <div className="container" style={{ backgroundImage: `url(${bg})` }}>
        <div className="containerGradient"></div>
      </div>

      <div className="topBanner">
        <div>
          <img src={logo} alt="Web3 Airbnb Logo" className="logo" />
        </div>

        <div className="tabs">
          <div className="selected">Places to Stay</div>
          <div>Experiences</div>
          <div>Online Experiences</div>
        </div>

        <div className="lrContainers">
          <ConnectButton />
        </div>
      </div>

      <div className="tabContent">
        <div className="searchFields">
          <div className="inputs">
            Location
            <Select
              defaultOptionIndex={0}
              onChange={(data) => setDestination(data.label)}
              options={[
                {
                  id: "ny",
                  label: "New York",
                },
                {
                  id: "lon",
                  label: "London",
                },
                {
                  id: "db",
                  label: "Dubai",
                },
                {
                  id: "la",
                  label: "Los Angeles",
                },
              ]}
            />
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Check In
            <DatePicker
              id="Check In"
              onChange={(event) => setCheckIn(event.date)}
            />
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Check Out
            <DatePicker
              id="Check Out"
              onChange={(event) => setCheckOut(event.date)}
            />
          </div>
          <div className="vl"></div>
          <div className="inputs">
            Guests
            <Input
              value={2}
              name="Add Guests"
              type="number"
              onChange={(event) => setGuests(Number(event.target.value))}
            />
          </div>

          <Link to={"/rentals"} state={{
            destination: destination, 
            checkIn: checkIn, 
            checkOut: checkOut, 
            guests: guests
            }}>

            <div className="searchButton">
              <Icon fill="#ffffff" size={24} svg="search" />
            </div>
          </Link>
        </div>
      </div>

      <div className="randomLocation">
        <div className="title">Feel Adventurous</div>
        <div className="text">
          Let us decide and discover new places to stay, live, work or just
          relax.
        </div>
        <Button
          text="Explore A Location"
          onClick={() => console.log(checkOut)}
        />
      </div>
    </>
  );
};

export default Home;
