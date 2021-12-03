/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const styles = {
  wrap: css`
    display: flex;
    padding: 2vh 5vw 2vh 5vw;
  `,
  itemContainer: css`
    flex: 1;
    display: flex;
    flex-direction: column;
  `,
  title: css`
    text-align: center;
    font-size: 1.8rem;
  `,
  plain: css`
    text-align: center;
    font-size: 1.2rem;
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
          {item.list.map((listItem) => (
            <span key={listItem} css={styles.plain}>
              {listItem}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableView;
