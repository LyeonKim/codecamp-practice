import { ChangeEvent } from "react"

export interface CommentWriteUIProps {
    data?: any
    contents: string
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeRating: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickCreateComment: () => void
}