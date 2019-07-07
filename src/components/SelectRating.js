import React, { Component } from 'react';
import styled from '@emotion/styled/macro';
import { ArrowContainer } from 'react-tiny-popover';
import { HiddenInput } from './styled/Form';

const Form = styled.form`
  padding: 1.75rem;
  background-color: #fff;
  border-radius: 1rem;
  & > * + * {
    margin-top: 0.5rem;
  }
  box-shadow: 0 1px 4px hsla(200, 10%, 40%, 0.5);
`;

const RadioLabel = styled.label`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  background-color: hsl(200, 10%, 96%);
  ${HiddenInput}:checked ~ & {
    background-color: ${p => p.theme.ratings[p.rating]};
  }
`;

const Radio = ({ id, value, setRating, rating, ...rest }) => (
  <div>
    <HiddenInput
      onChange={setRating}
      type="radio"
      id={id}
      name="rating"
      value={value}
      defaultChecked={rating === value}
      {...rest}
    />
    <RadioLabel htmlFor={id} rating={value}>
      {id}
    </RadioLabel>
  </div>
);

class SelectRating extends Component {
  render() {
    const {
      date,
      ratings,
      setRating,
      position,
      targetRect,
      popoverRect,
    } = this.props;
    const rating = ratings[date] ? ratings[date].rating : 0;
    return (
      <ArrowContainer
        position={position}
        targetRect={targetRect}
        popoverRect={popoverRect}
        arrowColor={'white'}
        arrowSize={10}
        arrowStyle={{ opacity: 1 }}
      >
        <Form>
          <h3>How'd you go?</h3>
          <Radio onChange={setRating} rating={rating} id="vegan" value={4} />
          <Radio
            onChange={setRating}
            rating={rating}
            id="ovo-vegetarian"
            value={3}
          />
          <Radio
            onChange={setRating}
            rating={rating}
            id="vegetarian"
            value={2}
          />
          <Radio onChange={setRating} rating={rating} id="meat" value={1} />
        </Form>
      </ArrowContainer>
    );
  }
}

export default SelectRating;
