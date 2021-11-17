import moment from 'moment';
import { selectFile, selectDir, sendAsync, sendInsert, generatePDF } from '../message-control/renderer';
import { CARD_STATES, CARDS_SIN_COMENZAR } from '../../src/lib/constants';

export const handleInputChange = (form, setForm) => (event) => {
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

export const handleImg = (setValue, id) => async (e) => {
  const result = await selectFile();
  if (!result.canceled && result.filePaths.length) setValue(id, result.filePaths[0]);
}

export const cleanImg = (setValue, id) => async (e) => {
  setValue(id, "");
}

export const getData = async (id, config, setCarta, setValue) => {
  const result = await sendAsync(`SELECT * FROM cartas WHERE id = ${id}`);
  setCarta(result[0]);

  if(result.length && result[0].estado !== CARD_STATES[CARDS_SIN_COMENZAR]) {
    const form = JSON.parse(result[0].formulario);

    const skipKeys = ["fecha", "imgs", "route"];
    Object.keys(form).forEach((key) => {
      if (skipKeys.includes(key)) return;
      try {
        const val = form[key];
        if(config[key].checkbox) {
          document.getElementById(key).checked = val;
        } else if (config[key].radio || config[key].special_radio) {
          document.getElementById(val).checked = true;
        } else if (config[key].image) {
          return;
        } else {
          document.getElementById(key).value = val;
          document.getElementById(`${key}-max`).innerHTML = val.length || 0;
        }

        setValue(key, val);
      } catch(err) {
        console.log("Propiedad no existe: ", key);
      }
    })
  }
}

export const submitForm = (id, templateID, carta, form, route, imgs, setDisabled, copyFields = []) => {
  if (!route.length) {
    alert("Debes elegir dónde quieres guardar el archivo");
    return;
  }

  const data = { ...form, route, imgs, fecha: moment().format('DD-MMM-YYYY') };

  let fieldsToCopy = {};
  copyFields.forEach((i, idx) => {
    fieldsToCopy[`${i}-copy`] = data[i];
  });

  sendInsert([JSON.stringify(data), id]).then((response) => {
    console.log("SEND INSERT RESPONSE: ", response);
    return generatePDF(carta, { ...data, ...fieldsToCopy }, templateID);
  }).then((response) => {
    console.log("GENERATE PDF RESPONSE: ", response);
    response ? alert("Formulario guardado con éxito") : alert("Hubo un error guardando el formulario...");
    setDisabled(false);
  }).catch((err) => {
    console.dir("HANDLE SUBMIT ERROR: ", err);
    setDisabled(false);
  });
}

export const submitFormEspecial = (templateID, form, route, imgs, setDisabled, copyFields = []) => {
  if (!route.length) {
    alert("Debes elegir dónde quieres guardar el archivo");
    return;
  }

  const data = { ...form, route, imgs, fecha: moment().format('DD-MMM-YYYY') };

  let fieldsToCopy = {};
  copyFields.forEach((i, idx) => {
    fieldsToCopy[`${i}-copy`] = data[i];
  });

  generatePDF({ id_plantilla: templateID, skip_header: true }, { ...data, ...fieldsToCopy }, templateID).then((response) => {
    console.log("GENERATE PDF RESPONSE: ", response);
    response ? alert("Formulario guardado con éxito") : alert("Hubo un error guardando el formulario...");
    setDisabled(false);
  }).catch((err) => {
    console.dir("HANDLE SUBMIT ERROR: ", err);
    setDisabled(false);
  });
}