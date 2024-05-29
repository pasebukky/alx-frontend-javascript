export default function createIteratorObject(report) {
  let result = [];
  for (const name of Object.values(report.allEmployees)) {
    result = [...result, ...name];
  }
  return result;
}
