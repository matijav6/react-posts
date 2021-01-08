import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  max-width: 450px;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  height: 100%;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  max-width: 65%;
`;

export const Text = styled.p`
  line-height: 25px;
  color: #6c757d;
`;

export const TotalComments = styled.p`
  color: #565656;
  position: absolute;
  bottom: 0;
  left: 0;
  border-top: 1px solid gray;
  width: 100%;
  margin: 0;
  padding: 0 10px;
`;

export const ViewPost = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #007cfb;
  border-color: #007cfb;
  display: block;
  font-weight: 200;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: absolute;
  right: 5px;
  top: 5px;
  max-width: 30%;

  &:hover {
    color: #fff;
    background-color: #95c8ff;
    border-color: #95c8ff;
  }

  &:focus, &:active {
    border: transparent;
    outline: transparent;
  }
`;

export const User = styled.p`
  color: #565656;
`;
