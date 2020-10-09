import React from "react";
import styled from "styled-components";

// Write your Character component here

const CharacterCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 5%;
  /* background-color: gray; */

  border: 3px dashed black;
  padding: 15px;
  background: gray;
  background-clip: padding-box;

  color: yellow;

  h3 {
    margin-left: 3%;
  }
  h5 {
    margin-right: 3%;
  }
  * {
    border: 1px solid black;
  }
`;

const Character = (props) => {
  const { characterInfo } = props;

  return (
    <CharacterCard>
      <h3>{characterInfo.name}</h3>
      <h5>Born in the year: {characterInfo.birth_year}</h5>
    </CharacterCard>
  );
};

export default Character;
