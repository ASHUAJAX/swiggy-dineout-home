import './SwiggyButton.scss';

interface swiggyButtonProps {
  txt: string
}

function SwiggyButton({ txt }: swiggyButtonProps) {
  return (
    <button className='swiggyButton'>{txt}</button>
  )
}

export default SwiggyButton;