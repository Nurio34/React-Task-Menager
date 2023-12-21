import Button from "./Button"

const Header = ({btnText, colors, onClick}) => {

  return (
    <header className={"flex justify-between items-center border-b-2 border-black pb-4"}>
        <h1>Task Menager</h1>
        <Button 
            text={btnText} 
            colors={colors}
            onClick={onClick}
        />
    </header>
  )
}

export default Header