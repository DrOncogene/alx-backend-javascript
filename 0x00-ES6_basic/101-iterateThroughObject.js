export default function iterateThroughObject(reportWithIterator) {
  let employeesString = '';
  for (const name of reportWithIterator) {
    employeesString += `${name} | `;
  }

  return employeesString.slice(0, -3);
}
