import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import {
  UtensilsCrossed, Sandwich, Salad, Beef, GlassWater,
  Star, Flame, Heart, Award, Trophy, Crown,
  Zap, Leaf, Wheat, Sparkles, Globe2, Droplets,
  Search, X, MapPin,
} from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────
const categories = [
  { id: 'todos', label: 'Todo el Menú', Icon: UtensilsCrossed },
  { id: 'gorditas', label: 'Tías (Gorditas)', Icon: Sandwich },
  { id: 'flautas', label: 'Flautas & Mamichulas', Icon: UtensilsCrossed },
  { id: 'quesadillas', label: 'Quesadillas', Icon: Salad },
  { id: 'nalgaditas', label: 'Nalgaditas', Icon: Flame },
  { id: 'lonches', label: 'Lonches', Icon: Sandwich },
  { id: 'birrias', label: 'Birrias', Icon: Beef },
  { id: 'nachiquiles', label: 'Nachiquiles', Icon: Flame },
  { id: 'apapachos', label: 'Apapachos (Dulces)', Icon: Heart },
  { id: 'pellizcadas', label: 'Pellizcadas', Icon: Wheat },
  { id: 'bebidas', label: 'Bebidas', Icon: GlassWater },
  { id: 'aguas', label: 'Aguas Frescas', Icon: Droplets },
]

