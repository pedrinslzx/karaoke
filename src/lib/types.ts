import { NumberLiteralType } from "typescript";

export interface MusicTypes {
  id: number;
  name: string;
  level: 'easy' | 'medium' | 'hard';
  author: string;
  lyrics: string[];
}
