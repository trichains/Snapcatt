const validateInput = (inputs, showToast) => {
  const lowerCaseUsername = inputs.username.toLowerCase();
  // Verificar se há espaços em branco no username
  if (lowerCaseUsername && /\s/.test(lowerCaseUsername)) {
    showToast(
      'Erro',
      'O nome de usuário não pode conter espaços em branco.',
      'error'
    );
    return false;
  }

  // Verificar se o email é válido
  const lowerCaseEmail = inputs.email.toLowerCase();
  const emailRegex =
    /^(?=.*[A-Za-z0-9._%+-]+@(hotmail|outlook|gmail)\.(com|com\.br|net)$)/;
  if (!emailRegex.test(lowerCaseEmail)) {
    showToast(
      'Erro',
      'Por favor, insira um email válido.',
      'error'
    );
    return false;
  }

  return true;
};

export default validateInput;
