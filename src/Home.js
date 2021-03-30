import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="text_container">
        <h2> Welcome to FoodyMealPlanner</h2>
        <p>
          Everyone can agree food is a source of happiness. From planning out
          your meals or choosing which cultures cuisine you want to venture
          into, the entire experience can be an adventure of its own. With Foody
          Meal Planner we bring you meals at your finger tips. The combinations
          are endless and we cater to you. By telling us what your restrictions
          are we can filter through on your behalf and make sure you are
          provided with meal plans that are special to you. Join us on your
          journey of happiness with one meal at a time.
        </p>
      </div>
      <div id="cardscontainers">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: "16rem" }}
            variant="top"
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Card.Body style={{ height: "20rem" }}>
            <Card.Title>Meal Plan</Card.Title>
            <Card.Text>
              Get your automatic meal ideas for the whole week! We display meals
              for breakfast, lunch and dinner!
            </Card.Text>
            <Link to="/plan">
              <Button style={{ backgroundColor: "#9ed896" }} variant="primary">
                Get inspired!
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: "16rem" }}
            variant="top"
            src="https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <Card.Body>
            <Card.Title>Inspiring Quotes</Card.Title>
            <Card.Text>
              Start your day with an inspiring quote! We display everyday a new
              quote for you to get motivated.
            </Card.Text>
            <Link to="/quotes">
              <Button style={{ backgroundColor: "#9ed896" }} variant="primary">
                Get inspired!
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
