import Alumni from "../../assets/Alumni.jpg";

export const portfolio = [
  {
    id: 1,
    img: Alumni,
    title: "JULAICA WELLA R.",
    details: [
      {
        title: "Details: ",
        desc: "Graduation is a significant milestone in a person's life, marking the culmination of years of hard work, dedication, and personal growth. It symbolizes the completion of an educational journey, whether it's high school, college, or any other form of formal education. Graduation ceremonies are typically filled with a mix of emotions, including a sense of accomplishment, excitement for the future, and a touch of nostalgia for the experiences and friendships forged along the way. One of the most cherished aspects of graduation is the sense of achievement it brings. It's a moment where all the late nights, exams, papers, and sacrifices suddenly make sense, as you stand on the threshold of a new beginning. Whether it's donning a cap and gown or receiving a diploma, the act of graduation is a powerful symbol of one's capacity for growth, learning, and resilience. It's a testament to the effort and determination that have gone into reaching this point. Graduation also represents a bridge to the future. As graduates walk across the stage, they are not just leaving their academic institution but also stepping into a world of possibilities. The ceremony is a launching pad for careers, adventures, and new experiences. It's a time when the future is wide open, and the world is full of opportunities waiting to be seized. Graduates often feel a mix of excitement, uncertainty, and hope as they contemplate the path ahead, making it a truly transformative moment in their lives.",
      },
    ],
  },
];

export function addPortfolioItem(newItem) {
  portfolio.push(newItem);
}
