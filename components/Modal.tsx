'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => router.back()}>
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
                <button 
                    className="absolute top-4 right-4 text-white text-2xl hover:cursor-pointer" 
                    onClick={() => router.back()}
                >
                    &times;
                </button>

                {children}
            </div>
        </div>
    )
}