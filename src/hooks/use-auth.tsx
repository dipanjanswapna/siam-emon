"use client";

import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';

export function useAuth(Component: React.ComponentType<any>) {

  return function AuthenticatedComponent(props: any) {
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/admin/login');
      }
    }, [user, loading, router]);

    if (loading) {
      return (
        <div className="p-8 space-y-4">
            <Skeleton className="h-12 w-1/2" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
        </div>
      );
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (user) {
      return <Component {...props} />;
    }

    return null;
  };
}
