import { useMutation } from "@apollo/client"
import BoardWriteUI from "./BoardWrite.presenter"
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardWriteCompo(props){
    const router = useRouter();

    const [ isActive, setIsActive ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    const [ createBoard ] = useMutation(CREATE_BOARD);
    const [ writer, setWriter ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ contents, setContents ] = useState('');
    const [ youtubeUrl, setYoutubeUrl ] = useState('');
    
    const onChangeWriter = (e) => {
        setWriter(e.target.value);

        if(e.target.value && password && title && contents && youtubeUrl != "" ) setIsActive(true);
        else setIsActive(false);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);

        if(e.target.value && writer && title && contents && youtubeUrl != "" ) setIsActive(true);
        else setIsActive(false);
    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value);

        if(e.target.value && writer && password && contents && youtubeUrl != "" ) setIsActive(true);
        else setIsActive(false);
    }

    const onChangeContents = (e) => {
        setContents(e.target.value);

        if(e.target.value && writer && password && title && youtubeUrl != "" ) setIsActive(true);
        else setIsActive(false);
    }

    const onChangeYoutubeUrl = (e) => {
        setYoutubeUrl(e.target.value);

        if(e.target.value && writer && password && title && contents != "" ) setIsActive(true);
        else setIsActive(false);
    }
    
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

    const onClickEditBoard = async () => { //수정 업데이트
        try {
            const myVariables = {}
            if(title) myVariables.title = title;
            if(contents) myVariables.contents = contents;
            if(youtubeUrl) myVariables.youtubeUrl = youtubeUrl;

            if(!contents && !title && !youtubeUrl){
                alert('수정된 내용이 없습니다.')
            }  else {
                const result = await updateBoard({
                    variables: {
                        boardId: String(router.query.pageIdx),
                        password: password, 
                        updateBoardInput: myVariables
                    }
                })
                console.log('[Edit]result:',result);
                router.push(`/boards/${router.query.pageIdx}`);
            }
            
        } catch(error) {
            setIsError(true);
            if(!password) {
                alert("비밀번호를 입력해주세요");
                setIsError(true);
            } else alert('비밀번호가 일치하지 않습니다.')
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

            isActive={isActive}
            isError={isError}
        />
    )
}