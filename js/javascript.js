document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: 'ease-out-quad'
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
});
const translations = {
    es: {
        pageTitle: "HOTELITUS - Tu hogar lejos de casa",
        home: "Inicio",
        rooms: "Habitaciones",
        services: "Servicios",
        facilities: "Instalaciones",
        location: "Ubicación",
        reviews: "Reseñas",
        contact: "Contacto",
        heroTitle: "TU VIDA, TU PROPIA EXPERIENCIA",
        heroSubtitle: "Tu oasis de lujo en el corazón de la naturaleza",
        fiveStarExperience: "Experiencia 5 estrellas",
        uniqueEnvironment: "Entorno natural único",
        personalizedAttention: "Atención personalizada",
        bookNow: "Reserva Ahora",
        ourRooms: "Nuestras Habitaciones",
        luxuryRoom: "Habitación de Lujo",
        luxuryRoomDesc: "Experimenta el máximo confort con vistas impresionantes.",
        executiveSuite: "Suite Ejecutiva",
        executiveSuiteDesc: "Espaciosa y elegante, perfecta para largas estancias.",
        mountainViewRoom: "Habitación Vista Montaña",
        mountainViewRoomDesc: "Despierta con las mejores vistas de la naturaleza.",
        previous: "Anterior",
        next: "Siguiente",
        ourServices: "Nuestros Servicios",
        freeWifi: "Wi-Fi Gratuito",
        freeWifiDesc: "Conexión de alta velocidad en todas las áreas del hotel.",
        gourmetFood: "Comida Gourmet",
        gourmetFoodDesc: "Deléitate con nuestra exquisita gastronomía de clase mundial.",
        infinityPool: "Piscina Infinity",
        infinityPoolDesc: "Relájate en nuestra piscina con vistas panorámicas impresionantes.",
        vrExperience: "VR-Experiencia",
        vrExperienceDesc: "Sumérgete en emocionantes aventuras virtuales sin salir del hotel.",
        ourFacilities: "Nuestras Instalaciones",
        modernGym: "Gimnasio Moderno",
        modernGymDesc: "Mantén tu rutina de ejercicios con nuestro gimnasio completamente equipado y vistas al exterior.",
        secureParking: "Estacionamiento con Seguridad",
        secureParkingDesc: "Mantenemos tu vehículo en buenas manos, con nuestra seguridad privada y cámaras de vigilancia 24/7.",
        gourmetRestaurant: "Restaurante Gourmet",
        gourmetRestaurantDesc: "Deléitate con nuestra cocina de autor y una selección de vinos premium.",
        vrCenter: "Centro de Recreación VR",
        vrCenterDesc: "¿Quieres disfrutar las mejores Leyendas Urbanas de Mendoza? Aquí las vivirás como si fueras protagonista de ellas.",
        ourLocation: "Nuestra Ubicación",
        inTheHeartOfNature: "En el Corazón de la Naturaleza",
        locationDesc: "Hotelitus está estratégicamente ubicado en un enclave natural privilegiado, rodeado de montañas majestuosas y a escasos minutos de un lago cristalino.Nuestro hotel ofrece el equilibrio perfecto entre accesibilidad y aislamiento, permitiéndote disfrutar a tu máxima comodidad, tu experiencia.",
        address: "RP89, Potrerillos, Mendoza",
        phone: "+54 9 2614452345",
        justMinutesAway: "A tan solo:",
        minutesFromCenter: "30 minutos del centro de Potrerillo",
        minutesFromRiver: "15 minutos del Rio Mendoza",
        minutesFromTrails: "5 minutos de senderos de montaña",
        lakeAccess: "Acceso semi-directo al lago",
        guestReviews: "Lo que dicen nuestros huéspedes",
        review1: "Una experiencia inolvidable. Las vistas son impresionantes y el servicio es excepcional. Definitivamente volveré a este paraíso.",
        review2: "El lugar perfecto para desconectar. Las habitaciones son lujosas y cómodas. El personal es muy atento y siempre dispuesto a ayudar.",
        review3: "La comida del restaurante es exquisita. Los chefs realmente saben cómo resaltar los sabores locales. Una experiencia culinaria inolvidable.",
        makeReservation: "Haz tu Reserva",
        name: "Nombre",
        email: "Email",
        checkInDate: "Fecha de llegada",
        checkOutDate: "Fecha de salida",
        selectRoomType: "Tipo de habitación",
        numberOfGuests: "Número de huéspedes",
        specialRequests: "Solicitudes especiales",
        followUs: "Síguenos",
        copyright: "© 2024 Hotelitus. Todos los derechos reservados."
    },
    en: {
        pageTitle: "HOTELITUS - Your home away from home",
        home: "Home",
        rooms: "Rooms",
        services: "Services",
        facilities: "Facilities",
        location: "Location",
        reviews: "Reviews",
        contact: "Contact",
        heroTitle: "YOUR LIFE, YOUR OWN EXPERIENCE",
        heroSubtitle: "Your luxury oasis in the heart of nature",
        fiveStarExperience: "5-star experience",
        uniqueEnvironment: "Unique natural environment",
        personalizedAttention: "Personalized attention",
        bookNow: "Book Now",
        ourRooms: "Our Rooms",
        luxuryRoom: "Luxury Room",
        luxuryRoomDesc: "Experience maximum comfort with impressive views.",
        executiveSuite: "Executive Suite",
        executiveSuiteDesc: "Spacious and elegant, perfect for long stays.",
        mountainViewRoom: "Mountain View Room",
        mountainViewRoomDesc: "Wake up to the best views of nature.",
        previous: "Previous",
        next: "Next",
        ourServices: "Our Services",
        freeWifi: "Free Wi-Fi",
        freeWifiDesc: "High-speed connection in all areas of the hotel.",
        gourmetFood: "Gourmet Food",
        gourmetFoodDesc: "Delight in our exquisite world-class cuisine.",
        infinityPool: "Infinity Pool",
        infinityPoolDesc: "Relax in our pool with impressive panoramic views.",
        vrExperience: "VR Experience",
        vrExperienceDesc: "Immerse yourself in exciting virtual adventures without leaving the hotel.",
        ourFacilities: "Our Facilities",
        modernGym: "Modern Gym",
        modernGymDesc: "Maintain your exercise routine with our fully equipped gym and outdoor views.",
        secureParking: "Secure Parking",
        secureParkingDesc: "We keep your vehicle in good hands, with our private security and 24/7 surveillance cameras.",
        gourmetRestaurant: "Gourmet Restaurant",
        gourmetRestaurantDesc: "Delight in our signature cuisine and a selection of premium wines.",
        vrCenter: "VR Recreation Center",
        vrCenterDesc: "Want to enjoy the best Urban Legends of Mendoza? Here you'll experience them as if you were the protagonist.",
        ourLocation: "Our Location",
        inTheHeartOfNature: "In the Heart of Nature",
        locationDesc: "Hotelitus is strategically located in a privileged natural enclave, surrounded by majestic mountains and just minutes from a crystal-clear lake. Our hotel offers the perfect balance between accessibility and isolation, allowing you to enjoy your experience to the fullest comfort.",
        address: "RP89, Potrerillos, Mendoza",
        phone: "+54 9 2614452345",
        justMinutesAway: "Just minutes away from:",
        minutesFromCenter: "30 minutes from Potrerillo center",
        minutesFromRiver: "15 minutes from Mendoza River",
        minutesFromTrails: "5 minutes from mountain trails",
        lakeAccess: "Semi-direct access to the lake",
        guestReviews: "What our guests are saying",
        review1: "An unforgettable experience. The views are impressive and the service is exceptional. I will definitely return to this paradise.",
        review2: "The perfect place to disconnect. The rooms are luxurious and comfortable. The staff is very attentive and always willing to help.",
        review3: "The restaurant food is exquisite. The chefs really know how to highlight local flavors. An unforgettable culinary experience.",
        makeReservation: "Make Your Reservation",
        name: "Name",
        email: "Email",
        checkInDate: "Check-in date",
        checkOutDate: "Check-out date",
        selectRoomType: "Select room type",
        numberOfGuests: "Number of guests",
        specialRequests: "Special requests",
        followUs: "Follow Us",
        copyright: "© 2024 Hotelitus. All rights reserved."
    }
};

function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update the page title
    document.title = translations[lang].pageTitle;

    // Update the language attribute of the html tag
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('languageSelector');
    languageSelector.addEventListener('change', (event) => {
        changeLanguage(event.target.value);
    });

    // Initialize with Spanish
    changeLanguage('es');
});

console.log("Language switcher initialized");