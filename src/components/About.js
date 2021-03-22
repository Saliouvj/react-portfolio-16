import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      " Quoi dire si ce n'est que suis un beau gosse. Suis drôle et sympa mes proches peuvent en temoigner. Eh dis donc c'est de la modestie",
  });
  const [state] = React.useState([
    { id: 1, title: "Nom:", text: "BARRY Mamadou Saliou" },
    { id: 2, title: "Email:", text: "m.saliou90@gmail.com" },
    { id: 3, title: "Tel:", text: "+32 466467259" },
    { id: 4, title: "Twitter", text: "@saliouvj" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/man-01.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hello famille !</h1>
              <div className="about__info-p1">
                Hello je suis un dev très curieux et multitask avec une maitrise 
                parfaite de HTML, CSS, Js et React. En dehors du developpement web,
                je fais du design avec Ps, je monte des videos avec Premier Pro. Jecris des articles sports et fait du community management a mes heures perdues.
              </div>
              <div className="about__info-p2">
                J'aime la lecture, l'ecriture et le sport. Je kiffe la couleur rouge
                Et du blanc. Bref n'hesitez pas à prendre contact avec moi pour vos projets.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
