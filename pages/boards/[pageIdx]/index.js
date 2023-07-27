import BoardDetailCompo from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentListCompo from "../../../src/components/units/comment/list/CommentList.container";
import CommentWriteCompo from "../../../src/components/units/comment/write/CommentWrite.container";

export default function StaticRoutedBoard () {

    return ( //[pageIdx]
        <>
            <BoardDetailCompo />
            <CommentWriteCompo />
            <CommentListCompo />
        </>
    )
}