import * as S from "./BoardWrite.styles"

export default function BoardWriteUI(props){
    // console.log('props.data',props.data);


    return(
        <S.BoardWrap className="wrap">
            <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
            <S.FormWrap>
                <S.InputWrap>
                    <S.Label htmlFor="title">제목</S.Label>
                    <S.Input 
                        onChange={props.onChangeTitle}
                    // defaultValue는 이미 등록된 데이터에서 받아와야하겠죠~
                        defaultValue={props.data?.fetchBoard.title}
                        type="text" id="title" placeholder="제목을 작성해주세요."/>
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label htmlFor="writer">작성자</S.Label>
                    <S.Input
                        onChange={props.onChangeWriter}
                        defaultValue={props.data?.fetchBoard.writer}
                        type="text" id="writer" placeholder="작성자 이름을 작성해주세요."/>
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label htmlFor="content">내용</S.Label>
                    <S.Textarea
                        onChange={props.onChangeContents}
                        defaultValue={props.data?.fetchBoard.contents}
                        type="text" id="content" placeholder="내용을 작성해주세요."/>
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label htmlFor="youtubeUrl">유투브</S.Label>
                    <S.Input 
                        onChange={props.onChangeYoutubeUrl}
                        defaultValue={props.data?.fetchBoard.youtubeUrl}
                        type="text" id="youtubeUrl" placeholder="링크를 복사해주세요."/>
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label>이미지</S.Label>
                    <S.AddImages>
                        <S.ImageFile>
                            <S.ImgLabel htmlFor="add-image01" className="input">
                                <S.InputFile type="file" name="" id="add-image01" />
                            </S.ImgLabel>
                        </S.ImageFile>
                        <S.ImageFile>
                            <S.ImgLabel htmlFor="add-image02" className="input">
                                <S.InputFile type="file" name="" id="add-image02" />
                            </S.ImgLabel>
                        </S.ImageFile>
                        <S.ImageFile>
                            <S.ImgLabel htmlFor="add-image03" className="input">
                                <S.InputFile type="file" name="" id="add-image03" />
                            </S.ImgLabel>
                        </S.ImageFile>
                    </S.AddImages>
                </S.InputWrap>
                <S.InputWrap>
                    <S.Label htmlFor="pwd">비밀번호</S.Label>
                    <S.Input
                        onChange={props.onChangePassword}
                        type="text" id="pwd" placeholder="비밀번호를 작성해주세요."/>
                </S.InputWrap>
            </S.FormWrap>
            <S.ButtonWrap>
                {props.isEdit
                    ? <S.BtnCancel type="button">취소 하기</S.BtnCancel>
                    : ""
                }
                <S.Btn 
                    type="button"
                    onClick={props.isEdit ? props.onClickEditBoard : props.onClickCreateBoard }
                >{props.isEdit ? "수정" : "등록"}하기</S.Btn>
            </S.ButtonWrap>
        </S.BoardWrap>
    )
}