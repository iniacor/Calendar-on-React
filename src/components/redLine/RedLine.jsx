import React, { useEffect, useState } from 'react';

const RedLine = () => {
  const [timeLine, setTimeLine] = useState(new Date().getMinutes());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLine(new Date().getMinutes());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLine]);

  const styles = {
    marginTop: new Date().getHours() * 60 + new Date().getMinutes(),
  };
  return (
    <div className="red-line" style={styles}>
      <div className="ball"></div>
    </div>
  );
};

export default RedLine;
