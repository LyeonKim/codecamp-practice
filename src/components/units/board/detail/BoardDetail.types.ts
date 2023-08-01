import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react"

export interface IBoardDetailUIProps {
    data?:  Pick<IQuery, "fetchBoard"> 
    //data가 없을수도 있기 때문에 옵셔널 체이닝'?' 사용
    onClickEditBoard:  (event: MouseEvent<HTMLButtonElement>) => void
}