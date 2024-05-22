export const validateName = (name) => {
  const regex = /^\S{4,8}$/

  return regex.test(name)
}

export const validateNameMessage =
  'The name must be between 4 and 8 characters without spaces.'
