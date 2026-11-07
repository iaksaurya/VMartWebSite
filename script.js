const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const year = document.getElementById('year');
const orderForm = document.getElementById('orderForm');
const langButtons = document.querySelectorAll('.lang-btn');
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.products': 'Products',
    'nav.offers': 'Offers',
    'nav.contact': 'Contact',
    'nav.whatsapp': 'WhatsApp Order',
    'hero.eyebrow': 'Serving Families Across the Region',
    'hero.title': 'Trusted grocery and daily essentials for your family.',
    'hero.text': 'The Village Mart (V Mart) brings rice, flour, fresh vegetables, snacks, oils, soaps, and household items directly to your home at honest village prices.',
    'hero.primaryBtn': 'Explore Products',
    'hero.secondaryBtn': 'WhatsApp Us',
    'hero.point1': 'Same-day delivery',
    'hero.point2': 'Quality checked goods',
    'hero.point3': 'Affordable local pricing',
    'stats.customersStrong': 'Many',
    'stats.customers': 'Happy Customers',
    'stats.productsStrong': 'All Household',
    'stats.products': 'Daily Products',
    'stats.preorderStrong': 'Comming Soon',
    'stats.preorder': 'Pre-order on WhatsApp',
    'stats.serviceStrong': '7 Days',
    'stats.service': 'Open for Service',
    'about.eyebrow': 'About our store',
    'about.title': 'Your neighbourhood kirana shop built on trust.',
    'about.text1': 'We are a village-friendly grocery store serving households in Dhokhara and nearby areas with essential items, groceries, and everyday convenience.Our mission is simple: provide honest pricing, quality products, and warm service to every family we serve.',
    'about.text2': 'Whether you need grocery staples, household supplies, or seasonal goods, we make shopping quick, affordable, and reliable.',
    'about.cardTitle': 'Why families choose us',
    'about.point1': 'Fresh and hygienic products',
    'about.point2': 'Affordable daily pricing',
    'about.point3': 'Personalized local service',
    'about.point4': 'Pre-order via WhatsApp',
    'about.point5': 'Trusted local support',
    'products.eyebrow': 'Popular categories',
    'products.title': 'Everything you need for everyday living',
    'product1.title': 'Fresh Vegetables',
    'product1.text': 'Seasonal greens, onions, potatoes, spices, and daily produce.',
    'product2.title': 'Staples',
    'product2.text': 'Rice, wheat flour, pulses, oil, sugar, and kitchen essentials.',
    'product3.title': 'Household Needs',
    'product3.text': 'Toiletries, soaps, detergents, cleaning products, and more.',
    'product4.title': 'Snacks & Drinks',
    'product4.text': 'Tea, biscuits, chips, soft drinks, and family favorite snacks.',
    'product5.title': 'Kitchen Supplies',
    'product5.text': 'Packaged goods, spices, condiments, and cooking basics.',
    'product6.title': 'Daily Essentials',
    'product6.text': 'Toothpaste, shampoo, matchboxes, incense, and small daily items.',
    'offers.eyebrow': 'Special deals',
    'offers.title': 'Great value for your family budget',
    'offers.badge': 'This week only',
    'offers.text': 'Pre-order on WhatsApp for your weekly grocery list',
    'offers.button': 'Book Order',
    'testimonials.eyebrow': 'Customer words',
    'testimonials.title': 'Trusted by local families',
    'quote1': '“Very honest pricing and quick delivery. We order rice, flour, and groceries every week from here.”',
    'quote1.author': '— Rani Devi, Patna',
    'quote2': '“Clean products and friendly service. It feels like a trustworthy local shop.”',
    'quote2.author': '— Sunil Kumar, nearby village',
    'quote3': '“The best kirana shop for daily essentials in our area. Highly recommended.”',
    'quote3.author': '— Neha Singh, Patna',
    'contact.eyebrow': 'Contact us',
    'contact.title': 'Place your order today',
    'contact.addressLabel': 'Address:',
    'contact.address': 'Main Market Road, Patna, Bihar',
    'contact.phoneLabel': 'Phone:',
    'contact.whatsappLabel': 'WhatsApp:',
    'contact.whatsappText': 'Chat on WhatsApp',
    'contact.hoursLabel': 'Hours:',
    'contact.hours': '5:00 AM – 9:00 PM, 7 days a week',
    'form.nameLabel': 'Full Name',
    'form.phoneLabel': 'Phone Number',
    'form.itemLabel': 'Item Needed',
    'form.addressLabel': 'Delivery Address',
    'form.namePlaceholder': 'Your name',
    'form.phonePlaceholder': 'Your phone',
    'form.itemPlaceholder': 'Rice, milk, soap, etc.',
    'form.addressPlaceholder': 'Enter your address',
    'form.submit': 'Send Order Request',
    'footer.home': 'Home',
    'footer.products': 'Products',
    'footer.contact': 'Contact'
  },
  
