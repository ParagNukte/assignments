// src/types/product.types.ts

export interface ProductImage {
    url: string;
    alt_text: string;
  }
  
  export interface ProductVariant {
    sku_suffix: string;
    color?: string; // Optional if not all variants have color
    size?: string;  // Optional if not all variants have size
    stock_quantity: number;
    price?: number; // If variant price can differ from main product price
  }
  
  export interface ProductRating {
    average: number;
    count: number;
  }
  
  export interface ProductAttributes {
    material?: string;
    fit?: string;
    sleeve_length?: string;
    neckline?: string;
    care_instructions?: string;
    connectivity?: string;
    battery_life?: string;
    noise_cancellation?: string;
    driver_size?: string;
    weight?: string;
    microphone?: string;
    origin?: string;
    roast_level?: string;
    bean_type?: string;
    certification?: string;
    flavor_notes?: string;
    light_source?: string;
    color_temperature?: string;
    brightness_levels?: number; // Or string
    power_input?: string;
    features?: string; // Could be string[] if multiple
    dimensions?: string;
    // Add any other attributes you expect
    [key: string]: any; // Allows for other dynamic attributes
  }
  
  export interface Product {
    id: any;
    name: string;
    category: string;
    subcategory?: string; // Optional
    brand: string;
    description: string;
    price: number;
    currency: string;
    sku: string;
    stock_quantity: number;
    images: ProductImage[];
    variants?: ProductVariant[]; // Optional
    attributes?: ProductAttributes; // Optional
    ratings?: ProductRating;    // Optional
    tags?: string[];            // Optional
    date_added?: string;        // Or Date
    last_updated?: string;      // Or Date
    is_featured?: boolean;      // Optional
    on_sale?: boolean;          // Optional
    sale_price?: number | null; // Optional
  }