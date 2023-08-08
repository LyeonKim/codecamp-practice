import styled from "@emotion/styled";
import { Modal } from "antd";

import DaumPostcode from "react-daum-postcode";

export const BoardWrap = styled.div`
  margin: 80px auto 285px;
  max-width: 1200px;
  min-width: 750px;
  width: calc(100% - 60px);
  height: auto;
  box-shadow: 0px 4px 20px 0px hsla(0, 0%, 0%, 0.2);
  box-sizing: border-box;
  padding: 80px;
  font-size: 18px;
`;
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 80px;
`;
export const FormWrap = styled.div`
  display: flex;
  flex-flow: column;
  gap: 40px;
  padding-bottom: 40px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;
  width: auto;
  flex-shrink: 1;
`;
export const RowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: no-wrap;
  gap: 20px;

  & > div {
    flex-grow: 1;
  }
`;
export const Label = styled.label`
  font-size: 18px;
`;
export const Input = styled.input`
  box-sizing: border-box;
  padding: 10px 16px;
  border: 1px solid #bdbdbd;
  height: 52px;
  font-size: 17px;

  &::placeholder {
    color: #bdbdbd;
  }

  ${(props) => (props.isError ? `border: 3px solid red` : "")}
`;
export const zipCodeWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const InputAddress = styled.input`
  box-sizing: border-box;
  width: 90px;
  padding: 10px 16px;
  border: 1px solid #bdbdbd;
  height: 52px;
  font-size: 17px;
  display: inline-block;

  &::placeholder {
    color: #bdbdbd;
  }
`;
export const BtnAddress = styled.button`
  box-sizing: border-box;
  display: inline-block;
  border: none;
  line-height: 52px;
  height: 52px;
  padding: 0 16px;
  color: #fff;
  background: #000;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  box-sizing: border-box;
  padding: 18px 16px;
  border: 1px solid #bdbdbd;
  height: 480px;
  resize: none;
  font-size: 17px;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 40px;
`;
export const Btn = styled.button`
  box-sizing: border-box;
  border: none;
  line-height: 52px;
  height: 52px;
  padding: 0 60px;
  border: 1px solid #efefef;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    `
            background: hsla(50, 100%, 50%, 1);
        `};
`;
export const BtnCancel = styled.button`
  box-sizing: border-box;
  border: none;
  line-height: 52px;
  height: 52px;
  padding: 0 60px;
  background: #bdbdbd;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;

export const AddImages = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: nowrap;
  gap: 24px;
`;
export const ImageFile = styled.li`
  width: 78px;
  height: 78px;
  position: relative;
  background: #bdbdbd;
`;
export const ImgLabel = styled.label`
  width: 78px;
  height: 78px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  &:before {
    content: "Upload";
    position: absolute;
    bottom: 15px;

    width: 100%;
    color: hsla(0, 0%, 31%, 1);
    font-size: 12px;
    text-align: center;
  }

  &:after {
    content: "+";
    position: absolute;
    top: 15px;

    width: 100%;
    color: hsla(0, 0%, 31%, 1);
    font-size: 30px;
    text-align: center;
  }
`;
export const InputFile = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const AddressModal = styled(Modal)``;
export const AddressSearchInput = styled(DaumPostcode)`
  padding-top: 40px;
  top: 20%;

  .css-0 {
    top: 30% !important;
  }
`;
