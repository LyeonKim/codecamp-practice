import CommentWriteUI from "./CommentWrite.presenter"
import { CREATE_COMMENT, FETCH_COMMENT, UPDATE_COMMENT } from "./CommentWrite.queries";
import { useState, ChangeEvent } from "react"
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

export default function CommentWriteCompo() {
    const router = useRouter();
    
    const [ createComment ] = useMutation(CREATE_COMMENT);


    const [ writer, setWriter ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ contents, setContents ] = useState('');
    const [ rating, setRating ] = useState('');


    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
    }

    const onChangeRating = (event: ChangeEvent<HTMLInputElement>) => {
        setRating(event.target.value);
    }

    const onClickCreateComment = async() => {
        const result = await createComment({
            variables: {
                boardId: String(router.query.pageIdx),
                createBoardCommentInput: {
                    writer: writer,
                    password: password,
                    contents: contents,
                    rating: 5,
                }
            },
            refetchQueries: [
                {
                    query: FETCH_COMMENT,
                    variables: { boardId: router.query.pageIdx }
                }
            ]
        })

        console.log(result)
    }



    return(
        <>
            <CommentWriteUI 
                onChangeWriter={onChangeWriter}
                onChangePassword={onChangePassword}
                onChangeContents={onChangeContents}
                onChangeRating={onChangeRating}
                contents={contents}
                onClickCreateComment={onClickCreateComment}
            />
        </>
    )
}