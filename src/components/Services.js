import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,
  FaApple,
  FaFileVideo,
  FaSearchDollar,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "Capable",
    subHeading: "My Services",
    text:
      "Je suis multitask donc touche un peu de tout\
       vous trouverez ci-dessous ce que je peux vous apporeter",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Developpement Web",
      text:
        "Je fais des sites sur mesure et responsive.\
         Mes dernieres productions se trouvent deja sur mon github",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photographie",
      text:
        "J'aime la photographie, je fais de chouettes shootings\
         pour differents clients venant de differents domaines",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Redaction 360",
      text:
        "Je prête mes services parfois à differentes boites pour \
         rediger des communiqués de presse",
    },
    {
      id: 4,
      icon: <FaApple className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "En cours de telechargement. Bientot \
         loremm ipsum gotun tred iher gujt kehefv ",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video ",
      text:
        "Avec Adobe Premier Pro et Final Cut je fais des montages\
        videos avec des animations",
    },
    {
      id: 6,
      icon: <FaSearchDollar className="commonIcons" />,
      heading: "Community Management",
      text:
        "Je gère les reseaux sociaux de certaines celebrités\
        issues du monde sportif et musical",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
