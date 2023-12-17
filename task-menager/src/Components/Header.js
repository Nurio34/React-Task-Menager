import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {

  const onClick = () => {
    console.log("ok");
  }

  return (
    <header className=" flex justify-between items-start h-32">
      <h1 style={h1Style}>{title}</h1>
      <Button text="Add" colors="bg-black text-white" onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

Header.propTypes = {
  title : PropTypes.string.isRequired
}

const h1Style = {
  fontSize:"2rem", fontWeight:"900"
}
export default Header