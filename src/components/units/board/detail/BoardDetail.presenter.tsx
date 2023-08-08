import * as S from "./BoardDetail.styles";
import { getDate } from "../../../common/libraries/utils";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

import { Image, Tooltip } from "antd";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <div>
      <S.BoardWrap className="wrap">
        <S.UserWrap>
          <S.AvatarWrapper>
            <S.UserImg></S.UserImg>
            <S.TxtWrap>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.WriteDate>
                {getDate(props.data?.fetchBoard?.createdAt)}
              </S.WriteDate>
            </S.TxtWrap>
          </S.AvatarWrapper>
          <S.IconWrap>
            <S.LocationIcon src="/images/icon-link.png" />
            <Tooltip
              placement="topRight"
              title={`
								우편 ${props.data?.fetchBoard.boardAddress?.zipcode ?? ""} )
								${props.data?.fetchBoard.boardAddress?.address ?? ""} 
								${props.data?.fetchBoard.boardAddress?.addressDetail ?? ""}
							`}
            >
              <S.LocationIcon src="/images/icon-location.png" />
            </Tooltip>
          </S.IconWrap>
        </S.UserWrap>

        <S.ContentWrap>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.ImgWrap>
            <Image src="/images/dummy.jpg" alt="Picture of the author" />
          </S.ImgWrap>
          <S.ContentTxt>{props.data?.fetchBoard?.contents}</S.ContentTxt>
          {props.data?.fetchBoard.youtubeUrl !== "" && (
            <S.Youtube url={props.data?.fetchBoard.youtubeUrl ?? ""} />
          )}
          <S.CountBtnWarp>
            <S.BtnLike type="button">
              <S.IconLike>Like</S.IconLike>
              <S.Count className="count">1920</S.Count>
            </S.BtnLike>
            <S.BtnUnlike type="button">
              <S.IconUnlike>Like</S.IconUnlike>
              <S.Count className="count">1920</S.Count>
            </S.BtnUnlike>
          </S.CountBtnWarp>
        </S.ContentWrap>
      </S.BoardWrap>

      <S.BtnWrap>
        <S.Btn onClick={props.onClickMoveToBoardList}>목록으로</S.Btn>
        <S.Btn onClick={props.onClickEditBoard}>수정하기</S.Btn>
      </S.BtnWrap>
    </div>
  );
}
