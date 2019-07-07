import React from "react";
import styled from "@emotion/styled/macro";
import css from "@emotion/css/macro";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0.5rem;
`;

const imageStyles = css`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: grey;
`;

const Image = styled.img`
  ${imageStyles};
  object-fit: cover;
`;

const Placeholder = styled.div`
  ${imageStyles};
`;

const Avatar = ({ user }) => (
  <Container>
    {user && user.avatar_url ? (
      <Image src={user && user.avatar_url} />
    ) : (
      <Placeholder />
    )}
    <div>
      <div>{user && user.user_metadata.full_name}</div>
      <div>{user && user.email}</div>
    </div>
  </Container>
);

export default Avatar;
