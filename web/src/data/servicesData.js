import { FaHotel,FaUsers,FaMapMarkerAlt,FaCheckCircle, FaBus, FaMapMarkedAlt, FaUtensils, FaWifi, FaParking, FaConciergeBell, FaClock, FaCalendarAlt, FaLanguage } from 'react-icons/fa';
import hotel from '../assets/hotel4.jpg';
import hotel1 from '../assets/hotel1.jpg';
import bus2 from '../assets/transport2.jpg';
import bus3 from '../assets/transport3.jpg';
import hotel3 from '../assets/hotel3.jpg';
import bus from '../assets/transport.jpg';
import guide from '../assets/guid.jpg';
import guide1 from '../assets/guid1.jpg';
import guide2 from '../assets/guid2.jpg';
import restaurant from '../assets/restaurant.jpg';
import restaurant1 from '../assets/restaurant1.jpg';
import restaurant2 from '../assets/restaurant2.jpg';
const servicesData = [
  {
    id: 'hotels',
    icon: FaHotel,
    title: 'Hotels & Accommodation',
    description: 'Access a wide network of verified hotels and accommodation options across the globe.',
    details: 'Our platform offers a comprehensive selection of hotels, resorts, and short-term rentals. We partner with top-rated establishments to ensure quality and comfort for your clients. Features include real-time availability, group booking discounts, and dedicated support.',
    features: ['Real-time Availability', 'Group Booking Discounts', 'Verified Partner Network', '24/7 Support'],
    image: hotel,
    amenities: [
      { icon: FaWifi, name: 'Free Wi-Fi' },
      { icon: FaParking, name: 'Free Parking' },
      { icon: FaConciergeBell, name: '24h Reception' },
      { icon: FaClock, name: 'Late Check-out' },
      { icon: FaCalendarAlt, name: 'Flexible Booking' },
    ],
    gallery: [hotel,hotel1,hotel3],
    booking: {
      priceRange: '$120 - $250',
      rating: 4.8,
      reviews: 127,
    },
    specifications: [
      { label: 'Type', value: 'Heritage Palace Hotel' },
      { label: 'Rooms', value: '45 Rooms' },
      { label: 'Check-in', value: '2:00 PM' },
      { label: 'Check-out', value: '12:00 PM' },
      { label: 'Languages', value: 'English, French, Arabic' },
    ],
  },
  {
    id: 'transportation',
    icon: FaBus,
    title: 'Transportation Services',
    description: 'Reliable and comfortable transportation solutions for all group sizes and destinations.',
    details: 'We provide a range of transportation options, from luxury sedans and minivans to full-sized coaches. All vehicles are regularly maintained and driven by professional, licensed drivers. We cover airport transfers, city tours, and inter-city travel.',
    features: ['Luxury Sedans & Coaches', 'Licensed Professional Drivers', 'Airport Transfers', 'Inter-City Travel'],
    image: bus,
    amenities: [
      { icon: FaWifi, name: 'On-board Wi-Fi' },
      { icon: FaParking, name: 'Luggage Space' },
      { icon: FaClock, name: '24/7 Availability' },
      { icon: FaLanguage, name: 'Multi-lingual Drivers' },
    ],
    gallery: [bus,bus2,bus3],
    booking: {
      priceRange: '$50 - $300',
      rating: 4.7,
      reviews: 98,
    },
    specifications: [
      { label: 'Vehicle Type', value: 'Luxury Coach' },
      { label: 'Capacity', value: '50 Passengers' },
      { label: 'Insurance', value: 'Full Coverage' },
      { label: 'Availability', value: 'Year-round' },
    ],
  },
  {
    id: 'tour-guides',
    icon: FaMapMarkedAlt,
    title: 'Tour Guides',
    description: 'Licensed, experienced tour guides with deep knowledge of local history and culture.',
    details: 'Our network includes expert, multi-lingual tour guides specializing in history, culture, and adventure. They are licensed professionals committed to providing enriching and memorable experiences. You can book guides for half-day, full-day, or multi-day tours.',
    features: ['Multi-lingual Experts', 'Licensed & Certified', 'Custom Tour Planning', 'Local Cultural Insight'],
    image: guide,
    amenities: [
      { icon: FaLanguage, name: 'Multiple Languages' },
      { icon: FaClock, name: 'Flexible Hours' },
      { icon: FaUsers, name: 'Group Discounts' },
      { icon: FaMapMarkerAlt, name: 'Local Expertise' },
    ],
    gallery: [guide,guide1,guide2],
    booking: {
      priceRange: '$100 - $500',
      rating: 4.9,
      reviews: 155,
    },
    specifications: [
      { label: 'Specialty', value: 'History & Culture' },
      { label: 'Duration', value: 'Half-day/Full-day' },
      { label: 'Languages', value: 'English, Spanish, German' },
      { label: 'Certification', value: 'Local Tourism Board' },
    ],
  },
  {
    id: 'restaurants',
    icon: FaUtensils,
    title: 'Restaurants & Dining',
    description: 'Curated selection of restaurants offering authentic local and international cuisine.',
    details: 'From fine dining to authentic local eateries, we offer exclusive access to a curated list of restaurants. Our partners can secure reservations, arrange private dining experiences, and cater to specific dietary requirements for large groups.',
    features: ['Exclusive Reservations', 'Private Dining Options', 'Catering for Large Groups', 'Diverse Cuisine Selection'],
    image: restaurant,
    amenities: [
      { icon: FaWifi, name: 'Free Wi-Fi' },
      { icon: FaParking, name: 'Valet Parking' },
      { icon: FaUtensils, name: 'Private Dining' },
      { icon: FaCheckCircle, name: 'Dietary Options' },
    ],
    gallery: [restaurant,restaurant1,restaurant2],
    booking: {
      priceRange: '$30 - $150',
      rating: 4.6,
      reviews: 88,
    },
    specifications: [
      { label: 'Cuisine', value: 'International/Local' },
      { label: 'Capacity', value: '150 Seats' },
      { label: 'Reservation', value: 'Required' },
      { label: 'Dress Code', value: 'Smart Casual' },
    ],
  },
];

export default servicesData;
