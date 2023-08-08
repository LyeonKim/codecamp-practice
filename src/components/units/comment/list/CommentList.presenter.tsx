import * as S from "./CommentList.styles";
import { getDate } from "../../../common/libraries/utils";
import type { CommentListUIProps } from "./CommentList.types";
import { Rate } from "antd";

export default function CommentListUI(props: CommentListUIProps) {
  // 임시 any
  // console.log('fetchBoardComments:', props.data?.fetchBoardComments);

  return (
    <>
      <S.CommentListWrap>
        {props.data?.fetchBoardComments.map((comment: any) => (
          <S.CommentWrap key={comment._id}>
            <S.ProfileImg>
              <img src="/images/profile.png" alt="프로필" />
            </S.ProfileImg>
            <S.ContentWrap>
              <S.ContentTopWrap>
                <S.Left>
                  <S.Name>{comment.writer}</S.Name>
                  <S.Ratings>
                    <S.Rate>
                      <Rate disabled defaultValue={comment.rating} />
                      &nbsp; {comment.rating}
                    </S.Rate>
                  </S.Ratings>
                </S.Left>
                <S.BtnWrap>
                  {/* <S.BtnEdit onClick={props.onClickUpdateComment}>댓글 수정</S.BtnEdit> */}
                  <S.BtnEdit>댓글 수정</S.BtnEdit>
                  {/* <S.BtnDelete onClick={props.onClickDeleteComment}>댓글 삭제</S.BtnDelete> */}
                  <S.BtnDelete>댓글 삭제</S.BtnDelete>
                </S.BtnWrap>
              </S.ContentTopWrap>
              <S.Comment>{comment.contents}</S.Comment>
              <S.Time>{getDate(comment.createdAt)}</S.Time>
            </S.ContentWrap>
          </S.CommentWrap>
        ))}
      </S.CommentListWrap>
    </>
  );
}
