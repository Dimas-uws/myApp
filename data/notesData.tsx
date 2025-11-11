import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    image: require("@/assets/images/content1.png"),
    title: "Belajar Mobile App",
    description: "Belajar Membuat Aplikasi mobile app",
    date: "29 Oktober 2025",
  },
  {
    id: 2,
    image: require("@/assets/images/content2.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "30 Oktober 2025",
  },
  {
    id: 3,
    image: require("@/assets/images/content3.png"),
    title: "Belajar Mobile App",
    description: "Belajar Membuat Aplikasi mobile app",
    date: "11 November 2025",
  },
  {
    id: 4,
    image: require("@/assets/images/content4.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "17 November 2025",
  },
  {
    id: 5,
    image: require("@/assets/images/content4.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "17 November 2025",
  },
  {
    id: 6,
    image: require("@/assets/images/content4.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "17 November 2025",
  },
  {
    id: 7,
    image: require("@/assets/images/content4.png"),
    title: "Belajar backend",
    description: "Belajar membuat restful api",
    date: "17 November 2025",
  },
];

type Note = {
  id: number;
  image: ImageSourcePropType | { uri: string };
  title: string;
  description: string;
  date: string;
};