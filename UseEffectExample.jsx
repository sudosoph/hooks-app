import React, { useState, useEffect } from "react";

const UseEffectExample = () => {
  const apiBaseUrl = "https://dog.ceo/api/breeds/image/random/";
  const [dogImageUrls, setDogImageUrls] = useState([]);
  const [loadPictures, setLoadPictures] = useState(false);

  const loadDogPictures = () => {
    const numToLoad = Math.random() * 10;
    fetch(`${apiBaseUrl}${numToLoad}`)
      .then(response => response.json())
      .then(data => setDogImageUrls(data.message));
  }

  useEffect(() => {
    loadDogPictures();
    console.log('mounting')
  }, []);

  useEffect(() => {
    if (loadDogPictures) {
      loadDogPictures();
      setLoadPictures(false);
    }
  }, [loadPictures]);
  return (
    <>
      <h2>Random Dog Pictures</h2>
      <button onClick={() => setLoadPictures(true)}>
        Load some more pictures!
      </button>
      <p>
        {dogImageUrls.length <= 0
          ? "...loading"
          : `We've got ${dogImageUrls.length} pictures for you`}
      </p>
      <div className="dogs-container">
        {dogImageUrls.map((imgUrl) => (
          <img
            key={imgUrl}
            src={imgUrl}
            alt="A great picture of a random dog"
          />
        ))}
      </div>
    </>
  );
};

export default UseEffectExample;
