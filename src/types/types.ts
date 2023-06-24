export interface User {
  _id: string;
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: string;
  checkedBadge: string;
  postNum: number;
  tumblerNum: number;
  transportNum: number;
  basketNum: number;
  refreshToken: string;
  badges: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BoastPost {
  _id: string;
  id: string;
  name: string;
  profileImage: string;
  checkedBadge: string;
  tag: string[];
  imageUrl: string;
  title: string;
  content: string;
  shareStatus: boolean;
  likeIds: likeIds[];
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface QuestionPost {
  _id: string;
  id: string;
  name: string;
  profileImage: string;
  checkedBadge: string;
  title: string;
  content: string;
  likeIds: likeIds[];
  commentIds: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  numComments: number;
  numLikes: number;
}

export interface DeletePost {
  message: string;
  question: QuestionPost;
}

export interface CommentPath {
  postId: string;
  commentId: string;
}

export interface CommentPost {
  comment: string;
}

export interface LastComment {
  _id: string;
  title: string;
  comment: string;
}
export interface likeIds {
  _id: string;
  name: string;
}
export interface Comment {
  _id: string;
  postId: string;
  id: string;
  name: string;
  profileImage: string;
  checkedBadge: string;
  comment: string;
  likeIds: likeIds[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  numLikes: number;
}

export interface CreateQuestionPost {
  _id?: string;
  title: string;
  content: string;
}

export type TFormData = {
  tag: string[];
  file: File | null;
  title: string;
  content: string;
  shareStatus: boolean;
};

export interface CheckboxesState {
  [key: string]: boolean;
}

export type EachDayDataApiType = {
  _id: string;
  id: string;
  tag: string[];
  imageUrl: string;
  title: string;
  content: string;
  shareStatus: boolean;
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
