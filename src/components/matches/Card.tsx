/** @format */

import React from "react";

interface CardProps {
  time: string;
  status: string;
  flagTop: string;
  flagTopName: string;
  flagBot: string;
  flagBotName: string;
  resultTop: number;
  resultBot: number;
  persen: number | null;
}

const Card = ({
  flagBot,
  flagBotName,
  flagTop,
  flagTopName,
  persen,
  resultBot,
  resultTop,
  status,
  time,
}: CardProps) => {
  return <div>Card</div>;
};

export default Card;
