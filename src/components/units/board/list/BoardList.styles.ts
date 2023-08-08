import styled from "@emotion/styled";
// import Link from "next/link";

export const ListWrap = styled.div`
  width: 80%;

  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0 410px;
`;
export const Title = styled.h3`
  font-size: 36px;
  text-align: center;
  font-weight: 800;
  margin-bottom: 30px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-flow: column;
  margin: 20px auto;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;

  & > li:first-child {
    font-weight: bold;
    background: #efefef;
    font-size: 18px;
    height: 60px;
    border-width: 3px;
  }
`;
export const Li = styled.li`
  width: 100%;
  box-sizing: border-box;
  // padding: 0 30px;
  display: flex;
  height: 50px;
  margin: 0;
  align-items: center;
  border-bottom: 1px solid #ddd;
  text-align: center;

  & > * {
    height: 50px;
    margin: 0;
    line-height: 50px;
    box-sizing: border-box;
    padding: 0 20px;

    &:not(:last-child) {
      border-right: 1px dashed #ddd;
    }
  }
`;

export const ContNum = styled.span`
  width: 10%;
`;
export const ContWriter = styled.span`
  width: 15%;
`;
export const ContTitleS = styled.span`
  width: 60%;
`;
export const ContTitle = styled.span`
  width: 60%;
  cursor: pointer;
  &:hover {
    background: hsl(50deg 100% 50% / 18%);
  }
`;
export const ContTime = styled.span`
  width: 15%;
  font-size: 14px;
  color: #666;
`;

export const BtmWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const Btn = styled.button`
  box-sizing: border-box;
  border: none;
  line-height: 45px;
  height: 45px;
  padding: 0 15px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  background: #fff;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;
