import React from "react";
import styles from "./press.module.css";
import newsArticle from "../../assets/straits-times.jpg";

const Press = () => {
  const pressObject = [
      {
        source: "Straits Times", 
        title: "Women Changing The Face of Tech",
        url: newsArticle 
      },   
      {
        source: "She Loves Data", 
        title: "Real People In Data: An Interview with Toh Hui Min",
        url: "https://shelovesdata.com/min-frontend-pebbleroad/" 
      },   
      {
        source: "TechLadies", 
        title: "Meet Min – TechLadies Bootcamp organizer, Coffee-lover, TechLady",
        url: "http://blog.techladies.co/meet-min-techladies-bootcamp-organizer-coffee-lover-techlady/#.XnjfyhMzbOR" 
      },   
  ];

  return (
    <div id="press" className="dark">
      <div className="wrapper">
        <h2>Press</h2>
        <ul>
          {pressObject.map((item, key) => (
            <li key={key}>
              {item.source}: <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.pressLink}>
                  {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Press;
