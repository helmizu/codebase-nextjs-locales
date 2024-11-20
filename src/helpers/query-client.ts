import { QueryClient } from "@tanstack/query-core";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useUpdate from "@/hooks/use-update";

export const queryClientConfig = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      gcTime: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: true,
      retryOnMount: true,
    }
  }
})

export const useDataQueryClient = <T extends (..._args: any) => any>(service: { call: T, key: string }) => {
  const client = useQueryClient();
  const update = useUpdate()

  useEffect(() => {
    const unsubscribe = client.getQueryCache().subscribe((result) => {
      if (result.query.queryHash.includes(service.key) && result.type !== 'observerOptionsUpdated') {
        update()
      }
    })
    return unsubscribe
  }, [])

  const result = client.getQueryState<Awaited<ReturnType<typeof service['call']>>['data']['data']>([service.key])! || {}
  // console.log(result)
  const isFetching = result.fetchStatus === 'fetching'
  const isPaused = result.fetchStatus === 'paused'
  const isPending = result.status === 'pending'
  const isError = result.status === 'error'
  return {
    ...result,
    data: result.data,
    status: result.status,
    isPending: result.status === 'pending',
    isSuccess: result.status === 'success',
    isError: result.status === 'error',
    dataUpdatedAt: result.dataUpdatedAt,
    failureCount: result.fetchFailureCount,
    failureReason: result.fetchFailureReason,
    errorUpdateCount: result.errorUpdateCount,
    isFetched: result.dataUpdateCount > 0 || result.errorUpdateCount > 0,
    isFetching,
    isRefetching: isFetching && !isPending,
    isLoadingError: isError && result.dataUpdatedAt === 0,
    isPaused,
    isRefetchError: isError && result.dataUpdatedAt !== 0
  }
}


export const refetchQueries = (...queryKeys: string[]) => {
  for (const queryKey of queryKeys) {
    queryClientConfig.refetchQueries({
      queryKey: [queryKey],
      exact: false
    })
  }
}