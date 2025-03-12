import "./Products.css";

import Filter from "../../components/Filters/Filter.jsx";

export default function Products() {
  return (
    <div className="container  my-0 pt-5 pb-5">
      {/* <aside className="filters">
        <h3>Filters</h3>

        <div className="filter-group">
          <h4>Type</h4>
          <div style={{ float: "left" }}>
            <label>
              <input type="checkbox" /> Pan-fried
            </label>
            <br />
            <label>
              <input type="checkbox" defaultChecked /> Grilled
            </label>
            <br />
            <label>
              <input type="checkbox" /> Sauteed
            </label>
            <br />
            <label>
              <input type="checkbox" /> Steamed
            </label>
            <br />
          </div>
          <div style={{ float: "right" }}>
            <label>
              <input type="checkbox" /> Stir-fried
            </label>
            <br />
            <label>
              <input type="checkbox" defaultChecked /> Roasted
            </label>
            <br />
            <label>
              <input type="checkbox" /> Baked
            </label>
            <br />
            <label>
              <input type="checkbox" /> Stewed
            </label>
          </div>
        </div>

        <div className="filter-group" style={{ margin: "100px 0" }}>
          <h4>Time</h4>
          <input type="range" min="0" max="60" defaultValue="30" />
        </div>

        <div className="filter-group">
          <h4>Rating</h4>
          <label>
            <input type="checkbox" /> ⭐⭐⭐⭐⭐
          </label>
          <br />
          <label>
            <input type="checkbox" /> ⭐⭐⭐⭐☆
          </label>
          <br />
          <label>
            <input type="checkbox" defaultChecked /> ⭐⭐⭐☆☆
          </label>
          <br />
          <label>
            <input type="checkbox" defaultChecked /> ⭐⭐☆☆☆
          </label>
          <br />
          <label>
            <input type="checkbox" defaultChecked /> ⭐☆☆☆☆
          </label>
        </div>

        <button className="apply-btn">Apply</button>
      </aside> */}
      <div>
        <Filter />
      </div>
      <di className="main-content">
        <div className="no-results">
          <h2>Sorry, no results found for "cakescascsa"</h2>
          <img src="/images/result.png" alt="No results found" />
          <p>We have all your Independence Day sweets covered.</p>

          <div className="suggestions">
            <span>Sweet Cake</span>
            <span>Black Cake</span>
            <span>Pozole Verde</span>
            <span>Healthy Food</span>
          </div>
        </div>
      </di>
    </div>
  );
}
