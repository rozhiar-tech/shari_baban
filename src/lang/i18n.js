import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part2: "Residency Complex",
            part3: "Baban City",
          },
          navigation: {
            home: "Home",
            about: "About",
            location: "Location",
            amen: "Amentities",
          },
          about: {
            abtext:
              "Share Baban will be built on an area of 88 acres in the most beautiful and strategic location of Sulaimani. The project consists of 24 residential buildings and 2 commercial buildings. The project is located in Sarchnar, near Sulaimani University, Republic University, Tişk University. Share Baban will be a comfortable home for the residents with the highest quality in the most beautiful location of the city.",
            aboutt: "About",
            city: "Baban City",
            group: "Dayik Group",
            hometext:
              "Dayik Group consists of several companies in different fields, including Dayik company, which is one of the largest, most important and advanced national investment and public contracting companies that has a prominent role in the service and prosperity of the country and has implemented several strategic projects such as Hawari Zanko and Wabarhenan City. Fortunately, this important project, which is Share Baban, has been entrusted to us with the decision and order of the Presidency of the Council of Ministers and the consent of all parties concerned in a proper administrative and legal process. This important project will be one of the largest and most unique projects in the Kurdistan Region and Iraq will be presented to the beloved city of Sulaimani.",
            vision: "Vision Statement",
            visiontext:
              "At Share Baban, we envision a vibrant and harmonious community thriving amidst the serene landscapes of Sulaimani. Our vision is to create a landmark residential project that sets new benchmarks in quality, design, and lifestyle. We aspire to redefine modern living by offering residents a sanctuary where luxury meets sustainability, fostering a sense of belonging and well-being for generations to come.",
            ap1: "160M",
            ap2: "183M",
            ap3: "193M",
            ap4: "222M",
            ap5: "263M",
            ap6: "292M",
            aptext: "Apartment Type",
            floor: "Floor plans and Layouts",
            time: "Time Plan of the project",
          },
        },
      },
      ar: {
        translation: {
          description: {
            part2: "مجمع السكن",
            part3: "مدينة بابان",
          },

          navigation: {
            home: "الصفحة الرئيسية",
            about: "حول",
            location: "موقع",
            amen: "وسائل الراحة",
          },
          about: {
            abtext:
              "سيتم بناء مدينة بابان على مساحة 88 دونماً في أجمل وأبرز موقع السليمانية. يتكون المشروع من 24 عمارة سكنية و 2 بنايات تجارية. يقع المشروع في منطقة سرجنار، بالقرب من جامعة السليمانية، الجامعة الجمهورية، جامعة تيشك. سيكون مدینة بابان منزلاً مريحًا للمقيمين بأعلى مستويات الجودة في أجمل موقع بالمدينة.",
            aboutt: "حول",

            group: "مجموعة دايك",
            hometext:
              "تتكون مجموعة دايك من عدة شركات في مجالات مختلفة منها الشركة دايك التي تعد من أكبر وأهم الشركات الوطنية وأكثرها تقدما في مجال الاستثمار والمقاولات العامة والتي لها دور بارز في خدمة وازدهار الوطن وقد نفذت عدة مشاريع كبرى واستراتيجية كمنتجع لموظفي الجامعة ومدينة وبرهینان. لحسن الحظ أن هذا المشروع المهم وهو (مدينة بابان) قد أوكل إلينا بقرار وأمر من رئاسة مجلس الوزراء وموافقة جميع الجهات ذات صلة على العملية الإدارية والقانونية المناسبة. سيكون هذا المشروع المهم من أكبر المشاريع وأكثرها تميزاً في إقليم كوردستان والعراق ومخصص لمدينة السليمانية الحبيبة.",
            vision: "رؤيتنا",
            visiontext:
              "في مدینة بابان، نتصور مجتمعًا نابضًا بالحياة ومتناغمًا يزدهر وسط المناظر الطبيعية الهادئة في السليمانية. رؤيتنا هي إنشاء مشروع سكني تاريخي يضع معيارًا جديدًا في الجودة والتصميم وأسلوب الحياة ويتوافق مع حماية البيئة، ويبني شعورًا بالانتماء الاستقلال والازدهار للأجيال القادمة.",
            ap1: "١٦٠م",
            ap2: "١٨٣م",
            ap3: "١٩٣م",
            ap4: "٢٢٢م",
            ap5: "٢٦٣م",
            ap6: "٢٩٢م",
            aptext: "نوع الشقة",
            floor: "مخططات الطوابق والتخطيطات",
            time: "الخطة الزمنية للمشروع",
          },
        },
      },
      ku: {
        translation: {
          description: {
            part2: "پرۆژەی نیشتەجێبوون",
            part3: "شاری بابان",
          },
          navigation: {
            home: "سەرەکی",
            about: "دەربارە",
            location: "شوێن",
            amen: "خزمەتگوزاریەکان",
          },
          about: {
            abtext:
              "شاری بابان بنیات دەنرێت لەسەر ڕووبەری ٨٨ دۆنم لە جوانترین و ستراتیجیترین شوێنی شاری سلێمانی. پرۆژەکە پێکدێت لە ٢٤ باڵەخانەی نیشتەجێبوون و ٢ باڵەخانەی بازرگانی. پرۆژەکە دەکەوێتە سەرچنار، نزیک زانکۆی سلێمانی، زانکۆی کۆمار، زانکۆی تیشک. شاری بابان بە بەرزترین کوالیتی لە جوانترین شوێنی شاردا ماڵێکی ئارام دەبێت بۆ دانیشتوان.",
            aboutt: "دەربارەی",
            city: "شاری بابان",
            group: "گرووپی دایک",
            hometext:
              "گروپی دایک پێکهاتووە لە چەند کۆمپانیایەکی بواری جیا جیا، لە نێویاندا کۆمپانیای دایک کە یەکێکە لە کۆمپانیا نیشتمانییە گەورە و گرنگ و پێشکەوتووەکانی وەبەرهێنان و بەڵێندەرایەتی گشتی کە جێ دەستی دیارە لە خزمەت و ئاوەدانی وڵات و چەندین پرۆژەی گەورە و ستراتیجی جێبەجێکردووە وەک هەواری فەرمانبەرانی زانکۆ و شاری وەبەرهێنان. خۆشبەختانە ئەم پرۆژە گرنگەش کە (شاری بابان)ە ئەرکی جێبەجێکردنمان پێ سپێردراوە بە بڕیار و فەرمانی سەرۆکایەتی ئەنجومەنی وەزیران و ڕەزامەندی گشت لایەنە پەیوەندیدارەکان لە پرۆسەیەکی کارگێڕی و یاسایی دروست. ئەم پرۆژە گرنگە دەبێتە یەکێک لە گەورەترین و ناوازەترین پرۆژەکان لە هەرێمی کوردستان و عێراق پێشکەش بە شاری سلێمانی خۆشەویست دەکرێت.",
            vision: "دیدگای ئێمە",
            visiontext:
              "لە شاری بابان، ئێمە پێشبینی کۆمەڵگەیەکی زیندوو و هاوسەنگ دەکەین کە لەنێو دیمەنە ئارامەکانی شاری سلێمانیدا گەشە بکات. دیدگامان دروستکردنی پڕۆژەیەکی نیشتەجێبوونی گرنگە کە پێوەرێکی نوێ لە کوالیتی و دیزاین و شێوازی ژیاندا دادەنێت. ئاواتەخوازین ژیانی مۆدێرن پێناسە بکەینەوە لەڕێگەی پێشکەشکردنی یەکەیەکی ناوازە بۆ دانیشتوانمان کە لەگەڵ ژینگە دۆستیدا یەکدەگرێتەوە ، هەستکردن بە سەربەخۆیی و خۆشگوزەرانی بۆ نەوەکانی داهاتوو بنیات دەنێین. ئەرکی ئێمە داهاتوو بنیات دەنێین.",
            ap1: "١٦٠م",
            ap2: "١٨٣م",
            ap3: "١٩٣م",
            ap4: "٢٢٢م",
            ap5: "٢٦٣م",
            ap6: "٢٩٢م",
            aptext: "جۆری شوقە",
            floor: "پلانی نهۆمەکان",
            time: "کاتی تەواوبوونی پرۆژەکە",
          },
        },
      },
    },
  });

export default i18n;
