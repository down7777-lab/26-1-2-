import React, { useState } from 'react';
import { CONTINENTS_DATA, ContinentInfo, CountryInfo, DestinationInfo } from '../data/travelData';
import { Compass, ArrowRight, ArrowLeft, Check, Sparkles, MapPin, Utensils } from 'lucide-react';

interface Step1ExploreProps {
  initialSelectedData?: {
    continent: string;
    country: string;
    countryEn: string;
    destination: string;
    destinationEn: string;
    attractions: Array<{ name: string; nameEn: string; desc: string }>;
    foods: Array<{ name: string; nameEn: string; desc: string }>;
  } | null;
  onSelectComplete: (selected: {
    continent: string;
    country: string;
    countryEn: string;
    destination: string;
    destinationEn: string;
    attractions: Array<{ name: string; nameEn: string; desc: string }>;
    foods: Array<{ name: string; nameEn: string; desc: string }>;
  }) => void;
}

export const Step1Explore: React.FC<Step1ExploreProps> = ({
  initialSelectedData,
  onSelectComplete
}) => {
  // Find initial selections if already chosen
  const initialContinent = CONTINENTS_DATA.find(c => c.name === initialSelectedData?.continent) || null;
  const initialCountry = initialContinent?.countries.find(c => c.name === initialSelectedData?.country) || null;
  const initialDest = initialCountry?.destinations.find(d => d.name === initialSelectedData?.destination) || null;

  const [selectedContinent, setSelectedContinent] = useState<ContinentInfo | null>(initialContinent);
  const [selectedCountry, setSelectedCountry] = useState<CountryInfo | null>(initialCountry);
  const [selectedDestination, setSelectedDestination] = useState<DestinationInfo | null>(initialDest);

  // Sub-step: 1 = continent, 2 = country (10), 3 = destination (5) & info
  const currentSubStep = !selectedContinent ? 1 : !selectedCountry ? 2 : 3;

  const handleContinentClick = (c: ContinentInfo) => {
    setSelectedContinent(c);
    setSelectedCountry(null);
    setSelectedDestination(null);
  };

  const handleCountryClick = (ct: CountryInfo) => {
    setSelectedCountry(ct);
    setSelectedDestination(ct.destinations[0] || null);
  };

  const handleDestinationClick = (dest: DestinationInfo) => {
    setSelectedDestination(dest);
  };

  // Region-specific attractions & foods (with country fallback if needed)
  const activeAttractions = (selectedDestination?.attractions && selectedDestination.attractions.length > 0)
    ? selectedDestination.attractions
    : (selectedCountry?.attractions || []);

  const activeFoods = (selectedDestination?.foods && selectedDestination.foods.length > 0)
    ? selectedDestination.foods
    : (selectedCountry?.foods || []);

  const handleConfirmAndProceed = () => {
    if (!selectedContinent || !selectedCountry || !selectedDestination) return;

    onSelectComplete({
      continent: selectedContinent.name,
      country: selectedCountry.name,
      countryEn: selectedCountry.nameEn,
      destination: selectedDestination.name,
      destinationEn: selectedDestination.nameEn,
      attractions: activeAttractions.map(a => ({
        name: a.name,
        nameEn: a.nameEn,
        desc: a.desc
      })),
      foods: activeFoods.map(f => ({
        name: f.name,
        nameEn: f.nameEn,
        desc: f.desc
      }))
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Step Header */}
      <div className="bg-gradient-to-r from-sky-50 via-indigo-50 to-purple-50 rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-xs">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 bg-white text-indigo-700 font-bold px-3 py-1 rounded-full text-xs shadow-xs mb-3 border border-indigo-100">
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            STEP 1 · 3단계 해외 여행지 탐색
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            내가 꿈꾸는 해외 여행지는 어디인가요?
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            대륙을 선택하고, 10개 대표 국가 중 한 곳을 고른 뒤, 5개 주요 도시와 관광지·먹거리 정보를 살펴보세요.
          </p>
        </div>

        {/* Breadcrumb Steps */}
        <div className="flex items-center gap-2 mt-6 flex-wrap">
          <button
            onClick={() => {
              setSelectedContinent(null);
              setSelectedCountry(null);
              setSelectedDestination(null);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              currentSubStep === 1
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>1단계: 대륙 선택</span>
            {selectedContinent && <span className="text-indigo-200 font-normal">({selectedContinent.name})</span>}
          </button>

          <span className="text-slate-300 font-bold">➔</span>

          <button
            onClick={() => {
              if (selectedContinent) {
                setSelectedCountry(null);
                setSelectedDestination(null);
              }
            }}
            disabled={!selectedContinent}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              currentSubStep === 2
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>2단계: 대표 국가 (10개국)</span>
            {selectedCountry && <span className="text-indigo-200 font-normal">({selectedCountry.name})</span>}
          </button>

          <span className="text-slate-300 font-bold">➔</span>

          <button
            disabled={!selectedCountry}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
              currentSubStep === 3
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>3단계: 도시 & 명소·먹거리 정보</span>
            {selectedDestination && <span className="text-indigo-200 font-normal">({selectedDestination.name})</span>}
          </button>
        </div>
      </div>

      {/* SUB-STEP 1: CONTINENT SELECTION */}
      {currentSubStep === 1 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>🌏</span>
              <span>가고 싶은 대륙을 골라보세요 (6개 대륙)</span>
            </h2>
            <span className="text-xs text-slate-500">카드를 클릭하면 대표 10개국이 열립니다</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTINENTS_DATA.map((continent) => (
              <button
                key={continent.id}
                onClick={() => handleContinentClick(continent)}
                className="group p-5 bg-white rounded-2xl border-2 border-slate-200 hover:border-indigo-500 hover:shadow-lg transition text-left cursor-pointer relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{continent.emoji}</span>
                  <span className="text-xs font-bold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full border border-indigo-100">
                    대표 10개국 보기
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition font-display">
                  {continent.name}{' '}
                  <span className="text-xs text-slate-400 font-normal">({continent.nameEn})</span>
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                  {continent.description}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-indigo-600 font-bold">
                  <span>국가 목록 탐색하기</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* SUB-STEP 2: 10 COUNTRIES SELECTION */}
      {currentSubStep === 2 && selectedContinent && (
        <div className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <button
                onClick={() => setSelectedContinent(null)}
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 mb-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                대륙 다시 선택하기
              </button>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>{selectedContinent.emoji}</span>
                <span>{selectedContinent.name} 대표 10개국</span>
              </h2>
            </div>
            <span className="text-xs text-indigo-700 bg-indigo-50 font-semibold px-3 py-1 rounded-full border border-indigo-100">
              여행하고 싶은 나라 1곳을 클릭하세요!
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {selectedContinent.countries.map((country) => (
              <button
                key={country.id}
                onClick={() => handleCountryClick(country)}
                className="group p-4 bg-white rounded-2xl border-2 border-slate-200 hover:border-indigo-500 hover:shadow-md transition text-center cursor-pointer flex flex-col items-center justify-between h-44"
              >
                <span className="text-4xl my-auto group-hover:scale-110 transition-transform">
                  {country.flag}
                </span>
                <div className="w-full">
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-indigo-600 transition">
                    {country.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {country.nameEn}
                  </p>
                  <span className="inline-block mt-2 text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                    5개 대표 여행지
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* SUB-STEP 3: 5 DESTINATIONS & TOURIST/FOOD INFO */}
      {currentSubStep === 3 && selectedCountry && (
        <div className="space-y-6">
          {/* Country Back & Switch */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <button
              onClick={() => {
                setSelectedCountry(null);
                setSelectedDestination(null);
              }}
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              다른 국가 선택하기
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{selectedCountry.flag}</span>
              <span className="text-base font-bold text-slate-900">
                {selectedCountry.name} ({selectedCountry.nameEn})
              </span>
            </div>
          </div>

          {/* 5 Representative Destinations Selector */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{selectedCountry.name}의 대표 여행지 5곳 중 가고 싶은 곳을 선택하세요:</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {selectedCountry.destinations.map((dest) => {
                const isSelected = selectedDestination?.name === dest.name;
                return (
                  <button
                    key={dest.name}
                    onClick={() => handleDestinationClick(dest)}
                    className={`p-4 rounded-2xl border-2 transition text-left cursor-pointer relative ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/60 shadow-xs'
                        : 'border-slate-200 bg-slate-50/50 hover:bg-slate-100/80'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2.5 right-2.5 w-5 h-5 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                    <h5 className="font-black text-slate-900 text-base">
                      {dest.name}
                    </h5>
                    <p className="text-xs text-indigo-700 font-semibold">
                      {dest.nameEn}
                    </p>
                    <p className="text-xs text-slate-600 mt-2 leading-snug">
                      {dest.highlight}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2 Top Attractions & 2 Top Foods Info Cards */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                  영작문에 활용할 지역 맞춤 핵심 자료
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1 font-display">
                  {selectedDestination ? `${selectedDestination.name} (${selectedCountry.name})` : selectedCountry.name} 대표 관광지 2곳 & 먹거리 2곳 정보
                </h3>
              </div>
              <p className="text-xs text-slate-500">
                * 선택한 {selectedDestination?.name || '지역'}의 명소와 먹거리 영문 이름을 작문에 직접 활용해보세요!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Attractions Box */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>{selectedDestination?.name || selectedCountry.name} 대표 관광지 (2곳)</span>
                </h4>

                <div className="space-y-3">
                  {activeAttractions.map((attraction, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/60 transition"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-3xl shrink-0 mt-0.5">{attraction.emoji}</span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 text-sm">
                              {attraction.name}
                            </span>
                            <span className="text-xs font-mono font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
                              {attraction.nameEn}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {attraction.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Foods Box */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Utensils className="w-4 h-4 text-amber-500" />
                  <span>{selectedDestination?.name || selectedCountry.name} 대표 먹거리 (2곳)</span>
                </h4>

                <div className="space-y-3">
                  {activeFoods.map((food, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-slate-100/60 transition"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-3xl shrink-0 mt-0.5">{food.emoji}</span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 text-sm">
                              {food.name}
                            </span>
                            <span className="text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md">
                              {food.nameEn}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                            {food.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Confirmation CTA */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">
                  선택한 최종 목적지:
                </p>
                <p className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <span>{selectedCountry.flag}</span>
                  <span>{selectedDestination?.name}, {selectedCountry.name} ({selectedDestination?.nameEn}, {selectedCountry.nameEn})</span>
                </p>
              </div>

              <button
                type="button"
                onClick={handleConfirmAndProceed}
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-indigo-200 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>이 여행지로 글쓰기 시작하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
