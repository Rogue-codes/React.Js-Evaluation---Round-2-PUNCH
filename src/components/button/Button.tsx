
interface IButton{
    className: string;
    text:string;

}
export default function Button({className,text}:IButton) {
  return (
    <button className={className}>
        {text}
    </button>
  )
}
