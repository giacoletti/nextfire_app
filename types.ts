import { Timestamp } from "@firebase/firestore-types/index";

export interface UserContextType {
  user?: User;
  username?: Username;
}

export interface User {
  displayName: string;
  photoURL: string;
  username: string;
}

export interface Username {
  uid: string;
}

export interface Post {
  content: string;
  createdAt: Timestamp;
  heartCount: number;
  published: boolean;
  slug: string;
  title: string;
  uid: string;
  updatedAt: Timestamp;
  username: string;
}
