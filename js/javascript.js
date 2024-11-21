AOS.init({
  duration: 1000,
  once: true
});

// Tema oscuro/claro
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
      htmlElement.setAttribute('data-bs-theme', 'light');
      icon.classList.remove('bi-moon-fill');
      icon.classList.add('bi-sun-fill');
  } else {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      icon.classList.remove('bi-sun-fill');
      icon.classList.add('bi-moon-fill');
  }
});

// Formulario de reserva
document.getElementById('reservationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Recoger los datos del formulario
  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      checkIn: document.getElementById('checkIn').value,
      checkOut: document.getElementById('checkOut').value,
      roomType: document.getElementById('roomType').value,
      guests: document.getElementById('guests').value,
      specialRequests: document.getElementById('specialRequests').value
  };

  // Aquí normalmente enviarías los datos a un servidor
  // Por ahora, solo mostraremos un mensaje de confirmación
  console.log('Datos de la reserva:', formData);
  alert('¡Gracias por su reserva! Nos pondremos en contacto con usted pronto para confirmar los detalles.');

  // Limpiar el formulario
  this.reset();
});

// Validación de fechas
document.getElementById('checkIn').addEventListener('change', function() {
  document.getElementById('checkOut').min = this.value;
});

document.getElementById('checkOut').addEventListener('change', function() {
  document.getElementById('checkIn').max = this.value;
});