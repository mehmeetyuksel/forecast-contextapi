import {createContext, useContext, useState} from "react"


const CityContext = createContext();

export const CityContextProvider = ({children}) => {

    const [data] = useState([
        {
          "name": "Adana",
          "lat": 37.000428,
          "long": 35.321976
        },
        {
          "name": "Adıyaman",
          "lat": 37.766915,
          "long": 38.276659
        },
        {
          "name": "Afyonkarahisar",
          "lat": 38.763855,
          "long": 30.540263
        },
        {
          "name": "Ağrı",
          "lat": 39.720392,
          "long": 43.047472
        },
        {
          "name": "Amasya",
          "lat": 40.650169,
          "long": 35.835634
        },
        {
          "name": "Ankara",
          "lat": 39.923429,
          "long": 32.853034
        },
        {
          "name": "Antalya",
          "lat": 36.884564,
          "long": 30.703937
        },
        {
          "name": "Artvin",
          "lat": 41.183241,
          "long": 41.818072
        },
        {
          "name": "Aydın",
          "lat": 37.856965,
          "long": 27.84102
        },
        {
          "name": "Balıkesir",
          "lat": 39.649055,
          "long": 27.881532
        },
        {
          "name": "Bilecik",
          "lat": 40.150013,
          "long": 29.982694
        },
        {
          "name": "Bingöl",
          "lat": 38.884619,
          "long": 40.49661
        },
        {
          "name": "Bitlis",
          "lat": 38.403863,
          "long": 42.1084291
        },
        {
          "name": "Bolu",
          "lat": 40.740494,
          "long": 31.611391
        },
        {
          "name": "Burdur",
          "lat": 37.72728,
          "long": 30.289255
        },
        {
          "name": "Bursa",
          "lat": 40.182873,
          "long": 29.066893
        },
        {
          "name": "Çanakkale",
          "lat": 40.154999,
          "long": 26.413484
        },
        {
          "name": "Çankırı",
          "lat": 40.601832,
          "long": 33.613503
        },
        {
          "name": "Çorum",
          "lat": 40.551113,
          "long": 34.956041
        },
        {
          "name": "Denizli",
          "lat": 37.7756,
          "long": 29.08826
        },
        {
          "name": "Diyarbakır",
          "lat": 37.914951,
          "long": 40.228397
        },
        {
          "name": "Edirne",
          "lat": 41.68163,
          "long": 26.56077
        },
        {
          "name": "Elazığ",
          "lat": 38.680686,
          "long": 39.226581
        },
        {
          "name": "Erzincan",
          "lat": 39.750226,
          "long": 39.01634
        },
        {
          "name": "Erzurum",
          "lat": 39.900255,
          "long": 41.271463
        },
        {
          "name": "Eskişehir",
          "lat": 39.77688,
          "long": 30.519916
        },
        {
          "name": "Gaziantep",
          "lat": 37.065862,
          "long": 37.384706
        },
        {
          "name": "Giresun",
          "lat": 40.912475,
          "long": 38.390985
        },
        {
          "name": "Gümüşhane",
          "lat": 40.440676,
          "long": 39.508158
        },
        {
          "name": "Hakkari",
          "lat": 37.583222,
          "long": 43.733628
        },
        {
          "name": "Hatay",
          "lat": 36.200512,
          "long": 36.166941
        },
        {
          "name": "Isparta",
          "lat": 37.764473,
          "long": 30.55533
        },
        {
          "name": "İçel",
          "lat": 36.536123,
          "long": 33.792291
        },
        {
          "name": "İstanbul",
          "lat": 41.002703,
          "long": 28.987013
        },
        {
          "name": "İzmir",
          "lat": 38.421318,
          "long": 27.125037
        },
        {
          "name": "Kars",
          "lat": 40.606003,
          "long": 43.100884
        },
        {
          "name": "Kastamonu",
          "lat": 41.388401,
          "long": 33.782246
        },
        {
          "name": "Kayseri",
          "lat": 38.734804,
          "long": 35.48014
        },
        {
          "name": "Kırıkkale",
          "lat": 39.847822,
          "long": 33.513056
        },
        {
          "name": "Kırşehir",
          "lat": 39.142044,
          "long": 34.171205
        },
        {
          "name": "Kocaeli",
          "lat": 40.855371,
          "long": 29.890639
        },
        {
          "name": "Konya",
          "lat": 37.864012,
          "long": 32.479499
        },
        {
          "name": "Kütahya",
          "lat": 39.416568,
          "long": 29.983354
        },
        {
          "name": "Malatya",
          "lat": 38.35458,
          "long": 38.312656
        },
        {
          "name": "Manisa",
          "lat": 38.621162,
          "long": 27.428638
        },
        {
          "name": "Kahramanmaraş",
          "lat": 38.61848,
          "long": 27.430698
        },
        {
          "name": "Mardin",
          "lat": 37.320755,
          "long": 40.726267
        },
        {
          "name": "Muğla",
          "lat": 37.215702,
          "long": 28.362725
        },
        {
          "name": "Muş",
          "lat": 38.743641,
          "long": 41.50512
        },
        {
          "name": "Nevşehir",
          "lat": 38.626527,
          "long": 34.711939
        },
        {
          "name": "Niğde",
          "lat": 37.966125,
          "long": 34.682756
        },
        {
          "name": "Ordu",
          "lat": 40.984563,
          "long": 37.878696
        },
        {
          "name": "Rize",
          "lat": 41.021355,
          "long": 40.523655
        },
        {
          "name": "Sakarya",
          "lat": 40.776642,
          "long": 30.405985
        },
        {
          "name": "Samsun",
          "lat": 41.291738,
          "long": 36.331684
        },
        {
          "name": "Siirt",
          "lat": 37.933096,
          "long": 41.949182
        },
        {
          "name": "Sinop",
          "lat": 42.022263,
          "long": 35.152027
        },
        {
          "name": "Sivas",
          "lat": 39.747322,
          "long": 37.020389
        },
        {
          "name": "Tekirdağ",
          "lat": 40.984563,
          "long": 27.517902
        },
        {
          "name": "Tokat",
          "lat": 40.316708,
          "long": 36.550775
        },
        {
          "name": "Trabzon",
          "lat": 40.999593,
          "long": 39.716846
        },
        {
          "name": "Tunceli",
          "lat": 39.105421,
          "long": 39.545777
        },
        {
          "name": "Urfa",
          "lat": 37.155939,
          "long": 38.795368
        },
        {
          "name": "Uşak",
          "lat": 38.681222,
          "long": 29.407945
        },
        {
          "name": "Van",
          "lat": 38.48907,
          "long": 43.402759
        },
        {
          "name": "Yozgat",
          "lat": 39.819876,
          "long": 34.811871
        },
        {
          "name": "Zonguldak",
          "lat": 41.455336,
          "long": 31.799532
        },
        {
          "name": "Aksaray",
          "lat": 38.365349,
          "long": 34.036914
        },
        {
          "name": "Bayburt",
          "lat": 40.255425,
          "long": 40.224526
        },
        {
          "name": "Karaman",
          "lat": 37.174543,
          "long": 33.229128
        },
        {
          "name": "Kırklareli",
          "lat": 41.733661,
          "long": 27.216027
        },
        {
          "name": "Batman",
          "lat": 37.880273,
          "long": 41.137567
        },
        {
          "name": "Şırnak",
          "lat": 37.518985,
          "long": 42.460587
        },
        {
          "name": "Bartın",
          "lat": 41.641233,
          "long": 32.343038
        },
        {
          "name": "Ardahan",
          "lat": 41.111175,
          "long": 42.702802
        },
        {
          "name": "Iğdır",
          "lat": 39.918689,
          "long": 44.066059
        },
        {
          "name": "Yalova",
          "lat": 40.65069,
          "long": 29.26478
        },
        {
          "name": "Karabük",
          "lat": 41.203456,
          "long": 32.622425
        },
        {
          "name": "Kilis",
          "lat": 36.718522,
          "long": 37.120374
        },
        {
          "name": "Osmaniye",
          "lat": 37.069697,
          "long": 36.252085
        },
        {
          "name": "Düzce",
          "lat": 40.843165,
          "long": 31.156342
        }
      ])
    const values = {data}

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}

export const useCity = () => useContext(CityContext)