const menuItems = [
  // Gorditas
  {
    id: 'gordita-carlota',
    category: 'gorditas',
    name: 'Tía Carlota',
    description: 'Relleno: Chilaquiles',
    image: '/assets/tia carlota de petunia.png',
    price: '$40',
    badge: 'Chilaquiles',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-kaly',
    category: 'gorditas',
    name: 'Tía Kaly',
    description: 'Relleno: Champiñon con chile morita',
    image: '/assets/champigordita.png',
    price: '$40',
    badge: 'Champiñon',
    BadgeIcon: Flame,
    badgeColor: '#F5A623',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-martha',
    category: 'gorditas',
    name: 'Tía Martha',
    description: 'Relleno: Cochinita Pibil',
    image: '/assets/cochinita pibil.png',
    price: '$40',
    badge: 'Cochinita',
    BadgeIcon: Heart,
    badgeColor: '#D42F2F',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-eva',
    category: 'gorditas',
    name: 'Tía Tina',
    description: 'Relleno: Pollo con mole',
    image: '/assets/pollo con mole.png',
    price: '$40',
    badge: 'Mole',
    BadgeIcon: Leaf,
    badgeColor: '#0D6E7E',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-sofia',
    category: 'gorditas',
    name: 'Tía Sofia',
    description: 'Relleno: Frijoles adobados',
    image: '/assets/frijolesadobadosgordita.png',
    price: '$40',
    badge: 'Frijoles',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-chelitin',
    category: 'gorditas',
    name: 'Tía Chelitin',
    description: 'Relleno: Pancita',
    image: '/assets/gordita pancita.png',
    price: '$40',
    badge: 'Pancita',
    BadgeIcon: Flame,
    badgeColor: '#F5A623',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-rosy',
    category: 'gorditas',
    name: 'Tía Rosy',
    description: 'Relleno: Rajas con elote',
    image: '/assets/rajas con nopal.png',
    price: '$40',
    badge: 'Rajas',
    BadgeIcon: Heart,
    badgeColor: '#D42F2F',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-lupe',
    category: 'gorditas',
    name: 'Tía Lupe',
    description: 'Relleno: Pollo con nopales',
    image: '/assets/pollo con nopales.png',
    price: '$40',
    badge: 'Pollo',
    BadgeIcon: Leaf,
    badgeColor: '#0D6E7E',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-tita',
    category: 'gorditas',
    name: 'Tía Tita',
    description: 'Relleno: Barbacoa',
    image: '/assets/barbacoa.png',
    price: '$40',
    badge: 'Barbacoa',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-hermila',
    category: 'gorditas',
    name: 'Tía Hermila',
    description: 'Relleno: Chicharron seco',
    image: '/assets/gorditas 2.jpeg',
    price: '$45',
    badge: 'Chicharron',
    BadgeIcon: Flame,
    badgeColor: '#F5A623',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-serafina',
    category: 'gorditas',
    name: 'Tía Serafina',
    description: 'Relleno: Costilla en salsa verde',
    image: '/assets/tia serafina.png',
    price: '$40',
    badge: 'Costilla',
    BadgeIcon: Heart,
    badgeColor: '#D42F2F',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-gloria',
    category: 'gorditas',
    name: 'Tía Gloria',
    description: 'Relleno: Bistec en salsa pasilla',
    image: '/assets/bistec en salsa pasilla.png',
    price: '$40',
    badge: 'Bistec',
    BadgeIcon: Leaf,
    badgeColor: '#0D6E7E',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-lle',
    category: 'gorditas',
    name: 'Tía lle',
    description: 'Relleno: Chorizo con papas',
    image: '/assets/chorizo con papas.png',
    price: '$40',
    badge: 'Chorizo',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-faby',
    category: 'gorditas',
    name: 'Tía Faby',
    description: 'Relleno: Pastor',
    image: '/assets/gorditapastor.png',
    price: '$45',
    badge: 'Pastor',
    BadgeIcon: Flame,
    badgeColor: '#F5A623',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-esty',
    category: 'gorditas',
    name: 'Tía Ruth',
    description: 'Relleno: Lengua en salsa verde',
    image: '/assets/lengua en salsaverde.png',
    price: '$45',
    badge: 'Lengua',
    BadgeIcon: Heart,
    badgeColor: '#D42F2F',
    tag: 'Tías (Gorditas)',
  },
  {
    id: 'gordita-extra',
    category: 'gorditas',
    name: 'Queso extra',
    description: 'Agrega queso extra a tu gordita',
    image: '/assets/extras.png',
    price: '$5',
    badge: 'Queso',
    BadgeIcon: Leaf,
    badgeColor: '#0D6E7E',
    tag: 'Tías (Gorditas)',
  },
  // Flautas / Mamichulas
  {
    id: 'mamichulas-petite',
    category: 'flautas',
    name: 'Mamichulas Petite — 5 pzas',
    description: `flautas bien crocantes, rellenas de: pierna, pollo, frijol y papa… pa' que no haya pierde.\n\nBañadas en tu salsa favorita: verde o chipotle (tranquila, ninguna pica 😉).\n\nDoraditas, llenitas y listas para hacerte feliz… esto ya no es antojo, es compromiso. 😏🔥. Nota: aumenta $10 si son de un solo sabor.`,
    image: '/assets/mamichulasJumbo.png',
    price: '$80',
    badge: 'Petite',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Flautas & Mamichulas',
  },
  {
    id: 'mamichulas-jumbo-4',
    category: 'flautas',
    name: 'Mamichulas Jumbo — 4 pzas',
    description: 'Con queso o sin queso, tú eliges. Nota: aumenta $10 si son de un solo sabor.',
    image: '/assets/mamichulasJumbo.png',
    price: '$90',
    badge: 'Jumbo',
    BadgeIcon: Trophy,
    badgeColor: '#F5A623',
    tag: 'Flautas & Mamichulas',
  },
  {
    id: 'mamichulas-jumbo-3',
    category: 'flautas',
    name: 'Mamichulas Jumbo — 3 pzas',
    description: 'Con queso o sin queso, tú eliges. Nota: aumenta $10 si son de un solo sabor.',
    image: '/assets/mamichulasJumbo.png',
    price: '$80',
    badge: 'Jumbo',
    BadgeIcon: Flame,
    badgeColor: '#F5A623',
    tag: 'Flautas & Mamichulas',
  },
  {
    id: 'mami-birrias-combo',
    category: 'flautas',
    name: 'Mami Birrias — 5 pzas',
    description: '5 piezas de mamichulas de birria con 250ml de consomé incluido. La combinación perfecta.',
    image: '/assets/mami birrias.jpeg',
    price: '$129',
    badge: 'Con Consomé',
    BadgeIcon: Crown,
    badgeColor: '#D42F2F',
    tag: 'Flautas & Mamichulas',
  },

  // Quesadillas
  {
    id: 'quesadilla-frita',
    category: 'quesadillas',
    name: 'Quesadillas Fritas',
    description: 'Quesadillas crujientes recién fritas, con queso derretido y tu relleno favorito.',
    image: '/assets/quesadilla frita uhd.png',
    price: '$40',
    badge: 'Crujientes',
    BadgeIcon: Flame,
    badgeColor: '#F5A623',
    tag: 'Quesadillas',
  },
  {
    id: 'quesadilla-frita-guisado',
    category: 'quesadillas',
    name: 'Quesadillas Fritas con Guisado',
    description: 'Quesadillas fritas rellenas de guisado del día. Crema, queso y salsa al gusto.',
    image: '/assets/quesadilla frita uhd.png',
    price: '$45',
    badge: 'Con Guisado',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Quesadillas',
  },
  {
    id: 'nalgaditas',
    category: 'nalgaditas',
    name: 'Nalgaditas',
    description: 'Gordita frita rellena de chicharón. Crujiente por fuera, jugosa por dentro.',
    image: '/assets/nalgaditachicharron.png',
    price: '$45',
    badge: 'Especial',
    BadgeIcon: Award,
    badgeColor: '#0D6E7E',
    tag: 'Nalgaditas',
  },
  // Lonches
  {
    id: 'lonche-tomasito',
    category: 'lonches',
    name: 'Tomasito de Pierna',
    description: 'Pierna deshebrada, con adobo de la casa. Ufff',
    image: '/assets/lonches tiapetunia.jpeg',
    price: 'Desde $90',
    badge: 'Abundantes',
    BadgeIcon: Crown,
    badgeColor: '#D4A017',
    tag: 'Lonches',
  },
  {
    id: 'lonche-cabroncito',
    category: 'lonches',
    name: 'Cabroncito',
    description: '¡Con un sabor único y un toque especial! 100% recomendado.',
    image: '/assets/cabroncito uhd.png',
    price: 'Desde $90',
    badge: 'Especial',
    BadgeIcon: Flame,
    badgeColor: '#D42F2F',
    tag: 'Lonches',
  },
  {
    id: 'lonche-tomasito-chilaquiles',
    category: 'lonches',
    name: 'Tomasito de Chilaquiles',
    description: 'Tradicional lonche relleno de deliciosos chilaquiles. ¡Una explosión de sabor!',
    image: '/assets/tomasito de chilaquiles.png',
    price: 'Desde $90',
    badge: 'Chilaquiles',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Lonches',
  },
  // Birrias
  {
    id: 'mami-birrias',
    category: 'birrias',
    name: 'Birrias',
    description: 'Carne tierna bañada en consomé especiado. Servida con cilantro, cebolla y tortilla.',
    image: '/assets/mami birrias.jpeg',
    price: 'Desde $65',
    badge: 'Potente',
    BadgeIcon: Flame,
    badgeColor: '#D42F2F',
    tag: 'Birrias',
  },
  {
    id: 'tacos-barbacoa',
    category: 'birrias',
    name: 'Tacos de Barbacoa',
    description: 'De los de mi pueblo . De res , bien sabrosa . Casera y con amor',
    image: '/assets/tacos de barbacoa petunia.png',
    price: '$35',
    badge: 'Barbacoa',
    BadgeIcon: Star,
    badgeColor: '#D42F2F',
    tag: 'Birrias',
  },

  // Nachiquiles
  {
    id: 'nachiquiles-rojos',
    category: 'nachiquiles',
    name: 'Nachiquiles Rojos',
    description: 'Nachos crujientes bañados en salsa roja casera con todos los complementos. Con queso fundido.',
    image: '/assets/chilaquiles rojos.png',
    price: '$75',
    badge: 'Rojos',
    BadgeIcon: Flame,
    badgeColor: '#D42F2F',
    tag: 'Nachiquiles',
  },
  {
    id: 'nachiquiles-verdes',
    category: 'nachiquiles',
    name: 'Nachiquiles Verdes',
    description: 'Nachos crujientes bañados en salsa verde casera con todos los complementos. Con queso fundido.',
    image: '/assets/nachiquiles verdes hd.png',
    price: '$75',
    badge: 'Verdes',
    BadgeIcon: Leaf,
    badgeColor: '#16A34A',
    tag: 'Nachiquiles',
  },
  {
    id: 'nachiquiles-morados',
    category: 'nachiquiles',
    name: 'Nachiquiles Morados (Chipotle)',
    description: 'Nachos bañados en salsa de chipotle ahumada. Sabor intenso y único con queso fundido.',
    image: '/assets/chilaquiles rojos.png',
    price: '$75',
    badge: 'Chipotle',
    BadgeIcon: Star,
    badgeColor: '#7C3AED',
    tag: 'Nachiquiles',
  },
  {
    id: 'nachiquiles-casa',
    category: 'nachiquiles',
    name: 'Nachiquiles de la Casa',
    description: 'La receta secreta de Tía Petunia. Combinación especial de salsas con todos los toppings.',
    image: '/assets/chilaquiles rojos.png',
    price: '$75',
    badge: 'Especial',
    BadgeIcon: Crown,
    badgeColor: '#E91E8C',
    tag: 'Nachiquiles',
  },
  {
    id: 'nachiquiles-proteina',
    category: 'nachiquiles',
    name: 'Extra Proteína',
    description: 'Agrega huevo, pollo o chicharrón a tus nachiquiles. ¡El toque extra que necesitas!',
    image: '/assets/extras.png',
    price: '+$20',
    badge: 'Extra',
    BadgeIcon: Award,
    badgeColor: '#F5A623',
    tag: 'Nachiquiles',
  },
  // Apapachos (Gorditas Dulces)
  {
    id: 'apapacho-chila',
    category: 'apapachos',
    name: 'Tía Chila',
    description: 'Gordita dulce rellena de queso crema con mermelada. Un capricho dulce hecho con amor.',
    image: '/assets/crema con mermelada.png',
    price: '$50',
    badge: 'Dulce',
    BadgeIcon: Heart,
    badgeColor: '#E91E8C',
    tag: 'Apapachos',
  },
  {
    id: 'apapacho-paty',
    category: 'apapachos',
    name: 'Tía Paty',
    description: 'Pellizcada de amor con dulce de leche y queso crema',
    image: '/assets/tia paty.png',
    price: '$50',
    badge: 'Dulce de Leche',
    BadgeIcon: Sparkles,
    badgeColor: '#D4A017',
    tag: 'Apapachos',
  },
  {
    id: 'apapacho-arroz',
    category: 'apapachos',
    name: 'Arroz con Leche',
    description: 'Clásico postre mexicano. Arroz cremoso con leche, canela y azúcar. Reconfortante y nostálgico.',
    image: '/assets/arroz con leche.png',
    price: '$35',
    badge: 'Postre',
    BadgeIcon: Star,
    badgeColor: '#F5A623',
    tag: 'Apapachos',
  },
  // Pellizcadas
  {
    id: 'pellizcada-mantequilla-sal',
    category: 'pellizcadas',
    name: 'Pellizcada con Mantequilla y Sal',
    description: 'Masa de maíz reciente pellizcada a mano, báñada en mantequilla con sal. Simple y deliciosa.',
    image: '/assets/pellizcada sal y mantequilla.jpeg',
    price: '$35',
    badge: 'Clásica',
    BadgeIcon: Wheat,
    badgeColor: '#D4A017',
    tag: 'Pellizcadas',
  },
  {
    id: 'pellizcada-mantequilla-queso',
    category: 'pellizcadas',
    name: 'Pellizcada con Mantequilla y Queso',
    description: 'Masa de maíz pellizcada, con mantequilla y queso desmoronado. El complemento perfecto.',
    image: '/assets/pellizcada mantequilla y queso.jpeg',
    price: '$40',
    badge: 'Con Queso',
    BadgeIcon: Star,
    badgeColor: '#F5A623',
    tag: 'Pellizcadas',
  },
  // Bebidas
  {
    id: 'jugo-naranja',
    category: 'bebidas',
    name: 'Jugo de Naranja',
    description: 'Jugo de naranja natural exprimido al momento. Fresco y vitaminado.',
    image: '/assets/aguas/jugo de naranja.png',
    price: '$50',
    badge: 'Natural',
    BadgeIcon: Droplets,
    badgeColor: '#F5A623',
    tag: 'Bebidas',
  },
  {
    id: 'cafe-olla',
    category: 'bebidas',
    name: 'Café de Olla',
    description: 'Café tradicional mexicano con canela y piloncillo. Calientito y reconfortante.',
    image: '/assets/aguas/cafe de olla.png',
    price: '$40',
    badge: 'Caliente',
    BadgeIcon: Flame,
    badgeColor: '#D42F2F',
    tag: 'Bebidas',
  },
  {
    id: 'chocomilk',
    category: 'bebidas',
    name: 'Chocomilk',
    description: 'Leche chocolatada cremosa. Perfecta para acompañar tu desayuno o antojito.',
    image: '/assets/aguas/chocomilk.png',

    badge: 'Cremoso',
    BadgeIcon: Heart,
    badgeColor: '#7C3AED',
    tag: 'Bebidas',
  },
  {
    id: 'refresco',
    category: 'bebidas',
    name: 'Refresco',
    description: 'Refresco frío en lata o botella para acompañar tu platillo favorito.',
    image: '/assets/aguas/refresco menu uhd.png',
    price: '$35',
    badge: 'Frío',
    BadgeIcon: Droplets,
    badgeColor: '#0D6E7E',
    tag: 'Bebidas',
  },
  {
    id: 'boing',
    category: 'bebidas',
    name: 'Boing',
    description: 'Jugo Boing de temporada. Sabores: guayaba, mango, fresa y más.',
    image: '/assets/aguas/booing.png',
    price: '$30',
    badge: 'Jugoso',
    BadgeIcon: Star,
    badgeColor: '#E91E8C',
    tag: 'Bebidas',
  },
  {
    id: 'agua-natural',
    category: 'bebidas',
    name: 'Agua Natural (Medio Litro)',
    description: 'Agua embotellada natural de medio litro para hidratarte.',
    image: '/assets/aguas/agua natural uhd.png',
    price: '$20',
    badge: 'Pura',
    BadgeIcon: Droplets,
    badgeColor: '#1A9AAE',
    tag: 'Bebidas',
  },
  {
    id: 'agua-fresca-litro',
    category: 'bebidas',
    name: 'Agua Fresca (1 Litro)',
    description: 'Un litro de nuestras aguas frescas artesanales del día. Elige tu sabor favorito.',
    image: '/assets/aguas/agua fresca.png',
    price: '$55',
    badge: 'Artesanal',
    BadgeIcon: Sparkles,
    badgeColor: '#16A34A',
    tag: 'Bebidas',
  },
  // Aguas
  {
    id: 'agua-naranja',
    category: 'aguas',
    name: 'Agua de Naranja',
    description: 'Agua fresca de naranja natural. Refrescante y llena de sabor.',
    image: '/assets/aguas/agua de naranja.png',
    price: 'Desde $20',
    badge: 'Natural',
    BadgeIcon: Droplets,
    badgeColor: '#F5A623',
    tag: 'Aguas Frescas',
  },
  {
    id: 'agua-jamaica',
    category: 'aguas',
    name: 'Agua de Jamaica',
    description: 'Jamaica natural, ligeramente dulce y refrescante. Ideal para acompañar tu platillo.',
    image: '/assets/aguas/Agua jamaica.png',
    price: 'Desde $20',
    badge: 'Clásica',
    BadgeIcon: Award,
    badgeColor: '#E91E8C',
    tag: 'Aguas Frescas',
  },
  {
    id: 'agua-horchata',
    category: 'aguas',
    name: 'Horchata',
    description: 'Cremosa y dulce, nuestra horchata de arroz es el acompañamiento perfecto.',
    image: '/assets/aguas/agua de horchata.png',
    price: 'Desde $20',
    badge: 'Cremosa',
    BadgeIcon: Sparkles,
    badgeColor: '#F5A623',
    tag: 'Aguas Frescas',
  },
  {
    id: 'agua-tamarindo',
    category: 'aguas',
    name: 'Agua de Tamarindo',
    description: 'Agridulce y refrescante, sabor único que complementa cualquier platillo.',
    image: '/assets/aguas/agua tamarindo.png',
    price: 'Desde $20',
    badge: 'Especial',
    BadgeIcon: Leaf,
    badgeColor: '#D4A017',
    tag: 'Aguas Frescas',
  },
  {
    id: 'limonada-pepino',
    category: 'aguas',
    name: 'Limonada con Pepino',
    description: 'Fresca limonada con pepino y menta. Ideal para los días calurosos.',
    image: '/assets/aguas/limonada con pepino.png',
    price: 'Desde $22',
    badge: 'Fresca',
    BadgeIcon: Droplets,
    badgeColor: '#1A9AAE',
    tag: 'Aguas Frescas',
  },
  {
    id: 'fresas-crema',
    category: 'aguas',
    name: 'Agua de Fresas con Crema',
    description: 'Frutada y cremosa. Fresas naturales con un toque de crema. ¡Un deleite!',
    image: '/assets/aguas/fresas con crema uhd.png',
    price: 'Desde $25',
    badge: 'Especial',
    BadgeIcon: Heart,
    badgeColor: '#E91E8C',
    tag: 'Aguas Frescas',
  },
  {
    id: 'te-helado',
    category: 'aguas',
    name: 'Té Helado con Frutos Rojos',
    description: 'Té helado artesanal con frutos rojos frescos. Antioxidante y delicioso.',
    image: '/assets/aguas/te con frutosrojos.png',
    price: 'Desde $25',
    badge: 'Premium',
    BadgeIcon: Crown,
    badgeColor: '#7C3AED',
    tag: 'Aguas Frescas',
  },
  {
    id: 'horchata-frutos',
    category: 'aguas',
    name: 'Horchata con Frutos Rojos',
    description: 'La combinación perfecta de horchata cremosa con frutos rojos de temporada.',
    image: '/assets/aguas/horchatta y fresa.png',
    price: 'Desde $25',
    badge: 'Fusion',
    BadgeIcon: Sparkles,
    badgeColor: '#E91E8C',
    tag: 'Aguas Frescas',
  },
  {
    id: 'pina-menta',
    category: 'aguas',
    name: 'Agua de Piña con Menta',
    description: 'Piña tropical con menta fresca. Refrescante y tropical.',
    image: '/assets/aguas/pina con menta.png',
    price: 'Desde $22',
    badge: 'Tropical',
    BadgeIcon: Globe2,
    badgeColor: '#F5A623',
    tag: 'Aguas Frescas',
  },
  {
    id: 'cebada',
    category: 'aguas',
    name: 'Agua de Cebada',
    description: 'Bebida tradicional mexicana, suave y reconfortante. Hecha con cebada natural.',
    image: '/assets/aguas/aguadecebada uhd.png',
    price: 'Desde $20',
    badge: 'Tradicional',
    BadgeIcon: Wheat,
    badgeColor: '#D4A017',
    tag: 'Aguas Frescas',
  },
  {
    id: 'alfalfa-pina-limon',
    category: 'aguas',
    name: 'Alfalfa, Piña y Limón',
    description: 'Verde, nutritivo y delicioso. La combinación saludable que te llenará de energía.',
    image: '/assets/aguas/agua de pina,menta y alfalfa uhd.png',
    price: 'Desde $22',
    badge: 'Saludable',
    BadgeIcon: Leaf,
    badgeColor: '#16A34A',
    tag: 'Aguas Frescas',
  },
  {
    id: 'fresas-menta',
    category: 'aguas',
    name: 'Agua de Fresas con Menta',
    description: 'Fresas naturales con menta fresca. Refrescante y muy aromático.',
    image: '/assets/aguas/fresas con menta agua.png',
    price: 'Desde $22',
    badge: 'Refrescante',
    BadgeIcon: Droplets,
    badgeColor: '#0D6E7E',
    tag: 'Aguas Frescas',
  },

]

