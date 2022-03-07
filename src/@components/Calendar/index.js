import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: relative;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 20px;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MonthTitle = styled.span`
  position: relative;
  font-size: 16px;
  font-weight: bold;
`;

const Line = styled.hr`
  border: 1px solid #eee;
  margin: 10px 0px;
`;

const CalendarTable = styled.table`
  position: relative;
  width: 100%;
`;

const Calendar = () => {
  return (
    <Root>
      <Header>
        <MonthTitle>بهمن</MonthTitle>
      </Header>
      <Line />
      <div>
        <CalendarTable>
          <thead>
            <tr>
              <th>ش</th>
              <th>ی</th>
              <th>د</th>
              <th>س</th>
              <th>چ</th>
              <th>پ</th>
              <th>ج</th>
            </tr>
          </thead>
          <tbody></tbody>
        </CalendarTable>
      </div>
    </Root>
  );
};

export default Calendar;
