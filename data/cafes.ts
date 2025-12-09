import { Cafe } from '../types';

// Using Istanbul, Turkey coordinates as default
export const cafes: Cafe[] = [
  {
    id: '1',
    name: 'Brew House Cafe',
    coordinates: {
      latitude: 41.0082,
      longitude: 28.9784
    },
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Cozy cafe with excellent pour-over coffee options.'
  },
  {
    id: '2',
    name: 'Artisan Coffee',
    coordinates: {
      latitude: 41.0102,
      longitude: 28.9762
    },
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Specialty coffee shop with a relaxed atmosphere.'
  },
  {
    id: '3',
    name: 'Coffee Republic',
    coordinates: {
      latitude: 41.0062,
      longitude: 28.9802
    },
    image: 'https://images.unsplash.com/photo-1513267048331-5611cad62e41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Modern cafe serving coffee and pastries.'
  },
  {
    id: '4',
    name: 'Cafe Noir',
    coordinates: {
      latitude: 41.0122,
      longitude: 28.9744
    },
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'French-inspired cafe with a vintage ambiance.'
  },
  {
    id: '5',
    name: 'Bean & Gone',
    coordinates: {
      latitude: 41.0042,
      longitude: 28.9824
    },
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    description: 'Trendy coffee shop with locally roasted beans.'
  }
];

// Initial map region (centered on Istanbul)
export const initialRegion = {
  latitude: 41.0082,
  longitude: 28.9784,
  latitudeDelta: 0.0222,
  longitudeDelta: 0.0121,
};
