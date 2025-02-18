import { useState, useEffect } from 'react';
import Icons from '../../Icons';
import s from './MonthSelector.module.css';
import { MONTHS } from '../../utils/months';
import { useDispatch } from 'react-redux';
import {
  changeReportMonth,
  changeReportYear,
} from '../../redux/reports/reportsSlice';

const MonthSelector = () => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeReportYear(year));
    dispatch(changeReportMonth(month + 1));
  }, [dispatch, month, year]);

  function previousMonth() {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);

      dispatch(changeReportYear(year - 1));
      dispatch(changeReportMonth('12'));
    } else {
      setMonth(month - 1);

      dispatch(changeReportMonth(month - 1));
    }
  }

  function nextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);

      dispatch(changeReportYear(String(year + 1)));
      dispatch(changeReportMonth('1'));
    } else {
      setMonth(month + 1);

      dispatch(changeReportMonth(String(month + 1)));
    }
  }

  return (
    <div className={s.selector_container}>
      <p className={s.selector_title}>Текущий период:</p>
      <div className={s.selector_line}>
        <div className={s.href} onClick={previousMonth}>
          <Icons
            name="before"
            color="#FF751D"
            width="7"
            height="12"
            className={s.icon}
          />
        </div>

        <p className={s.month}>{MONTHS[month]}</p>
        <p className={s.year}>{year}</p>

        <div className={s.href} onClick={nextMonth}>
          <Icons
            name="after"
            color="#FF751D"
            width="7"
            height="12"
            className={s.icon}
          />
        </div>
      </div>
    </div>
  );
};

export { MonthSelector };
