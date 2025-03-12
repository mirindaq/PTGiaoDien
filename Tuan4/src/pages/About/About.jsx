import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonPay from "../../components/ButtonPay/ButtonPay";
import AccessSubs from "../../components/AccessSubs/AccessSubs";
import OptionSubs from "../../components/OptionSubs/OptionSubs";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";

export default function About() {
  return (
    <>
      <div className="main py-5">
        <Breadcrumb first={"Home"} second={"About"} />
        <Row>
          <Col>
            <div className="foodInfor">
              <p className="title-top">
                This recipe is exclusively available to subscribes
              </p>
              <p className="title-bottom">
                Join now to access effortless, hassle-free recipes
              </p>
              <ul>
                <li>
                  <img src="/images/tick.svg" alt="" />
                  20,000+ recipes to suit all tastes and skill levels
                </li>
                <li>
                  <img src="/images/tick.svg" alt="" />
                  Filter for diets, cook times, and more
                </li>
                <li>
                  <img src="/images/tick.svg" alt="" />
                  Personal Recipe Box for favorites
                </li>
                <li>
                  <img src="/images/tick.svg" alt="" />
                  Gain exclusive access to our subscriber-only mobile app.
                </li>
              </ul>
              <p className="price">0.25USD / Week</p>
              <p className="promotion">
                Billed as $1 every 4 weeks for the first year
              </p>
              <ButtonPay
                pay={true}
                src="/images/pay.svg"
                text="Subscribe Now"
              ></ButtonPay>
              <ButtonPay
                pay={false}
                src=""
                text="Cancel or Pause anytime"
              ></ButtonPay>
            </div>
          </Col>
          <Col>
            <img src="/images/dish.png" alt="" className="dish" />
          </Col>
        </Row>

        <Row>
          <div className="accessSubs">
            <p className="title mb-5">An All Access subscription includes</p>
            <Row>
              <Col>
                <AccessSubs
                  title="Cooking"
                  text="Enjoy recipes, advice and inspirator for any occasion"
                ></AccessSubs>
              </Col>
              <Col>
                <AccessSubs
                  title="Wirecutter"
                  text="Explore independent reviews for thousands of products"
                ></AccessSubs>
              </Col>
              <Col>
                <AccessSubs
                  title="Games"
                  text="Unwind with Spelling Bee, Wordle, The Crossword"
                ></AccessSubs>
              </Col>
              <Col>
                <AccessSubs
                  title="The Athletic"
                  text="Discover in-depth personalized sports jourmalism"
                ></AccessSubs>
              </Col>
            </Row>
          </div>
        </Row>

        <Row>
          <div className="subscribeAbout">
            <img src="/images/chefify.png" alt="" />
            <p className="title">Subscribe to Chefify Cooking only</p>
            <p className="descriptionSubs">
              Enjoy thousands of delicious recipes for every taste, plus advice
              and inspiration daily.
            </p>
            <OptionSubs
              src="/images/radio_check.png"
              text="$2/month (Billed every 4 weeks)"
            ></OptionSubs>
            <OptionSubs
              src="/images/radio_uncheck.png"
              text="$20/year (Billed one annually)"
            ></OptionSubs>
            <p className="space"></p>
            <ButtonPay
              pay={true}
              src="/images/pay.svg"
              text="Subscribe Now"
              after={true}
            ></ButtonPay>
            <ButtonPay
              pay={false}
              src=""
              text="Cancel or Pause anytime"
              after={true}
            ></ButtonPay>
            <p className="space"></p>
          </div>
        </Row>
      </div>
    </>
  );
}
