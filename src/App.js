import React from "react";
import "./styles.css";
import MediaCard from "./Card";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <p className="App h1">
        Top <span style={{ color: "#D6101C" }}>NETFLIX</span> Web Series
      </p>
      <hr />
      <div className="row ml-1 mr-1 d-flex justify-content-center">
        <div className="col-sm-3 mt-2 h-100">
          <MediaCard
            ImgSrc="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb0LunBaUGGX6NI-BmBePKUqsO8frf79PiLKEIUPx-obQamr7OQggFdoe3s70BRqblutJsYDD9h8YAQdWdfnsJxiZYI9.jpg?r=f79"
            Title="Iron Fist"
            Description="Danny Rand resurfaces 15 years after being presumed dead. Now, with the power of the Iron Fist, he seeks to reclaim his past and fulfill his destiny."
            URL="https://www.netflix.com/in/title/80002612"
          />
        </div>
        <div className="col-sm-3 mt-2 h-100">
          <MediaCard
            //ImgSrc="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb0LunBaUGGX6NI-BmBePKUqsO8frf79PiLKEIUPx-obQamr7OQggFdoe3s70BRqblutJsYDD9h8YAQdWdfnsJxiZYI9.jpg?r=f79"
            ImgSrc="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbJVDfuc4kp-ZvOJjeFuPPvsJfmMgRkPOIu1vTITx5TlnciHNivdCA6e2KWi5zQUN2HcdwRoayj_7TgGv2-R-dSJVZR4.jpg?r=668"
            Title="Ragnarok"
            Description="In a Norwegian town poisoned by pollution and rattled by melting glaciers, the End Times feel all too real. It’ll take a legend to battle an old evil."
            URL="https://www.netflix.com/in/title/80232926"
          />
        </div>
        <div className="col-sm-3 mt-2 h-100">
          <MediaCard
            //ImgSrc="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb0LunBaUGGX6NI-BmBePKUqsO8frf79PiLKEIUPx-obQamr7OQggFdoe3s70BRqblutJsYDD9h8YAQdWdfnsJxiZYI9.jpg?r=f79"
            ImgSrc="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZfXbRilkjZOHWls19ekPDhRA-L7oqti12tk1edsgYwkkPtFc4mDYhsg0h9yRQk8ybmLrCxauCIBa0XVN6g5aKrit3Cs.jpg?r=5ca"
            Title="The I-Land"
            Description="Wiped clean of memories and thrown together, a group of strangers fight to survive harsh realities -- and the island that traps them."
            URL="https://www.netflix.com/in/title/80993062"
          />
        </div>
        <div className="col-sm-3 mt-2 h-100">
          <MediaCard
            //ImgSrc="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABb0LunBaUGGX6NI-BmBePKUqsO8frf79PiLKEIUPx-obQamr7OQggFdoe3s70BRqblutJsYDD9h8YAQdWdfnsJxiZYI9.jpg?r=f79"
            ImgSrc="https://occ-0-2599-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVHCnJA1QYIhi5NRL0gCf_-lhp14ioh8l_mVydl5BwJ4Lpffa78lu6iLVKQ0GrwsAFwJbvKOZMkwhMALQj633r-fbe35.jpg?r=0ae"
            Title="Another Life"
            Description="After a massive alien artifact lands on Earth, Niko Breckinridge leads an interstellar mission to track down its source and make first contact."
            URL="https://www.netflix.com/in/title/80236236"
          />
        </div>
        <div className="container row mt-5">
          <Footer />
        </div>
      </div>

      {/* <div className="row mt-2 ml-1 mr-1">
          
        </div> */}
    </>
  );
}
