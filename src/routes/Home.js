import React from "react";
import styled from "@emotion/styled/macro";
import Calendar from "../components/Calendar";
import Feedback from "../components/Feedback";

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`;

function Home() {
  const [ratings, setRatings] = React.useState(() => {
    const state = JSON.parse(window.localStorage.getItem("shitty-ratings"));
    return state && state.ratings ? state.ratings : {};
  });

  React.useEffect(() => {
    window.localStorage.setItem("shitty-ratings", JSON.stringify({ ratings }));
  }, [ratings]);

  function setRating({ rating, selectedDate }) {
    setRatings(r => ({ ...r, [selectedDate]: { rating } }));
  }

  const today = new Date(
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    )
  );

  console.log(ratings);

  return (
    <Layout>
      <Calendar today={today} ratings={ratings} setRating={setRating} />
      <Feedback today={today} ratings={ratings} />
    </Layout>
  );
}

export default Home;
