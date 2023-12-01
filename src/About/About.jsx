import "./About.css";

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about">
        <div className="left">
          <img
            src="https://cdn.pixabay.com/photo/2023/11/28/08/53/skyscraper-8416953_1280.jpg"
            alt=""
          />
          <p>
            Address: Street: Warwick Rd, City/Town: Banbury,
            State/Province/Region: Oxfordshire, Zip/Postal Code: OX16 2AN, Phone
            Number: 01295 264003, Country: United Kingdom, Latitude: 52.064822,
            Longitude: -1.345158
          </p>
        </div>
        <div className="right">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta
            eos, earum consectetur voluptates magni dolore quisquam omnis dolor
            harum labore maxime veniam? Quis, est dolorem exercitationem maxime
            aliquid inventore dicta, architecto vero dolorum voluptatem natus.
            Veritatis delectus, fuga quas error nam enim iure consequatur animi
            provident, eveniet vitae. Excepturi.
          </p>
        </div>
      </div>
    </div>
  );
}
