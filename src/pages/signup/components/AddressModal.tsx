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

  useEffect(() => {
    const fetchRegions = async () => {
      const res = await api.get<{ data: Region[] }>('/v1/region/all');
      setRegionList(res.data.data);
      console.log(res.data.data);
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
            {[
              //임시
              '서울',
              '경기',
              '인천',
              '부산',
              '대구',
              '대전',
              '광주',
              '울산',
              '천안',
            ].map((city, index) => (
              <div
                key={index}
                className={`flex h-[74px] max-w-[235px] cursor-pointer items-center justify-start border-b border-r border-gray-300 px-6 py-[10px] hover:bg-white hover:text-purple-500 ${
                  selectedCity === city
                    ? 'bg-white text-purple-500 font-B01-SB'
                    : 'bg-gray-100 text-gray-400 font-B01-M'
                }`}
                onClick={() => setSelectedCity(city)}
              >
                {city}
              </div>
            ))}
          </div>

          <div className="w-full overflow-y-auto">
            {[
              //임시
              '강남구',
              '강동구',
              '강북구',
              '강서구',
              '관악구',
              '광진구',
              '구로구',
              '금천구',
              '금천구',
            ].map((district, index) => (
              <div
                key={index}
                className={`flex h-[74px] max-w-[365px] cursor-pointer items-center justify-start border-b border-gray-300 px-6 py-[10px] hover:bg-purple-100 hover:text-purple-500 ${
                  selectedDistrict === district
                    ? 'bg-purple-100 text-purple-500 font-B01-SB'
                    : 'bg-white text-gray-900 font-B01-M'
                }`}
                onClick={() => setSelectedDistrict(district)}
              >
                {district}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
