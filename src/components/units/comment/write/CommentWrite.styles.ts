import styled from "@emotion/styled";

export const Wrapper = styled.div`
    min-width: 750px;
    width: calc(100% - 60px);
    max-width: 1200px;
    height: auto;
    margin: 0px auto 10px;
    padding-top: 40px;
    border-top: 1px solid #ddd;
`;

export const PencilIcon = styled.img``;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 20px;
    gap: 20px;
`;

export const ContentsWrapper = styled.div`
    border: 1px solid #ddd;
    border-bottom: 2px solid #000;

`;

export const Input = styled.input`
    box-sizing: border-box;
    padding: 10px 16px;
    border: 1px solid #ddd;
    height: 52px;
    font-size: 17px;

    &::placeholder { color : #BDBDBD; }
`;

export const Textarea = styled.textarea`
    width: 100%;
    min-height: 108px;
    box-sizing: border-box;
    padding: 20px;
    border: none;
    border-bottom: 1px solid #ddd;
    resize: none;
    font-size: 16px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: -5px;
`;

export const ContentsLength = styled.div`
    width: 100%;
    height: 51px;
    line-height: 51px;
    padding-left: 20px;
    color: gray;
`;

export const Button = styled.button`
    width: 91px;
    height: 51px;
    background-color: black;
    color: white;
    cursor: pointer;
    margin-right: -1px;
`;
