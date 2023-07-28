import * as S from "./BoardDetail.styles"

import { getDate } from "../../../common/libraries/utils" 
import { Image } from "antd"

export default function BoardDetailUI (props) {

    return(
        <>
            <S.BoardWrap className="wrap">
                <S.UserWrap>
                    <S.UserImg></S.UserImg>
                    <S.TxtWrap>
                        <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
                        <S.WriteDate>
                            {getDate(props.data?.fetchBoard?.createdAt)}
                        </S.WriteDate>
                    </S.TxtWrap>
                </S.UserWrap>

                <S.ContentWrap>
                    <S.Title>{props.data?.fetchBoard.title}</S.Title>
                    <S.ImgWrap>
                        <Image
                            src="/images/dummy.jpg"
                            alt="Picture of the author"
                        />
                    </S.ImgWrap>
                    <S.ContentTxt>
                        {props.data?.fetchBoard.contents}
                        {/* {props.data ? props.data.fetchBoard?.contents : '데이터 로딩중...' } */}
                    </S.ContentTxt>
                    <S.CountBtnWarp>
                        <S.BtnLike type="button">
                            <S.IconLike>Like</S.IconLike>
                            <S.Count className="count">
                                1920
                                {/* ${props.data?.fetchBoard.likeCount} */}
                            </S.Count>
                        </S.BtnLike>
                        <S.BtnUnlike type="button">
                            <S.IconUnlike>Like</S.IconUnlike>
                            <S.Count className="count">
                                1920
                                {/* ${props.data?.fetchBoard.likeCount} */}
                            </S.Count>
                        </S.BtnUnlike>
                    </S.CountBtnWarp>
                </S.ContentWrap>

            </S.BoardWrap>

            <S.BtnWrap>
                <S.Btn>목록으로</S.Btn>
                <S.Btn onClick={props.onClickEditBoard}>수정하기</S.Btn>
            </S.BtnWrap>
        </>
    )
}