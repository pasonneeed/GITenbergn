import Cancel from '@assets/icons/bigcancel.svg?react';
import api from '@hook/api';
import { useEffect, useState } from 'react';

interface ModalProps {
  onClose: (selectedAddress?: string, regionCode?: string) => void;
}

interface Region {
  regionCode: string | null;
  regionName: string;
}

const AddressModal = ({ onClose }: ModalProps) => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [regionList, setRegionList] = useState<Region[]>([]);
  const [cityMap, setCityMap] = useState<Record<string, string[]>>({});

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await api.get<{ data: Region[] }>('/v1/region/all');
      const regions = response.data.data;

      const map: Record<string, string[]> = {};
      regions.forEach(({ regionName }) => {
        const [city, district] = regionName.trim().split(/\s+/);
        if (map[city]) {
          if (!map[city].includes(district)) {
            map[city].push(district);
          }
        } else {
          map[city] = [district];
        }
      });

      setRegionList(regions);
      setCityMap(map);
    };

    fetchRegions();
  }, []);

  const handleClose = () => {
    if (selectedCity && selectedDistrict) {
      const fullName = `${selectedCity} ${selectedDistrict}`;
      const match = regionList.find((r) => r.regionName === fullName);
      const regionCode = match?.regionCode ?? null;
      onClose(fullName, regionCode ?? undefined);
    } else {
      onClose();
    }
  };

  const filteredDistricts =
    selectedCity && cityMap[selectedCity]
      ? cityMap[selectedCity].map((district) => ({
          city: selectedCity,
          district,
        }))
      : Object.entries(cityMap).flatMap(([city, districts]) =>
          districts.map((district) => ({ city, district }))
        );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex h-[700px] w-[600px] flex-col items-center overflow-hidden rounded-3xl bg-white">
        <div className="relative w-full items-center justify-center border-b border-gray-300 py-[22px]">
          <div className="text-center text-gray-900 font-T03-B">
            거주지 선택
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            <Cancel className="h-[18px] w-[18px]" />
          </button>
        </div>

        <div className="flex w-full overflow-hidden">
          <div className="w-full max-w-[235px] cursor-pointer overflow-y-auto">
            {Object.keys(cityMap).map((city) => (
              <div
                key={city}
                className={`flex h-[74px] items-center justify-start border-b border-r border-gray-300 px-6 py-[10px] hover:bg-white hover:text-purple-500 ${
                  selectedCity === city
                    ? 'bg-white text-purple-500 font-B01-SB'
                    : 'bg-gray-100 text-gray-400 font-B01-M'
                }`}
                onClick={() => {
                  setSelectedCity(city);
                  setSelectedDistrict(null);
                }}
              >
                {city}
              </div>
            ))}
          </div>

          <div className="w-full overflow-y-auto">
            {filteredDistricts.map(({ city, district }) => {
              const fullName = `${city} ${district}`;
              const isSelected =
                selectedCity === city && selectedDistrict === district;

              return (
                <div
                  key={fullName}
                  className={`flex h-[74px] cursor-pointer items-center justify-start border-b border-gray-300 px-6 py-[10px] hover:bg-purple-100 hover:text-purple-500 ${
                    isSelected
                      ? 'bg-purple-100 text-purple-500 font-B01-SB'
                      : 'bg-white text-gray-900 font-B01-M'
                  }`}
                  onClick={() => {
                    setSelectedCity(city);
                    setSelectedDistrict(district);
                  }}
                >
                  {district}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
