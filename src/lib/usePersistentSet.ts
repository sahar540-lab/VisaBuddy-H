import { useEffect, useState } from "react";

export function usePersistentSet(storageKey: string) {
  const [savedItems, setSavedItems] = useState<Set<string>>(() => {
    try {
      const savedText = localStorage.getItem(storageKey);
      const parsedList = savedText ? JSON.parse(savedText) : [];
      return new Set<string>(Array.isArray(parsedList) ? parsedList : []);
    } catch {
      return new Set<string>();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(Array.from(savedItems)));
    } catch {
      // Storage may be blocked or full. The app still works, it just won't save.
    }
  }, [storageKey, savedItems]);

  return [savedItems, setSavedItems] as const;
}