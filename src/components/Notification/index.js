import './index.css'
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {heading, description, iconClass, children} = props
  return (
    <>
      <div className="card">
        <div className={`iconContainer ${iconClass}`}>{children}</div>
        <div className="messageContainer">
          <h3 className={`${iconClass}`}>{heading}</h3>
          <p>{description}</p>
        </div>
        <div className="crossContainer">
          <GrFormClose className="crossIcon" />
        </div>
      </div>
    </>
  )
}

export default Notification
