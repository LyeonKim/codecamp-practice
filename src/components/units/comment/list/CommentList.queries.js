import { gql } from "@apollo/client";

export const FETCH_COMMENT = gql`
    query fetchBoardComments( $boardId: ID! ) { 
        fetchBoardComments( boardId: $boardId ) {
            _id, writer, contents, rating, createdAt, updatedAt
        }
    }
`

export const DELETE_COMMENT = gql`
    mutation deleteBoardComment(
        $password: String
        $boardCommentId: ID!
    ){
        deleteBoardComment (
            password : $password
            boardCommentId : $boardCommentId
        )
        
    }
`

export const UPDATE_COMMENT = gql`
    mutation updateBoardComment(
        $updateBoardCommentInput: UpdateBoardCommentInput!
        $password: String
        $boardCommentId: ID!
    ){
        updateBoardComment(
            updateBoardCommentInput: $updateBoardCommentInput
            password: $password
            boardCommentId: $boardCommentId
        ){
            _id, writer, contents, rating, createdAt, updatedAt, deletedAt
        }
    }
`
