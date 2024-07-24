export function BarElement(props) {
  return <div className="rounded hover:bg-gray-700 flex py-2.5 px-4 mx-2 cursor-pointer text-sm items-center">
      <div className="pr-2">
          {props.svg}
      </div>
      <div>
          {props.title}
      </div>
  </div>
}