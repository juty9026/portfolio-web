/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  wrap: css`
    display: flex;
    margin: 5vh 0 5vh 0;
    padding: 5vh 5vw 5vh 5vw;
  `,
  itemContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  title: css`
    text-align: center;
    font-size: 2rem;
    color: white;
  `,
  textContainer: css`
    padding: 4vh 0 0 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  text: css`
    text-align: center;
    font-size: 1.5rem;
    color: white;
  `,
};

interface Props {
  data: {
    title: string;
    list: string[];
  }[];
}

const TableView: React.FC<Props> = ({ data }) => {
  return (
    <div css={styles.wrap}>
      {data.map((item) => (
        <div key={item.title} css={styles.itemContainer}>
          <span css={styles.title}>{item.title}</span>
          <div css={styles.textContainer}>
            {item.list.map((listItem) => (
              <span key={listItem} css={styles.text}>
                {listItem}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableView;