// ─── Modal ───────────────────────────────────────────────────────────────────
function ItemModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!item) return null
  const { BadgeIcon } = item

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99,
        background: 'rgba(10,15,30,0.72)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        animation: 'modalFadeIn 0.22s ease',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '28px',
          overflow: 'hidden',
          maxWidth: '840px',
          width: 'calc(100% - 32px)',
          maxHeight: 'min(90vh, 800px)',
          margin: '16px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 32px 80px -12px rgba(0,0,0,0.35)',
          animation: 'modalSlideUp 0.28s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        {/* Image area */}
        <div style={{ position: 'relative', flexShrink: 0, background: '#111' }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '100%',
              maxHeight: 'clamp(200px, 40vh, 400px)',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              background: '#111',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
            pointerEvents: 'none',
          }} />
          {/* Badge */}
          <span style={{
            position: 'absolute', top: '18px', left: '20px',
            background: item.badgeColor, color: '#fff',
            fontFamily: 'var(--font-body)', fontWeight: 700,
            fontSize: '0.75rem', letterSpacing: '0.06em',
            padding: '5px 12px 5px 10px', borderRadius: '100px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.25)',
            display: 'inline-flex', alignItems: 'center', gap: '5px',
          }}>
            {BadgeIcon && <BadgeIcon size={12} />} {item.badge}
          </span>
          {/* Price */}
          <span style={{
            position: 'absolute', bottom: '18px', left: '22px',
            fontFamily: 'var(--font-heading)', fontWeight: 800,
            fontSize: '1.6rem', color: '#fff',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
          }}>
            {item.price}
          </span>
          {/* Close */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px',
              width: '38px', height: '38px', borderRadius: '50%',
              border: 'none', background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
              color: '#fff', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(233,30,140,0.7)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.35)'}
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{
          padding: 'clamp(20px, 4vw, 28px) clamp(20px, 5vw, 32px) clamp(24px, 5vw, 32px)',
          overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: '12px',
        }}>
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              background: `${item.badgeColor}18`,
              border: `1px solid ${item.badgeColor}30`,
              color: item.badgeColor,
              fontFamily: 'var(--font-body)', fontWeight: 600,
              fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '3px 12px', borderRadius: '100px', marginBottom: '8px',
            }}>
              {BadgeIcon && <BadgeIcon size={11} />} {item.tag}
            </span>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#1a1a2e', margin: 0, lineHeight: 1.15,
            }}>
              {item.name}
            </h2>
          </div>

          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem', color: '#555', lineHeight: 1.7, margin: 0,
          }}>
            {item.description}
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a
              href={`https://wa.me/523314436726?text=${encodeURIComponent(`¡Hola Tía Petunia! 🌮 Me gustaría ordenar: ${item.name} (${item.price})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1, minWidth: '140px',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700,
                fontSize: '0.95rem', padding: '13px 24px', borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(37,211,102,0.28)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Ordenar por WhatsApp
            </a>
            <button
              onClick={onClose}
              style={{
                flex: 1, minWidth: '120px',
                padding: '13px 24px', borderRadius: '100px',
                border: '1.5px solid rgba(0,0,0,0.1)',
                background: 'transparent', color: '#888',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.9rem',
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ccc'; e.currentTarget.style.color = '#555' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)'; e.currentTarget.style.color = '#888' }}
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96) }
          to   { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  )
}

