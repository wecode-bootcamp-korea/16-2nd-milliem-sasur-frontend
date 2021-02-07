import React from 'react';
import styled from 'styled-components';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
const perfact = [
  { name: '완독활률 (%)', 확률: 30, pv: 50, amt: 100 },
  { name: '완독 예상 시간(분)', 확률: 20, pv: 30, amt: 100 },
];

const dev = [
  { name: '자기개발(시간)', 시간: 50, pv: 20, amt: 2400 },
  { name: '완료', 시간: 20, pv: 20, amt: 2400 },
];

const BookGraph = (props) => {
  return (
    <BookGraphWrap>
      <h3>
        <span>
          <i class='far fa-address-book'></i>
        </span>
        밀림 완독 지수 (그래프 부분)
      </h3>
      <GraphWrap>
        <AreaChart
          width={450}
          height={300}
          data={perfact}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray='2 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='확률'
            stroke='#8884d8'
            fill='blue'
          />
        </AreaChart>
        <AreaChart
          width={450}
          height={300}
          data={dev}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray='2 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='시간'
            stroke='#8884d8'
            fill='green'
          />
        </AreaChart>
      </GraphWrap>
    </BookGraphWrap>
  );
};

export default BookGraph;

const BookGraphWrap = styled.div`
  padding: 12px 0 12px 20px;
  h3 {
    font-size: 14px;
    span {
      padding-right: 13px;
      svg {
        font-size: 16px;
        color: #191919;
      }
    }
  }
`;

const GraphWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
`;
