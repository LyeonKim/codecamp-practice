import { useMutation } from "@apollo/client";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

import { useRouter } from "next/router";
import { useState } from "react";

import type { ChangeEvent } from "react";
import type { IBoardWriteProps } from "./BoardWrite.types";
import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";
import type { Address } from "react-daum-postcode"; // type을 가져옴

export default function BoardWriteCompo(props: IBoardWriteProps) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  // modal 오픈
  const onClickOpenModal = () => {
    setIsModalOpen((prev) => !prev);
    console.log(isModalOpen);
  };

  // 주소 검색 & 주소검색 완료 & 상세주소(input) 입력값
  const onClickAddressSearch = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: Address): void => {
    console.log("주소검색", data);
    setAddress(data.address);
    setZipcode(data.zonecode);
    setIsModalOpen((prev) => !prev);
  };

  const onChangeAddressDetail = (
    event: ChangeEvent<HTMLInputElement>,
  ): void => {
    setAddressDetail(event.target.value);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);

    if (
      event.target.value &&
      password &&
      title &&
      contents &&
      youtubeUrl !== ""
    )
      setIsActive(true);
    else setIsActive(false);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (
      event.target.value &&
      writer &&
      title &&
      contents &&
      youtubeUrl &&
      zipcode &&
      address !== ""
    )
      setIsActive(true);
    else setIsActive(false);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);

    if (
      event.target.value &&
      writer &&
      password &&
      contents &&
      youtubeUrl !== ""
    )
      setIsActive(true);
    else setIsActive(false);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);

    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      youtubeUrl &&
      zipcode &&
      address !== ""
    )
      setIsActive(true);
    else setIsActive(false);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);

    if (
      event.target.value &&
      writer &&
      password &&
      title &&
      contents &&
      zipcode &&
      address !== ""
    )
      setIsActive(true);
    else setIsActive(false);
  };

  const onClickCreateBoard = async (): Promise<void> => {
    // 등록
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            writer,
            password,
            title,
            contents,
            youtubeUrl,
            boardAddress: {
              zipcode,
              address,
              addressDetail,
            },
            images: ["aaa", "aaa"],
          },
        },
      });

      // 기다리면 await, 기다리지 않으면 void 작성
      await router.push(`/boards/${result.data.createBoard._id}`);
      console.log("result", result);
    } catch (error) {
      alert("게시글 등록에 실패하였습니다.");
    }
  };

  const onClickCancelEdit = (): void => {
    void router.push(`/boards/${router.query.pageIdx}`);
  };

  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickEditBoard = async () => {
    // 수정 + 업데이트

    if (
      title === "" &&
      contents === "" &&
      youtubeUrl === "" &&
      address === "" &&
      addressDetail === "" &&
      zipcode === ""
    ) {
      alert("수정된 내용이 없습니다.");
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode !== "" || address !== "" || addressDetail !== "") {
      // zipcode, address, addressDetail 세 요소 중 하나라도 변화가 감지되면
      updateBoardInput.boardAddress = {};
      // boardAddress 세 요소 담을 수 있는 객체 생성 + 각 요소 수정 있을때만 추가
      if (zipcode !== "") updateBoardInput.boardAddress.zipCode = zipcode;
      if (address !== "") updateBoardInput.boardAddress.address = address;
      if (addressDetail !== "")
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.pageIdx,
          password,
          updateBoardInput,
        },
      });

      if (result.data?.updateBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }

      void router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      onClickCreateBoard={onClickCreateBoard}
      isEdit={props.isEdit}
      onChangeTitle={onChangeTitle}
      onChangeWriter={onChangeWriter}
      onChangeContents={onChangeContents}
      onChangePassword={onChangePassword}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickEditBoard={onClickEditBoard}
      onClickOpenModal={onClickOpenModal}
      onCompleteAddressSearch={onCompleteAddressSearch}
      onClickAddressSearch={onClickAddressSearch}
      onClickCancelEdit={onClickCancelEdit}
      isModalOpen={isModalOpen}
      data={props.data} // 수정 페이지에서 fetchBoard값을 defaultValue로
      isActive={isActive}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
    />
  );
}
