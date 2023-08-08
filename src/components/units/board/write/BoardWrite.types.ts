import type { ChangeEvent } from "react";
import type { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit?: boolean;
  isError?: boolean;
  isActive?: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUIProps {
  data?: any;
  isEdit?: boolean;
  isError?: boolean;
  isActive?: boolean;
  isModalOpen?: boolean;
  zipcode: any;
  address: string;
  addressDetail: string;

  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;

  onClickCreateBoard: () => void;
  onClickEditBoard: () => void;
  onClickOpenModal: () => void;
  onClickAddressSearch: () => void;
  onClickCancelEdit: () => void;

  onCompleteAddressSearch: (data: any) => void;
}
