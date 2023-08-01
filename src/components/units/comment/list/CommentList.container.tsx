import CommentListUI from "./CommentList.presenter"
import { FETCH_COMMENT } from "./CommentList.queries";
// import { useMutation } from "@apollo/client";
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client";
// import {MouseEvent} from "react"



export default function CommentListCompo () {
    const router = useRouter();
    const nowPageIdx = router.query.pageIdx; //현재 Board의 PageIdx'

    // const [ deleteComment ] = useMutation(DELETE_COMMENT);
    // const [ updateComment ] = useMutation(UPDATE_COMMENT);

    const { data } = useQuery(FETCH_COMMENT, {
        variables: { boardId: String(nowPageIdx) }
    })

    // const onClickDeleteComment = async(e: MouseEvent<HTMLButtonElement>) => {
    //     console.log(e.target.key);
    // }

    // const onClickUpdateComment = async() => {
    //     const myPwd = prompt("비밀번호를 입력해주세요");

    //     const result = await updateComment ({
    //         boardCommentId : String(router.query.pageIdx),
    //         variables: {
    //             contents: contents
    //         },
    //         password: myPwd,
            
    //     })
    // }

    
    return (
        <CommentListUI 
            data={data}
            // onClickUpdateComment={onClickUpdateComment}
            // onClickDeleteComment={onClickDeleteComment}
        />
    )
}