import { selectFile, selectDir } from '../message-control/renderer';

export const handleInputChange = (form, setForm) => (event) => {
  console.log(event.target.type);
  setForm({
    ...form,
    [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
  })
}

export const handleImgsMsg = (idx, imgs, setImgs) => (e) => {
  let newArr = [...imgs];
  newArr[idx].msg = e.target.value;
  setImgs(newArr);
}

export const cleanImgs = (idx, imgs, setImgs) => (e) => {
  let newArr = [...imgs];
  newArr[idx] = {img: "", msg: ""};
  setImgs(newArr);
}

export const handleImgsImg = (idx, imgs, setImgs) => async (e) => {
  let newArr = [...imgs];
  const result = await selectFile();
  if (!result.canceled && result.filePaths.length) {
    newArr[idx].img = result.filePaths[0]
    setImgs(newArr);
  }
}

export const handleDir = (setRoute) => async (e) => {
  const result = await selectDir();
  if (!result.canceled && result.filePaths.length) setRoute(result.filePaths[0]);
}

export const handleImg = (setImg) => async (e) => {
  const result = await selectFile();
  if (!result.canceled && result.filePaths.length) setImg(result.filePaths[0]);
}