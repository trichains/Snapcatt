export const timeAgo = (timestamp) => {
  const now = Date.now();
  const secondsAgo = Math.floor((now - timestamp) / 1000);

  if (secondsAgo < 60) {
    return `${secondsAgo}s atrás`;
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo}m atrás`;
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return `${hoursAgo}h atrás`;
  } else if (secondsAgo < 604800) {
    const daysAgo = Math.floor(secondsAgo / 86400);
    return `${daysAgo}d atrás`;
  } else {
    const weeksAgo = Math.floor(secondsAgo / 604800); // 7 days in seconds
    return `${weeksAgo}w atrás`;
  }
};
