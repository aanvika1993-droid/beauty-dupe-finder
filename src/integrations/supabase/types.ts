export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          brand: string
          price: number
          image_url: string | null
          category: string
          subcategory: string | null
          description: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          brand: string
          price: number
          image_url?: string | null
          category: string
          subcategory?: string | null
          description?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          brand?: string
          price?: number
          image_url?: string | null
          category?: string
          subcategory?: string | null
          description?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          subcategories: string[]
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          subcategories?: string[]
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          subcategories?: string[]
          image_url?: string | null
          created_at?: string
        }
      }
      dupes: {
        Row: {
          id: string
          original_product_id: string
          dupe_product_id: string
          similarity_score: number
          savings_percent: number
          category: string
          total_votes: number
          avg_rating: number
          is_featured: boolean
          is_trending: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          original_product_id: string
          dupe_product_id: string
          similarity_score: number
          savings_percent: number
          category: string
          total_votes?: number
          avg_rating?: number
          is_featured?: boolean
          is_trending?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          original_product_id?: string
          dupe_product_id?: string
          similarity_score?: number
          savings_percent?: number
          category?: string
          total_votes?: number
          avg_rating?: number
          is_featured?: boolean
          is_trending?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      user_favorites: {
        Row: {
          id: string
          user_id: string
          dupe_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          dupe_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          dupe_id?: string
          created_at?: string
        }
      }
      reviews: {
        Row: {
          id: string
          dupe_id: string
          user_id: string
          rating: number
          comment: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          dupe_id: string
          user_id: string
          rating: number
          comment?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          dupe_id?: string
          user_id?: string
          rating?: number
          comment?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          username: string | null
          display_name: string | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          display_name?: string | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_dupes: {
        Args: {
          search_query: string
        }
        Returns: {
          id: string
          similarity_score: number
          savings_percent: number
          category: string
          total_votes: number
          avg_rating: number
          is_featured: boolean
          is_trending: boolean
          created_at: string
          original_id: string
          original_name: string
          original_brand: string
          original_price: number
          original_image: string
          dupe_id: string
          dupe_name: string
          dupe_brand: string
          dupe_price: number
          dupe_image: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

// Helper types for application use
export type Product = Database['public']['Tables']['products']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Dupe = Database['public']['Tables']['dupes']['Row']
export type UserFavorite = Database['public']['Tables']['user_favorites']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']
export type Profile = Database['public']['Tables']['profiles']['Row']

// Composite types for UI components
export interface ProductInfo {
  id: string
  name: string
  brand: string
  price: number
  image: string
}

export interface DupeWithProducts {
  id: string
  similarityScore: number
  savingsPercent: number
  category: string
  totalVotes: number
  avgRating: number
  isFeatured: boolean
  isTrending: boolean
  createdAt: string
  original: ProductInfo
  dupe: ProductInfo
}

export interface TrendingDupe {
  id: string
  rank: number
  original: { brand: string; name: string }
  dupe: { brand: string; name: string }
  savings: string
  votes: number
  rating: number
}

export interface ReviewWithProfile extends Review {
  profile: {
    display_name: string | null
    avatar_url: string | null
  } | null
}
