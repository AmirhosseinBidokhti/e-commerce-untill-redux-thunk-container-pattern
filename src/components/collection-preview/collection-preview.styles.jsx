import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  //display: inline-block; this bitch does not work! i dont know why
  width: fit-content; // this makes it a way so its not getting width as much as parent like every block element does.

  &:hover {
    color: grey;
  }
`;
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
