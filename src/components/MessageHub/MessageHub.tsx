import React, { useEffect, useMemo, useState } from 'react';
import { Button, Container, Content, Life, Message } from './styles';
import { useTransition } from 'react-spring';
import { X } from 'react-feather';

let id = 0;

export type AddFunction = (msg: string) => void;

interface Item {
  key: number;
  msg: string;
}

interface MessageHubProps {
  config?: {
    tension: number;
    friction: number;
    precision: number;
  };
  timeout?: number;
  children: (add: AddFunction) => void;
}

const MessageHub: React.FC<MessageHubProps> = ({
  config = { tension: 125, friction: 20, precision: 0.1 },
  timeout = 3000,
  children,
}) => {
  const refMap = useMemo(() => new WeakMap(), []);
  const cancelMap = useMemo(() => new WeakMap(), []);
  const [items, setItems] = useState<Item[]>([]);

  const transitions = useTransition(items, {
    from: { opacity: 0, height: 0, life: '100%' },
    keys: (item) => item.key,
    enter: (item) => async (next, cancel) => {
      cancelMap.set(item, cancel);
      await next({ opacity: 1, height: refMap.get(item).offsetHeight });
      await next({ life: '0%' });
    },
    leave: [{ opacity: 0 }, { height: 0 }],
    onRest: (result, ctrl, item) => {
      setItems((state) =>
        state.filter((i) => {
          return i.key !== item.key;
        })
      );
    },
    config: (item, index, phase) => (key) => phase === 'enter' && key === 'life' ? { duration: timeout } : config,
  });

  useEffect(() => {
    children((msg: string) => {
      // eslint-disable-next-line no-plusplus
      setItems((state) => [...state, { key: id++, msg }]);
    });
  }, []);

  return (
    <Container>
      {transitions(({ life, ...style }, item) => (
        <Message style={style}>
          <Content ref={(ref: HTMLDivElement) => ref && refMap.set(item, ref)}>
            <p>{item.msg}</p>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                if (cancelMap.has(item) && life.get() !== '0%') cancelMap.get(item)();
              }}
            >
              <X size={18} />
            </Button>
            <Life style={{ right: life }} />
          </Content>
        </Message>
      ))}
    </Container>
  );
};

export default MessageHub;
