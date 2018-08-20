import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import Calendar from '../components/Calendar';
import Feedback from '../components/Feedback';

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

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
