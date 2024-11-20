'use client';

import { FC } from "react"
import { ReactQueryProvider } from "@/providers/react-query/provider";
import { RecoilProvider } from "@/providers/recoil/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <RecoilProvider>
        <ReactQueryProvider>
          <TooltipProvider delayDuration={50}>
            {children}
          </TooltipProvider>
        </ReactQueryProvider>
      </RecoilProvider>
      <Toaster />
      <ProgressBar
        height="4px"
        color="#000000"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}

export default Providers