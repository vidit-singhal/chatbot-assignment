import { createChatBotMessage   } from "react-chatbot-kit";
import GotIt from "../widget/GotIt";
import AgeSelect from "../widget/AgeSelect";
import Countdown from "../widget/countdown";


const Config = {
  botName : "bot",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system!`,{widget : 'gotit'})],
  widgets: [
    {
      widgetName: 'gotit',
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: 'ageselect',
      widgetFunc: (props) => <AgeSelect {...props} />,
    },
    {
      widgetName: 'countdown',
      widgetFunc: (props) => <Countdown {...props} />,
    },
  ]
}

export default Config