// ─── Card Component ───────────────────────────────────────────────────────────
function MenuCard({ item, index, onOpen }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const { BadgeIcon } = item

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      onClick={() => onOpen(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease ${(index % 4) * 0.1}s, transform 0.6s ease ${(index % 4) * 0.1}s`,
        cursor: 'pointer',
      }}
    >
      <div style={{
        background: '#fff',
        borderRadius: '22px',
        overflow: 'hidden',
        boxShadow: hovered
          ? '0 20px 48px -8px rgba(233,30,140,0.18), 0 4px 16px rgba(0,0,0,0.06)'
          : '0 4px 20px rgba(0,0,0,0.06)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Image */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform 0.55s ease',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />
          {/* Badge */}
          <span style={{
            position: 'absolute', top: '12px', left: '12px',
            background: item.badgeColor, color: '#fff',
            fontFamily: 'var(--font-body)', fontWeight: 700,
            fontSize: '0.7rem', letterSpacing: '0.06em',
            padding: '4px 10px 4px 8px', borderRadius: '100px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            whiteSpace: 'nowrap',
            display: 'inline-flex', alignItems: 'center', gap: '5px',
          }}>
            {BadgeIcon && <BadgeIcon size={11} />} {item.badge}
          </span>
          {/* Category tag */}
          <span style={{
            position: 'absolute', bottom: '10px', right: '10px',
            background: 'rgba(255,255,255,0.18)',
            backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
            color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: '0.65rem', letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '3px 10px', borderRadius: '100px',
          }}>
            {item.tag}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '20px 20px 22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
            color: '#1a1a2e', margin: '0 0 8px', lineHeight: 1.25,
          }}>
            {item.name}
          </h3>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.85rem',
            color: '#666', margin: '0 0 18px', lineHeight: 1.6, flex: 1,
          }}>
            {item.description}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #E91E8C, #F5A623)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              {item.price}
            </span>
            <a
              href={`https://wa.me/523314436726?text=${encodeURIComponent(`¡Hola Tía Petunia! 🌮 Me gustaría ordenar: ${item.name} (${item.price})`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              style={{
                background: item.badgeColor, color: '#fff',
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '0.78rem',
                padding: '7px 16px', borderRadius: '100px',
                textDecoration: 'none', transition: 'opacity 0.2s', display: 'inline-block',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Ordenar
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('todos')
  const [search, setSearch] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const tabsRef = useRef(null)
  const handleOpen = useCallback((item) => setSelectedItem(item), [])
  const handleClose = useCallback(() => setSelectedItem(null), [])
  const scrollTabs = useCallback((dir) => {
    if (tabsRef.current) tabsRef.current.scrollBy({ left: dir * 180, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const filtered = menuItems.filter(item => {
    const matchCat = activeCategory === 'todos' || item.category === activeCategory
    const matchSearch = search === '' ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-cream)' }}>

      {/* ── Hero banner ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        minHeight: 'clamp(340px, 60vh, 550px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Background image */}
        <img
          src="/assets/eventomenu1.png"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            zIndex: 0,
          }}
        />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(9,78,90,0.55) 0%, rgba(0,0,0,0.65) 100%)',
          zIndex: 1,
        }} />

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '700px',
          textAlign: 'center',
          width: '100%',
          padding: '40px 20px',
        }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'rgba(255,255,255,0.9)',
            fontFamily: 'var(--font-body)', fontWeight: 600,
            fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            padding: '6px 20px', borderRadius: '100px', marginBottom: '20px',
          }}>
            <UtensilsCrossed size={13} />
            Antojitos mexicanos auténticos
          </span>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.4rem, 8vw, 4.5rem)',
            color: '#fff', margin: '0 0 16px', lineHeight: 1.1,
            fontStyle: 'italic',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>
            Nuestro Menú
          </h1>

          <p style={{
            fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.8)',
            fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.6,
          }}>
            Cada platillo preparado con recetas de familia y los ingredientes más frescos del mercado
          </p>

          <Link
            to="/#especialidad"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'linear-gradient(135deg, #094E5A, #0D6E7E)',
              color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: '0.95rem', padding: '14px 32px', borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              transition: 'transform 0.25s, box-shadow 0.25s',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)' }}
          >
            Explora Nuestras Especialidades
          </Link>
        </div>

        {/* Wave */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, zIndex: 3 }}>
          <svg viewBox="0 0 1440 60" fill="none" style={{ width: '100%', display: 'block' }}>
            <path d="M0,30 C360,70 1080,-10 1440,30 L1440,60 L0,60 Z" fill="var(--color-cream)" />
          </svg>
        </div>
      </div>

      {/* ── Category Tabs ── */}
      <div style={{
        position: 'sticky', top: '64px', zIndex: 40,
        background: 'rgba(255,248,240,0.97)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', display: 'flex', alignItems: 'center' }}>

          {/* Left arrow */}
          <button
            onClick={() => scrollTabs(-1)}
            aria-label="Scroll izquierda"
            style={{
              flexShrink: 0, width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(9,78,90,0.08)', border: 'none', borderRadius: '50%',
              cursor: 'pointer', margin: '8px 4px 8px 12px',
              color: '#094E5A', transition: 'background 0.2s',
              fontSize: '1.3rem', fontWeight: 'bold', lineHeight: 1,
              zIndex: 2,
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(9,78,90,0.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(9,78,90,0.08)'}
          >
            ‹
          </button>

          {/* Fade left */}
          <div style={{
            position: 'absolute', left: '52px', top: 0, bottom: 0, width: '32px',
            background: 'linear-gradient(to right, rgba(255,248,240,0.97), transparent)',
            zIndex: 1, pointerEvents: 'none',
          }} />

          {/* Scrollable tabs */}
          <div
            ref={tabsRef}
            style={{
              flex: 1, display: 'flex', gap: '6px',
              overflowX: 'auto', padding: '10px 8px',
              scrollbarWidth: 'none', msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {categories.map(cat => {
              const CatIcon = cat.Icon
              const active = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  data-cat={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id)
                    const btn = tabsRef.current?.querySelector(`[data-cat="${cat.id}"]`)
                    btn?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                  }}
                  style={{
                    whiteSpace: 'nowrap', flexShrink: 0,
                    padding: active ? '9px 22px' : '8px 18px',
                    borderRadius: '100px', border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-body)', fontWeight: 600,
                    fontSize: '0.82rem',
                    transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
                    background: active
                      ? 'linear-gradient(135deg, #E91E8C, #F5A623)'
                      : 'rgba(13,110,126,0.08)',
                    color: active ? '#fff' : '#094E5A',
                    boxShadow: active ? '0 6px 18px rgba(233,30,140,0.35)' : 'none',
                    transform: active ? 'scale(1.06)' : 'scale(1)',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  <CatIcon size={14} /> {cat.label}
                </button>
              )
            })}
          </div>

          {/* Fade right */}
          <div style={{
            position: 'absolute', right: '52px', top: 0, bottom: 0, width: '32px',
            background: 'linear-gradient(to left, rgba(255,248,240,0.97), transparent)',
            zIndex: 1, pointerEvents: 'none',
          }} />

          {/* Right arrow */}
          <button
            onClick={() => scrollTabs(1)}
            aria-label="Scroll derecha"
            style={{
              flexShrink: 0, width: '36px', height: '36px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(9,78,90,0.08)', border: 'none', borderRadius: '50%',
              cursor: 'pointer', margin: '8px 12px 8px 4px',
              color: '#094E5A', transition: 'background 0.2s',
              fontSize: '1.3rem', fontWeight: 'bold', lineHeight: 1,
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(9,78,90,0.18)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(9,78,90,0.08)'}
          >
            ›
          </button>
        </div>

        {/* Hint desliza - solo mobile */}
        <p style={{
          textAlign: 'center', margin: '0', paddingBottom: '5px',
          fontFamily: 'var(--font-body)', fontSize: '0.66rem',
          color: 'rgba(9,78,90,0.38)', letterSpacing: '0.04em',
        }}>
          ← Desliza para explorar categorías →
        </p>
      </div>

      {/* ── Grid ── */}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(32px, 5vw, 56px) 20px clamp(60px, 10vw, 100px)' }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: '32px', flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontFamily: 'var(--font-body)', color: '#888', fontSize: '0.9rem' }}>
            Mostrando <strong style={{ color: '#0D6E7E' }}>{filtered.length}</strong> platillos
          </p>
          {search && (
            <button
              onClick={() => setSearch('')}
              style={{
                background: 'none', border: '1.5px solid rgba(233,30,140,0.3)',
                color: '#C4157A', fontFamily: 'var(--font-body)', fontWeight: 600,
                fontSize: '0.82rem', padding: '5px 14px', borderRadius: '100px', cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: '6px',
              }}
            >
              <X size={13} /> Borrar búsqueda
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              background: 'rgba(13,110,126,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px',
            }}>
              <UtensilsCrossed size={32} color="#0D6E7E" />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#1a1a2e', marginBottom: '8px' }}>
              No encontramos ese platillo
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', color: '#888' }}>
              Intenta con otra búsqueda o explora todas las categorías
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(16px, 3vw, 24px)',
          }}>
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} onOpen={handleOpen} />
            ))}
          </div>
        )}
      </div>

      {/* ── Bottom CTA ── */}
      <div style={{
        background: 'linear-gradient(135deg, #094E5A, #0D6E7E)',
        padding: '60px 24px', textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.65)',
          fontSize: '0.9rem', marginBottom: '10px',
        }}>
          ¿Listo para pedir?
        </p>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          color: '#fff', margin: '0 0 24px',
        }}>
          ¡Ordena ahora y recibe lo mejor de Tía Petunia!
        </h3>
        <a
          href={`https://wa.me/523314436726?text=${encodeURIComponent('¡Hola Tía Petunia! 🌮 Me gustaría hacer un pedido')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: '#fff', fontFamily: 'var(--font-body)', fontWeight: 700,
            fontSize: '0.95rem', padding: '14px 36px', borderRadius: '100px',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(37,211,102,0.35)',
            transition: 'transform 0.25s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px) scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
        >
          Pedir por WhatsApp
        </a>
      </div>

      {selectedItem && <ItemModal item={selectedItem} onClose={handleClose} />}
    </div>
  )
}