hi: {
  'nav.home': 'होम',
  'nav.about': 'हमारे बारे में',
  'nav.products': 'उत्पाद',
  'nav.offers': 'ऑफर',
  'nav.contact': 'संपर्क करें',
  'nav.whatsapp': 'व्हाट्सऐप पर ऑर्डर करें',

  'hero.eyebrow': 'आस-पास के क्षेत्रों के परिवारों की सेवा में',
  'hero.title': 'आपके परिवार के लिए भरोसेमंद किराना और रोज़मर्रा की ज़रूरतों का सामान।',
  'hero.text': 'द विलेज मार्ट (V Mart) चावल, आटा, ताज़ी सब्ज़ियाँ, स्नैक्स, तेल, साबुन और घरेलू ज़रूरतों का सामान उचित और किफायती कीमतों पर आपके घर तक पहुँचाता है।',
  'hero.primaryBtn': 'उत्पाद देखें',
  'hero.secondaryBtn': 'व्हाट्सऐप पर संपर्क करें',
  'hero.point1': 'ताज़गी  जाँचा हुआ सामान',
  'hero.point2': 'गुणवत्ता जाँचा हुआ सामान',
  'hero.point3': 'किफायती स्थानीय कीमतें',

  'stats.customersStrong': 'अनेक',
  'stats.customers': 'संतुष्ट ग्राहक',
  'stats.productsStrong': 'सभी घरेलू',
  'stats.products': 'रोज़मर्रा के उत्पाद',
  'stats.preorderStrong': 'व्हाट्सऐप पर प्री-ऑर्डर',
  'stats.preorder': 'जल्द आ रहा है',
  'stats.serviceStrong': '7 दिन',
  'stats.service': 'सेवा उपलब्ध',

  'about.eyebrow': 'हमारे स्टोर के बारे में',
  'about.title': 'विश्वास और भरोसे पर बनी आपकी अपनी किराना दुकान।',
  'about.text1': 'हम एक स्थानीय किराना स्टोर हैं, जो आस-पास के क्षेत्रों के परिवारों को ज़रूरी सामान, किराना उत्पाद और रोज़मर्रा की खरीदारी की सुविधाएँ उपलब्ध कराता है। हमारा उद्देश्य सरल है: हर परिवार को उचित कीमतों पर अच्छी गुणवत्ता का सामान और आत्मीय सेवा प्रदान करना।',
  'about.text2': 'चाहे आपको रोज़मर्रा का किराना सामान चाहिए, घरेलू उपयोग की चीज़ें या मौसमी उत्पाद, हम आपकी खरीदारी को आसान, किफायती और भरोसेमंद बनाते हैं।',
  'about.cardTitle': 'परिवार हमें क्यों चुनते हैं',
  'about.point1': 'ताज़ा और स्वच्छ उत्पाद',
  'about.point2': 'किफायती रोज़ाना कीमतें',
  'about.point3': 'व्यक्तिगत और आत्मीय सेवा',
  'about.point4': 'व्हाट्सऐप के माध्यम से प्री-ऑर्डर',
  'about.point5': 'भरोसेमंद स्थानीय सहयोग',

  'products.eyebrow': 'लोकप्रिय उत्पाद श्रेणियाँ',
  'products.title': 'रोज़मर्रा की ज़रूरत का हर सामान एक ही जगह',

  'product1.title': 'ताज़ी सब्ज़ियाँ',
  'product1.text': 'मौसमी हरी सब्ज़ियाँ, प्याज़, आलू, मसाले और रोज़ाना की ताज़ी उपज।',

  'product2.title': 'राशन और अनाज',
  'product2.text': 'चावल, गेहूँ का आटा, दालें, तेल, चीनी और रसोई की ज़रूरी चीज़ें।',

  'product3.title': 'घरेलू ज़रूरतें',
  'product3.text': 'साबुन, डिटर्जेंट, सफाई के उत्पाद और अन्य घरेलू सामान।',

  'product4.title': 'स्नैक्स और पेय पदार्थ',
  'product4.text': 'चाय, बिस्कुट, चिप्स, कोल्ड ड्रिंक्स और परिवार के पसंदीदा स्नैक्स।',

  'product5.title': 'रसोई का सामान',
  'product5.text': 'पैकेटबंद खाद्य पदार्थ, मसाले, सॉस और खाना पकाने की ज़रूरी चीज़ें।',

  'product6.title': 'रोज़मर्रा की ज़रूरतें',
  'product6.text': 'टूथपेस्ट, शैम्पू, माचिस, अगरबत्ती और रोज़ाना इस्तेमाल की अन्य छोटी-मोटी चीज़ें।',

  'offers.eyebrow': 'खास ऑफर',
  'offers.title': 'आपके परिवार के बजट में बेहतरीन बचत',
  'offers.badge': 'केवल इस सप्ताह',
  'offers.text': 'अपनी हफ़्ते भर की किराने की सूची व्हाट्सऐप पर भेजकर पहले से ऑर्डर करें।',
  'offers.button': 'ऑर्डर बुक करें',

  'testimonials.eyebrow': 'ग्राहकों की राय',
  'testimonials.title': 'स्थानीय परिवारों का भरोसा',

  'quote1': '“बहुत उचित कीमतें और तेज़ डिलीवरी। हम यहाँ से हर हफ़्ते चावल, आटा और किराने का सामान मँगवाते हैं।”',
  'quote1.author': '— रानी देवी',

  'quote2': '“साफ़-सुथरा सामान और दोस्ताना व्यवहार। यह एक भरोसेमंद स्थानीय दुकान है।”',
  'quote2.author': '— सुनील कुमार',

  'quote3': '“रोज़मर्रा की ज़रूरतों के लिए एक बेहतरीन किराना दुकान। मैं इसकी ज़रूर सिफ़ारिश करूँगा।”',
  'quote3.author': '— नेहा सिंह',

  'contact.eyebrow': 'हमसे संपर्क करें',
  'contact.title': 'आज ही अपना ऑर्डर दें',
  'contact.addressLabel': 'पता:',
  'contact.address': 'मुख्य बाज़ार रोड',
  'contact.phoneLabel': 'फ़ोन:',
  'contact.whatsappLabel': 'व्हाट्सऐप:',
  'contact.whatsappText': 'व्हाट्सऐप पर चैट करें',
  'contact.hoursLabel': 'खुलने का समय:',
  'contact.hours': 'सुबह 5:00 बजे से रात 9:00 बजे तक, सप्ताह के सभी 7 दिन',

  'form.nameLabel': 'पूरा नाम',
  'form.phoneLabel': 'फ़ोन नंबर',
  'form.itemLabel': 'आवश्यक सामान',
  'form.addressLabel': 'डिलीवरी का पता',
  'form.namePlaceholder': 'अपना नाम लिखें',
  'form.phonePlaceholder': 'अपना फ़ोन नंबर लिखें',
  'form.itemPlaceholder': 'चावल, दूध, साबुन आदि',
  'form.addressPlaceholder': 'अपना पूरा पता लिखें',
  'form.submit': 'ऑर्डर अनुरोध भेजें',

  'footer.home': 'होम',
  'footer.products': 'उत्पाद',
  'footer.contact': 'संपर्क करें'
}

};

if (year) {
  year.textContent = new Date().getFullYear();
}

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

if (langButtons.length) {
  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

if (slides.length) {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  setInterval(() => showSlide(currentSlide + 1), 3000);
}

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = orderForm.querySelector('input[name="name"]').value.trim();
    const phone = orderForm.querySelector('input[name="phone"]').value.trim();
    const item = orderForm.querySelector('input[name="item"]').value.trim();
    const address = orderForm.querySelector('textarea[name="address"]').value.trim();

    if (!name || !phone || !item || !address) {
      return;
    }

    const message = `Hello The Village Mart (V Mart),%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AItem: ${encodeURIComponent(item)}%0ADelivery Address: ${encodeURIComponent(address)}%0A%0APlease confirm my order.`;
    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;

    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow) {
      window.location.href = whatsappUrl;
    }

    orderForm.reset();
  });
}
