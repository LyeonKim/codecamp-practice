import styled from "@emotion/styled";
import { Link } from "@material-ui/core";

export const Header = styled.div`
  width: 100%;
  // min-width: 1200px;
  height: 600px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 16px;

  font-weight: 600;
  box-shadow: 0px 5px 20px 0px hsla(0, 0%, 0%, 0.15);
`;
export const TopWrap = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 20px;
    height: 156px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;d
`;
export const Util = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-flow: nowrap row;
`;
export const Logo = styled.h1`
  font-size: 0;
`;
export const HomeHref = styled(Link)`
  display: inline-block;
  padding-right:;
`;
export const UtilItem = styled.li``;
export const Login = styled.a`
  display: inline-block;
  padding: 10px 16px 10px 16px;
`;
export const Sign = styled.a`
  display: inline-block;
  background: hsla(50, 100%, 50%, 1);
  padding: 10px 16px 10px 16px;
  border-radius: 10px;
`;

export const MySwiper = styled.div`
  width: 100%;
  flex-grow: 1;
  background: #ddd;
`;
export const Gnb = styled.ul`
  display: flex;
  width: 100%;
  height: 64px;
  gap: 2px;
  background: hsla(50, 100%, 50%, 1);
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;
export const Li = styled.li`
  flex-shrink: 1;
`;
export const Href = styled.a`
  display: inline-block;
  padding: 0 39px;
  line-height: 64px;
`;
// opacity: ${(props)=> props.isActive ? 1 : .4 }
