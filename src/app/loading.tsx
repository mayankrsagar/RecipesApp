import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-4">
      <Skeleton className="h-8 w-1/2" />
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-6 w-3/4" />
    </div>
  );
};

export default Loading;
