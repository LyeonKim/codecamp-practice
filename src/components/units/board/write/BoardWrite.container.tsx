import { useMutation } from "@apollo/client";

import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";

import { useRouter } from "next/router";
import { useState } from "react";

import type { ChangeEvent } from "react";
import type { IBoardWriteProps } from "./BoardWrite.types";
import type { IUpdateBoardInput } from "../../../../commons/types/generated/types";

export default function BoardWriteCompo(props: IBoardWriteProps) {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);

  const [createBoard] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

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

    if (event.target.value && writer && title && contents && youtubeUrl !== "")
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

    if (event.target.value && writer && password && title && youtubeUrl !== "")
      setIsActive(true);
    else setIsActive(false);
  };

  const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value);

    if (event.target.value && writer && password && title && contents !== "")
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
            // boardAddress: {
            //     zipCode: 'aaa', address: 'aaa', addressDetail: 'aaa'
            // },
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

  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onClickEditBoard = async () => {
    // 수정 + 업데이트
    try {
      const updateBoardInput: IUpdateBoardInput = {};
      if (title) {
        updateBoardInput.title = title;
      }
      if (contents) {
        updateBoardInput.contents = contents;
      }
      if (youtubeUrl) {
        updateBoardInput.youtubeUrl = youtubeUrl;
      }

      if (!contents && !title && !youtubeUrl) {
        alert("수정된 내용이 없습니다.");
      } else {
        const result = await updateBoard({
          variables: {
            boardId: String(router.query.pageIdx),
            password,
            updateBoardInput,
          },
        });
        console.log("[Edit]result:", result);
        await router.push(`/boards/${router.query.pageIdx}`);
      }
    } catch (error) {
      setIsError(true);
      if (!password) {
        alert("비밀번호를 입력해주세요");
        setIsError(true);
      } else alert("비밀번호가 일치하지 않습니다.");
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
      onClickEditBoard={onClickEditBoard}
      data={props.data} // 수정 페이지에서 fetchBoard값을 defaultValue로
      isActive={isActive}
      isError={isError}
    />
  );
}
