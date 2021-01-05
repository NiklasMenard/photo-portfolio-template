import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import {useSwipeable} from 'react-swipeable'



const PictureList = ({ images }) => {
  const [allPhotosVisible, setallPhotosVisible] = useState(true);
  const [singlePhoto, setSinglePhoto] = useState({ location: "", index: 0 });

  const toggleViewablePhotos = (toggle, index) => {
    setallPhotosVisible(toggle);
    setSinglePhoto({
      ...singlePhoto,
      location: images[index].default,
      index: index,
    });
  };

  const ChangePhoto = (index) => {
    if (index > 0 && index < images.length)
      setSinglePhoto({
        ...singlePhoto,
        location: images[index].default,
        index: index,
      });
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => ChangePhoto(singlePhoto.index + 1),
    onSwipedRight: () => ChangePhoto(singlePhoto.index - 1),
  });

  return (
    <div>
      {allPhotosVisible ? (
        <AllPhotosContainer>
          {images.map((picture, index) => (
            <li
              key={uuidv4()}
              onClick={() => toggleViewablePhotos(!allPhotosVisible, index)}
            >
              <img src={picture.default} alt={picture} />
            </li>
          ))}
          {!window.matchMedia("(max-width: 600px)").matches && <li></li>}
        </AllPhotosContainer>
      ) : (
        <SinglePhotoContainer {...handlers}>
          <CloseIcon onClick={() => setallPhotosVisible(!allPhotosVisible)} />
          <LeftArrow onClick={() => ChangePhoto(singlePhoto.index - 1)} />
          <img src={singlePhoto.location} alt={singlePhoto.location} />
          <RightArrow onClick={() => ChangePhoto(singlePhoto.index + 1)} />
        </SinglePhotoContainer>
      )}
    </div>
  );
};

// Styles
const AllPhotosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;

  li {
    height: 40vh;
    flex-grow: 1;
    margin: 1rem;
    transition: transform 0.2s;

    @media screen and (max-width: 700px) {
      margin: 0.75rem;
      height: 16rem
    }
    @media screen and (max-width: 350px) {
      margin: 0.75rem;
      height: 13rem
    }
  }

  li:last-child {
    flex-grow: 10;
  }

  li:hover {
    transform: scale(1.02);
  }

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;

    @media screen and (max-width: 700px) {
      object-fit: contain;
    }
 
  }
`;

const SinglePhotoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95vw;
  height: 100%;
  img {
    max-height: 75vh;
    max-width: 90vw;
    transition: transform 0.2s;
  }
  img:hover {
    transform: scale(1.02);
  }
`;

const LeftArrow = styled(AiOutlineArrowLeft)`
  font-size: 3rem;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    visibility: hidden;
  }
`;

const RightArrow = styled(AiOutlineArrowRight)`
font-size: 3rem;
color: white;
cursor: pointer;
@media screen and (max-width: 600px) {
  visibility: hidden;
}
`;


const CloseIcon = styled(CgClose)`
  font-size: 2rem;
  color: white;
  position: absolute;
  margin: 0.5rem;
  top: 0px;
  right: 0px;
`;

export default PictureList;
