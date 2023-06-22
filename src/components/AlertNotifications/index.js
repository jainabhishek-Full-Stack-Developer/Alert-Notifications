import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <>
    <div className="notificationContainer">
      <h1 className="heading">Alert Notifications</h1>
      <Notification
        heading="Success"
        description="You can access all the files in the folder"
        iconClass="success"
      >
        <AiFillCheckCircle className="icons" />
      </Notification>
      <Notification
        heading="Error"
        description="Sorry, you are not authorized to have access to delete the file"
        iconClass="error"
      >
        <RiErrorWarningFill className="icons" />
      </Notification>
      <Notification
        heading="Warning"
        description="Viewers of this file can see comments and suggestions"
        iconClass="warning"
      >
        <MdWarning className="icons" />
      </Notification>
      <Notification
        heading="Info"
        description="Anyone on the internet can view these files"
        iconClass="info"
      >
        <MdInfo className="icons" />
      </Notification>
    </div>
  </>
)

export default AlertNotifications
