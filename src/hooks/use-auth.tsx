
"use client";

import { useEffect } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from './use-toast';

const ADMIN_UID = "SoeZElRyJTPu7771IemAxNp8PtZ2";

export function useAuth(Component: React.ComponentType<any>) {

  return function AuthenticatedComponent(props: any) {
    const [user, loading, error] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const router = useRouter();
    const { toast } = useToast();

    useEffect(() => {
      if (loading) return;

      if (!user) {
        router.push('/admin/login');
        return;
      }

      if (user.uid !== ADMIN_UID) {
        const handleSignOut = async () => {
          await signOut();
          toast({
            variant: "destructive",
            title: "অননুমোদিত প্রবেশ",
            description: "আপনার এই পৃষ্ঠাটি দেখার অনুমতি নেই।",
          });
          router.push('/');
        }
        handleSignOut();
      }
    }, [user, loading, router, toast, signOut]);

    if (loading || !user || user.uid !== ADMIN_UID) {
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

    if (user && user.uid === ADMIN_UID) {
      return <Component {...props} />;
    }

    return null;
  };
}
