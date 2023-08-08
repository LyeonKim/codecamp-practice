import type { ChangeEvent } from "react";

export interface CommentWriteUIProps {
  data?: any;
  contents: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  setRating: (event: any) => void;
  onClickCreateComment: () => void;
}
