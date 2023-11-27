import React from "react";

export default function Card () {
  return (
    <div>
      <div>
        <div class="card mt-3" style={{ width: "18rem"}}>
          <img src="https://w.forfun.com/fetch/e5/e594d337200536d04e08e6584a690275.jpeg" class="card-img-top" style={{maxHeight:"200px"}} alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text </p>
            <div className="container">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select select className="m-2 h-100 bg-success">
                <option value="Half">Half</option>
                <option value="Full">Full</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
