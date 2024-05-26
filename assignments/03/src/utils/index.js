export const formatDate = (timeStamp, variant) => {
  const date = new Date(timeStamp);

  const isAfterNoon = date.getHours() >= 12;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours() - (isAfterNoon ? 12 : 0);
  const minutes = date.getMinutes().toString().padStart(2, "0");

  if (variant === "long") {
    return `${year}년 ${month}월 ${day}일, ${
      isAfterNoon ? "오후" : "오전"
    } ${hours}:${minutes}`;
  } else if (variant === "short") {
    return `${isAfterNoon ? "오후" : "오전"} ${hours}:${minutes}`;
  }
};
