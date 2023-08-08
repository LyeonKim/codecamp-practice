import CommentWriteUI from "./CommentWrite.presenter";
import { CREATE_COMMENT, FETCH_COMMENT } from "./CommentWrite.queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import type { ChangeEvent } from "react";

export default function CommentWriteCompo(): JSX.Element {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const [createComment] = useMutation(CREATE_COMMENT);

  const onClickCreateComment = async () => {
    try {
      await createComment({
        variables: {
          boardId: String(router.query.pageIdx),
          createBoardCommentInput: {
            writer,
            password,
            contents,
            rating,
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.pageIdx },
          },
        ],
      });
    } catch (error) {
      alert("댓글등록 실패");
    }

    setWriter("");
    setPassword("");
    setContents("");
  };

  return (
    <>
      <CommentWriteUI
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        setRating={setRating}
        onClickCreateComment={onClickCreateComment}
        writer={writer}
        password={password}
        contents={contents}
        // rating={rating}
      />
    </>
  );
}
