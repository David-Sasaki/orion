import { FC } from "react";

interface PlayerProps {
  id: string;
}

const generateColor = (id: string) => {
  return id === "A" ? "bg-red-500" : "bg-blue-500";
};

export const Player: FC<PlayerProps> = ({ id }) => {
  const styleClassName = `size-10 rounded-full flex justify-center items-center text-white text-2xl font-bold ${generateColor(
    id
  )}`;

  return <div className={styleClassName}>{id}</div>;
};
