import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Phone } from "lucide-react";

const OfficeCard = React.memo(({ office }) => (
  <div className="flex items-start gap-2">
    <Phone className="mt-1 text-blue-400 shrink-0" size={20} />
    <div>
      <p className="font-bold">{office.name}</p>
      <p className="leading-relaxed whitespace-pre-line">
        {office.address}
        <br />
        {office.city}
      </p>
    </div>
  </div>
));

const RegionGroup = React.memo(({ region }) => (
  <div className="mb-12">
    <h4 className="text-xl font-semibold mb-6">{region.name}</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
      {region.office.map((office) => (
        <div key={office.id}>
          <OfficeCard office={office} />
        </div>
      ))}
    </div>
    {region.name === "Kantor Pusat" && region.office.length > 0 && region.office[0].phone && (
      <div className="mt-6">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0b7ba6] rounded-full">
          <Phone className="text-xl" />
          <span className="font-bold">Hotline {region.office[0].phone}</span>
        </div>
      </div>
    )}
  </div>
));

export default function Office() {
  const [state, setState] = useState({
    regions: [],
    isLoading: true,
    error: null,
  });

  const fetchOffices = useCallback(async (signal) => {
    try {
      const { data } = await axios.get(route("office.api"), { signal });
      setState({ regions: data.data, isLoading: false, error: null });
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error("Error fetching offices:", error);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Gagal memuat data kantor. Silakan coba lagi.",
        }));
      }
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    fetchOffices(abortController.signal);
    return () => abortController.abort();
  }, [fetchOffices]);

  return (
    <div className="bg-[#1e5779] text-white py-12">
      <div className="container px-4 mx-auto lg:px-8 max-w-7xl">
        {state.isLoading ? (
          <p className="text-center">Memuat data kantor...</p>
        ) : state.error ? (
          <p className="text-center text-red-300">{state.error}</p>
        ) : state.regions.length === 0 ? (
          <p className="text-center">Tidak ada data kantor.</p>
        ) : (
          state.regions.map((region) => <RegionGroup key={region.id} region={region} />)
        )}
      </div>
    </div>
  );
}