import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  top: calc(100% - 50%);

  left: 20px;

  svg {
    width: 30px;
    height: 30px;

    margin-bottom: 15px;

    :last-child {
      margin: 0;
    }
  }
`
