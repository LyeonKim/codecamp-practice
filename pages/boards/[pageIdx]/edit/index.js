import BoardWriteCompo from "../../../../src/components/units/board/write/BoardWrite.container"
import { FETCH_BOARD } from "../../../../src/components/units/board/write/BoardWrite.queries"

import { useQuery } from "@apollo/client"
import { useRouter } from "next/router"

export default function BoardEditPage () {
    const router = useRouter();
    // console.log("router.query.pageIdx", router.query.pageIdx);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: String(router.query.pageIdx) }
    })

    return ( // [pageIdx]/ edit
        <BoardWriteCompo 
            isEdit={true}
            data = {data}
        />
    )
}