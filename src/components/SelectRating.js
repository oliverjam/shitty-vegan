import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import { ArrowContainer } from 'react-tiny-popover';

const Form = styled.form`
  padding: 1rem;
  background-color: #fff;
`;

class SelectRating extends Component {
  render() {
    const { setRating, position, targetRect, popoverRect } = this.props;
    return (
      <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
        position={position}
        targetRect={targetRect}
        popoverRect={popoverRect}
        arrowColor={'white'}
        arrowSize={10}
        arrowStyle={{ opacity: 1 }}
      >
        <Form>
          <div>
            <label htmlFor="meat">Meat</label>
            <input
              onChange={setRating}
              type="radio"
              id="meat"
              name="rating"
              value={1}
            />
          </div>
          <div>
            <label htmlFor="vegetarian">Vegetarian</label>
            <input
              onChange={setRating}
              type="radio"
              id="vegetarian"
              name="rating"
              value={2}
            />
          </div>
          <div>
            <label htmlFor="ovo-vegan">Ovo-vegan</label>
            <input
              onChange={setRating}
              type="radio"
              id="ovo-vegan"
              name="rating"
              value={3}
            />
          </div>
          <div>
            <label htmlFor="vegan">Vegan</label>
            <input
              onChange={setRating}
              type="radio"
              id="vegan"
              name="rating"
              value={4}
            />
          </div>
        </Form>
      </ArrowContainer>
    );
  }
}

export default SelectRating;
