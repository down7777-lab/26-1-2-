/**
 * travelData.ts
 * 
 * 6 Continents, 60 Countries, 300 Destinations.
 * Each Destination contains destination-specific authentic local attractions and foods!
 */

export interface AttractionInfo {
  name: string;
  nameEn: string;
  desc: string;
  emoji: string;
}

export interface FoodInfo {
  name: string;
  nameEn: string;
  desc: string;
  emoji: string;
}

export interface DestinationInfo {
  name: string;
  nameEn: string;
  highlight: string;
  attractions: [AttractionInfo, AttractionInfo] | AttractionInfo[];
  foods: [FoodInfo, FoodInfo] | FoodInfo[];
}

export interface CountryInfo {
  id: string;
  name: string;
  nameEn: string;
  flag: string;
  destinations: DestinationInfo[];
  attractions: [AttractionInfo, AttractionInfo];
  foods: [FoodInfo, FoodInfo];
}

export interface ContinentInfo {
  id: string;
  name: string;
  nameEn: string;
  emoji: string;
  description: string;
  countries: CountryInfo[];
}

export const CONTINENTS_DATA: ContinentInfo[] = [
  {
    "id": "asia",
    "name": "아시아",
    "nameEn": "Asia",
    "emoji": "🌏",
    "description": "유구한 역사와 다채로운 문화, 맛있는 음식이 가득한 대륙",
    "countries": [
      {
        "id": "japan",
        "name": "일본",
        "nameEn": "Japan",
        "flag": "🇯🇵",
        "destinations": [
          {
            "name": "도쿄",
            "nameEn": "Tokyo",
            "highlight": "화려한 빌딩과 전통 신사가 공존하는 수도",
            "attractions": [
              {
                "name": "도쿄 타워",
                "nameEn": "Tokyo Tower",
                "desc": "도쿄의 상징으로 도시 전체를 한눈에 내려다볼 수 있는 붉은 철탑입니다.",
                "emoji": "🗼"
              },
              {
                "name": "센소지",
                "nameEn": "Senso-ji",
                "desc": "도쿄에서 가장 오래된 사찰로 일본 전통 문화를 느낄 수 있는 곳입니다.",
                "emoji": "⛩️"
              }
            ],
            "foods": [
              {
                "name": "몬자야키",
                "nameEn": "Monjayaki",
                "desc": "철판에 반죽과 재료를 볶아 먹는 도쿄의 대표적인 철판 요리입니다.",
                "emoji": "🍳"
              },
              {
                "name": "도쿄 바나나",
                "nameEn": "Tokyo Banana",
                "desc": "부드러운 카스텔라 속에 바나나 커스터드 크림이 가득한 유명 간식입니다.",
                "emoji": "🍌"
              }
            ]
          },
          {
            "name": "교토",
            "nameEn": "Kyoto",
            "highlight": "천년 고도의 아름다운 사찰과 정원",
            "attractions": [
              {
                "name": "기요미즈데라",
                "nameEn": "Kiyomizu-dera",
                "desc": "못을 사용하지 않고 지어진 거대한 목조 사찰로 교토의 전경이 아름답습니다.",
                "emoji": "🏯"
              },
              {
                "name": "후시미 이나리 신사",
                "nameEn": "Fushimi Inari Shrine",
                "desc": "수천 개의 붉은 도리이 문이 끝없이 이어져 신비로운 분위기를 자아냅니다.",
                "emoji": "⛩️"
              }
            ],
            "foods": [
              {
                "name": "유도후",
                "nameEn": "Yudofu",
                "desc": "교토의 맑은 물로 만든 부드러운 두부를 다시마 육수에 데쳐 먹는 요리입니다.",
                "emoji": "🍲"
              },
              {
                "name": "말차 아이스크림",
                "nameEn": "Matcha Ice Cream",
                "desc": "교토 우지 지역의 진한 말차를 사용하여 만든 쌉싸름하고 달콤한 디저트입니다.",
                "emoji": "🍵"
              }
            ]
          },
          {
            "name": "오사카",
            "nameEn": "Osaka",
            "highlight": "미식과 테마파크로 활기찬 도시",
            "attractions": [
              {
                "name": "도톤보리",
                "nameEn": "Dotonbori",
                "desc": "화려한 네온사인과 맛집이 가득한 오사카 최고의 번화가입니다.",
                "emoji": "🏮"
              },
              {
                "name": "오사카성",
                "nameEn": "Osaka Castle",
                "desc": "오사카의 역사를 상징하는 웅장한 성으로 공원이 넓어 산책하기 좋습니다.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "타코야키",
                "nameEn": "Takoyaki",
                "desc": "밀가루 반죽 안에 문어를 넣고 동그랗게 구워낸 오사카의 대표 길거리 음식입니다.",
                "emoji": "🐙"
              },
              {
                "name": "오코노미야키",
                "nameEn": "Okonomiyaki",
                "desc": "양배추와 다양한 재료를 섞어 철판에 부쳐 먹는 일본식 부침개입니다.",
                "emoji": "🥘"
              }
            ]
          },
          {
            "name": "삿포로",
            "nameEn": "Sapporo",
            "highlight": "새하얀 눈꽃 축제와 라멘의 도시",
            "attractions": [
              {
                "name": "삿포로 시계탑",
                "nameEn": "Sapporo Clock Tower",
                "desc": "삿포로의 역사를 간직한 상징적인 목조 건물입니다.",
                "emoji": "🕰️"
              },
              {
                "name": "오도리 공원",
                "nameEn": "Odori Park",
                "desc": "삿포로 중심부를 가로지르는 긴 공원으로 계절마다 다양한 축제가 열립니다.",
                "emoji": "🌳"
              }
            ],
            "foods": [
              {
                "name": "삿포로 미소 라멘",
                "nameEn": "Sapporo Miso Ramen",
                "desc": "진한 된장 육수에 쫄깃한 면발이 어우러진 삿포로의 소울 푸드입니다.",
                "emoji": "🍜"
              },
              {
                "name": "징기스칸",
                "nameEn": "Genghis Khan",
                "desc": "양고기와 채소를 특수 제작된 불판에 구워 먹는 삿포로식 요리입니다.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "오키나와",
            "nameEn": "Okinawa",
            "highlight": "에메랄드빛 바다와 산호초 섬",
            "attractions": [
              {
                "name": "츄라우미 수족관",
                "nameEn": "Churaumi Aquarium",
                "desc": "거대한 고래상어를 눈앞에서 볼 수 있는 세계적인 규모의 수족관입니다.",
                "emoji": "🦈"
              },
              {
                "name": "슈리성",
                "nameEn": "Shuri Castle",
                "desc": "류큐 왕국의 역사를 보여주는 붉은 빛의 아름다운 성입니다.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "오키나와 소바",
                "nameEn": "Okinawa Soba",
                "desc": "메밀이 아닌 밀가루 면을 사용하고 돼지고기 고명을 얹은 향토 음식입니다.",
                "emoji": "🍜"
              },
              {
                "name": "고야 찬푸르",
                "nameEn": "Goya Chanpuru",
                "desc": "여주와 두부, 계란 등을 함께 볶아 만든 오키나와의 건강식입니다.",
                "emoji": "🥗"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "도쿄 스카이트리",
            "nameEn": "Tokyo Skytree",
            "desc": "도시 전체를 360도로 내려다보는 634m 초고층 타워",
            "emoji": "🗼"
          },
          {
            "name": "교토 후시미 이나리 신사",
            "nameEn": "Fushimi Inari Shrine",
            "desc": "붉은 토리이 터널이 끝없이 이어지는 신비로운 신사",
            "emoji": "⛩️"
          }
        ],
        "foods": [
          {
            "name": "라멘",
            "nameEn": "Ramen",
            "desc": "깊고 진한 육수에 쫄깃한 면발과 차슈를 얹은 면 요리",
            "emoji": "🍜"
          },
          {
            "name": "타코야키",
            "nameEn": "Takoyaki",
            "desc": "쫄깃한 문어가 들어간 겉바속촉 둥근 길거리 간식",
            "emoji": "🐙"
          }
        ]
      },
      {
        "id": "vietnam",
        "name": "베트남",
        "nameEn": "Vietnam",
        "flag": "🇻🇳",
        "destinations": [
          {
            "name": "다낭",
            "nameEn": "Da Nang",
            "highlight": "아름다운 미케 비치와 골든 브릿지",
            "attractions": [
              {
                "name": "바나힐 골든 브릿지",
                "nameEn": "Golden Bridge",
                "desc": "거대한 두 손이 다리를 받치고 있는 듯한 독특한 디자인의 명소입니다.",
                "emoji": "🌉"
              },
              {
                "name": "미케 비치",
                "nameEn": "My Khe Beach",
                "desc": "끝없이 펼쳐진 하얀 모래사장과 푸른 바다가 아름다운 휴양지입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "미꽝",
                "nameEn": "Mi Quang",
                "desc": "강황으로 색을 낸 쌀국수에 고기와 채소를 곁들여 비벼 먹는 요리입니다.",
                "emoji": "🍜"
              },
              {
                "name": "반쎄오",
                "nameEn": "Banh Xeo",
                "desc": "쌀가루 반죽에 채소와 해산물을 넣어 부친 베트남식 부침개입니다.",
                "emoji": "🌮"
              }
            ]
          },
          {
            "name": "하노이",
            "nameEn": "Hanoi",
            "highlight": "오랜 역사의 구시가지와 호안끼엠 호수",
            "attractions": [
              {
                "name": "호안끼엠 호수",
                "nameEn": "Hoan Kiem Lake",
                "desc": "하노이 시민들의 휴식처이자 전설이 깃든 아름다운 호수입니다.",
                "emoji": "🐢"
              },
              {
                "name": "하노이 문묘",
                "nameEn": "Temple of Literature",
                "desc": "베트남 최초의 대학으로 고풍스러운 건축미를 자랑합니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "분짜",
                "nameEn": "Bun Cha",
                "desc": "숯불에 구운 돼지고기를 새콤달콤한 소스에 적셔 먹는 하노이 대표 음식입니다.",
                "emoji": "🥢"
              },
              {
                "name": "에그 커피",
                "nameEn": "Egg Coffee",
                "desc": "커피 위에 부드러운 달걀 거품을 올려 달콤하고 고소한 맛이 일품입니다.",
                "emoji": "☕"
              }
            ]
          },
          {
            "name": "호치민",
            "nameEn": "Ho Chi Minh City",
            "highlight": "프랑스풍 건축물과 활기찬 야시장",
            "attractions": [
              {
                "name": "노트르담 대성당",
                "nameEn": "Notre Dame Cathedral",
                "desc": "프랑스 식민지 시절 지어진 붉은 벽돌의 아름다운 성당입니다.",
                "emoji": "⛪"
              },
              {
                "name": "벤탄 시장",
                "nameEn": "Ben Thanh Market",
                "desc": "호치민의 활기찬 분위기를 느낄 수 있는 최대 규모의 재래시장입니다.",
                "emoji": "🛍️"
              }
            ],
            "foods": [
              {
                "name": "반미",
                "nameEn": "Banh Mi",
                "desc": "바게트 빵 안에 고기와 채소를 가득 채워 만든 베트남식 샌드위치입니다.",
                "emoji": "🥖"
              },
              {
                "name": "껌땀",
                "nameEn": "Com Tam",
                "desc": "깨진 쌀로 지은 밥 위에 돼지갈비와 계란 등을 얹어 먹는 덮밥입니다.",
                "emoji": "🍚"
              }
            ]
          },
          {
            "name": "나트랑",
            "nameEn": "Nha Trang",
            "highlight": "푸른 해변 휴양지와 머드 온천",
            "attractions": [
              {
                "name": "포나가르 사원",
                "nameEn": "Po Nagar Cham Towers",
                "desc": "고대 참파 왕국의 유적으로 붉은 벽돌의 신비로운 사원입니다.",
                "emoji": "🕌"
              },
              {
                "name": "빈원더스",
                "nameEn": "VinWonders",
                "desc": "섬 전체가 테마파크로 이루어진 나트랑의 대표적인 놀이공원입니다.",
                "emoji": "🎡"
              }
            ],
            "foods": [
              {
                "name": "분까",
                "nameEn": "Bun Ca",
                "desc": "생선 살을 튀겨 고명으로 올린 시원하고 깔끔한 국물의 쌀국수입니다.",
                "emoji": "🐟"
              },
              {
                "name": "넴느엉",
                "nameEn": "Nem Nuong",
                "desc": "다진 돼지고기를 꼬치에 구워 라이스페이퍼에 싸 먹는 요리입니다.",
                "emoji": "🍢"
              }
            ]
          },
          {
            "name": "사파",
            "nameEn": "Sapa",
            "highlight": "안개 속 신비로운 계단식 논 풍경",
            "attractions": [
              {
                "name": "판시판 산",
                "nameEn": "Fansipan",
                "desc": "인도차이나의 지붕이라 불리는 베트남에서 가장 높은 산입니다.",
                "emoji": "⛰️"
              },
              {
                "name": "깟깟 마을",
                "nameEn": "Cat Cat Village",
                "desc": "소수민족의 전통 가옥과 계단식 논이 어우러진 평화로운 마을입니다.",
                "emoji": "🏡"
              }
            ],
            "foods": [
              {
                "name": "통돼지 구이",
                "nameEn": "Thang Co",
                "desc": "사파 소수민족의 전통 방식으로 조리한 독특한 풍미의 고기 요리입니다.",
                "emoji": "🍖"
              },
              {
                "name": "죽순 요리",
                "nameEn": "Bamboo Shoot Dish",
                "desc": "사파의 산에서 직접 채취한 신선한 죽순으로 만든 건강한 반찬입니다.",
                "emoji": "🎋"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "하롱베이",
            "nameEn": "Ha Long Bay",
            "desc": "바다 위에 솟아오른 수천 개의 기암괴석 섬들",
            "emoji": "⛵"
          },
          {
            "name": "바나힐 골든 브릿지",
            "nameEn": "Golden Bridge",
            "desc": "거대한 신의 두 손이 다리를 받치고 있는 랜드마크",
            "emoji": "🌉"
          }
        ],
        "foods": [
          {
            "name": "쌀국수 (포)",
            "nameEn": "Pho (Beef Noodle Soup)",
            "desc": "맑고 담백한 소고기 육수에 허브를 곁들인 쌀국수",
            "emoji": "🍲"
          },
          {
            "name": "반미",
            "nameEn": "Banh Mi",
            "desc": "바삭한 바게트 속에 고기와 채소를 채운 베트남식 샌드위치",
            "emoji": "🥖"
          }
        ]
      },
      {
        "id": "taiwan",
        "name": "대만",
        "nameEn": "Taiwan",
        "flag": "🇹🇼",
        "destinations": [
          {
            "name": "타이베이",
            "nameEn": "Taipei",
            "highlight": "101 빌딩과 유명 야시장의 천국",
            "attractions": [
              {
                "name": "타이베이 101",
                "nameEn": "Taipei 101",
                "desc": "대만의 랜드마크로 도시 전체를 조망할 수 있는 초고층 빌딩입니다.",
                "emoji": "🏢"
              },
              {
                "name": "국립고궁박물원",
                "nameEn": "National Palace Museum",
                "desc": "중국 역사의 방대한 유물을 소장하고 있는 세계적인 박물관입니다.",
                "emoji": "🏺"
              }
            ],
            "foods": [
              {
                "name": "우육면",
                "nameEn": "Beef Noodle Soup",
                "desc": "진한 소고기 육수에 부드러운 고기가 듬뿍 들어간 대만의 대표 면 요리입니다.",
                "emoji": "🍜"
              },
              {
                "name": "망고 빙수",
                "nameEn": "Mango Shaved Ice",
                "desc": "달콤한 망고가 가득 올라간 대만의 인기 디저트입니다.",
                "emoji": "🍧"
              }
            ]
          },
          {
            "name": "가오슝",
            "nameEn": "Kaohsiung",
            "highlight": "남부의 여유로운 항구와 보얼 예술특구",
            "attractions": [
              {
                "name": "용호탑",
                "nameEn": "Dragon and Tiger Pagodas",
                "desc": "용과 호랑이 입으로 들어가면 행운이 온다는 전설이 있는 탑입니다.",
                "emoji": "🐉"
              },
              {
                "name": "보얼 예술특구",
                "nameEn": "Pier-2 Art Center",
                "desc": "옛 창고를 개조해 만든 예술가들의 창작 공간이자 사진 명소입니다.",
                "emoji": "🎨"
              }
            ],
            "foods": [
              {
                "name": "해산물 요리",
                "nameEn": "Seafood",
                "desc": "항구 도시답게 신선한 해산물을 저렴하고 맛있게 즐길 수 있습니다.",
                "emoji": "🦐"
              },
              {
                "name": "파파야 우유",
                "nameEn": "Papaya Milk",
                "desc": "신선한 파파야와 우유를 섞어 만든 가오슝의 인기 음료입니다.",
                "emoji": "🥛"
              }
            ]
          },
          {
            "name": "타이중",
            "nameEn": "Taichung",
            "highlight": "감성적인 무지개 마을과 궁원안과",
            "attractions": [
              {
                "name": "무지개 마을",
                "nameEn": "Rainbow Village",
                "desc": "알록달록한 벽화로 가득 찬 작고 예쁜 마을입니다.",
                "emoji": "🌈"
              },
              {
                "name": "궁원안과",
                "nameEn": "Miyahara",
                "desc": "옛 안과 건물을 개조해 만든 화려한 인테리어의 디저트 샵입니다.",
                "emoji": "🍦"
              }
            ],
            "foods": [
              {
                "name": "펑리수",
                "nameEn": "Pineapple Cake",
                "desc": "파인애플 잼이 가득 들어간 대만의 대표적인 과자입니다.",
                "emoji": "🍍"
              },
              {
                "name": "버블티",
                "nameEn": "Bubble Tea",
                "desc": "타이중에서 시작된 쫄깃한 타피오카 펄이 들어간 밀크티입니다.",
                "emoji": "🧋"
              }
            ]
          },
          {
            "name": "지우펀",
            "nameEn": "Jiufen",
            "highlight": "홍등이 낭만적인 애니메이션 속 산골마을",
            "attractions": [
              {
                "name": "아메이 찻집",
                "nameEn": "A-Mei Tea House",
                "desc": "홍등이 켜진 낭만적인 분위기의 찻집으로 영화 속 한 장면 같습니다.",
                "emoji": "🏮"
              },
              {
                "name": "지우펀 옛거리",
                "nameEn": "Jiufen Old Street",
                "desc": "좁은 골목길을 따라 다양한 먹거리와 기념품 가게가 줄지어 있습니다.",
                "emoji": "🏮"
              }
            ],
            "foods": [
              {
                "name": "땅콩 아이스크림",
                "nameEn": "Peanut Ice Cream Roll",
                "desc": "전병에 땅콩 가루와 아이스크림을 넣어 돌돌 말아 먹는 간식입니다.",
                "emoji": "🥜"
              },
              {
                "name": "위위안",
                "nameEn": "Taro Ball",
                "desc": "타로로 만든 쫄깃한 경단을 달콤한 국물에 넣어 먹는 디저트입니다.",
                "emoji": "🍡"
              }
            ]
          },
          {
            "name": "화롄",
            "nameEn": "Hualien",
            "highlight": "웅장한 대리석 절벽 타이루거 협곡",
            "attractions": [
              {
                "name": "타이루거 협곡",
                "nameEn": "Taroko Gorge",
                "desc": "대리석 절벽이 웅장하게 펼쳐진 대만 최고의 자연 경관입니다.",
                "emoji": "⛰️"
              },
              {
                "name": "치싱탄 해변",
                "nameEn": "Qixingtan Beach",
                "desc": "자갈로 이루어진 해변으로 파도 소리가 아름다운 곳입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "모찌",
                "nameEn": "Mochi",
                "desc": "화롄의 특산물로 쫄깃한 떡 안에 다양한 소가 들어간 간식입니다.",
                "emoji": "🍡"
              },
              {
                "name": "대나무 통밥",
                "nameEn": "Bamboo Rice",
                "desc": "대나무 통에 쌀과 재료를 넣어 쪄낸 향긋한 별미입니다.",
                "emoji": "🎋"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "타이베이 101",
            "nameEn": "Taipei 101 Tower",
            "desc": "대나무 모양을 본뜬 아시아의 대표 초고층 타워",
            "emoji": "🏙️"
          },
          {
            "name": "스펀 폭포와 풍등 마을",
            "nameEn": "Shifen Waterfall & Sky Lanterns",
            "desc": "소원을 적어 하늘로 띄우는 철길 풍등 체험",
            "emoji": "🏮"
          }
        ],
        "foods": [
          {
            "name": "샤오롱바오",
            "nameEn": "Xiao Long Bao (Soup Dumplings)",
            "desc": "얇은 만두피 안에 뜨겁고 고소한 육즙이 가득한 딤섬",
            "emoji": "🥟"
          },
          {
            "name": "버블티",
            "nameEn": "Boba Milk Tea",
            "desc": "달콤한 밀크티에 쫄깃한 타피오카 펄이 듬뿍 든 원조 음료",
            "emoji": "🧋"
          }
        ]
      },
      {
        "id": "singapore",
        "name": "싱가포르",
        "nameEn": "Singapore",
        "flag": "🇸🇬",
        "destinations": [
          {
            "name": "마리나베이",
            "nameEn": "Marina Bay",
            "highlight": "초현대식 건축과 레이저 분수쇼",
            "attractions": [
              {
                "name": "가든스 바이 더 베이",
                "nameEn": "Gardens by the Bay",
                "desc": "거대한 슈퍼트리가 빛나는 미래형 식물원입니다.",
                "emoji": "🌳"
              },
              {
                "name": "머라이언 공원",
                "nameEn": "Merlion Park",
                "desc": "싱가포르의 상징인 머라이언 동상을 볼 수 있는 명소입니다.",
                "emoji": "🦁"
              }
            ],
            "foods": [
              {
                "name": "칠리 크랩",
                "nameEn": "Chilli Crab",
                "desc": "매콤달콤한 소스에 게를 볶아낸 싱가포르 최고의 요리입니다.",
                "emoji": "🦀"
              },
              {
                "name": "카야 토스트",
                "nameEn": "Kaya Toast",
                "desc": "카야 잼을 바른 토스트를 수란과 함께 먹는 아침 식사입니다.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "센토사 섬",
            "nameEn": "Sentosa Island",
            "highlight": "유니버설 스튜디오와 테마 해변",
            "attractions": [
              {
                "name": "유니버설 스튜디오",
                "nameEn": "Universal Studios",
                "desc": "다양한 영화 테마의 놀이기구를 즐길 수 있는 테마파크입니다.",
                "emoji": "🎢"
              },
              {
                "name": "실로소 비치",
                "nameEn": "Siloso Beach",
                "desc": "센토사 섬의 대표적인 해변으로 휴양을 즐기기 좋습니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "사테",
                "nameEn": "Satay",
                "desc": "고기를 꼬치에 꽂아 구운 뒤 땅콩 소스에 찍어 먹는 요리입니다.",
                "emoji": "🍢"
              },
              {
                "name": "나시 레막",
                "nameEn": "Nasi Lemak",
                "desc": "코코넛 밀크로 지은 밥에 반찬을 곁들여 먹는 전통 음식입니다.",
                "emoji": "🍛"
              }
            ]
          },
          {
            "name": "차이나타운",
            "nameEn": "Chinatown",
            "highlight": "전통 불교 사원과 미식 스트리트",
            "attractions": [
              {
                "name": "불아사",
                "nameEn": "Buddha Tooth Relic Temple",
                "desc": "화려한 외관을 자랑하는 거대한 불교 사원입니다.",
                "emoji": "🛕"
              },
              {
                "name": "맥스웰 푸드센터",
                "nameEn": "Maxwell Food Centre",
                "desc": "다양한 현지 음식을 저렴하게 맛볼 수 있는 유명 푸드코트입니다.",
                "emoji": "🍜"
              }
            ],
            "foods": [
              {
                "name": "하이난 치킨라이스",
                "nameEn": "Hainanese Chicken Rice",
                "desc": "부드러운 닭고기와 닭 육수로 지은 밥이 조화로운 음식입니다.",
                "emoji": "🍗"
              },
              {
                "name": "딤섬",
                "nameEn": "Dim Sum",
                "desc": "다양한 속재료를 넣어 쪄낸 한입 크기의 맛있는 요리입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "오차드로드",
            "nameEn": "Orchard Road",
            "highlight": "푸른 가로수길과 쇼핑몰 거리",
            "attractions": [
              {
                "name": "아이온 오차드",
                "nameEn": "ION Orchard",
                "desc": "독특한 외관의 쇼핑몰로 오차드로드의 랜드마크입니다.",
                "emoji": "🛍️"
              },
              {
                "name": "싱가포르 식물원",
                "nameEn": "Singapore Botanic Gardens",
                "desc": "유네스코 세계문화유산으로 지정된 아름다운 도심 속 정원입니다.",
                "emoji": "🌿"
              }
            ],
            "foods": [
              {
                "name": "아이스크림 샌드위치",
                "nameEn": "Ice Cream Sandwich",
                "desc": "식빵이나 웨하스 사이에 아이스크림을 끼워 먹는 길거리 간식입니다.",
                "emoji": "🍦"
              },
              {
                "name": "락사",
                "nameEn": "Laksa",
                "desc": "코코넛 밀크가 들어간 매콤하고 고소한 국물의 면 요리입니다.",
                "emoji": "🍜"
              }
            ]
          },
          {
            "name": "주롱",
            "nameEn": "Jurong",
            "highlight": "아름다운 새들의 낙원 버드 파라다이스",
            "attractions": [
              {
                "name": "버드 파라다이스",
                "nameEn": "Bird Paradise",
                "desc": "수천 마리의 새를 가까이서 볼 수 있는 거대한 조류 공원입니다.",
                "emoji": "🦜"
              },
              {
                "name": "주롱 호수 공원",
                "nameEn": "Jurong Lake Gardens",
                "desc": "자연 속에서 산책하며 힐링할 수 있는 평화로운 공원입니다.",
                "emoji": "🦢"
              }
            ],
            "foods": [
              {
                "name": "로작",
                "nameEn": "Rojak",
                "desc": "과일과 채소를 달콤한 소스에 버무린 싱가포르식 샐러드입니다.",
                "emoji": "🥗"
              },
              {
                "name": "첸돌",
                "nameEn": "Cendol",
                "desc": "코코넛 밀크와 팜슈가, 젤리가 들어간 시원한 디저트입니다.",
                "emoji": "🍧"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "가든스 바이 더 베이",
            "nameEn": "Gardens by the Bay",
            "desc": "거대한 슈퍼트리와 첨단 식물 돔이 어우러진 미래정원",
            "emoji": "🌳"
          },
          {
            "name": "마리나베이 샌즈",
            "nameEn": "Marina Bay Sands",
            "desc": "세 개의 빌딩 위에 배 모양 스카이파크가 얹힌 랜드마크",
            "emoji": "🏨"
          }
        ],
        "foods": [
          {
            "name": "칠리 크랩",
            "nameEn": "Chilli Crab",
            "desc": "매콤달콤한 토마토 칠리소스에 볶아낸 신선한 게 요리",
            "emoji": "🦀"
          },
          {
            "name": "카야 토스트",
            "nameEn": "Kaya Toast",
            "desc": "바삭하게 구운 빵에 달콤한 코코넛 카야잼과 버터를 넣은 토스트",
            "emoji": "🍞"
          }
        ]
      },
      {
        "id": "thailand",
        "name": "태국",
        "nameEn": "Thailand",
        "flag": "🇹🇭",
        "destinations": [
          {
            "name": "방콕",
            "nameEn": "Bangkok",
            "highlight": "황금빛 왕궁과 활기찬 짜오프라야 강",
            "attractions": [
              {
                "name": "왓 아룬",
                "nameEn": "Wat Arun",
                "desc": "짜오프라야 강변에 위치한 새벽 사원으로 야경이 매우 아름답습니다.",
                "emoji": "🌅"
              },
              {
                "name": "왕궁",
                "nameEn": "Grand Palace",
                "desc": "태국 왕실의 화려함과 전통 건축미를 볼 수 있는 곳입니다.",
                "emoji": "👑"
              }
            ],
            "foods": [
              {
                "name": "팟타이",
                "nameEn": "Pad Thai",
                "desc": "새우와 숙주를 넣고 볶은 태국식 볶음 쌀국수입니다.",
                "emoji": "🍜"
              },
              {
                "name": "똠얌꿍",
                "nameEn": "Tom Yum Goong",
                "desc": "새우와 향신료를 넣어 만든 태국의 대표적인 매콤새콤한 국물 요리입니다.",
                "emoji": "🍲"
              }
            ]
          },
          {
            "name": "치앙마이",
            "nameEn": "Chiang Mai",
            "highlight": "푸른 산과 예술가들의 아늑한 북부 도시",
            "attractions": [
              {
                "name": "왓 프라탓 도이수텝",
                "nameEn": "Wat Phra That Doi Suthep",
                "desc": "산 정상에 위치해 치앙마이 시내를 한눈에 내려다볼 수 있는 사원입니다.",
                "emoji": "⛰️"
              },
              {
                "name": "타패 게이트",
                "nameEn": "Tha Phae Gate",
                "desc": "치앙마이 올드타운의 상징적인 성벽 입구입니다.",
                "emoji": "🧱"
              }
            ],
            "foods": [
              {
                "name": "카오쏘이",
                "nameEn": "Khao Soi",
                "desc": "커리 베이스의 국물에 튀긴 면을 올린 치앙마이의 별미입니다.",
                "emoji": "🍜"
              },
              {
                "name": "사이우아",
                "nameEn": "Sai Oua",
                "desc": "허브와 향신료를 넣어 만든 태국 북부식 소시지입니다.",
                "emoji": "🌭"
              }
            ]
          },
          {
            "name": "푸켓",
            "nameEn": "Phuket",
            "highlight": "안다만해의 진주라 불리는 휴양 섬",
            "attractions": [
              {
                "name": "빠통 비치",
                "nameEn": "Patong Beach",
                "desc": "푸켓에서 가장 활기차고 즐길 거리가 많은 해변입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "빅 부다",
                "nameEn": "Big Buddha",
                "desc": "푸켓의 높은 언덕 위에 세워진 거대한 불상입니다.",
                "emoji": "🙏"
              }
            ],
            "foods": [
              {
                "name": "푸팟퐁커리",
                "nameEn": "Poo Pad Pong Curry",
                "desc": "게를 튀겨 커리와 계란을 섞어 만든 부드러운 요리입니다.",
                "emoji": "🦀"
              },
              {
                "name": "망고 스티키 라이스",
                "nameEn": "Mango Sticky Rice",
                "desc": "달콤한 망고와 코코넛 밀크를 곁들인 찰밥 디저트입니다.",
                "emoji": "🥭"
              }
            ]
          },
          {
            "name": "파타야",
            "nameEn": "Pattaya",
            "highlight": "짜릿한 해양 스포츠와 수상시장",
            "attractions": [
              {
                "name": "진리의 성전",
                "nameEn": "Sanctuary of Truth",
                "desc": "나무로만 정교하게 조각된 거대한 사원입니다.",
                "emoji": "🪵"
              },
              {
                "name": "파타야 수상시장",
                "nameEn": "Pattaya Floating Market",
                "desc": "배를 타고 이동하며 다양한 먹거리를 즐길 수 있는 시장입니다.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "쏨땀",
                "nameEn": "Som Tum",
                "desc": "그린 파파야를 채 썰어 매콤하게 무친 태국식 샐러드입니다.",
                "emoji": "🥗"
              },
              {
                "name": "무끄라타",
                "nameEn": "Moo Krata",
                "desc": "불판 위에서 고기를 굽고 주변 육수에 채소를 데쳐 먹는 요리입니다.",
                "emoji": "🥘"
              }
            ]
          },
          {
            "name": "크라비",
            "nameEn": "Krabi",
            "highlight": "석회암 절벽과 한적한 라군 해변",
            "attractions": [
              {
                "name": "라일레이 비치",
                "nameEn": "Railay Beach",
                "desc": "석회암 절벽에 둘러싸인 아름답고 한적한 해변입니다.",
                "emoji": "🏝️"
              },
              {
                "name": "에메랄드 풀",
                "nameEn": "Emerald Pool",
                "desc": "숲속에 위치한 천연 온천으로 물빛이 에메랄드처럼 아름답습니다.",
                "emoji": "💎"
              }
            ],
            "foods": [
              {
                "name": "생선 구이",
                "nameEn": "Grilled Fish",
                "desc": "신선한 바다 생선을 통째로 구워낸 크라비의 별미입니다.",
                "emoji": "🐟"
              },
              {
                "name": "로띠",
                "nameEn": "Roti",
                "desc": "얇은 반죽을 튀겨 연유와 바나나를 얹어 먹는 달콤한 간식입니다.",
                "emoji": "🥞"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "방콕 왕궁 & 왓 프라깨우",
            "nameEn": "The Grand Palace",
            "desc": "태국 전통 건축 양식의 절정을 보여주는 화려한 왕궁",
            "emoji": "🛕"
          },
          {
            "name": "담넌사두억 수상시장",
            "nameEn": "Floating Market",
            "desc": "배 위에서 과일과 음식을 사고파는 태국 전통 시장",
            "emoji": "🛶"
          }
        ],
        "foods": [
          {
            "name": "팟타이",
            "nameEn": "Pad Thai",
            "desc": "새우와 땅콩, 숙주를 달콤짭조름하게 볶아낸 쌀국수",
            "emoji": "🥢"
          },
          {
            "name": "망고 스티키 라이스",
            "nameEn": "Mango Sticky Rice",
            "desc": "달콤한 생망고와 코코넛 밀크 찹쌀밥의 디저트 조합",
            "emoji": "🥭"
          }
        ]
      },
      {
        "id": "indonesia",
        "name": "인도네시아",
        "nameEn": "Indonesia",
        "flag": "🇮🇩",
        "destinations": [
          {
            "name": "발리",
            "nameEn": "Bali",
            "highlight": "신들의 섬, 서핑과 우붓 예술의 성지",
            "attractions": [
              {
                "name": "우붓 몽키 포레스트",
                "nameEn": "Ubud Monkey Forest",
                "desc": "수많은 원숭이가 자유롭게 뛰어노는 울창한 숲속 사원입니다.",
                "emoji": "🐒"
              },
              {
                "name": "울루와투 사원",
                "nameEn": "Uluwatu Temple",
                "desc": "절벽 끝에 위치해 아름다운 바다 전망을 자랑하는 사원입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "나시 고랭",
                "nameEn": "Nasi Goreng",
                "desc": "인도네시아식 볶음밥으로 달콤 짭짤한 소스가 일품입니다.",
                "emoji": "🍛"
              },
              {
                "name": "사테",
                "nameEn": "Sate",
                "desc": "고기를 꼬치에 끼워 구운 뒤 땅콩 소스를 곁들여 먹는 요리입니다.",
                "emoji": "🍢"
              }
            ]
          },
          {
            "name": "자카르타",
            "nameEn": "Jakarta",
            "highlight": "활기찬 수도와 다양한 문화 박물관",
            "attractions": [
              {
                "name": "모나스",
                "nameEn": "Monas",
                "desc": "인도네시아의 독립을 기념하는 거대한 국가 기념비입니다.",
                "emoji": "🗼"
              },
              {
                "name": "타만 미니 인도네시아",
                "nameEn": "Taman Mini Indonesia Indah",
                "desc": "인도네시아의 다양한 문화를 한눈에 볼 수 있는 테마파크입니다.",
                "emoji": "🎡"
              }
            ],
            "foods": [
              {
                "name": "박소",
                "nameEn": "Bakso",
                "desc": "쫄깃한 고기 완자가 들어간 따뜻한 인도네시아식 국수입니다.",
                "emoji": "🍜"
              },
              {
                "name": "케락 텔로르",
                "nameEn": "Kerak Telor",
                "desc": "찹쌀과 달걀을 섞어 구운 자카르타 전통 길거리 음식입니다.",
                "emoji": "🍳"
              }
            ]
          },
          {
            "name": "족자카르타",
            "nameEn": "Yogyakarta",
            "highlight": "보로부두르 사원과 자바 왕궁의 유적",
            "attractions": [
              {
                "name": "보로부두르 사원",
                "nameEn": "Borobudur Temple",
                "desc": "세계 최대 규모의 불교 사원으로 웅장한 건축미를 자랑합니다.",
                "emoji": "🛕"
              },
              {
                "name": "프람바난 사원",
                "nameEn": "Prambanan Temple",
                "desc": "힌두교의 신들을 모시는 정교하고 아름다운 사원 단지입니다.",
                "emoji": "🗿"
              }
            ],
            "foods": [
              {
                "name": "구덱",
                "nameEn": "Gudeg",
                "desc": "잭프루트를 야자당과 함께 푹 끓여낸 달콤한 전통 요리입니다.",
                "emoji": "🍲"
              },
              {
                "name": "바피아",
                "nameEn": "Bakpia",
                "desc": "팥이나 녹두 소를 넣어 구운 족자카르타의 대표 간식입니다.",
                "emoji": "🥮"
              }
            ]
          },
          {
            "name": "롬복",
            "nameEn": "Lombok",
            "highlight": "자연 그대로의 청정 해변과 린자니 화산",
            "attractions": [
              {
                "name": "길리 트라왕안",
                "nameEn": "Gili Trawangan",
                "desc": "에메랄드빛 바다에서 스노클링을 즐기기 좋은 평화로운 섬입니다.",
                "emoji": "🏝️"
              },
              {
                "name": "린자니 산",
                "nameEn": "Mount Rinjani",
                "desc": "웅장한 화산 분화구와 호수를 품고 있는 트레킹 명소입니다.",
                "emoji": "🌋"
              }
            ],
            "foods": [
              {
                "name": "아얌 탈리왕",
                "nameEn": "Ayam Taliwang",
                "desc": "매콤한 양념을 발라 구운 롬복 스타일의 닭고기 요리입니다.",
                "emoji": "🍗"
              },
              {
                "name": "플레칭 캉쿵",
                "nameEn": "Plecing Kangkung",
                "desc": "공심채를 데쳐 매운 삼발 소스를 얹어 먹는 채소 요리입니다.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "코모도 섬",
            "nameEn": "Komodo Island",
            "highlight": "지구상 유일한 코모도 왕도마뱀의 서식지",
            "attractions": [
              {
                "name": "코모도 국립공원",
                "nameEn": "Komodo National Park",
                "desc": "실제 코모도 왕도마뱀을 가까이서 관찰할 수 있는 자연 보호구역입니다.",
                "emoji": "🦎"
              },
              {
                "name": "핑크 비치",
                "nameEn": "Pink Beach",
                "desc": "산호 가루가 섞여 모래가 분홍빛을 띠는 신비로운 해변입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "이칸 바카르",
                "nameEn": "Ikan Bakar",
                "desc": "신선한 생선을 숯불에 구워 향긋한 소스를 곁들인 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "삼발 마타",
                "nameEn": "Sambal Matah",
                "desc": "생고추와 향신료를 섞어 만든 매콤하고 알싸한 소스입니다.",
                "emoji": "🌶️"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "우붓 원숭이 숲",
            "nameEn": "Ubud Monkey Forest",
            "desc": "신비로운 힌두 사원과 수백 마리의 야생 원숭이 공원",
            "emoji": "🐒"
          },
          {
            "name": "울루와투 해안 절벽 사원",
            "nameEn": "Uluwatu Temple",
            "desc": "인도양의 파도가 부서지는 절벽 위의 일몰 사원",
            "emoji": "🌅"
          }
        ],
        "foods": [
          {
            "name": "나시고렝",
            "nameEn": "Nasi Goreng",
            "desc": "달콤한 삼발 소스에 계란과 닭고기를 볶은 인도네시아식 볶음밥",
            "emoji": "🍛"
          },
          {
            "name": "사테",
            "nameEn": "Satay",
            "desc": "땅콩 소스에 찍어 먹는 숯불 꼬치구이 요리",
            "emoji": "🍢"
          }
        ]
      },
      {
        "id": "malaysia",
        "name": "말레이시아",
        "nameEn": "Malaysia",
        "flag": "🇲🇾",
        "destinations": [
          {
            "name": "쿠알라룸푸르",
            "nameEn": "Kuala Lumpur",
            "highlight": "페트로나스 트윈타워와 현대적 도심",
            "attractions": [
              {
                "name": "페트로나스 트윈타워",
                "nameEn": "Petronas Twin Towers",
                "desc": "쿠알라룸푸르의 상징인 거대한 쌍둥이 빌딩입니다.",
                "emoji": "🏢"
              },
              {
                "name": "바투 동굴",
                "nameEn": "Batu Caves",
                "desc": "거대한 황금빛 신상과 알록달록한 계단이 유명한 힌두 사원입니다.",
                "emoji": "🛕"
              }
            ],
            "foods": [
              {
                "name": "나시 르막",
                "nameEn": "Nasi Lemak",
                "desc": "코코넛 밀크로 지은 밥에 매콤한 소스를 곁들인 국민 음식입니다.",
                "emoji": "🍚"
              },
              {
                "name": "사테",
                "nameEn": "Satay",
                "desc": "숯불에 구운 고기 꼬치로 달콤한 땅콩 소스에 찍어 먹습니다.",
                "emoji": "🍢"
              }
            ]
          },
          {
            "name": "페낭",
            "nameEn": "Penang",
            "highlight": "스트리트 아트와 유네스코 세계문화유산",
            "attractions": [
              {
                "name": "조지타운 벽화 거리",
                "nameEn": "George Town Street Art",
                "desc": "골목 곳곳에 그려진 재미있는 벽화와 사진을 찍을 수 있습니다.",
                "emoji": "🎨"
              },
              {
                "name": "켁록시 사원",
                "nameEn": "Kek Lok Si Temple",
                "desc": "동남아시아에서 가장 큰 규모를 자랑하는 화려한 불교 사원입니다.",
                "emoji": "🏮"
              }
            ],
            "foods": [
              {
                "name": "아삼 락사",
                "nameEn": "Asam Laksa",
                "desc": "생선 육수에 타마린드를 넣어 새콤하고 매콤한 국수 요리입니다.",
                "emoji": "🍜"
              },
              {
                "name": "차 퀘이 티아오",
                "nameEn": "Char Kway Teow",
                "desc": "쌀국수 면을 해산물과 함께 센 불에 볶아낸 요리입니다.",
                "emoji": "🥢"
              }
            ]
          },
          {
            "name": "코타키나발루",
            "nameEn": "Kota Kinabalu",
            "highlight": "세계 3대 석양과 키나발루 국립공원",
            "attractions": [
              {
                "name": "탄중아루 해변",
                "nameEn": "Tanjung Aru Beach",
                "desc": "세계 3대 석양으로 불릴 만큼 아름다운 노을을 볼 수 있습니다.",
                "emoji": "🌅"
              },
              {
                "name": "키나발루 산",
                "nameEn": "Mount Kinabalu",
                "desc": "동남아시아에서 가장 높은 산으로 웅장한 자연을 자랑합니다.",
                "emoji": "⛰️"
              }
            ],
            "foods": [
              {
                "name": "바쿠테",
                "nameEn": "Bak Kut Teh",
                "desc": "돼지 갈비를 한약재와 함께 푹 고아낸 보양식 국물 요리입니다.",
                "emoji": "🍲"
              },
              {
                "name": "생선 머리 카레",
                "nameEn": "Fish Head Curry",
                "desc": "생선 머리를 넣고 진하게 끓여낸 매콤한 카레 요리입니다.",
                "emoji": "🍛"
              }
            ]
          },
          {
            "name": "말라카",
            "nameEn": "Melaka",
            "highlight": "붉은 광장과 네덜란드풍 역사 유적",
            "attractions": [
              {
                "name": "스타더이스",
                "nameEn": "Stadthuys",
                "desc": "붉은색 외관이 인상적인 네덜란드풍의 역사적인 건물입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "존커 스트리트",
                "nameEn": "Jonker Street",
                "desc": "다양한 골동품과 맛있는 길거리 음식이 가득한 거리입니다.",
                "emoji": "🛍️"
              }
            ],
            "foods": [
              {
                "name": "뇨냐 락사",
                "nameEn": "Nyonya Laksa",
                "desc": "코코넛 밀크를 넣어 부드럽고 고소한 맛이 특징인 국수입니다.",
                "emoji": "🍜"
              },
              {
                "name": "첸돌",
                "nameEn": "Cendol",
                "desc": "얼음 위에 코코넛 밀크와 팜슈가, 초록색 젤리를 얹은 빙수입니다.",
                "emoji": "🍧"
              }
            ]
          },
          {
            "name": "랑카위",
            "nameEn": "Langkawi",
            "highlight": "케이블카 스카이브릿지와 청정 자연 섬",
            "attractions": [
              {
                "name": "랑카위 스카이브릿지",
                "nameEn": "Langkawi Sky Bridge",
                "desc": "하늘 위에 떠 있는 듯한 아찔한 전망을 즐길 수 있는 다리입니다.",
                "emoji": "🌉"
              },
              {
                "name": "독수리 광장",
                "nameEn": "Dataran Lang",
                "desc": "랑카위를 상징하는 거대한 독수리 조형물이 있는 광장입니다.",
                "emoji": "🦅"
              }
            ],
            "foods": [
              {
                "name": "나시 다강",
                "nameEn": "Nasi Dagang",
                "desc": "코코넛 밥에 생선 커리를 곁들여 먹는 랑카위의 아침 식사입니다.",
                "emoji": "🍛"
              },
              {
                "name": "로티 차나이",
                "nameEn": "Roti Canai",
                "desc": "얇게 구운 빵을 커리 소스에 찍어 먹는 대중적인 간식입니다.",
                "emoji": "🥞"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "페트로나스 트윈타워",
            "nameEn": "Petronas Twin Towers",
            "desc": "스테인리스강과 유리로 빛나는 452m 쌍둥이 빌딩",
            "emoji": "🏙️"
          },
          {
            "name": "바투 동굴",
            "nameEn": "Batu Caves",
            "desc": "거대한 황금 무루간 신상과 272개의 무지개 계단",
            "emoji": "🕳️"
          }
        ],
        "foods": [
          {
            "name": "나시 르막",
            "nameEn": "Nasi Lemak",
            "desc": "코코넛 밀크로 지은 밥에 삼발 소스, 멸치, 오이를 곁들인 국민 요리",
            "emoji": "🍚"
          },
          {
            "name": "로티 차나이",
            "nameEn": "Roti Canai",
            "desc": "바삭하고 쫄깃한 인도식 플랫브레드를 카레에 찍어 먹는 빵",
            "emoji": "🫓"
          }
        ]
      },
      {
        "id": "philippines",
        "name": "필리핀",
        "nameEn": "Philippines",
        "flag": "🇵🇭",
        "destinations": [
          {
            "name": "세부",
            "nameEn": "Cebu",
            "highlight": "고래상어 스노클링과 투말록 폭포",
            "attractions": [
              {
                "name": "마젤란 십자가",
                "nameEn": "Magellan's Cross",
                "desc": "필리핀 기독교 역사의 시작을 알리는 상징적인 십자가입니다.",
                "emoji": "✝️"
              },
              {
                "name": "오슬롭 고래상어",
                "nameEn": "Oslob Whale Shark",
                "desc": "바다에서 거대한 고래상어와 함께 수영할 수 있는 명소입니다.",
                "emoji": "🐋"
              }
            ],
            "foods": [
              {
                "name": "레촌",
                "nameEn": "Lechon",
                "desc": "통돼지를 바삭하게 구워낸 필리핀의 대표 잔치 음식입니다.",
                "emoji": "🐖"
              },
              {
                "name": "망고 쉐이크",
                "nameEn": "Mango Shake",
                "desc": "필리핀의 달콤한 망고를 갈아 만든 시원한 음료입니다.",
                "emoji": "🥭"
              }
            ]
          },
          {
            "name": "보라카이",
            "nameEn": "Boracay",
            "highlight": "세계적으로 유명한 4km 화이트 비치",
            "attractions": [
              {
                "name": "화이트 비치",
                "nameEn": "White Beach",
                "desc": "눈처럼 하얀 모래사장과 투명한 바다가 펼쳐진 해변입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "윌리스 락",
                "nameEn": "Willy's Rock",
                "desc": "바다 위에 솟아 있는 독특한 모양의 화산암 섬입니다.",
                "emoji": "🪨"
              }
            ],
            "foods": [
              {
                "name": "할로할로",
                "nameEn": "Halo-Halo",
                "desc": "다양한 과일과 젤리, 아이스크림을 섞어 먹는 빙수입니다.",
                "emoji": "🍧"
              },
              {
                "name": "판싯",
                "nameEn": "Pancit",
                "desc": "채소와 고기를 넣고 볶아낸 필리핀식 볶음 국수입니다.",
                "emoji": "🍝"
              }
            ]
          },
          {
            "name": "보홀",
            "nameEn": "Bohol",
            "highlight": "초콜릿 힐과 안경원숭이 서식지",
            "attractions": [
              {
                "name": "초콜릿 힐",
                "nameEn": "Chocolate Hills",
                "desc": "건기에 갈색으로 변하는 수많은 언덕이 장관을 이룹니다.",
                "emoji": "⛰️"
              },
              {
                "name": "안경원숭이 보호구역",
                "nameEn": "Tarsier Sanctuary",
                "desc": "세계에서 가장 작은 원숭이인 안경원숭이를 볼 수 있습니다.",
                "emoji": "🐒"
              }
            ],
            "foods": [
              {
                "name": "칼라메이",
                "nameEn": "Calamay",
                "desc": "코코넛 밀크와 찹쌀로 만든 달콤하고 쫀득한 간식입니다.",
                "emoji": "🍮"
              },
              {
                "name": "피나크벳",
                "nameEn": "Pinakbet",
                "desc": "여러 가지 채소를 새우젓으로 볶아낸 건강한 요리입니다.",
                "emoji": "🥘"
              }
            ]
          },
          {
            "name": "마닐라",
            "nameEn": "Manila",
            "highlight": "인트람로스 성벽 도시와 역사의 중심",
            "attractions": [
              {
                "name": "인트람로스",
                "nameEn": "Intramuros",
                "desc": "스페인 식민지 시대의 흔적이 남아 있는 성벽 도시입니다.",
                "emoji": "🏰"
              },
              {
                "name": "리잘 공원",
                "nameEn": "Rizal Park",
                "desc": "필리핀의 영웅 호세 리잘을 기리는 넓고 평화로운 공원입니다.",
                "emoji": "🌳"
              }
            ],
            "foods": [
              {
                "name": "아도보",
                "nameEn": "Adobo",
                "desc": "간장과 식초로 고기를 졸여 만든 필리핀의 국민 요리입니다.",
                "emoji": "🍗"
              },
              {
                "name": "시니강",
                "nameEn": "Sinigang",
                "desc": "타마린드를 넣어 새콤한 맛이 나는 필리핀식 국물 요리입니다.",
                "emoji": "🍲"
              }
            ]
          },
          {
            "name": "엘니도",
            "nameEn": "El Nido",
            "highlight": "숨겨진 비밀 라군과 원시 자연 바다",
            "attractions": [
              {
                "name": "빅 라군",
                "nameEn": "Big Lagoon",
                "desc": "에메랄드빛 바다와 거대한 석회암 절벽이 어우러진 비경입니다.",
                "emoji": "🛶"
              },
              {
                "name": "시크릿 라군",
                "nameEn": "Secret Lagoon",
                "desc": "작은 바위 틈을 지나야 만날 수 있는 숨겨진 바다 공간입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "키닐라우",
                "nameEn": "Kinilaw",
                "desc": "신선한 생선을 식초와 향신료에 절여 먹는 필리핀식 회무침입니다.",
                "emoji": "🐟"
              },
              {
                "name": "바나나 큐",
                "nameEn": "Banana Cue",
                "desc": "바나나를 설탕에 튀겨 꼬치에 끼워 먹는 길거리 간식입니다.",
                "emoji": "🍌"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "보홀 초콜릿 힐",
            "nameEn": "Chocolate Hills",
            "desc": "건기마다 갈색으로 변하는 1,200여 개의 둥근 언덕들",
            "emoji": "⛰️"
          },
          {
            "name": "오슬롭 고래상어 마을",
            "nameEn": "Oslob Whale Shark Watching",
            "desc": "거대하고 온순한 고래상어와 함께 헤엄치는 바다",
            "emoji": "🐋"
          }
        ],
        "foods": [
          {
            "name": "망고 플롯",
            "nameEn": "Mango Float",
            "desc": "달콤한 필리핀 망고와 크림, 비스킷을 층층이 쌓은 디저트",
            "emoji": "🍨"
          },
          {
            "name": "치킨 아도보",
            "nameEn": "Chicken Adobo",
            "desc": "간장과 식초, 마늘로 푹 조려낸 감칠맛 나는 닭고기 요리",
            "emoji": "🍗"
          }
        ]
      },
      {
        "id": "hongkong",
        "name": "홍콩",
        "nameEn": "Hong Kong",
        "flag": "🇭🇰",
        "destinations": [
          {
            "name": "센트럴",
            "nameEn": "Central",
            "highlight": "미드레벨 에스컬레이터와 금융 허브",
            "attractions": [
              {
                "name": "미드레벨 에스컬레이터",
                "nameEn": "Mid-Levels Escalator",
                "desc": "세계에서 가장 긴 야외 에스컬레이터로 홍콩의 일상을 봅니다.",
                "emoji": "🪜"
              },
              {
                "name": "빅토리아 피크",
                "nameEn": "Victoria Peak",
                "desc": "홍콩의 마천루를 한눈에 내려다볼 수 있는 최고의 전망대입니다.",
                "emoji": "🚠"
              }
            ],
            "foods": [
              {
                "name": "에그타르트",
                "nameEn": "Egg Tart",
                "desc": "바삭한 파이 속에 부드러운 달걀 커스터드가 가득한 디저트입니다.",
                "emoji": "🥧"
              },
              {
                "name": "완탕면",
                "nameEn": "Wonton Noodle",
                "desc": "탱글탱글한 새우 완자가 들어간 깔끔한 국물 국수입니다.",
                "emoji": "🍜"
              }
            ]
          },
          {
            "name": "침사추이",
            "nameEn": "Tsim Sha Tsui",
            "highlight": "빅토리아 하버 야경과 스타의 거리",
            "attractions": [
              {
                "name": "스타의 거리",
                "nameEn": "Avenue of Stars",
                "desc": "홍콩 영화배우들의 핸드프린팅이 있는 아름다운 해변 산책로입니다.",
                "emoji": "⭐"
              },
              {
                "name": "심포니 오브 라이트",
                "nameEn": "Symphony of Lights",
                "desc": "매일 밤 펼쳐지는 화려한 레이저와 음악의 야경 쇼입니다.",
                "emoji": "✨"
              }
            ],
            "foods": [
              {
                "name": "딤섬",
                "nameEn": "Dim Sum",
                "desc": "다양한 재료를 쪄서 만든 홍콩의 대표적인 한입 크기 요리입니다.",
                "emoji": "🥟"
              },
              {
                "name": "밀크티",
                "nameEn": "Milk Tea",
                "desc": "진하게 우려낸 홍차에 우유를 섞어 만든 홍콩식 음료입니다.",
                "emoji": "🧋"
              }
            ]
          },
          {
            "name": "몽콕",
            "nameEn": "Mong Kok",
            "highlight": "세계 최고 인구밀도의 레이디스 마켓",
            "attractions": [
              {
                "name": "레이디스 마켓",
                "nameEn": "Ladies' Market",
                "desc": "의류와 기념품 등 다양한 물건을 저렴하게 파는 활기찬 시장입니다.",
                "emoji": "🛍️"
              },
              {
                "name": "금붕어 시장",
                "nameEn": "Goldfish Market",
                "desc": "수많은 금붕어를 봉지에 담아 파는 독특한 풍경의 거리입니다.",
                "emoji": "🐠"
              }
            ],
            "foods": [
              {
                "name": "커리 피쉬볼",
                "nameEn": "Curry Fish Ball",
                "desc": "매콤한 커리 소스에 졸여낸 쫄깃한 어묵 꼬치입니다.",
                "emoji": "🍢"
              },
              {
                "name": "까이단자이",
                "nameEn": "Egg Waffle",
                "desc": "동글동글한 모양의 겉은 바삭하고 속은 촉촉한 계란 와플입니다.",
                "emoji": "🧇"
              }
            ]
          },
          {
            "name": "란타우 섬",
            "nameEn": "Lantau Island",
            "highlight": "디즈니랜드와 거대한 옹핑 청동 좌불상",
            "attractions": [
              {
                "name": "홍콩 디즈니랜드",
                "nameEn": "Hong Kong Disneyland",
                "desc": "동화 속 세상이 펼쳐지는 꿈과 희망의 테마파크입니다.",
                "emoji": "🏰"
              },
              {
                "name": "옹핑 360",
                "nameEn": "Ngong Ping 360",
                "desc": "바닥이 투명한 케이블카를 타고 거대한 불상을 보러 갑니다.",
                "emoji": "🚠"
              }
            ],
            "foods": [
              {
                "name": "연꽃 씨앗 빵",
                "nameEn": "Lotus Seed Bun",
                "desc": "달콤한 연꽃 씨앗 소스가 들어간 부드러운 찐빵입니다.",
                "emoji": "🫘"
              },
              {
                "name": "두부 푸딩",
                "nameEn": "Tofu Pudding",
                "desc": "입안에서 사르르 녹는 부드럽고 달콤한 두부 디저트입니다.",
                "emoji": "🍮"
              }
            ]
          },
          {
            "name": "코즈웨이베이",
            "nameEn": "Causeway Bay",
            "highlight": "트렌디한 쇼핑과 로컬 푸드 스트리트",
            "attractions": [
              {
                "name": "빅토리아 공원",
                "nameEn": "Victoria Park",
                "desc": "도심 속에서 휴식을 취할 수 있는 넓은 공원입니다.",
                "emoji": "🌳"
              },
              {
                "name": "타임스퀘어",
                "nameEn": "Times Square",
                "desc": "쇼핑과 맛집이 가득한 코즈웨이베이의 랜드마크 쇼핑몰입니다.",
                "emoji": "🏬"
              }
            ],
            "foods": [
              {
                "name": "차슈 덮밥",
                "nameEn": "Char Siu Rice",
                "desc": "달콤 짭짤한 소스를 발라 구운 돼지고기를 올린 덮밥입니다.",
                "emoji": "🍚"
              },
              {
                "name": "파인애플 번",
                "nameEn": "Pineapple Bun",
                "desc": "빵 위에 버터를 끼워 먹는 홍콩의 인기 있는 간식입니다.",
                "emoji": "🍞"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "빅토리아 피크 트램",
            "nameEn": "Victoria Peak & Tram",
            "desc": "가파른 산을 오르는 클래식 트램과 백만 불짜리 스카이라인 전망",
            "emoji": "🚋"
          },
          {
            "name": "홍콩 디즈니랜드",
            "nameEn": "Hong Kong Disneyland",
            "desc": "디즈니 캐릭터들과 겨울왕국 테마랜드를 즐길 수 있는 테마파크",
            "emoji": "🏰"
          }
        ],
        "foods": [
          {
            "name": "에그타르트",
            "nameEn": "Egg Tart",
            "desc": "바삭한 페이스트리 시트에 부드럽고 달콤한 커스터드 크림이 가득한 파이",
            "emoji": "🥧"
          },
          {
            "name": "완탕면",
            "nameEn": "Wonton Noodle Soup",
            "desc": "통새우가 씹히는 바삭쫄깃한 만두와 담백한 국물의 국수",
            "emoji": "🥟"
          }
        ]
      },
      {
        "id": "india",
        "name": "인도",
        "nameEn": "India",
        "flag": "🇮🇳",
        "destinations": [
          {
            "name": "아그라",
            "nameEn": "Agra",
            "highlight": "영원한 사랑의 기념비 타지마할의 도시",
            "attractions": [
              {
                "name": "타지마할",
                "nameEn": "Taj Mahal",
                "desc": "사랑하는 아내를 위해 지은 세계에서 가장 아름다운 대리석 무덤입니다.",
                "emoji": "🕌"
              },
              {
                "name": "아그라 요새",
                "nameEn": "Agra Fort",
                "desc": "붉은 사암으로 지어진 웅장하고 견고한 무굴 제국의 요새입니다.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "페타",
                "nameEn": "Petha",
                "desc": "호박을 설탕에 절여 만든 아그라의 전통 달콤한 간식입니다.",
                "emoji": "🍬"
              },
              {
                "name": "달 마카니",
                "nameEn": "Dal Makhani",
                "desc": "검은 렌틸콩과 버터를 넣어 진하고 고소하게 끓인 커리입니다.",
                "emoji": "🍛"
              }
            ]
          },
          {
            "name": "델리",
            "nameEn": "Delhi",
            "highlight": "붉은 요새와 인도 역사 박물관이 있는 수도",
            "attractions": [
              {
                "name": "붉은 요새",
                "nameEn": "Red Fort",
                "desc": "델리의 상징인 붉은 사암으로 지어진 거대한 성벽입니다.",
                "emoji": "🏰"
              },
              {
                "name": "쿠트브 미나르",
                "nameEn": "Qutub Minar",
                "desc": "인도에서 가장 높은 돌탑으로 정교한 조각이 특징입니다.",
                "emoji": "🗼"
              }
            ],
            "foods": [
              {
                "name": "버터 치킨",
                "nameEn": "Butter Chicken",
                "desc": "토마토와 버터 소스로 만든 부드럽고 풍미 가득한 치킨 커리입니다.",
                "emoji": "🍗"
              },
              {
                "name": "차트",
                "nameEn": "Chaat",
                "desc": "다양한 향신료와 소스를 섞어 만든 매콤 새콤한 길거리 음식입니다.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "자이푸르",
            "nameEn": "Jaipur",
            "highlight": "분홍빛 궁전 하와마할이 있는 핑크시티",
            "attractions": [
              {
                "name": "하와마할",
                "nameEn": "Hawa Mahal",
                "desc": "수많은 창문이 있는 분홍빛의 아름다운 바람의 궁전입니다.",
                "emoji": "🏰"
              },
              {
                "name": "암베르 요새",
                "nameEn": "Amber Fort",
                "desc": "언덕 위에 위치한 화려하고 웅장한 라자스탄의 요새입니다.",
                "emoji": "🏯"
              }
            ],
            "foods": [
              {
                "name": "게바르",
                "nameEn": "Ghevar",
                "desc": "밀가루 반죽을 튀겨 시럽을 입힌 자이푸르의 전통 디저트입니다.",
                "emoji": "🥮"
              },
              {
                "name": "랄 마스",
                "nameEn": "Laal Maas",
                "desc": "붉은 고추를 듬뿍 넣어 만든 매콤한 양고기 커리입니다.",
                "emoji": "🥘"
              }
            ]
          },
          {
            "name": "바라나시",
            "nameEn": "Varanasi",
            "highlight": "갠지스 강의 성스러운 가트와 등불 축제",
            "attractions": [
              {
                "name": "갠지스 강",
                "nameEn": "Ganges River",
                "desc": "인도인들에게 성스러운 강으로 매일 저녁 등불 의식이 열립니다.",
                "emoji": "🕯️"
              },
              {
                "name": "카시 비슈와나트 사원",
                "nameEn": "Kashi Vishwanath Temple",
                "desc": "시바 신을 모시는 바라나시에서 가장 중요한 사원입니다.",
                "emoji": "🛕"
              }
            ],
            "foods": [
              {
                "name": "라씨",
                "nameEn": "Lassi",
                "desc": "요거트에 과일이나 향신료를 섞어 만든 시원한 음료입니다.",
                "emoji": "🥛"
              },
              {
                "name": "카초리",
                "nameEn": "Kachori",
                "desc": "반죽 안에 콩 소를 넣어 튀겨낸 바삭한 아침 식사입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "뭄바이",
            "nameEn": "Mumbai",
            "highlight": "인도 최대의 상업 도시이자 볼리우드의 중심",
            "attractions": [
              {
                "name": "인도의 문",
                "nameEn": "Gateway of India",
                "desc": "뭄바이 항구에 세워진 거대한 아치형 기념비입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "마린 드라이브",
                "nameEn": "Marine Drive",
                "desc": "바다를 따라 길게 뻗은 산책로로 야경이 매우 아름답습니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "바다 파브",
                "nameEn": "Vada Pav",
                "desc": "감자 튀김을 빵 사이에 끼워 먹는 뭄바이의 대표 길거리 음식입니다.",
                "emoji": "🍔"
              },
              {
                "name": "파브 바지",
                "nameEn": "Pav Bhaji",
                "desc": "으깬 채소 커리에 버터 바른 빵을 찍어 먹는 요리입니다.",
                "emoji": "🍛"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "타지마할",
            "nameEn": "Taj Mahal",
            "desc": "순백의 대리석으로 지어진 세계 7대 불가사의 궁전",
            "emoji": "🕌"
          },
          {
            "name": "바람의 궁전 (하와마할)",
            "nameEn": "Hawa Mahal",
            "desc": "953개의 창문을 통해 바람이 통하도록 만든 독특한 분홍 궁전",
            "emoji": "🏛️"
          }
        ],
        "foods": [
          {
            "name": "버터 치킨 & 난",
            "nameEn": "Butter Chicken & Naan",
            "desc": "부드러운 크림 토마토 커리에 화덕에서 구운 따뜻한 난",
            "emoji": "🫓"
          },
          {
            "name": "라씨",
            "nameEn": "Mango Lassi",
            "desc": "신선한 요거트에 달콤한 망고를 갈아 넣은 인도 전통 음료",
            "emoji": "🥤"
          }
        ]
      }
    ]
  },
  {
    "id": "europe",
    "name": "유럽",
    "nameEn": "Europe",
    "emoji": "🏰",
    "description": "고풍스러운 건축물과 예술, 낭만이 흐르는 클래식 대륙",
    "countries": [
      {
        "id": "uk",
        "name": "영국",
        "nameEn": "United Kingdom",
        "flag": "🇬🇧",
        "destinations": [
          {
            "name": "런던",
            "nameEn": "London",
            "highlight": "빅벤과 템스강의 상징적 수도",
            "attractions": [
              {
                "name": "빅벤",
                "nameEn": "Big Ben",
                "desc": "런던의 상징인 거대한 시계탑으로 국회의사당 옆에 위치해 있어요.",
                "emoji": "⏰"
              },
              {
                "name": "런던 아이",
                "nameEn": "London Eye",
                "desc": "템스강변에서 런던 시내를 한눈에 내려다볼 수 있는 대관람차예요.",
                "emoji": "🎡"
              }
            ],
            "foods": [
              {
                "name": "피시 앤 칩스",
                "nameEn": "Fish and Chips",
                "desc": "흰살생선 튀김과 감자튀김을 곁들인 영국의 대표적인 국민 음식이에요.",
                "emoji": "🐟"
              },
              {
                "name": "애프터눈 티",
                "nameEn": "Afternoon Tea",
                "desc": "오후에 차와 함께 샌드위치, 스콘 등을 즐기는 영국의 전통 문화예요.",
                "emoji": "☕"
              }
            ]
          },
          {
            "name": "에든버러",
            "nameEn": "Edinburgh",
            "highlight": "화산 암벽 위에 우뚝 솟은 중세 고성",
            "attractions": [
              {
                "name": "에든버러 성",
                "nameEn": "Edinburgh Castle",
                "desc": "도시가 내려다보이는 화산 암벽 위에 세워진 역사적인 요새예요.",
                "emoji": "🏰"
              },
              {
                "name": "로열 마일",
                "nameEn": "Royal Mile",
                "desc": "에든버러 성에서 홀리루드 궁전까지 이어지는 중세 분위기의 거리예요.",
                "emoji": "🛣️"
              }
            ],
            "foods": [
              {
                "name": "해기스",
                "nameEn": "Haggis",
                "desc": "양의 내장과 오트밀을 섞어 만든 스코틀랜드의 전통 요리예요.",
                "emoji": "🥘"
              },
              {
                "name": "쇼트브레드",
                "nameEn": "Shortbread",
                "desc": "버터 향이 가득하고 바삭한 식감이 특징인 스코틀랜드식 쿠키예요.",
                "emoji": "🍪"
              }
            ]
          },
          {
            "name": "옥스퍼드",
            "nameEn": "Oxford",
            "highlight": "오랜 학문의 전당과 해리포터 촬영지",
            "attractions": [
              {
                "name": "크라이스트 처치",
                "nameEn": "Christ Church",
                "desc": "해리포터 영화 속 식당의 모티브가 된 아름다운 대학 건물이에요.",
                "emoji": "🏫"
              },
              {
                "name": "보들리안 도서관",
                "nameEn": "Bodleian Library",
                "desc": "유럽에서 가장 오래된 도서관 중 하나로 웅장한 건축미를 자랑해요.",
                "emoji": "📚"
              }
            ],
            "foods": [
              {
                "name": "옥스퍼드 소시지",
                "nameEn": "Oxford Sausage",
                "desc": "돼지고기와 송아지고기를 섞어 허브로 맛을 낸 지역 특산 소시지예요.",
                "emoji": "🌭"
              },
              {
                "name": "스콘",
                "nameEn": "Scone",
                "desc": "영국식 티타임에 빠질 수 없는 겉바속촉한 영국 전통 빵이에요.",
                "emoji": "🧁"
              }
            ]
          },
          {
            "name": "맨체스터",
            "nameEn": "Manchester",
            "highlight": "세계적인 축구 클럽과 산업 혁명의 중심",
            "attractions": [
              {
                "name": "올드 트래포드",
                "nameEn": "Old Trafford",
                "desc": "축구 팬이라면 꼭 가봐야 할 맨체스터 유나이티드의 홈구장이에요.",
                "emoji": "⚽"
              },
              {
                "name": "과학 산업 박물관",
                "nameEn": "Science and Industry Museum",
                "desc": "산업 혁명의 중심지였던 맨체스터의 역사를 배울 수 있는 곳이에요.",
                "emoji": "⚙️"
              }
            ],
            "foods": [
              {
                "name": "맨체스터 타르트",
                "nameEn": "Manchester Tart",
                "desc": "잼과 커스터드 크림을 얹어 만든 달콤한 전통 디저트예요.",
                "emoji": "🥧"
              },
              {
                "name": "블랙 푸딩",
                "nameEn": "Black Pudding",
                "desc": "돼지 피와 곡물을 섞어 만든 영국식 전통 소시지 요리예요.",
                "emoji": "🥓"
              }
            ]
          },
          {
            "name": "바스",
            "nameEn": "Bath",
            "highlight": "고대 로마 시대의 온천 유적지",
            "attractions": [
              {
                "name": "로마 목욕탕",
                "nameEn": "Roman Baths",
                "desc": "고대 로마 시대의 온천 유적을 그대로 보존한 역사적인 장소예요.",
                "emoji": "♨️"
              },
              {
                "name": "로열 크레센트",
                "nameEn": "Royal Crescent",
                "desc": "반원형으로 이어진 아름다운 조지 왕조 양식의 건축물이에요.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "바스 번",
                "nameEn": "Bath Bun",
                "desc": "설탕과 과일이 들어간 달콤하고 부드러운 전통 빵이에요.",
                "emoji": "🍞"
              },
              {
                "name": "샐리 런 번",
                "nameEn": "Sally Lunn Bun",
                "desc": "바스에서 가장 오래된 빵집에서 파는 크고 폭신한 빵이에요.",
                "emoji": "🥯"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "빅벤 & 웨스트민스터 사원",
            "nameEn": "Big Ben & Westminster",
            "desc": "런던의 시간을 알리는 거대한 시계탑과 유서 깊은 사원",
            "emoji": "🕰️"
          },
          {
            "name": "대영 박물관",
            "nameEn": "The British Museum",
            "desc": "로제타 스톤 등 인류 역사의 진귀한 보물들이 모인 박물관",
            "emoji": "🏛️"
          }
        ],
        "foods": [
          {
            "name": "피시 앤 칩스",
            "nameEn": "Fish and Chips",
            "desc": "바삭하게 튀긴 흰살생선과 두툼한 감자튀김",
            "emoji": "🐟"
          },
          {
            "name": "애프터눈 티",
            "nameEn": "Afternoon Tea",
            "desc": "홍차와 함께 스콘, 미니 샌드위치를 즐기는 영국의 차 문화",
            "emoji": "🫖"
          }
        ]
      },
      {
        "id": "france",
        "name": "프랑스",
        "nameEn": "France",
        "flag": "🇫🇷",
        "destinations": [
          {
            "name": "파리",
            "nameEn": "Paris",
            "highlight": "에펠탑과 루브르가 있는 예술의 도시",
            "attractions": [
              {
                "name": "에펠탑",
                "nameEn": "Eiffel Tower",
                "desc": "파리를 상징하는 철탑으로 야경이 특히 아름다운 명소예요.",
                "emoji": "🗼"
              },
              {
                "name": "루브르 박물관",
                "nameEn": "Louvre Museum",
                "desc": "모나리자를 비롯한 수많은 예술 작품이 전시된 세계 최대 박물관이에요.",
                "emoji": "🖼️"
              }
            ],
            "foods": [
              {
                "name": "크루아상",
                "nameEn": "Croissant",
                "desc": "겹겹이 쌓인 층이 바삭하고 버터 향이 가득한 프랑스식 빵이에요.",
                "emoji": "🥐"
              },
              {
                "name": "바게트",
                "nameEn": "Baguette",
                "desc": "겉은 바삭하고 속은 쫄깃한 프랑스의 대표적인 긴 빵이에요.",
                "emoji": "🥖"
              }
            ]
          },
          {
            "name": "니스",
            "nameEn": "Nice",
            "highlight": "지중해의 푸른 바다와 프로방스 햇살",
            "attractions": [
              {
                "name": "영국인 산책로",
                "nameEn": "Promenade des Anglais",
                "desc": "지중해의 푸른 바다를 따라 길게 뻗은 아름다운 해변 산책로예요.",
                "emoji": "🌊"
              },
              {
                "name": "캐슬 힐",
                "nameEn": "Castle Hill",
                "desc": "니스 해변과 구시가지를 한눈에 내려다볼 수 있는 전망대예요.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "니수아즈 샐러드",
                "nameEn": "Salade Niçoise",
                "desc": "참치, 올리브, 달걀 등을 넣은 니스의 신선한 지역 샐러드예요.",
                "emoji": "🥗"
              },
              {
                "name": "소카",
                "nameEn": "Socca",
                "desc": "병아리콩 가루로 만든 얇고 고소한 니스의 길거리 음식이에요.",
                "emoji": "🥞"
              }
            ]
          },
          {
            "name": "리옹",
            "nameEn": "Lyon",
            "highlight": "미식의 수도와 르네상스 건축 지구",
            "attractions": [
              {
                "name": "푸르비에르 대성당",
                "nameEn": "Basilica of Notre-Dame de Fourvière",
                "desc": "리옹 시내를 내려다보는 언덕 위에 위치한 화려한 성당이에요.",
                "emoji": "⛪"
              },
              {
                "name": "리옹 구시가지",
                "nameEn": "Vieux Lyon",
                "desc": "르네상스 시대의 건축물과 비밀 통로가 가득한 역사 지구예요.",
                "emoji": "🏘️"
              }
            ],
            "foods": [
              {
                "name": "키슈",
                "nameEn": "Quiche",
                "desc": "달걀과 치즈, 채소를 넣어 구운 프랑스식 파이 요리예요.",
                "emoji": "🥧"
              },
              {
                "name": "리옹식 소시지",
                "nameEn": "Saucisson de Lyon",
                "desc": "리옹의 미식 문화가 담긴 정통 프랑스식 소시지예요.",
                "emoji": "🌭"
              }
            ]
          },
          {
            "name": "스트라스부르",
            "nameEn": "Strasbourg",
            "highlight": "동화 같은 목조 가옥과 크리스마스 마켓",
            "attractions": [
              {
                "name": "스트라스부르 대성당",
                "nameEn": "Strasbourg Cathedral",
                "desc": "하늘을 찌를 듯한 첨탑이 인상적인 고딕 양식의 성당이에요.",
                "emoji": "⛪"
              },
              {
                "name": "쁘띠 프랑스",
                "nameEn": "Petite France",
                "desc": "운하와 목조 가옥이 어우러져 동화 같은 분위기를 자아내는 곳이에요.",
                "emoji": "🏡"
              }
            ],
            "foods": [
              {
                "name": "타르트 플랑베",
                "nameEn": "Tarte Flambée",
                "desc": "얇은 도우 위에 크림과 양파, 베이컨을 얹어 구운 피자 같은 요리예요.",
                "emoji": "🍕"
              },
              {
                "name": "슈크루트",
                "nameEn": "Choucroute",
                "desc": "절인 양배추와 소시지, 고기를 함께 쪄낸 알자스 지방의 요리예요.",
                "emoji": "🍲"
              }
            ]
          },
          {
            "name": "마르세유",
            "nameEn": "Marseille",
            "highlight": "지중해에서 가장 오래된 항구 도시",
            "attractions": [
              {
                "name": "노트르담 드 라 가르드",
                "nameEn": "Notre-Dame de la Garde",
                "desc": "마르세유 항구를 지켜주는 황금빛 성모상이 있는 성당이에요.",
                "emoji": "⛪"
              },
              {
                "name": "구항구",
                "nameEn": "Vieux-Port",
                "desc": "마르세유의 역사가 시작된 활기찬 항구이자 관광 중심지예요.",
                "emoji": "⚓"
              }
            ],
            "foods": [
              {
                "name": "부야베스",
                "nameEn": "Bouillabaisse",
                "desc": "다양한 해산물을 넣고 끓여낸 마르세유의 전통 생선 스튜예요.",
                "emoji": "🥘"
              },
              {
                "name": "나바트",
                "nameEn": "Navette",
                "desc": "오렌지 꽃 향이 나는 배 모양의 마르세유 전통 쿠키예요.",
                "emoji": "🍪"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "에펠탑",
            "nameEn": "Eiffel Tower",
            "desc": "밤마다 반짝이는 조명쇼가 펼쳐지는 파리의 랜드마크",
            "emoji": "🗼"
          },
          {
            "name": "루브르 박물관",
            "nameEn": "Louvre Museum",
            "desc": "모나리자를 비롯한 세계 최고의 명작들이 전시된 유리 피라미드",
            "emoji": "🖼️"
          }
        ],
        "foods": [
          {
            "name": "크루아상",
            "nameEn": "Croissant",
            "desc": "버터 향이 가득하고 겉은 바삭 속은 촉촉한 프랑스 대표 빵",
            "emoji": "🥐"
          },
          {
            "name": "마카롱",
            "nameEn": "Macaron",
            "desc": "알록달록 다채로운 색감과 달콤한 필링의 고급 디저트",
            "emoji": "🧁"
          }
        ]
      },
      {
        "id": "italy",
        "name": "이탈리아",
        "nameEn": "Italy",
        "flag": "🇮🇹",
        "destinations": [
          {
            "name": "로마",
            "nameEn": "Rome",
            "highlight": "콜로세움과 고대 로마 유적이 살아 숨 쉬는 도시",
            "attractions": [
              {
                "name": "콜로세움",
                "nameEn": "Colosseum",
                "desc": "고대 로마의 웅장함을 느낄 수 있는 거대한 원형 경기장이에요.",
                "emoji": "🏟️"
              },
              {
                "name": "트레비 분수",
                "nameEn": "Trevi Fountain",
                "desc": "동전을 던지면 다시 로마에 올 수 있다는 전설이 있는 분수예요.",
                "emoji": "⛲"
              }
            ],
            "foods": [
              {
                "name": "까르보나라",
                "nameEn": "Carbonara",
                "desc": "달걀노른자와 치즈, 베이컨으로 맛을 낸 로마 정통 파스타예요.",
                "emoji": "🍝"
              },
              {
                "name": "젤라또",
                "nameEn": "Gelato",
                "desc": "이탈리아의 신선한 재료로 만든 쫀득한 식감의 아이스크림이에요.",
                "emoji": "🍦"
              }
            ]
          },
          {
            "name": "피렌체",
            "nameEn": "Florence",
            "highlight": "두오모 대성당과 르네상스 예술의 고향",
            "attractions": [
              {
                "name": "두오모 대성당",
                "nameEn": "Florence Cathedral",
                "desc": "붉은 돔 지붕이 인상적인 피렌체의 상징적인 성당이에요.",
                "emoji": "⛪"
              },
              {
                "name": "베키오 다리",
                "nameEn": "Ponte Vecchio",
                "desc": "다리 위에 보석상들이 줄지어 있는 피렌체의 오래된 다리예요.",
                "emoji": "🌉"
              }
            ],
            "foods": [
              {
                "name": "티본 스테이크",
                "nameEn": "Bistecca alla Fiorentina",
                "desc": "두툼한 소고기를 숯불에 구워낸 피렌체식 스테이크예요.",
                "emoji": "🥩"
              },
              {
                "name": "판자넬라",
                "nameEn": "Panzanella",
                "desc": "빵과 신선한 채소를 올리브유에 버무린 토스카나식 샐러드예요.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "베네치아",
            "nameEn": "Venice",
            "highlight": "곤돌라가 떠다니는 낭만적인 물의 도시",
            "attractions": [
              {
                "name": "산 마르코 광장",
                "nameEn": "St. Mark's Square",
                "desc": "베네치아의 중심이자 아름다운 성당과 종탑이 있는 광장이에요.",
                "emoji": "🏛️"
              },
              {
                "name": "리알토 다리",
                "nameEn": "Rialto Bridge",
                "desc": "운하를 가로지르는 베네치아에서 가장 유명한 다리예요.",
                "emoji": "🌉"
              }
            ],
            "foods": [
              {
                "name": "오징어 먹물 파스타",
                "nameEn": "Squid Ink Pasta",
                "desc": "고소하고 감칠맛이 풍부한 베네치아의 대표 해산물 파스타예요.",
                "emoji": "🍝"
              },
              {
                "name": "치케티",
                "nameEn": "Cicchetti",
                "desc": "와인과 함께 즐기는 베네치아식 작은 안주 요리예요.",
                "emoji": "🍢"
              }
            ]
          },
          {
            "name": "밀라노",
            "nameEn": "Milan",
            "highlight": "화려한 대성당과 세계 패션의 중심지",
            "attractions": [
              {
                "name": "밀라노 대성당",
                "nameEn": "Milan Cathedral",
                "desc": "수많은 첨탑이 하늘을 찌르는 웅장한 고딕 양식의 성당이에요.",
                "emoji": "⛪"
              },
              {
                "name": "비토리오 에마누엘레 2세 갤러리아",
                "nameEn": "Galleria Vittorio Emanuele II",
                "desc": "화려한 유리 돔 천장이 있는 세계에서 가장 오래된 쇼핑몰이에요.",
                "emoji": "🛍️"
              }
            ],
            "foods": [
              {
                "name": "오소부코",
                "nameEn": "Ossobuco",
                "desc": "송아지 정강이 고기를 채소와 함께 푹 끓여낸 밀라노 요리예요.",
                "emoji": "🥘"
              },
              {
                "name": "밀라노식 커틀릿",
                "nameEn": "Cotoletta alla Milanese",
                "desc": "얇게 펴서 바삭하게 튀겨낸 이탈리아식 돈가스예요.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "나폴리",
            "nameEn": "Naples",
            "highlight": "정통 화덕 피자의 발상지와 폼페이 유적",
            "attractions": [
              {
                "name": "폼페이 유적",
                "nameEn": "Pompeii",
                "desc": "화산 폭발로 멈춰버린 고대 로마 도시의 모습을 볼 수 있는 곳이에요.",
                "emoji": "🌋"
              },
              {
                "name": "스파카나폴리",
                "nameEn": "Spaccanapoli",
                "desc": "나폴리 구시가지를 가로지르는 활기차고 좁은 골목길이에요.",
                "emoji": "🚶"
              }
            ],
            "foods": [
              {
                "name": "마르게리타 피자",
                "nameEn": "Margherita Pizza",
                "desc": "토마토, 모짜렐라, 바질로 맛을 낸 나폴리 정통 화덕 피자예요.",
                "emoji": "🍕"
              },
              {
                "name": "스폴리아텔레",
                "nameEn": "Sfogliatella",
                "desc": "겹겹이 쌓인 층이 바삭한 나폴리의 전통 조개 모양 디저트예요.",
                "emoji": "🥐"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "콜로세움",
            "nameEn": "Colosseum",
            "desc": "검투사들의 결투가 열렸던 웅장한 고대 원형 경기장",
            "emoji": "🏟️"
          },
          {
            "name": "트레비 분수",
            "nameEn": "Trevi Fountain",
            "desc": "동전을 던지면 로마로 다시 돌아온다는 전설의 분수",
            "emoji": "⛲"
          }
        ],
        "foods": [
          {
            "name": "화덕 마르게리타 피자",
            "nameEn": "Neapolitan Pizza",
            "desc": "신선한 토마토 소스, 모차렐라 치즈, 바질을 얹어 참나무 화덕에 구운 피자",
            "emoji": "🍕"
          },
          {
            "name": "젤라토",
            "nameEn": "Gelato",
            "desc": "천연 과일과 우유로 만들어 쫀득하고 진한 이탈리아식 수제 아이스크림",
            "emoji": "🍨"
          }
        ]
      },
      {
        "id": "spain",
        "name": "스페인",
        "nameEn": "Spain",
        "flag": "🇪🇸",
        "destinations": [
          {
            "name": "바르셀로나",
            "nameEn": "Barcelona",
            "highlight": "가우디의 걸작 사그라다 파밀리아가 있는 도시",
            "attractions": [
              {
                "name": "사그라다 파밀리아",
                "nameEn": "Sagrada Família",
                "desc": "가우디가 설계한 바르셀로나의 상징적인 미완성 성당이에요.",
                "emoji": "⛪"
              },
              {
                "name": "구엘 공원",
                "nameEn": "Park Güell",
                "desc": "가우디의 독창적인 건축물과 바르셀로나 전경을 볼 수 있는 공원이에요.",
                "emoji": "🌳"
              }
            ],
            "foods": [
              {
                "name": "타파스",
                "nameEn": "Tapas",
                "desc": "다양한 재료를 작은 접시에 담아 즐기는 스페인의 식문화예요.",
                "emoji": "🍤"
              },
              {
                "name": "판 콘 토마테",
                "nameEn": "Pa amb tomàquet",
                "desc": "빵에 토마토와 올리브유를 발라 먹는 카탈루냐식 아침 식사예요.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "마드리드",
            "nameEn": "Madrid",
            "highlight": "프라도 미술관과 왕궁이 있는 열정의 수도",
            "attractions": [
              {
                "name": "프라도 미술관",
                "nameEn": "Prado Museum",
                "desc": "스페인 왕실의 방대한 예술 컬렉션을 소장한 세계적인 미술관이에요.",
                "emoji": "🖼️"
              },
              {
                "name": "마드리드 왕궁",
                "nameEn": "Royal Palace of Madrid",
                "desc": "유럽에서 가장 화려하고 규모가 큰 왕궁 중 하나예요.",
                "emoji": "👑"
              }
            ],
            "foods": [
              {
                "name": "추로스",
                "nameEn": "Churros",
                "desc": "따뜻한 초콜릿 소스에 찍어 먹는 스페인의 달콤한 간식이에요.",
                "emoji": "🍫"
              },
              {
                "name": "보카디요",
                "nameEn": "Bocadillo",
                "desc": "바게트 빵 사이에 고기나 치즈를 넣어 만든 스페인식 샌드위치예요.",
                "emoji": "🥪"
              }
            ]
          },
          {
            "name": "세비야",
            "nameEn": "Seville",
            "highlight": "플라멩코 춤과 스페인 광장의 낭만",
            "attractions": [
              {
                "name": "스페인 광장",
                "nameEn": "Plaza de España",
                "desc": "반원형의 웅장한 건물과 운하가 어우러진 아름다운 광장이에요.",
                "emoji": "⛲"
              },
              {
                "name": "세비야 대성당",
                "nameEn": "Seville Cathedral",
                "desc": "세계에서 가장 큰 고딕 양식 성당으로 히랄다 탑이 유명해요.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "가스파초",
                "nameEn": "Gazpacho",
                "desc": "토마토와 채소를 갈아 차갑게 먹는 스페인식 냉수프예요.",
                "emoji": "🍅"
              },
              {
                "name": "하몬",
                "nameEn": "Jamón",
                "desc": "돼지 뒷다리를 염장해 건조한 스페인의 대표적인 생햄이에요.",
                "emoji": "🍖"
              }
            ]
          },
          {
            "name": "그라나다",
            "nameEn": "Granada",
            "highlight": "이슬람 문화의 보석 알함브라 궁전",
            "attractions": [
              {
                "name": "알함브라 궁전",
                "nameEn": "Alhambra",
                "desc": "이슬람 건축의 정수를 보여주는 그라나다의 아름다운 궁전이에요.",
                "emoji": "🏰"
              },
              {
                "name": "알바이신",
                "nameEn": "Albaicín",
                "desc": "하얀 집들이 옹기종기 모여 있는 그라나다의 옛 이슬람 지구예요.",
                "emoji": "🏘️"
              }
            ],
            "foods": [
              {
                "name": "피아노",
                "nameEn": "Pionono",
                "desc": "시럽에 적신 롤케이크 위에 크림을 얹은 그라나다 전통 디저트예요.",
                "emoji": "🍰"
              },
              {
                "name": "토르티야",
                "nameEn": "Tortilla Española",
                "desc": "감자와 달걀을 듬뿍 넣어 두툼하게 부쳐낸 스페인식 오믈렛이에요.",
                "emoji": "🍳"
              }
            ]
          },
          {
            "name": "발렌시아",
            "nameEn": "Valencia",
            "highlight": "오렌지와 파에야의 고향, 미래 예술 과학도시",
            "attractions": [
              {
                "name": "예술 과학 도시",
                "nameEn": "City of Arts and Sciences",
                "desc": "미래 도시를 연상시키는 독특한 건축물들이 모여 있는 곳이에요.",
                "emoji": "🚀"
              },
              {
                "name": "발렌시아 대성당",
                "nameEn": "Valencia Cathedral",
                "desc": "성배가 보관되어 있다고 알려진 역사 깊은 성당이에요.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "파에야",
                "nameEn": "Paella",
                "desc": "해산물과 채소를 넣고 볶아낸 발렌시아의 대표적인 쌀 요리예요.",
                "emoji": "🥘"
              },
              {
                "name": "오르차타",
                "nameEn": "Horchata",
                "desc": "추파라는 식물로 만든 발렌시아의 시원하고 달콤한 음료예요.",
                "emoji": "🥛"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "사그라다 파밀리아 성당",
            "nameEn": "Sagrada Familia",
            "desc": "자연을 닮은 곡선과 환상적인 스테인드글라스 빛의 대성당",
            "emoji": "⛪"
          },
          {
            "name": "구엘 공원",
            "nameEn": "Park Guell",
            "desc": "동화 속 과자집과 형형색색 모자이크 도마뱀이 있는 야외 공원",
            "emoji": "🦎"
          }
        ],
        "foods": [
          {
            "name": "파에야",
            "nameEn": "Paella",
            "desc": "사프란 향 가득한 쌀에 신선한 해산물과 채소를 넣고 볶은 철판 요리",
            "emoji": "🥘"
          },
          {
            "name": "추로스 & 핫초코",
            "nameEn": "Churros con Chocolate",
            "desc": "바삭하게 튀긴 추로스를 진하고 달콤한 핫초콜릿에 듬뿍 찍어 먹는 간식",
            "emoji": "🥨"
          }
        ]
      },
      {
        "id": "germany",
        "name": "독일",
        "nameEn": "Germany",
        "flag": "🇩🇪",
        "destinations": [
          {
            "name": "베를린",
            "nameEn": "Berlin",
            "highlight": "브란덴부르크 문과 베를린 장벽의 역사",
            "attractions": [
              {
                "name": "브란덴부르크 문",
                "nameEn": "Brandenburg Gate",
                "desc": "독일의 통일과 평화를 상징하는 베를린의 대표적인 랜드마크예요.",
                "emoji": "🏛️"
              },
              {
                "name": "베를린 장벽",
                "nameEn": "Berlin Wall",
                "desc": "냉전 시대의 역사를 간직한 장벽으로 예술 작품이 그려져 있어요.",
                "emoji": "🧱"
              }
            ],
            "foods": [
              {
                "name": "커리부어스트",
                "nameEn": "Currywurst",
                "desc": "소시지에 카레 가루와 케첩을 뿌려 먹는 베를린의 길거리 음식이에요.",
                "emoji": "🌭"
              },
              {
                "name": "도너 케밥",
                "nameEn": "Döner Kebab",
                "desc": "독일에서 대중화된 고기와 채소가 듬뿍 들어간 샌드위치예요.",
                "emoji": "🥙"
              }
            ]
          },
          {
            "name": "뮌헨",
            "nameEn": "Munich",
            "highlight": "바이에른 문화와 자동차 박물관의 도시",
            "attractions": [
              {
                "name": "마리엔 광장",
                "nameEn": "Marienplatz",
                "desc": "뮌헨의 중심지로 시청사와 인형 시계탑이 있는 광장이에요.",
                "emoji": "🏙️"
              },
              {
                "name": "BMW 박물관",
                "nameEn": "BMW Museum",
                "desc": "자동차의 역사를 한눈에 볼 수 있는 뮌헨의 유명한 박물관이에요.",
                "emoji": "🚗"
              }
            ],
            "foods": [
              {
                "name": "바이스부어스트",
                "nameEn": "Weisswurst",
                "desc": "아침에 주로 먹는 부드러운 식감의 독일식 흰 소시지예요.",
                "emoji": "🌭"
              },
              {
                "name": "프레첼",
                "nameEn": "Pretzel",
                "desc": "독일 맥주와 잘 어울리는 짭짤하고 고소한 매듭 모양 빵이에요.",
                "emoji": "🥨"
              }
            ]
          },
          {
            "name": "프랑크푸르트",
            "nameEn": "Frankfurt",
            "highlight": "마인강변의 현대 금융 허브와 괴테의 생가",
            "attractions": [
              {
                "name": "뢰머 광장",
                "nameEn": "Römerberg",
                "desc": "중세 시대의 목조 건물들이 모여 있는 프랑크푸르트의 중심 광장이에요.",
                "emoji": "🏘️"
              },
              {
                "name": "괴테 생가",
                "nameEn": "Goethe House",
                "desc": "독일의 대문호 괴테가 태어나고 자란 역사적인 집이에요.",
                "emoji": "🏠"
              }
            ],
            "foods": [
              {
                "name": "아펠바인",
                "nameEn": "Apfelwein",
                "desc": "사과를 발효시켜 만든 프랑크푸르트의 전통 사과 와인이에요.",
                "emoji": "🍎"
              },
              {
                "name": "프랑크푸르터",
                "nameEn": "Frankfurter",
                "desc": "우리가 흔히 먹는 소시지의 원조인 프랑크푸르트 소시지예요.",
                "emoji": "🌭"
              }
            ]
          },
          {
            "name": "쾰른",
            "nameEn": "Cologne",
            "highlight": "하늘을 찌를 듯 웅장한 고딕 양식 쾰른 대성당",
            "attractions": [
              {
                "name": "쾰른 대성당",
                "nameEn": "Cologne Cathedral",
                "desc": "하늘을 찌를 듯한 웅장한 고딕 양식의 세계적인 성당이에요.",
                "emoji": "⛪"
              },
              {
                "name": "호엔촐레른 다리",
                "nameEn": "Hohenzollern Bridge",
                "desc": "수많은 사랑의 자물쇠가 걸려 있는 라인강의 아름다운 다리예요.",
                "emoji": "🌉"
              }
            ],
            "foods": [
              {
                "name": "쾰슈",
                "nameEn": "Kölsch",
                "desc": "쾰른 지역에서만 생산되는 깔끔한 맛의 전통 맥주예요.",
                "emoji": "🍺"
              },
              {
                "name": "라이베쿠헨",
                "nameEn": "Reibekuchen",
                "desc": "감자를 갈아 기름에 튀겨낸 독일식 감자전이에요.",
                "emoji": "🥔"
              }
            ]
          },
          {
            "name": "드레스덴",
            "nameEn": "Dresden",
            "highlight": "엘베강의 피렌체라 불리는 바로크 예술 도시",
            "attractions": [
              {
                "name": "프라우엔 교회",
                "nameEn": "Frauenkirche",
                "desc": "전쟁의 아픔을 딛고 복원된 드레스덴의 아름다운 교회예요.",
                "emoji": "⛪"
              },
              {
                "name": "츠빙거 궁전",
                "nameEn": "Zwinger Palace",
                "desc": "바로크 양식의 화려함이 돋보이는 드레스덴의 궁전이에요.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "슈톨렌",
                "nameEn": "Stollen",
                "desc": "말린 과일과 견과류를 넣어 만든 드레스덴의 전통 크리스마스 빵이에요.",
                "emoji": "🍞"
              },
              {
                "name": "자우어브라텐",
                "nameEn": "Sauerbraten",
                "desc": "식초와 향신료에 재운 고기를 푹 익힌 독일식 전통 고기 요리예요.",
                "emoji": "🥩"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "노이슈반슈타인 성",
            "nameEn": "Neuschwanstein Castle",
            "desc": "디즈니 신데렐라 성의 모델이 된 알프스 산속 백조의 성",
            "emoji": "🏰"
          },
          {
            "name": "브란덴부르크 문",
            "nameEn": "Brandenburg Gate",
            "desc": "독일의 통일과 평화를 상징하는 역사적 관문",
            "emoji": "🏛️"
          }
        ],
        "foods": [
          {
            "name": "브레첼",
            "nameEn": "Pretzel",
            "desc": "굵은 소금이 콕콕 박혀 고소하고 쫄깃한 독일 전통 꼬임 빵",
            "emoji": "🥨"
          },
          {
            "name": "소시지 (부어스트)",
            "nameEn": "Bratwurst",
            "desc": "육즙이 풍부하고 탱글탱글한 독일식 전통 수제 소시지",
            "emoji": "🌭"
          }
        ]
      },
      {
        "id": "greece",
        "name": "그리스",
        "nameEn": "Greece",
        "flag": "🇬🇷",
        "destinations": [
          {
            "name": "산토리니",
            "nameEn": "Santorini",
            "highlight": "푸른 돔 지붕과 하얀 절벽 마을의 환상 섬",
            "attractions": [
              {
                "name": "이아 마을",
                "nameEn": "Oia Village",
                "desc": "푸른 돔 지붕과 환상적인 일몰을 감상할 수 있는 마을입니다.",
                "emoji": "🌅"
              },
              {
                "name": "피라 마을",
                "nameEn": "Fira Village",
                "desc": "섬의 중심지로 절벽 위에 세워진 아름다운 상점가입니다.",
                "emoji": "🏘️"
              }
            ],
            "foods": [
              {
                "name": "그릭 샐러드",
                "nameEn": "Greek Salad",
                "desc": "신선한 올리브와 페타 치즈가 듬뿍 들어간 건강식입니다.",
                "emoji": "🥗"
              },
              {
                "name": "수블라키",
                "nameEn": "Souvlaki",
                "desc": "고기를 꼬치에 끼워 구워낸 그리스식 바비큐입니다.",
                "emoji": "🍢"
              }
            ]
          },
          {
            "name": "아테네",
            "nameEn": "Athens",
            "highlight": "고대 그리스 신화와 파르테논 신전의 요람",
            "attractions": [
              {
                "name": "파르테논 신전",
                "nameEn": "Parthenon",
                "desc": "고대 그리스 문명의 정수를 보여주는 웅장한 신전입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "아크로폴리스",
                "nameEn": "Acropolis",
                "desc": "아테네 시내를 한눈에 내려다볼 수 있는 고대 요새입니다.",
                "emoji": "⛰️"
              }
            ],
            "foods": [
              {
                "name": "무사카",
                "nameEn": "Moussaka",
                "desc": "가지와 감자, 다진 고기를 층층이 쌓아 구운 요리입니다.",
                "emoji": "🥘"
              },
              {
                "name": "기로스",
                "nameEn": "Gyros",
                "desc": "피타 빵에 고기와 채소를 싸서 먹는 간편한 음식입니다.",
                "emoji": "🌯"
              }
            ]
          },
          {
            "name": "미코노스",
            "nameEn": "Mykonos",
            "highlight": "바람개비 풍차와 아름다운 에게해 해변",
            "attractions": [
              {
                "name": "카토밀리 풍차",
                "nameEn": "Kato Mili",
                "desc": "미코노스를 상징하는 언덕 위의 하얀 풍차들입니다.",
                "emoji": "🌬️"
              },
              {
                "name": "리틀 베니스",
                "nameEn": "Little Venice",
                "desc": "바다 바로 옆에 위치한 낭만적인 카페 거리입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "코파니스티",
                "nameEn": "Kopanisti",
                "desc": "미코노스 특산의 매콤하고 짭짤한 발효 치즈입니다.",
                "emoji": "🧀"
              },
              {
                "name": "칼라조니아",
                "nameEn": "Kalathakia",
                "desc": "치즈와 허브를 넣어 만든 전통 파이입니다.",
                "emoji": "🥧"
              }
            ]
          },
          {
            "name": "메테오라",
            "nameEn": "Meteora",
            "highlight": "아찔한 공중 바위산 위에 지어진 신비로운 수도원",
            "attractions": [
              {
                "name": "메테오론 수도원",
                "nameEn": "Great Meteoron Monastery",
                "desc": "거대한 바위산 꼭대기에 세워진 가장 큰 수도원입니다.",
                "emoji": "⛪"
              },
              {
                "name": "바를라암 수도원",
                "nameEn": "Varlaam Monastery",
                "desc": "아찔한 절벽 위에 위치한 역사 깊은 수도원입니다.",
                "emoji": "🧗"
              }
            ],
            "foods": [
              {
                "name": "그릭 요거트",
                "nameEn": "Greek Yogurt",
                "desc": "꾸덕하고 진한 맛이 일품인 그리스 전통 요거트입니다.",
                "emoji": "🥣"
              },
              {
                "name": "파스티치오",
                "nameEn": "Pastitsio",
                "desc": "파스타와 고기 소스를 층층이 쌓아 구운 요리입니다.",
                "emoji": "🍝"
              }
            ]
          },
          {
            "name": "크레타",
            "nameEn": "Crete",
            "highlight": "미노아 문명의 크노소스 궁전이 있는 그리스 최대 섬",
            "attractions": [
              {
                "name": "크노소스 궁전",
                "nameEn": "Knossos Palace",
                "desc": "미노아 문명의 흔적을 간직한 거대한 고대 궁전입니다.",
                "emoji": "🏺"
              },
              {
                "name": "엘라포니시 해변",
                "nameEn": "Elafonisi Beach",
                "desc": "분홍빛 모래와 투명한 바다가 어우러진 해변입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "다코스",
                "nameEn": "Dakos",
                "desc": "딱딱한 빵 위에 토마토와 치즈를 올린 크레타식 샐러드입니다.",
                "emoji": "🍅"
              },
              {
                "name": "칼리수니아",
                "nameEn": "Kalitsounia",
                "desc": "치즈나 허브를 채워 넣은 크레타식 작은 파이입니다.",
                "emoji": "🥟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "산토리니 이아 마을",
            "nameEn": "Oia Village in Santorini",
            "desc": "에게해로 붉게 물드는 세계 최고의 일몰을 감상하는 절벽 마을",
            "emoji": "🌅"
          },
          {
            "name": "파르테논 신전",
            "nameEn": "Parthenon Temple",
            "desc": "아크로폴리스 언덕 위에 세워진 완벽한 비율의 고대 신전",
            "emoji": "🏛️"
          }
        ],
        "foods": [
          {
            "name": "수블라키",
            "nameEn": "Souvlaki",
            "desc": "피타 빵에 고기 꼬치구이와 신선한 채소, 요거트 소스를 넣은 샌드위치",
            "emoji": "🥙"
          },
          {
            "name": "그릭 요거트",
            "nameEn": "Greek Yogurt & Honey",
            "desc": "꾸덕하고 고소한 수제 요거트에 달콤한 꿀과 호두를 올린 건강 디저트",
            "emoji": "🥣"
          }
        ]
      },
      {
        "id": "switzerland",
        "name": "스위스",
        "nameEn": "Switzerland",
        "flag": "🇨🇭",
        "destinations": [
          {
            "name": "인터라켄",
            "nameEn": "Interlaken",
            "highlight": "융프라우요흐로 향하는 알프스의 관문",
            "attractions": [
              {
                "name": "하더 쿨름",
                "nameEn": "Harder Kulm",
                "desc": "인터라켄 시내와 호수를 한눈에 볼 수 있는 전망대입니다.",
                "emoji": "🚠"
              },
              {
                "name": "회에마테 공원",
                "nameEn": "Hohematte Park",
                "desc": "패러글라이딩 착륙장이자 넓은 잔디밭이 있는 공원입니다.",
                "emoji": "🪂"
              }
            ],
            "foods": [
              {
                "name": "퐁듀",
                "nameEn": "Fondue",
                "desc": "녹인 치즈에 빵을 찍어 먹는 스위스 대표 요리입니다.",
                "emoji": "🧀"
              },
              {
                "name": "뢰스티",
                "nameEn": "Rosti",
                "desc": "감자를 채 썰어 바삭하게 구워낸 스위스식 감자전입니다.",
                "emoji": "🥔"
              }
            ]
          },
          {
            "name": "취리히",
            "nameEn": "Zurich",
            "highlight": "호수와 백조가 유영하는 아름다운 경제 중심지",
            "attractions": [
              {
                "name": "그로스뮌스터",
                "nameEn": "Grossmunster",
                "desc": "취리히의 상징인 두 개의 탑이 있는 대성당입니다.",
                "emoji": "⛪"
              },
              {
                "name": "반호프 거리",
                "nameEn": "Bahnhofstrasse",
                "desc": "명품 숍과 카페가 즐비한 세계적인 쇼핑 거리입니다.",
                "emoji": "🛍️"
              }
            ],
            "foods": [
              {
                "name": "취리히식 송아지 요리",
                "nameEn": "Zurcher Geschnetzeltes",
                "desc": "크림소스에 버섯과 송아지 고기를 볶은 요리입니다.",
                "emoji": "🥩"
              },
              {
                "name": "룩스부르거",
                "nameEn": "Luxemburgerli",
                "desc": "취리히에서 유명한 작고 부드러운 마카롱입니다.",
                "emoji": "🍪"
              }
            ]
          },
          {
            "name": "루체른",
            "nameEn": "Luzern",
            "highlight": "카펠교 목조다리와 빈사의 사자상",
            "attractions": [
              {
                "name": "카펠교",
                "nameEn": "Chapel Bridge",
                "desc": "루체른의 상징인 유럽에서 가장 오래된 목조 다리입니다.",
                "emoji": "🌉"
              },
              {
                "name": "빈사의 사자상",
                "nameEn": "Lion Monument",
                "desc": "바위에 새겨진 슬픈 표정의 사자 조각상입니다.",
                "emoji": "🦁"
              }
            ],
            "foods": [
              {
                "name": "루체른 파이",
                "nameEn": "Luzerner Chugelipastete",
                "desc": "고기와 소스를 채워 넣은 바삭한 페이스트리 요리입니다.",
                "emoji": "🥧"
              },
              {
                "name": "치즈 타르트",
                "nameEn": "Cheese Tart",
                "desc": "고소한 치즈 풍미가 가득한 루체른식 타르트입니다.",
                "emoji": "🍰"
              }
            ]
          },
          {
            "name": "체르마트",
            "nameEn": "Zermatt",
            "highlight": "마테호른 봉우리가 눈앞에 펼쳐지는 청정 마을",
            "attractions": [
              {
                "name": "고르너그라트 전망대",
                "nameEn": "Gornergrat",
                "desc": "마테호른을 가장 잘 볼 수 있는 기차역 전망대입니다.",
                "emoji": "🚂"
              },
              {
                "name": "마테호른 박물관",
                "nameEn": "Matterhorn Museum",
                "desc": "체르마트의 역사와 등반 기록을 볼 수 있는 곳입니다.",
                "emoji": "🏔️"
              }
            ],
            "foods": [
              {
                "name": "라클렛",
                "nameEn": "Raclette",
                "desc": "녹인 치즈를 감자 위에 얹어 먹는 겨울철 별미입니다.",
                "emoji": "🧀"
              },
              {
                "name": "말린 고기",
                "nameEn": "Bindenfleisch",
                "desc": "알프스에서 말린 짭짤하고 쫄깃한 육포입니다.",
                "emoji": "🍖"
              }
            ]
          },
          {
            "name": "제네바",
            "nameEn": "Geneva",
            "highlight": "거대한 분수 레만호와 국제기구의 도시",
            "attractions": [
              {
                "name": "제트 도",
                "nameEn": "Jet d'Eau",
                "desc": "레만 호수 위로 높게 솟구치는 거대한 분수입니다.",
                "emoji": "⛲"
              },
              {
                "name": "꽃시계",
                "nameEn": "Flower Clock",
                "desc": "영국 정원에 있는 꽃으로 장식된 아름다운 시계입니다.",
                "emoji": "🌸"
              }
            ],
            "foods": [
              {
                "name": "초콜릿",
                "nameEn": "Swiss Chocolate",
                "desc": "제네바의 고급 수제 초콜릿은 세계적으로 유명합니다.",
                "emoji": "🍫"
              },
              {
                "name": "필레 드 페르슈",
                "nameEn": "Filets de Perche",
                "desc": "레만 호수에서 잡은 민물고기 요리입니다.",
                "emoji": "🐟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "융프라우요흐",
            "nameEn": "Jungfraujoch (Top of Europe)",
            "desc": "산악기차를 타고 오르는 유럽에서 가장 높은 기차역과 만년설",
            "emoji": "🏔️"
          },
          {
            "name": "마테호른",
            "nameEn": "Matterhorn",
            "desc": "피라미드처럼 날카롭게 솟은 스위스 알프스의 상징 봉우리",
            "emoji": "⛰️"
          }
        ],
        "foods": [
          {
            "name": "치즈 퐁뒤",
            "nameEn": "Cheese Fondue",
            "desc": "따뜻하게 녹인 치즈에 바게트 빵을 콕 찍어 먹는 스위스 전통 요리",
            "emoji": "🫕"
          },
          {
            "name": "뢰스티",
            "nameEn": "Rosti",
            "desc": "채 썬 감자를 버터에 노릇노릇하게 구워낸 스위스식 감자전",
            "emoji": "🥔"
          }
        ]
      },
      {
        "id": "czech",
        "name": "체코",
        "nameEn": "Czech Republic",
        "flag": "🇨🇿",
        "destinations": [
          {
            "name": "프라하",
            "nameEn": "Prague",
            "highlight": "카를교와 천문시계탑이 있는 백탑의 도시",
            "attractions": [
              {
                "name": "카를교",
                "nameEn": "Charles Bridge",
                "desc": "프라하의 낭만을 느낄 수 있는 아름다운 석조 다리입니다.",
                "emoji": "🌉"
              },
              {
                "name": "프라하 성",
                "nameEn": "Prague Castle",
                "desc": "도시를 내려다보는 세계에서 가장 큰 고대 성입니다.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "굴라쉬",
                "nameEn": "Goulash",
                "desc": "고기와 채소를 푹 끓여 빵과 함께 먹는 스튜입니다.",
                "emoji": "🍲"
              },
              {
                "name": "뜨르들로",
                "nameEn": "Trdelnik",
                "desc": "굴뚝 모양의 빵에 설탕을 입혀 구운 길거리 간식입니다.",
                "emoji": "🥖"
              }
            ]
          },
          {
            "name": "체스키 크룸로프",
            "nameEn": "Cesky Krumlov",
            "highlight": "강이 휘감아 흐르는 동화 같은 중세 마을",
            "attractions": [
              {
                "name": "체스키 크룸로프 성",
                "nameEn": "Cesky Krumlov Castle",
                "desc": "마을 전체를 조망할 수 있는 붉은 지붕의 성입니다.",
                "emoji": "🏰"
              },
              {
                "name": "스보르노스티 광장",
                "nameEn": "Svornosti Square",
                "desc": "중세 분위기가 물씬 풍기는 마을의 중심 광장입니다.",
                "emoji": "🏘️"
              }
            ],
            "foods": [
              {
                "name": "스비치코바",
                "nameEn": "Svicova",
                "desc": "크림소스와 소고기를 곁들인 체코 전통 요리입니다.",
                "emoji": "🥩"
              },
              {
                "name": "맥주",
                "nameEn": "Czech Beer",
                "desc": "체코의 깊고 진한 풍미를 자랑하는 라거 맥주입니다.",
                "emoji": "🍺"
              }
            ]
          },
          {
            "name": "카를로비 바리",
            "nameEn": "Karlovy Vary",
            "highlight": "마시는 온천수로 유명한 고즈넉한 휴양지",
            "attractions": [
              {
                "name": "밀 콜로네이드",
                "nameEn": "Mill Colonnade",
                "desc": "온천수를 마실 수 있는 아름다운 건축물입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "온천 박물관",
                "nameEn": "Hot Spring Colonnade",
                "desc": "뜨거운 온천수가 솟아오르는 모습을 볼 수 있습니다.",
                "emoji": "♨️"
              }
            ],
            "foods": [
              {
                "name": "온천 과자",
                "nameEn": "Oplatky",
                "desc": "얇고 바삭한 원형의 달콤한 온천 과자입니다.",
                "emoji": "🍪"
              },
              {
                "name": "베헤로브카",
                "nameEn": "Becherovka",
                "desc": "약초로 만든 카를로비 바리의 전통 허브 리큐르입니다.",
                "emoji": "🥃"
              }
            ]
          },
          {
            "name": "브르노",
            "nameEn": "Brno",
            "highlight": "모라비아 지방의 예술과 건축의 중심",
            "attractions": [
              {
                "name": "슈필베르크 성",
                "nameEn": "Spilberk Castle",
                "desc": "브르노 시내를 지키는 역사적인 요새입니다.",
                "emoji": "🏰"
              },
              {
                "name": "성 베드로와 바오로 대성당",
                "nameEn": "Cathedral of St. Peter and Paul",
                "desc": "도시 어디서나 보이는 브르노의 랜드마크입니다.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "모라비아 와인",
                "nameEn": "Moravian Wine",
                "desc": "브르노가 속한 모라비아 지방의 고품질 와인입니다.",
                "emoji": "🍷"
              },
              {
                "name": "브르노 소시지",
                "nameEn": "Brno Sausage",
                "desc": "현지인들이 즐겨 먹는 육즙 가득한 소시지입니다.",
                "emoji": "🌭"
              }
            ]
          },
          {
            "name": "플젠",
            "nameEn": "Plzen",
            "highlight": "황금빛 라거 맥주의 발상지",
            "attractions": [
              {
                "name": "필스너 우르켈 양조장",
                "nameEn": "Pilsner Urquell Brewery",
                "desc": "라거 맥주의 역사가 시작된 유명한 양조장입니다.",
                "emoji": "🍺"
              },
              {
                "name": "성 바르톨로메오 대성당",
                "nameEn": "St. Bartholomew's Cathedral",
                "desc": "플젠 광장에 위치한 높은 첨탑의 성당입니다.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "필스너 맥주",
                "nameEn": "Pilsner Beer",
                "desc": "플젠에서 탄생한 황금빛 라거 맥주의 원조입니다.",
                "emoji": "🍻"
              },
              {
                "name": "체코식 족발",
                "nameEn": "Koleno",
                "desc": "겉은 바삭하고 속은 촉촉한 체코식 족발 요리입니다.",
                "emoji": "🍖"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "프라하 카를교",
            "nameEn": "Charles Bridge",
            "desc": "성인들의 조각상이 늘어선 블타바 강의 낭만적인 돌다리",
            "emoji": "🌉"
          },
          {
            "name": "프라하 천문시계",
            "nameEn": "Prague Astronomical Clock",
            "desc": "매시 정각마다 12사도가 나타나 움직이는 중세 시계탑",
            "emoji": "⏰"
          }
        ],
        "foods": [
          {
            "name": "뜨르들로 (굴뚝빵)",
            "nameEn": "Trdelnik (Chimney Cake)",
            "desc": "원통에 반죽을 돌돌 말아 구운 뒤 시나몬 설탕을 묻힌 달콤한 빵",
            "emoji": "🥐"
          },
          {
            "name": "굴라시",
            "nameEn": "Goulash with Dumplings",
            "desc": "파프리카 향미의 진한 고기 스튜를 빵과 함께 먹는 요리",
            "emoji": "🍲"
          }
        ]
      },
      {
        "id": "turkey",
        "name": "튀르키예",
        "nameEn": "Turkey",
        "flag": "🇹🇷",
        "destinations": [
          {
            "name": "이스탄불",
            "nameEn": "Istanbul",
            "highlight": "아시아와 유럽이 만나는 보스포루스 해협의 고도",
            "attractions": [
              {
                "name": "아야 소피아",
                "nameEn": "Hagia Sophia",
                "desc": "비잔틴 건축의 정수로 불리는 거대한 성당이자 사원입니다.",
                "emoji": "🕌"
              },
              {
                "name": "블루 모스크",
                "nameEn": "Blue Mosque",
                "desc": "푸른 타일로 장식된 이스탄불의 상징적인 사원입니다.",
                "emoji": "🕌"
              }
            ],
            "foods": [
              {
                "name": "케밥",
                "nameEn": "Kebab",
                "desc": "고기를 구워 채소와 함께 먹는 튀르키예 대표 음식입니다.",
                "emoji": "🥙"
              },
              {
                "name": "터키쉬 딜라이트",
                "nameEn": "Turkish Delight",
                "desc": "달콤하고 쫄깃한 식감의 전통 디저트입니다.",
                "emoji": "🍬"
              }
            ]
          },
          {
            "name": "카파도키아",
            "nameEn": "Cappadocia",
            "highlight": "수백 개의 열기구가 떠오르는 기암괴석 계곡",
            "attractions": [
              {
                "name": "괴레메 야외 박물관",
                "nameEn": "Goreme Open Air Museum",
                "desc": "바위를 깎아 만든 동굴 교회들이 모여 있는 곳입니다.",
                "emoji": "⛰️"
              },
              {
                "name": "우치히사르 성",
                "nameEn": "Uchisar Castle",
                "desc": "카파도키아에서 가장 높은 곳에 위치한 바위 성입니다.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "항아리 케밥",
                "nameEn": "Testi Kebab",
                "desc": "항아리에 고기와 채소를 넣고 구워 깨뜨려 먹는 요리입니다.",
                "emoji": "🏺"
              },
              {
                "name": "괴즐레메",
                "nameEn": "Gozleme",
                "desc": "얇은 반죽에 치즈나 시금치를 넣어 구운 튀르키예식 전입니다.",
                "emoji": "🥞"
              }
            ]
          },
          {
            "name": "파묵칼레",
            "nameEn": "Pamukkale",
            "highlight": "새하얀 석회붕과 에메랄드 온천수",
            "attractions": [
              {
                "name": "석회붕",
                "nameEn": "Travertines",
                "desc": "하얀 석회암이 계단식으로 펼쳐진 신비로운 자연 경관입니다.",
                "emoji": "🤍"
              },
              {
                "name": "히에라폴리스",
                "nameEn": "Hierapolis",
                "desc": "석회붕 바로 위에 위치한 고대 로마의 온천 도시 유적입니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "아이란",
                "nameEn": "Ayran",
                "desc": "요거트에 물과 소금을 섞어 만든 시원한 음료입니다.",
                "emoji": "🥛"
              },
              {
                "name": "피데",
                "nameEn": "Pide",
                "desc": "길쭉한 반죽 위에 고기와 치즈를 얹어 구운 튀르키예식 피자입니다.",
                "emoji": "🍕"
              }
            ]
          },
          {
            "name": "안탈리아",
            "nameEn": "Antalya",
            "highlight": "지중해 연안의 눈부신 휴양 해변과 고대 유적",
            "attractions": [
              {
                "name": "하드리아누스의 문",
                "nameEn": "Hadrian's Gate",
                "desc": "고대 로마 황제를 기념하기 위해 세워진 웅장한 문입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "칼레이치",
                "nameEn": "Kaleici",
                "desc": "좁은 골목과 오스만 양식의 집들이 있는 구시가지입니다.",
                "emoji": "🏘️"
              }
            ],
            "foods": [
              {
                "name": "피얄레",
                "nameEn": "Piyaz",
                "desc": "콩과 타히니 소스를 곁들인 안탈리아식 샐러드입니다.",
                "emoji": "🥗"
              },
              {
                "name": "해산물 요리",
                "nameEn": "Seafood",
                "desc": "지중해에서 갓 잡은 신선한 생선 구이 요리입니다.",
                "emoji": "🐟"
              }
            ]
          },
          {
            "name": "에페소스",
            "nameEn": "Ephesus",
            "highlight": "고대 로마 시대의 켈수스 도서관 유적",
            "attractions": [
              {
                "name": "켈수스 도서관",
                "nameEn": "Library of Celsus",
                "desc": "고대 로마의 화려한 건축미를 보여주는 도서관 유적입니다.",
                "emoji": "📚"
              },
              {
                "name": "대극장",
                "nameEn": "Great Theatre",
                "desc": "수만 명을 수용할 수 있었던 거대한 고대 야외 극장입니다.",
                "emoji": "🎭"
              }
            ],
            "foods": [
              {
                "name": "초르바",
                "nameEn": "Corba",
                "desc": "식사 전 입맛을 돋우는 튀르키예식 전통 수프입니다.",
                "emoji": "🥣"
              },
              {
                "name": "바클라바",
                "nameEn": "Baklava",
                "desc": "견과류를 층층이 쌓아 시럽을 뿌린 달콤한 페이스트리입니다.",
                "emoji": "🍯"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "카파도키아 열기구 투어",
            "nameEn": "Cappadocia Hot Air Balloon Tour",
            "desc": "일출과 함께 기암괴석 계곡 위로 수백 개 열기구가 날아오르는 장관",
            "emoji": "🎈"
          },
          {
            "name": "아야 소피아 대성당",
            "nameEn": "Hagia Sophia",
            "desc": "거대한 돔과 아름다운 모자이크로 장식된 역사적 건축물",
            "emoji": "🕌"
          }
        ],
        "foods": [
          {
            "name": "케밥",
            "nameEn": "Kebab",
            "desc": "불에 구운 향긋한 고기를 얇은 빵과 신선한 채소에 싸 먹는 요리",
            "emoji": "🥙"
          },
          {
            "name": "돈두르마 (터키 아이스크림)",
            "nameEn": "Dondurma (Stretchy Ice Cream)",
            "desc": "쫀득하게 쭉쭉 늘어나며 유쾌한 장난을 치는 터키 전통 아이스크림",
            "emoji": "🍦"
          }
        ]
      },
      {
        "id": "austria",
        "name": "오스트리아",
        "nameEn": "Austria",
        "flag": "🇦🇹",
        "destinations": [
          {
            "name": "비엔나",
            "nameEn": "Vienna",
            "highlight": "모차르트의 숨결과 쇤브룬 궁전이 있는 음악의 도시",
            "attractions": [
              {
                "name": "쇤브룬 궁전",
                "nameEn": "Schonbrunn Palace",
                "desc": "합스부르크 왕가의 화려한 여름 별궁입니다.",
                "emoji": "🏰"
              },
              {
                "name": "성 슈테판 대성당",
                "nameEn": "St. Stephen's Cathedral",
                "desc": "비엔나의 중심에 위치한 고딕 양식의 대성당입니다.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "자허 토르테",
                "nameEn": "Sacher Torte",
                "desc": "비엔나를 대표하는 진한 초콜릿 케이크입니다.",
                "emoji": "🍰"
              },
              {
                "name": "슈니첼",
                "nameEn": "Schnitzel",
                "desc": "얇게 핀 고기에 빵가루를 입혀 튀긴 오스트리아식 돈가스입니다.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "할슈타트",
            "nameEn": "Hallstatt",
            "highlight": "알프스 호숫가에 안긴 세상에서 가장 예쁜 마을",
            "attractions": [
              {
                "name": "할슈타트 호수",
                "nameEn": "Hallstatt Lake",
                "desc": "마을을 감싸고 있는 거울처럼 맑은 호수입니다.",
                "emoji": "🛶"
              },
              {
                "name": "소금 광산",
                "nameEn": "Salt Mine",
                "desc": "세계에서 가장 오래된 소금 광산 투어를 할 수 있습니다.",
                "emoji": "⛏️"
              }
            ],
            "foods": [
              {
                "name": "송어 구이",
                "nameEn": "Grilled Trout",
                "desc": "호수에서 잡은 신선한 송어를 구운 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "애플 슈트루델",
                "nameEn": "Apple Strudel",
                "desc": "사과를 얇은 반죽에 싸서 구운 오스트리아식 디저트입니다.",
                "emoji": "🍎"
              }
            ]
          },
          {
            "name": "잘츠부르크",
            "nameEn": "Salzburg",
            "highlight": "사운드 오브 뮤직의 촬영지와 호엔잘츠부르크 성",
            "attractions": [
              {
                "name": "호엔잘츠부르크 성",
                "nameEn": "Hohensalzburg Fortress",
                "desc": "도시를 내려다보는 잘츠부르크의 거대한 성입니다.",
                "emoji": "🏰"
              },
              {
                "name": "미라벨 정원",
                "nameEn": "Mirabell Gardens",
                "desc": "영화 사운드 오브 뮤직의 촬영지로 유명한 정원입니다.",
                "emoji": "🌸"
              }
            ],
            "foods": [
              {
                "name": "모차르트 쿠겔",
                "nameEn": "Mozartkugel",
                "desc": "모차르트 얼굴이 그려진 초콜릿 사탕입니다.",
                "emoji": "🍫"
              },
              {
                "name": "잘츠부르거 노케를",
                "nameEn": "Salzburger Nockerl",
                "desc": "구름처럼 폭신한 식감의 잘츠부르크식 수플레입니다.",
                "emoji": "☁️"
              }
            ]
          },
          {
            "name": "인스브루크",
            "nameEn": "Innsbruck",
            "highlight": "황금 지붕과 알프스 설산이 병풍처럼 둘러싼 도시",
            "attractions": [
              {
                "name": "황금 지붕",
                "nameEn": "Golden Roof",
                "desc": "인스브루크 구시가지의 상징인 화려한 발코니입니다.",
                "emoji": "✨"
              },
              {
                "name": "노르트케테 케이블카",
                "nameEn": "Nordkette Cable Car",
                "desc": "알프스 설산을 한눈에 볼 수 있는 케이블카입니다.",
                "emoji": "🚠"
              }
            ],
            "foods": [
              {
                "name": "티롤러 그뢰스틀",
                "nameEn": "Tiroler Grostl",
                "desc": "감자와 고기를 볶아 계란을 올린 티롤 지방 요리입니다.",
                "emoji": "🍳"
              },
              {
                "name": "크뇌델",
                "nameEn": "Knodel",
                "desc": "빵이나 감자를 뭉쳐 만든 오스트리아식 경단입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "그라츠",
            "nameEn": "Graz",
            "highlight": "시계탑 언덕과 붉은 기와지붕의 유네스코 도시",
            "attractions": [
              {
                "name": "시계탑",
                "nameEn": "Clock Tower",
                "desc": "그라츠 언덕 위에 위치한 도시의 상징입니다.",
                "emoji": "⏰"
              },
              {
                "name": "쿤스트하우스",
                "nameEn": "Kunsthaus Graz",
                "desc": "외계인 같은 독특한 외관의 현대 미술관입니다.",
                "emoji": "🎨"
              }
            ],
            "foods": [
              {
                "name": "호박씨 오일",
                "nameEn": "Pumpkin Seed Oil",
                "desc": "그라츠가 속한 슈타이어마르크의 고소한 특산 오일입니다.",
                "emoji": "🎃"
              },
              {
                "name": "슈타이어마르크 와인",
                "nameEn": "Styrian Wine",
                "desc": "그라츠 주변에서 생산되는 신선한 화이트 와인입니다.",
                "emoji": "🍷"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "쇤브룬 궁전",
            "nameEn": "Schonbrunn Palace",
            "desc": "합스부르크 왕가의 찬란한 노란빛 여름 별궁과 정원",
            "emoji": "🏰"
          },
          {
            "name": "할슈타트 호수 전망대",
            "nameEn": "Hallstatt Lake Skywalk",
            "desc": "엽서 속 풍경처럼 호수와 산이 한눈에 내려다보이는 공중 전망대",
            "emoji": "🏞️"
          }
        ],
        "foods": [
          {
            "name": "비엔나 슈니첼",
            "nameEn": "Wiener Schnitzel",
            "desc": "얇게 두드린 송아지고기를 황금빛으로 바삭하게 튀겨 레몬을 뿌려 먹는 커틀릿",
            "emoji": "🥩"
          },
          {
            "name": "자허토르테",
            "nameEn": "Sachertorte",
            "desc": "진한 초콜릿 케이크 사이에 살구잼을 넣은 비엔나의 대표 디저트",
            "emoji": "🍰"
          }
        ]
      }
    ]
  },
  {
    "id": "north_america",
    "name": "북아메리카",
    "nameEn": "North America",
    "emoji": "🗽",
    "description": "대도시의 역동성과 광활한 대자연이 공존하는 대륙",
    "countries": [
      {
        "id": "usa",
        "name": "미국",
        "nameEn": "United States",
        "flag": "🇺🇸",
        "destinations": [
          {
            "name": "뉴욕",
            "nameEn": "New York",
            "highlight": "자유의 여신상과 타임스스퀘어의 잠들지 않는 도시",
            "attractions": [
              {
                "name": "자유의 여신상",
                "nameEn": "Statue of Liberty",
                "desc": "미국의 자유와 민주주의를 상징하는 거대한 동상입니다.",
                "emoji": "🗽"
              },
              {
                "name": "타임스 스퀘어",
                "nameEn": "Times Square",
                "desc": "화려한 전광판과 공연장이 가득한 뉴욕의 중심지입니다.",
                "emoji": "✨"
              }
            ],
            "foods": [
              {
                "name": "뉴욕 피자",
                "nameEn": "NY Pizza",
                "desc": "얇고 넓은 도우를 접어서 먹는 뉴욕 스타일의 피자입니다.",
                "emoji": "🍕"
              },
              {
                "name": "베이글",
                "nameEn": "Bagel",
                "desc": "쫄깃한 식감이 일품인 뉴욕의 대표적인 아침 식사 메뉴입니다.",
                "emoji": "🥯"
              }
            ]
          },
          {
            "name": "로스앤젤레스",
            "nameEn": "Los Angeles",
            "highlight": "할리우드와 산타모니카 해변의 영화 도시",
            "attractions": [
              {
                "name": "할리우드 사인",
                "nameEn": "Hollywood Sign",
                "desc": "영화 산업의 중심지임을 알리는 상징적인 표지판입니다.",
                "emoji": "🎬"
              },
              {
                "name": "산타모니카 해변",
                "nameEn": "Santa Monica Beach",
                "desc": "아름다운 일몰과 놀이공원이 있는 유명한 해변입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "인앤아웃 버거",
                "nameEn": "In-N-Out Burger",
                "desc": "캘리포니아에서 시작된 신선한 재료의 수제 버거입니다.",
                "emoji": "🍔"
              },
              {
                "name": "타코",
                "nameEn": "Taco",
                "desc": "멕시코 문화의 영향을 받아 발달한 LA의 인기 길거리 음식입니다.",
                "emoji": "🌮"
              }
            ]
          },
          {
            "name": "샌프란시스코",
            "nameEn": "San Francisco",
            "highlight": "금문교와 언덕을 달리는 케이블카",
            "attractions": [
              {
                "name": "금문교",
                "nameEn": "Golden Gate Bridge",
                "desc": "샌프란시스코를 상징하는 붉은색의 거대한 현수교입니다.",
                "emoji": "🌉"
              },
              {
                "name": "피셔맨스 워프",
                "nameEn": "Fisherman's Wharf",
                "desc": "바다사자를 볼 수 있고 해산물 요리가 유명한 항구입니다.",
                "emoji": "🦀"
              }
            ],
            "foods": [
              {
                "name": "클램 차우더",
                "nameEn": "Clam Chowder",
                "desc": "사워도우 빵 그릇에 담겨 나오는 따뜻한 조개 수프입니다.",
                "emoji": "🥣"
              },
              {
                "name": "사워도우 브레드",
                "nameEn": "Sourdough Bread",
                "desc": "발효를 통해 시큼한 맛이 나는 샌프란시스코 특산 빵입니다.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "라스베이거스",
            "nameEn": "Las Vegas",
            "highlight": "사막 위에 세워진 화려한 엔터테인먼트의 도시",
            "attractions": [
              {
                "name": "벨라지오 분수쇼",
                "nameEn": "Bellagio Fountains",
                "desc": "음악에 맞춰 춤추는 화려한 분수 공연을 감상할 수 있습니다.",
                "emoji": "⛲"
              },
              {
                "name": "하이 롤러",
                "nameEn": "High Roller",
                "desc": "라스베이거스 전경을 한눈에 볼 수 있는 거대한 관람차입니다.",
                "emoji": "🎡"
              }
            ],
            "foods": [
              {
                "name": "뷔페",
                "nameEn": "Buffet",
                "desc": "라스베이거스의 호텔마다 제공하는 화려하고 다양한 음식들입니다.",
                "emoji": "🍽️"
              },
              {
                "name": "스테이크",
                "nameEn": "Steak",
                "desc": "고급 레스토랑에서 즐기는 육즙 가득한 미국식 스테이크입니다.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "하와이 호놀룰루",
            "nameEn": "Honolulu, Hawaii",
            "highlight": "와이키키 해변과 훌라 춤의 파라다이스",
            "attractions": [
              {
                "name": "와이키키 해변",
                "nameEn": "Waikiki Beach",
                "desc": "서핑과 휴양을 즐기기에 완벽한 세계적인 해변입니다.",
                "emoji": "🏄"
              },
              {
                "name": "다이아몬드 헤드",
                "nameEn": "Diamond Head",
                "desc": "호놀룰루 시내와 바다를 내려다볼 수 있는 화산 분화구입니다.",
                "emoji": "🌋"
              }
            ],
            "foods": [
              {
                "name": "포케",
                "nameEn": "Poke",
                "desc": "신선한 생선과 채소를 밥 위에 얹어 먹는 하와이식 덮밥입니다.",
                "emoji": "🥗"
              },
              {
                "name": "쉐이브 아이스",
                "nameEn": "Shave Ice",
                "desc": "곱게 간 얼음에 알록달록한 시럽을 뿌린 하와이 간식입니다.",
                "emoji": "🍧"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "자유의 여신상",
            "nameEn": "Statue of Liberty",
            "desc": "뉴욕 항구에서 횃불을 들고 자유를 상징하는 거대한 조각상",
            "emoji": "🗽"
          },
          {
            "name": "그랜드 캐니언",
            "nameEn": "Grand Canyon",
            "desc": "수억 년 동안 콜로라도 강이 빚어낸 거대한 붉은 협곡",
            "emoji": "🏜️"
          }
        ],
        "foods": [
          {
            "name": "수제 햄버거",
            "nameEn": "Classic Cheeseburger",
            "desc": "두툼한 소고기 패티와 녹아내린 치즈, 신선한 채소의 조화",
            "emoji": "🍔"
          },
          {
            "name": "뉴욕 치즈케이크",
            "nameEn": "New York Cheesecake",
            "desc": "크림치즈가 듬뿍 들어가 밀도 높고 진한 풍미의 케이크",
            "emoji": "🍰"
          }
        ]
      },
      {
        "id": "canada",
        "name": "캐나다",
        "nameEn": "Canada",
        "flag": "🇨🇦",
        "destinations": [
          {
            "name": "밴쿠버",
            "nameEn": "Vancouver",
            "highlight": "스탠리 파크와 푸른 바다가 어우러진 살기 좋은 도시",
            "attractions": [
              {
                "name": "스탠리 파크",
                "nameEn": "Stanley Park",
                "desc": "도심 속 거대한 자연을 느낄 수 있는 아름다운 공원입니다.",
                "emoji": "🌳"
              },
              {
                "name": "카필라노 현수교",
                "nameEn": "Capilano Suspension Bridge",
                "desc": "울창한 숲 위를 가로지르는 짜릿한 흔들 다리입니다.",
                "emoji": "🌲"
              }
            ],
            "foods": [
              {
                "name": "연어 요리",
                "nameEn": "Salmon",
                "desc": "밴쿠버의 청정 바다에서 잡은 신선한 연어 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "푸틴",
                "nameEn": "Poutine",
                "desc": "감자튀김 위에 치즈와 그레이비 소스를 얹은 캐나다 대표 음식입니다.",
                "emoji": "🍟"
              }
            ]
          },
          {
            "name": "토론토",
            "nameEn": "Toronto",
            "highlight": "CN 타워와 다양한 문화가 공존하는 최대 도시",
            "attractions": [
              {
                "name": "CN 타워",
                "nameEn": "CN Tower",
                "desc": "토론토의 스카이라인을 상징하는 높은 전망대 타워입니다.",
                "emoji": "🗼"
              },
              {
                "name": "로열 온타리오 박물관",
                "nameEn": "Royal Ontario Museum",
                "desc": "다양한 역사와 예술 작품을 만날 수 있는 대형 박물관입니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "피밀 베이컨 샌드위치",
                "nameEn": "Peameal Bacon Sandwich",
                "desc": "토론토의 명물인 옥수수 가루를 입힌 베이컨 샌드위치입니다.",
                "emoji": "🥪"
              },
              {
                "name": "비버테일",
                "nameEn": "BeaverTails",
                "desc": "비버 꼬리 모양의 달콤한 튀김 과자입니다.",
                "emoji": "🍩"
              }
            ]
          },
          {
            "name": "퀘벡 시티",
            "nameEn": "Quebec City",
            "highlight": "드라마 도깨비의 배경이 된 프랑스풍 올드타운",
            "attractions": [
              {
                "name": "샤토 프롱트낙 호텔",
                "nameEn": "Chateau Frontenac",
                "desc": "퀘벡의 랜드마크로 고풍스러운 성 같은 호텔입니다.",
                "emoji": "🏰"
              },
              {
                "name": "쁘띠 샹플랭 거리",
                "nameEn": "Petit Champlain",
                "desc": "아기자기한 상점들이 모여 있는 아름다운 골목길입니다.",
                "emoji": "🏘️"
              }
            ],
            "foods": [
              {
                "name": "투르티에르",
                "nameEn": "Tourtiere",
                "desc": "고기를 듬뿍 넣어 구운 퀘벡 전통 고기 파이입니다.",
                "emoji": "🥧"
              },
              {
                "name": "메이플 시럽",
                "nameEn": "Maple Syrup",
                "desc": "캐나다의 상징인 단풍나무에서 추출한 달콤한 시럽입니다.",
                "emoji": "🍁"
              }
            ]
          },
          {
            "name": "밴프",
            "nameEn": "Banff",
            "highlight": "에메랄드빛 레이크 루이스가 빛나는 로키산맥",
            "attractions": [
              {
                "name": "레이크 루이스",
                "nameEn": "Lake Louise",
                "desc": "에메랄드빛 호수와 로키산맥이 어우러진 절경입니다.",
                "emoji": "🏔️"
              },
              {
                "name": "밴프 곤돌라",
                "nameEn": "Banff Gondola",
                "desc": "설퍼산 정상에 올라 로키산맥을 한눈에 담을 수 있습니다.",
                "emoji": "🚠"
              }
            ],
            "foods": [
              {
                "name": "엘크 스테이크",
                "nameEn": "Elk Steak",
                "desc": "로키산맥 지역에서 맛볼 수 있는 담백한 엘크 고기 요리입니다.",
                "emoji": "🥩"
              },
              {
                "name": "버팔로 버거",
                "nameEn": "Buffalo Burger",
                "desc": "건강하고 맛이 좋은 버팔로 고기로 만든 수제 버거입니다.",
                "emoji": "🍔"
              }
            ]
          },
          {
            "name": "몬트리올",
            "nameEn": "Montreal",
            "highlight": "노트르담 성당과 재즈 페스티벌의 예술 도시",
            "attractions": [
              {
                "name": "노트르담 대성당",
                "nameEn": "Notre-Dame Basilica",
                "desc": "화려한 내부 장식이 돋보이는 아름다운 성당입니다.",
                "emoji": "⛪"
              },
              {
                "name": "몬트리올 구시가지",
                "nameEn": "Old Montreal",
                "desc": "유럽 분위기가 물씬 풍기는 역사적인 거리입니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "몬트리올 베이글",
                "nameEn": "Montreal Bagel",
                "desc": "화덕에 구워 쫄깃하고 고소한 몬트리올식 베이글입니다.",
                "emoji": "🥯"
              },
              {
                "name": "훈제 고기 샌드위치",
                "nameEn": "Smoked Meat Sandwich",
                "desc": "두툼한 훈제 고기가 가득 들어간 몬트리올의 명물입니다.",
                "emoji": "🥪"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "나이아가라 폭포",
            "nameEn": "Niagara Falls",
            "desc": "엄청난 굉음과 함께 쏟아지는 세계 3대 거대 폭포",
            "emoji": "🌊"
          },
          {
            "name": "로키산맥 레이크 루이스",
            "nameEn": "Lake Louise in Banff",
            "desc": "빙하가 녹아 만든 신비로운 에메랄드빛 호수",
            "emoji": "🏔️"
          }
        ],
        "foods": [
          {
            "name": "푸틴",
            "nameEn": "Poutine",
            "desc": "바삭한 감자튀김에 쫄깃한 치즈 커드와 따뜻한 그레이비 소스를 부은 캐나다 대표 간식",
            "emoji": "🍟"
          },
          {
            "name": "메이플 시럽 팬케이크",
            "nameEn": "Pancakes with Maple Syrup",
            "desc": "단풍나무 수액으로 만든 천연 메이플 시럽을 듬뿍 뿌린 폭신한 팬케이크",
            "emoji": "🥞"
          }
        ]
      },
      {
        "id": "mexico",
        "name": "멕시코",
        "nameEn": "Mexico",
        "flag": "🇲🇽",
        "destinations": [
          {
            "name": "칸쿤",
            "nameEn": "Cancun",
            "highlight": "카리브해의 눈부신 에메랄드빛 올인클루시브 휴양지",
            "attractions": [
              {
                "name": "치첸이트사",
                "nameEn": "Chichen Itza",
                "desc": "마야 문명의 거대한 피라미드가 있는 유적지입니다.",
                "emoji": "🗿"
              },
              {
                "name": "플라야 델피네스",
                "nameEn": "Playa Delfines",
                "desc": "칸쿤의 푸른 바다를 가장 잘 볼 수 있는 해변입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "세비체",
                "nameEn": "Ceviche",
                "desc": "해산물을 라임즙에 절여 만든 상큼한 멕시코식 회무침입니다.",
                "emoji": "🍋"
              },
              {
                "name": "코친타 피빌",
                "nameEn": "Cochinita Pibil",
                "desc": "돼지고기를 향신료와 함께 쪄낸 유카탄 반도의 전통 요리입니다.",
                "emoji": "🍖"
              }
            ]
          },
          {
            "name": "멕시코시티",
            "nameEn": "Mexico City",
            "highlight": "아즈텍 문명 유적과 프리다 칼로 박물관",
            "attractions": [
              {
                "name": "소칼로 광장",
                "nameEn": "Zocalo",
                "desc": "멕시코시티의 중심이자 역사적인 대광장입니다.",
                "emoji": "🚩"
              },
              {
                "name": "프리다 칼로 박물관",
                "nameEn": "Frida Kahlo Museum",
                "desc": "예술가 프리다 칼로의 삶과 작품을 볼 수 있는 곳입니다.",
                "emoji": "🎨"
              }
            ],
            "foods": [
              {
                "name": "타코 알 파스토르",
                "nameEn": "Tacos al Pastor",
                "desc": "회전 구이한 돼지고기를 넣은 멕시코시티 대표 타코입니다.",
                "emoji": "🌮"
              },
              {
                "name": "추로스",
                "nameEn": "Churros",
                "desc": "달콤한 설탕을 묻혀 초콜릿에 찍어 먹는 간식입니다.",
                "emoji": "🍫"
              }
            ]
          },
          {
            "name": "과나후아토",
            "nameEn": "Guanajuato",
            "highlight": "영화 코코의 모티브가 된 알록달록 언덕 도시",
            "attractions": [
              {
                "name": "키스 골목",
                "nameEn": "Callejon del Beso",
                "desc": "연인들이 키스하면 사랑이 이루어진다는 좁은 골목입니다.",
                "emoji": "💋"
              },
              {
                "name": "피필라 기념비",
                "nameEn": "Monumento al Pipila",
                "desc": "과나후아토의 알록달록한 전경을 내려다볼 수 있는 곳입니다.",
                "emoji": "🔭"
              }
            ],
            "foods": [
              {
                "name": "엔칠라다",
                "nameEn": "Enchiladas",
                "desc": "또르띠야에 고기와 치즈를 넣고 소스를 얹은 요리입니다.",
                "emoji": "🥘"
              },
              {
                "name": "과나후아토식 엠파나다",
                "nameEn": "Empanadas",
                "desc": "속을 꽉 채워 구워낸 멕시코식 만두입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "와하카",
            "nameEn": "Oaxaca",
            "highlight": "전통 축제 망자의 날과 미식의 성지",
            "attractions": [
              {
                "name": "산토 도밍고 성당",
                "nameEn": "Templo de Santo Domingo",
                "desc": "화려한 금빛 장식이 인상적인 와하카의 성당입니다.",
                "emoji": "⛪"
              },
              {
                "name": "몬테 알반",
                "nameEn": "Monte Alban",
                "desc": "산 정상에 위치한 고대 사포텍 문명의 유적지입니다.",
                "emoji": "⛰️"
              }
            ],
            "foods": [
              {
                "name": "몰레",
                "nameEn": "Mole",
                "desc": "초콜릿과 향신료를 섞어 만든 깊은 맛의 전통 소스입니다.",
                "emoji": "🍫"
              },
              {
                "name": "틀라유다",
                "nameEn": "Tlayuda",
                "desc": "바삭한 또르띠야 위에 다양한 재료를 올린 멕시코식 피자입니다.",
                "emoji": "🍕"
              }
            ]
          },
          {
            "name": "플라야 델 카르멘",
            "nameEn": "Playa del Carmen",
            "highlight": "신비로운 천연 동굴 우물 세노테의 도시",
            "attractions": [
              {
                "name": "킨토 아베니다",
                "nameEn": "Quinta Avenida",
                "desc": "상점과 식당이 즐비한 활기찬 5번가 거리입니다.",
                "emoji": "🛍️"
              },
              {
                "name": "세노테",
                "nameEn": "Cenote",
                "desc": "지하수가 고여 만들어진 신비로운 천연 수영장입니다.",
                "emoji": "🤿"
              }
            ],
            "foods": [
              {
                "name": "과카몰리",
                "nameEn": "Guacamole",
                "desc": "아보카도를 으깨 만든 신선한 멕시코식 소스입니다.",
                "emoji": "🥑"
              },
              {
                "name": "마르가리타",
                "nameEn": "Margarita",
                "desc": "라임과 데킬라로 만든 멕시코의 대표적인 칵테일입니다.",
                "emoji": "🍹"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "치첸이차 마야 피라미드",
            "nameEn": "Chichen Itza",
            "desc": "마야 문명의 천문학 지혜가 담긴 거대한 계단식 피라미드",
            "emoji": "🏛️"
          },
          {
            "name": "익킬 세노테",
            "nameEn": "Ik Kil Cenote",
            "desc": "덩굴 식물이 늘어진 땅속 천연 담수 싱크홀 수영장",
            "emoji": "🏊"
          }
        ],
        "foods": [
          {
            "name": "타코",
            "nameEn": "Tacos",
            "desc": "옥수수 또띠아에 직화 고기와 라임, 살사 소스를 얹은 대표 멕시코 요리",
            "emoji": "🌮"
          },
          {
            "name": "나초 & 과카몰리",
            "nameEn": "Nachos with Guacamole",
            "desc": "바삭한 나초 칩에 신선한 아보카도와 토마토 소스를 찍어 먹는 스낵",
            "emoji": "🥑"
          }
        ]
      },
      {
        "id": "cuba",
        "name": "쿠바",
        "nameEn": "Cuba",
        "flag": "🇨🇺",
        "destinations": [
          {
            "name": "아바나",
            "nameEn": "Havana",
            "highlight": "빈티지 올드카와 말레콘 해변 방파제",
            "attractions": [
              {
                "name": "말레콘",
                "nameEn": "Malecon",
                "desc": "바다를 따라 길게 뻗은 아바나의 상징적인 방파제입니다.",
                "emoji": "🌊"
              },
              {
                "name": "아바나 대성당",
                "nameEn": "Havana Cathedral",
                "desc": "올드 아바나의 중심에 있는 아름다운 바로크 양식 성당입니다.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "로파 비에하",
                "nameEn": "Ropa Vieja",
                "desc": "잘게 찢은 소고기를 토마토 소스에 볶은 쿠바 요리입니다.",
                "emoji": "🥘"
              },
              {
                "name": "모히토",
                "nameEn": "Mojito",
                "desc": "민트와 라임이 들어간 쿠바의 시원한 칵테일입니다.",
                "emoji": "🍸"
              }
            ]
          },
          {
            "name": "바라데로",
            "nameEn": "Varadero",
            "highlight": "카리브해의 하얀 모래와 투명한 바다",
            "attractions": [
              {
                "name": "바라데로 해변",
                "nameEn": "Varadero Beach",
                "desc": "눈부시게 하얀 모래와 투명한 바다가 펼쳐진 휴양지입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "호소네 공원",
                "nameEn": "Josone Park",
                "desc": "아름다운 정원과 호수가 있는 평화로운 공원입니다.",
                "emoji": "🌿"
              }
            ],
            "foods": [
              {
                "name": "랍스터",
                "nameEn": "Lobster",
                "desc": "바라데로에서 저렴하고 신선하게 즐길 수 있는 해산물입니다.",
                "emoji": "🦞"
              },
              {
                "name": "피냐 콜라다",
                "nameEn": "Pina Colada",
                "desc": "파인애플과 코코넛이 들어간 달콤한 열대 음료입니다.",
                "emoji": "🍍"
              }
            ]
          },
          {
            "name": "트리니다드",
            "nameEn": "Trinidad",
            "highlight": "파스텔톤 스페인 식민지 시대 건물과 돌길",
            "attractions": [
              {
                "name": "마요르 광장",
                "nameEn": "Plaza Mayor",
                "desc": "식민지 시대의 건축물로 둘러싸인 트리니다드의 중심지입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "안콘 해변",
                "nameEn": "Ancon Beach",
                "desc": "트리니다드 근처의 조용하고 아름다운 해변입니다.",
                "emoji": "🐚"
              }
            ],
            "foods": [
              {
                "name": "카나찬차라",
                "nameEn": "Canchanchara",
                "desc": "꿀과 럼을 섞어 만든 트리니다드 전통 칵테일입니다.",
                "emoji": "🍯"
              },
              {
                "name": "쿠바식 샌드위치",
                "nameEn": "Cuban Sandwich",
                "desc": "햄과 치즈를 넣어 바삭하게 구운 샌드위치입니다.",
                "emoji": "🥪"
              }
            ]
          },
          {
            "name": "비냘레스",
            "nameEn": "Vinales",
            "highlight": "거대한 석회암 카르스트 언덕과 담배 농장",
            "attractions": [
              {
                "name": "선사시대 벽화",
                "nameEn": "Mural de la Prehistoria",
                "desc": "거대한 바위산에 그려진 화려한 벽화입니다.",
                "emoji": "🎨"
              },
              {
                "name": "인디언 동굴",
                "nameEn": "Cueva del Indio",
                "desc": "보트를 타고 탐험할 수 있는 신비로운 동굴입니다.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "말라가",
                "nameEn": "Malanga",
                "desc": "쿠바에서 즐겨 먹는 고구마와 비슷한 뿌리 채소 요리입니다.",
                "emoji": "🍠"
              },
              {
                "name": "구아바 주스",
                "nameEn": "Guava Juice",
                "desc": "비냘레스 농장에서 갓 딴 과일로 만든 신선한 주스입니다.",
                "emoji": "🥤"
              }
            ]
          },
          {
            "name": "시엔푸에고스",
            "nameEn": "Cienfuegos",
            "highlight": "남부의 진주라 불리는 신고전주의 건축 도시",
            "attractions": [
              {
                "name": "토마스 테리 극장",
                "nameEn": "Tomas Terry Theater",
                "desc": "아름다운 내부 장식을 자랑하는 역사적인 극장입니다.",
                "emoji": "🎭"
              },
              {
                "name": "푸에르토 데 시엔푸에고스",
                "nameEn": "Cienfuegos Bay",
                "desc": "남부의 진주라 불리는 아름다운 항구 도시의 바다입니다.",
                "emoji": "⚓"
              }
            ],
            "foods": [
              {
                "name": "생선 튀김",
                "nameEn": "Fried Fish",
                "desc": "항구 도시답게 갓 잡은 생선을 바삭하게 튀긴 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "플라타노",
                "nameEn": "Platano",
                "desc": "바나나를 튀겨 만든 쿠바의 대중적인 사이드 메뉴입니다.",
                "emoji": "🍌"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "아바나 말레콘 해안도로",
            "nameEn": "Malecon Seaside",
            "desc": "파도가 부서지는 긴 방파제 위에서 클래식 올드카를 타고 달리는 도로",
            "emoji": "🚗"
          },
          {
            "name": "카피톨리오 국회의사당",
            "nameEn": "El Capitolio",
            "desc": "아바나 중심부에 위치한 웅장한 돔 건축물",
            "emoji": "🏛️"
          }
        ],
        "foods": [
          {
            "name": "쿠바 샌드위치",
            "nameEn": "Cuban Sandwich",
            "desc": "구운 돼지고기와 햄, 스위스 치즈, 피클을 넣어 그릴에 바삭하게 누른 샌드위치",
            "emoji": "🥪"
          },
          {
            "name": "모히토 (무알콜)",
            "nameEn": "Virgin Mojito",
            "desc": "신선한 민트 잎과 라임즙, 탄산수가 어우러진 상쾌한 쿠바 음료",
            "emoji": "🍹"
          }
        ]
      },
      {
        "id": "costa_rica",
        "name": "코스타리카",
        "nameEn": "Costa Rica",
        "flag": "🇨🇷",
        "destinations": [
          {
            "name": "아레날",
            "nameEn": "Arenal",
            "highlight": "원추형 활화산과 열대 온천",
            "attractions": [
              {
                "name": "아레날 화산",
                "nameEn": "Arenal Volcano",
                "desc": "완벽한 원추형 모양을 자랑하는 활화산입니다.",
                "emoji": "🌋"
              },
              {
                "name": "타바콘 온천",
                "nameEn": "Tabacon Hot Springs",
                "desc": "화산 열로 데워진 자연 속의 따뜻한 온천입니다.",
                "emoji": "♨️"
              }
            ],
            "foods": [
              {
                "name": "가요 핀토",
                "nameEn": "Gallo Pinto",
                "desc": "콩과 밥을 볶아 만든 코스타리카의 아침 식사입니다.",
                "emoji": "🍚"
              },
              {
                "name": "카사도",
                "nameEn": "Casado",
                "desc": "고기, 샐러드, 밥이 한 접시에 나오는 정식 메뉴입니다.",
                "emoji": "🍱"
              }
            ]
          },
          {
            "name": "몬테베르데",
            "nameEn": "Monteverde",
            "highlight": "구름이 머무는 신비로운 운무림과 집라인",
            "attractions": [
              {
                "name": "운무림 보호구역",
                "nameEn": "Cloud Forest Reserve",
                "desc": "구름 속에 잠긴 신비로운 숲을 탐험할 수 있습니다.",
                "emoji": "☁️"
              },
              {
                "name": "집라인",
                "nameEn": "Zipline",
                "desc": "숲 위를 빠르게 가로지르는 짜릿한 액티비티입니다.",
                "emoji": "🪂"
              }
            ],
            "foods": [
              {
                "name": "커피",
                "nameEn": "Coffee",
                "desc": "몬테베르데의 고산지대에서 재배한 향긋한 커피입니다.",
                "emoji": "☕"
              },
              {
                "name": "치즈",
                "nameEn": "Cheese",
                "desc": "이 지역에서 생산되는 신선하고 고소한 수제 치즈입니다.",
                "emoji": "🧀"
              }
            ]
          },
          {
            "name": "마누엘 안토니오",
            "nameEn": "Manuel Antonio",
            "highlight": "나무늘보가 사는 국립공원과 해변",
            "attractions": [
              {
                "name": "마누엘 안토니오 국립공원",
                "nameEn": "Manuel Antonio National Park",
                "desc": "나무늘보와 원숭이를 만날 수 있는 아름다운 공원입니다.",
                "emoji": "🐒"
              },
              {
                "name": "에스파디야 해변",
                "nameEn": "Espadilla Beach",
                "desc": "국립공원 옆에 위치한 평화로운 해변입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "세비체",
                "nameEn": "Ceviche",
                "desc": "해안가에서 즐기는 신선한 해산물 요리입니다.",
                "emoji": "🍋"
              },
              {
                "name": "파파야",
                "nameEn": "Papaya",
                "desc": "열대 기후에서 자란 달콤한 파파야 과일입니다.",
                "emoji": "🥭"
              }
            ]
          },
          {
            "name": "산호세",
            "nameEn": "San Jose",
            "highlight": "국립극장과 커피 농장이 있는 수도",
            "attractions": [
              {
                "name": "국립극장",
                "nameEn": "National Theater",
                "desc": "화려한 건축미를 자랑하는 코스타리카의 상징입니다.",
                "emoji": "🎭"
              },
              {
                "name": "황금 박물관",
                "nameEn": "Gold Museum",
                "desc": "고대 금 유물들을 전시한 흥미로운 박물관입니다.",
                "emoji": "💰"
              }
            ],
            "foods": [
              {
                "name": "올리야 데 카르네",
                "nameEn": "Olla de Carne",
                "desc": "고기와 채소를 푹 끓여 만든 영양 만점 수프입니다.",
                "emoji": "🍲"
              },
              {
                "name": "엠파나다",
                "nameEn": "Empanada",
                "desc": "길거리에서 쉽게 사 먹을 수 있는 든든한 간식입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "토르투게로",
            "nameEn": "Tortuguero",
            "highlight": "바다거북이 알을 낳는 아마존 스타일의 운하",
            "attractions": [
              {
                "name": "토르투게로 국립공원",
                "nameEn": "Tortuguero National Park",
                "desc": "바다거북이 알을 낳으러 오는 보호구역입니다.",
                "emoji": "🐢"
              },
              {
                "name": "운하 투어",
                "nameEn": "Canal Tour",
                "desc": "보트를 타고 정글 운하를 탐험하는 투어입니다.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "코코넛 밥",
                "nameEn": "Coconut Rice",
                "desc": "코코넛 밀크로 지어 고소한 맛이 나는 밥입니다.",
                "emoji": "🥥"
              },
              {
                "name": "카리브해 생선 요리",
                "nameEn": "Caribbean Fish",
                "desc": "향신료를 곁들여 구운 신선한 생선 요리입니다.",
                "emoji": "🐟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "몬테베르데 구름숲 캐노피",
            "nameEn": "Monteverde Cloud Forest Canopy",
            "desc": "원시 열대림 나무 꼭대기 사이를 가로지르는 긴 출렁다리와 집라인",
            "emoji": "🌉"
          },
          {
            "name": "아레날 화산 국립공원",
            "nameEn": "Arenal Volcano",
            "desc": "웅장한 화산 전경과 자연 지열 온천욕을 즐기는 생태 관광지",
            "emoji": "🌋"
          }
        ],
        "foods": [
          {
            "name": "가요 핀토",
            "nameEn": "Gallo Pinto",
            "desc": "검은콩과 쌀, 향신료를 함께 볶아 달걀, 플랜테인 바나나와 먹는 국민 아침 식사",
            "emoji": "🍳"
          },
          {
            "name": "코스타리카 스페셜티 커피",
            "nameEn": "Costa Rican Coffee",
            "desc": "비옥한 화산재 토양에서 자란 향긋하고 부드러운 핸드드립 커피",
            "emoji": "☕"
          }
        ]
      },
      {
        "id": "panama",
        "name": "파나마",
        "nameEn": "Panama",
        "flag": "🇵🇦",
        "destinations": [
          {
            "name": "파나마시티",
            "nameEn": "Panama City",
            "highlight": "태평양과 운하가 만나는 현대적인 마천루 도시",
            "attractions": [
              {
                "name": "파나마 운하",
                "nameEn": "Panama Canal",
                "desc": "태평양과 대서양을 잇는 세계적인 공학적 경이로움을 볼 수 있습니다.",
                "emoji": "🚢"
              },
              {
                "name": "카스코 비에호",
                "nameEn": "Casco Viejo",
                "desc": "파나마시티의 역사적인 구시가지로 아름다운 식민지풍 건물이 가득합니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "세비체",
                "nameEn": "Ceviche",
                "desc": "신선한 해산물을 라임즙에 절여 상큼하게 즐기는 파나마 대표 요리입니다.",
                "emoji": "🍋"
              },
              {
                "name": "산코초",
                "nameEn": "Sancocho",
                "desc": "닭고기와 채소를 푹 끓여 만든 파나마의 전통 보양식 수프입니다.",
                "emoji": "🍲"
              }
            ]
          },
          {
            "name": "보카스 델 토로",
            "nameEn": "Bocas del Toro",
            "highlight": "카리브해의 수상 가옥과 불가사리 해변",
            "attractions": [
              {
                "name": "스타피쉬 비치",
                "nameEn": "Starfish Beach",
                "desc": "맑은 바닷속에서 수많은 불가사리를 직접 관찰할 수 있는 해변입니다.",
                "emoji": "⭐"
              },
              {
                "name": "바스티멘토스 섬",
                "nameEn": "Bastimentos Island",
                "desc": "울창한 정글과 아름다운 해변이 어우러진 자연 친화적인 섬입니다.",
                "emoji": "🌴"
              }
            ],
            "foods": [
              {
                "name": "론 돈",
                "nameEn": "Rondon",
                "desc": "코코넛 밀크와 생선, 각종 채소를 넣어 끓인 카리브해 스타일 스튜입니다.",
                "emoji": "🥥"
              },
              {
                "name": "튀긴 플랜틴",
                "nameEn": "Patacones",
                "desc": "바나나와 비슷한 플랜틴을 납작하게 눌러 바삭하게 튀긴 간식입니다.",
                "emoji": "🍌"
              }
            ]
          },
          {
            "name": "보케테",
            "nameEn": "Boquete",
            "highlight": "세계 최고급 게이샤 커피 농장이 있는 고원",
            "attractions": [
              {
                "name": "바루 화산",
                "nameEn": "Volcan Baru",
                "desc": "파나마에서 가장 높은 화산으로 정상에서 두 바다를 동시에 볼 수 있습니다.",
                "emoji": "🌋"
              },
              {
                "name": "커피 농장",
                "nameEn": "Coffee Plantations",
                "desc": "세계적으로 유명한 게이샤 커피의 생산 과정을 직접 체험할 수 있습니다.",
                "emoji": "☕"
              }
            ],
            "foods": [
              {
                "name": "게이샤 커피",
                "nameEn": "Geisha Coffee",
                "desc": "보케테의 고산지대에서 재배되는 세계 최고급 향의 커피입니다.",
                "emoji": "☕"
              },
              {
                "name": "트루차",
                "nameEn": "Trucha",
                "desc": "보케테의 맑은 계곡에서 잡은 신선한 송어 요리입니다.",
                "emoji": "🐟"
              }
            ]
          },
          {
            "name": "산블라스 제도",
            "nameEn": "San Blas Islands",
            "highlight": "쿠나 원주민이 지키는 365개의 낙원 산호섬",
            "attractions": [
              {
                "name": "페로 치코",
                "nameEn": "Perro Chico",
                "desc": "투명한 에메랄드빛 바다와 하얀 모래사장이 펼쳐진 아름다운 섬입니다.",
                "emoji": "🏝️"
              },
              {
                "name": "쿠나 야라",
                "nameEn": "Guna Yala",
                "desc": "원주민 쿠나족의 전통 문화와 생활 방식을 엿볼 수 있는 지역입니다.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "생선 구이",
                "nameEn": "Grilled Fish",
                "desc": "갓 잡은 신선한 생선을 숯불에 구워 담백하게 즐기는 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "코코넛 밥",
                "nameEn": "Coconut Rice",
                "desc": "코코넛 밀크로 지어 고소한 풍미가 일품인 현지 주식입니다.",
                "emoji": "🍚"
              }
            ]
          },
          {
            "name": "콜론",
            "nameEn": "Colon",
            "highlight": "대서양 측 파나마 운하의 주요 항구",
            "attractions": [
              {
                "name": "포르토벨로",
                "nameEn": "Portobelo",
                "desc": "스페인 식민지 시대의 요새 유적지가 남아있는 역사적인 항구 마을입니다.",
                "emoji": "🏰"
              },
              {
                "name": "가툰 호수",
                "nameEn": "Gatun Lake",
                "desc": "파나마 운하의 핵심 구간으로 거대한 인공 호수의 풍경이 장관입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "카리브해 해산물",
                "nameEn": "Caribbean Seafood",
                "desc": "대서양에서 갓 잡아 올린 신선한 해산물 요리를 맛볼 수 있습니다.",
                "emoji": "🦐"
              },
              {
                "name": "코코넛 빵",
                "nameEn": "Coconut Bread",
                "desc": "코코넛 향이 은은하게 퍼지는 달콤하고 부드러운 현지 빵입니다.",
                "emoji": "🍞"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "파나마 운하 미라플로레스 수문",
            "nameEn": "Panama Canal Miraflores Locks",
            "desc": "태평양과 대서양을 잇는 거대한 수문에서 대형 화물선이 통과하는 공학의 기적",
            "emoji": "🚢"
          },
          {
            "name": "카스코 비에호 올드타운",
            "nameEn": "Casco Viejo",
            "desc": "스페인 식민지 시대의 벽돌 골목과 유서 깊은 광장",
            "emoji": "🏘️"
          }
        ],
        "foods": [
          {
            "name": "세비체",
            "nameEn": "Ceviche",
            "desc": "신선한 생선살을 라임즙에 절여 양파와 고수를 곁들인 상큼한 해산물 샐러드",
            "emoji": "🐟"
          },
          {
            "name": "파타코네스",
            "nameEn": "Patacones",
            "desc": "풋바나나를 납작하게 눌러 바삭하게 튀긴 고소한 플랜테인 칩",
            "emoji": "🍌"
          }
        ]
      },
      {
        "id": "jamaica",
        "name": "자메이카",
        "nameEn": "Jamaica",
        "flag": "🇯🇲",
        "destinations": [
          {
            "name": "몬테고 베이",
            "nameEn": "Montego Bay",
            "highlight": "투명한 닥터스 케이브 비치와 레게 음악의 휴양지",
            "attractions": [
              {
                "name": "닥터스 케이브 비치",
                "nameEn": "Doctor's Cave Beach",
                "desc": "치유의 효능이 있다고 알려진 맑고 투명한 바닷물로 유명한 해변입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "로즈 홀 그레이트 하우스",
                "nameEn": "Rose Hall Great House",
                "desc": "자메이카의 전설적인 유령 이야기가 깃든 아름다운 저택입니다.",
                "emoji": "🏠"
              }
            ],
            "foods": [
              {
                "name": "저크 치킨",
                "nameEn": "Jerk Chicken",
                "desc": "자메이카 특유의 향신료를 발라 숯불에 구운 매콤한 닭고기 요리입니다.",
                "emoji": "🍗"
              },
              {
                "name": "아키 앤 솔트피쉬",
                "nameEn": "Ackee and Saltfish",
                "desc": "자메이카의 국민 음식으로 아키 열매와 염장 대구를 볶은 요리입니다.",
                "emoji": "🍳"
              }
            ]
          },
          {
            "name": "킹스턴",
            "nameEn": "Kingston",
            "highlight": "밥 말리 박물관과 블루마운틴 산맥의 수도",
            "attractions": [
              {
                "name": "밥 말리 박물관",
                "nameEn": "Bob Marley Museum",
                "desc": "레게 음악의 전설 밥 말리가 살았던 집을 개조한 박물관입니다.",
                "emoji": "🎸"
              },
              {
                "name": "블루마운틴",
                "nameEn": "Blue Mountains",
                "desc": "세계적인 커피 생산지이자 아름다운 하이킹 코스를 자랑하는 산맥입니다.",
                "emoji": "⛰️"
              }
            ],
            "foods": [
              {
                "name": "블루마운틴 커피",
                "nameEn": "Blue Mountain Coffee",
                "desc": "부드러운 맛과 풍부한 향으로 세계 3대 커피로 꼽히는 명품 커피입니다.",
                "emoji": "☕"
              },
              {
                "name": "패티",
                "nameEn": "Patty",
                "desc": "고기나 채소를 넣고 구운 자메이카식 파이로 간편한 간식입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "오초 리오스",
            "nameEn": "Ocho Rios",
            "highlight": "던스 리버 폭포 오르기 체험",
            "attractions": [
              {
                "name": "던스 리버 폭포",
                "nameEn": "Dunn's River Falls",
                "desc": "계단식 폭포를 직접 오르며 물놀이를 즐길 수 있는 인기 명소입니다.",
                "emoji": "💦"
              },
              {
                "name": "돌핀 코브",
                "nameEn": "Dolphin Cove",
                "desc": "돌고래와 함께 수영하고 해양 생물을 관찰할 수 있는 공원입니다.",
                "emoji": "🐬"
              }
            ],
            "foods": [
              {
                "name": "스팀 피쉬",
                "nameEn": "Steamed Fish",
                "desc": "신선한 생선과 채소를 향신료와 함께 쪄낸 건강한 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "밤",
                "nameEn": "Bammy",
                "desc": "카사바 뿌리로 만든 자메이카 전통 납작 빵입니다.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "네그릴",
            "nameEn": "Negril",
            "highlight": "7마일 백사장과 석양이 아름다운 릭스 카페",
            "attractions": [
              {
                "name": "세븐 마일 비치",
                "nameEn": "Seven Mile Beach",
                "desc": "끝없이 펼쳐진 하얀 모래사장과 에메랄드빛 바다가 환상적인 곳입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "릭스 카페",
                "nameEn": "Rick's Cafe",
                "desc": "절벽 다이빙을 구경하며 아름다운 석양을 감상할 수 있는 명소입니다.",
                "emoji": "🌅"
              }
            ],
            "foods": [
              {
                "name": "스파이시 쉬림프",
                "nameEn": "Spicy Shrimp",
                "desc": "현지 향신료로 강렬하게 맛을 낸 신선한 새우 요리입니다.",
                "emoji": "🍤"
              },
              {
                "name": "럼 펀치",
                "nameEn": "Rum Punch",
                "desc": "자메이카 럼을 베이스로 과일 주스를 섞은 달콤한 칵테일입니다.",
                "emoji": "🍹"
              }
            ]
          },
          {
            "name": "포트 안토니오",
            "nameEn": "Port Antonio",
            "highlight": "푸른 라군과 대나무 뗏목 래프팅",
            "attractions": [
              {
                "name": "블루 라군",
                "nameEn": "Blue Lagoon",
                "desc": "깊이에 따라 색이 변하는 신비롭고 푸른 빛의 호수입니다.",
                "emoji": "💙"
              },
              {
                "name": "리오 그란데",
                "nameEn": "Rio Grande",
                "desc": "대나무 뗏목을 타고 강을 따라 내려가는 평화로운 체험을 할 수 있습니다.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "페퍼팟 수프",
                "nameEn": "Pepperpot Soup",
                "desc": "고기와 채소, 칼랄루 잎을 넣어 푹 끓인 진한 전통 수프입니다.",
                "emoji": "🍲"
              },
              {
                "name": "칼랄루",
                "nameEn": "Callaloo",
                "desc": "자메이카에서 즐겨 먹는 영양가 높은 잎채소 볶음 요리입니다.",
                "emoji": "🥬"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "던스 리버 폭포",
            "nameEn": "Dunn's River Falls",
            "desc": "바다로 바로 쏟아지는 계단형 석회암 폭포를 손잡고 직접 걸어 올라가는 명소",
            "emoji": "🏞️"
          },
          {
            "name": "밥 말리 박물관",
            "nameEn": "Bob Marley Museum",
            "desc": "레게 음악의 전설 밥 말리가 살았던 집과 음반 스튜디오",
            "emoji": "🎸"
          }
        ],
        "foods": [
          {
            "name": "저크 치킨",
            "nameEn": "Jerk Chicken",
            "desc": "올스파이스와 스카치보닛 고추로 매콤하게 양념해 숯불에 구운 닭고기",
            "emoji": "🍗"
          },
          {
            "name": "자메이카 패티",
            "nameEn": "Jamaican Patty",
            "desc": "노란 페이스트리 안에 매콤하게 양념한 다진 소고기를 채운 파이",
            "emoji": "🥟"
          }
        ]
      },
      {
        "id": "dominican_rep",
        "name": "도미니카 공화국",
        "nameEn": "Dominican Republic",
        "flag": "🇩🇴",
        "destinations": [
          {
            "name": "푼타카나",
            "nameEn": "Punta Cana",
            "highlight": "야자수가 늘어선 끝없는 카리브해 올인클루시브 리조트",
            "attractions": [
              {
                "name": "바바로 비치",
                "nameEn": "Bavaro Beach",
                "desc": "야자수가 늘어선 끝없는 백사장에서 휴식을 취할 수 있는 해변입니다.",
                "emoji": "🌴"
              },
              {
                "name": "오요 아줄",
                "nameEn": "Hoyo Azul",
                "desc": "정글 속에 숨겨진 신비로운 푸른 빛의 천연 수영장입니다.",
                "emoji": "🏊"
              }
            ],
            "foods": [
              {
                "name": "라 반데라",
                "nameEn": "La Bandera",
                "desc": "밥, 콩, 고기를 한 접시에 담아 먹는 도미니카의 가정식입니다.",
                "emoji": "🍛"
              },
              {
                "name": "망구",
                "nameEn": "Mangu",
                "desc": "으깬 플랜틴에 양파 볶음을 곁들여 먹는 아침 식사 메뉴입니다.",
                "emoji": "🍌"
              }
            ]
          },
          {
            "name": "산토도밍고",
            "nameEn": "Santo Domingo",
            "highlight": "아메리카 대륙 최초의 대성당이 있는 식민지 역사 지구",
            "attractions": [
              {
                "name": "산타 마리아 라 메노르 대성당",
                "nameEn": "Cathedral of Santa Maria la Menor",
                "desc": "아메리카 대륙에서 가장 오래된 역사를 가진 성당입니다.",
                "emoji": "⛪"
              },
              {
                "name": "콜론 등대",
                "nameEn": "Faro a Colon",
                "desc": "콜럼버스를 기리기 위해 세워진 거대한 십자가 모양의 기념관입니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "산코초",
                "nameEn": "Sancocho",
                "desc": "여러 종류의 고기와 뿌리채소를 넣고 끓인 도미니카식 보양식입니다.",
                "emoji": "🍲"
              },
              {
                "name": "치차론",
                "nameEn": "Chicharron",
                "desc": "돼지 껍데기를 바삭하게 튀겨낸 고소한 간식입니다.",
                "emoji": "🥓"
              }
            ]
          },
          {
            "name": "푸에르토 플라타",
            "nameEn": "Puerto Plata",
            "highlight": "케이블카와 해안 요새",
            "attractions": [
              {
                "name": "이사벨 데 토레스 산",
                "nameEn": "Mount Isabel de Torres",
                "desc": "케이블카를 타고 올라가 도시 전경과 예수상을 볼 수 있는 산입니다.",
                "emoji": "🚠"
              },
              {
                "name": "산 펠리페 요새",
                "nameEn": "Fortaleza San Felipe",
                "desc": "해안을 지키기 위해 세워진 역사적인 요새로 박물관이 있습니다.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "페스카도 프리토",
                "nameEn": "Pescado Frito",
                "desc": "신선한 생선을 통째로 바삭하게 튀겨낸 해안가 별미입니다.",
                "emoji": "🐟"
              },
              {
                "name": "코코넛 사탕",
                "nameEn": "Dulce de Coco",
                "desc": "코코넛과 설탕을 졸여 만든 달콤한 전통 디저트입니다.",
                "emoji": "🍬"
              }
            ]
          },
          {
            "name": "사마나",
            "nameEn": "Samana",
            "highlight": "혹등고래를 가까이서 관찰할 수 있는 청정 반도",
            "attractions": [
              {
                "name": "엘 리몬 폭포",
                "nameEn": "El Limon Waterfall",
                "desc": "정글 속을 지나 만나는 웅장한 폭포로 수영을 즐길 수 있습니다.",
                "emoji": "🌊"
              },
              {
                "name": "로스 아이티세스 국립공원",
                "nameEn": "Los Haitises National Park",
                "desc": "석회암 지형과 맹그로브 숲이 어우러진 생태계의 보고입니다.",
                "emoji": "🌿"
              }
            ],
            "foods": [
              {
                "name": "코코넛 생선 요리",
                "nameEn": "Fish in Coconut Sauce",
                "desc": "사마나 지역 특산물인 코코넛 밀크로 생선을 졸인 요리입니다.",
                "emoji": "🥥"
              },
              {
                "name": "카사바 빵",
                "nameEn": "Casabe",
                "desc": "카사바 가루로 만든 얇고 바삭한 전통 빵입니다.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "라 로마나",
            "nameEn": "La Romana",
            "highlight": "지중해 중세 마을을 재현한 알토스 데 차본",
            "attractions": [
              {
                "name": "알토스 데 차본",
                "nameEn": "Altos de Chavon",
                "desc": "16세기 지중해 마을을 그대로 재현해 놓은 예술가들의 마을입니다.",
                "emoji": "🎨"
              },
              {
                "name": "카탈리나 섬",
                "nameEn": "Catalina Island",
                "desc": "스노클링과 다이빙을 즐기기에 최적인 아름다운 섬입니다.",
                "emoji": "🤿"
              }
            ],
            "foods": [
              {
                "name": "로스트 포크",
                "nameEn": "Puerco Asado",
                "desc": "향신료에 재운 돼지고기를 통째로 구워낸 잔치 음식입니다.",
                "emoji": "🍖"
              },
              {
                "name": "트로피컬 주스",
                "nameEn": "Tropical Juice",
                "desc": "현지에서 나는 신선한 열대 과일로 만든 상큼한 음료입니다.",
                "emoji": "🍹"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "사오나 섬",
            "nameEn": "Saona Island",
            "desc": "야생 불가사리가 보이는 천연 수영장과 산호초 카리브해 섬",
            "emoji": "🏝️"
          },
          {
            "name": "산토도밍고 조나 콜로니알",
            "nameEn": "Zona Colonial",
            "desc": "콜럼버스가 세운 신대륙 최초의 돌길 거리와 유적지",
            "emoji": "🏛️"
          }
        ],
        "foods": [
          {
            "name": "망구",
            "nameEn": "Mangu",
            "desc": "으깬 플랜테인에 튀긴 치즈와 살라미를 얹은 도미니카 전통 요리",
            "emoji": "🍳"
          },
          {
            "name": "엠파나다",
            "nameEn": "Empanada",
            "desc": "바삭하게 튀긴 반달 모양 반죽 속에 고기와 치즈가 꽉 찬 간식",
            "emoji": "🥟"
          }
        ]
      },
      {
        "id": "guatemala",
        "name": "과테말라",
        "nameEn": "Guatemala",
        "flag": "🇬🇹",
        "destinations": [
          {
            "name": "안티구아",
            "nameEn": "Antigua",
            "highlight": "화산으로 둘러싸인 유네스코 바로크 건축 도시",
            "attractions": [
              {
                "name": "산타 카탈리나 아치",
                "nameEn": "Santa Catalina Arch",
                "desc": "안티구아를 상징하는 노란색 아치로 화산을 배경으로 사진 찍기 좋습니다.",
                "emoji": "📸"
              },
              {
                "name": "아구아 화산",
                "nameEn": "Volcan de Agua",
                "desc": "도시 어디에서나 보이는 웅장한 화산으로 하이킹 명소입니다.",
                "emoji": "🌋"
              }
            ],
            "foods": [
              {
                "name": "페피안",
                "nameEn": "Pepián",
                "desc": "고기와 채소를 진한 견과류 소스에 끓여낸 과테말라 전통 스튜입니다.",
                "emoji": "🍲"
              },
              {
                "name": "카카우",
                "nameEn": "Cacao",
                "desc": "마야 시대부터 내려온 전통 방식의 진한 초콜릿 음료입니다.",
                "emoji": "🍫"
              }
            ]
          },
          {
            "name": "아티틀란 호수",
            "nameEn": "Lake Atitlan",
            "highlight": "세계에서 가장 아름다운 칼데라 화산 호수",
            "attractions": [
              {
                "name": "파나하첼",
                "nameEn": "Panajachel",
                "desc": "호수 주변의 마을들을 연결하는 중심지로 활기찬 시장이 있습니다.",
                "emoji": "🛶"
              },
              {
                "name": "산 페드로 화산",
                "nameEn": "San Pedro Volcano",
                "desc": "호수 옆에 솟아있는 화산으로 정상에서 보는 호수 전망이 일품입니다.",
                "emoji": "⛰️"
              }
            ],
            "foods": [
              {
                "name": "생선 요리",
                "nameEn": "Lake Fish",
                "desc": "호수에서 잡은 신선한 민물고기를 구워낸 담백한 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "옥수수 토르티야",
                "nameEn": "Corn Tortilla",
                "desc": "매일 아침 직접 구워내는 따끈하고 고소한 전통 옥수수 빵입니다.",
                "emoji": "🌮"
              }
            ]
          },
          {
            "name": "티칼",
            "nameEn": "Tikal",
            "highlight": "깊은 정글 속에 우뚝 솟은 마야 신전 피라미드",
            "attractions": [
              {
                "name": "그란 플라자",
                "nameEn": "Gran Plaza",
                "desc": "마야 문명의 거대한 피라미드 신전들이 모여 있는 핵심 유적지입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "템플 4",
                "nameEn": "Temple IV",
                "desc": "정글 위로 솟은 신전 꼭대기에서 일출을 감상할 수 있는 명소입니다.",
                "emoji": "🌅"
              }
            ],
            "foods": [
              {
                "name": "타말레스",
                "nameEn": "Tamales",
                "desc": "옥수수 반죽에 고기를 넣어 잎에 싸서 찐 마야 전통 음식입니다.",
                "emoji": "🌽"
              },
              {
                "name": "프리홀레스",
                "nameEn": "Frijoles",
                "desc": "콩을 으깨어 만든 요리로 모든 식사에 곁들여 먹습니다.",
                "emoji": "🥣"
              }
            ]
          },
          {
            "name": "세묵 참페이",
            "nameEn": "Semuc Champey",
            "highlight": "천연 석회암 수영장 계곡",
            "attractions": [
              {
                "name": "천연 수영장",
                "nameEn": "Natural Pools",
                "desc": "석회암 계단식으로 형성된 에메랄드빛 천연 수영장입니다.",
                "emoji": "🏊"
              },
              {
                "name": "칸바 동굴",
                "nameEn": "Kan'ba Caves",
                "desc": "촛불을 들고 탐험하는 스릴 넘치는 수중 동굴 체험지입니다.",
                "emoji": "🕯️"
              }
            ],
            "foods": [
              {
                "name": "바나나 빵",
                "nameEn": "Banana Bread",
                "desc": "현지에서 나는 신선한 바나나로 만든 달콤한 간식입니다.",
                "emoji": "🍌"
              },
              {
                "name": "과일 샐러드",
                "nameEn": "Fruit Salad",
                "desc": "열대 과일을 듬뿍 넣어 만든 신선한 디저트입니다.",
                "emoji": "🍍"
              }
            ]
          },
          {
            "name": "치치카스테낭고",
            "nameEn": "Chichicastenango",
            "highlight": "원주민들의 화려한 전통 수공예품 시장",
            "attractions": [
              {
                "name": "산토 토마스 교회",
                "nameEn": "Santo Tomas Church",
                "desc": "가톨릭과 마야 전통 의식이 공존하는 독특한 분위기의 교회입니다.",
                "emoji": "⛪"
              },
              {
                "name": "전통 시장",
                "nameEn": "Traditional Market",
                "desc": "화려한 수공예품과 직물을 구경할 수 있는 거대한 야외 시장입니다.",
                "emoji": "🛍️"
              }
            ],
            "foods": [
              {
                "name": "아톨",
                "nameEn": "Atol",
                "desc": "옥수수 가루와 우유를 섞어 따뜻하게 마시는 전통 음료입니다.",
                "emoji": "🥛"
              },
              {
                "name": "엠파나다",
                "nameEn": "Empanadas",
                "desc": "반죽 안에 고기와 채소를 넣어 튀겨낸 바삭한 간식입니다.",
                "emoji": "🥟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "티칼 마야 유적 국립공원",
            "nameEn": "Tikal National Park",
            "desc": "열대 우림 밀림을 뚫고 솟아오른 웅장한 제4호 마야 신전",
            "emoji": "🏛️"
          },
          {
            "name": "안티구아 산타 카탈리나 아치",
            "nameEn": "Santa Catalina Arch",
            "desc": "아구아 화산을 배경으로 선 노란색 랜드마크 아치문",
            "emoji": "🌁"
          }
        ],
        "foods": [
          {
            "name": "페피안 스튜",
            "nameEn": "Pepian de Pollo",
            "desc": "구운 참깨와 호박씨, 칠리로 진하게 끓여낸 고소한 닭고기 전통 스튜",
            "emoji": "🍲"
          },
          {
            "name": "과테말라 안티구아 커피",
            "nameEn": "Antigua Coffee",
            "desc": "스모키한 초콜릿 향미로 유명한 세계 최고의 화산 토양 커피",
            "emoji": "☕"
          }
        ]
      },
      {
        "id": "bahamas",
        "name": "바하마",
        "nameEn": "Bahamas",
        "flag": "🇧🇸",
        "destinations": [
          {
            "name": "나소",
            "nameEn": "Nassau",
            "highlight": "파스텔톤 영국 식민지 건물과 아틀란티스 리조트",
            "attractions": [
              {
                "name": "아틀란티스 리조트",
                "nameEn": "Atlantis Resort",
                "desc": "거대한 수족관과 워터파크를 갖춘 바하마의 랜드마크입니다.",
                "emoji": "🏰"
              },
              {
                "name": "퀸즈 스테어케이스",
                "nameEn": "Queen's Staircase",
                "desc": "노예들이 손으로 깎아 만든 66개의 역사적인 계단입니다.",
                "emoji": "🪜"
              }
            ],
            "foods": [
              {
                "name": "콘크 프리터",
                "nameEn": "Conch Fritters",
                "desc": "바하마 특산물인 소라 살을 다져 튀긴 고소한 간식입니다.",
                "emoji": "🐚"
              },
              {
                "name": "콘크 샐러드",
                "nameEn": "Conch Salad",
                "desc": "신선한 소라와 채소를 라임즙에 버무린 상큼한 요리입니다.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "엑수마",
            "nameEn": "Exuma",
            "highlight": "바다에서 수영하는 야생 돼지들의 섬",
            "attractions": [
              {
                "name": "피그 비치",
                "nameEn": "Pig Beach",
                "desc": "바다에서 수영을 즐기는 귀여운 야생 돼지들을 만날 수 있는 곳입니다.",
                "emoji": "🐷"
              },
              {
                "name": "썬더볼 동굴",
                "nameEn": "Thunderball Grotto",
                "desc": "영화 촬영지로 유명한 아름다운 수중 동굴입니다.",
                "emoji": "🤿"
              }
            ],
            "foods": [
              {
                "name": "랍스터 구이",
                "nameEn": "Grilled Lobster",
                "desc": "엑수마 바다에서 잡은 신선한 랍스터를 구워낸 고급 요리입니다.",
                "emoji": "🦞"
              },
              {
                "name": "조니 케이크",
                "nameEn": "Johnny Cake",
                "desc": "바하마 사람들이 즐겨 먹는 부드러운 옥수수 빵입니다.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "하버 아일랜드",
            "nameEn": "Harbour Island",
            "highlight": "꿈결 같은 분홍빛 핑크 샌드 비치",
            "attractions": [
              {
                "name": "핑크 샌드 비치",
                "nameEn": "Pink Sands Beach",
                "desc": "산호 가루로 인해 모래가 분홍빛을 띠는 꿈같은 해변입니다.",
                "emoji": "💖"
              },
              {
                "name": "던모어 타운",
                "nameEn": "Dunmore Town",
                "desc": "파스텔톤의 예쁜 집들이 늘어선 평화로운 마을입니다.",
                "emoji": "🏡"
              }
            ],
            "foods": [
              {
                "name": "스팀드 콘크",
                "nameEn": "Steamed Conch",
                "desc": "소라를 채소와 함께 푹 쪄내어 부드러운 식감을 자랑합니다.",
                "emoji": "🐚"
              },
              {
                "name": "구아바 더프",
                "nameEn": "Guava Duff",
                "desc": "구아바를 넣어 만든 바하마의 전통 디저트 푸딩입니다.",
                "emoji": "🍮"
              }
            ]
          },
          {
            "name": "그랜드 바하마",
            "nameEn": "Grand Bahamas",
            "highlight": "루카얀 국립공원 수중 동굴계",
            "attractions": [
              {
                "name": "루카얀 국립공원",
                "nameEn": "Lucayan National Park",
                "desc": "거대한 수중 동굴계와 아름다운 맹그로브 숲이 있는 공원입니다.",
                "emoji": "🌳"
              },
              {
                "name": "골드 록 비치",
                "nameEn": "Gold Rock Beach",
                "desc": "썰물 때면 끝없이 펼쳐지는 모래사장이 장관인 해변입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "피스 앤 라이스",
                "nameEn": "Peas n' Rice",
                "desc": "콩과 쌀을 향신료와 함께 볶아낸 바하마의 주식입니다.",
                "emoji": "🍚"
              },
              {
                "name": "마카로니 앤 치즈",
                "nameEn": "Baked Macaroni",
                "desc": "바하마 스타일로 구워낸 진하고 고소한 치즈 요리입니다.",
                "emoji": "🧀"
              }
            ]
          },
          {
            "name": "엘루세라",
            "nameEn": "Eleuthera",
            "highlight": "대서양과 카리브해가 한눈에 갈라지는 유리창 다리",
            "attractions": [
              {
                "name": "글래스 윈도우 브리지",
                "nameEn": "Glass Window Bridge",
                "desc": "대서양과 카리브해의 색이 극명하게 갈리는 것을 볼 수 있는 다리입니다.",
                "emoji": "🌉"
              },
              {
                "name": "퀸즈 배스",
                "nameEn": "Queen's Baths",
                "desc": "바위 사이에 형성된 천연 해수 온천 수영장입니다.",
                "emoji": "🛁"
              }
            ],
            "foods": [
              {
                "name": "파인애플 타르트",
                "nameEn": "Pineapple Tart",
                "desc": "엘루세라 특산물인 파인애플로 만든 달콤한 디저트입니다.",
                "emoji": "🍍"
              },
              {
                "name": "생선 튀김",
                "nameEn": "Fried Snapper",
                "desc": "신선한 도미를 바삭하게 튀겨낸 현지 인기 메뉴입니다.",
                "emoji": "🐟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "엑수마 돼지 해변",
            "nameEn": "Pig Beach in Big Major Cay",
            "desc": "맑고 투명한 청록색 바다에서 헤엄치는 귀여운 야생 돼지들을 만나는 곳",
            "emoji": "🐷"
          },
          {
            "name": "핑크 샌드 비치",
            "nameEn": "Pink Sands Beach",
            "desc": "분쇄된 붉은 유공충 산호 껍질로 인해 핑크빛으로 빛나는 모래사장",
            "emoji": "🏖️"
          }
        ],
        "foods": [
          {
            "name": "콩크 샐러드",
            "nameEn": "Conch Salad",
            "desc": "신선한 바다 소라고둥을 라임과 고추, 토마토와 함께 버무린 상큼한 샐러드",
            "emoji": "🐚"
          },
          {
            "name": "바하마 럼 케이크",
            "nameEn": "Bahamian Rum Cake",
            "desc": "달콤한 캐러멜 시럽과 바닐라 향이 스며든 촉촉한 케이크",
            "emoji": "🥮"
          }
        ]
      }
    ]
  },
  {
    "id": "south_america",
    "name": "남아메리카",
    "nameEn": "South America",
    "emoji": "🦙",
    "description": "신비로운 잉카 문명과 거대한 아마존, 열정의 대륙",
    "countries": [
      {
        "id": "brazil",
        "name": "브라질",
        "nameEn": "Brazil",
        "flag": "🇧🇷",
        "destinations": [
          {
            "name": "리우데자네이루",
            "nameEn": "Rio de Janeiro",
            "highlight": "거대 예수상과 코파카바나 해변의 삼바 도시",
            "attractions": [
              {
                "name": "코르코바도 예수상",
                "nameEn": "Christ the Redeemer",
                "desc": "리우를 한눈에 내려다보는 거대한 예수상입니다.",
                "emoji": "🙏"
              },
              {
                "name": "코파카바나 해변",
                "nameEn": "Copacabana Beach",
                "desc": "세계적으로 유명한 아름다운 해변입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "페이조아다",
                "nameEn": "Feijoada",
                "desc": "검은 콩과 고기를 푹 끓여낸 브라질 대표 요리입니다.",
                "emoji": "🍲"
              },
              {
                "name": "슈하스코",
                "nameEn": "Churrasco",
                "desc": "꼬챙이에 고기를 꽂아 숯불에 구운 브라질식 바비큐입니다.",
                "emoji": "🍖"
              }
            ]
          },
          {
            "name": "상파울루",
            "nameEn": "Sao Paulo",
            "highlight": "남미 최대의 금융 중심지와 미술관",
            "attractions": [
              {
                "name": "상파울루 미술관",
                "nameEn": "MASP",
                "desc": "독특한 건축미를 자랑하는 남미 최고의 미술관입니다.",
                "emoji": "🖼️"
              },
              {
                "name": "이비라푸에라 공원",
                "nameEn": "Ibirapuera Park",
                "desc": "도심 속에서 휴식을 즐길 수 있는 거대한 공원입니다.",
                "emoji": "🌳"
              }
            ],
            "foods": [
              {
                "name": "모르타델라 샌드위치",
                "nameEn": "Mortadella Sandwich",
                "desc": "햄이 가득 들어간 상파울루 시장의 명물입니다.",
                "emoji": "🥪"
              },
              {
                "name": "파스텔",
                "nameEn": "Pastel",
                "desc": "바삭한 튀김 반죽 안에 속을 채운 간식입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "이과수",
            "nameEn": "Foz do Iguacu",
            "highlight": "세계 최대의 악마의 목구멍 폭포",
            "attractions": [
              {
                "name": "악마의 목구멍",
                "nameEn": "Devil's Throat",
                "desc": "이과수 폭포 중 가장 웅장한 핵심 구간입니다.",
                "emoji": "🌊"
              },
              {
                "name": "이과수 국립공원",
                "nameEn": "Iguazu National Park",
                "desc": "거대한 폭포와 자연을 만끽할 수 있는 곳입니다.",
                "emoji": "🌿"
              }
            ],
            "foods": [
              {
                "name": "도라도 생선 요리",
                "nameEn": "Dorado Fish",
                "desc": "이과수 강에서 잡히는 신선한 민물 생선 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "엠파나다",
                "nameEn": "Empanada",
                "desc": "속을 채워 구운 남미식 만두입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "살바도르",
            "nameEn": "Salvador",
            "highlight": "아프리카-브라질 문화의 화려한 중심지",
            "attractions": [
              {
                "name": "펠로리뉴",
                "nameEn": "Pelourinho",
                "desc": "알록달록한 식민지풍 건물이 가득한 역사 지구입니다.",
                "emoji": "🏘️"
              },
              {
                "name": "라세르다 엘리베이터",
                "nameEn": "Elevador Lacerda",
                "desc": "상부와 하부 도시를 연결하는 역사적인 엘리베이터입니다.",
                "emoji": "🛗"
              }
            ],
            "foods": [
              {
                "name": "아카라제",
                "nameEn": "Acaraje",
                "desc": "콩 반죽을 튀겨 새우 등을 넣은 살바도르 별미입니다.",
                "emoji": "🍤"
              },
              {
                "name": "모케카",
                "nameEn": "Moqueca",
                "desc": "해산물과 코코넛 밀크를 넣은 브라질식 스튜입니다.",
                "emoji": "🥘"
              }
            ]
          },
          {
            "name": "마나우스",
            "nameEn": "Manaus",
            "highlight": "아마존 정글 탐험과 강 합류점의 오페라 극장",
            "attractions": [
              {
                "name": "아마조나스 오페라 극장",
                "nameEn": "Teatro Amazonas",
                "desc": "정글 한가운데 화려하게 지어진 오페라 극장입니다.",
                "emoji": "🎭"
              },
              {
                "name": "강의 만남",
                "nameEn": "Meeting of Waters",
                "desc": "두 강물이 섞이지 않고 흐르는 신비한 자연 현상입니다.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "타마키",
                "nameEn": "Tambaqui",
                "desc": "아마존 강에서 잡히는 대표적인 민물 생선 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "아사이 볼",
                "nameEn": "Acai Bowl",
                "desc": "아마존 열매로 만든 건강한 디저트입니다.",
                "emoji": "🥣"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "코르코바두 언덕 거대 예수상",
            "nameEn": "Christ the Redeemer",
            "desc": "38m 높이로 양팔을 벌려 리우 도시 전체를 감싸는 신 세계 7대 불가사의",
            "emoji": "🗽"
          },
          {
            "name": "이과수 폭포 (브라질 사이드)",
            "nameEn": "Iguazu Falls",
            "desc": "초당 수만 톤의 물이 쏟아져 내리는 웅장한 파노라마 폭포",
            "emoji": "🌊"
          }
        ],
        "foods": [
          {
            "name": "페이조아다",
            "nameEn": "Feijoada",
            "desc": "검은콩과 여러 가지 고기를 푹 끓여 밥, 오렌지와 함께 먹는 브라질의 국민 소울푸드",
            "emoji": "🍲"
          },
          {
            "name": "아사이 볼",
            "nameEn": "Acai Bowl",
            "desc": "슈퍼푸드 아사이베리 스무디 위에 바나나와 그래놀라를 듬뿍 얹은 시원한 간식",
            "emoji": "🫐"
          }
        ]
      },
      {
        "id": "peru",
        "name": "페루",
        "nameEn": "Peru",
        "flag": "🇵🇪",
        "destinations": [
          {
            "name": "쿠스코",
            "nameEn": "Cusco",
            "highlight": "잉카 제국의 수도이자 안데스 고원 도시",
            "attractions": [
              {
                "name": "아르마스 광장",
                "nameEn": "Plaza de Armas",
                "desc": "쿠스코의 중심이자 잉카와 스페인 문화가 공존하는 곳입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "삭사이와만",
                "nameEn": "Sacsayhuaman",
                "desc": "거대한 돌로 쌓아 올린 잉카 제국의 요새입니다.",
                "emoji": "🧱"
              }
            ],
            "foods": [
              {
                "name": "쿠이",
                "nameEn": "Cuy",
                "desc": "페루 고산지대의 전통적인 별미인 기니피그 요리입니다.",
                "emoji": "🍖"
              },
              {
                "name": "로모 살타도",
                "nameEn": "Lomo Saltado",
                "desc": "소고기와 감자튀김을 볶아낸 페루식 덮밥입니다.",
                "emoji": "🍛"
              }
            ]
          },
          {
            "name": "마추픽추",
            "nameEn": "Machu Picchu",
            "highlight": "구름 위에 숨겨진 잃어버린 공중 도시",
            "attractions": [
              {
                "name": "태양의 신전",
                "nameEn": "Temple of the Sun",
                "desc": "마추픽추에서 가장 중요한 종교적 건축물입니다.",
                "emoji": "☀️"
              },
              {
                "name": "인티와타나",
                "nameEn": "Intihuatana",
                "desc": "태양을 묶어두는 돌이라 불리는 잉카의 유적입니다.",
                "emoji": "🗿"
              }
            ],
            "foods": [
              {
                "name": "초클로",
                "nameEn": "Choclo",
                "desc": "알이 매우 굵은 안데스 지역의 옥수수입니다.",
                "emoji": "🌽"
              },
              {
                "name": "키누아 수프",
                "nameEn": "Quinoa Soup",
                "desc": "영양가 높은 키누아를 넣은 따뜻한 수프입니다.",
                "emoji": "🥣"
              }
            ]
          },
          {
            "name": "리마",
            "nameEn": "Lima",
            "highlight": "태평양 절벽 미라플로레스와 세계적인 미식 수도",
            "attractions": [
              {
                "name": "사랑의 공원",
                "nameEn": "Parque del Amor",
                "desc": "태평양 바다가 내려다보이는 아름다운 공원입니다.",
                "emoji": "💖"
              },
              {
                "name": "라르코 박물관",
                "nameEn": "Larco Museum",
                "desc": "페루의 고대 유물을 전시한 아름다운 박물관입니다.",
                "emoji": "🏺"
              }
            ],
            "foods": [
              {
                "name": "세비체",
                "nameEn": "Ceviche",
                "desc": "신선한 해산물을 레몬즙에 절인 페루 대표 요리입니다.",
                "emoji": "🍋"
              },
              {
                "name": "카우사",
                "nameEn": "Causa",
                "desc": "감자 으깬 것에 속을 채운 페루식 샐러드입니다.",
                "emoji": "🥔"
              }
            ]
          },
          {
            "name": "와카치나",
            "nameEn": "Huacachina",
            "highlight": "모래사막 한가운데 오아시스와 샌드보딩",
            "attractions": [
              {
                "name": "와카치나 오아시스",
                "nameEn": "Huacachina Oasis",
                "desc": "사막 한가운데 위치한 신비로운 호수 마을입니다.",
                "emoji": "🌴"
              },
              {
                "name": "샌드보딩 언덕",
                "nameEn": "Sandboarding Dunes",
                "desc": "거대한 모래 언덕에서 즐기는 짜릿한 액티비티입니다.",
                "emoji": "🏂"
              }
            ],
            "foods": [
              {
                "name": "아로스 콘 마리스코스",
                "nameEn": "Arroz con Mariscos",
                "desc": "해산물을 듬뿍 넣은 페루식 볶음밥입니다.",
                "emoji": "🥘"
              },
              {
                "name": "피스코 사워",
                "nameEn": "Pisco Sour",
                "desc": "페루의 전통 술 피스코로 만든 칵테일입니다.",
                "emoji": "🍹"
              }
            ]
          },
          {
            "name": "아레키파",
            "nameEn": "Arequipa",
            "highlight": "하얀 화산석으로 지어진 백색의 식민지 도시",
            "attractions": [
              {
                "name": "산타 카탈리나 수도원",
                "nameEn": "Santa Catalina Monastery",
                "desc": "붉고 푸른 벽이 아름다운 거대한 수도원입니다.",
                "emoji": "⛪"
              },
              {
                "name": "아르마스 광장",
                "nameEn": "Plaza de Armas",
                "desc": "화산석으로 지어진 아름다운 아레키파의 중심지입니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "로코토 레예노",
                "nameEn": "Rocoto Relleno",
                "desc": "매운 고추 안에 고기를 채워 넣은 요리입니다.",
                "emoji": "🌶️"
              },
              {
                "name": "아도보",
                "nameEn": "Adobo",
                "desc": "돼지고기를 양념에 재워 푹 끓인 아레키파 전통식입니다.",
                "emoji": "🍲"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "마추픽추 잉카 유적지",
            "nameEn": "Historic Sanctuary of Machu Picchu",
            "desc": "안데스 산맥 해발 2,430m 절벽에 정교한 돌로 지어진 신비의 공중 요새",
            "emoji": "⛰️"
          },
          {
            "name": "비니쿤카 무지개산",
            "nameEn": "Rainbow Mountain (Vinicunca)",
            "desc": "다양한 광물이 줄무늬를 이루어 일곱 빛깔 무지개처럼 보이는 안데스 산",
            "emoji": "🌈"
          }
        ],
        "foods": [
          {
            "name": "로모 살타도",
            "nameEn": "Lomo Saltado",
            "desc": "부드러운 소고기와 양파, 토마토를 감자튀김과 함께 센 불에 볶아 밥과 먹는 요리",
            "emoji": "🥩"
          },
          {
            "name": "치차 모라다",
            "nameEn": "Chicha Morada",
            "desc": "자주색 옥수수에 사과, 계피, 정향을 넣고 달콤하게 끓여낸 페루 전통 음료",
            "emoji": "🥤"
          }
        ]
      },
      {
        "id": "argentina",
        "name": "아르헨티나",
        "nameEn": "Argentina",
        "flag": "🇦🇷",
        "destinations": [
          {
            "name": "부엔노스아이레스",
            "nameEn": "Buenos Aires",
            "highlight": "남미의 파리라 불리는 탱고와 오벨리스크의 도시",
            "attractions": [
              {
                "name": "오벨리스크",
                "nameEn": "Obelisco",
                "desc": "도시의 상징이자 가장 번화한 곳에 위치한 탑입니다.",
                "emoji": "🗼"
              },
              {
                "name": "라 보카",
                "nameEn": "La Boca",
                "desc": "알록달록한 집들이 모여 있는 예술적인 거리입니다.",
                "emoji": "🎨"
              }
            ],
            "foods": [
              {
                "name": "아사도",
                "nameEn": "Asado",
                "desc": "숯불에 천천히 구워낸 아르헨티나식 소고기 구이입니다.",
                "emoji": "🥩"
              },
              {
                "name": "알파호르",
                "nameEn": "Alfajor",
                "desc": "쿠키 사이에 달콤한 잼을 넣은 디저트입니다.",
                "emoji": "🍪"
              }
            ]
          },
          {
            "name": "바릴로체",
            "nameEn": "Bariloche",
            "highlight": "스위스풍 호수와 알프스 스타일의 수제 초콜릿 마을",
            "attractions": [
              {
                "name": "나우엘 우아피 호수",
                "nameEn": "Nahuel Huapi Lake",
                "desc": "스위스 같은 풍경을 자랑하는 거대한 호수입니다.",
                "emoji": "🏔️"
              },
              {
                "name": "세로 캄파나리오",
                "nameEn": "Cerro Campanario",
                "desc": "바릴로체의 절경을 한눈에 볼 수 있는 전망대입니다.",
                "emoji": "🚠"
              }
            ],
            "foods": [
              {
                "name": "수제 초콜릿",
                "nameEn": "Artisanal Chocolate",
                "desc": "바릴로체는 아르헨티나 최고의 초콜릿 생산지입니다.",
                "emoji": "🍫"
              },
              {
                "name": "퐁듀",
                "nameEn": "Fondue",
                "desc": "추운 날씨에 즐기기 좋은 따뜻한 치즈 요리입니다.",
                "emoji": "🧀"
              }
            ]
          },
          {
            "name": "엘 칼라파테",
            "nameEn": "El Calafate",
            "highlight": "파타고니아 페리토 모레노 거대 빙하",
            "attractions": [
              {
                "name": "페리토 모레노 빙하",
                "nameEn": "Perito Moreno Glacier",
                "desc": "살아 움직이는 거대한 파란색 빙하입니다.",
                "emoji": "🧊"
              },
              {
                "name": "빙하 박물관",
                "nameEn": "Glaciarium",
                "desc": "빙하에 대해 배울 수 있는 흥미로운 박물관입니다.",
                "emoji": "❄️"
              }
            ],
            "foods": [
              {
                "name": "코르데로 파타고니코",
                "nameEn": "Patagonian Lamb",
                "desc": "파타고니아 지역의 별미인 양고기 구이입니다.",
                "emoji": "🍖"
              },
              {
                "name": "칼라파테 베리 잼",
                "nameEn": "Calafate Jam",
                "desc": "이 지역에서만 나는 열매로 만든 달콤한 잼입니다.",
                "emoji": "🫐"
              }
            ]
          },
          {
            "name": "멘도사",
            "nameEn": "Mendoza",
            "highlight": "안데스 산기슭의 끝없는 포도원과 와인",
            "attractions": [
              {
                "name": "산 마르틴 공원",
                "nameEn": "General San Martin Park",
                "desc": "멘도사 시민들의 휴식처인 아름다운 공원입니다.",
                "emoji": "🌳"
              },
              {
                "name": "와이너리 투어",
                "nameEn": "Winery Tour",
                "desc": "끝없이 펼쳐진 포도밭에서 와인을 즐기는 투어입니다.",
                "emoji": "🍷"
              }
            ],
            "foods": [
              {
                "name": "말벡 와인",
                "nameEn": "Malbec Wine",
                "desc": "멘도사를 대표하는 세계적인 레드 와인입니다.",
                "emoji": "🍇"
              },
              {
                "name": "엠파나다",
                "nameEn": "Empanada",
                "desc": "와인과 함께 곁들이기 좋은 아르헨티나식 만두입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "우수아이아",
            "nameEn": "Ushuaia",
            "highlight": "남극으로 향하는 세상의 땅끝 마을",
            "attractions": [
              {
                "name": "세상의 끝 등대",
                "nameEn": "Les Eclaireurs Lighthouse",
                "desc": "세상의 끝에 서 있는 상징적인 등대입니다.",
                "emoji": "🗼"
              },
              {
                "name": "티에라 델 푸에고 국립공원",
                "nameEn": "Tierra del Fuego National Park",
                "desc": "남극과 가장 가까운 아름다운 자연 공원입니다.",
                "emoji": "🏔️"
              }
            ],
            "foods": [
              {
                "name": "센토야",
                "nameEn": "Centolla",
                "desc": "우수아이아 앞바다에서 잡히는 거대한 킹크랩입니다.",
                "emoji": "🦀"
              },
              {
                "name": "메를루사",
                "nameEn": "Merluza",
                "desc": "남극해에서 잡히는 신선한 대구 요리입니다.",
                "emoji": "🐟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "페리토 모레노 빙하",
            "nameEn": "Perito Moreno Glacier",
            "desc": "눈앞에서 거대한 얼음 덩어리가 굉음을 내며 호수로 무너져 내리는 파란 빙하",
            "emoji": "🧊"
          },
          {
            "name": "카미니토 거리 (라 보카)",
            "nameEn": "Caminito in La Boca",
            "desc": "원색의 양철 집들과 거리에서 열정적인 탱고를 추는 예술가의 거리",
            "emoji": "💃"
          }
        ],
        "foods": [
          {
            "name": "아사도",
            "nameEn": "Asado",
            "desc": "신선한 소고기를 숯불에 천천히 통째로 구워내는 아르헨티나 정통 바비큐",
            "emoji": "🥩"
          },
          {
            "name": "알파호르",
            "nameEn": "Alfajor",
            "desc": "달콤한 우유잼 둘세 데 레체를 쿠키 사이에 샌드하고 초콜릿을 입힌 디저트",
            "emoji": "🍪"
          }
        ]
      },
      {
        "id": "chile",
        "name": "칠레",
        "nameEn": "Chile",
        "flag": "🇨🇱",
        "destinations": [
          {
            "name": "산티아고",
            "nameEn": "Santiago",
            "highlight": "안데스 설산이 병풍처럼 둘러싼 수도와 산 크리스토발 언덕",
            "attractions": [
              {
                "name": "산 크리스토발 언덕",
                "nameEn": "San Cristobal Hill",
                "desc": "산티아고 시내를 한눈에 볼 수 있는 전망대입니다.",
                "emoji": "🚠"
              },
              {
                "name": "아르마스 광장",
                "nameEn": "Plaza de Armas",
                "desc": "산티아고의 역사와 문화가 모여 있는 중심지입니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "카레텔라",
                "nameEn": "Chorrillana",
                "desc": "감자튀김 위에 고기와 계란을 얹은 푸짐한 요리입니다.",
                "emoji": "🍟"
              },
              {
                "name": "파스텔 데 초클로",
                "nameEn": "Pastel de Choclo",
                "desc": "옥수수 반죽을 덮어 구운 칠레식 고기 파이입니다.",
                "emoji": "🌽"
              }
            ]
          },
          {
            "name": "토레스 델 파이네",
            "nameEn": "Torres del Paine",
            "highlight": "세계 3대 트레킹 코스 파타고니아 국립공원",
            "attractions": [
              {
                "name": "삼봉",
                "nameEn": "Las Torres",
                "desc": "공원의 상징인 세 개의 거대한 화강암 봉우리입니다.",
                "emoji": "🏔️"
              },
              {
                "name": "그레이 빙하",
                "nameEn": "Grey Glacier",
                "desc": "파란 빛을 띠는 거대한 빙하 호수입니다.",
                "emoji": "🧊"
              }
            ],
            "foods": [
              {
                "name": "구아나코 고기",
                "nameEn": "Guanaco Meat",
                "desc": "파타고니아 지역에서 맛볼 수 있는 특색 있는 고기입니다.",
                "emoji": "🍖"
              },
              {
                "name": "칼라파테 사워",
                "nameEn": "Calafate Sour",
                "desc": "지역 열매로 만든 칠레식 칵테일입니다.",
                "emoji": "🍹"
              }
            ]
          },
          {
            "name": "아타카마",
            "nameEn": "San Pedro de Atacama",
            "highlight": "지구상에서 가장 건조한 달의 계곡과 별 관측 성지",
            "attractions": [
              {
                "name": "달의 계곡",
                "nameEn": "Valle de la Luna",
                "desc": "달 표면처럼 신비로운 풍경을 가진 사막 지대입니다.",
                "emoji": "🌙"
              },
              {
                "name": "엘 타티오 간헐천",
                "nameEn": "El Tatio Geysers",
                "desc": "지열로 인해 솟구치는 거대한 간헐천입니다.",
                "emoji": "🌋"
              }
            ],
            "foods": [
              {
                "name": "차르키칸",
                "nameEn": "Charquican",
                "desc": "말린 고기와 채소를 섞어 만든 전통 스튜입니다.",
                "emoji": "🍲"
              },
              {
                "name": "키누아 샐러드",
                "nameEn": "Quinoa Salad",
                "desc": "안데스 지역의 건강한 키누아로 만든 요리입니다.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "이스터 섬",
            "nameEn": "Easter Island",
            "highlight": "거대한 모아이 석상이 바다를 바라보는 미스터리 섬",
            "attractions": [
              {
                "name": "아후 통가리키",
                "nameEn": "Ahu Tongariki",
                "desc": "15개의 모아이 석상이 나란히 서 있는 곳입니다.",
                "emoji": "🗿"
              },
              {
                "name": "라노 라라쿠",
                "nameEn": "Rano Raraku",
                "desc": "모아이 석상을 만들던 채석장 유적지입니다.",
                "emoji": "⛰️"
              }
            ],
            "foods": [
              {
                "name": "세비체",
                "nameEn": "Ceviche",
                "desc": "섬에서 잡은 신선한 생선으로 만든 회 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "투나",
                "nameEn": "Tuna",
                "desc": "이스터 섬 주변에서 잡히는 신선한 참치 요리입니다.",
                "emoji": "🍣"
              }
            ]
          },
          {
            "name": "발파라이소",
            "nameEn": "Valparaiso",
            "highlight": "언덕 위 다채로운 벽화와 케이블 승강기 아센소르",
            "attractions": [
              {
                "name": "아센소르",
                "nameEn": "Ascensor",
                "desc": "언덕을 오르내리는 낡고 정겨운 케이블카입니다.",
                "emoji": "🚡"
              },
              {
                "name": "파블로 네루다 생가",
                "nameEn": "La Sebastiana",
                "desc": "시인 네루다가 살았던 예술적인 집입니다.",
                "emoji": "🏠"
              }
            ],
            "foods": [
              {
                "name": "파이루",
                "nameEn": "Paila Marina",
                "desc": "다양한 해산물을 넣고 끓인 칠레식 해물탕입니다.",
                "emoji": "🍲"
              },
              {
                "name": "엠파나다 데 피노",
                "nameEn": "Empanada de Pino",
                "desc": "고기와 계란이 들어간 칠레식 전통 만두입니다.",
                "emoji": "🥟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "토레스 델 파이네 삼봉",
            "nameEn": "Torres del Paine Towers",
            "desc": "청록색 빙하 호수 위로 수직으로 솟구친 세 개의 거대한 화강암 기둥",
            "emoji": "🏔️"
          },
          {
            "name": "이스터섬 모아이 석상",
            "nameEn": "Moai Statues of Rapa Nui",
            "desc": "고대 폴리네시아인들이 남긴 사람 얼굴 모양의 거대한 돌 조각상",
            "emoji": "🗿"
          }
        ],
        "foods": [
          {
            "name": "엠파나다 데 피노",
            "nameEn": "Empanada de Pino",
            "desc": "다진 소고기, 양파, 건포도, 삶은 달걀을 채워 오븐에 노릇하게 구운 칠레식 파이",
            "emoji": "🥟"
          },
          {
            "name": "파스텔 데 초클로",
            "nameEn": "Pastel de Choclo",
            "desc": "고소하게 갈아낸 옥수수 반죽 밑에 고기와 채소를 넣고 구운 도자기 그라탱",
            "emoji": "🌽"
          }
        ]
      },
      {
        "id": "colombia",
        "name": "콜롬비아",
        "nameEn": "Colombia",
        "flag": "🇨🇴",
        "destinations": [
          {
            "name": "보고타",
            "nameEn": "Bogota",
            "highlight": "몬세라테 언덕과 황금 박물관의 고산 수도",
            "attractions": [
              {
                "name": "몬세라테 언덕",
                "nameEn": "Monserrate",
                "desc": "보고타 시내를 한눈에 조망할 수 있는 성당입니다.",
                "emoji": "⛪"
              },
              {
                "name": "황금 박물관",
                "nameEn": "Gold Museum",
                "desc": "수많은 황금 유물을 전시한 세계적인 박물관입니다.",
                "emoji": "✨"
              }
            ],
            "foods": [
              {
                "name": "아히아코",
                "nameEn": "Ajiaco",
                "desc": "감자와 닭고기를 넣고 끓인 보고타 전통 수프입니다.",
                "emoji": "🍲"
              },
              {
                "name": "초콜라테 콘 케소",
                "nameEn": "Chocolate con Queso",
                "desc": "뜨거운 초콜릿에 치즈를 넣어 먹는 간식입니다.",
                "emoji": "☕"
              }
            ]
          },
          {
            "name": "메데진",
            "nameEn": "Medellin",
            "highlight": "영원한 봄의 도시이자 케이블카 대중교통 혁신",
            "attractions": [
              {
                "name": "메트로케이블",
                "nameEn": "Metrocable",
                "desc": "도시의 풍경을 감상하며 이동하는 케이블카입니다.",
                "emoji": "🚠"
              },
              {
                "name": "보테로 광장",
                "nameEn": "Plaza Botero",
                "desc": "뚱뚱한 조각상으로 유명한 보테로의 작품이 가득합니다.",
                "emoji": "🗿"
              }
            ],
            "foods": [
              {
                "name": "반데하 파이사",
                "nameEn": "Bandeja Paisa",
                "desc": "고기, 콩, 밥 등을 한 접시에 담은 푸짐한 요리입니다.",
                "emoji": "🍛"
              },
              {
                "name": "아레파",
                "nameEn": "Arepa",
                "desc": "옥수수 가루로 만든 콜롬비아의 주식 빵입니다.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "카르타헤나",
            "nameEn": "Cartagena",
            "highlight": "카리브해 성벽과 부겐빌레아 꽃으로 장식된 식민지 도시",
            "attractions": [
              {
                "name": "성벽 도시",
                "nameEn": "Walled City",
                "desc": "유네스코 세계문화유산으로 지정된 아름다운 성벽입니다.",
                "emoji": "🏰"
              },
              {
                "name": "산 펠리페 성",
                "nameEn": "Castillo San Felipe",
                "desc": "카르타헤나를 지키던 거대한 요새입니다.",
                "emoji": "🛡️"
              }
            ],
            "foods": [
              {
                "name": "코코넛 밥",
                "nameEn": "Coconut Rice",
                "desc": "코코넛 밀크로 지어 달콤한 밥 요리입니다.",
                "emoji": "🍚"
              },
              {
                "name": "세비체",
                "nameEn": "Ceviche",
                "desc": "카리브해의 신선한 해산물로 만든 요리입니다.",
                "emoji": "🍋"
              }
            ]
          },
          {
            "name": "살렌토",
            "nameEn": "Salento",
            "highlight": "세계에서 가장 키 큰 왁스 야자수가 있는 코코라 계곡",
            "attractions": [
              {
                "name": "코코라 계곡",
                "nameEn": "Cocora Valley",
                "desc": "세계에서 가장 큰 야자수가 있는 아름다운 계곡입니다.",
                "emoji": "🌴"
              },
              {
                "name": "커피 농장",
                "nameEn": "Coffee Farm",
                "desc": "콜롬비아 커피의 생산 과정을 배우는 농장입니다.",
                "emoji": "☕"
              }
            ],
            "foods": [
              {
                "name": "트루차",
                "nameEn": "Trucha",
                "desc": "살렌토 지역의 별미인 송어 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "파타콘",
                "nameEn": "Patacon",
                "desc": "바나나를 튀겨 만든 바삭한 간식입니다.",
                "emoji": "🍌"
              }
            ]
          },
          {
            "name": "산타마르타",
            "nameEn": "Santa Marta",
            "highlight": "타이로나 국립공원의 정글과 해변",
            "attractions": [
              {
                "name": "타이로나 국립공원",
                "nameEn": "Tayrona National Park",
                "desc": "정글과 해변이 어우러진 아름다운 자연 공원입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "카보 산 후안",
                "nameEn": "Cabo San Juan",
                "desc": "타이로나 공원 내 가장 아름다운 해변입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "카리브 해산물",
                "nameEn": "Caribbean Seafood",
                "desc": "바다에서 갓 잡은 신선한 해산물 요리입니다.",
                "emoji": "🍤"
              },
              {
                "name": "프리토스",
                "nameEn": "Fritos",
                "desc": "길거리에서 파는 다양한 튀김 간식입니다.",
                "emoji": "🥟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "코코라 밸리",
            "nameEn": "Valle de Cocora",
            "desc": "해발 2,000m 안개 낀 초원에 최대 60m 높이의 왁스 야자수가 솟은 풍경",
            "emoji": "🌴"
          },
          {
            "name": "카르타헤나 성벽 올드타운",
            "nameEn": "Cartagena Walled City",
            "desc": "해적을 막기 위해 쌓은 11km 성벽과 알록달록한 발코니 골목",
            "emoji": "🏰"
          }
        ],
        "foods": [
          {
            "name": "아레파",
            "nameEn": "Arepa con Queso",
            "desc": "옥수수 반죽을 둥글넓적하게 구워 짭조름한 치즈를 듬뿍 얹은 콜롬비아 빵",
            "emoji": "🫓"
          },
          {
            "name": "콜롬비아 수프림 커피",
            "nameEn": "Colombian Supremo Coffee",
            "desc": "안데스 산맥에서 재배되어 풍부한 바디감과 꽃향기를 지닌 대표 커피",
            "emoji": "☕"
          }
        ]
      },
      {
        "id": "bolivia",
        "name": "볼리비아",
        "nameEn": "Bolivia",
        "flag": "🇧🇴",
        "destinations": [
          {
            "name": "우유니",
            "nameEn": "Salar de Uyuni",
            "highlight": "하늘과 땅이 하나 되는 세상에서 가장 큰 거울 소금사막",
            "attractions": [
              {
                "name": "잉카와시 섬",
                "nameEn": "Isla Incahuasi",
                "desc": "소금사막 한가운데 솟아있는 거대한 선인장 섬입니다.",
                "emoji": "🌵"
              },
              {
                "name": "기차 무덤",
                "nameEn": "Train Cemetery",
                "desc": "버려진 옛 기차들이 모여 있어 독특한 사진을 찍기 좋습니다.",
                "emoji": "🚂"
              }
            ],
            "foods": [
              {
                "name": "퀴누아 수프",
                "nameEn": "Quinoa Soup",
                "desc": "고산지대에서 자란 영양가 높은 퀴누아로 만든 따뜻한 수프입니다.",
                "emoji": "🥣"
              },
              {
                "name": "라마 고기 요리",
                "nameEn": "Llama Steak",
                "desc": "볼리비아 고산지대에서 즐겨 먹는 담백한 라마 고기 요리입니다.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "라파스",
            "nameEn": "La Paz",
            "highlight": "구름 위를 나는 케이블카 텔레페리코와 마녀 시장",
            "attractions": [
              {
                "name": "텔레페리코",
                "nameEn": "Teleferico",
                "desc": "라파스 시내를 한눈에 내려다볼 수 있는 공중 케이블카입니다.",
                "emoji": "🚠"
              },
              {
                "name": "마녀 시장",
                "nameEn": "Witches' Market",
                "desc": "전통 주술 용품과 신기한 기념품을 파는 이색적인 시장입니다.",
                "emoji": "🔮"
              }
            ],
            "foods": [
              {
                "name": "살테냐",
                "nameEn": "Salteña",
                "desc": "육즙이 가득 들어있는 볼리비아식 전통 고기 파이입니다.",
                "emoji": "🥟"
              },
              {
                "name": "안티쿠초",
                "nameEn": "Anticucho",
                "desc": "길거리에서 흔히 볼 수 있는 소 심장 꼬치구이입니다.",
                "emoji": "🍢"
              }
            ]
          },
          {
            "name": "티티카카 호수",
            "nameEn": "Lake Titicaca",
            "highlight": "세계에서 가장 높은 갈대 떠다니는 인공섬 우로스",
            "attractions": [
              {
                "name": "우로스 섬",
                "nameEn": "Uros Floating Islands",
                "desc": "갈대로 만든 인공섬 위에서 살아가는 원주민들의 삶을 볼 수 있습니다.",
                "emoji": "🛶"
              },
              {
                "name": "타킬레 섬",
                "nameEn": "Taquile Island",
                "desc": "전통 직물 문화가 잘 보존된 아름다운 호수 속 섬입니다.",
                "emoji": "🧶"
              }
            ],
            "foods": [
              {
                "name": "트루차",
                "nameEn": "Trucha",
                "desc": "티티카카 호수에서 잡은 신선한 송어 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "피케 마초",
                "nameEn": "Pique Macho",
                "desc": "고기, 감자, 채소를 푸짐하게 볶아낸 든든한 요리입니다.",
                "emoji": "🥘"
              }
            ]
          },
          {
            "name": "수크레",
            "nameEn": "Sucre",
            "highlight": "하얀 식민지 건축물이 보존된 헌법상 수도",
            "attractions": [
              {
                "name": "칼 오르코",
                "nameEn": "Cal Orck'o",
                "desc": "수천 개의 공룡 발자국이 선명하게 남아있는 절벽입니다.",
                "emoji": "🦖"
              },
              {
                "name": "수크레 대성당",
                "nameEn": "Sucre Cathedral",
                "desc": "하얀 도시의 상징이자 아름다운 건축미를 자랑하는 성당입니다.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "초리소 추키사케뇨",
                "nameEn": "Chorizo Chuquisaqueño",
                "desc": "수크레 지역 특유의 매콤한 소시지 요리입니다.",
                "emoji": "🌭"
              },
              {
                "name": "문도",
                "nameEn": "Mondo",
                "desc": "다양한 재료를 섞어 만든 수크레식 전통 샐러드 요리입니다.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "포토시",
            "nameEn": "Potosi",
            "highlight": "세계 최대 은광 세로 리코가 있던 역사 도시",
            "attractions": [
              {
                "name": "세로 리코",
                "nameEn": "Cerro Rico",
                "desc": "과거 은을 채굴하던 역사적인 광산으로 유명한 산입니다.",
                "emoji": "⛰️"
              },
              {
                "name": "국립 조폐국",
                "nameEn": "Casa Nacional de Moneda",
                "desc": "과거 스페인 식민지 시절 화폐를 만들던 역사 박물관입니다.",
                "emoji": "💰"
              }
            ],
            "foods": [
              {
                "name": "카라푸르카",
                "nameEn": "Kalapurka",
                "desc": "뜨겁게 달군 돌을 넣어 끓여 먹는 전통 수프입니다.",
                "emoji": "🍲"
              },
              {
                "name": "소파 데 마니",
                "nameEn": "Sopa de Maní",
                "desc": "땅콩을 갈아 넣어 고소한 맛이 일품인 볼리비아식 수프입니다.",
                "emoji": "🥜"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "우유니 소금사막",
            "nameEn": "Salar de Uyuni",
            "desc": "우기에 비가 고이면 푸른 하늘과 구름이 완벽하게 반사되는 거대한 자연의 거울",
            "emoji": "🪞"
          },
          {
            "name": "라파스 미 텔레페리코",
            "nameEn": "Mi Teleferico",
            "desc": "만년설 일리마니 산을 배경으로 도시 상공을 가로지르는 대중교통 케이블카",
            "emoji": "🚡"
          }
        ],
        "foods": [
          {
            "name": "살테냐",
            "nameEn": "Saltena",
            "desc": "달콤한 페이스트리 반죽 속에 뜨거운 고기 육즙과 감자가 들어간 볼리비아식 만두",
            "emoji": "🥟"
          },
          {
            "name": "피케 마초",
            "nameEn": "Pique Macho",
            "desc": "소고기 조각, 소시지, 감자튀김 위에 삶은 달걀과 고추를 얹은 푸짐한 모둠 플래터",
            "emoji": "🥩"
          }
        ]
      },
      {
        "id": "ecuador",
        "name": "에콰도르",
        "nameEn": "Ecuador",
        "flag": "🇪🇨",
        "destinations": [
          {
            "name": "갈라파고스",
            "nameEn": "Galapagos Islands",
            "highlight": "다윈의 진화론의 모태가 된 희귀 야생동물의 천국",
            "attractions": [
              {
                "name": "찰스 다윈 연구소",
                "nameEn": "Charles Darwin Research Station",
                "desc": "갈라파고스의 생태계와 거북이 보호 활동을 배울 수 있습니다.",
                "emoji": "🐢"
              },
              {
                "name": "토르투가 베이",
                "nameEn": "Tortuga Bay",
                "desc": "하얀 모래사장과 맑은 바다에서 야생 동물을 만날 수 있는 해변입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "세비체",
                "nameEn": "Ceviche",
                "desc": "신선한 해산물을 라임에 절여 먹는 상큼한 요리입니다.",
                "emoji": "🍋"
              },
              {
                "name": "엔세볼라도",
                "nameEn": "Encebollado",
                "desc": "생선과 양파를 듬뿍 넣어 끓인 에콰도르식 해장국입니다.",
                "emoji": "🥣"
              }
            ]
          },
          {
            "name": "키토",
            "nameEn": "Quito",
            "highlight": "적도 탑과 보존 상태가 뛰어난 유네스코 역사 지구",
            "attractions": [
              {
                "name": "적도 기념비",
                "nameEn": "Mitad del Mundo",
                "desc": "북반구와 남반구를 동시에 밟아볼 수 있는 적도 탑입니다.",
                "emoji": "🌍"
              },
              {
                "name": "엘 파네시요",
                "nameEn": "El Panecillo",
                "desc": "키토 시내를 한눈에 내려다볼 수 있는 언덕 위의 성모상입니다.",
                "emoji": "🗽"
              }
            ],
            "foods": [
              {
                "name": "로크로 데 파파",
                "nameEn": "Locro de Papa",
                "desc": "감자와 치즈를 넣어 만든 걸쭉하고 고소한 감자 수프입니다.",
                "emoji": "🥔"
              },
              {
                "name": "야핑가초",
                "nameEn": "Llapingachos",
                "desc": "치즈를 넣은 감자 전으로 에콰도르의 대표 간식입니다.",
                "emoji": "🥞"
              }
            ]
          },
          {
            "name": "바뇨스",
            "nameEn": "Banos",
            "highlight": "세상의 끝 그네와 폭포 하이킹의 액티비티 수도",
            "attractions": [
              {
                "name": "세상의 끝 그네",
                "nameEn": "Casa del Arbol",
                "desc": "절벽 끝에서 아찔하게 그네를 타며 경치를 즐길 수 있습니다.",
                "emoji": "🎢"
              },
              {
                "name": "악마의 냄비 폭포",
                "nameEn": "Pailon del Diablo",
                "desc": "엄청난 굉음을 내며 떨어지는 웅장한 폭포입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "멜로차",
                "nameEn": "Melcocha",
                "desc": "사탕수수로 만든 바뇨스 지역의 전통 쫀득한 사탕입니다.",
                "emoji": "🍬"
              },
              {
                "name": "쿠이",
                "nameEn": "Cuy",
                "desc": "안데스 지역에서 특별한 날 먹는 구운 기니피그 요리입니다.",
                "emoji": "🍖"
              }
            ]
          },
          {
            "name": "쿠엥카",
            "nameEn": "Cuenca",
            "highlight": "자갈길과 푸른 돔 대성당의 고풍스러운 문화 도시",
            "attractions": [
              {
                "name": "새 대성당",
                "nameEn": "New Cathedral",
                "desc": "푸른 돔이 인상적인 쿠엥카의 랜드마크 성당입니다.",
                "emoji": "⛪"
              },
              {
                "name": "카하스 국립공원",
                "nameEn": "Cajas National Park",
                "desc": "수많은 호수와 안데스 고산 식물을 볼 수 있는 자연 공원입니다.",
                "emoji": "🏞️"
              }
            ],
            "foods": [
              {
                "name": "모테 수시오",
                "nameEn": "Mote Sucio",
                "desc": "옥수수와 돼지기름을 섞어 만든 고소한 전통 음식입니다.",
                "emoji": "🌽"
              },
              {
                "name": "오르차타",
                "nameEn": "Horchata",
                "desc": "다양한 허브를 섞어 만든 쿠엥카의 붉은색 전통 차입니다.",
                "emoji": "🍵"
              }
            ]
          },
          {
            "name": "오타발로",
            "nameEn": "Otavalo",
            "highlight": "안데스 원주민들의 화려한 직물 시장",
            "attractions": [
              {
                "name": "오타발로 시장",
                "nameEn": "Otavalo Market",
                "desc": "남미에서 가장 큰 규모의 원주민 수공예품 시장입니다.",
                "emoji": "🛍️"
              },
              {
                "name": "쿠이코차 호수",
                "nameEn": "Cuicocha Lake",
                "desc": "화산 분화구에 생긴 아름다운 푸른 빛의 호수입니다.",
                "emoji": "🌋"
              }
            ],
            "foods": [
              {
                "name": "프리타다",
                "nameEn": "Fritada",
                "desc": "돼지고기를 기름에 튀기듯 구워낸 바삭한 요리입니다.",
                "emoji": "🥓"
              },
              {
                "name": "초클로",
                "nameEn": "Choclo",
                "desc": "안데스 지역의 커다란 옥수수를 쪄서 치즈와 먹는 간식입니다.",
                "emoji": "🌽"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "갈라파고스 바다이구아나 & 자이언트 거북",
            "nameEn": "Galapagos Wildlife",
            "desc": "바다를 수영하는 검은 이구아나와 100년 넘게 사는 거대한 땅거북",
            "emoji": "🐢"
          },
          {
            "name": "세상의 끝 그네 (카사 델 아르볼)",
            "nameEn": "Swing at the End of the World",
            "desc": "퉁구라우아 화산이 내려다보이는 낭떠러지 나무 위에서 타는 아찔한 그네",
            "emoji": "🪢"
          }
        ],
        "foods": [
          {
            "name": "엠파나다 데 비엔토",
            "nameEn": "Empanada de Viento",
            "desc": "바람이 든 것처럼 부풀어 오른 바삭한 치즈 엠파나다 위에 설탕을 뿌린 별미",
            "emoji": "🥟"
          },
          {
            "name": "에콰도르 로코로 데 파파",
            "nameEn": "Locro de Papa",
            "desc": "감자와 치즈를 듬뿍 넣고 끓여 아보카도를 얹어 먹는 따뜻한 전통 감자 수프",
            "emoji": "🥣"
          }
        ]
      },
      {
        "id": "uruguay",
        "name": "우루과이",
        "nameEn": "Uruguay",
        "flag": "🇺🇾",
        "destinations": [
          {
            "name": "몬테비데오",
            "nameEn": "Montevideo",
            "highlight": "라플라타 강변의 람블라 산책로와 살보 궁전",
            "attractions": [
              {
                "name": "독립 광장",
                "nameEn": "Plaza Independencia",
                "desc": "몬테비데오의 중심지로 살보 궁전이 있는 광장입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "람블라",
                "nameEn": "Rambla",
                "desc": "라플라타 강변을 따라 길게 이어진 아름다운 산책로입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "치비토",
                "nameEn": "Chivito",
                "desc": "스테이크와 계란, 치즈를 넣은 우루과이식 샌드위치입니다.",
                "emoji": "🥪"
              },
              {
                "name": "아사도",
                "nameEn": "Asado",
                "desc": "숯불에 정성껏 구워낸 우루과이식 바비큐 요리입니다.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "콜로니아 델 사크라멘토",
            "nameEn": "Colonia del Sacramento",
            "highlight": "포르투갈과 스페인 양식이 섞인 자갈길 등대 마을",
            "attractions": [
              {
                "name": "콜로니아 등대",
                "nameEn": "Colonia Lighthouse",
                "desc": "마을의 전경을 한눈에 볼 수 있는 역사적인 등대입니다.",
                "emoji": "🗼"
              },
              {
                "name": "한숨의 골목",
                "nameEn": "Calle de los Suspiros",
                "desc": "식민지 시대의 정취가 가득한 아름다운 자갈길입니다.",
                "emoji": "🏘️"
              }
            ],
            "foods": [
              {
                "name": "둘세 데 레체",
                "nameEn": "Dulce de Leche",
                "desc": "우유를 졸여 만든 달콤한 우루과이식 캐러멜 소스입니다.",
                "emoji": "🍮"
              },
              {
                "name": "엠파나다",
                "nameEn": "Empanada",
                "desc": "고기나 치즈를 넣어 구운 바삭한 전통 파이입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "푼타 델 에스테",
            "nameEn": "Punta del Este",
            "highlight": "모래사장에 솟은 거대한 손가락 조각상과 고급 휴양지",
            "attractions": [
              {
                "name": "손가락 조각상",
                "nameEn": "La Mano",
                "desc": "모래사장에 솟아있는 거대한 손가락 모양의 조각상입니다.",
                "emoji": "🖐️"
              },
              {
                "name": "카사푸에블로",
                "nameEn": "Casapueblo",
                "desc": "예술가 카를로스 파에스가 지은 하얀색의 독특한 건축물입니다.",
                "emoji": "🎨"
              }
            ],
            "foods": [
              {
                "name": "메르루사",
                "nameEn": "Merluza",
                "desc": "해안가에서 즐기는 신선한 대구 생선 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "마테",
                "nameEn": "Mate",
                "desc": "우루과이 사람들이 하루 종일 들고 다니는 전통 차입니다.",
                "emoji": "🧉"
              }
            ]
          },
          {
            "name": "카보 폴로니오",
            "nameEn": "Cabo Polonio",
            "highlight": "전기 없이 파도 소리와 물개 떼를 만나는 모래언덕 마을",
            "attractions": [
              {
                "name": "물개 서식지",
                "nameEn": "Sea Lion Colony",
                "desc": "바위 위에서 휴식을 취하는 수많은 물개를 볼 수 있습니다.",
                "emoji": "🦭"
              },
              {
                "name": "카보 폴로니오 등대",
                "nameEn": "Cabo Polonio Lighthouse",
                "desc": "전기가 없는 마을을 지키는 고립된 등대입니다.",
                "emoji": "💡"
              }
            ],
            "foods": [
              {
                "name": "해산물 스튜",
                "nameEn": "Seafood Stew",
                "desc": "갓 잡은 해산물로 만든 따뜻한 현지식 스튜입니다.",
                "emoji": "🥘"
              },
              {
                "name": "구운 생선",
                "nameEn": "Grilled Fish",
                "desc": "바닷가에서 바로 구워 먹는 신선한 생선 요리입니다.",
                "emoji": "🎣"
              }
            ]
          },
          {
            "name": "살토",
            "nameEn": "Salto",
            "highlight": "천연 온천 리조트와 오렌지 과수원",
            "attractions": [
              {
                "name": "아라페이 온천",
                "nameEn": "Arapey Thermal Waters",
                "desc": "살토 지역의 유명한 천연 온천 리조트입니다.",
                "emoji": "♨️"
              },
              {
                "name": "살토 그란데 댐",
                "nameEn": "Salto Grande Dam",
                "desc": "거대한 규모를 자랑하는 수력 발전 댐입니다.",
                "emoji": "⚡"
              }
            ],
            "foods": [
              {
                "name": "오렌지 주스",
                "nameEn": "Orange Juice",
                "desc": "살토의 과수원에서 갓 딴 신선한 오렌지 주스입니다.",
                "emoji": "🍊"
              },
              {
                "name": "토르타 프리타",
                "nameEn": "Torta Frita",
                "desc": "비 오는 날 즐겨 먹는 튀긴 밀가루 반죽 간식입니다.",
                "emoji": "🍩"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "푼타 델 에스테 손가락 조각상 (로스 데도시)",
            "nameEn": "The Hand (La Mano)",
            "desc": "해변 모래사장 속에서 다섯 손가락이 불쑥 솟아오른 유명한 현대 미술 조형물",
            "emoji": "🖐️"
          },
          {
            "name": "카사푸에블로",
            "nameEn": "Casapueblo",
            "desc": "산토리니를 연상시키는 조각가 카를로스 파에스의 새하얀 절벽 저택",
            "emoji": "🏛️"
          }
        ],
        "foods": [
          {
            "name": "치비토",
            "nameEn": "Chivito",
            "desc": "부드러운 안심 스테이크에 햄, 베이컨, 치즈, 달걀을 아낌없이 쌓아 올린 우루과이식 샌드위치",
            "emoji": "🥪"
          },
          {
            "name": "마테차",
            "nameEn": "Yerba Mate",
            "desc": "특수 금속 빨대 봄비야로 따뜻한 물을 부어가며 친구들과 나누어 마시는 전통 잎차",
            "emoji": "🧉"
          }
        ]
      },
      {
        "id": "paraguay",
        "name": "파라과이",
        "nameEn": "Paraguay",
        "flag": "🇵🇾",
        "destinations": [
          {
            "name": "아순시온",
            "nameEn": "Asuncion",
            "highlight": "오렌지 나무와 독립의 집이 있는 수도",
            "attractions": [
              {
                "name": "독립의 집",
                "nameEn": "Casa de la Independencia",
                "desc": "파라과이 독립의 역사가 담긴 유서 깊은 건물입니다.",
                "emoji": "🏠"
              },
              {
                "name": "판테온",
                "nameEn": "National Pantheon of Heroes",
                "desc": "국가 영웅들을 기리는 아름다운 건축물입니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "소파 파라과야",
                "nameEn": "Sopa Paraguaya",
                "desc": "옥수수 가루와 치즈로 만든 파라과이식 옥수수 빵입니다.",
                "emoji": "🍞"
              },
              {
                "name": "치파",
                "nameEn": "Chipa",
                "desc": "카사바 가루와 치즈를 넣어 만든 쫄깃한 빵입니다.",
                "emoji": "🧀"
              }
            ]
          },
          {
            "name": "시우다드 델 에스테",
            "nameEn": "Ciudad del Este",
            "highlight": "우호의 다리와 면세 쇼핑의 허브",
            "attractions": [
              {
                "name": "우호의 다리",
                "nameEn": "Friendship Bridge",
                "desc": "브라질과 파라과이를 잇는 상징적인 다리입니다.",
                "emoji": "🌉"
              },
              {
                "name": "살토 델 룬데이",
                "nameEn": "Monday Falls",
                "desc": "이과수 폭포와 닮은 웅장한 자연 폭포입니다.",
                "emoji": "💦"
              }
            ],
            "foods": [
              {
                "name": "엠파나다",
                "nameEn": "Empanada",
                "desc": "다양한 속재료를 넣어 튀긴 파라과이의 국민 간식입니다.",
                "emoji": "🥟"
              },
              {
                "name": "테레레",
                "nameEn": "Terere",
                "desc": "찬물에 허브를 우려 마시는 파라과이 전통 차입니다.",
                "emoji": "🌿"
              }
            ]
          },
          {
            "name": "엔카르나시온",
            "nameEn": "Encarnacion",
            "highlight": "카르니발과 파라나 강변의 산호세 해변",
            "attractions": [
              {
                "name": "산호세 해변",
                "nameEn": "San Jose Beach",
                "desc": "파라나 강변에 위치한 아름다운 인공 해변입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "트리니다드 유적",
                "nameEn": "Trinidad Ruins",
                "desc": "유네스코 세계유산으로 지정된 예수회 선교지 유적입니다.",
                "emoji": "🗿"
              }
            ],
            "foods": [
              {
                "name": "보리 보리",
                "nameEn": "Bori Bori",
                "desc": "옥수수 경단을 넣은 진한 닭고기 수프입니다.",
                "emoji": "🍲"
              },
              {
                "name": "파스텔",
                "nameEn": "Pastel",
                "desc": "고기나 치즈를 넣어 튀긴 바삭한 파이 요리입니다.",
                "emoji": "🥧"
              }
            ]
          },
          {
            "name": "이타이푸",
            "nameEn": "Itaipu",
            "highlight": "세계 최대 규모의 수력 발전 댐",
            "attractions": [
              {
                "name": "이타이푸 댐",
                "nameEn": "Itaipu Dam",
                "desc": "세계 최대 규모를 자랑하는 거대한 수력 발전소입니다.",
                "emoji": "🏗️"
              },
              {
                "name": "이타이푸 생태 보호구역",
                "nameEn": "Itaipu Biological Refuge",
                "desc": "댐 주변의 다양한 야생 동물을 보호하는 구역입니다.",
                "emoji": "🐒"
              }
            ],
            "foods": [
              {
                "name": "구운 생선",
                "nameEn": "Grilled Fish",
                "desc": "댐 근처 강에서 잡은 신선한 민물 생선 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "만디오카",
                "nameEn": "Mandioca",
                "desc": "파라과이 식탁에 빠지지 않는 찐 카사바 뿌리입니다.",
                "emoji": "🍠"
              }
            ]
          },
          {
            "name": "아레구아",
            "nameEn": "Aregua",
            "highlight": "이파카라이 호숫가의 딸기와 도자기 공예 마을",
            "attractions": [
              {
                "name": "이파카라이 호수",
                "nameEn": "Lake Ypacarai",
                "desc": "아름다운 풍경을 자랑하는 파라과이의 대표 호수입니다.",
                "emoji": "🛶"
              },
              {
                "name": "도자기 거리",
                "nameEn": "Ceramic Street",
                "desc": "아기자기한 도자기 공예품을 구경할 수 있는 거리입니다.",
                "emoji": "🏺"
              }
            ],
            "foods": [
              {
                "name": "딸기 타르트",
                "nameEn": "Strawberry Tart",
                "desc": "아레구아 특산물인 신선한 딸기로 만든 디저트입니다.",
                "emoji": "🍓"
              },
              {
                "name": "딸기 쉐이크",
                "nameEn": "Strawberry Shake",
                "desc": "지역 딸기를 듬뿍 넣어 만든 달콤한 음료입니다.",
                "emoji": "🥤"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "예수의 산티시마 트리니다드 유적",
            "nameEn": "Jesuit Missions of Trinidad",
            "desc": "붉은 사암으로 정교하게 지어진 유네스코 세계문화유산 예수회 전도소",
            "emoji": "🏛️"
          },
          {
            "name": "이타이푸 댐",
            "nameEn": "Itaipu Dam",
            "desc": "브라질과 파라과이 국경에 위치한 거대한 현대 토목공학의 불가사의",
            "emoji": "⚡"
          }
        ],
        "foods": [
          {
            "name": "소파 파라과야",
            "nameEn": "Sopa Paraguaya",
            "desc": "이름은 수프지만 옥수숫가루와 치즈, 양파로 구워낸 폭신하고 고소한 케이크빵",
            "emoji": "🍞"
          },
          {
            "name": "테레레",
            "nameEn": "Terere",
            "desc": "얼음물과 신선한 약초를 우려내어 무더운 낮에 마시는 시원한 찬 마테차",
            "emoji": "🥤"
          }
        ]
      },
      {
        "id": "venezuela",
        "name": "베네수엘라",
        "nameEn": "Venezuela",
        "flag": "🇻🇪",
        "destinations": [
          {
            "name": "카나이마",
            "nameEn": "Canaima",
            "highlight": "세계에서 가장 높은 앙헬 폭포로 향하는 베이스캠프",
            "attractions": [
              {
                "name": "앙헬 폭포",
                "nameEn": "Angel Falls",
                "desc": "세계에서 가장 높은 곳에서 떨어지는 폭포입니다.",
                "emoji": "✨"
              },
              {
                "name": "카나이마 라군",
                "nameEn": "Canaima Lagoon",
                "desc": "붉은 빛의 물과 폭포가 어우러진 아름다운 호수입니다.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "카사베",
                "nameEn": "Casabe",
                "desc": "카사바 뿌리로 만든 얇고 바삭한 전통 빵입니다.",
                "emoji": "🍞"
              },
              {
                "name": "구운 생선",
                "nameEn": "Grilled Fish",
                "desc": "강에서 잡은 신선한 생선을 숯불에 구운 요리입니다.",
                "emoji": "🐟"
              }
            ]
          },
          {
            "name": "로스로케스",
            "nameEn": "Los Roques",
            "highlight": "카리브해의 눈부신 산호초 국립공원 제도",
            "attractions": [
              {
                "name": "카요 데 아구아",
                "nameEn": "Cayo de Agua",
                "desc": "바다 한가운데 모래 길이 열리는 환상적인 해변입니다.",
                "emoji": "🏝️"
              },
              {
                "name": "산호초 국립공원",
                "nameEn": "Los Roques National Park",
                "desc": "다양한 해양 생물을 만날 수 있는 스노클링 명소입니다.",
                "emoji": "🤿"
              }
            ],
            "foods": [
              {
                "name": "랍스터 요리",
                "nameEn": "Lobster",
                "desc": "로스로케스 바다에서 잡은 신선한 랍스터 요리입니다.",
                "emoji": "🦞"
              },
              {
                "name": "세비체",
                "nameEn": "Ceviche",
                "desc": "신선한 해산물을 라임에 절여 만든 상큼한 요리입니다.",
                "emoji": "🍋"
              }
            ]
          },
          {
            "name": "로라이마 산",
            "nameEn": "Mount Roraima",
            "highlight": "애니메이션 업(Up)의 배경이 된 평평한 테이블산 테푸이",
            "attractions": [
              {
                "name": "로라이마 정상",
                "nameEn": "Mount Roraima Summit",
                "desc": "구름 위에 떠 있는 듯한 평평한 정상의 신비로운 풍경입니다.",
                "emoji": "☁️"
              },
              {
                "name": "트리플 포인트",
                "nameEn": "Triple Point",
                "desc": "베네수엘라, 브라질, 가이아나 국경이 만나는 지점입니다.",
                "emoji": "📍"
              }
            ],
            "foods": [
              {
                "name": "아레파",
                "nameEn": "Arepa",
                "desc": "옥수수 반죽에 다양한 속을 채워 먹는 베네수엘라 주식입니다.",
                "emoji": "🥙"
              },
              {
                "name": "엠파나다",
                "nameEn": "Empanada",
                "desc": "등산 후 먹는 든든한 고기 튀김 파이입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "카라카스",
            "nameEn": "Caracas",
            "highlight": "아빌라 산 케이블카와 수도의 활기",
            "attractions": [
              {
                "name": "아빌라 산",
                "nameEn": "El Avila",
                "desc": "케이블카를 타고 올라가 도시 전경을 보는 명소입니다.",
                "emoji": "🚠"
              },
              {
                "name": "볼리바르 광장",
                "nameEn": "Plaza Bolivar",
                "desc": "베네수엘라 역사를 느낄 수 있는 수도의 중심지입니다.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "파베욘 크리오요",
                "nameEn": "Pabellon Criollo",
                "desc": "밥, 콩, 고기를 곁들인 베네수엘라 전통 정식입니다.",
                "emoji": "🍛"
              },
              {
                "name": "테케뇨",
                "nameEn": "Tequeños",
                "desc": "치즈를 반죽에 감싸 튀긴 인기 있는 간식입니다.",
                "emoji": "🧀"
              }
            ]
          },
          {
            "name": "메리다",
            "nameEn": "Merida",
            "highlight": "세계에서 가장 높고 긴 케이블카 무쿠쿠쿠바리",
            "attractions": [
              {
                "name": "무쿠쿠쿠바리",
                "nameEn": "Mukumbarí",
                "desc": "세계에서 가장 높고 긴 케이블카로 유명합니다.",
                "emoji": "🚠"
              },
              {
                "name": "메리다 식물원",
                "nameEn": "Merida Botanical Garden",
                "desc": "안데스 산맥의 다양한 식물을 볼 수 있는 정원입니다.",
                "emoji": "🌿"
              }
            ],
            "foods": [
              {
                "name": "피스카 안디나",
                "nameEn": "Pizca Andina",
                "desc": "감자와 우유, 치즈를 넣은 따뜻한 안데스식 수프입니다.",
                "emoji": "🥣"
              },
              {
                "name": "트루차",
                "nameEn": "Trucha",
                "desc": "메리다 산간 지역에서 즐겨 먹는 송어 요리입니다.",
                "emoji": "🐟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "앙헬 폭포 (엔젤 폭포)",
            "nameEn": "Angel Falls",
            "desc": "낙차 979m로 물이 바닥에 닿기 전 안개로 흩어지는 지구상 가장 높은 폭포",
            "emoji": "🌊"
          },
          {
            "name": "로라이마 산 정상 평원",
            "nameEn": "Mount Roraima Summit",
            "desc": "쥐라기 공원 시대 이후 고립되어 독특한 식물이 자라는 구름 위의 바위 고원",
            "emoji": "⛰️"
          }
        ],
        "foods": [
          {
            "name": "파베욘 크리요요",
            "nameEn": "Pabellon Criollo",
            "desc": "잘게 찢은 소고기 장조림, 검은콩밥, 튀긴 플랜테인 바나나가 어우러진 전통 정식",
            "emoji": "🍛"
          },
          {
            "name": "카차파",
            "nameEn": "Cachapa",
            "desc": "생옥수수를 갈아 도톰하게 부친 달콤한 팬케이크에 두툼한 흰 치즈를 접어 넣은 간식",
            "emoji": "🥞"
          }
        ]
      }
    ]
  },
  {
    "id": "africa",
    "name": "아프리카",
    "nameEn": "Africa",
    "emoji": "🦁",
    "description": "광활한 사바나의 야생 동물과 유구한 피라미드의 대륙",
    "countries": [
      {
        "id": "egypt",
        "name": "이집트",
        "nameEn": "Egypt",
        "flag": "🇪🇬",
        "destinations": [
          {
            "name": "카이로",
            "nameEn": "Cairo",
            "highlight": "기자의 대피라미드와 스핑크스가 서 있는 나일강의 도시",
            "attractions": [
              {
                "name": "기자 대피라미드",
                "nameEn": "Great Pyramid of Giza",
                "desc": "고대 이집트의 경이로움을 느낄 수 있는 세계 최대의 피라미드입니다.",
                "emoji": "🔺"
              },
              {
                "name": "스핑크스",
                "nameEn": "Great Sphinx of Giza",
                "desc": "피라미드 앞을 지키고 있는 거대한 사자 몸에 사람 얼굴을 한 조각상입니다.",
                "emoji": "🦁"
              }
            ],
            "foods": [
              {
                "name": "코샤리",
                "nameEn": "Koshary",
                "desc": "쌀, 파스타, 렌틸콩을 섞어 토마토 소스를 얹어 먹는 이집트 국민 음식입니다.",
                "emoji": "🍛"
              },
              {
                "name": "풀 메담스",
                "nameEn": "Ful Medames",
                "desc": "삶은 콩에 올리브유와 향신료를 곁들여 아침 식사로 즐기는 요리입니다.",
                "emoji": "🫘"
              }
            ]
          },
          {
            "name": "룩소르",
            "nameEn": "Luxor",
            "highlight": "왕들의 계곡과 카르나크 신전의 야외 박물관",
            "attractions": [
              {
                "name": "카르나크 신전",
                "nameEn": "Karnak Temple",
                "desc": "고대 이집트의 거대한 기둥들이 숲을 이루는 웅장한 신전 단지입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "왕들의 계곡",
                "nameEn": "Valley of the Kings",
                "desc": "파라오들의 무덤이 숨겨져 있는 역사적인 암벽 계곡입니다.",
                "emoji": "⚰️"
              }
            ],
            "foods": [
              {
                "name": "하맘 마흐쉬",
                "nameEn": "Hamam Mahshi",
                "desc": "비둘기 고기 속에 쌀과 향신료를 채워 구운 룩소르 별미입니다.",
                "emoji": "🐦"
              },
              {
                "name": "바미아",
                "nameEn": "Bamya",
                "desc": "오크라와 고기를 토마토 소스에 푹 끓여낸 영양 가득한 스튜입니다.",
                "emoji": "🍲"
              }
            ]
          },
          {
            "name": "아스완",
            "nameEn": "Aswan",
            "highlight": "펠루카 돛단배와 아부심벨 신전의 관문",
            "attractions": [
              {
                "name": "필레 신전",
                "nameEn": "Philae Temple",
                "desc": "나일강 섬 위에 아름답게 자리 잡은 이시스 여신을 위한 신전입니다.",
                "emoji": "🏝️"
              },
              {
                "name": "아스완 하이 댐",
                "nameEn": "Aswan High Dam",
                "desc": "나일강의 범람을 막고 전력을 생산하는 거대한 현대식 댐입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "누비안 빵",
                "nameEn": "Nubian Bread",
                "desc": "아스완 지역 누비아인들이 화덕에 구워내는 담백한 전통 빵입니다.",
                "emoji": "🍞"
              },
              {
                "name": "히비스커스 차",
                "nameEn": "Karkade",
                "desc": "아스완에서 재배한 꽃으로 만든 붉은 빛의 상큼한 차입니다.",
                "emoji": "☕"
              }
            ]
          },
          {
            "name": "알렉산드리아",
            "nameEn": "Alexandria",
            "highlight": "지중해 연안의 현대 알렉산드리아 도서관",
            "attractions": [
              {
                "name": "알렉산드리아 도서관",
                "nameEn": "Bibliotheca Alexandrina",
                "desc": "고대 도서관의 정신을 계승한 현대적이고 거대한 지식의 전당입니다.",
                "emoji": "📚"
              },
              {
                "name": "카이트베이 요새",
                "nameEn": "Citadel of Qaitbay",
                "desc": "지중해 바다를 마주하고 있는 15세기 방어용 요새입니다.",
                "emoji": "🏰"
              }
            ],
            "foods": [
              {
                "name": "해산물 구이",
                "nameEn": "Grilled Seafood",
                "desc": "지중해에서 갓 잡은 신선한 생선과 새우를 구워낸 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "알렉산드리아식 피자",
                "nameEn": "Alexandrian Pizza",
                "desc": "현지 스타일의 독특한 토핑이 올라간 알렉산드리아만의 피자입니다.",
                "emoji": "🍕"
              }
            ]
          },
          {
            "name": "후르가다",
            "nameEn": "Hurghada",
            "highlight": "홍해의 화려한 산호초와 돌고래 스노클링",
            "attractions": [
              {
                "name": "기프툰 섬",
                "nameEn": "Giftun Island",
                "desc": "홍해의 맑은 바다에서 스노클링을 즐기기 좋은 아름다운 섬입니다.",
                "emoji": "🏝️"
              },
              {
                "name": "후르가다 마리나",
                "nameEn": "Hurghada Marina",
                "desc": "고급 요트들이 정박해 있고 산책하기 좋은 해안가 거리입니다.",
                "emoji": "⛵"
              }
            ],
            "foods": [
              {
                "name": "생선 수프",
                "nameEn": "Fish Soup",
                "desc": "홍해의 신선한 해산물을 듬뿍 넣어 끓인 시원한 국물 요리입니다.",
                "emoji": "🥣"
              },
              {
                "name": "칼라마리 튀김",
                "nameEn": "Fried Calamari",
                "desc": "바삭하게 튀겨낸 신선한 오징어 요리로 맥주 안주로도 인기입니다.",
                "emoji": "🦑"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "기자 피라미드 & 스핑크스",
            "nameEn": "Giza Pyramids & Great Sphinx",
            "desc": "4,500년 전 파라오를 위해 세워진 거대한 석회암 피라미드와 수호상",
            "emoji": "🔺"
          },
          {
            "name": "아부심벨 대신전",
            "nameEn": "Abu Simbel Temples",
            "desc": "람세스 2세의 거대한 4개 좌상이 바위산을 깎아 만들어진 웅장한 신전",
            "emoji": "🏛️"
          }
        ],
        "foods": [
          {
            "name": "코샤리",
            "nameEn": "Koshary",
            "desc": "쌀, 마카로니, 렌틸콩에 새콤한 토마토 소스와 바삭한 튀긴 양파를 올린 이집트 국민 면밥",
            "emoji": "🍛"
          },
          {
            "name": "샤와르마",
            "nameEn": "Shawarma",
            "desc": "회전 꼬치에서 얇게 썰어낸 향긋한 양고기나 닭고기를 피타 빵에 말아 먹는 랩 샌드위치",
            "emoji": "🌯"
          }
        ]
      },
      {
        "id": "south_africa",
        "name": "남아프리카 공화국",
        "nameEn": "South Africa",
        "flag": "🇿🇦",
        "destinations": [
          {
            "name": "케이프타운",
            "nameEn": "Cape Town",
            "highlight": "테이블 마운틴과 펭귄 서식지 볼더스 비치",
            "attractions": [
              {
                "name": "테이블 마운틴",
                "nameEn": "Table Mountain",
                "desc": "정상이 평평하여 식탁처럼 보이는 케이프타운의 상징적인 산입니다.",
                "emoji": "⛰️"
              },
              {
                "name": "볼더스 비치",
                "nameEn": "Boulders Beach",
                "desc": "귀여운 아프리카 펭귄들을 가까이서 볼 수 있는 해변입니다.",
                "emoji": "🐧"
              }
            ],
            "foods": [
              {
                "name": "보보티",
                "nameEn": "Bobotie",
                "desc": "다진 고기에 달걀물을 얹어 오븐에 구운 남아공 전통 요리입니다.",
                "emoji": "🥘"
              },
              {
                "name": "빌통",
                "nameEn": "Biltong",
                "desc": "고기를 말려 향신료로 맛을 낸 남아공식 육포입니다.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "크루거 국립공원",
            "nameEn": "Kruger National Park",
            "highlight": "빅 파이브 야생동물이 살아 숨 쉬는 사파리의 성지",
            "attractions": [
              {
                "name": "사파리 드라이브",
                "nameEn": "Safari Drive",
                "desc": "지프차를 타고 야생 사자, 코끼리 등을 관찰하는 체험입니다.",
                "emoji": "🦁"
              },
              {
                "name": "사비 샌드",
                "nameEn": "Sabi Sands",
                "desc": "표범을 비롯한 다양한 야생동물을 가까이서 볼 수 있는 보호구역입니다.",
                "emoji": "🐆"
              }
            ],
            "foods": [
              {
                "name": "포이키코스",
                "nameEn": "Potjiekos",
                "desc": "무쇠 솥에 고기와 채소를 넣고 푹 끓여낸 캠핑 요리입니다.",
                "emoji": "🍲"
              },
              {
                "name": "브라이",
                "nameEn": "Braai",
                "desc": "남아공식 바비큐로, 숯불에 고기를 구워 먹는 문화입니다.",
                "emoji": "🍖"
              }
            ]
          },
          {
            "name": "요하네스버그",
            "nameEn": "Johannesburg",
            "highlight": "만델라 하우스와 금광 역사의 도시",
            "attractions": [
              {
                "name": "만델라 하우스",
                "nameEn": "Mandela House",
                "desc": "넬슨 만델라가 살았던 집을 박물관으로 꾸민 역사적 장소입니다.",
                "emoji": "🏠"
              },
              {
                "name": "골드 리프 시티",
                "nameEn": "Gold Reef City",
                "desc": "과거 금광의 역사를 체험하고 놀이기구를 즐길 수 있는 테마파크입니다.",
                "emoji": "🎢"
              }
            ],
            "foods": [
              {
                "name": "파프",
                "nameEn": "Pap",
                "desc": "옥수수 가루를 쪄서 만든 남아공의 주식입니다.",
                "emoji": "🌽"
              },
              {
                "name": "초카",
                "nameEn": "Chakalaka",
                "desc": "채소를 매콤하게 볶아 만든 남아공식 채소 반찬입니다.",
                "emoji": "🌶️"
              }
            ]
          },
          {
            "name": "더반",
            "nameEn": "Durban",
            "highlight": "인도양의 황금빛 해변과 서핑",
            "attractions": [
              {
                "name": "골든 마일",
                "nameEn": "Golden Mile",
                "desc": "인도양을 따라 길게 뻗은 황금빛 해변 산책로입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "우샤카 마린 월드",
                "nameEn": "uShaka Marine World",
                "desc": "거대한 수족관과 워터파크가 결합된 더반의 명소입니다.",
                "emoji": "🐬"
              }
            ],
            "foods": [
              {
                "name": "버니 차우",
                "nameEn": "Bunny Chow",
                "desc": "식빵 속을 파내고 그 안에 커리를 가득 채운 더반의 대표 음식입니다.",
                "emoji": "🍞"
              },
              {
                "name": "커리",
                "nameEn": "Durban Curry",
                "desc": "인도 문화의 영향을 받아 매콤하고 진한 맛이 특징인 커리입니다.",
                "emoji": "🍛"
              }
            ]
          },
          {
            "name": "가든 루트",
            "nameEn": "Garden Route",
            "highlight": "극적인 해안 절벽과 원시림 드라이브 코스",
            "attractions": [
              {
                "name": "블루크란스 다리",
                "nameEn": "Bloukrans Bridge",
                "desc": "세계에서 가장 높은 번지점프대가 있는 아찔한 다리입니다.",
                "emoji": "🌉"
              },
              {
                "name": "치치카마 국립공원",
                "nameEn": "Tsitsikamma National Park",
                "desc": "울창한 숲과 바다가 만나는 아름다운 자연 보호구역입니다.",
                "emoji": "🌲"
              }
            ],
            "foods": [
              {
                "name": "오스트리치 스테이크",
                "nameEn": "Ostrich Steak",
                "desc": "가든 루트 지역에서 맛볼 수 있는 담백한 타조 고기 요리입니다.",
                "emoji": "🥩"
              },
              {
                "name": "신선한 굴",
                "nameEn": "Knysna Oysters",
                "desc": "나이스나 지역에서 나는 신선하고 통통한 굴 요리입니다.",
                "emoji": "🦪"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "테이블 마운틴",
            "nameEn": "Table Mountain",
            "desc": "정상이 식탁처럼 평평한 케이프타운의 상징 산과 회전식 케이블카",
            "emoji": "⛰️"
          },
          {
            "name": "볼더스 비치 아프리카 펭귄 서식지",
            "nameEn": "Boulders Beach Penguins",
            "desc": "하얀 백사장과 화강암 바위 사이에서 뒤뚱뒤뚱 걷는 아프리카 펭귄 무리",
            "emoji": "🐧"
          }
        ],
        "foods": [
          {
            "name": "빌통",
            "nameEn": "Biltong",
            "desc": "소고기에 코리앤더 등의 향신료를 바르고 자연 건조해 짭조름하고 쫄깃한 남아공 육포",
            "emoji": "🥓"
          },
          {
            "name": "보보티",
            "nameEn": "Bobotie",
            "desc": "다진 고기에 카레와 건포도를 넣고 달걀 커스터드를 얹어 오븐에 구운 남아공 전통 요리",
            "emoji": "🥧"
          }
        ]
      },
      {
        "id": "kenya",
        "name": "케냐",
        "nameEn": "Kenya",
        "flag": "🇰🇪",
        "destinations": [
          {
            "name": "마사이마라",
            "nameEn": "Maasai Mara",
            "highlight": "수백만 마리 누 떼의 대이동과 사자들의 사냥",
            "attractions": [
              {
                "name": "마라 강",
                "nameEn": "Mara River",
                "desc": "누 떼가 강을 건너는 장관을 볼 수 있는 야생의 현장입니다.",
                "emoji": "🌊"
              },
              {
                "name": "마사이 마을",
                "nameEn": "Maasai Village",
                "desc": "마사이족의 전통 문화를 직접 체험할 수 있는 마을입니다.",
                "emoji": "🛖"
              }
            ],
            "foods": [
              {
                "name": "냐마 초마",
                "nameEn": "Nyama Choma",
                "desc": "염소 고기를 숯불에 구워낸 케냐의 대표적인 바비큐입니다.",
                "emoji": "🍖"
              },
              {
                "name": "우갈리",
                "nameEn": "Ugali",
                "desc": "옥수수 가루를 반죽해 쪄낸 케냐 사람들의 주식입니다.",
                "emoji": "🍚"
              }
            ]
          },
          {
            "name": "나이로비",
            "nameEn": "Nairobi",
            "highlight": "기린 장원과 국립공원이 빌딩 옆에 있는 수도",
            "attractions": [
              {
                "name": "기린 센터",
                "nameEn": "Giraffe Centre",
                "desc": "멸종 위기 기린을 보호하고 직접 먹이를 줄 수 있는 곳입니다.",
                "emoji": "🦒"
              },
              {
                "name": "나이로비 국립공원",
                "nameEn": "Nairobi National Park",
                "desc": "도시 빌딩 숲 바로 옆에서 야생동물을 볼 수 있는 공원입니다.",
                "emoji": "🦓"
              }
            ],
            "foods": [
              {
                "name": "수쿠마 위키",
                "nameEn": "Sukuma Wiki",
                "desc": "케일과 비슷한 채소를 볶아 만든 건강한 반찬입니다.",
                "emoji": "🥬"
              },
              {
                "name": "카추발라",
                "nameEn": "Kachumbari",
                "desc": "토마토와 양파를 섞어 만든 상큼한 케냐식 샐러드입니다.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "암보셀리",
            "nameEn": "Amboseli",
            "highlight": "킬리만자로 산을 배경으로 걷는 거대한 코끼리 떼",
            "attractions": [
              {
                "name": "오브저베이션 힐",
                "nameEn": "Observation Hill",
                "desc": "암보셀리 공원 전체와 킬리만자로 산을 한눈에 볼 수 있는 언덕입니다.",
                "emoji": "⛰️"
              },
              {
                "name": "코끼리 관찰지",
                "nameEn": "Elephant Viewpoint",
                "desc": "거대한 코끼리 무리가 킬리만자로를 배경으로 이동하는 곳입니다.",
                "emoji": "🐘"
              }
            ],
            "foods": [
              {
                "name": "마라이 차",
                "nameEn": "Chai",
                "desc": "우유와 설탕을 듬뿍 넣어 진하게 끓인 케냐식 밀크티입니다.",
                "emoji": "☕"
              },
              {
                "name": "구운 옥수수",
                "nameEn": "Roasted Maize",
                "desc": "길거리에서 흔히 볼 수 있는 고소한 숯불 구이 옥수수입니다.",
                "emoji": "🌽"
              }
            ]
          },
          {
            "name": "몸바사",
            "nameEn": "Mombasa",
            "highlight": "인도양의 새하얀 디아니 비치와 포트 지저스",
            "attractions": [
              {
                "name": "포트 지저스",
                "nameEn": "Fort Jesus",
                "desc": "유네스코 세계문화유산으로 지정된 16세기 포르투갈 요새입니다.",
                "emoji": "🏰"
              },
              {
                "name": "디아니 비치",
                "nameEn": "Diani Beach",
                "desc": "인도양의 에메랄드빛 바다와 하얀 모래가 펼쳐진 휴양지입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "필라우",
                "nameEn": "Pilau",
                "desc": "향신료를 넣어 지은 밥에 고기를 곁들인 몸바사의 별미입니다.",
                "emoji": "🍛"
              },
              {
                "name": "사모사",
                "nameEn": "Samosa",
                "desc": "고기와 채소를 넣어 튀긴 바삭한 인도식 만두입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "나쿠루 호수",
            "nameEn": "Lake Nakuru",
            "highlight": "분홍빛 플라밍고와 흰코뿔소의 서식지",
            "attractions": [
              {
                "name": "플라밍고 서식지",
                "nameEn": "Flamingo Shore",
                "desc": "수만 마리의 분홍색 플라밍고가 호수를 뒤덮는 장관을 볼 수 있습니다.",
                "emoji": "🦩"
              },
              {
                "name": "바분 절벽",
                "nameEn": "Baboon Cliff",
                "desc": "호수 전체를 조망할 수 있는 전망대로 원숭이들이 자주 나타납니다.",
                "emoji": "🐒"
              }
            ],
            "foods": [
              {
                "name": "틸라피아 구이",
                "nameEn": "Grilled Tilapia",
                "desc": "호수에서 잡은 신선한 민물고기를 구워낸 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "만다지",
                "nameEn": "Mandazi",
                "desc": "달콤하고 쫄깃한 케냐식 도넛으로 간식으로 즐겨 먹습니다.",
                "emoji": "🍩"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "마사이마라 국립 보호구역 사파리",
            "nameEn": "Maasai Mara Safari",
            "desc": "오픈 지프차를 타고 사자, 치타, 기린, 얼룩말을 눈앞에서 만나는 모험",
            "emoji": "🦁"
          },
          {
            "name": "기린 센터 (나이로비)",
            "nameEn": "Giraffe Centre Nairobi",
            "desc": "멸종 위기 로스차일드 기린에게 손으로 직접 사료를 주는 특별한 체험",
            "emoji": "🦒"
          }
        ],
        "foods": [
          {
            "name": "우갈리 & 수쿠마 위키",
            "nameEn": "Ugali & Sukuma Wiki",
            "desc": "옥수수가루를 쪄낸 쫄깃한 떡 같은 주식에 고소하게 볶은 케일 채소",
            "emoji": "🌽"
          },
          {
            "name": "니아마 초마",
            "nameEn": "Nyama Choma",
            "desc": "신선한 염소고기나 소고기를 숯불에 겉바속촉으로 구워 샐러드와 곁들인 바비큐",
            "emoji": "🥩"
          }
        ]
      },
      {
        "id": "tanzania",
        "name": "탄자니아",
        "nameEn": "Tanzania",
        "flag": "🇹🇿",
        "destinations": [
          {
            "name": "세렌게티",
            "nameEn": "Serengeti National Park",
            "highlight": "끝없는 평원이라는 뜻의 광활한 사파리",
            "attractions": [
              {
                "name": "세로네라",
                "nameEn": "Seronera",
                "desc": "사자와 표범 등 포식자들이 자주 출몰하는 사파리의 중심지입니다.",
                "emoji": "🦁"
              },
              {
                "name": "올두바이 협곡",
                "nameEn": "Olduvai Gorge",
                "desc": "인류의 기원을 찾을 수 있는 중요한 고고학적 유적지입니다.",
                "emoji": "🦴"
              }
            ],
            "foods": [
              {
                "name": "음시카키",
                "nameEn": "Mshikaki",
                "desc": "양념에 재운 고기를 꼬치에 끼워 숯불에 구운 요리입니다.",
                "emoji": "🍢"
              },
              {
                "name": "우갈리",
                "nameEn": "Ugali",
                "desc": "탄자니아 사람들의 주식으로 옥수수 가루를 쪄서 만듭니다.",
                "emoji": "🍚"
              }
            ]
          },
          {
            "name": "잔지바르",
            "nameEn": "Zanzibar",
            "highlight": "향신료의 섬, 푸른 인도양과 스톤타운",
            "attractions": [
              {
                "name": "스톤타운",
                "nameEn": "Stone Town",
                "desc": "미로 같은 골목과 독특한 문양의 문이 가득한 역사적 구시가지입니다.",
                "emoji": "🏘️"
              },
              {
                "name": "프리즌 아일랜드",
                "nameEn": "Prison Island",
                "desc": "거대한 육지거북을 직접 보고 만질 수 있는 작은 섬입니다.",
                "emoji": "🐢"
              }
            ],
            "foods": [
              {
                "name": "잔지바르 피자",
                "nameEn": "Zanzibar Pizza",
                "desc": "얇은 반죽에 고기, 채소, 달걀 등을 넣어 튀기듯 구운 요리입니다.",
                "emoji": "🍕"
              },
              {
                "name": "해산물 커리",
                "nameEn": "Seafood Curry",
                "desc": "코코넛 밀크를 넣어 부드럽고 향긋한 잔지바르식 커리입니다.",
                "emoji": "🥥"
              }
            ]
          },
          {
            "name": "킬리만자로",
            "nameEn": "Mount Kilimanjaro",
            "highlight": "아프리카 대륙의 지붕 해발 5,895m 만년설 산",
            "attractions": [
              {
                "name": "우후루 피크",
                "nameEn": "Uhuru Peak",
                "desc": "아프리카 대륙에서 가장 높은 킬리만자로의 정상입니다.",
                "emoji": "🏔️"
              },
              {
                "name": "마랑구 루트",
                "nameEn": "Marangu Route",
                "desc": "등반가들이 가장 많이 이용하는 킬리만자로 등반 코스입니다.",
                "emoji": "🥾"
              }
            ],
            "foods": [
              {
                "name": "바나나 스튜",
                "nameEn": "Banana Stew",
                "desc": "킬리만자로 지역에서 나는 바나나로 만든 든든한 식사입니다.",
                "emoji": "🍌"
              },
              {
                "name": "커피",
                "nameEn": "Kilimanjaro Coffee",
                "desc": "킬리만자로 산기슭에서 재배한 향이 깊은 최고급 커피입니다.",
                "emoji": "☕"
              }
            ]
          },
          {
            "name": "응고롱고로",
            "nameEn": "Ngorongoro Crater",
            "highlight": "화산 분화구 안에 형성된 거대한 자연 동물원",
            "attractions": [
              {
                "name": "응고롱고로 분화구",
                "nameEn": "Ngorongoro Crater",
                "desc": "거대한 화산 분화구 안에 형성된 자연 동물원입니다.",
                "emoji": "🌋"
              },
              {
                "name": "마가디 호수",
                "nameEn": "Lake Magadi",
                "desc": "분화구 바닥에 위치하며 플라밍고가 모여드는 호수입니다.",
                "emoji": "🦩"
              }
            ],
            "foods": [
              {
                "name": "구운 옥수수",
                "nameEn": "Roasted Corn",
                "desc": "사파리 투어 중 간편하게 즐길 수 있는 고소한 간식입니다.",
                "emoji": "🌽"
              },
              {
                "name": "차이",
                "nameEn": "Chai",
                "desc": "추운 분화구 아침에 몸을 녹여주는 따뜻한 밀크티입니다.",
                "emoji": "☕"
              }
            ]
          },
          {
            "name": "아루샤",
            "nameEn": "Arusha",
            "highlight": "탄자나이트 보석과 사파리 여행자들의 베이스캠프",
            "attractions": [
              {
                "name": "아루샤 국립공원",
                "nameEn": "Arusha National Park",
                "desc": "메루 산을 배경으로 카누와 도보 사파리를 즐길 수 있는 곳입니다.",
                "emoji": "🛶"
              },
              {
                "name": "문화 유산 센터",
                "nameEn": "Cultural Heritage Centre",
                "desc": "탄자니아의 예술과 보석을 감상할 수 있는 복합 문화 공간입니다.",
                "emoji": "💎"
              }
            ],
            "foods": [
              {
                "name": "니야마 초마",
                "nameEn": "Nyama Choma",
                "desc": "아루샤 현지 식당에서 즐기는 쫄깃한 염소 고기 구이입니다.",
                "emoji": "🍖"
              },
              {
                "name": "필라우",
                "nameEn": "Pilau",
                "desc": "향신료 향이 가득한 탄자니아식 볶음밥입니다.",
                "emoji": "🍛"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "응고롱고로 칼데라 분화구",
            "nameEn": "Ngorongoro Crater",
            "desc": "지름 20km의 거대한 화산 분화구 속에 3만 마리 야생동물이 모여 사는 생태계",
            "emoji": "🌋"
          },
          {
            "name": "잔지바르 눙귀 해변",
            "nameEn": "Nungwi Beach in Zanzibar",
            "desc": "몰디브처럼 맑고 투명한 인도양 에메랄드 바다와 전통 목선 도우",
            "emoji": "🏝️"
          }
        ],
        "foods": [
          {
            "name": "잔지바르 피자",
            "nameEn": "Zanzibar Pizza",
            "desc": "얇은 반죽에 고기, 달걀, 마요네즈를 넣고 철판에 바삭하게 부쳐낸 길거리 음식",
            "emoji": "🍕"
          },
          {
            "name": "탄자니아 킬리만자로 커피",
            "nameEn": "Kilimanjaro Coffee",
            "desc": "화산재 토양의 영양을 듬뿍 받아 와인 같은 산미와 깔끔함을 자랑하는 아라비카 커피",
            "emoji": "☕"
          }
        ]
      },
      {
        "id": "morocco",
        "name": "모로코",
        "nameEn": "Morocco",
        "flag": "🇲🇦",
        "destinations": [
          {
            "name": "마라케시",
            "nameEn": "Marrakech",
            "highlight": "제마 엘 프나 광장의 야시장과 붉은 성벽",
            "attractions": [
              {
                "name": "제마 엘 프나 광장",
                "nameEn": "Jemaa el-Fnaa",
                "desc": "낮에는 시장, 밤에는 공연이 펼쳐지는 마라케시의 심장입니다.",
                "emoji": "🎭"
              },
              {
                "name": "마조렐 정원",
                "nameEn": "Majorelle Garden",
                "desc": "강렬한 파란색 건물과 이국적인 식물이 가득한 아름다운 정원입니다.",
                "emoji": "🌵"
              }
            ],
            "foods": [
              {
                "name": "타진",
                "nameEn": "Tagine",
                "desc": "원뿔 모양의 냄비에 고기와 채소를 넣고 푹 쪄낸 모로코 요리입니다.",
                "emoji": "🥘"
              },
              {
                "name": "쿠스쿠스",
                "nameEn": "Couscous",
                "desc": "좁쌀 모양의 파스타에 고기와 채소를 곁들여 먹는 전통 음식입니다.",
                "emoji": "🥣"
              }
            ]
          },
          {
            "name": "셰프샤우엔",
            "nameEn": "Chefchaouen",
            "highlight": "산골 마을 전체가 파란색으로 칠해진 푸른 진주",
            "attractions": [
              {
                "name": "메디나",
                "nameEn": "Medina",
                "desc": "온통 파란색으로 칠해진 골목길을 걷는 것만으로도 예술이 되는 곳입니다.",
                "emoji": "💙"
              },
              {
                "name": "스페인 모스크",
                "nameEn": "Spanish Mosque",
                "desc": "마을 전체를 한눈에 내려다볼 수 있는 언덕 위의 모스크입니다.",
                "emoji": "🕌"
              }
            ],
            "foods": [
              {
                "name": "민트 티",
                "nameEn": "Mint Tea",
                "desc": "신선한 민트 잎과 설탕을 넣어 달콤하게 즐기는 모로코 국민 차입니다.",
                "emoji": "🍵"
              },
              {
                "name": "바스티야",
                "nameEn": "Pastilla",
                "desc": "얇은 반죽 속에 고기와 견과류를 넣어 만든 달콤 짭짤한 파이입니다.",
                "emoji": "🥧"
              }
            ]
          },
          {
            "name": "페스",
            "nameEn": "Fes",
            "highlight": "9,000여 개의 미로 골목과 전통 가죽 염색장",
            "attractions": [
              {
                "name": "슈와라 가죽 염색장",
                "nameEn": "Chouara Tannery",
                "desc": "천연 염료로 가죽을 염색하는 모습을 볼 수 있는 페스의 명소입니다.",
                "emoji": "🎨"
              },
              {
                "name": "알 카라위인 대학",
                "nameEn": "Al Quaraouiyine",
                "desc": "세계에서 가장 오래된 대학으로 알려진 아름다운 건축물입니다.",
                "emoji": "🎓"
              }
            ],
            "foods": [
              {
                "name": "하리라",
                "nameEn": "Harira",
                "desc": "병아리콩과 렌틸콩을 넣어 끓인 영양 만점의 전통 수프입니다.",
                "emoji": "🥣"
              },
              {
                "name": "모로코 빵",
                "nameEn": "Khobz",
                "desc": "매일 아침 화덕에서 구워내는 둥글고 납작한 모로코식 빵입니다.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "사하라 사막 (메르주가)",
            "nameEn": "Merzouga Sahara Desert",
            "highlight": "낙타를 타고 붉은 모래 언덕에서 별을 보는 캠핑",
            "attractions": [
              {
                "name": "에르그 셰비",
                "nameEn": "Erg Chebbi",
                "desc": "끝없이 펼쳐진 붉은 모래 언덕에서 일출을 보는 곳입니다.",
                "emoji": "🏜️"
              },
              {
                "name": "사막 캠프",
                "nameEn": "Desert Camp",
                "desc": "낙타를 타고 이동해 텐트에서 별을 보며 자는 특별한 체험입니다.",
                "emoji": "⛺"
              }
            ],
            "foods": [
              {
                "name": "베르베르 오믈렛",
                "nameEn": "Berber Omelette",
                "desc": "타진 냄비에 토마토 소스와 달걀을 넣어 만든 사막식 아침 식사입니다.",
                "emoji": "🍳"
              },
              {
                "name": "대추야자",
                "nameEn": "Dates",
                "desc": "사막에서 나는 달콤한 열매로 에너지를 보충하기 좋습니다.",
                "emoji": "🌴"
              }
            ]
          },
          {
            "name": "카사블랑카",
            "nameEn": "Casablanca",
            "highlight": "대서양 위에 지어진 거대한 하산 2세 모스크",
            "attractions": [
              {
                "name": "하산 2세 모스크",
                "nameEn": "Hassan II Mosque",
                "desc": "대서양 바다 위에 지어진 세계에서 가장 아름다운 모스크 중 하나입니다.",
                "emoji": "🕌"
              },
              {
                "name": "코니쉬 해변",
                "nameEn": "Corniche",
                "desc": "대서양을 따라 산책하고 카페를 즐길 수 있는 해안가 거리입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "해산물 플래터",
                "nameEn": "Seafood Platter",
                "desc": "대서양에서 잡은 신선한 생선과 조개를 다양하게 즐기는 요리입니다.",
                "emoji": "🍤"
              },
              {
                "name": "생선 타진",
                "nameEn": "Fish Tagine",
                "desc": "카사블랑카의 신선한 생선과 향신료를 쪄낸 담백한 요리입니다.",
                "emoji": "🐟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "사하라 사막 낙타 트레킹",
            "nameEn": "Sahara Desert Camel Trekking",
            "desc": "끝없이 펼쳐진 황금빛 붉은 사구 위를 낙타를 타고 걷는 낭만",
            "emoji": "🐪"
          },
          {
            "name": "셰프샤우엔 파란 골목",
            "nameEn": "Chefchaouen Blue Alleys",
            "desc": "집과 계단, 문이 모두 신비로운 코발트블루로 칠해진 동화마을",
            "emoji": "🏘️"
          }
        ],
        "foods": [
          {
            "name": "타진",
            "nameEn": "Tajine",
            "desc": "고깔 모양의 독특한 도자기 냄비에 닭고기, 채소, 향신료를 넣고 쪄낸 부드러운 스튜",
            "emoji": "🍲"
          },
          {
            "name": "민트 티",
            "nameEn": "Moroccan Mint Tea",
            "desc": "신선한 생스피어민트 잎과 설탕을 넣고 높은 곳에서 따르는 모로코식 환영의 차",
            "emoji": "🫖"
          }
        ]
      },
      {
        "id": "madagascar",
        "name": "마다가스카르",
        "nameEn": "Madagascar",
        "flag": "🇲🇬",
        "destinations": [
          {
            "name": "모론다바",
            "nameEn": "Morondava",
            "highlight": "하늘을 찌를 듯 장엄한 바오밥 나무 거리",
            "attractions": [
              {
                "name": "바오밥 거리",
                "nameEn": "Avenue of the Baobabs",
                "desc": "수령이 수백 년 된 거대한 바오밥 나무들이 줄지어 서 있는 장관을 볼 수 있어요.",
                "emoji": "🌳"
              },
              {
                "name": "키린디 숲",
                "nameEn": "Kirindy Forest",
                "desc": "마다가스카르 고유의 여우원숭이와 희귀한 야생동물을 관찰할 수 있는 보호구역이에요.",
                "emoji": "🐒"
              }
            ],
            "foods": [
              {
                "name": "로마자바",
                "nameEn": "Romazava",
                "desc": "고기와 채소를 넣고 푹 끓여낸 마다가스카르의 대표적인 전통 스튜예요.",
                "emoji": "🍲"
              },
              {
                "name": "라비투투",
                "nameEn": "Ravitoto",
                "desc": "으깬 카사바 잎과 돼지고기를 함께 볶아 만든 고소한 요리예요.",
                "emoji": "🍛"
              }
            ]
          },
          {
            "name": "안다시베",
            "nameEn": "Andasibe",
            "highlight": "노래하는 꼬리 없는 여우원숭이 인드리",
            "attractions": [
              {
                "name": "안다시베-만타디아 국립공원",
                "nameEn": "Andasibe-Mantadia National Park",
                "desc": "세계에서 가장 큰 여우원숭이인 인드리를 만날 수 있는 울창한 열대우림이에요.",
                "emoji": "🌿"
              },
              {
                "name": "미초 여우원숭이 섬",
                "nameEn": "Lemur Island",
                "desc": "사람과 친숙한 다양한 종류의 여우원숭이들을 가까이서 볼 수 있는 곳이에요.",
                "emoji": "🐾"
              }
            ],
            "foods": [
              {
                "name": "제부 스테이크",
                "nameEn": "Zebu Steak",
                "desc": "마다가스카르의 상징인 혹소 제부의 고기로 만든 담백한 스테이크예요.",
                "emoji": "🥩"
              },
              {
                "name": "바닐라 치킨",
                "nameEn": "Vanilla Chicken",
                "desc": "마다가스카르 특산물인 바닐라를 넣어 향긋하고 부드러운 닭고기 요리예요.",
                "emoji": "🍗"
              }
            ]
          },
          {
            "name": "칭기 드 베마라하",
            "nameEn": "Tsingy de Bemaraha",
            "highlight": "칼날처럼 날카로운 석회암 바위 숲",
            "attractions": [
              {
                "name": "그랜드 칭기",
                "nameEn": "Grand Tsingy",
                "desc": "칼날처럼 뾰족한 석회암 바위들이 숲을 이룬 신비로운 지형이에요.",
                "emoji": "⛰️"
              },
              {
                "name": "마남볼로 강",
                "nameEn": "Manambolo River",
                "desc": "카누를 타고 협곡 사이를 지나며 웅장한 자연을 감상할 수 있어요.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "코코넛 밥",
                "nameEn": "Coconut Rice",
                "desc": "코코넛 밀크를 넣어 지어 고소한 풍미가 가득한 밥이에요.",
                "emoji": "🍚"
              },
              {
                "name": "생선 구이",
                "nameEn": "Grilled Fish",
                "desc": "강에서 잡은 신선한 민물고기를 숯불에 구워낸 담백한 요리예요.",
                "emoji": "🐟"
              }
            ]
          },
          {
            "name": "노시베",
            "nameEn": "Nosy Be",
            "highlight": "일랑일랑 꽃향기와 고래상어가 헤엄치는 화려한 섬",
            "attractions": [
              {
                "name": "로코베 자연보호구역",
                "nameEn": "Lokobe Nature Reserve",
                "desc": "섬의 유일한 원시림으로 희귀한 파충류와 식물을 볼 수 있어요.",
                "emoji": "🦎"
              },
              {
                "name": "몽 파소",
                "nameEn": "Mont Passot",
                "desc": "섬에서 가장 높은 곳으로 아름다운 일몰과 호수를 한눈에 담을 수 있어요.",
                "emoji": "🌅"
              }
            ],
            "foods": [
              {
                "name": "해산물 플래터",
                "nameEn": "Seafood Platter",
                "desc": "인도양에서 갓 잡은 신선한 새우와 게를 푸짐하게 즐길 수 있어요.",
                "emoji": "🦐"
              },
              {
                "name": "일랑일랑 차",
                "nameEn": "Ylang-Ylang Tea",
                "desc": "섬의 특산물인 일랑일랑 꽃향기를 담은 향긋한 차예요.",
                "emoji": "☕"
              }
            ]
          },
          {
            "name": "안타나나리보",
            "nameEn": "Antananarivo",
            "highlight": "언덕 위에 세워진 여왕궁과 계단식 논",
            "attractions": [
              {
                "name": "여왕궁",
                "nameEn": "Rova of Antananarivo",
                "desc": "언덕 위에 위치하여 도시 전체를 내려다볼 수 있는 역사적인 궁전이에요.",
                "emoji": "🏰"
              },
              {
                "name": "아날라켈리 시장",
                "nameEn": "Analakely Market",
                "desc": "현지인들의 활기찬 일상을 엿볼 수 있는 전통 재래시장이에요.",
                "emoji": "🛍️"
              }
            ],
            "foods": [
              {
                "name": "카사바 튀김",
                "nameEn": "Fried Cassava",
                "desc": "고구마와 비슷한 식감의 카사바를 바삭하게 튀겨낸 간식이에요.",
                "emoji": "🍠"
              },
              {
                "name": "모포 가시",
                "nameEn": "Mofo Gasy",
                "desc": "쌀가루 반죽을 틀에 구워 만든 마다가스카르식 아침 식사 빵이에요.",
                "emoji": "🥞"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "바오밥 나무 거리 (알레 데 바오밥)",
            "nameEn": "Avenue of the Baobabs",
            "desc": "800년이 넘은 거대하고 신비로운 형태의 바오밥 나무들이 도열한 일몰 명소",
            "emoji": "🌳"
          },
          {
            "name": "여우원숭이 국립공원",
            "nameEn": "Lemur Island",
            "desc": "오직 마다가스카르에서만 살고 있는 줄무늬 여우원숭이와의 만남",
            "emoji": "🐒"
          }
        ],
        "foods": [
          {
            "name": "로마자바",
            "nameEn": "Romazava",
            "desc": "소고기와 다양한 아프리카 허브 잎을 넣고 끓여 밥에 얹어 먹는 전통 국물 요리",
            "emoji": "🥣"
          },
          {
            "name": "마다가스카르 바닐라 디저트",
            "nameEn": "Vanilla Infused Pastry",
            "desc": "세계 최고 품질의 천연 버번 바닐라 빈을 아낌없이 사용한 향기로운 디저트",
            "emoji": "🍨"
          }
        ]
      },
      {
        "id": "seychelles",
        "name": "세이셸",
        "nameEn": "Seychelles",
        "flag": "🇸🇨",
        "destinations": [
          {
            "name": "마헤 섬",
            "nameEn": "Mahe Island",
            "highlight": "빅토리아 시계탑과 보발롱 비치가 있는 본섬",
            "attractions": [
              {
                "name": "빅토리아 시계탑",
                "nameEn": "Victoria Clocktower",
                "desc": "세이셸의 수도 빅토리아의 중심을 지키는 상징적인 시계탑이에요.",
                "emoji": "🕰️"
              },
              {
                "name": "보발롱 해변",
                "nameEn": "Beau Vallon Beach",
                "desc": "수영과 다양한 해양 스포츠를 즐기기 좋은 가장 유명한 해변이에요.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "크레올 생선 커리",
                "nameEn": "Creole Fish Curry",
                "desc": "코코넛 밀크와 향신료를 넣어 만든 부드러운 생선 요리예요.",
                "emoji": "🍛"
              },
              {
                "name": "빵나무 열매 튀김",
                "nameEn": "Breadfruit Chips",
                "desc": "빵나무 열매를 얇게 썰어 바삭하게 튀겨낸 고소한 간식이에요.",
                "emoji": "🍟"
              }
            ]
          },
          {
            "name": "프랄린 섬",
            "nameEn": "Praslin Island",
            "highlight": "발레 드 메 국립공원의 거대한 코코 드 메르",
            "attractions": [
              {
                "name": "발레 드 메 국립공원",
                "nameEn": "Vallee de Mai",
                "desc": "유네스코 세계유산으로 지정된 곳으로 희귀한 코코 드 메르 야자수가 자라요.",
                "emoji": "🌴"
              },
              {
                "name": "앙스 라지오",
                "nameEn": "Anse Lazio",
                "desc": "세계에서 가장 아름다운 해변 중 하나로 꼽히는 평화로운 해변이에요.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "문어 커리",
                "nameEn": "Octopus Curry",
                "desc": "신선한 문어를 코코넛 밀크와 함께 끓여낸 세이셸 별미예요.",
                "emoji": "🐙"
              },
              {
                "name": "바나나 퓨레",
                "nameEn": "Banana Puree",
                "desc": "잘 익은 바나나를 으깨어 코코넛 밀크와 섞어 만든 달콤한 디저트예요.",
                "emoji": "🍌"
              }
            ]
          },
          {
            "name": "라디그 섬",
            "nameEn": "La Digue Island",
            "highlight": "자전거를 타고 만나는 앙스 수스 다종 비치",
            "attractions": [
              {
                "name": "앙스 수스 다종",
                "nameEn": "Anse Source d'Argent",
                "desc": "거대한 화강암 바위와 맑은 물이 어우러진 세계적인 해변이에요.",
                "emoji": "🪨"
              },
              {
                "name": "유니온 에스테이트",
                "nameEn": "L'Union Estate",
                "desc": "옛 코코넛 농장을 구경하고 거대 육지거북을 만날 수 있는 곳이에요.",
                "emoji": "🐢"
              }
            ],
            "foods": [
              {
                "name": "생선 구이",
                "nameEn": "Grilled Red Snapper",
                "desc": "갓 잡은 붉은 도미를 향신료와 함께 구워낸 담백한 요리예요.",
                "emoji": "🐟"
              },
              {
                "name": "코코넛 샐러드",
                "nameEn": "Coconut Salad",
                "desc": "신선한 코코넛 과육과 채소를 버무려 만든 상큼한 샐러드예요.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "실루엣 섬",
            "nameEn": "Silhouette Island",
            "highlight": "원시림 보존구역과 한적한 스노클링 리조트",
            "attractions": [
              {
                "name": "실루엣 해양 국립공원",
                "nameEn": "Silhouette Marine National Park",
                "desc": "다양한 산호초와 열대어를 볼 수 있는 스노클링 명소예요.",
                "emoji": "🤿"
              },
              {
                "name": "다우반 묘지",
                "nameEn": "Dauban Mausoleum",
                "desc": "섬의 역사를 간직한 고풍스러운 건축물로 산책하기 좋아요.",
                "emoji": "🏛️"
              }
            ],
            "foods": [
              {
                "name": "훈제 생선",
                "nameEn": "Smoked Fish",
                "desc": "현지에서 잡은 생선을 훈연하여 깊은 풍미를 살린 요리예요.",
                "emoji": "🎣"
              },
              {
                "name": "타피오카 푸딩",
                "nameEn": "Tapioca Pudding",
                "desc": "타피오카와 코코넛 밀크로 만든 달콤하고 부드러운 디저트예요.",
                "emoji": "🍮"
              }
            ]
          },
          {
            "name": "알다브라",
            "nameEn": "Aldabra Atoll",
            "highlight": "10만 마리의 알다브라 코끼리거북 환초",
            "attractions": [
              {
                "name": "알다브라 환초",
                "nameEn": "Aldabra Atoll",
                "desc": "세계 최대 규모의 산호 환초로 수많은 야생동물의 낙원이에요.",
                "emoji": "🐚"
              },
              {
                "name": "거북이 서식지",
                "nameEn": "Giant Tortoise Habitat",
                "desc": "수만 마리의 알다브라 코끼리거북이 자유롭게 노니는 자연 서식지예요.",
                "emoji": "🐢"
              }
            ],
            "foods": [
              {
                "name": "해산물 볶음밥",
                "nameEn": "Seafood Fried Rice",
                "desc": "신선한 해산물을 듬뿍 넣어 볶아낸 든든한 한 끼 식사예요.",
                "emoji": "🥘"
              },
              {
                "name": "열대 과일 주스",
                "nameEn": "Tropical Fruit Juice",
                "desc": "섬에서 자란 망고와 파파야를 즉석에서 갈아 만든 주스예요.",
                "emoji": "🍹"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "앙스 수스 다종 해변",
            "nameEn": "Anse Source d'Argent",
            "desc": "부드러운 분홍빛 화강암 기암괴석과 은빛 모래사장이 어우러진 세계 최고의 포토존 해변",
            "emoji": "🏖️"
          },
          {
            "name": "발레 드 메 자연보호구역",
            "nameEn": "Vallee de Mai Nature Reserve",
            "desc": "여성의 골반을 닮은 세계에서 가장 무거운 열매 코코 드 메르 야자나무 원시림",
            "emoji": "🥥"
          }
        ],
        "foods": [
          {
            "name": "크리올 생선 커리",
            "nameEn": "Creole Fish Curry",
            "desc": "코코넛 밀크와 강황, 신선한 지중해 해산물을 넣어 끓인 부드러운 커리",
            "emoji": "🍛"
          },
          {
            "name": "구운 붉은퉁돔",
            "nameEn": "Grilled Red Snapper",
            "desc": "마늘과 생강, 칠리를 바르고 바나나 잎에 감싸 숯불에 구워낸 생선 요리",
            "emoji": "🐟"
          }
        ]
      },
      {
        "id": "mauritius",
        "name": "모리셔스",
        "nameEn": "Mauritius",
        "flag": "🇲🇺",
        "destinations": [
          {
            "name": "샤마렐",
            "nameEn": "Chamarel",
            "highlight": "일곱 빛깔로 반짝이는 세븐 컬러드 어스",
            "attractions": [
              {
                "name": "세븐 컬러드 어스",
                "nameEn": "Seven Coloured Earths",
                "desc": "일곱 가지 색깔의 모래 언덕이 신비롭게 펼쳐진 지질학적 명소예요.",
                "emoji": "🌈"
              },
              {
                "name": "샤마렐 폭포",
                "nameEn": "Chamarel Waterfall",
                "desc": "울창한 숲 사이로 시원하게 떨어지는 모리셔스에서 가장 높은 폭포예요.",
                "emoji": "💦"
              }
            ],
            "foods": [
              {
                "name": "사탕수수 주스",
                "nameEn": "Sugarcane Juice",
                "desc": "모리셔스 특산물인 사탕수수를 즉석에서 짜낸 달콤한 음료예요.",
                "emoji": "🥤"
              },
              {
                "name": "커리 치킨",
                "nameEn": "Chicken Curry",
                "desc": "인도 문화의 영향을 받아 향신료가 풍부한 모리셔스식 커리예요.",
                "emoji": "🍛"
              }
            ]
          },
          {
            "name": "르 몬",
            "nameEn": "Le Morne",
            "highlight": "바다 밑으로 폭포가 떨어지는 듯한 수중폭포 환상",
            "attractions": [
              {
                "name": "르 몬 브라반트",
                "nameEn": "Le Morne Brabant",
                "desc": "바다 위에 우뚝 솟은 거대한 바위산으로 하이킹하기 좋아요.",
                "emoji": "⛰️"
              },
              {
                "name": "수중 폭포",
                "nameEn": "Underwater Waterfall",
                "desc": "바다 밑으로 모래가 흘러내려 폭포처럼 보이는 환상적인 착시 현상이에요.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "달 푸리",
                "nameEn": "Dholl Puri",
                "desc": "콩을 넣은 얇은 빵에 커리를 곁들여 먹는 모리셔스의 국민 간식이에요.",
                "emoji": "🌯"
              },
              {
                "name": "게 요리",
                "nameEn": "Crab Curry",
                "desc": "신선한 게를 매콤한 소스에 볶아낸 풍미 가득한 요리예요.",
                "emoji": "🦀"
              }
            ]
          },
          {
            "name": "포트루이스",
            "nameEn": "Port Louis",
            "highlight": "알록달록 우산 거리와 센트럴 마켓",
            "attractions": [
              {
                "name": "센트럴 마켓",
                "nameEn": "Central Market",
                "desc": "다양한 향신료와 과일, 기념품을 구경할 수 있는 활기찬 시장이에요.",
                "emoji": "🍎"
              },
              {
                "name": "우산 거리",
                "nameEn": "Umbrella Street",
                "desc": "알록달록한 우산이 하늘을 덮고 있어 사진 찍기 좋은 명소예요.",
                "emoji": "☂️"
              }
            ],
            "foods": [
              {
                "name": "불레",
                "nameEn": "Boulettes",
                "desc": "중국식 만두와 어묵을 국물에 넣어 먹는 모리셔스식 별미예요.",
                "emoji": "🥟"
              },
              {
                "name": "파라타",
                "nameEn": "Farata",
                "desc": "겹겹이 층이 있는 쫄깃한 인도식 빵으로 커리와 함께 먹어요.",
                "emoji": "🫓"
              }
            ]
          },
          {
            "name": "벨마르",
            "nameEn": "Belle Mare",
            "highlight": "끝없이 펼쳐진 에메랄드빛 라군과 수상 스포츠",
            "attractions": [
              {
                "name": "벨마르 해변",
                "nameEn": "Belle Mare Beach",
                "desc": "끝없이 펼쳐진 하얀 모래사장과 에메랄드빛 바다가 아름다운 곳이에요.",
                "emoji": "🏖️"
              },
              {
                "name": "워터파크",
                "nameEn": "Water Park",
                "desc": "가족과 함께 다양한 물놀이 기구를 즐길 수 있는 휴양 시설이에요.",
                "emoji": "🎢"
              }
            ],
            "foods": [
              {
                "name": "생선 튀김",
                "nameEn": "Fried Fish",
                "desc": "갓 잡은 생선을 바삭하게 튀겨 소스에 찍어 먹는 요리예요.",
                "emoji": "🐟"
              },
              {
                "name": "코코넛 워터",
                "nameEn": "Coconut Water",
                "desc": "해변에서 바로 마시는 시원하고 달콤한 천연 코코넛 음료예요.",
                "emoji": "🥥"
              }
            ]
          },
          {
            "name": "일로세프",
            "nameEn": "Ile aux Cerfs",
            "highlight": "골프와 카타마란 요트 투어의 파라다이스",
            "attractions": [
              {
                "name": "일로세프 해변",
                "nameEn": "Ile aux Cerfs Beach",
                "desc": "투명한 바다에서 카타마란 요트 투어와 수상 스포츠를 즐길 수 있어요.",
                "emoji": "⛵"
              },
              {
                "name": "골프 코스",
                "nameEn": "Golf Course",
                "desc": "바다를 배경으로 라운딩을 즐길 수 있는 세계적인 골프장이에요.",
                "emoji": "⛳"
              }
            ],
            "foods": [
              {
                "name": "바비큐 플래터",
                "nameEn": "BBQ Platter",
                "desc": "해변에서 즐기는 신선한 해산물과 고기 바비큐 요리예요.",
                "emoji": "🍖"
              },
              {
                "name": "망고 샐러드",
                "nameEn": "Mango Salad",
                "desc": "달콤한 망고와 매콤한 소스를 곁들인 상큼한 샐러드예요.",
                "emoji": "🥭"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "샤마렐 세븐 컬러드 어스",
            "nameEn": "Seven Coloured Earth",
            "desc": "화산재가 굳어 빨강, 파랑, 보라 등 7가지 무지개 색상을 띠는 신비로운 언덕",
            "emoji": "🌈"
          },
          {
            "name": "르 몬 브라반트 바위산",
            "nameEn": "Le Morne Brabant",
            "desc": "바다 위로 556m 웅장하게 솟아오른 유네스코 세계유산 현무암 절벽",
            "emoji": "⛰️"
          }
        ],
        "foods": [
          {
            "name": "돌 푸리",
            "nameEn": "Dholl Puri",
            "desc": "노란 완두콩 가루를 넣어 얇게 부친 플랫브레드에 콩 커리와 토마토 살사를 싸 먹는 간식",
            "emoji": "🫓"
          },
          {
            "name": "바닐라 티",
            "nameEn": "Mauritian Vanilla Tea",
            "desc": "섬에서 재배한 홍차 잎에 천연 바닐라 향을 블렌딩한 모리셔스의 대표 티",
            "emoji": "🍵"
          }
        ]
      },
      {
        "id": "ethiopia",
        "name": "에티오피아",
        "nameEn": "Ethiopia",
        "flag": "🇪🇹",
        "destinations": [
          {
            "name": "랄리벨라",
            "nameEn": "Lalibela",
            "highlight": "통째로 바위를 깎아 지하에 세운 11개의 석굴 교회",
            "attractions": [
              {
                "name": "성 조지 교회",
                "nameEn": "Church of St. George",
                "desc": "바위를 십자가 모양으로 깎아 만든 랄리벨라의 가장 유명한 석굴 교회예요.",
                "emoji": "⛪"
              },
              {
                "name": "베트 메드하네 알렘",
                "nameEn": "Bete Medhane Alem",
                "desc": "세계에서 가장 큰 단일 암석 교회로 웅장한 규모를 자랑해요.",
                "emoji": "🪨"
              }
            ],
            "foods": [
              {
                "name": "인제라",
                "nameEn": "Injera",
                "desc": "테프 가루로 만든 시큼한 맛의 얇은 빵으로 모든 식사의 기본이에요.",
                "emoji": "🥞"
              },
              {
                "name": "도로 와트",
                "nameEn": "Doro Wat",
                "desc": "닭고기와 삶은 달걀을 매콤한 소스에 푹 끓여낸 에티오피아식 닭볶음탕이에요.",
                "emoji": "🍗"
              }
            ]
          },
          {
            "name": "아디스아바바",
            "nameEn": "Addis Ababa",
            "highlight": "최초의 인류 화석 루시가 있는 국립박물관",
            "attractions": [
              {
                "name": "국립박물관",
                "nameEn": "National Museum",
                "desc": "인류의 조상인 '루시'의 화석을 직접 볼 수 있는 중요한 박물관이에요.",
                "emoji": "🦴"
              },
              {
                "name": "메르카토 시장",
                "nameEn": "Merkato",
                "desc": "아프리카 최대 규모의 재래시장으로 없는 것이 없는 활기찬 곳이에요.",
                "emoji": "🛍️"
              }
            ],
            "foods": [
              {
                "name": "에티오피아 커피",
                "nameEn": "Ethiopian Coffee",
                "desc": "커피의 발상지답게 전통 방식으로 볶아 향이 매우 진하고 깊어요.",
                "emoji": "☕"
              },
              {
                "name": "팁스",
                "nameEn": "Tibs",
                "desc": "고기를 야채와 함께 매콤하게 볶아낸 에티오피아의 인기 요리예요.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "곤다르",
            "nameEn": "Gondar",
            "highlight": "아프리카의 카멜롯이라 불리는 중세 황제의 성채",
            "attractions": [
              {
                "name": "파실 게비",
                "nameEn": "Fasil Ghebbi",
                "desc": "중세 시대 황제들의 성채가 모여 있는 아프리카의 카멜롯이에요.",
                "emoji": "🏰"
              },
              {
                "name": "데브레 베르한 셀라시에 교회",
                "nameEn": "Debre Berhan Selassie Church",
                "desc": "천사들의 얼굴이 그려진 아름다운 천장화로 유명한 교회예요.",
                "emoji": "🎨"
              }
            ],
            "foods": [
              {
                "name": "베이예나투",
                "nameEn": "Beyaynetu",
                "desc": "인제라 위에 다양한 채소 요리를 얹어 먹는 채식주의자용 식사예요.",
                "emoji": "🥗"
              },
              {
                "name": "꿀 와인",
                "nameEn": "Tej",
                "desc": "꿀을 발효시켜 만든 에티오피아의 전통 술로 달콤한 맛이 특징이에요.",
                "emoji": "🍷"
              }
            ]
          },
          {
            "name": "다나킬 함몰지",
            "nameEn": "Danakil Depression",
            "highlight": "형광 노란빛 유황 온천과 마그마 용암호수",
            "attractions": [
              {
                "name": "달롤 유황 온천",
                "nameEn": "Dallol",
                "desc": "형광 노란색과 초록색이 어우러진 지구상에서 가장 이색적인 풍경이에요.",
                "emoji": "🌋"
              },
              {
                "name": "에르타 알레 화산",
                "nameEn": "Erta Ale",
                "desc": "끊임없이 끓어오르는 마그마 호수를 볼 수 있는 활화산이에요.",
                "emoji": "🔥"
              }
            ],
            "foods": [
              {
                "name": "소금빵",
                "nameEn": "Salt Bread",
                "desc": "다나킬 지역의 소금을 활용해 만든 담백한 현지식 빵이에요.",
                "emoji": "🍞"
              },
              {
                "name": "염소 고기 구이",
                "nameEn": "Roasted Goat",
                "desc": "척박한 환경에서 자란 염소 고기를 숯불에 구워낸 별미예요.",
                "emoji": "🐐"
              }
            ]
          },
          {
            "name": "시미엔 산맥",
            "nameEn": "Simien Mountains",
            "highlight": "겔라다 비비 원숭이와 깊은 협곡 트레킹",
            "attractions": [
              {
                "name": "시미엔 국립공원",
                "nameEn": "Simien Mountains National Park",
                "desc": "깊은 협곡과 깎아지른 절벽이 장관을 이루는 트레킹 명소예요.",
                "emoji": "🏔️"
              },
              {
                "name": "겔라다 원숭이 서식지",
                "nameEn": "Gelada Habitat",
                "desc": "가슴에 붉은 반점이 있는 독특한 겔라다 원숭이를 만날 수 있어요.",
                "emoji": "🐒"
              }
            ],
            "foods": [
              {
                "name": "보리 죽",
                "nameEn": "Genfo",
                "desc": "보릿가루를 끓여 만든 걸쭉한 죽으로 아침 식사로 즐겨 먹어요.",
                "emoji": "🥣"
              },
              {
                "name": "구운 감자",
                "nameEn": "Roasted Potatoes",
                "desc": "산맥에서 재배한 신선한 감자를 불에 구워낸 소박한 간식이에요.",
                "emoji": "🥔"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "랄리벨라 성 기요르기스 교회",
            "nameEn": "Church of Saint George (Bet Giyorgis)",
            "desc": "붉은 바위 암반을 십자가 모양으로 아래로 파내려 가며 조각한 경이로운 암굴 성당",
            "emoji": "⛪"
          },
          {
            "name": "다나킬 달롤 화산지대",
            "nameEn": "Dallol Sulfur Springs",
            "desc": "유황과 소금, 미네랄이 결합하여 외계 행성 같은 초현실적 형광색 풍경을 만든 곳",
            "emoji": "🧪"
          }
        ],
        "foods": [
          {
            "name": "인제라 & 와트",
            "nameEn": "Injera and Wat",
            "desc": "테프 곡물로 발효시켜 시큼하고 폭신한 전병에 매콤한 고기 스튜 와트를 싸 먹는 정식",
            "emoji": "🫓"
          },
          {
            "name": "에티오피아 전통 커피 세리머니",
            "nameEn": "Buna Coffee Ceremony",
            "desc": "커피의 발상지에서 원두를 직접 볶고 흙주전자 제베나에 끓여내는 전통 예법 커피",
            "emoji": "☕"
          }
        ]
      },
      {
        "id": "namibia",
        "name": "나미비아",
        "nameEn": "Namibia",
        "flag": "🇳🇦",
        "destinations": [
          {
            "name": "소스블레이",
            "nameEn": "Sossusvlei",
            "highlight": "세상에서 가장 오래된 나미브 사막의 거대한 붉은 사구",
            "attractions": [
              {
                "name": "듄 45",
                "nameEn": "Dune 45",
                "desc": "붉은 모래 언덕 위로 올라가 사막의 일출을 감상하기 좋은 곳이에요.",
                "emoji": "🏜️"
              },
              {
                "name": "데드블레이",
                "nameEn": "Deadvlei",
                "desc": "하얀 소금 평원 위에 죽은 나무들이 서 있는 사진 촬영 명소예요.",
                "emoji": "🌳"
              }
            ],
            "foods": [
              {
                "name": "오릭스 스테이크",
                "nameEn": "Oryx Steak",
                "desc": "나미비아 사막에 사는 오릭스 고기로 만든 담백한 스테이크예요.",
                "emoji": "🥩"
              },
              {
                "name": "빌통",
                "nameEn": "Biltong",
                "desc": "고기를 말려 만든 나미비아식 육포로 여행 중 간식으로 최고예요.",
                "emoji": "🥓"
              }
            ]
          },
          {
            "name": "에토샤 국립공원",
            "nameEn": "Etosha National Park",
            "highlight": "소금 평원 물웅덩이로 모여드는 동물들",
            "attractions": [
              {
                "name": "에토샤 판",
                "nameEn": "Etosha Pan",
                "desc": "거대한 소금 평원으로 물웅덩이 주변으로 모여드는 야생동물을 관찰할 수 있어요.",
                "emoji": "🐘"
              },
              {
                "name": "오카우쿠에요 물웅덩이",
                "nameEn": "Okaukuejo Waterhole",
                "desc": "밤낮으로 사자, 코끼리 등 다양한 동물이 찾아오는 관찰 포인트예요.",
                "emoji": "🦁"
              }
            ],
            "foods": [
              {
                "name": "게임 미트",
                "nameEn": "Game Meat",
                "desc": "야생동물 고기를 활용한 다양한 바비큐 요리를 맛볼 수 있어요.",
                "emoji": "🍖"
              },
              {
                "name": "포이키코스",
                "nameEn": "Potjiekos",
                "desc": "무쇠 솥에 고기와 채소를 넣고 푹 끓여낸 전통 스튜예요.",
                "emoji": "🥘"
              }
            ]
          },
          {
            "name": "스와코프문트",
            "nameEn": "Swakopmund",
            "highlight": "독일풍 식민지 건축물과 사막 쿼드바이크",
            "attractions": [
              {
                "name": "스와코프문트 등대",
                "nameEn": "Swakopmund Lighthouse",
                "desc": "독일 식민지 시대의 건축 양식을 간직한 도시의 상징적인 등대예요.",
                "emoji": "🗼"
              },
              {
                "name": "샌드위치 하버",
                "nameEn": "Sandwich Harbour",
                "desc": "거대한 사막 모래 언덕이 바다와 만나는 경이로운 풍경을 볼 수 있어요.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "독일식 소시지",
                "nameEn": "German Sausage",
                "desc": "독일 문화의 영향으로 맛볼 수 있는 정통 수제 소시지예요.",
                "emoji": "🌭"
              },
              {
                "name": "해산물 수프",
                "nameEn": "Seafood Soup",
                "desc": "대서양에서 잡은 신선한 해산물을 듬뿍 넣은 따뜻한 수프예요.",
                "emoji": "🥣"
              }
            ]
          },
          {
            "name": "스켈레톤 코스트",
            "nameEn": "Skeleton Coast",
            "highlight": "난파선과 물개 떼가 있는 안개 낀 신비의 해안",
            "attractions": [
              {
                "name": "난파선 잔해",
                "nameEn": "Shipwrecks",
                "desc": "해안가에 방치된 오래된 난파선들이 신비로운 분위기를 자아내요.",
                "emoji": "🚢"
              },
              {
                "name": "케이프 크로스 물개 보호구역",
                "nameEn": "Cape Cross Seal Reserve",
                "desc": "수만 마리의 물개들이 해변을 가득 메운 장관을 볼 수 있어요.",
                "emoji": "🦭"
              }
            ],
            "foods": [
              {
                "name": "생선 튀김",
                "nameEn": "Fish and Chips",
                "desc": "바닷가 근처에서 갓 잡은 생선으로 만든 바삭한 튀김 요리예요.",
                "emoji": "🍟"
              },
              {
                "name": "굴 요리",
                "nameEn": "Oysters",
                "desc": "대서양의 차가운 바다에서 자란 신선하고 통통한 굴 요리예요.",
                "emoji": "🦪"
              }
            ]
          },
          {
            "name": "트위펠폰테인",
            "nameEn": "Twyfelfontein",
            "highlight": "산족 부시맨이 붉은 바위에 남긴 고대 암각화",
            "attractions": [
              {
                "name": "암각화 유적지",
                "nameEn": "Rock Engravings",
                "desc": "고대 산족이 바위에 새겨놓은 동물과 사람 모양의 암각화가 가득해요.",
                "emoji": "🗿"
              },
              {
                "name": "오르간 파이프",
                "nameEn": "Organ Pipes",
                "desc": "파이프 오르간처럼 수직으로 솟아 있는 독특한 현무암 기둥들이에요.",
                "emoji": "🎹"
              }
            ],
            "foods": [
              {
                "name": "옥수수 죽",
                "nameEn": "Pap",
                "desc": "옥수수 가루로 만든 나미비아의 주식으로 고기 요리와 잘 어울려요.",
                "emoji": "🌽"
              },
              {
                "name": "구운 고기",
                "nameEn": "Braai",
                "desc": "나미비아식 바비큐로 야외에서 고기를 구워 먹는 문화예요.",
                "emoji": "🔥"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "데드블레이 (죽은 늪)",
            "nameEn": "Deadvlei in Namib Desert",
            "desc": "새하얀 진흙 바닥 위에 900년 동안 마른 채 서 있는 검은 아카시아 나무와 붉은 모래언덕",
            "emoji": "🏜️"
          },
          {
            "name": "듄 45 (사구 45번)",
            "nameEn": "Dune 45",
            "desc": "일출 때 빛과 그림자가 칼로 자른 듯 아름다운 곡선을 이루는 170m 붉은 사막 언덕",
            "emoji": "🌅"
          }
        ],
        "foods": [
          {
            "name": "포이키코스",
            "nameEn": "Potjiekos",
            "desc": "다리가 셋 달린 무쇠 솥에 고기와 감자, 채소를 장작불에 뭉근하게 끓인 사파리 스튜",
            "emoji": "🍲"
          },
          {
            "name": "사파리 오릭스 스테이크",
            "nameEn": "Game Meat Steak",
            "desc": "나미비아의 상징 오릭스나 스프링복을 부드럽게 구워낸 기름기 적고 담백한 고기 요리",
            "emoji": "🥩"
          }
        ]
      }
    ]
  },
  {
    "id": "oceania",
    "name": "오세아니아",
    "nameEn": "Oceania",
    "emoji": "🦘",
    "description": "눈부신 남태평양 산호초와 대자연, 평화로운 섬들의 대륙",
    "countries": [
      {
        "id": "australia",
        "name": "호주",
        "nameEn": "Australia",
        "flag": "🇦🇺",
        "destinations": [
          {
            "name": "시드니",
            "nameEn": "Sydney",
            "highlight": "오페라 하우스와 하버 브릿지의 세계 3대 미항",
            "attractions": [
              {
                "name": "시드니 오페라 하우스",
                "nameEn": "Sydney Opera House",
                "desc": "시드니를 상징하는 독특한 모양의 세계적인 공연장입니다.",
                "emoji": "🎭"
              },
              {
                "name": "하버 브릿지",
                "nameEn": "Sydney Harbour Bridge",
                "desc": "시드니 항구를 가로지르는 거대한 철제 아치형 다리입니다.",
                "emoji": "🌉"
              }
            ],
            "foods": [
              {
                "name": "미트 파이",
                "nameEn": "Meat Pie",
                "desc": "바삭한 페이스트리 안에 고기와 소스가 가득 들어간 호주 국민 간식입니다.",
                "emoji": "🥧"
              },
              {
                "name": "피쉬 앤 칩스",
                "nameEn": "Fish and Chips",
                "desc": "신선한 생선 튀김과 감자튀김을 곁들인 시드니 해변의 대표 음식입니다.",
                "emoji": "🐟"
              }
            ]
          },
          {
            "name": "멜버른",
            "nameEn": "Melbourne",
            "highlight": "골목 카페 문화와 장엄한 그레이트 오션 로드",
            "attractions": [
              {
                "name": "플린더스 스트리트 역",
                "nameEn": "Flinders Street Station",
                "desc": "멜버른의 중심이자 노란색 외관이 아름다운 역사적인 기차역입니다.",
                "emoji": "🚉"
              },
              {
                "name": "호시어 레인",
                "nameEn": "Hosier Lane",
                "desc": "화려한 그래피티 아트로 가득 채워진 멜버른의 예술적인 골목입니다.",
                "emoji": "🎨"
              }
            ],
            "foods": [
              {
                "name": "플랫 화이트",
                "nameEn": "Flat White",
                "desc": "부드러운 우유 거품이 특징인 멜버른의 진한 커피입니다.",
                "emoji": "☕"
              },
              {
                "name": "파르미지아나",
                "nameEn": "Chicken Parmigiana",
                "desc": "닭가슴살 튀김 위에 토마토소스와 치즈를 얹어 구운 요리입니다.",
                "emoji": "🍗"
              }
            ]
          },
          {
            "name": "케언즈",
            "nameEn": "Cairns",
            "highlight": "우주에서도 보이는 산호초 그레이트 배리어 리프",
            "attractions": [
              {
                "name": "케언즈 에스플러네이드 라군",
                "nameEn": "Cairns Esplanade Lagoon",
                "desc": "바다 대신 수영을 즐길 수 있는 도심 속 대형 인공 수영장입니다.",
                "emoji": "🏊"
              },
              {
                "name": "쿠란다 열대우림",
                "nameEn": "Kuranda Rainforest",
                "desc": "케언즈 근교에서 만나는 울창한 열대우림과 케이블카 체험지입니다.",
                "emoji": "🌿"
              }
            ],
            "foods": [
              {
                "name": "바라문디",
                "nameEn": "Barramundi",
                "desc": "호주 북부에서 잡히는 담백하고 부드러운 흰살생선 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "캥거루 스테이크",
                "nameEn": "Kangaroo Steak",
                "desc": "호주를 대표하는 고기로 담백하고 독특한 풍미를 자랑합니다.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "골드코스트",
            "nameEn": "Gold Coast",
            "highlight": "서퍼들의 파라다이스와 신나는 테마파크",
            "attractions": [
              {
                "name": "서퍼스 파라다이스 비치",
                "nameEn": "Surfers Paradise Beach",
                "desc": "끝없이 펼쳐진 황금빛 모래사장과 파도가 유명한 해변입니다.",
                "emoji": "🏄"
              },
              {
                "name": "스카이포인트 전망대",
                "nameEn": "SkyPoint Observation Deck",
                "desc": "골드코스트의 해안선과 도시를 한눈에 내려다볼 수 있는 전망대입니다.",
                "emoji": "🏙️"
              }
            ],
            "foods": [
              {
                "name": "아보카도 토스트",
                "nameEn": "Avocado Toast",
                "desc": "신선한 아보카도를 듬뿍 올린 호주식 브런치 메뉴입니다.",
                "emoji": "🥑"
              },
              {
                "name": "새우 요리",
                "nameEn": "Grilled Prawns",
                "desc": "해안 도시답게 신선하고 큼직한 새우를 구워낸 요리입니다.",
                "emoji": "🦐"
              }
            ]
          },
          {
            "name": "울루루",
            "nameEn": "Uluru",
            "highlight": "호주 붉은 사막의 심장 지구의 배꼽 거대 단일암",
            "attractions": [
              {
                "name": "울루루-카타추타 국립공원",
                "nameEn": "Uluru-Kata Tjuta National Park",
                "desc": "거대한 붉은 바위 울루루를 직접 마주할 수 있는 성스러운 장소입니다.",
                "emoji": "🏜️"
              },
              {
                "name": "필드 오브 라이트",
                "nameEn": "Field of Light",
                "desc": "사막 위에 수만 개의 조명이 켜져 밤을 아름답게 수놓는 예술 작품입니다.",
                "emoji": "✨"
              }
            ],
            "foods": [
              {
                "name": "에뮤 고기",
                "nameEn": "Emu Meat",
                "desc": "호주 원주민들이 즐겨 먹던 독특한 식재료인 에뮤 고기 요리입니다.",
                "emoji": "🍗"
              },
              {
                "name": "와틀시드 디저트",
                "nameEn": "Wattle Seed Dessert",
                "desc": "호주 자생 식물인 와틀시드를 활용한 고소한 풍미의 디저트입니다.",
                "emoji": "🍮"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "시드니 오페라 하우스",
            "nameEn": "Sydney Opera House",
            "desc": "하얀 조개껍데기를 형상화한 유네스코 세계문화유산 건축물",
            "emoji": "🏛️"
          },
          {
            "name": "그레이트 배리어 리프",
            "nameEn": "Great Barrier Reef",
            "desc": "수천 종의 열대어와 산호가 가득한 세계 최대의 산호초 지대",
            "emoji": "🐠"
          }
        ],
        "foods": [
          {
            "name": "미트 파이",
            "nameEn": "Meat Pie with Gravy",
            "desc": "바삭한 페이스트리 안에 다진 소고기와 그레이비 소스가 가득 찬 호주의 소울푸드",
            "emoji": "🥧"
          },
          {
            "name": "파블로바",
            "nameEn": "Pavlova",
            "desc": "달걀흰자 머랭을 구워 겉은 바삭 속은 쫀득하며 딸기와 키위를 듬뿍 얹은 디저트",
            "emoji": "🍓"
          }
        ]
      },
      {
        "id": "new_zealand",
        "name": "뉴질랜드",
        "nameEn": "New Zealand",
        "flag": "🇳🇿",
        "destinations": [
          {
            "name": "퀸스타운",
            "nameEn": "Queenstown",
            "highlight": "번지점프와 제트보트, 와카티푸 호수의 레포츠 수도",
            "attractions": [
              {
                "name": "스카이라인 곤돌라",
                "nameEn": "Skyline Gondola",
                "desc": "퀸스타운의 전경과 와카티푸 호수를 한눈에 볼 수 있는 전망대입니다.",
                "emoji": "🚠"
              },
              {
                "name": "와카티푸 호수",
                "nameEn": "Lake Wakatipu",
                "desc": "퀸스타운을 감싸고 있는 아름답고 깊은 푸른 빛의 호수입니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "퍼그버거",
                "nameEn": "Fergburger",
                "desc": "퀸스타운에서 줄 서서 먹는 거대한 크기의 수제 버거입니다.",
                "emoji": "🍔"
              },
              {
                "name": "램 찹",
                "nameEn": "Lamb Chop",
                "desc": "뉴질랜드의 신선한 양고기를 구워낸 부드러운 스테이크입니다.",
                "emoji": "🍖"
              }
            ]
          },
          {
            "name": "오클랜드",
            "nameEn": "Auckland",
            "highlight": "항해의 도시 스카이타워와 와이헤케 섬",
            "attractions": [
              {
                "name": "스카이 타워",
                "nameEn": "Sky Tower",
                "desc": "오클랜드 시내 어디서나 보이는 도시의 상징적인 타워입니다.",
                "emoji": "🗼"
              },
              {
                "name": "마운트 이든",
                "nameEn": "Mount Eden",
                "desc": "오클랜드 시내를 360도로 조망할 수 있는 사화산 분화구입니다.",
                "emoji": "🌋"
              }
            ],
            "foods": [
              {
                "name": "피쉬 앤 칩스",
                "nameEn": "Fish and Chips",
                "desc": "뉴질랜드 바다에서 잡은 신선한 생선으로 만든 국민 간식입니다.",
                "emoji": "🐟"
              },
              {
                "name": "호키 포키 아이스크림",
                "nameEn": "Hokey Pokey Ice Cream",
                "desc": "바삭한 벌꿀 사탕 조각이 들어간 뉴질랜드 대표 아이스크림입니다.",
                "emoji": "🍦"
              }
            ]
          },
          {
            "name": "로토루아",
            "nameEn": "Rotorua",
            "highlight": "부글부글 끓는 유황 온천과 마오리 민속 마을",
            "attractions": [
              {
                "name": "테 푸이아",
                "nameEn": "Te Puia",
                "desc": "간헐천과 마오리 문화를 체험할 수 있는 로토루아의 명소입니다.",
                "emoji": "♨️"
              },
              {
                "name": "폴리네시안 스파",
                "nameEn": "Polynesian Spa",
                "desc": "호수를 바라보며 즐길 수 있는 천연 유황 온천입니다.",
                "emoji": "🧖"
              }
            ],
            "foods": [
              {
                "name": "항이",
                "nameEn": "Hangi",
                "desc": "땅을 파고 뜨거운 돌을 넣어 음식을 익히는 마오리 전통 요리입니다.",
                "emoji": "🥘"
              },
              {
                "name": "마누카 꿀",
                "nameEn": "Manuka Honey",
                "desc": "뉴질랜드에서만 나는 건강하고 달콤한 천연 꿀입니다.",
                "emoji": "🍯"
              }
            ]
          },
          {
            "name": "크라이스트처치",
            "nameEn": "Christchurch",
            "highlight": "에이번 강 펀팅 보트와 영국풍 정원 도시",
            "attractions": [
              {
                "name": "보타닉 가든",
                "nameEn": "Christchurch Botanic Gardens",
                "desc": "에이번 강변에 위치한 아름답고 평화로운 식물원입니다.",
                "emoji": "🌸"
              },
              {
                "name": "리버사이드 마켓",
                "nameEn": "Riverside Market",
                "desc": "다양한 먹거리와 현지 식재료를 파는 활기찬 실내 시장입니다.",
                "emoji": "🍎"
              }
            ],
            "foods": [
              {
                "name": "파블로바",
                "nameEn": "Pavlova",
                "desc": "머랭을 구워 과일을 올린 뉴질랜드의 전통 디저트입니다.",
                "emoji": "🍰"
              },
              {
                "name": "치즈 플래터",
                "nameEn": "Cheese Platter",
                "desc": "뉴질랜드의 신선한 유제품으로 만든 다양한 치즈 모음입니다.",
                "emoji": "🧀"
              }
            ]
          },
          {
            "name": "밀포드 사운드",
            "nameEn": "Milford Sound",
            "highlight": "피오르드 빙하 계곡과 바다로 쏟아지는 폭포",
            "attractions": [
              {
                "name": "미트레 피크",
                "nameEn": "Mitre Peak",
                "desc": "밀포드 사운드에서 가장 유명한 뾰족한 모양의 산봉우리입니다.",
                "emoji": "🏔️"
              },
              {
                "name": "스털링 폭포",
                "nameEn": "Stirling Falls",
                "desc": "빙하가 녹아 바다로 직접 떨어지는 웅장한 폭포입니다.",
                "emoji": "💦"
              }
            ],
            "foods": [
              {
                "name": "그린립 머슬",
                "nameEn": "Green-lipped Mussel",
                "desc": "뉴질랜드 청정 바다에서 나는 초록입홍합 요리입니다.",
                "emoji": "🦪"
              },
              {
                "name": "연어 요리",
                "nameEn": "Salmon",
                "desc": "빙하수로 키운 신선한 뉴질랜드산 연어 회나 구이입니다.",
                "emoji": "🍣"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "호비튼 무비 세트",
            "nameEn": "Hobbiton Movie Set",
            "desc": "반지의 제왕 속 아기자기한 호빗들의 둥근 문 집과 녹색 언덕",
            "emoji": "🏡"
          },
          {
            "name": "와이토모 반딧불이 동굴",
            "nameEn": "Waitomo Glowworm Caves",
            "desc": "동굴 천장에 푸른 별빛처럼 빛나는 수만 마리의 발광 반딧불이",
            "emoji": "✨"
          }
        ],
        "foods": [
          {
            "name": "피시 앤 칩스 & 그린 홍합",
            "nameEn": "Green-lipped Mussels",
            "desc": "초록색 껍질이 특징인 뉴질랜드 청정 바다의 크고 통통한 홍합 찜 요리",
            "emoji": "🦪"
          },
          {
            "name": "호키포키 아이스크림",
            "nameEn": "Hokey Pokey Ice Cream",
            "desc": "부드러운 바닐라 아이스크림에 달콤한 캐러멜 토피 조각이 톡톡 씹히는 국민 간식",
            "emoji": "🍦"
          }
        ]
      },
      {
        "id": "fiji",
        "name": "피지",
        "nameEn": "Fiji",
        "flag": "🇫🇯",
        "destinations": [
          {
            "name": "난디",
            "nameEn": "Nadi",
            "highlight": "스리 시바 수브라마니야 힌두 사원과 피지 관문",
            "attractions": [
              {
                "name": "스리 시바 수브라마니야 사원",
                "nameEn": "Sri Siva Subramaniya Temple",
                "desc": "남반구에서 가장 큰 화려한 힌두교 사원입니다.",
                "emoji": "🕉️"
              },
              {
                "name": "가든 오브 더 잠자는 거인",
                "nameEn": "Garden of the Sleeping Giant",
                "desc": "수천 종의 난초가 가득한 아름다운 정원입니다.",
                "emoji": "🌺"
              }
            ],
            "foods": [
              {
                "name": "코코다",
                "nameEn": "Kokoda",
                "desc": "생선을 코코넛 밀크와 라임에 절여 만든 피지식 회무침입니다.",
                "emoji": "🥗"
              },
              {
                "name": "카바",
                "nameEn": "Kava",
                "desc": "피지 전통 의식에서 마시는 뿌리 식물 음료입니다.",
                "emoji": "🥥"
              }
            ]
          },
          {
            "name": "마마누카 제도",
            "nameEn": "Mamanuca Islands",
            "highlight": "영화 캐스트어웨이 촬영지와 청정 환초",
            "attractions": [
              {
                "name": "몬드리키 섬",
                "nameEn": "Monuriki Island",
                "desc": "영화 캐스트어웨이의 촬영지로 유명한 무인도입니다.",
                "emoji": "🏝️"
              },
              {
                "name": "클라우드 9",
                "nameEn": "Cloud 9",
                "desc": "바다 위에 떠 있는 독특한 수상 바입니다.",
                "emoji": "🍹"
              }
            ],
            "foods": [
              {
                "name": "로보",
                "nameEn": "Lovo",
                "desc": "땅속에 음식을 묻어 익히는 피지의 전통 잔치 음식입니다.",
                "emoji": "🍖"
              },
              {
                "name": "트로피컬 과일",
                "nameEn": "Tropical Fruits",
                "desc": "섬에서 갓 딴 신선한 파파야와 망고입니다.",
                "emoji": "🥭"
              }
            ]
          },
          {
            "name": "수바",
            "nameEn": "Suva",
            "highlight": "남태평양 최대의 수도와 피지 박물관",
            "attractions": [
              {
                "name": "피지 박물관",
                "nameEn": "Fiji Museum",
                "desc": "피지의 역사와 문화를 한눈에 볼 수 있는 박물관입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "서스턴 가든",
                "nameEn": "Thurston Gardens",
                "desc": "수바 시내에 위치한 평화로운 식물원입니다.",
                "emoji": "🌳"
              }
            ],
            "foods": [
              {
                "name": "카사바 칩",
                "nameEn": "Cassava Chips",
                "desc": "피지에서 흔히 먹는 고구마와 비슷한 카사바를 튀긴 간식입니다.",
                "emoji": "🍟"
              },
              {
                "name": "커리",
                "nameEn": "Curry",
                "desc": "인도 문화의 영향을 받은 피지식 매콤한 커리 요리입니다.",
                "emoji": "🍛"
              }
            ]
          },
          {
            "name": "야사와 제도",
            "nameEn": "Yasawa Islands",
            "highlight": "블루 라군 동굴과 만타가오리 스노클링",
            "attractions": [
              {
                "name": "블루 라군 동굴",
                "nameEn": "Blue Lagoon Caves",
                "desc": "신비로운 푸른 빛의 바닷물 속에서 수영할 수 있는 동굴입니다.",
                "emoji": "🤿"
              },
              {
                "name": "만타가오리 스노클링 포인트",
                "nameEn": "Manta Ray Snorkeling",
                "desc": "거대한 만타가오리를 가까이서 볼 수 있는 바다입니다.",
                "emoji": "🐟"
              }
            ],
            "foods": [
              {
                "name": "신선한 랍스터",
                "nameEn": "Fresh Lobster",
                "desc": "야사와 제도 바다에서 바로 잡은 신선한 랍스터 요리입니다.",
                "emoji": "🦞"
              },
              {
                "name": "타로",
                "nameEn": "Taro",
                "desc": "피지 사람들의 주식인 고소한 뿌리 채소입니다.",
                "emoji": "🍠"
              }
            ]
          },
          {
            "name": "타베우니",
            "nameEn": "Taveuni",
            "highlight": "정원의 섬이라 불리는 폭포와 날짜변경선",
            "attractions": [
              {
                "name": "부마 폭포",
                "nameEn": "Bouma Falls",
                "desc": "정글 속에 숨겨진 아름다운 3단 폭포입니다.",
                "emoji": "🌊"
              },
              {
                "name": "날짜변경선 표지판",
                "nameEn": "International Date Line Marker",
                "desc": "날짜가 바뀌는 경계선에 서 볼 수 있는 특별한 장소입니다.",
                "emoji": "🕒"
              }
            ],
            "foods": [
              {
                "name": "코코넛 크림 생선찜",
                "nameEn": "Fish in Coconut Cream",
                "desc": "코코넛 밀크의 고소함이 배어든 생선 요리입니다.",
                "emoji": "🍲"
              },
              {
                "name": "빵나무 열매",
                "nameEn": "Breadfruit",
                "desc": "구우면 빵 맛이 나는 피지의 독특한 열대 과일입니다.",
                "emoji": "🍞"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "클라우드 9 플로팅 바",
            "nameEn": "Cloud 9 Floating Platform",
            "desc": "에메랄드빛 바다 한가운데 둥둥 떠서 화덕 피자와 다이빙을 즐기는 수상 라운지",
            "emoji": "🍕"
          },
          {
            "name": "마마누카 블루 라군",
            "nameEn": "Mamanuca Blue Lagoon",
            "desc": "열대어들과 함께 산호초 바다를 자유롭게 유영하는 천혜의 라군",
            "emoji": "🤿"
          }
        ],
        "foods": [
          {
            "name": "코코다",
            "nameEn": "Kokoda",
            "desc": "신선한 흰살생선을 라임즙과 코코넛 밀크, 고추, 양파로 버무려 코코넛 그릇에 담아내는 피지 요리",
            "emoji": "🥥"
          },
          {
            "name": "로보",
            "nameEn": "Lovo Feast",
            "desc": "땅을 파고 달군 돌 위에 고기와 카사바를 바나나 잎으로 싸서 쪄내는 피지 전통 훈제 요리",
            "emoji": "🍖"
          }
        ]
      },
      {
        "id": "guam",
        "name": "괌",
        "nameEn": "Guam",
        "flag": "🇬🇺",
        "destinations": [
          {
            "name": "투몬 베이",
            "nameEn": "Tumon Bay",
            "highlight": "에메랄드 바다와 호텔 리조트 거리가 모인 중심지",
            "attractions": [
              {
                "name": "투몬 비치",
                "nameEn": "Tumon Beach",
                "desc": "에메랄드빛 바다와 고운 모래가 펼쳐진 괌의 대표 해변입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "언더워터 월드",
                "nameEn": "Underwater World",
                "desc": "투몬 중심가에 있는 긴 해저 터널 수족관입니다.",
                "emoji": "🐠"
              }
            ],
            "foods": [
              {
                "name": "차모로 바비큐",
                "nameEn": "Chamorro BBQ",
                "desc": "특제 소스에 재워 구운 괌 전통 바비큐 요리입니다.",
                "emoji": "🍖"
              },
              {
                "name": "레드 라이스",
                "nameEn": "Red Rice",
                "desc": "아치오테 씨앗으로 붉은색을 낸 괌의 전통 밥입니다.",
                "emoji": "🍚"
              }
            ]
          },
          {
            "name": "아가냐 (하갓냐)",
            "nameEn": "Hagatna",
            "highlight": "스페인 광장과 유서 깊은 대성당",
            "attractions": [
              {
                "name": "스페인 광장",
                "nameEn": "Plaza de Espana",
                "desc": "괌의 스페인 통치 시절 역사를 간직한 광장입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "아가냐 대성당",
                "nameEn": "Dulce Nombre de Maria Cathedral",
                "desc": "하갓냐 중심에 위치한 아름다운 성당입니다.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "켈라구엔",
                "nameEn": "Kelaguen",
                "desc": "닭고기나 해산물을 레몬즙과 고추로 버무린 새콤한 요리입니다.",
                "emoji": "🍋"
              },
              {
                "name": "엠파나다",
                "nameEn": "Empanada",
                "desc": "고기와 채소를 넣어 튀긴 괌식 만두입니다.",
                "emoji": "🥟"
              }
            ]
          },
          {
            "name": "우마탁",
            "nameEn": "Umatac",
            "highlight": "마젤란이 처음 상륙한 평화로운 남부 해안 마을",
            "attractions": [
              {
                "name": "솔레다드 요새",
                "nameEn": "Fort Nuestra Senora de la Soledad",
                "desc": "우마탁 마을과 바다를 내려다볼 수 있는 옛 요새입니다.",
                "emoji": "🏰"
              },
              {
                "name": "마젤란 기념비",
                "nameEn": "Magellan Monument",
                "desc": "마젤란이 괌에 처음 상륙한 것을 기념하는 비석입니다.",
                "emoji": "⚓"
              }
            ],
            "foods": [
              {
                "name": "코코넛 캔디",
                "nameEn": "Coconut Candy",
                "desc": "코코넛을 졸여 만든 달콤한 전통 간식입니다.",
                "emoji": "🍬"
              },
              {
                "name": "바나나 튀김",
                "nameEn": "Fried Banana",
                "desc": "현지 바나나를 튀겨 만든 달콤한 디저트입니다.",
                "emoji": "🍌"
              }
            ]
          },
          {
            "name": "이나라한",
            "nameEn": "Inarajan",
            "highlight": "파도가 잔잔한 천연 바닷물 수영장 풀",
            "attractions": [
              {
                "name": "이나라한 자연 풀장",
                "nameEn": "Inarajan Natural Pool",
                "desc": "파도가 막혀 잔잔한 천연 바닷물 수영장입니다.",
                "emoji": "🏊"
              },
              {
                "name": "게프 파고 문화 마을",
                "nameEn": "Gef Pa'go Cultural Village",
                "desc": "차모로 전통 생활 방식을 체험할 수 있는 곳입니다.",
                "emoji": "🛖"
              }
            ],
            "foods": [
              {
                "name": "포키",
                "nameEn": "Poke",
                "desc": "신선한 참치를 양념에 버무린 괌에서 인기 있는 요리입니다.",
                "emoji": "🍣"
              },
              {
                "name": "타로 칩",
                "nameEn": "Taro Chips",
                "desc": "타로를 얇게 썰어 튀긴 고소한 간식입니다.",
                "emoji": "🥔"
              }
            ]
          },
          {
            "name": "리티디안 포인트",
            "nameEn": "Ritidian Point",
            "highlight": "야생동물 보호구역 안의 비밀스러운 청정 해변",
            "attractions": [
              {
                "name": "리티디안 비치",
                "nameEn": "Ritidian Beach",
                "desc": "괌에서 가장 깨끗하고 아름다운 자연 그대로의 해변입니다.",
                "emoji": "🌊"
              },
              {
                "name": "야생동물 보호구역",
                "nameEn": "Wildlife Refuge",
                "desc": "희귀 동식물을 보호하는 청정 자연 구역입니다.",
                "emoji": "🐢"
              }
            ],
            "foods": [
              {
                "name": "코코넛 워터",
                "nameEn": "Coconut Water",
                "desc": "해변에서 바로 마시는 시원하고 달콤한 코코넛 음료입니다.",
                "emoji": "🥥"
              },
              {
                "name": "스팸 무스비",
                "nameEn": "Spam Musubi",
                "desc": "괌 사람들이 즐겨 먹는 스팸을 올린 주먹밥입니다.",
                "emoji": "🍙"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "사랑의 절벽 (투 러버스 포인트)",
            "nameEn": "Two Lovers Point",
            "desc": "투몬만이 한눈에 내려다보이는 해발 112m 절벽과 사랑의 자물쇠",
            "emoji": "❤️"
          },
          {
            "name": "이나라한 천연 자연 풀장",
            "nameEn": "Inarajan Natural Pool",
            "desc": "화산암 바위가 방파제처럼 파도를 막아 만든 잔잔하고 맑은 천연 수영장",
            "emoji": "🏊"
          }
        ],
        "foods": [
          {
            "name": "레드 라이스",
            "nameEn": "Red Rice (Hineksa Aga'ga)",
            "desc": "아치오테 씨앗으로 우려낸 붉은빛과 고소한 풍미의 차모로 전통 밥",
            "emoji": "🍚"
          },
          {
            "name": "차모로 바비큐 립",
            "nameEn": "Chamorro BBQ Ribs",
            "desc": "특제 피나데니 간장 소스에 재워 숯불 향 가득 구워낸 부드러운 돼지갈비",
            "emoji": "🍖"
          }
        ]
      },
      {
        "id": "saipan",
        "name": "사이판",
        "nameEn": "Saipan",
        "flag": "🇲🇵",
        "destinations": [
          {
            "name": "마나가하 섬",
            "nameEn": "Managaha Island",
            "highlight": "배로 15분 만에 만나는 산호와 열대어의 천국",
            "attractions": [
              {
                "name": "마나가하 해변",
                "nameEn": "Managaha Beach",
                "desc": "투명한 바다와 하얀 모래가 환상적인 섬의 해변입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "스노클링 포인트",
                "nameEn": "Snorkeling Point",
                "desc": "수많은 열대어를 바로 눈앞에서 볼 수 있는 바다입니다.",
                "emoji": "🐠"
              }
            ],
            "foods": [
              {
                "name": "코코넛 사시미",
                "nameEn": "Coconut Sashimi",
                "desc": "어린 코코넛 속살을 간장에 찍어 먹는 별미입니다.",
                "emoji": "🥥"
              },
              {
                "name": "트로피컬 주스",
                "nameEn": "Tropical Juice",
                "desc": "섬에서 마시는 시원한 열대 과일 주스입니다.",
                "emoji": "🍹"
              }
            ]
          },
          {
            "name": "가라판",
            "nameEn": "Garapan",
            "highlight": "쇼핑몰과 다양한 레스토랑이 있는 번화가",
            "attractions": [
              {
                "name": "마이크로 비치",
                "nameEn": "Micro Beach",
                "desc": "가라판 시내 바로 앞에 위치한 아름다운 해변입니다.",
                "emoji": "🌊"
              },
              {
                "name": "아메리칸 메모리얼 파크",
                "nameEn": "American Memorial Park",
                "desc": "역사를 기리는 평화로운 공원입니다.",
                "emoji": "🌳"
              }
            ],
            "foods": [
              {
                "name": "참치 포키",
                "nameEn": "Tuna Poke",
                "desc": "신선한 참치를 양념에 버무린 사이판의 인기 메뉴입니다.",
                "emoji": "🍣"
              },
              {
                "name": "스테이크",
                "nameEn": "Steak",
                "desc": "가라판의 레스토랑에서 즐기는 푸짐한 스테이크입니다.",
                "emoji": "🥩"
              }
            ]
          },
          {
            "name": "북부 투어 (만세절벽)",
            "nameEn": "Banzai Cliff & Suicide Cliff",
            "highlight": "거친 태평양 파도가 부서지는 웅장한 해안 절벽",
            "attractions": [
              {
                "name": "만세절벽",
                "nameEn": "Banzai Cliff",
                "desc": "푸른 태평양 바다가 내려다보이는 웅장한 절벽입니다.",
                "emoji": "⛰️"
              },
              {
                "name": "자살절벽",
                "nameEn": "Suicide Cliff",
                "desc": "역사적인 아픔을 간직한 높은 절벽 전망대입니다.",
                "emoji": "🕊️"
              }
            ],
            "foods": [
              {
                "name": "차모로 엠파나다",
                "nameEn": "Chamorro Empanada",
                "desc": "바삭한 튀김 속에 고기와 채소가 든 전통 간식입니다.",
                "emoji": "🥟"
              },
              {
                "name": "바비큐 플래터",
                "nameEn": "BBQ Platter",
                "desc": "다양한 고기를 한 번에 즐길 수 있는 바비큐 요리입니다.",
                "emoji": "🍖"
              }
            ]
          },
          {
            "name": "그로토",
            "nameEn": "The Grotto",
            "highlight": "세계 3대 다이빙 포인트 신비로운 푸른 해저 동굴",
            "attractions": [
              {
                "name": "그로토 동굴",
                "nameEn": "The Grotto",
                "desc": "신비로운 푸른 빛이 감도는 세계적인 다이빙 명소입니다.",
                "emoji": "🤿"
              },
              {
                "name": "그로토 전망대",
                "nameEn": "Grotto Lookout",
                "desc": "동굴로 내려가기 전 바다를 조망할 수 있는 곳입니다.",
                "emoji": "👀"
              }
            ],
            "foods": [
              {
                "name": "해산물 볶음밥",
                "nameEn": "Seafood Fried Rice",
                "desc": "신선한 해산물을 듬뿍 넣은 든든한 볶음밥입니다.",
                "emoji": "🍤"
              },
              {
                "name": "망고 쉐이크",
                "nameEn": "Mango Shake",
                "desc": "다이빙 후 마시는 달콤하고 시원한 망고 음료입니다.",
                "emoji": "🥭"
              }
            ]
          },
          {
            "name": "버드 아일랜드",
            "nameEn": "Bird Island",
            "highlight": "달빛에 하얗게 반짝이는 바다새들의 서식지",
            "attractions": [
              {
                "name": "버드 아일랜드 전망대",
                "nameEn": "Bird Island Lookout",
                "desc": "새들이 서식하는 섬을 한눈에 볼 수 있는 전망대입니다.",
                "emoji": "🐦"
              },
              {
                "name": "해안 산책로",
                "nameEn": "Coastal Trail",
                "desc": "아름다운 해안선을 따라 걷는 산책 코스입니다.",
                "emoji": "🚶"
              }
            ],
            "foods": [
              {
                "name": "파파야 샐러드",
                "nameEn": "Papaya Salad",
                "desc": "상큼하고 아삭한 식감의 파파야 요리입니다.",
                "emoji": "🥗"
              },
              {
                "name": "구운 생선",
                "nameEn": "Grilled Fish",
                "desc": "현지에서 잡은 생선을 담백하게 구워낸 요리입니다.",
                "emoji": "🐟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "마나가하 섬 스노클링",
            "nameEn": "Managaha Island Marine Sports",
            "desc": "수족관 속에 들어간 것처럼 투명한 물에서 바다거북과 알록달록 물고기를 만나는 섬",
            "emoji": "🏝️"
          },
          {
            "name": "그로토 해저 동굴",
            "nameEn": "The Grotto Cave Diving",
            "desc": "바위 틈으로 스며드는 햇빛이 만들어내는 눈부신 코발트블루 빛의 천연 다이빙 풀",
            "emoji": "🤿"
          }
        ],
        "foods": [
          {
            "name": "켈라구엔",
            "nameEn": "Kelaguen",
            "desc": "닭고기나 새우에 레몬즙, 다진 고추, 파, 코코넛을 버무려 또띠아에 싸 먹는 전통 요리",
            "emoji": "🥗"
          },
          {
            "name": "아피기기",
            "nameEn": "Apigigi",
            "desc": "갈아낸 카사바 전분과 어린 코코넛 살을 바나나 잎에 싸서 구운 달콤쫄깃한 떡",
            "emoji": "🍌"
          }
        ]
      },
      {
        "id": "palau",
        "name": "팔라우",
        "nameEn": "Palau",
        "flag": "🇵🇼",
        "destinations": [
          {
            "name": "코롤",
            "nameEn": "Koror",
            "highlight": "팔라우의 활기찬 중심 도시와 해양 박물관",
            "attractions": [
              {
                "name": "벨라우 국립 박물관",
                "nameEn": "Belau National Museum",
                "desc": "팔라우의 역사와 문화를 한눈에 볼 수 있는 가장 오래된 박물관입니다.",
                "emoji": "🏛️"
              },
              {
                "name": "에피슨 박물관",
                "nameEn": "Etpison Museum",
                "desc": "팔라우의 전통 공예품과 해양 생태계를 전시하는 교육적인 장소입니다.",
                "emoji": "🐚"
              }
            ],
            "foods": [
              {
                "name": "타로",
                "nameEn": "Taro",
                "desc": "팔라우 식단의 주식으로 쪄서 먹거나 퓨레로 즐기는 뿌리 채소입니다.",
                "emoji": "🍠"
              },
              {
                "name": "코코넛 크랩",
                "nameEn": "Coconut Crab",
                "desc": "코코넛을 먹고 자라 살이 통통하고 고소한 팔라우 별미입니다.",
                "emoji": "🦀"
              }
            ]
          },
          {
            "name": "락 아일랜드",
            "nameEn": "Rock Islands",
            "highlight": "버섯 모양의 445개 에메랄드빛 석회암 석호 섬들",
            "attractions": [
              {
                "name": "롱 비치",
                "nameEn": "Long Beach",
                "desc": "썰물 때 바다 한가운데 길게 드러나는 환상적인 모래사장입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "독일 수로",
                "nameEn": "German Channel",
                "desc": "과거 독일이 인공적으로 만든 수로로 만타가오리를 관찰하기 좋습니다.",
                "emoji": "🌊"
              }
            ],
            "foods": [
              {
                "name": "생선회",
                "nameEn": "Sashimi",
                "desc": "갓 잡은 신선한 참치를 현지 스타일로 가볍게 즐기는 요리입니다.",
                "emoji": "🐟"
              },
              {
                "name": "포케",
                "nameEn": "Poke",
                "desc": "신선한 해산물을 채소와 함께 버무려 먹는 건강한 현지식입니다.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "젤리피쉬 레이크",
            "nameEn": "Jellyfish Lake",
            "highlight": "독이 없는 수백만 마리 황금 해파리 호수",
            "attractions": [
              {
                "name": "젤리피쉬 레이크",
                "nameEn": "Jellyfish Lake",
                "desc": "독이 없는 수백만 마리의 황금 해파리와 함께 수영할 수 있는 호수입니다.",
                "emoji": "🪼"
              },
              {
                "name": "에일 마르크",
                "nameEn": "Eil Malk",
                "desc": "젤리피쉬 레이크가 위치한 섬으로 원시 자연의 아름다움을 간직하고 있습니다.",
                "emoji": "🏝️"
              }
            ],
            "foods": [
              {
                "name": "카사바",
                "nameEn": "Cassava",
                "desc": "팔라우에서 흔히 재배되는 구황작물로 든든한 간식으로 즐깁니다.",
                "emoji": "🥔"
              },
              {
                "name": "과일 샐러드",
                "nameEn": "Fruit Salad",
                "desc": "열대 기후에서 자란 신선한 파파야와 망고를 섞은 디저트입니다.",
                "emoji": "🥭"
              }
            ]
          },
          {
            "name": "밀키웨이",
            "nameEn": "Milky Way",
            "highlight": "천연 산호 백토 머드팩을 즐기는 에메랄드 바다",
            "attractions": [
              {
                "name": "밀키웨이",
                "nameEn": "Milky Way",
                "desc": "우유 빛깔의 석회암 진흙이 가득해 피부 미용에 좋은 천연 스파 장소입니다.",
                "emoji": "🧴"
              },
              {
                "name": "락 아일랜드 라군",
                "nameEn": "Rock Islands Lagoon",
                "desc": "유네스코 세계유산으로 지정된 아름다운 석회암 섬들의 바다입니다.",
                "emoji": "🛶"
              }
            ],
            "foods": [
              {
                "name": "바나나 튀김",
                "nameEn": "Banana Fritters",
                "desc": "현지 바나나를 튀겨 달콤하고 바삭하게 즐기는 인기 간식입니다.",
                "emoji": "🍌"
              },
              {
                "name": "코코넛 주스",
                "nameEn": "Coconut Juice",
                "desc": "현장에서 바로 따서 마시는 시원하고 달콤한 천연 음료입니다.",
                "emoji": "🥥"
              }
            ]
          },
          {
            "name": "펠렐리우 섬",
            "nameEn": "Peleliu Island",
            "highlight": "역사적 유적과 원시 자연의 섬",
            "attractions": [
              {
                "name": "펠렐리우 전쟁 박물관",
                "nameEn": "Peleliu War Museum",
                "desc": "제2차 세계대전의 아픈 역사를 기록하고 전시하는 박물관입니다.",
                "emoji": "🎖️"
              },
              {
                "name": "오렌지 비치",
                "nameEn": "Orange Beach",
                "desc": "역사적인 상륙 작전지이자 현재는 평화로운 휴양지인 해변입니다.",
                "emoji": "🌅"
              }
            ],
            "foods": [
              {
                "name": "구운 생선",
                "nameEn": "Grilled Fish",
                "desc": "바다에서 갓 잡은 생선을 숯불에 구워 담백하게 즐기는 요리입니다.",
                "emoji": "🔥"
              },
              {
                "name": "타로 잎 요리",
                "nameEn": "Taro Leaf Dish",
                "desc": "타로 잎을 코코넛 밀크와 함께 끓여 부드럽게 만든 전통 음식입니다.",
                "emoji": "🍲"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "무독성 해파리 호수 (젤리피쉬 레이크)",
            "nameEn": "Jellyfish Lake",
            "desc": "천적이 없어 독침이 퇴화한 황금 해파리들과 함께 수영하는 비현실적인 호수",
            "emoji": "🪼"
          },
          {
            "name": "밀키웨이 산호 머드팩",
            "nameEn": "Milky Way Coral Mud",
            "desc": "바다 밑바닥의 하얀 산호 머드를 몸에 바르는 천연 에스테틱 바다 계곡",
            "emoji": "🧖"
          }
        ],
        "foods": [
          {
            "name": "팔라우식 해산물 찜",
            "nameEn": "Palauan Seafood Feast",
            "desc": "맹그로브 크랩과 신선한 생선을 마늘과 코코넛 밀크로 담백하게 조리한 요리",
            "emoji": "🦀"
          },
          {
            "name": "타로 칩스",
            "nameEn": "Taro Chips",
            "desc": "영양 많은 타로 토란을 얇게 썰어 바삭하게 튀긴 고소한 스낵",
            "emoji": "🍠"
          }
        ]
      },
      {
        "id": "tahiti",
        "name": "타히티 (프랑스령 폴리네시아)",
        "nameEn": "Tahiti",
        "flag": "🇵🇫",
        "destinations": [
          {
            "name": "보라보라",
            "nameEn": "Bora Bora",
            "highlight": "오테마누 산과 수상 방갈로가 있는 지상 최고의 낙원",
            "attractions": [
              {
                "name": "마티라 해변",
                "nameEn": "Matira Beach",
                "desc": "보라보라에서 가장 아름다운 백사장으로 일몰이 특히 유명합니다.",
                "emoji": "🌅"
              },
              {
                "name": "오테마누 산",
                "nameEn": "Mount Otemanu",
                "desc": "섬의 중심을 지키는 웅장한 화산 봉우리로 사진 촬영 명소입니다.",
                "emoji": "⛰️"
              }
            ],
            "foods": [
              {
                "name": "포아송 크뤼",
                "nameEn": "Poisson Cru",
                "desc": "신선한 생선을 코코넛 밀크와 라임에 절여 만든 타히티 대표 요리입니다.",
                "emoji": "🥣"
              },
              {
                "name": "바닐라 아이스크림",
                "nameEn": "Vanilla Ice Cream",
                "desc": "타히티산 최고급 바닐라 빈을 사용하여 향이 매우 진한 디저트입니다.",
                "emoji": "🍦"
              }
            ]
          },
          {
            "name": "파페에테",
            "nameEn": "Papeete",
            "highlight": "타히티 본섬의 룰롯 야시장과 흑진주 박물관",
            "attractions": [
              {
                "name": "파페에테 시장",
                "nameEn": "Papeete Market",
                "desc": "타히티의 활기찬 일상을 엿볼 수 있는 전통 재래시장입니다.",
                "emoji": "🛍️"
              },
              {
                "name": "흑진주 박물관",
                "nameEn": "Robert Wan Pearl Museum",
                "desc": "타히티의 보물인 흑진주의 역사와 가치를 배우는 박물관입니다.",
                "emoji": "💎"
              }
            ],
            "foods": [
              {
                "name": "룰롯 음식",
                "nameEn": "Roulotte Food",
                "desc": "야시장에서 파는 다양한 길거리 음식으로 스테이크와 볶음면이 인기입니다.",
                "emoji": "🍱"
              },
              {
                "name": "타히티식 샐러드",
                "nameEn": "Tahitian Salad",
                "desc": "신선한 채소와 해산물을 곁들인 상큼한 현지식 샐러드입니다.",
                "emoji": "🥗"
              }
            ]
          },
          {
            "name": "모오레아",
            "nameEn": "Moorea",
            "highlight": "파인애플 농장과 가오리 먹이 주기 체험",
            "attractions": [
              {
                "name": "벨베데레 전망대",
                "nameEn": "Belvedere Lookout",
                "desc": "모오레아의 두 만과 산을 한눈에 조망할 수 있는 최고의 전망대입니다.",
                "emoji": "🔭"
              },
              {
                "name": "티키 빌리지",
                "nameEn": "Tiki Village",
                "desc": "폴리네시아 전통 문화를 체험하고 공연을 관람할 수 있는 곳입니다.",
                "emoji": "🎭"
              }
            ],
            "foods": [
              {
                "name": "파인애플 주스",
                "nameEn": "Pineapple Juice",
                "desc": "모오레아의 비옥한 토양에서 자란 달콤한 파인애플로 만든 주스입니다.",
                "emoji": "🍍"
              },
              {
                "name": "브레드프루트",
                "nameEn": "Breadfruit",
                "desc": "구우면 빵과 비슷한 맛이 나는 폴리네시아의 전통 주식입니다.",
                "emoji": "🍞"
              }
            ]
          },
          {
            "name": "랑기로아",
            "nameEn": "Rangiroa",
            "highlight": "남태평양 최대의 거대한 환초 라군",
            "attractions": [
              {
                "name": "팁타 패스",
                "nameEn": "Tiputa Pass",
                "desc": "돌고래를 관찰하고 스쿠버 다이빙을 즐기기에 최적인 해협입니다.",
                "emoji": "🐬"
              },
              {
                "name": "블루 라군",
                "nameEn": "Blue Lagoon",
                "desc": "랑기로아의 투명한 바다 속 작은 섬들로 이루어진 천국 같은 곳입니다.",
                "emoji": "🏝️"
              }
            ],
            "foods": [
              {
                "name": "랑기로아 와인",
                "nameEn": "Rangiroa Wine",
                "desc": "산호초 섬에서 재배한 포도로 만든 독특한 열대 와인입니다.",
                "emoji": "🍷"
              },
              {
                "name": "구운 랍스터",
                "nameEn": "Grilled Lobster",
                "desc": "랑기로아의 맑은 바다에서 잡은 신선한 랍스터 요리입니다.",
                "emoji": "🦞"
              }
            ]
          },
          {
            "name": "타하 섬",
            "nameEn": "Taha'a",
            "highlight": "달콤한 바닐라 향이 섬 전체에 감도는 바닐라 아일랜드",
            "attractions": [
              {
                "name": "바닐라 농장",
                "nameEn": "Vanilla Plantation",
                "desc": "세계 최고 품질의 바닐라가 어떻게 재배되는지 볼 수 있는 농장입니다.",
                "emoji": "🌿"
              },
              {
                "name": "진주 농장",
                "nameEn": "Pearl Farm",
                "desc": "진주가 양식되는 과정을 직접 보고 구매할 수 있는 체험장입니다.",
                "emoji": "🦪"
              }
            ],
            "foods": [
              {
                "name": "바닐라 치킨",
                "nameEn": "Vanilla Chicken",
                "desc": "바닐라 향을 입혀 풍미가 독특하고 부드러운 닭고기 요리입니다.",
                "emoji": "🍗"
              },
              {
                "name": "코코넛 빵",
                "nameEn": "Coconut Bread",
                "desc": "코코넛 밀크를 넣어 구운 고소하고 달콤한 현지 빵입니다.",
                "emoji": "🥯"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "보라보라 오테마누 산 수상 방갈로",
            "nameEn": "Bora Bora Mount Otemanu",
            "desc": "유리 바닥 아래로 물고기가 헤엄치는 청록빛 라군 위의 로맨틱 방갈로",
            "emoji": "🛖"
          },
          {
            "name": "모오레아 상어와 가오리 사파리",
            "nameEn": "Shark & Stingray Snorkeling",
            "desc": "허리 깊이의 맑은 바다에서 온순한 흑기흉상어와 가오리를 직접 만나는 체험",
            "emoji": "🦈"
          }
        ],
        "foods": [
          {
            "name": "푸아송 크뤼",
            "nameEn": "Poisson Cru",
            "desc": "신선한 날 참치를 라임즙에 재우고 신선한 코코넛 밀크를 부어 먹는 타히티 전통 참치 샐러드",
            "emoji": "🍣"
          },
          {
            "name": "타히티 바닐라 크림 타르트",
            "nameEn": "Tahitian Vanilla Tart",
            "desc": "전 세계 셰프들이 극찬하는 최고급 타히티산 바닐라 빈으로 만든 달콤한 디저트",
            "emoji": "🥧"
          }
        ]
      },
      {
        "id": "samoa",
        "name": "사모아",
        "nameEn": "Samoa",
        "flag": "🇼🇸",
        "destinations": [
          {
            "name": "우폴루 섬",
            "nameEn": "Upolu Island",
            "highlight": "투수아 오션 트렌치와 로버트 루이스 스티븐슨 박물관",
            "attractions": [
              {
                "name": "투수아 오션 트렌치",
                "nameEn": "To Sua Ocean Trench",
                "desc": "정글 속 거대한 천연 수영장으로 인생 사진을 남기기 좋습니다.",
                "emoji": "🏊"
              },
              {
                "name": "스티븐슨 박물관",
                "nameEn": "Robert Louis Stevenson Museum",
                "desc": "보물섬의 작가가 살았던 저택을 보존한 역사적인 장소입니다.",
                "emoji": "🏠"
              }
            ],
            "foods": [
              {
                "name": "팔루사미",
                "nameEn": "Palusami",
                "desc": "타로 잎에 코코넛 크림을 넣어 구운 사모아의 대표적인 전통 음식입니다.",
                "emoji": "🍃"
              },
              {
                "name": "오카",
                "nameEn": "Oka",
                "desc": "생선을 라임과 코코넛 밀크에 절여 만든 사모아식 회무침입니다.",
                "emoji": "🐟"
              }
            ]
          },
          {
            "name": "사바이 섬",
            "nameEn": "Savai'i Island",
            "highlight": "알로파아가 블로우홀과 화산 용암 지대",
            "attractions": [
              {
                "name": "알로파아가 블로우홀",
                "nameEn": "Alofaaga Blowholes",
                "desc": "바닷물이 화산암 구멍을 통해 높이 솟구치는 장관을 볼 수 있습니다.",
                "emoji": "💨"
              },
              {
                "name": "사레아우 용암 지대",
                "nameEn": "Saleaula Lava Fields",
                "desc": "화산 폭발로 마을이 덮인 후 굳어버린 신비로운 용암 지대입니다.",
                "emoji": "🌋"
              }
            ],
            "foods": [
              {
                "name": "우무 요리",
                "nameEn": "Umu Food",
                "desc": "뜨거운 돌 위에 음식을 올려 익히는 사모아 전통 조리 방식입니다.",
                "emoji": "🔥"
              },
              {
                "name": "구운 타로",
                "nameEn": "Roasted Taro",
                "desc": "사바이 섬의 비옥한 땅에서 자란 타로를 숯불에 구운 간식입니다.",
                "emoji": "🍠"
              }
            ]
          },
          {
            "name": "아피아",
            "nameEn": "Apia",
            "highlight": "사모아의 수도와 화려한 전통 시장",
            "attractions": [
              {
                "name": "아피아 시장",
                "nameEn": "Apia Market",
                "desc": "현지인들의 활기찬 모습과 수공예품을 만날 수 있는 수도의 중심지입니다.",
                "emoji": "🧺"
              },
              {
                "name": "무릴로아 성당",
                "nameEn": "Immaculate Conception Cathedral",
                "desc": "아피아 시내에 위치한 아름답고 웅장한 건축미의 성당입니다.",
                "emoji": "⛪"
              }
            ],
            "foods": [
              {
                "name": "코코넛 빵",
                "nameEn": "Coconut Bun",
                "desc": "아피아 베이커리에서 파는 달콤하고 부드러운 코코넛 간식입니다.",
                "emoji": "🥐"
              },
              {
                "name": "신선한 망고",
                "nameEn": "Fresh Mango",
                "desc": "시장 어디서나 쉽게 구할 수 있는 달콤한 열대 과일입니다.",
                "emoji": "🥭"
              }
            ]
          },
          {
            "name": "랄로마누 해변",
            "nameEn": "Lalomanu Beach",
            "highlight": "세계 10대 해변으로 꼽히는 백사장과 오픈 비치 팔레",
            "attractions": [
              {
                "name": "랄로마누 해변",
                "nameEn": "Lalomanu Beach",
                "desc": "눈부신 백사장과 투명한 바다가 어우러진 세계적인 휴양 해변입니다.",
                "emoji": "🏖️"
              },
              {
                "name": "비치 팔레",
                "nameEn": "Beach Fale",
                "desc": "해변가에 위치한 사모아 전통 가옥에서 하룻밤을 보내는 특별한 경험입니다.",
                "emoji": "🛖"
              }
            ],
            "foods": [
              {
                "name": "구운 바나나",
                "nameEn": "Roasted Banana",
                "desc": "해변에서 간단하게 즐길 수 있는 달콤한 구운 바나나 요리입니다.",
                "emoji": "🍌"
              },
              {
                "name": "해산물 꼬치",
                "nameEn": "Seafood Skewers",
                "desc": "갓 잡은 해산물을 꼬치에 꽂아 구운 해변가 별미입니다.",
                "emoji": "🍢"
              }
            ]
          },
          {
            "name": "파파파파이타이 폭포",
            "nameEn": "Papapapaitai Falls",
            "highlight": "정글 협곡으로 100m 떨어지는 장대한 폭포",
            "attractions": [
              {
                "name": "파파파파이타이 폭포",
                "nameEn": "Papapapaitai Falls",
                "desc": "정글 협곡 사이로 100m 높이에서 떨어지는 장엄한 폭포입니다.",
                "emoji": "💦"
              },
              {
                "name": "크로스 아일랜드 로드",
                "nameEn": "Cross Island Road",
                "desc": "폭포를 지나 섬을 가로지르는 아름다운 드라이브 코스입니다.",
                "emoji": "🚗"
              }
            ],
            "foods": [
              {
                "name": "타로 칩",
                "nameEn": "Taro Chips",
                "desc": "바삭하게 튀겨낸 타로 칩으로 이동 중에 먹기 좋은 간식입니다.",
                "emoji": "🍟"
              },
              {
                "name": "코코넛 워터",
                "nameEn": "Coconut Water",
                "desc": "폭포 근처에서 마시는 시원하고 갈증 해소에 좋은 음료입니다.",
                "emoji": "🥥"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "투 수아 오션 트렌치 (To Sua)",
            "nameEn": "To Sua Ocean Trench",
            "desc": "푸른 숲 한가운데 동그랗게 뚫린 30m 깊이의 천연 바닷물 싱크홀 수영장",
            "emoji": "🏊"
          },
          {
            "name": "알로파아가 블로우홀",
            "nameEn": "Alofaaga Blowholes",
            "desc": "파도가 칠 때마다 바위틈으로 수십 미터 물기둥이 하늘로 치솟는 장관",
            "emoji": "💦"
          }
        ],
        "foods": [
          {
            "name": "오카",
            "nameEn": "Oka I'a",
            "desc": "신선한 날생선 깍둑썰기에 진한 코코넛 크림과 오이, 양파, 레몬을 섞은 상쾌한 요리",
            "emoji": "🐟"
          },
          {
            "name": "파니 포포",
            "nameEn": "Pani Popo",
            "desc": "달콤한 코코넛 밀크 시럽에 푹 적셔서 구워낸 부드럽고 따뜻한 사모아 빵",
            "emoji": "🍞"
          }
        ]
      },
      {
        "id": "vanuatu",
        "name": "바누아투",
        "nameEn": "Vanuatu",
        "flag": "🇻🇺",
        "destinations": [
          {
            "name": "타나 섬",
            "nameEn": "Tanna Island",
            "highlight": "세계에서 가장 가까이서 볼 수 있는 야수르 활화산",
            "attractions": [
              {
                "name": "야수르 화산",
                "nameEn": "Mount Yasur",
                "desc": "세계에서 가장 가까이서 용암 분출을 볼 수 있는 활화산입니다.",
                "emoji": "🌋"
              },
              {
                "name": "밀레니엄 케이브",
                "nameEn": "Millennium Cave",
                "desc": "정글 트레킹과 동굴 탐험을 동시에 즐길 수 있는 모험지입니다.",
                "emoji": "🕳️"
              }
            ],
            "foods": [
              {
                "name": "라플랍",
                "nameEn": "Lap Lap",
                "desc": "바누아투의 전통 음식으로 뿌리 채소를 갈아 코코넛 밀크와 쪄낸 요리입니다.",
                "emoji": "🥘"
              },
              {
                "name": "카바",
                "nameEn": "Kava",
                "desc": "바누아투의 전통 음료로 긴장을 완화해주는 독특한 맛의 뿌리 차입니다.",
                "emoji": "🍵"
              }
            ]
          },
          {
            "name": "에스피리투 산토",
            "nameEn": "Espiritu Santo",
            "highlight": "샴페인 비치와 보석 같은 블루 홀 천연 샘",
            "attractions": [
              {
                "name": "샴페인 비치",
                "nameEn": "Champagne Beach",
                "desc": "샴페인 거품처럼 바닷물이 솟아오르는 아름다운 해변입니다.",
                "emoji": "🥂"
              },
              {
                "name": "니테 블루 홀",
                "nameEn": "Nanda Blue Hole",
                "desc": "보석처럼 투명하고 푸른 빛을 띠는 천연 샘물 수영장입니다.",
                "emoji": "💎"
              }
            ],
            "foods": [
              {
                "name": "산토 비프",
                "nameEn": "Santo Beef",
                "desc": "바누아투에서 가장 유명한 최고급 소고기 스테이크입니다.",
                "emoji": "🥩"
              },
              {
                "name": "열대 과일 타르트",
                "nameEn": "Tropical Fruit Tart",
                "desc": "현지에서 나는 신선한 과일을 듬뿍 올린 디저트입니다.",
                "emoji": "🥧"
              }
            ]
          },
          {
            "name": "포트빌라",
            "nameEn": "Port Vila",
            "highlight": "수도의 하버와 멜레 폭포 카스케이드",
            "attractions": [
              {
                "name": "멜레 폭포",
                "nameEn": "Mele Cascades",
                "desc": "계단식으로 흐르는 아름다운 폭포로 수영을 즐기기 좋습니다.",
                "emoji": "🌊"
              },
              {
                "name": "포트빌라 시장",
                "nameEn": "Port Vila Market",
                "desc": "수도에서 가장 활기찬 곳으로 신선한 농산물을 만날 수 있습니다.",
                "emoji": "🍎"
              }
            ],
            "foods": [
              {
                "name": "프렌치 페이스트리",
                "nameEn": "French Pastry",
                "desc": "프랑스 문화의 영향으로 수준 높은 빵과 디저트를 맛볼 수 있습니다.",
                "emoji": "🥐"
              },
              {
                "name": "구운 랍스터",
                "nameEn": "Grilled Lobster",
                "desc": "포트빌라 항구 근처 식당에서 즐기는 신선한 랍스터 요리입니다.",
                "emoji": "🦞"
              }
            ]
          },
          {
            "name": "펜테코스트 섬",
            "nameEn": "Pentecost Island",
            "highlight": "번지점프의 기원이 된 전통 낭골 랜드다이빙",
            "attractions": [
              {
                "name": "낭골 타워",
                "nameEn": "Naghol Tower",
                "desc": "번지점프의 기원이 된 전통 랜드다이빙이 열리는 장소입니다.",
                "emoji": "🗼"
              },
              {
                "name": "전통 마을",
                "nameEn": "Traditional Village",
                "desc": "바누아투의 고유한 부족 문화를 직접 체험할 수 있는 곳입니다.",
                "emoji": "🛖"
              }
            ],
            "foods": [
              {
                "name": "구운 얌",
                "nameEn": "Roasted Yam",
                "desc": "섬에서 주식으로 먹는 얌을 숯불에 구워 고소하게 즐깁니다.",
                "emoji": "🍠"
              },
              {
                "name": "코코넛 크림 생선",
                "nameEn": "Fish in Coconut Cream",
                "desc": "신선한 생선을 코코넛 크림에 졸여 부드러운 맛을 냅니다.",
                "emoji": "🐟"
              }
            ]
          },
          {
            "name": "에파테 섬",
            "nameEn": "Efate Island",
            "highlight": "블루 라군 에코 파크와 해저 우체국",
            "attractions": [
              {
                "name": "블루 라군",
                "nameEn": "Blue Lagoon",
                "desc": "에파테 섬의 대표적인 명소로 에메랄드빛 물에서 다이빙을 즐깁니다.",
                "emoji": "🏊"
              },
              {
                "name": "해저 우체국",
                "nameEn": "Underwater Post Office",
                "desc": "바닷속에서 방수 엽서를 보낼 수 있는 세계 유일의 우체국입니다.",
                "emoji": "📮"
              }
            ],
            "foods": [
              {
                "name": "코코넛 샐러드",
                "nameEn": "Coconut Salad",
                "desc": "신선한 코코넛 과육과 채소를 섞어 만든 상큼한 샐러드입니다.",
                "emoji": "🥗"
              },
              {
                "name": "바나나 칩",
                "nameEn": "Banana Chips",
                "desc": "에파테 섬에서 생산된 바나나로 만든 바삭한 간식입니다.",
                "emoji": "🍌"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "야수르 활화산 투어",
            "nameEn": "Mount Yasur Active Volcano",
            "desc": "분화구 바로 가장자리에서 붉은 용암이 폭죽처럼 솟구치는 모습을 보는 화산",
            "emoji": "🌋"
          },
          {
            "name": "은두아 블루 홀",
            "nameEn": "Nanda Blue Hole",
            "desc": "정글 속에서 청명한 푸른빛을 뿜어내는 투명하고 깊은 담수 용천수 웅덩이",
            "emoji": "💎"
          }
        ],
        "foods": [
          {
            "name": "라프라프",
            "nameEn": "Laplap",
            "desc": "타로와 얌, 바나나를 갈아 코코넛 크림과 야생 시금치를 얹고 뜨거운 돌로 쪄낸 바누아투 전통 떡",
            "emoji": "🍠"
          },
          {
            "name": "툴룩",
            "nameEn": "Tuluk",
            "desc": "카사바 반죽 안에 매콤하게 다진 돼지고기를 넣고 바나나 잎에 쪄낸 고기만두 스타일 음식",
            "emoji": "🥟"
          }
        ]
      },
      {
        "id": "cook_islands",
        "name": "쿡 제도",
        "nameEn": "Cook Islands",
        "flag": "🇨🇰",
        "destinations": [
          {
            "name": "라로통가",
            "nameEn": "Rarotonga",
            "highlight": "산호초에 둘러싸인 본섬과 크로스 아일랜드 트레킹",
            "attractions": [
              {
                "name": "푸나마누이 비치",
                "nameEn": "Muri Beach",
                "desc": "라로통가에서 가장 유명한 해변으로 스노클링하기 좋습니다.",
                "emoji": "🤿"
              },
              {
                "name": "크로스 아일랜드 트레킹",
                "nameEn": "Cross Island Trek",
                "desc": "섬의 중심을 가로지르며 아름다운 자연을 감상하는 코스입니다.",
                "emoji": "🥾"
              }
            ],
            "foods": [
              {
                "name": "이카 마타",
                "nameEn": "Ika Mata",
                "desc": "생선을 라임과 코코넛 밀크에 버무린 쿡 제도식 회무침입니다.",
                "emoji": "🐟"
              },
              {
                "name": "루카우",
                "nameEn": "Rukau",
                "desc": "타로 잎을 코코넛 크림과 함께 요리한 부드러운 전통 음식입니다.",
                "emoji": "🍃"
              }
            ]
          },
          {
            "name": "아이투타키",
            "nameEn": "Aitutaki",
            "highlight": "세계에서 가장 눈부신 에메랄드빛 삼각 환초 라군",
            "attractions": [
              {
                "name": "아이투타키 라군",
                "nameEn": "Aitutaki Lagoon",
                "desc": "세계에서 가장 아름다운 라군으로 손꼽히는 투명한 바다입니다.",
                "emoji": "🏝️"
              },
              {
                "name": "아루탕기 마을",
                "nameEn": "Arutanga Village",
                "desc": "아이투타키의 중심지로 평화로운 섬 마을의 정취를 느낄 수 있습니다.",
                "emoji": "🏘️"
              }
            ],
            "foods": [
              {
                "name": "신선한 참치",
                "nameEn": "Fresh Tuna",
                "desc": "아이투타키 바다에서 잡은 신선한 참치 요리가 일품입니다.",
                "emoji": "🍣"
              },
              {
                "name": "코코넛 젤리",
                "nameEn": "Coconut Jelly",
                "desc": "코코넛 워터로 만든 달콤하고 시원한 디저트입니다.",
                "emoji": "🍮"
              }
            ]
          },
          {
            "name": "원풋 아일랜드",
            "nameEn": "One Foot Island",
            "highlight": "무인도 우체국에서 발도장 여권 스탬프 받기",
            "attractions": [
              {
                "name": "원풋 아일랜드 우체국",
                "nameEn": "One Foot Island Post Office",
                "desc": "무인도에서 여권에 특별한 발도장 스탬프를 찍을 수 있습니다.",
                "emoji": "👣"
              },
              {
                "name": "원풋 아일랜드 해변",
                "nameEn": "One Foot Island Beach",
                "desc": "눈부신 백사장과 얕은 바다가 펼쳐진 무인도 해변입니다.",
                "emoji": "🏖️"
              }
            ],
            "foods": [
              {
                "name": "바비큐 런치",
                "nameEn": "BBQ Lunch",
                "desc": "무인도 투어 중 즐기는 신선한 해산물 바비큐입니다.",
                "emoji": "🍖"
              },
              {
                "name": "트로피컬 과일",
                "nameEn": "Tropical Fruits",
                "desc": "섬에서 바로 따서 먹는 신선한 파파야와 망고입니다.",
                "emoji": "🥭"
              }
            ]
          },
          {
            "name": "아티우",
            "nameEn": "Atiu",
            "highlight": "새들의 섬과 석회암 동굴 속 아나타키타키트",
            "attractions": [
              {
                "name": "아나타키타키 동굴",
                "nameEn": "Anatakitaki Cave",
                "desc": "석회암 동굴 속에서 희귀한 새를 관찰할 수 있는 탐험지입니다.",
                "emoji": "🦇"
              },
              {
                "name": "새들의 섬",
                "nameEn": "Birdman Island",
                "desc": "다양한 희귀 조류가 서식하는 자연 그대로의 섬입니다.",
                "emoji": "🦜"
              }
            ],
            "foods": [
              {
                "name": "구운 빵나무 열매",
                "nameEn": "Roasted Breadfruit",
                "desc": "아티우에서 전통적으로 즐겨 먹는 구운 빵나무 열매입니다.",
                "emoji": "🍞"
              },
              {
                "name": "코코넛 크림 요리",
                "nameEn": "Coconut Cream Dish",
                "desc": "현지 채소와 코코넛 크림을 섞어 만든 고소한 요리입니다.",
                "emoji": "🥥"
              }
            ]
          },
          {
            "name": "망가이아",
            "nameEn": "Mangaia",
            "highlight": "태평양에서 가장 오래된 화산 지형의 섬",
            "attractions": [
              {
                "name": "망가이아 동굴",
                "nameEn": "Mangaia Caves",
                "desc": "태평양에서 가장 오래된 화산 지형을 간직한 신비로운 동굴입니다.",
                "emoji": "🕳️"
              },
              {
                "name": "마카테아 절벽",
                "nameEn": "Makatea Cliffs",
                "desc": "섬을 둘러싼 거대한 산호 절벽으로 장관을 이룹니다.",
                "emoji": "⛰️"
              }
            ],
            "foods": [
              {
                "name": "타로 퓨레",
                "nameEn": "Taro Puree",
                "desc": "망가이아의 비옥한 땅에서 자란 타로를 곱게 으깬 요리입니다.",
                "emoji": "🍠"
              },
              {
                "name": "생선 구이",
                "nameEn": "Grilled Fish",
                "desc": "망가이아 주변 바다에서 잡은 신선한 생선 구이입니다.",
                "emoji": "🐟"
              }
            ]
          }
        ],
        "attractions": [
          {
            "name": "아이투타키 라군 크루즈",
            "nameEn": "Aitutaki Lagoon Cruise",
            "desc": "비현실적인 청록색 얕은 바다와 순백의 모래톱 샌드바를 걷는 크루즈",
            "emoji": "⛵"
          },
          {
            "name": "원풋 아일랜드 여권 스탬프",
            "nameEn": "One Foot Island Post Office",
            "desc": "세계에서 가장 고립되고 아름다운 해변 우체국에서 찍는 발바닥 모양 스탬프",
            "emoji": "👣"
          }
        ],
        "foods": [
          {
            "name": "이카 마타",
            "nameEn": "Ika Mata",
            "desc": "갓 잡은 생참치 살에 라임과 신선하게 짠 코코넛 크림, 당근, 피망을 버무린 국민 샐러드",
            "emoji": "🐟"
          },
          {
            "name": "루카우",
            "nameEn": "Rukau",
            "desc": "어린 타로 잎에 양파와 코코넛 크림을 넣고 부드럽게 쪄낸 고소한 영양식",
            "emoji": "🥬"
          }
        ]
      }
    ]
  }
];
