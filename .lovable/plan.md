
# DupeFinder - Beauty Dupe Discovery Platform

## Vision
A luxury editorial-style platform that helps beauty enthusiasts find affordable alternatives to high-end skincare and makeup products, powered by AI ingredient analysis and a vibrant community.

---

## Core Pages & User Experience

### 1. Homepage
- Hero section with elegant editorial photography and compelling tagline
- Featured dupes of the week (curated picks)
- Search bar prominently placed for instant product lookup
- Categories navigation (Skincare, Makeup subcategories)
- Trending dupes from the community

### 2. Search & Browse Experience
- Smart search by product name, brand, or category
- Filter by:
  - Category (Skincare: serums, moisturizers, cleansers / Makeup: lipstick, foundation, mascara)
  - Price range of the dupe
  - Country availability (auto-detected, adjustable)
  - Similarity score threshold
- Beautiful product cards showing original → dupe comparison

### 3. Product Comparison Page
- Side-by-side elegant comparison layout
- **For Skincare**: Ingredient overlap percentage, key active ingredients highlighted
- **For Makeup**: Shade match, texture comparison (matte/gloss/shimmer), finish
- Shopping links for both products
- Community reviews and ratings
- "Report better dupe" option

### 4. User Dashboard
- Saved favorites collection
- Submitted dupes and their approval status
- Wishlist for products they want dupes for
- Activity feed and notifications

### 5. Dupe Submission Flow
- Step-by-step form to suggest a dupe
- Upload comparison photos/swatches
- Add ingredient lists for verification
- Community voting on accuracy before admin approval

### 6. Community Features
- User profiles with dupe discovery stats
- Reviews and ratings on dupe accuracy
- Comments and discussions
- Leaderboard for top contributors

---

## AI-Powered Dupe Matching

### How It Works
1. **Product Database**: Store original products with ingredients, shade info, textures
2. **AI Analysis**: When adding products, AI compares:
   - Skincare: Identifies top concentration ingredients, calculates overlap percentage
   - Makeup: Analyzes color values, texture descriptors, finish type
3. **Similarity Scoring**: Generate a confidence score for each potential match
4. **Human Verification**: High-scoring AI suggestions reviewed by community/admin

### Ingredient Data Strategy
- Primary: Pull from Open Beauty Facts API and similar databases
- Fallback: Manual entry with ingredient parser
- AI assists in normalizing ingredient names across brands

---

## Country & Shopping Links
- Users set their country preference in profile
- Display only dupes available in their region
- Aggregate shopping links from major retailers per country
- Affiliate links integration opportunity for monetization

---

## Design Direction (Luxury Editorial)
- Elegant serif fonts for headlines, clean sans-serif for body
- Sophisticated color palette (warm neutrals, soft gold accents, rich darks)
- Magazine-style layouts with editorial photography focus
- Generous whitespace and refined typography
- Subtle animations that feel premium
- Product cards with elegant hover states

---

## Technical Foundation

### Backend Requirements
- **Database**: Products, ingredients, dupes, users, reviews, submissions
- **Authentication**: Email/password with optional social login
- **AI Integration**: For ingredient comparison and shade matching
- **Edge Functions**: For AI processing and external API calls

### Data Model Overview
- Products table (with category, brand, price, country availability)
- Ingredients table (normalized ingredient names)
- Dupes table (linking original → alternative with similarity scores)
- Users & Profiles
- Reviews & Ratings
- Submissions (user-suggested dupes pending approval)

---

## MVP Scope (Phase 1)
1. ✅ Homepage with featured dupes and search
2. ✅ Browse by category with filters
3. ✅ Product comparison pages
4. ✅ User accounts (signup, login, profiles)
5. ✅ Save favorites functionality
6. ✅ Initial curated database of 50-100 verified dupes
7. ✅ Country-based filtering

## Phase 2 (Post-Launch)
- User dupe submissions and voting
- AI-powered dupe suggestion engine
- Shopping link aggregation
- Community leaderboards
- Mobile app considerations

