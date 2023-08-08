import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import type {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetailCompo() {
  const router = useRouter();

  if (!router || typeof router.query.boardId === null) return <></>;

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.pageIdx) },
    },
  );

  const onClickEditBoard = () => {
    void router.push(`/boards/${router.query.pageIdx}/edit`);
    console.log(data?.fetchBoard);
  };
  const onClickMoveToBoardList = () => {
    void router.push(`/boards`);
  };

  console.log("fetchBoard:", data);

  return (
    <BoardDetailUI
      data={data}
      onClickEditBoard={onClickEditBoard}
      onClickMoveToBoardList={onClickMoveToBoardList}
    />
  );
}
