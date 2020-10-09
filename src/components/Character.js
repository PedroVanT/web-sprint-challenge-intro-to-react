import React from "react";
import styled from "styled-components";
import image from "../images/spacePic.jpg";
// Write your Character component here

const CharacterCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 18%;
  margin-left: 18%;
  margin-bottom: 5%;
  border: 3px outset yellow;
  padding: 5px;
  background-image: url(image);
  background-clip: border-box;
  color: yellow;
  font-size: 1.2rem;
  h3 {
    margin-left: 3%;
  }
  h5 {
    margin-right: 3%;
  }
`;

const Character = (props) => {
  const { characterInfo } = props;

  return (
    <CharacterCard style={{ backgroundImage: `url(${image})` }}>
      <h3>{characterInfo.name}</h3>
      <h5>Born in the year: {characterInfo.birth_year}</h5>
    </CharacterCard>
  );
};

export default Character;
