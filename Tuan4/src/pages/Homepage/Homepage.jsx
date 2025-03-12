import SectionHomepage from "../../components/SectionHomepage/SectionHomepage";
import SectionHomepageDetail from "../../components/SectionHomepageDetail/SectionHomepageDetail";
import { foodData, foodWithPersonData } from "../../data/data";
import "./Homepage.css";
import Image from "react-bootstrap/Image";

export default function Homepage() {
  return (
    <div>
      <div className="box-background">
        <img
          src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/22/2-16506153173931469354739.jpg"
          alt=""
          style={{ width: "100%" }}
        />
        <div className="recipe-card">
          <div className="recipe-header-box">
            <div className="recipe-header">
              <span className="recipe-title">Recipe of the day</span>
            </div>
          </div>
          <div className="recipe-content">
            <h2 className="recipe-name">Salad Caprese</h2>
            <p className="recipe-description">
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
              herbs, olive oil, and balsamic vinegar create a refreshing dish
              for lunch or appetizer.
            </p>
            <div className="recipe-footer">
              <Image src="images/avatar.png" rounded />
              <span className="author">Salad Caprese</span>
              <a href="#" className="view-button">
                View now &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
      <SectionHomepage
        foodData={foodData}
        title={"This Summer Recipes"}
        des={" We have all independence Day sweets covered."}
      />
      <SectionHomepage
        foodData={foodData}
        title={"Recipes With Videos"}
        des={"Cooking Up Culinary Creations with Step-by-Step Videos."}
      />

      <SectionHomepageDetail
        foodWithAuthorData={foodWithPersonData}
        title={"Editor's pick"}
        des={
          "Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
        }
      />
    </div>
  );
}
