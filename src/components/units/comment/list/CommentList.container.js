import CommentListUI from "./CommentList.presenter"
import { useRouter } from "next/router"
import { FETCH_COMMENT } from "./CommentList.queries";
import { useQuery } from "@apollo/client";

export default function CommentListCompo () {
    const router = useRouter();
    const nowPageIdx = router.query.pageIdx; //현재 Board의 PageIdx'

    const { data } = useQuery(FETCH_COMMENT, {
        variables: { boardId: String(nowPageIdx) }
    })

    // console.log(data);


    return (
        <CommentListUI 
            data={data}
        />
    )
}