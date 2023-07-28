import styled from "@emotion/styled";

export const Hide = styled.span `
    font-size: 0;
    clip: rect(0, 0, 0, 0);
    width: 1px;
    height: 1px;
    text-indent: -99999px;
`
export const BoardWrap = styled.div `
    margin: 80px auto 102px;
    max-width : 1200px;
    min-width : 750px;
    width: calc(100% - 60px);
    height: auto;
    box-shadow: 0px 4px 20px 0px hsla(0, 0%, 0%, 0.2);
    box-sizing: border-box;
    padding: 80px;
    font-size: 18px;
`
export const Title = styled.h2 `
    font-size: 36px;
    font-weight: bold;
    // text-align: center;
    // margin-bottom: 80px;
`


// 유저 wrap
export const UserWrap = styled.div `
    display: flex;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid hsla(0, 0%, 74%, 1);
    gap: 12px;
`
export const TxtWrap = styled.div `
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    // gap: 8px;
`
export const UserImg = styled.div `
    width: 46px;
    height: 46px;
    box-sizing: border-box;
    margin: 5px;
    border-radius: 50%;
    background: #ddd;
`
export const Writer = styled.p `
    font-size: 24px;
`
export const WriteDate = styled.p `
    font-size: 15px;
    color: #828282;
    margin-top: 4px;
`



// 보드 컨텐츠 wrap
export const ContentWrap = styled.div `
    display: flex;
    flex-flow: column;
    gap: 40px;
    padding-bottom: 40px;
    margin-top: 80px;
`
export const ImgWrap = styled.div `
    width: 100%;
    height: auto;
    marin: 0 auto;
    object-fit: contain;

    & > * { width: 100%; height: auto; }
`

export const ContentTxt = styled.p `
    font-size: 16px;
    padding: 10px 0;
    width:100%;
    height: auto;
    word-break: break-word;
    
    // border: 1px solid red;
`

export const BtnWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 24px;
    justify-content: center;
    padding-bottom: 87px;
`

export const Btn = styled.button `
    box-sizing: border-box;
    border: none;
    line-height: 45px;
    height: 45px;
    padding: 0 60px;
    border: 1px solid #BDBDBD;
    background: #fff;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
`


export const CountBtnWarp = styled.div `
    width: 100%;
    display: flex;
    gap: 40px;
    justify-content: center;
`

export const BtnLike = styled.button `
    height: 50px;
    width: 40px;
    outline: none;
    border: none;
    display: inline-flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    cursor: pointer;
    color: #FFD600;
`
export const BtnUnlike = styled.button `
    height: 50px;
    width: 40px;
    outline: none;
    border: none;
    display: inline-flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    cursor: pointer;
    color: #828282;
`
export const IconLike = styled.span `
    font-size: 0;
    width:24px;
    height: 24px;
    background: url('/images/icon-like.png') no-repeat 50% 50%/ 100% 100%;
`
export const IconUnlike = styled.span `
    font-size: 0;
    width:24px;
    height: 24px;
    background: url('/images/icon-unlike.png') no-repeat 50% 50%/ 100% 100%;
`
export const Count = styled.span `
    font-size: 18px;
    // line-height: 24px;
`