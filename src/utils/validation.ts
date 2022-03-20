export const buildValidateText = (length: number) => {
  return (value: string) => {
    return value.length > length;
  }
}

export const buildValidateEmail = () => {
  return (value: string) => {
    const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      
    return regexp.test(value);
  }
}