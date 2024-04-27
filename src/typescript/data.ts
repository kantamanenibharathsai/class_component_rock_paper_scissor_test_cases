export interface LeftImage {
  leftImageId: number;
  leftImage: string;
}

export interface RightImage {
  rightImageId: number;
  rightImage: string;
}

export interface FrontImage {
  frontImageId: number;
  frontImage: string;
}

export const leftImages: LeftImage[] = [
  {
    leftImageId: 1,
    leftImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Frock2.png&w=256&q=100",
  },
  {
    leftImageId: 2,
    leftImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper2.png&w=256&q=100",
  },
  {
    leftImageId: 3,
    leftImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors2.png&w=256&q=100",
  },
];

export const rightImages: RightImage[] = [
  {
    rightImageId: 1,
    rightImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Frock1.png&w=256&q=100",
  },
  {
    rightImageId: 2,
    rightImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper1.png&w=256&q=100",
  },
  {
    rightImageId: 3,
    rightImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors1.png&w=256&q=100",
  },
];

export const frontImages: FrontImage[] = [
  {
    frontImageId: 1,
    frontImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Frock-user.png&w=128&q=75",
  },
  {
    frontImageId: 2,
    frontImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fpaper-user.png&w=128&q=75",
  },
  {
    frontImageId: 3,
    frontImage:
      "https://rock-paper-scissor-jade-pi.vercel.app/_next/image?url=%2Fimages%2Fscissors-user.png&w=128&q=75",
  },
];
