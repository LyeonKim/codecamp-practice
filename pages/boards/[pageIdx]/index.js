import * as S from "../../../src/components/units/board/detail/BoardDetail.styles"
import { Image } from "antd"
import { gql, useQuery } from "@apollo/client"
import { useRouter } from "next/router"


const FETCH_BOARD = gql`
    query fetchBoard( $boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            likeCount
            images
        }
    }
`


export default function StaticRoutedBoard () {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: String(router.query.pageIdx) } //현재 링크에서 ID값 가져오고 -> 그걸로 fetch
    });

    const onClickEditBoard = () => {
        router.push(`/boards/${router.query.pageIdx}/edit`);
    }

    return ( //[pageIdx]
        <>
            <S.BoardWrap className="wrap">
                <S.UserWrap>
                    <S.UserImg></S.UserImg>
                    <S.TxtWrap>
                        <S.Writer>{data?.fetchBoard.writer}</S.Writer>
                        <S.WriteDate>Date: 2023.00.00</S.WriteDate>
                    </S.TxtWrap>
                </S.UserWrap>

                <S.ContentWrap>
                    <S.Title>{data?.fetchBoard.title}</S.Title>
                    <S.ImgWrap>
                        <Image
                            src="/images/dummy.jpg"
                            alt="Picture of the author"
                        />
                    </S.ImgWrap>
                    <S.ContentTxt>
                        {data?.fetchBoard.contents}
                        {/* {data ? data.fetchBoard?.contents : '데이터 로딩중...' } */}
                    </S.ContentTxt>
                    <S.CountBtnWarp>
                        <S.BtnLike type="button">
                            <S.IconLike>Like</S.IconLike>
                            <S.Count className="count">
                                1920
                                {/* ${data?.fetchBoard.likeCount} */}
                            </S.Count>
                        </S.BtnLike>
                        <S.BtnUnlike type="button">
                            <S.IconUnlike>Like</S.IconUnlike>
                            <S.Count className="count">
                                1920
                                {/* ${data?.fetchBoard.likeCount} */}
                            </S.Count>
                        </S.BtnUnlike>
                    </S.CountBtnWarp>
                </S.ContentWrap>

            </S.BoardWrap>

            <S.BtnWrap>
                <S.Btn>목록으로</S.Btn>
                <S.Btn onClick={onClickEditBoard}>수정하기</S.Btn>
            </S.BtnWrap>
        </>
    )
}