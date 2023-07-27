import * as S from "./CommentList.styles"

export default function CommentListUI(props) {
    console.log(props.data?.fetchBoardComments);
    
    return(
        <>
            <S.CommentListWrap
                data={props.data}
            >
                { props.data?.fetchBoardComments.map((comment) => (
                        <S.CommentWrap
                            key={comment._id}
                        >
                            <S.ProfileImg>
                                <img src="/images/profile.png" alt="프로필" />
                            </S.ProfileImg>
                            <S.ContentWrap>
                                <S.ContentTopWrap>
                                    <S.Name>
                                        {comment.writer}
                                    </S.Name>
                                    <S.Ratings>
                                        <S.Rate>
                                            {comment.rating}
                                        </S.Rate>
                                    </S.Ratings>
                                </S.ContentTopWrap>
                                <S.Comment>
                                    {comment.contents}
                                </S.Comment>
                                <S.Time>
                                    {comment.createdAt}
                                </S.Time>
                            </S.ContentWrap>
                        </S.CommentWrap>
                    )
                )}

                
            </S.CommentListWrap>
        </>
    )
}``