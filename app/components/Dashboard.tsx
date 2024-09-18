import React from 'react';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { increment, decrement, incrementbytwo } from '@/lib/features/counter';
export default function Dashboard() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementbytwo())}>Increment by 2</button>
    </div>
  );
}
