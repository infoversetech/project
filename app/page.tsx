import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <HomeIcon className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Regaa Property Listing</h1>
        <p className="text-muted-foreground mb-8">
          Explore our futuristic property listing page with video walkthroughs, VR previews, and AI-powered features.
        </p>
        
        <Link href="/property/123">
          <Button size="lg" className="w-full">
            View Demo Property
          </Button>
        </Link>
      </div>
    </main>
  );
}