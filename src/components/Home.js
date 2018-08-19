import React, { Component } from 'react';
import { Layout } from './styled/Layout';
import Calendar from './Calendar';
import Feedback from './Feedback';
// import { Layout } from './components/styled/Layout';

class Home extends Component {
  state = {
    ratings: {},
    today: new Date(
      Date.UTC(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      )
    ).getTime(),
  };

  componentDidMount() {
    const state = JSON.parse(window.localStorage.getItem('shitty-ratings'));
    if (state) return this.setState(state);
  }

  setRating = ({ rating, selectedDate }) => {
    console.log({ rating, selectedDate });
    const { ratings } = this.state;
    const newRatings = { ...ratings, [selectedDate]: { rating } };
    this.setState({ ratings: newRatings }, () => {
      window.localStorage.setItem('shitty-ratings', JSON.stringify(this.state));
    });
  };

  render() {
    const { today, ratings } = this.state;
    // const { user } = this.props;
    return (
      <Layout>
        <Calendar
          today={today}
          ratings={ratings}
          setRating={this.setRating}
          // setLocation={}
        />
        <Feedback today={today} ratings={ratings} />
        {/* <button
          onClick={() =>
            this.getHeaders().then(headers =>
              fetch('/.netlify/functions/hello', {
                headers,
                method: 'POST',
                body: { test: 'test' },
              })
                .then(res => res.json())
                .then(console.log)
            )
          }
        >
          Hello
        </button> */}
      </Layout>
    );
  }
}

export default Home;
