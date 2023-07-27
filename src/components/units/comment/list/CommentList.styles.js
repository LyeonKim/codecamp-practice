import styled from "@emotion/styled";


export const CommentListWrap= styled.div `
    min-width: 750px;
    width: calc(100% - 60px);
    max-width: 1200px;
    height: auto;
    margin: 0 auto 540px;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;
    font-size: 16px;

    ul, li {
        list-style: none;
        padding: 0;
    }
`

export const CommentWrap= styled.div `
    flex-grow: 1;
    display: flex;
    padding: 20px 0 18px;
    gap: 10px;

    border-bottom: 1px solid #D9D9D9;
`

export const ProfileImg= styled.div `
    width: 48px;
    height: 48px;
`

export const ContentWrap= styled.div `
    width: auto;
    flex-grow: 1;

    display: flex;
    flex-flow: column;

    & > p { line-height: 1.4; }
`
export const ContentTopWrap= styled.div `
    width: auto;
    display: flex;
    justify-content: space-between;
    gap: 12px;
`
export const Left= styled.div `
    display: flex;
    gap: 8px;

`
export const Name= styled.p `
    font-size: 18px;
    font-weight: bold;
`
export const BtnWrap= styled.div `
    display: flex;
    gap: 8px;

    & > button {
        width: 24px;
        height: 24px;
        font-size: 0px;
        border: none;
        padding: 4px;
        cursor: pointer;
    }
`
export const BtnEdit= styled.button `
    background: url('/images/icon-edit.png') no-repeat 50% 50%/ 24px 24px;
`
export const BtnDelete= styled.button `
    background: url('/images/icon-delete.png') no-repeat 50% 50%/ 24px 24px;
`

export const Comment= styled.p `
    margin-bottom: 20px;
`
export const Time= styled.p `
    color: #BDBDBD;
    font-size: 12px;
`

export const Ratings= styled.ul ``
export const Rate= styled.li `
`



// export const aa= styled.div ``