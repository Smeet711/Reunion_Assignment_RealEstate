import React from "react";

const EstateCard = ({ estateData }) => {
  return (
    <>
      {estateData.map((curele) => {
        return (
          <>
            <main>
              <section>
                <figure>
                  <img src={curele.image} />
                </figure>
                <article>
                  <span>${curele.price}</span>
                  <h1>{curele.name}</h1>
                  <span>{curele.location}</span>
                  <h5>{curele.type}</h5>
                </article>
              </section>
            </main>
          </>
        );
      })}
    </>
  );
};

export default EstateCard;
