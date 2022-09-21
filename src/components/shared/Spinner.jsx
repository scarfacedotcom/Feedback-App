import spinner from '../assets/spinner.gif'

function Spinner() {
  return ( 
    <img 
      src={spinner} 
      alt="Loading..." 
      style={{ margin: 'auto', display: 'block', width: '100px' }} /> )
}

export default Spinner
