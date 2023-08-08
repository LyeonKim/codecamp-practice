import * as S from "./BoardWrite.styles";
import type { IBoardWriteUIProps } from "./BoardWrite.types";

export default function BoardWriteUI(props: IBoardWriteUIProps): JSX.Element {
  return (
    <S.BoardWrap className="wrap">
      {props.isModalOpen && (
        <S.AddressModal
          centered
          open={true}
          onOk={props.onClickOpenModal}
          onCancel={props.onClickOpenModal}
        >
          <S.AddressSearchInput onComplete={props.onCompleteAddressSearch} />
        </S.AddressModal>
      )}
      <S.Title>게시물 {props.isEdit ? "수정" : "등록"}</S.Title>
      <S.FormWrap>
        <S.RowWrap>
          <S.InputWrap>
            <S.Label htmlFor="writer">작성자</S.Label>
            <S.Input
              readOnly={props.isEdit}
              onChange={props.onChangeWriter}
              defaultValue={props.data?.fetchBoard.writer}
              type="text"
              id="writer"
              placeholder="작성자 이름을 작성해주세요."
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.Label htmlFor="pwd">비밀번호</S.Label>
            <S.Input
              onChange={props.onChangePassword}
              type="text"
              id="pwd"
              placeholder="비밀번호를 작성해주세요."
            />
          </S.InputWrap>
        </S.RowWrap>
        <S.InputWrap>
          <S.Label htmlFor="title">제목</S.Label>
          <S.Input
            onChange={props.onChangeTitle}
            // defaultValue는 이미 등록된 데이터에서 받아와야하겠죠~
            defaultValue={props.data?.fetchBoard.title}
            type="text"
            id="title"
            placeholder="제목을 작성해주세요."
          />
        </S.InputWrap>

        <S.InputWrap>
          <S.Label htmlFor="content">내용</S.Label>
          <S.Textarea
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
            id="content"
            placeholder="내용을 작성해주세요."
          />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label htmlFor="address">주소</S.Label>
          <S.zipCodeWrapper>
            <S.InputAddress
              placeholder="07250"
              readOnly
              value={
                props.zipcode !== ""
                  ? props.zipcode
                  : props.data?.fetchBoard.boardAddress?.zipcode ?? ""
              }
            />
            <S.BtnAddress onClick={props.onClickOpenModal}>
              우편번호 검색
            </S.BtnAddress>
          </S.zipCodeWrapper>
          <S.Input
            type="text"
            id="address"
            readOnly
            value={
              props.address !== ""
                ? props.address
                : props.data?.fetchBoard.boardAddress?.address ?? ""
            }
          />
          <S.Input type="text" id="address" placeholder="" />
        </S.InputWrap>
        <S.InputWrap>
          <S.Label htmlFor="youtubeUrl">유투브</S.Label>
          <S.Input
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl}
            type="text"
            id="youtubeUrl"
            placeholder="링크를 복사해주세요."
          />
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
        <S.InputWrap></S.InputWrap>
      </S.FormWrap>
      <S.ButtonWrap>
        {props.isEdit ? (
          <S.BtnCancel onClick={props.onClickCancelEdit} type="button">
            취소 하기
          </S.BtnCancel>
        ) : (
          ""
        )}
        <S.Btn
          type="button"
          onClick={
            props.isEdit ? props.onClickEditBoard : props.onClickCreateBoard
          }
          // isActive={props.isEdit ? true : props.isActive }
          disabled={props.isEdit ? false : !props.isActive}
          // 등록하기 Btn 활성화 // 등록하기 일 때만 버튼 활성화 조건 부여 // 수정하기는 항상 활성화
        >
          {props.isEdit ? "수정" : "등록"}하기
        </S.Btn>
      </S.ButtonWrap>
    </S.BoardWrap>
  );
}
