import React from "react";
import { useNavigate } from "react-router-dom";

function Chatbox() {
    const navigate = useNavigate();
  return (
    <div>
      <h6 onClick={() => navigate("/dashboard/messaging")}>Chat Box</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor
        fugiat repellat non ex fugit sapiente sint facilis eius at? Vero ipsa
        delectus iure itaque unde ipsam aut quas exercitationem.
      </p>
    </div>
  );
}

export default Chatbox;
