import { useMutation, useQuery } from "@apollo/client"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardWriteCompo(props){
    const router = useRouter();

    const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ writer, setWriter ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');
    const [ youtubeUrl, setYoutubeUrl ] = useState('');
    
    const onChangeWriter = (e) => setWriter(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value);
    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeContents = (e) => setContents(e.target.value);
    const onChangeYoutubeUrl = (e) => setYoutubeUrl(e.target.value);
    
    const onClickCreateBoard = async () => { //등록
        try {
            const result = await createBoard({
                variables: {
                    createBoardInput: {
                        writer: writer,
                        password: password,
                        title: title,
                        contents: contents,
                        youtubeUrl: youtubeUrl,
                        // boardAddress: {
                        //     zipcode: 'aaa', address: 'aaa', addressDetail: 'aaa'
                        // },
                        images: ['aaa','aaa']
                    }
                }
            })
            router.push(`/boards/${result.data.createBoard._id}`);

        } catch(error) {
            alert('게시글 등록에 실패하였습니다.')
        }
    }

    const [ updateBoard ] = useMutation(UPDATE_BOARD);

    const onClickEditBoard = async () => { //등록
        try {
            const myVariables = {}
            if(title) myVariables.title = title;
            if(writer) myVariables.writer = writer;
            if(contents) myVariables.contents = contents;
            if(youtubeUrl) myVariables.youtubeUrl = youtubeUrl;

            const result = await updateBoard({
                variables: {
                    updateBoardInput: myVariables, password: password, boardId: String(router.query.pageIdx)
                }
            })

            console.log('[Edit]result:',result);
            router.push(`/boards/${router.query.pageIdx}`);
            
        } catch(error) {
            alert('게시글 수정에 실패하였습니다.')
        }
    }


    return(
        <BoardWriteUI
            onClickCreateBoard={onClickCreateBoard}
            isEdit={props.isEdit}
            
            onChangeTitle={onChangeTitle}
            onChangeWriter={onChangeWriter}
            onChangeContents={onChangeContents}
            onChangePassword={onChangePassword}
            onChangeYoutubeUrl={onChangeYoutubeUrl}

            onClickEditBoard={onClickEditBoard}
            data={props.data} //수정 페이지에서 fetchBoard값을 defaultValue로
        />
    )
}