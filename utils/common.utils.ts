export const getVarDataType = (data: any) => {
  const reg = /\[object |\]/g;
  return Object.prototype.toString.call(data).replace(reg, "").toLowerCase();
};

export const classNamesGen = (entry: any) => {
  let classNames = "";

  if (getVarDataType(entry) == "array") {
    for (const cName of entry) {
      if (getVarDataType(cName) == "string") classNames += ` ${cName}`;
      else if (getVarDataType(cName) == "object")
        classNames += ` ${classNamesGen(cName)}`;
    }
  } else if (getVarDataType(entry) == "object") {
    for (const [key, value] of Object.entries(entry)) {
      if (!!value) classNames += ` ${key}`;
    }
  }
  return classNames.trim();
};
