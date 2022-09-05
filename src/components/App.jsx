import { useState } from 'react';
import './App.css';
import { Statistics } from './Statistics/statistics';
import { Notification } from './Notification/notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/section';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);

  const handleClickBtn = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  return (
    <div className="container">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          onLeaveFeedback={handleClickBtn}
          options={Object.keys(feedback)}
        />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message={'Feedback no given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}

// export class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// handleClickBtn = event => {
//   const { name } = event.target;
//   this.setState(prevState => {
//     return { [name]: prevState[name] + 1 };
//   });
// };

//   render() {
//     const { good, neutral, bad } = this.state;
// const total = good + neutral + bad;
// const positivePercentage = Math.round((good / total) * 100);
// return (
//   <div className="container">
//     <Section title={'Please leave feedback'}>
//       <FeedbackOptions
//         onLeaveFeedback={this.handleClickBtn}
//         options={Object.keys(this.state)}
//       />
//     </Section>
//     <Section title={'Statistics'}>
//       {total === 0 ? (
//         <Notification message={'Feedback no given'} />
//       ) : (
//         <Statistics
//           good={good}
//           neutral={neutral}
//           bad={bad}
//           total={total}
//           positivePercentage={positivePercentage}
//         />
//       )}
//     </Section>
//   </div>
// );
//   }
// }
