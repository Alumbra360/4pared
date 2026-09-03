// Completar con los canales oficiales de 4PARED antes de abrir la captación de consultas.
export const contact = {
  email: '',
  whatsapp: '', // Número internacional sin signos, espacios ni ceros de prefijo.
}
export const contactLink = contact.whatsapp
  ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hola, quiero conversar sobre un proyecto para mi negocio.')}`
  : contact.email ? `mailto:${contact.email}` : ''
