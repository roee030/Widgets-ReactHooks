import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Search() {
  const [term, setTerm] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            className="input"
          ></input>
        </div>
      </div>
    </div>
  );
}
