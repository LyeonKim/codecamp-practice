import * as S from "./CommentWrite.styles"

export default function CommentWriteUI(props) {

    return(
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
                />
                <S.Input
                    type="password"
                    placeholder="비밀번호"
                    onChange={props.onChangePassword}
                />
            </S.InputWrapper>
            <S.ContentsWrapper>
                <S.Textarea
                    onChange={props.onChangeContents}
                    placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
                />
                <S.BottomWrapper>
                    <S.ContentsLength>
                        { props.contents?.length ? props.contents.length : '0' }
                        &nbsp;/ 100
                    </S.ContentsLength>
                    <S.Button 
                        onClick={props.onClickCreateComment}
                    >
                        등록하기
                    </S.Button>
                </S.BottomWrapper>
            </S.ContentsWrapper>
            </S.Wrapper>
        </>
    )
}