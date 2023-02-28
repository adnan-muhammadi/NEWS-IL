import React from "react";
import Cards from "./Cards";

export default function Main() {
  return (
    <>
      <h1 className="container my-3">TOP HEADLINES</h1>
      <div className="container d-flex my-3">
        <Cards
          title=" The U.S. is a ‘build-nothing’ country, says economist, earning agreement from Elon Musk"
          desc="The U.S. can't build the things it needs to flourish in the 21st century, and permitting rules and not-in-my-backyard resistance is to blame, a high-profile economist writes."
          urlToImage="https://images.mktw.net/im-733094/social"
        />
        <Cards
          title=" The U.S. is a ‘build-nothing’ country, says economist, earning agreement from Elon Musk"
          desc="The U.S. can't build the things it needs to flourish in the 21st century, and permitting rules and not-in-my-backyard resistance is to blame, a high-profile economist writes."
          urlToImage="https://images.mktw.net/im-733094/social"
        />
        <Cards
          title=" The U.S. is a ‘build-nothing’ country, says economist, earning agreement from Elon Musk"
          desc="The U.S. can't build the things it needs to flourish in the 21st century, and permitting rules and not-in-my-backyard resistance is to blame, a high-profile economist writes."
          urlToImage="https://images.mktw.net/im-733094/social"
        />
      </div>
    </>
  );
}
