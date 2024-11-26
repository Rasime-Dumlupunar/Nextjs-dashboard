type Props = {
  item: {
      label: string;
      name: string;
      type?: string;
      
  };
  value?: string;
};

const Input = ({item, value}: Props) => { 
return (
  <div className="flex flex-col gap-1">
    <label htmlFor={item.name} className="font-semibold text-xl"> {item.label}</label>
    <input id={item.name} type={item.type} defaultValue={value || ""} name={item.name} className="shadow rounded-lg py-1 px-3 text-lg"/>
    </div>
    )
  };
export default Input;
