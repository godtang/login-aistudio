
export interface VideoCourse {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
