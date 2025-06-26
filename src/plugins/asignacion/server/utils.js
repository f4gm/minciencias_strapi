const verifyIdentifier = (identifier) => {
  if (
    typeof identifier !== "undefined" &&
    typeof identifier === "number" &&
    Number.isInteger(identifier) &&
    identifier > 0
  ) {
    return true;
  } else {
    return false;
  }
};

const getCurrentTime = () => {
  const now = new Date();

  const pad = (num, size = 2) => String(num).padStart(size, '0');
  const year = now.getFullYear();
  const month = pad(now.getMonth() + 1); // Los meses van de 0 a 11
  const day = pad(now.getDate());
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  const milliseconds = pad(now.getMilliseconds(), 3);

  return `[${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}]`;
}

module.exports = {
  verifyIdentifier,
  getCurrentTime
}