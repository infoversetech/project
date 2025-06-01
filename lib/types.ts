export interface PropertyData {
  id: string;
  title: string;
  price: string;
  pricePerSqFt: string;
  propertyType: string; // Consider using a string literal union like 'Apartment' | 'Villa' | 'Independent House'
  transactionType: string; // Consider using a string literal union like 'Sale' | 'Rent' | 'Resale'
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  description: string;
  carpetArea: number;
  builtUpArea: number;
  superBuiltUpArea: number;
  balconyArea?: string;
  furnishingStatus: string; // Consider using a string literal union like 'Furnished' | 'Semi-Furnished' | 'Unfurnished'
  ageOfProperty: string;
  possessionStatus: string; // Consider using a string literal union like 'Ready to Move' | 'Under Construction'
  totalFloors: number;
  floorNumber: number;
  facing: string; // Consider using a string literal union like 'North' | 'East' | 'West' | 'South' | 'North-East' etc.
  ownershipType: string; // Consider using a string literal union like 'Freehold' | 'Leasehold'
  maintenance: number;
  amenities: string[];
  keyFeatures: string[];
  coveredParking: number;
  openParking: number;
  images: string[];
  location: {
    address: string;
    city: string;
    state: string;
    pinCode: string;
    landmark?: string;
    locality: string;
    latitude?: number;
    longitude?: number;
  };
  owner: {
    name: string;
    type: string;
    phone: string;
    email: string;
    profileImage: string;
  };
  listedBy: string; // Consider using a string literal union like 'Owner' | 'Agent' | 'Builder'
  listedOn: string;
  reraNumber?: string;
}