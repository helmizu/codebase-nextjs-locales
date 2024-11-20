import { AxiosError } from "axios";

export interface ResponseServiceDetails {
  eventCode: number;
  message: string;
  counter?: number;
  link?: string;
}

export interface ResponseServiceMetaError {
  eventCode?: number;
  message?: string;
  subMessage?: string;
}

export interface MetaInformation {
  source: string;
  lastUpdate: string;
}

export interface ResponseService<T> {
  status_code?: number;
  message: string;
  data: T;
  error?: string;
  user_message?: string;
}

export interface ResponseDataList<T> {
  items: Array<T>
  total_items: number
  total_pages: number
  page: number
  limit: number
  has_next_page: boolean
  has_previous_page: boolean
}

export type AxiosErrorResponse = AxiosError<ResponseService<any>>;

export interface ParamsDataPagination {
  page: number;
  limit: number;
  search?: string;
}
