import { ReactNode } from "react";
import { User } from "../interfaces/User";

export type PopupProps = {
  index: number;
  popupId: string;
  payload?: any;
  children?: ReactNode;
  title?: string;
  handleDone?: (selected?: User[]) => void;
  disabled?: {
    done: boolean;
    cancel: boolean;
  };
  hidden?: boolean;
};
