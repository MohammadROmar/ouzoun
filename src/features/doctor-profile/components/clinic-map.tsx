'use client';

import dynamic from 'next/dynamic';

import { Clinic } from '@/core/models/clinic';

const Map = dynamic(() => import('./map'), { ssr: false });

export type ClinicMapProps = { clinic: Clinic };

export default function ClinicMap({ clinic }: ClinicMapProps) {
  return (
    <section className="bg-gray card-shadow relative mt-4 h-96 overflow-hidden rounded-xl">
      <Map
        latitude={clinic.latitude}
        longtitude={clinic.longtitude}
        markerLabel={clinic.name}
      />
    </section>
  );
}
