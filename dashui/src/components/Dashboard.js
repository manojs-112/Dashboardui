import React from "react";
import "./dashboard.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";

function Dashbord() {
  const plans = [
    {
      name: "Basic",
      rate: 89.99,
      offerRate: 9.99,
      users: 25,
      storage: 25,
      color: "#deb046",
    },
    {
      name: "Standard",
      rate: 189.99,
      offerRate: 99.99,
      users: 50,
      storage: 60,
      color: "#f06767",
    },
    {
      name: "Premium",
      rate: 389.99,
      offerRate: 199.99,
      users: 75,
      storage: 100,
      color: "#eb44d2",
    },
  ];

  const data = [
    {
      name: "Free Starter",
      tag: "Free Forever",
      description: "Hello this is free,you can enjoy our free tier",
      users: 8,
      storage: 3,
      color: "#92ed7c",
    },
    {
      name: "Enterprise Plan",
      tag: "Lets Connect",
      description: "Build you enterprise with our team",
      users: 75,
      storage: "unlimited",
      color: "#68c7e6",
    },
  ];

  return (
    <div className="dashboard-main">
      <h2>Choose a plan that just rigth for you! </h2>
      <div className="dashboard-section1">
        {plans.map((item, key) => (
          <div className="card1" key={key}>
            <div>
            <h3>{item.name}</h3>
            <p className="strikeP">$ {item.rate}/mo</p>
            <h3>$ {item.offerRate}/mo</h3>
            <button
              style={{
                backgroundColor: item.color,
                border: "none",
                padding: "5px",
              }}
            >
              Get Started <i class="fa-solid fa-arrow-right"></i>
            </button>
            </div>
            <hr />
            <div>
            <p>What you will get</p>
            <div className="plan-feutures-main">
              <div className="plan-feutures">
                <i className="fa-solid fa-user"></i>
                <p>more than {item.users} Users</p>
              </div>
              <div className="plan-feutures">
                <i className="fa-solid fa-cloud"></i>
                <p>Up to {item.storage}gb storage</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard-section2">
        {data.map((item, key) => (
          <div className="card2" key={key}>
            <div>
              <p
                style={{
                  backgroundColor: item.color,
                  border: "none",
                  padding: "2px",
                  width: "50%",
                }}
              >
                {item.tag}
              </p>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <button
                style={{
                  backgroundColor: item.color,
                  border: "none",
                  padding: "5px",
                }}
              >
                Get Started <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div>
              <p>What you will get:</p>
              <div className="card2-feautures">
                <div className="plan-feutures">
                <AiOutlineUser />
                  <p>Up to {item.users} Users</p>
                </div>
                <div className="plan-feutures">
                  <i className="fa-solid fa-cloud"></i>
                  <p>Up to {item.storage}gb storage</p>
                </div>
                <div className="plan-feutures">
                <HiOutlineMail />
                  <p>Email Support </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Dashbord;