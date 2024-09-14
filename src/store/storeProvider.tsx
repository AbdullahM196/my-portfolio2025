"use client";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Provider } from "react-redux";
import { store, AppStore } from "./store";
import Loading from "@/components/loading/Loading";
export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = store();
  }
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  return isMount ? (
    <Provider store={storeRef.current}>{children}</Provider>
  ) : (
    <div className="flex justify-center items-center w-screen min-h-screen bg-red-200">
      <Loading />
    </div>
  );
}
