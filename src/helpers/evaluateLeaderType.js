// const lider = [
//     { value: 1, label: "Orientado a tareas" },
//     { value: 2, label: "Socioemocional" },
//     { value: 3, label: "Ideal" },
//     { value: 4, label: "Dominante" },
//     { value: 5, label: "Sin liderazgo" },
//     { value: 6, label: "Poco liderazgo" },
//   ];

const getMaxValue = (percentages) => {
  return Object.entries(percentages).reduce((a, b) =>
    a[1].y > b[1].y ? a : b
  )[1].name;
};

const evaluateLeaderType = (emotions, agreeability, competence, dominance) => {
  // Obtener el valor más repetido en cada sección de la encuesta de percepción
  const maxAgree = getMaxValue(agreeability);
  const maxComp = getMaxValue(competence);
  const maxDom = getMaxValue(dominance);

  if (emotions !== undefined) {
    // Variables medidas en la sesion
    var eeg, prosody, facial, nlp;
    for (var element of emotions) {
      switch (element.variable) {
        case "EEG":
          eeg = element.emotion;
          break;
        case "ProsodyEmotion":
          prosody = element.emotion;
          break;
        case "FaceEmotion":
          facial = element.emotion;
          break;
        case "SpeechRecognition":
          nlp = element.emotion;
          break;
        default:
          break;
      }
    }

    // Evaluar las variables según el modelo
    var result = [];
    for (var i = 0; i < emotions[0].emotion.length; i += 1) {
      // Lider orientado a tareas
      if (
        eeg[i] === 1 &&
        prosody[i] === 0 &&
        facial[i] === 0 &&
        nlp[i] === 1 &&
        maxComp === "Positivo" &&
        (maxDom === "Neutro" || maxDom === "Negativo") &&
        maxAgree === "Neutro"
      ) {
        result.push(1);
      }
      // Lider socioemocional
      else if (
        eeg[i] === 1 &&
        prosody[i] === 1 &&
        facial[i] === 0 &&
        nlp[i] === 1 &&
        (maxComp === "Neutro" || maxComp === "Negativo") &&
        maxDom === "Negativo" &&
        maxAgree === "Positivo"
      ) {
        result.push(2);
      }
      // Lider ideal
      else if (
        eeg[i] === 1 &&
        prosody[i] === 1 &&
        facial[i] === 1 &&
        nlp[i] === 1 &&
        maxComp === "Positivo" &&
        maxDom === "Negativo" &&
        maxAgree === "Positivo"
      ) {
        result.push(3);
      }
      // Lider dominante
      else if (
        eeg[i] === 1 &&
        prosody[i] === -1 &&
        facial[i] === -1 &&
        nlp[i] === -1 &&
        maxComp === "Negativo" &&
        maxDom === "Positivo" &&
        maxAgree === "Negativo"
      ) {
        result.push(4);
      }
      // Sin liderazgo
      else if (
        eeg[i] === -1 &&
        prosody[i] === 0 &&
        facial[i] === 0 &&
        (nlp[i] === -1 || nlp[i] === 1) &&
        maxComp === "Negativo" &&
        maxDom === "Negativo" &&
        maxAgree === "Neutro"
      ) {
        result.push(5);
      }
      // Poco liderazgo
      else if (
        eeg[i] === 0 &&
        prosody[i] === 1 &&
        (facial[i] === 0 || facial[i] === 1) &&
        nlp[i] === 1 &&
        maxComp === "Positivo" &&
        maxDom === "Negativo" &&
        maxAgree === "Neutro"
      ) {
        result.push(6);
      } else {
        result.push(0);
      }
    }
    return result;
  }
};

export default evaluateLeaderType;
