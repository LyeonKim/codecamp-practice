import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

import { IQuery, IQueryFetchBoardArgs } from "../../../../commons/types/generated/types";

export default function BoardDetailCompo(){
    const router = useRouter()
    if(!router || typeof router.query.boardId == null ) return <></>

    const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD, {
        variables: { boardId: String(router.query.pageIdx) },
    });

    const onClickEditBoard = () => {
        router.push(`/boards/${router.query.boardId}/edit`);
    };

    console.log("fetchBoard:")
    
    return (
    <BoardDetailUI 
        data={data}
        onClickEditBoard={onClickEditBoard}
    />
    )
}