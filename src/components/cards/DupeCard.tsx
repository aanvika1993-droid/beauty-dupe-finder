import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useFavorites, useToggleFavorite } from "@/hooks/api/useFavorites";
import { useAuth } from "@/hooks/auth/useAuth";
import { useToast } from "@/hooks/use-toast";

interface Product {
  name: string;
  brand: string;
  price: number;
  image: string;
}

interface DupeCardProps {
  id: string;
  original: Product;
  dupe: Product;
  similarityScore: number;
  category: string;
  savingsPercent: number;
}

const DupeCard = ({
  id,
  original,
  dupe,
  similarityScore,
  category,
  savingsPercent,
}: DupeCardProps) => {
  const { user } = useAuth();
  const { data: favorites } = useFavorites();
  const toggleFavorite = useToggleFavorite();
  const { toast } = useToast();

  const isFavorite = favorites?.includes(id) ?? false;

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save favorites",
      });
      return;
    }

    try {
      await toggleFavorite.mutateAsync({ dupeId: id, isFavorite });
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not update favorite",
        variant: "destructive",
      });
    }
  };

  return (
    <Link
      to={`/dupe/${id}`}
      className="group block overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
    >
      {/* Images Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        {/* Two product images side by side */}
        <div className="absolute inset-0 flex">
          <div className="relative w-1/2 overflow-hidden">
            <img
              src={original.image}
              alt={original.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20" />
          </div>
          <div className="relative w-1/2 overflow-hidden">
            <img
              src={dupe.image}
              alt={dupe.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          </div>
        </div>

        {/* Center arrow indicator */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background shadow-lg">
            <ArrowRight className="h-4 w-4 text-gold" />
          </div>
        </div>

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          <span className="rounded-full bg-gold px-2.5 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
            {similarityScore}% Match
          </span>
          <span className="rounded-full bg-sage/90 px-2.5 py-1 text-xs font-medium text-white shadow-sm">
            Save {savingsPercent}%
          </span>
        </div>

        {/* Favorite button */}
        <button
          onClick={handleFavoriteClick}
          disabled={toggleFavorite.isPending}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 shadow-sm transition-all hover:bg-background hover:shadow-md disabled:opacity-50"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              isFavorite ? "fill-rose text-rose" : "text-muted-foreground"
            )}
          />
        </button>

        {/* Category tag */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Original Product */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">{original.brand}</p>
            <p className="truncate text-sm font-medium text-foreground">{original.name}</p>
          </div>
          <span className="text-sm font-semibold text-muted-foreground line-through">
            ${original.price}
          </span>
        </div>

        {/* Divider with arrow */}
        <div className="my-3 flex items-center gap-2">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-gold font-medium">DUPE</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Dupe Product */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-xs text-muted-foreground">{dupe.brand}</p>
            <p className="truncate text-sm font-medium text-foreground">{dupe.name}</p>
          </div>
          <span className="text-sm font-bold text-gold">
            ${dupe.price}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default DupeCard;
