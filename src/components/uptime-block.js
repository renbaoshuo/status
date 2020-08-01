import React, { useMemo } from 'react';
import { formatDuration, fixed } from '../utils/helper';

const UptimeBlock = (props) => {

  const { data } = props;
  const { status, text } = useMemo(() => {
    let status = '';
    let text = `${data.date.format('YYYY-MM-DD')}:`;
    if (data.uptime >= 100) {
      status = 'ok';
      text += ` Availability rate of ${fixed(data.uptime)}%`;
    }
    else if (data.uptime <= 0 && data.down.times === 0) {
      status = 'none';
      text += ' No data';
    }
    else {
      status = 'down';
      if (data.down.times === 1) { text += ` ${data.down.times} failure`; } 
      else { text += ` ${data.down.times} failures`; }
      text += `, total ${formatDuration(data.down.duration)}, and availability rate of ${fixed(data.uptime)}%`;
    }
    return { status, text };
  }, [data]);

  return (
    <i className={status} data-tip={text}></i>
  );
}

export default UptimeBlock;