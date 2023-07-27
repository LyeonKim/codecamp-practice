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
    border-bottom: 1px solid #BDBDBD;
    padding: 20px 0 18px;
    gap: 10px;
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
`
export const ContentTopWrap= styled.div `
    width: auto;
    display: flex;
    gap: 12px;
`
export const Name= styled.p `
    font-size: 18px;
    font-weight: bold;
`

export const Comment= styled.p `
    margin-bottom: 20px;
`
export const Time= styled.p `
    color: #ddd;
    font-size: 12px;
`

export const Ratings= styled.ul ``
export const Rate= styled.li `
`
export const BtnWrap= styled.div ``
export const BtnEdit= styled.div ``
export const BtnDelete= styled.div ``


// export const aa= styled.div ``