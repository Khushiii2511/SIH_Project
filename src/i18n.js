import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// This is the single object containing all translations.
const resources = {
  // English
  en: {
    translation: {
      "greeting": "Welcome to Gyanoday",
      "slogan": "Empowering rural youth with digital education.",
      "cta": "Get Started",
      "features_heading": "Our Core Features",
      "features.module1.title": "Core Learning Modules",
      "features.module1.description": "Comprehensive lessons covering essential subjects.",
      "features.module2.title": "Gamification",
      "features.module2.description": "Engaging learning with points, badges, and leaderboards.",
      "features.module3.title": "Personalized Learning",
      "features.module3.description": "AI-powered paths that adapt to your unique pace and style.",
    }
  },
  // Hindi
  hi: {
    translation: {
      "greeting": "ज्ञानोदय में आपका स्वागत है",
      "slogan": "डिजिटल शिक्षा के साथ ग्रामीण युवाओं को सशक्त बनाना।",
      "cta": "शुरू करें",
      "features_heading": "हमारी मुख्य विशेषताएं",
      "features.module1.title": "मुख्य शिक्षण मॉड्यूल",
      "features.module1.description": "आवश्यक विषयों को कवर करने वाले व्यापक पाठ।",
      "features.module2.title": "गेमिफिकेशन",
      "features.module2.description": "अंकों, बैज और लीडरबोर्ड के साथ आकर्षक शिक्षा।",
      "features.module3.title": "व्यक्तिगत शिक्षा",
      "features.module3.description": "आपके अद्वितीय गति और शैली के अनुकूल एआई-संचालित पथ।",
    }
  },
  // Punjabi
  pa: {
    translation: {
      "greeting": "ਗਿਆਨੋਦਯ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ",
      "slogan": "ਡਿਜੀਟਲ ਸਿੱਖਿਆ ਨਾਲ ਪੇਂਡੂ ਨੌਜਵਾਨਾਂ ਨੂੰ ਸ਼ਕਤੀਕਰਨ।",
      "cta": "ਸ਼ੁਰੂ ਕਰੋ",
      "features_heading": "ਸਾਡੀਆਂ ਮੁੱਖ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
      "features.module1.title": "ਮੁੱਖ ਸਿੱਖਣ ਮੋਡੀਊਲ",
      "features.module1.description": "ਜ਼ਰੂਰੀ ਵਿਸ਼ਿਆਂ ਨੂੰ ਕਵਰ ਕਰਨ ਵਾਲੇ ਵਿਆਪਕ ਪਾਠ।",
      "features.module2.title": "ਗੈਮੀਫਿਕੇਸ਼ਨ",
      "features.module2.description": "ਅੰਕ, ਬੈਜ ਅਤੇ ਲੀਡਰਬੋਰਡਾਂ ਨਾਲ ਦਿਲਚਸਪ ਸਿੱਖਿਆ।",
      "features.module3.title": "ਵਿਅਕਤੀਗਤ ਸਿੱਖਿਆ",
      "features.module3.description": "ਤੁਹਾਡੀ ਵਿਲੱਖਣ ਗਤੀ ਅਤੇ ਸ਼ੈਲੀ ਦੇ ਅਨੁਕੂਲ AI-ਸੰਚਾਲਿਤ ਮਾਰਗ।",
    }
  },
  // Assamese
  as: {
    translation: {
      "greeting": "Gyanoday-লৈ স্বাগতম",
      "slogan": "ডিজিটেল শিক্ষাৰে গ্ৰাম্য যুৱক-যুৱতীক শক্তিশালী কৰা।",
      "cta": "আৰম্ভ কৰক",
      "features_heading": "আমাৰ মূল বৈশিষ্ট্যসমূহ",
      "features.module1.title": "মুখ্য শিক্ষণ মডিউল",
      "features.module1.description": "অত্যাৱশ্যকীয় বিষয়সমূহ সামৰি লোৱা বিস্তৃত পাঠ।",
      "features.module2.title": "গেমিফিকেচন",
      "features.module2.description": "পইণ্ট, বেজ আৰু লিডাৰব’ৰ্ডৰ সৈতে আকৰ্ষণীয় শিক্ষা।",
      "features.module3.title": "ব্যক্তিগতকৃত শিক্ষা",
      "features.module3.description": "আপোনাৰ অনন্য গতি আৰু শৈলীৰ সৈতে খাপ খোৱা AI-চালিত পথ।",
    }
  },
  // Bengali
  bn: {
    translation: {
      "greeting": "জ্ঞানোদয়ে স্বাগতম",
      "slogan": "ডিজিটাল শিক্ষার মাধ্যমে গ্রামীণ যুবকদের ক্ষমতায়ন।",
      "cta": "শুরু করুন",
      "features_heading": "আমাদের মূল বৈশিষ্ট্য",
      "features.module1.title": "কোর লার্নিং মডিউল",
      "features.module1.description": "প্রয়োজনীয় বিষয় কভার করে এমন ব্যাপক পাঠ।",
      "features.module2.title": "গ্যামিফিকেশন",
      "features.module2.description": "পয়েন্ট, ব্যাজ এবং লিডারবোর্ড সহ আকর্ষণীয় শিক্ষা।",
      "features.module3.title": "ব্যক্তিগত শিক্ষা",
      "features.module3.description": "আপনার অনন্য গতি এবং শৈলীর সাথে মানিয়ে নেওয়া এআই-চালিত পথ।",
    }
  },
  // Gujarati
  gu: {
    translation: {
      "greeting": "જ્ઞાનોદયમાં તમારું સ્વાગત છે",
      "slogan": "ડિજિટલ શિક્ષણ સાથે ગ્રામીણ યુવાનોને સશક્ત બનાવવું.",
      "cta": "શરૂ કરો",
      "features_heading": "અમારી મુખ્ય વિશેષતાઓ",
      "features.module1.title": "કોર લર્નિંગ મોડ્યુલ્સ",
      "features.module1.description": "આવશ્યક વિષયોને આવરી લેતા વ્યાપક પાઠ.",
      "features.module2.title": "ગેમિફિકેશન",
      "features.module2.description": "પોઈન્ટ્સ, બેજ અને લીડરબોર્ડ્સ સાથે આકર્ષક શિક્ષણ.",
      "features.module3.title": "વ્યક્તિગત શિક્ષણ",
      "features.module3.description": "તમારી અનન્ય ગતિ અને શૈલીને અનુરૂપ AI-સંચાલિત માર્ગો.",
    }
  },
  // Kannada
  kn: {
    translation: {
      "greeting": "ಜ್ಞಾನೋದಯಕ್ಕೆ ಸ್ವಾಗತ",
      "slogan": "ಡಿಜಿಟಲ್ ಶಿಕ್ಷಣದೊಂದಿಗೆ ಗ್ರಾಮೀಣ ಯುವಕರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು.",
      "cta": "ಪ್ರಾರಂಭಿಸಿ",
      "features_heading": "ನಮ್ಮ ಪ್ರಮುಖ ವೈಶಿಷ್ಟ್ಯಗಳು",
      "features.module1.title": "ಕೋರ್ ಕಲಿಕಾ ಮಾಡ್ಯೂಲ್‌ಗಳು",
      "features.module1.description": "ಅಗತ್ಯ ವಿಷಯಗಳನ್ನು ಒಳಗೊಂಡಿರುವ ಸಮಗ್ರ ಪಾಠಗಳು.",
      "features.module2.title": "ಗೇಮಿಫಿಕೇಶನ್",
      "features.module2.description": "ಪಾಯಿಂಟ್‌ಗಳು, ಬ್ಯಾಡ್ಜ್‌ಗಳು ಮತ್ತು ಲೀಡರ್‌ಬೋರ್ಡ್‌ಗಳೊಂದಿಗೆ ಆಕರ್ಷಕ ಕಲಿಕೆ.",
      "features.module3.title": "ವೈಯಕ್ತಿಕ ಕಲಿಕೆ",
      "features.module3.description": "ನಿಮ್ಮ ವಿಶಿಷ್ಟ ವೇಗ ಮತ್ತು ಶೈಲಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವ AI-ಚಾಲಿತ ಮಾರ್ಗಗಳು.",
    }
  },
  // Kashmiri
  ks: {
    translation: {
      "greeting": "گیانودایہَس خۄش آمٕد",
      "slogan": "ڈِجیٹَل تَعلِمَس سٟتؠ دیہی یُوَوَن طاقَتھ وِتھراوُن۔",
      "cta": "شۆروٗع کٔرِو",
      "features_heading": "ساہِتؠن ہِنٛدؠن مۄکھِیَن خۄبِیَن",
      "features.module1.title": "کٔور لَرنِنٛگ ماڈِیُول",
      "features.module1.description": "ضروٗری مَوضوٗعَن ہیِوِتھ وُسُع پٲٹھؠ پاٹھ۔",
      "features.module2.title": "گیٖمفِکیشن",
      "features.module2.description": "نِشانَن، بیٛجَن، تہٕ لیڈَر بوڈَن سٟتؠ دِلچَسپ تَعلِم۔",
      "features.module3.title": "ذاتِی پٲٹھؠ تَعلِم",
      "features.module3.description": "اے آی یَس ہٕنٛدؠن طاقتورَن پٲٹھَن ہِنٛدؠ زِ تۄہِہ ہِنٛدؠ مۄکھِیَن رِفیعَن سٟتؠ چھِ یَژھہِتھ پَرَتھ یَم یَم آسِوَن۔",
    }
  },
  // Malayalam
  ml: {
    translation: {
      "greeting": "ജ്ഞാനോദയത്തിലേക്ക് സ്വാഗതം",
      "slogan": "ഡിജിറ്റൽ വിദ്യാഭ്യാസത്തിലൂടെ ഗ്രാമീണ യുവാക്കളെ ശാക്തീകരിക്കുക.",
      "cta": "ആരംഭിക്കുക",
      "features_heading": "ഞങ്ങളുടെ പ്രധാന സവിശേഷതകൾ",
      "features.module1.title": "കോർ പഠന മൊഡ്യൂളുകൾ",
      "features.module1.description": "അവശ്യ വിഷയങ്ങൾ ഉൾക്കൊള്ളുന്ന സമഗ്ര പാഠങ്ങൾ.",
      "features.module2.title": "ഗെയിമിഫിക്കേഷൻ",
      "features.module2.description": "പോയിന്റുകൾ, ബാഡ്ജുകൾ, ലീഡർബോർഡുകൾ എന്നിവ ഉപയോഗിച്ച് രസകരമായ പഠനം.",
      "features.module3.title": "വ്യക്തിഗത പഠനം",
      "features.module3.description": "നിങ്ങളുടെ വേഗതയ്ക്കും ശൈലിക്കും അനുസരിച്ച് മാറുന്ന AI-യുടെ സഹായത്തോടെയുള്ള പാതകൾ.",
    }
  },
  // Marathi
  mr: {
    translation: {
      "greeting": "ज्ञानोदयामध्ये आपले स्वागत आहे",
      "slogan": "डिजिटल शिक्षणासह ग्रामीण युवकांना सक्षम बनवणे.",
      "cta": "सुरू करा",
      "features_heading": "आमची प्रमुख वैशिष्ट्ये",
      "features.module1.title": "मुख्य शिक्षण मॉड्युल्स",
      "features.module1.description": "आवश्यक विषयांचा समावेश असलेले विस्तृत पाठ.",
      "features.module2.title": "गेमीफिकेशन",
      "features.module2.description": "पॉइंट्स, बॅज आणि लीडरबोर्डसह आकर्षक शिक्षण.",
      "features.module3.title": "वैयक्तिक शिक्षण",
      "features.module3.description": "तुमच्या गती आणि शैलीनुसार जुळवून घेणारे AI-संचालित मार्ग.",
    }
  },
  // Nepali
  ne: {
    translation: {
      "greeting": "ज्ञानोदयमा स्वागत छ",
      "slogan": "डिजिटल शिक्षाको साथ ग्रामीण युवाहरूलाई सशक्त बनाउने।",
      "cta": "सुरु गर्नुहोस्",
      "features_heading": "हाम्रो मुख्य विशेषताहरू",
      "features.module1.title": "कोर सिकाई मोड्युलहरू",
      "features.module1.description": "आवश्यक विषयहरू समेट्ने विस्तृत पाठहरू।",
      "features.module2.title": "गेमिफिकेशन",
      "features.module2.description": "अंक, ब्याज र लिडरबोर्डको साथ आकर्षक सिकाई।",
      "features.module3.title": "व्यक्तिगत सिकाई",
      "features.module3.description": "तपाईंको अद्वितीय गति र शैलीमा अनुकूलन हुने एआई-संचालित मार्गहरू।",
    }
  },
  // Odia
  or: {
    translation: {
      "greeting": "ଜ୍ଞାନୋଦୟକୁ ସ୍ୱାଗତ",
      "slogan": "ଡିଜିଟାଲ ଶିକ୍ଷା ସହିତ ଗ୍ରାମୀଣ ଯୁବକଙ୍କୁ ସଶକ୍ତ କରିବା।",
      "cta": "ଆରମ୍ଭ କରନ୍ତୁ",
      "features_heading": "ଆମର ମୁଖ୍ୟ ବ features ଶିଷ୍ଟ୍ୟ",
      "features.module1.title": "କୋର ଲର୍ନିଂ ମଡ୍ୟୁଲ୍",
      "features.module1.description": "ଅତ୍ୟାବଶ୍ୟକ ବିଷୟଗୁଡ଼ିକୁ ଅନ୍ତର୍ଭୁକ୍ତ କରି ବ୍ୟାପକ ଶିକ୍ଷା।",
      "features.module2.title": "ଗେମିଫିକେସନ୍",
      "features.module2.description": "ପଏଣ୍ଟ, ବ୍ୟାଜ୍ ଏବଂ ଲିଡରବୋର୍ଡ ସହିତ ଆକର୍ଷଣୀୟ ଶିକ୍ଷା।",
      "features.module3.title": "ବ୍ୟକ୍ତିଗତ ଶିକ୍ଷା",
      "features.module3.description": "ଆପଣଙ୍କର ଅନନ୍ୟ ଗତି ଏବଂ ଶ style ଳୀ ସହିତ ଖାପ ଖାଉଥିବା AI- ଚାଳିତ ପଥ।",
    }
  },
  // Sanskrit
  sa: {
    translation: {
      "greeting": "ज्ञानोदयम् प्रति स्वागतम्",
      "slogan": "डिजिटल-शिक्षया ग्रामीणयुवान् सशक्तं कुर्वन्तु।",
      "cta": "आरभ्यताम्",
      "features_heading": "अस्माकं मुख्यानि वैशिष्ट्यानि",
      "features.module1.title": "मुख्य शिक्षण-विभागाः",
      "features.module1.description": "आवश्यकविषयान् आच्छादयन्तः बृहत्पाठाः।",
      "features.module2.title": "क्रीडासमानशिक्षणम्",
      "features.module2.description": "अङ्कैः, बिल्लैः, तथा च नेतृत्वफलकैः सह आकर्षकं शिक्षणम्।",
      "features.module3.title": "वैयक्तिकशिक्षणम्",
      "features.module3.description": "भवतः अद्वितीयगतये शैल्याः च अनुकूलं कृत्रिमबुद्धिसञ्चालिताः मार्गाः।",
    }
  },
  // Sindhi
  sd: {
    translation: {
      "greeting": "گيانوڌي ۾ ڀليڪار",
      "slogan": "ڊجيٽل تعليم سان ڳوٺاڻن نوجوانن کي بااختيار بڻائڻ.",
      "cta": "شروع ڪريو",
      "features_heading": "اسان جون مکيه خاصيتون",
      "features.module1.title": "بنيادي سکيا ماڊيول",
      "features.module1.description": "لازمي مضمونن کي ڍڪڻ وارا جامع سبق.",
      "features.module2.title": "گيمنگ",
      "features.module2.description": "پوائنٽ، بيجز ۽ ليڊر بورڊ سان دلچسپ سکيا.",
      "features.module3.title": "ذاتي سکيا",
      "features.module3.description": "اي آءِ (AI) جي مدد سان اهڙا رستا جيڪي توهان جي رفتار ۽ انداز جي مطابق هجن.",
    }
  },
  // Tamil
  ta: {
    translation: {
      "greeting": "ஞானோதயம் வரவேற்கிறது",
      "slogan": "டிஜிட்டல் கல்வி மூலம் கிராமப்புற இளைஞர்களுக்கு அதிகாரமளித்தல்.",
      "cta": "தொடங்குங்கள்",
      "features_heading": "எங்கள் முக்கிய அம்சங்கள்",
      "features.module1.title": "முக்கிய கற்றல் தொகுதிகள்",
      "features.module1.description": "அத்தியாவசிய பாடங்களை உள்ளடக்கிய விரிவான பாடங்கள்.",
      "features.module2.title": "விளையாட்டுத் தன்மை",
      "features.module2.description": "புள்ளிகள், பேட்ஜ்கள் மற்றும் லீடர்போர்டுகளுடன் ஈர்க்கும் கற்றல்.",
      "features.module3.title": "தனிப்பயனாக்கப்பட்ட கற்றல்",
      "features.module3.description": "உங்கள் தனிப்பட்ட வேகம் மற்றும் பாணியுடன் பொருந்தக்கூடிய AI-உந்துதல் பாதைகள்.",
    }
  },
  // Telugu
  te: {
    translation: {
      "greeting": "జ్ఞానోదయానికి స్వాగతం",
      "slogan": "డిజిటల్ విద్యతో గ్రామీణ యువతను శక్తివంతం చేయడం.",
      "cta": "ప్రారంభించండి",
      "features_heading": "మా ప్రధాన లక్షణాలు",
      "features.module1.title": "కోర్ లెర్నింగ్ మాడ్యూల్స్",
      "features.module1.description": "అవసరమైన విషయాలను కవర్ చేసే సమగ్ర పాఠాలు.",
      "features.module2.title": "గేమిఫికేషన్",
      "features.module2.description": "పాయింట్లు, బ్యాడ్జ్‌లు మరియు లీడర్‌బోర్డ్‌లతో ఆకర్షణీయమైన అభ్యాసం.",
      "features.module3.title": "వ్యక్తిగత అభ్యాసం",
      "features.module3.description": "మీ ప్రత్యేకమైన వేగం మరియు శైలికి అనుగుణంగా AI-తో నడిచే మార్గాలు.",
    }
  },
  // Urdu
  ur: {
    translation: {
      "greeting": "گیانودے میں خوش آمدید",
      "slogan": "ڈیجیٹل تعلیم کے ساتھ دیہی نوجوانوں کو بااختیار بنانا۔",
      "cta": "شروع کریں",
      "features_heading": "ہماری اہم خصوصیات",
      "features.module1.title": "بنیادی سیکھنے کے ماڈیول",
      "features.module1.description": "ضروری مضامین کا احاطہ کرنے والے جامع اسباق۔",
      "features.module2.title": "گیمیفیکیشن",
      "features.module2.description": "پوائنٹس، بیجز اور لیڈر بورڈ کے ساتھ دل چسپ سیکھنا۔",
      "features.module3.title": "ذاتی سیکھنا",
      "features.module3.description": "اے آئی سے چلنے والے راستے جو آپ کی منفرد رفتار اور انداز کے مطابق ہوتے ہیں۔",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;