import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { EditOutlined } from "@ant-design/icons";
import { getDate } from "../../src/components/common/libraries/utils";
import type { MouseEvent } from "react";

import * as S from "../../src/components/units/board/list/BoardList.styles";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

export default function BoardPage(): JSX.Element {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards._id);

  const onClickMoveToBoardNew = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveToBoardDetail = (
    event: MouseEvent<HTMLDivElement>,
  ): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
    // console.log(event.target._id);
  };
  return (
    <S.ListWrap>
      <S.Title>베스트 게시글</S.Title>
      <S.Ul>
        <S.Li>
          <S.ContNum>번호</S.ContNum>
          <S.ContWriter>작성자</S.ContWriter>
          <S.ContTitleS>제목</S.ContTitleS>
          <S.ContTime>날짜</S.ContTime>
        </S.Li>
        {data?.fetchBoards.map((el: any) => (
          <S.Li key={el._id}>
            <S.ContNum>{String(el._id).slice(-4).toUpperCase()}</S.ContNum>
            <S.ContWriter>{el.writer}</S.ContWriter>
            <S.ContTitle id={el._id} onClick={onClickMoveToBoardDetail}>
              {el.title}
            </S.ContTitle>
            <S.ContTime>{getDate(el.createdAt)}</S.ContTime>
          </S.Li>
        ))}
      </S.Ul>
      <S.BtmWrap>
        <S.Btn onClick={onClickMoveToBoardNew}>
          <EditOutlined rev={undefined} />
          &nbsp;&nbsp;게시물 등록하기
        </S.Btn>
      </S.BtmWrap>
    </S.ListWrap>
  );
}
