import * as S from "./CommentWrite.styles";
import type { CommentWriteUIProps } from "./CommentWrite.types";
import { Rate } from "antd";

export default function CommentWriteUI(props: CommentWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <>
          <S.PencilIcon />
          <span>댓글</span>
        </>
        <S.InputWrapper>
          <S.Input
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props.writer}
          />

          <S.Input
            // type="password"
            placeholder="비밀번호"
            value={props.password}
            onChange={props.onChangePassword}
          />
          <Rate onChange={props.setRating} />
        </S.InputWrapper>
        <S.ContentsWrapper>
          <S.Textarea
            onChange={props.onChangeContents}
            placeholder=""
            value={props.contents}
          />
          <S.BottomWrapper>
            <S.ContentsLength>
              {props.contents?.length ? props.contents.length : "0"}
              &nbsp;/ 100
            </S.ContentsLength>
            <S.Button onClick={props.onClickCreateComment}>등록하기</S.Button>
          </S.BottomWrapper>
        </S.ContentsWrapper>
      </S.Wrapper>
    </>
  );
}
