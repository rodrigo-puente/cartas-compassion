export const calculateLength = (e) => {
  document.getElementById(`${e.target.id}-min`).innerHTML = e.target.value.length;
  document.getElementById(`${e.target.id}-max`).innerHTML = e.target.value.length;
}