import styled from 'styled-components';

const Header = styled.h1`
  padding: 0.3rem 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  margin: 0;
  width: 100%;
`;

const Wrapper = styled.div`
  margin-top: 0.5rem;
  width: 1024px;
  height: 100%;
  border: 1px solid rgba(0,0,0,0.1);
  display: flex;
`;

export {
  Wrapper,
  Header,
}

