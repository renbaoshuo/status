export const formatDuration = (seconds) => {
  let s = parseInt(seconds);
  let m = 0;
  let h = 0;
  if (s >= 60) {
    m = parseInt(s / 60);
    s = parseInt(s % 60);
    if (m >= 60) {
      h = parseInt(m / 60);
      m = parseInt(m % 60);
    }
  }
  let text = "";

  if (s === 1) { 
    text = `${s} second`; 
  } else { 
    text = `${s} seconds`; 
  }

  if (m > 0) {
    // text = `${m}m${text}`;
    if (m === 1) {
      text = `${m} minute and ${text}`;
    } else {
      text = `${m} minutes and ${text}`;
    }
  }

  if(h > 0) {
    // text = `${h}h${text}`;
    if (h === 1) {
      text = `${h} hour and ${text}`;
    } else {
      text = `${h} hours and ${text}`;
    }
  }

  return text;
}

export const fixed = (value) => {
  return (Math.floor(value * 100) / 100).toString();
}