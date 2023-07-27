import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries"
import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

export default function BoardDetailCompo () {
    const router = useRouter();

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: String(router.query.pageIdx) } //현재 링크에서 ID값 가져오고 -> 그걸로 fetch
    });

    const onClickEditBoard = () => {
        router.push(`/boards/${router.query.pageIdx}/edit`);
    }

    return ( //[pageIdx]
        <>
            <BoardDetailUI 
                data={data}
                onClickEditBoard={onClickEditBoard}
            />
        </>
    )
}