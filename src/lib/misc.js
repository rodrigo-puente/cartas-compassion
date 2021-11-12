export const calculateLength = (e) => {
  console.log(`${e.target.id}-max`);
  console.log(e.target.value.length);
  document.getElementById(`${e.target.id}-max`).innerHTML = e.target.value.length
}