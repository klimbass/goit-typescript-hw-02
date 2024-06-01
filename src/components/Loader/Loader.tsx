import { ProgressBar } from "react-loader-spinner";

type LoaderProps = {
  barColor?: string;
  borderColor?: string;
};

export default function Loader({ barColor = "black", borderColor = "black" }: LoaderProps) {
  return <ProgressBar barColor={barColor} borderColor={borderColor} />;
}