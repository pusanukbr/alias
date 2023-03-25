export const Rules = {
  name: {
    required: 'form.required.error',
    minLength: { value: 4, message: 'form.minLength.error' }
  },
  color: {
    required: 'form.required.error'
  },
  password: {
    required: 'form.required.error',
    minLength: { value: 4, message: 'form.minLength.error' },
    maxLength: { value: 16, message: 'form.maxLength.error' }
  },
  email: {
    required: 'form.required.error',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'form.email.error'
    }
  },
  connect: {
    minLength: { value: 8, message: 'room.minLength.error' },
    maxLength: { value: 15, message: 'room.maxength.error' }
  }
};
