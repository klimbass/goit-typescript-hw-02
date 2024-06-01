type Props = {
  message: string;
} 

export default function ErrorMessage({ message}: Props) {
  return <h3>{message}</h3>;
}
