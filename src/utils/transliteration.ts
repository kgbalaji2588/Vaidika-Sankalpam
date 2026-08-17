/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Panchanga } from '../types';

export type SupportedLanguage = 'tamil' | 'hindi' | 'telugu' | 'malayalam' | 'kannada' | 'english';

export interface LanguageMeta {
  code: SupportedLanguage;
  label: string;
  nativeLabel: string;
}

export const SUPPORTED_LANGUAGES: LanguageMeta[] = [
  { code: 'tamil', label: 'Tamil', nativeLabel: 'தமிழ்' },
  { code: 'hindi', label: 'Hindi', nativeLabel: 'हिन्दी / देवनागरी' },
  { code: 'telugu', label: 'Telugu', nativeLabel: 'తెలుగు' },
  { code: 'kannada', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ' },
  { code: 'malayalam', label: 'Malayalam', nativeLabel: 'മലയാളം' },
  { code: 'english', label: 'English', nativeLabel: 'English / Roman' }
];

// Comprehensive Dictionary to translate any dynamic Panchanga parameter to the 6 scripts
export const PANCHANGA_TRANSLATIONS: Record<string, Record<SupportedLanguage, string>> = {
  // Samvatsaras
  "பராபவ (Parabhava)": {
    tamil: "பராபவ",
    hindi: "पराभव (Parabhava)",
    telugu: "పరాభవ (Parabhava)",
    kannada: "ಪರಾಭವ (Parabhava)",
    malayalam: "പരാഭവ (Parabhava)",
    english: "Parabhava"
  },
  "பிலவங்க (Plavanga)": {
    tamil: "பிலவங்க",
    hindi: "प्लवङ्ग (Plavanga)",
    telugu: "ప్లవంగ (Plavanga)",
    kannada: "ಪ್ಲವಂಗ (Plavanga)",
    malayalam: "പ്ലവംഗ (Plavanga)",
    english: "Plavanga"
  },
  "கீலக (Keelaka)": {
    tamil: "கீலக",
    hindi: "कीलक (Keelaka)",
    telugu: "కీలక (Keelaka)",
    kannada: "ಕೀಲಕ (Keelaka)",
    malayalam: "കീലക (Keelaka)",
    english: "Keelaka"
  },

  // Ayanas
  "தக்ஷிணாயணே (Dakshinayane)": {
    tamil: "தக்ஷிணாயணே",
    hindi: "दक्षिणायने (Dakshinayane)",
    telugu: "దక్షిణాయణే (Dakshinayane)",
    kannada: "ದಕ್ಷಿಣಾಯಣೇ (Dakshinayane)",
    malayalam: "ദക്ഷിണായണേ (Dakshinayane)",
    english: "Dakshinayane"
  },

  // Ritus
  "வர்ஷ (Varsha)": {
    tamil: "வர்ஷ",
    hindi: "वर्ष (Varsha)",
    telugu: "వర్ష (Varsha)",
    kannada: "ವರ್ಷ (Varsha)",
    malayalam: "വർഷ (Varsha)",
    english: "Varsha"
  },

  // Masas
  "ச்ராவண (Sravana)": {
    tamil: "ச்ராவண",
    hindi: "श्रावण (Sravana)",
    telugu: "శ్రావణ (Sravana)",
    kannada: "ಶ್ರಾವಣ (Sravana)",
    malayalam: "ശ്രാവണ (Sravana)",
    english: "Sravana"
  },

  // Pakshas
  "ஶுக்ல (Shukla)": {
    tamil: "ஶுக்ல",
    hindi: "शुक्ल (Shukla)",
    telugu: "శుక్ల (Shukla)",
    kannada: "ಶುಕ್ಲ (Shukla)",
    malayalam: "ശുക്ല (Shukla)",
    english: "Shukla"
  },

  // Tithis
  "பௌர்ணமாஸ்யாம்": {
    tamil: "பௌர்ணமாஸ்யாம் (பௌர்ணமி)",
    hindi: "पौर्णमास्याम् (पूर्णिमा)",
    telugu: "పౌర్ణమాస్యామ్ (పౌర్ణమి)",
    kannada: "ಪೌರ್ಣಮಾಸ್ಯಾಮ್ (ಪೌರ್ಣಮಿ)",
    malayalam: "പൌർണമാസ്യാം (പൌർണമി)",
    english: "Pournamasyam (Full Moon)"
  },
  "பௌர்ணமாஸ்யாம் (Pournami)": {
    tamil: "பௌர்ணமாஸ்யாம் (பௌர்ணமி)",
    hindi: "पौर्णमास्याम् (पूर्णिमा)",
    telugu: "పౌర్ణమాస్యామ్ (పౌర్ణమి)",
    kannada: "ಪೌರ್ಣಮಾಸ್ಯಾಮ್ (ಪೌರ್ಣಮಿ)",
    malayalam: "പൌർണമാസ്യാം (പൌർണമി)",
    english: "Pournamasyam"
  },
  "சதுர்தசி (Chaturdasi)": {
    tamil: "சதுர்தசி",
    hindi: "चतुर्दशी (Chaturdasi)",
    telugu: "చతుర్దశి (Chaturdasi)",
    kannada: "ಚತುರ್ದಶಿ (Chaturdasi)",
    malayalam: "ചതുർദശി (Chaturdasi)",
    english: "Chaturdasi"
  },
  "ப்ரதமை (Pratipat)": {
    tamil: "ப்ரதமை (ப்ரதிபாத்)",
    hindi: "प्रतिपत् (Pratipat)",
    telugu: "ప్రథమ (Pratipat)",
    kannada: "ಪ್ರಥಮ (Pratipat)",
    malayalam: "പ്രഥമ (Pratipat)",
    english: "Pratipat"
  },

  // Varas
  "ஸ்திர (Sthira - Saturday)": {
    tamil: "ஸ்திர வாஸரம் (சனிக்கிழமை)",
    hindi: "स्थिर वासरे (शनिवार)",
    telugu: "స్థిర వాసరే (శనివారము)",
    kannada: "ಸ್ಥಿರ ವಾಸರೇ (ಶನಿವಾರ)",
    malayalam: "സ്ഥിര വാസരേ (ശനിയാഴ്ച)",
    english: "Sthira Vasare (Saturday)"
  },
  "பானு (Bhanu - Sunday)": {
    tamil: "பானு வாஸரம் (ஞாயிற்றுக்கிழமை)",
    hindi: "भानु वासरे (रविवार)",
    telugu: "భాను వాసరే (ఆదివారము)",
    kannada: "ಭಾನು ವಾಸರೇ (ಆದಿವಾರ)",
    malayalam: "ഭാനു വാസരേ (ഞായറാഴ്ച)",
    english: "Bhanu Vasare (Sunday)"
  },
  "இந்து (Indu - Monday)": {
    tamil: "இந்து வாஸரம் (திங்கட்கிழமை)",
    hindi: "इन्दु वासरे (सोमवार)",
    telugu: "ఇందు వాసరే (సోమవారము)",
    kannada: "ಇಂದು ವಾಸರೇ (ಸೋಮವಾರ)",
    malayalam: "ഇന്ദു വാസരേ (തിങ്കളാഴ്ച)",
    english: "Indu Vasare (Monday)"
  },
  "பௌம (Bhauma - Tuesday)": {
    tamil: "பௌம வாஸரம் (செவ்வாய்க்கிழமை)",
    hindi: "भौम वासरे (मंगलवार)",
    telugu: "భౌమ వాసరే (మంగళవారము)",
    kannada: "ಭೌಮ ವಾಸರೇ (ಮಂಗಳವಾರ)",
    malayalam: "ഭൌമ വാസരേ (ചൊവ്വാഴ്ച)",
    english: "Bhauma Vasare (Tuesday)"
  },

  // Nakshatras
  "ஶ்ரவிஷ்டா (Dhanishtha)": {
    tamil: "ஶ்ரவிஷ்டா (அவிட்டம்)",
    hindi: "श्रविष्ठा (धनिष्ठा)",
    telugu: "శ్రవిష్ఠా (ధనిష్ఠ)",
    kannada: "ಶ್ರವಿಷ್ಠಾ (ಧನಿಷ್ಠ)",
    malayalam: "ശ്രവിഷ്ഠാ (അവിട്ടം)",
    english: "Shravistha (Dhanishtha)"
  },
  "அவிட்டம் (Avittam - Early)": {
    tamil: "அவிட்டம் (துவக்கம்)",
    hindi: "श्रविष्ठा (धनिष्ठा - पूर्व भाग)",
    telugu: "ధనిష్ఠ (ప్రారంభము)",
    kannada: "ಧನಿಷ್ಠ (ಆರಂಭ)",
    malayalam: "അവിട്ടം (തുടക്കം)",
    english: "Shravistha (Dhanishtha - Early)"
  },
  "அவிட்டம் (Avittam)": {
    tamil: "அவிட்டம்",
    hindi: "श्रविष्ठा (धनिष्ठा)",
    telugu: "ధనిష్ఠ",
    kannada: "ಧನಿಷ್ಠ",
    malayalam: "അവിട്ടം",
    english: "Shravistha (Dhanishtha)"
  },
  "ஶ்ரவண": {
    tamil: "ஶ்ரவண (திருவோணம்)",
    hindi: "श्रवण (Sravana)",
    telugu: "శ్రవణ (Sravanam)",
    kannada: "ಶ್ರವಣ (Sravanam)",
    malayalam: "ശ്രവണ (തിരുവോണം)",
    english: "Sravana"
  },
  "ஶ்ரவண (Sravanam)": {
    tamil: "ஶ்ரவண (திருவோணம்)",
    hindi: "श्रवण (Sravana)",
    telugu: "శ్రవణ (Sravanam)",
    kannada: "ಶ್ರವಣ (Sravanam)",
    malayalam: "ശ്രവണ (തിരുവോണം)",
    english: "Sravana"
  },
  "ஶதபிஷக்": {
    tamil: "ஶதபிஷக் (சதயம்)",
    hindi: "शतभिषक् (Shatabhisha)",
    telugu: "శతభిషక్ (Shatabhisham)",
    kannada: "ಶತಭಿಷಕ್ (Shatabhisham)",
    malayalam: "ശതഭിഷക് (ചതയം)",
    english: "Shatabhisha"
  },

  // Yogas
  "அதிகண்ட (Atiganda)": {
    tamil: "அதிகண்ட யோகம்",
    hindi: "अतिगण्ड योग (Atiganda)",
    telugu: "అతిగండ యోగము (Atiganda)",
    kannada: "ಅತಿಗಂಡ ಯೋಗ (Atiganda)",
    malayalam: "അതിഗണ്ഡ യോഗം (Atiganda)",
    english: "Atiganda Yoga"
  },
  "ஸுகர்ம (Sukarma)": {
    tamil: "ஸுகர்ம யோகம்",
    hindi: "सुकर्म योग (Sukarma)",
    telugu: "सुकर्म योगमु (Sukarma)",
    kannada: "ಸುಕರ್ಮ ಯೋಗ (Sukarma)",
    malayalam: "സുകർമ യോഗം (Sukarma)",
    english: "Sukarma Yoga"
  },
  "ஸுகர்ம (Sidhya Shift)": {
    tamil: "ஸுகர்ம யோகம் (சித்திய வரம்பு)",
    hindi: "सुकर्म योग (सिद्ध्य संक्रान्ति)",
    telugu: "సుకర్మ యోగము (సిద్ధ్య మార్పు)",
    kannada: "ಸುಕರ್ಮ ಯೋಗ (ಸಿದ್ದ್ಯ ವರ್ಗಾವಣೆ)",
    malayalam: "സുകർമ യോഗം (സിദ്ധ്യ മാറ്റം)",
    english: "Sukarma (Sidhya Shift)"
  },
  "ஶோபன (Sobhana)": {
    tamil: "ஶோபன யோகம்",
    hindi: "शोभन योग (Sobhana)",
    telugu: "శోభన యోగము (Sobhana)",
    kannada: "ಶೋಭನ ಯೋಗ (Sobhana)",
    malayalam: "ശോഭന യോഗം (Sobhana)",
    english: "Sobhana Yoga"
  },
  "ஶோபன (Amrita Shift)": {
    tamil: "ஶோபன யோகம் (அமிர்த வரம்பு)",
    hindi: "शोभन योग (अमृत संक्रान्ति)",
    telugu: "శోభన యోగము (అమృత మార్పు)",
    kannada: "ಶೋಭನ ಯೋಗ (ಅಮೃತ ವರ್ಗಾವಣೆ)",
    malayalam: "ശോഭന യോഗം (അമൃത മാറ്റം)",
    english: "Sobhana (Amrita Shift)"
  },

  // Karanas
  "பவ": {
    tamil: "பவ கரணம்",
    hindi: "बव करण (Bava)",
    telugu: "బవ కరణము (Bava)",
    kannada: "ಬವ ಕರಣ (Bava)",
    malayalam: "ബവ കരണം (Bava)",
    english: "Bava Karana"
  },
  "பவ (Bava)": {
    tamil: "பவ கரணம்",
    hindi: "बव करण (Bava)",
    telugu: "బవ కరణము (Bava)",
    kannada: "ಬವ ಕರಣ (Bava)",
    malayalam: "ബവ കരണം (Bava)",
    english: "Bava Karana"
  },
  "பாலவ (Balava)": {
    tamil: "பாலவ கரணம்",
    hindi: "बालव करण (Balava)",
    telugu: "బాలవ కరణము (Balava)",
    kannada: "ಬಾಲವ ಕರಣ (Balava)",
    malayalam: "ബാലവ കരണം (Balava)",
    english: "Balava Karana"
  },
  "வணிஜ": {
    tamil: "வணிஜ கரணம்",
    hindi: "वणिज करण (Vanija)",
    telugu: "వణిజ కరణము (Vanija)",
    kannada: "ವಣಿಜ ಕರಣ (Vanija)",
    malayalam: "വണിജ കരണം (Vanija)",
    english: "Vanija Karana"
  },
  "கரஸை (Karasa)": {
    tamil: "கரஸை கரணம்",
    hindi: "कौलव/तैतिल करण (Kaulava/Taitila)",
    telugu: "కౌలవ కరణము (Kaulava)",
    kannada: "ಕೌಲವ ಕರಣ (Kaulava)",
    malayalam: "കൌലവ കരണം (Kaulava)",
    english: "Kaulava Karana"
  }
};

// Returns a language-specific display text for dynamic Panchanga parameters
export function translateParam(paramName: string, value: string, lang: SupportedLanguage): string {
  if (!value) return '';
  const key = value.trim();
  if (PANCHANGA_TRANSLATIONS[key] && PANCHANGA_TRANSLATIONS[key][lang]) {
    return PANCHANGA_TRANSLATIONS[key][lang];
  }
  
  // Clean fallback: remove Tamil script portion for English
  if (lang === 'english') {
    return value.replace(/[\u0B80-\u0BFF]+/g, '').replace(/[\(\)]/g, '').trim();
  }
  return value;
}

// Complete Multilingual Templates for both Yajur Upakarma and Gayatri Japam
export interface MultilingualSection {
  title: string;
  content: string;
  isFixed: boolean;
}

// Helper to provide the perfect localized content
export function getLocalizedTemplate(
  lang: SupportedLanguage,
  type: 'upakarma' | 'gayatri'
): MultilingualSection[] {
  if (type === 'upakarma') {
    return getUpakarmaTemplate(lang);
  } else {
    return getGayatriTemplate(lang);
  }
}

function getUpakarmaTemplate(lang: SupportedLanguage): MultilingualSection[] {
  switch (lang) {
    case 'hindi':
      return [
        {
          title: "आचमनम् (Achamanam)",
          content: `ॐ अच्युताय नमः\nॐ अनन्ताय नमः\nॐ गोविन्दाय नमः\n\nइति आचम्य, केशव-कीर्तनादि अनुष्ठानं कुर्यात्। स्वस्य नित्यसन्ध्यावन्दने विहितमाचमनमेव अत्रापि अनुसरणीयम्।`,
          isFixed: true
        },
        {
          title: "प्राणायामः (Pranayamam)",
          content: `पवित्रं धृत्वा प्राणायामं कुर्यात्।\n\nॐ भूः ॐ भुवः ॐ सुवः ॐ महः ॐ जनः ॐ तपः ॐ सत्यम्\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्\nॐ आपो ज्योतीरसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम्`,
          isFixed: true
        },
        {
          title: "श्रीवैष्णव गुरुपरम्परा अनुसन्धानम्",
          content: `श्रीमन् वेङ्कटनाथार्यः कविताार्किक केसरी ।\nवेदान्ताचार्य वर्यो मे सन्निधत्तां सदा हृदि ॥\n\nगुरुभ्यस्तद् गुरुभ्यश्च नमो वागमधीमहे ।\nवृणीमहे च तत्राद्यौ दम्पती जगताम् पती ॥\n\nस्वशेषभूतेन मया स्वीयैः सर्वपरिच्छदैः ।\nविधातुं प्रीतमात्मानं देवः प्रक्रमते स्वयम् ॥`,
          isFixed: true
        },
        {
          title: "विष्वक्सेन ध्यानम्",
          content: `शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये ॥\n\nयस्य द्विरद वक्त्राद्याः पारिषद्याः परःशतम् ।\nविघ्नं निघ्नन्ति सततं विष्वक्सेनं तमाश्रये ॥`,
          isFixed: true
        },
        {
          title: "महासङ्कल्पः (Maha Sankalpam)",
          content: `हरिः ॐ तत्\nश्री गोविन्द, गोविन्द, गोविन्द\n\nअस्य श्री भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य\nआद्य ब्रह्मणः द्वितीय परार्धे श्री श्वेतवाराह कल्पे\nवैवस्वत मन्वन्तरे कलियुगे प्रथमे पादे\nजम्बूद्वीपे भारतवर्षे भरतखण्डे\nशकाब्दे मेरोर्दक्षिणे पार्श्वे अस्मिन वर्तमाने व्यावहारिके\nप्रभवादि षष्टि संवत्सराणाम् मध्ये\n\n{{SAMVATSARA}} नाम संवत्सरे\n\n{{AYANA}}\n\n{{RITU}} ऋतौ\n\n{{MASA}} मासे\n\n{{PAKSHA}} पक्षे\n\n{{TITHI}}\n\n{{VARA}} वासरे\n\n{{NAKSHATRA}} नक्षत्र युक्तायाम्\n\n{{YOGA}} योगे\n\n{{KARANA}} करणे\n\nएवङ्गुण विशेषण विशिष्टायाम् अस्याम्\n\n{{TITHI}} शुभ तिथौ\n\nश्री भगवदाज्ञा श्रीमन्नारायण प्रीत्यर्थम्`,
          isFixed: false
        },
        {
          title: "यज्ञोपवीत धारणम् (Yajñopaveeta Dharanam)",
          content: `मम श्रौतस्मार्त विहित नित्यकर्मानुष्ठान योग्यता सिद्ध्यर्थं यज्ञोपवीत धारणम् करिष्ये।\n\n---\n\n### विनियोगः\n\nयज्ञोपवीत धारण महामन्त्रस्य\nब्रह्मा ऋषिः, त्रिष्टुप् छन्दः, त्रयी विद्या देवता,\nयज्ञोपवीत धारणे विनियोगः\n\n---\n\n### यज्ञोपवीत मन्त्रः\n\nयज्ञोपवीतं परमं पवित्रं प्रजापतेर्यत्सहजं पुरस्तात् ।\nआयुष्यमग्र्यं प्रतिमुञ्च शुभ्रं यज्ञोपवीतं बलमस्तु तेजः ॥\n\n---\n\n### द्वितीय यज्ञोपवीतम् (विवाहितानां कृते)\n\nगार्हस्थ्य सिद्ध्यर्थं द्वितीय यज्ञोपवीत धारणम् करिष्ये`,
          isFixed: true
        },
        {
          title: "जीर्ण यज्ञोपवीत विसर्जनम्",
          content: `नवीन यज्ञोपवीत धारणेन अनन्तरं जीर्णं परित्यजेत्।\n\nउपवीतं भिन्नतन्तुं जीर्णं कश्मलदूषितम् ।\nविसृजामि यशो वर्चः दीर्घायुरस्तु मे बलम् ॥\n\nइति जीर्णोपवीतं विसृज्य आचम्य प्रणामां कुर्यात्।`,
          isFixed: true
        },
        {
          title: "कामोऽकार्षीत् मन्युरकार्षीत् जपः",
          content: `अध्यायोत्सर्जन अकरण प्रायश्चित्तार्थं\nअष्टोत्तर सहस्र संख्यकं (१००८) अथवा अष्टोत्तर शत संख्यकं (१०८)\n\"कामोऽकार्षीत् मन्युरकार्षीत्\" इति मन्त्र जपम् करिष्ये।\n\n---\n\nकामोऽकार्षीत् मन्युरकार्षीत्\n\n(जपमेतद् यथाशक्ति १०८ वारं वा १००८ वारं वा विधेयम्)`,
          isFixed: true
        },
        {
          title: "काण्डर्षि तर्पणम् सङ्कल्पः",
          content: `श्रावण्यां पौर्णमास्यां अध्यायोपाकर्म करिष्ये।\nतदङ्गं कावेरी स्नानमहं करिष्ये।\nतदङ्गं यज्ञोपवीत धारणम् करिष्ये।\nतदङ्गं मौञ्जी अजिन धारणानि करिष्ये।\nतदङ्गं काण्डर्षि तर्पणम् करिष्ये।`,
          isFixed: true
        },
        {
          title: "काण्डर्षि तर्पणम् (Kanda Rishi Tarpanam)",
          content: `प्रजापतिं काण्डर्षिं तर्पयामि × ३\nसोमं काण्डर्षिं तर्पयामि × ३\nअग्निं काण्डर्षिं तर्पयामि × ३\nविश्वान् देवान् काण्डर्षीन् तर्पयामि × ३\nसंहितीर् देवताः उपनिषदस् तर्पयामि × ३\nयाज्ञिकीर् देवताः उपनिषदस् तर्पयामि × ३\nवारुणीर् देवताः उपनिषदस् तर्पयामि × ३\n\n---\n\n### ब्रह्मतीर्थम्\n\nब्रह्माणं स्वयम्भुवं तर्पयामि × ३\nसदसस्पतिं तर्पयामि × ३\n\n---\n\n### वैदिक तर्पणानि\n\nवेदं तर्पयामि\nइतिहासम् तर्पयामि\nपुराणम् तर्पयामि\nकल्पम् तर्पयामि`,
          isFixed: true
        },
        {
          title: "उपसंहारः (Conclusion)",
          content: `पवित्रं विसृज्य आचामेत् (वारद्वयम्)।\nततः आचार्यान्, गुरुजनान् च नमस्कृत्य आशिषः लभेत्।`,
          isFixed: true
        }
      ];

    case 'telugu':
      return [
        {
          title: "ఆచమనము (Achamanam)",
          content: `ఓం అచ్యుతాయ నమః\nఓం అనంతాయ నమః\nఓం గోవిందాయ నమః\n\nఅని చెప్పుచు ఆచమనము చేసి, కేశవ నామాదులను ఉచ్చరించవలెను. మీ నిత్య సంధ్యావందన పద్ధతినే ఇక్కడ అనుసరించుట శ్రేష్ఠము.`,
          isFixed: true
        },
        {
          title: "ప్రాణాయామము (Pranayamam)",
          content: `పవిత్రమును ధరించి ప్రాణాయామము చేయవలెను.\n\nఓం భూః ఓం భువః ఓం సువః ఓం మహః ఓం జనః ఓం తపః ఓం సత్యమ్\nఓం తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి ధియో యో నః ప్రచోదయాత్\nఓం ఆపో జ్యోతీరసోऽమృతం బ్రహ్మ భూర్భువస్సువరోమ్`,
          isFixed: true
        },
        {
          title: "శ్రీవైష్ణవ గురు పరంపరా అనుసంధానమ్",
          content: `శ్రీమన్ వేంకటనాథార్యః కవితార్కిక కేసరీ ।\nవేదాంతాచార్య వర్యో మే సన్నిధత్తాం సదా హృది ॥\n\nగురుభ్యస్తద్ గురుభ్యశ్చ నమో వాగమధీమహే ।\nవృణీమహే చ తత్రాద్యౌ దంపతీ జగతామ్ పతీ ॥\n\nస్వశేషభూతేన మయా స్వీయైః సర్వపరిచ్ఛదైః ।\nవిధాతుం ప్రీతమాత్మానం దేవః ప్రక్రమతే స్వయమ్ ॥`,
          isFixed: true
        },
        {
          title: "విష్వక్సేన ధ్యానమ్",
          content: `శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ ।\nప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ॥\n\nయస్య ద్విరద వక్త్రాద్యాః పారిషద్యాః పరశ్శతమ్ ।\nవిఘ్నం నిఘ్నంతి సతతం విష్వక్సేనం తమాశ్రయే ॥`,
          isFixed: true
        },
        {
          title: "మహా సంకల్పము (Maha Sankalpam)",
          content: `హరిః ఓం తత్\nశ్రీ గోవింద, గోవింద, గోవింద\n\nఅస్య శ్రీ భగవతో మహాపురుషస్య విష్ణోరాజ్ఞయా ప్రవర్తమానస్య\nఆద్య బ్రహ్మణః ద్వితీయ పరార్ధే శ్రీ శ్వేతవరాహ కల్పే\nవైవస్వత మన్వంతరే కలియుగే ప్రథమే పాదే\nజంబూద్వీపే భారతవర్షే భరతఖండే\nశకాబ్దే మేరోర్దక్షిణే పార్శ్వే అస్మిన్ వర్తమానే వ్యావహారికే\nప్రభవాది షష్టి సంవత్సరాణామ్ మధ్యే\n\n{{SAMVATSARA}} నామ సంవత్సరే\n\n{{AYANA}}\n\n{{RITU}} రుతౌ\n\n{{MASA}} మాసే\n\n{{PAKSHA}} పక్షే\n\n{{TITHI}}\n\n{{VARA}} వాసరే\n\n{{NAKSHATRA}} నక్షత్ర యుక్తాయామ్\n\n{{YOGA}} యోగే\n\n{{KARANA}} కరణే\n\nఏవంగుణ విశేషణ విశిష్టాయామ్ అస్యామ్\n\n{{TITHI}} శుభ తిథౌ\n\nశ్రీ భగవదాజ్ఞా శ్రీమన్నారాయణ ప్రీత్యర్థమ్`,
          isFixed: false
        },
        {
          title: "యజ్ఞోపవీత ధారణము (Yajñopaveeta Dharanam)",
          content: `మమ శ్రౌతస్మార్త విహిత నిత్యకర్మానుష్ఠాన యోగ్యతా సిద్ధ్యర్థం యజ్ఞోపవీత ధారణమ్ కరిష్యే.\n\n---\n\n### వినియోగము\n\nయజ్ఞోపవీత ధారణ మహామంత్రస్య\nబ్రహ్మ ఋషిః, త్రిష్టుప్ ఛందః, త్రయీ విద్యా దేవతా,\nయజ్ఞోపవీత ధారణే వినియోగః\n\n---\n\n### యజ్ఞోపవీత మంత్రము\n\nయజ్ఞోపవీతం పరమం పవిత్రం ప్రజాపతేర్యత్సహజం పురస్తాత్ ।\nఆయుష్యమగ్ర్యం ప్రతిముంచ శుభ్రం యజ్ఞోపవీతం బలమస్తు తేజః ॥\n\n---\n\n### ద్వితీయ యజ్ఞోపవీతము (వివాహితులకు)\n\nగార్హస్థ్య సిద్ధ్యర్థం ద్వితీయ యజ్ఞోపవీత ధారణమ్ కరిష్యే`,
          isFixed: true
        },
        {
          title: "జీర్ణ యజ్ఞోపవీత విసర్జనము",
          content: `నూతన యజ్ఞోపవీతమును ధరించిన పిమ్మట పాతదానిని తొలగించవలెను.\n\nఉపవీతం భిన్నతంతుం జీర్ణం కశ్మలదూషితమ్ ।\nవిసృజామి యశో వర్చః దీర్ఘాయురస్తు మే బలమ్ ॥\n\nదీనిని మీ గృహ పద్ధతిలో విసర్జించవలెను. అనంతరం ఆచమనం చేయవలెను.`,
          isFixed: true
        },
        {
          title: "కామోऽకార్షీత్ మన్యురకార్షీత్ జపము",
          content: `అధ్యాయోత్సర్జన అకరణ ప్రాయశ్చిత్తార్థం\nఅష్టోత్తర సహస్ర సంఖ్యాకమ్ (1008) లేదా అష్టోత్తర శత సంఖ్యాకమ్ (108)\n\"కామోऽకార్షీత్ మన్యురకార్షీత్\" ఇతి మంత్ర జపమ్ కరిష్యే.\n\n---\n\nకామోऽకార్షీత్ మన్యురకార్షీత్\n\n(ఈ మంత్రమును మీ వీలును బట్టి 108 లేదా 1008 సార్లు జపించవలెను)`,
          isFixed: true
        },
        {
          title: "కాండర్షి తర్పణ సంకల్పములు",
          content: `శ్రావణ్యాం పౌర్ణమాస్యాం అధ్యాయోపాకర్మ కరిష్యే.\nతదంగం కావేరీ స్నానమహం కరిష్యే.\nతదంగం యజ్ఞోపవీత ధారణమ్ కరిష్యే.\nతదంగం మౌంజీ అజిన ధారణాని కరిష్యే.\nతదంగం కాండర్షి తర్పణమ్ కరిష్యే.`,
          isFixed: true
        },
        {
          title: "కాండర్షి తర్పణము (Kanda Rishi Tarpanam)",
          content: `ప్రజాపతిం కాండర్షిం తర్పయామి × 3\nసోమం కాండర్షిం తర్పయామి × 3\nఅగ్నిం కాండర్షిం తర్పయామి × 3\nవిశ్వాన్ దేవాన్ కాండర్షీన్ తర్పయామి × 3\nసంహితీర్ దేవతాః ఉపనిషదస్ తర్పయామి × 3\nయాజ్ఞికీర్ దేవతాః ఉపనిషదస్ తర్పయామి × 3\nవారుణీర్ దేవతాః ఉపనిషదస్ తర్పయామి × 3\n\n---\n\n### బ్రహ్మతీర్థము\n\nబ్రహ్మాణం స్వయంభువం తర్పయామి × 3\nసదసస్పతిం తర్పయామి × 3\n\n---\n\n### వైదిక తర్పణములు\n\nవేదం తర్పయామి\nఇతిహాసం తర్పయామి\nపురాణం తర్పయామి\nకల్పం తర్పయామి`,
          isFixed: true
        },
        {
          title: "ముగింపు (Conclusion)",
          content: `పవిత్రమును తీసివేసి రెండు సార్లు ఆచమనం చేయవలెను.\nపిమ్మట ఆచార్యులకు, పెద్దలకు నమస్కరించి ఆశీర్వాదములు పొందవలెను.`,
          isFixed: true
        }
      ];

    case 'kannada':
      return [
        {
          title: "ಆಚಮನಮ್ (Achamanam)",
          content: `ಓಂ ಅಚ್ಯುತಾಯ ನಮಃ\nಓಂ ಅನಂತಾಯ ನಮಃ\nಓಂ ಗೋವಿಂದಾಯ ನಮಃ\n\nಎಂದು ಹೇಳಿ ಆಚಮನವನ್ನು ಮಾಡಿ, ಕೇಶವ ನಾಮಗಳನ್ನು ಉಚ್ಚರಿಸಬೇಕು. ನಿಮ್ಮ ನಿತ್ಯ ಸಂಧ್ಯಾವಂದನೆಯ ಆಚಮನ ಪದ್ಧತಿಯನ್ನೇ ಇಲ್ಲಿ ಅನುಸರಿಸುವುದು ಶ್ರೇಷ್ಠ.`,
          isFixed: true
        },
        {
          title: "ಪ್ರಾಣಾಯಾಮಃ (Pranayamam)",
          content: `ಪವಿತ್ರವನ್ನು ಧರಿಸಿ ಪ್ರಾಣಾಯಾಮವನ್ನು ಮಾಡಬೇಕು.\n\nಓಂ ಭೂಃ ಓಂ ಭುವಃ ಓಂ ಸುವಃ ಓಂ ಮಹಃ ಓಂ ಜನಃ ಓಂ ತಪಃ ಓಂ ಸತ್ಯಮ್\nಓಂ ತತ್ಸವಿತುರ್ವರೇಣ್ಯಂ ಭರ್ಗೋ ದೇವಸ್ಯ ಧೀಮಹಿ ಧಿಯೋ ಯೋ ನಃ ಪ್ರಚೋದಯಾತ್\nಓಂ ಆಪೋ ಜ್ಯೋತೀರಸೋऽಮೃತಂ ಬ್ರಹ್ಮ ಭೂರ್ಭುವಸ್ಸುವರೋಮ್`,
          isFixed: true
        },
        {
          title: "ಶ್ರೀವೈಷ್ಣವ ಗುರುಪರಂಪರಾ ಅನುಸಂಧಾನಮ್",
          content: `ಶ್ರೀಮನ್ ವೇಂಕಟನಾಥಾರ್ಯಃ ಕವಿತಾರ್ಕಿಕ ಕೇಸರೀ ।\nವೇದಾಂತಾಚಾರ್ಯ ವರ್ಯೋ ಮೇ ಸನ್ನಿಧತ್ತಾಂ ಸದಾ ಹೃದಿ ॥\n\nಗುರುಭ್ಯಸ್ತದ್ ಗುರುಭ್ಯಶ್ಚ ನಮೋ ವಾಗಮಧೀಮಹೇ ।\nವೃಣೀಮಹೇ ಚ ತತ್ರಾದ್ಯೌ ದಂಪತೀ ಜಗತಾಮ್ ಪತೀ ॥\n\nಸ್ವಶೇಷಭೂತೇನ ಮಯಾ ಸ್ವೀಯೈಃ ಸರ್ವಪರಿಚ್ಛದೈಃ ।\nವಿಧಾತುಂ ಪ್ರೀತಮಾತ್ಮಾನಂ ದೇವಃ ಪ್ರಕ್ರಮತೇ ಸ್ವಯಮ್ ॥`,
          isFixed: true
        },
        {
          title: "ವಿಷ್ವಕ್ಸೇನ ಧ್ಯಾನಮ್",
          content: `ಶುಕ್ಲಾಂಬರಧರಂ ವಿಷ್ಣುಂ ಶಶಿವರ್ಣಂ ಚತುರ್ಭುಜಮ್ ।\nಪ್ರಸನ್ನವದನಂ ಧ್ಯಾಯೇತ್ ಸರ್ವವಿಘ್ನೋಪಶಾಂತಯೇ ॥\n\nಯಸ್ಯ ದ್ವಿರದ ವಕ್ತ್ರಾದ್ಯಾಃ ಪಾರಿಷದ್ಯಾಃ ಪರಶ್ಯತಮ್ ।\nವಿಘ್ನಂ ನಿಘ್ನಂತಿ ಸತತಂ ವಿಷ್ವಕ್ಸೇನಂ ತಮಾಶ್ರಯೇ ॥`,
          isFixed: true
        },
        {
          title: "ಮಹಾಸಂಕಲ್ಪಃ (Maha Sankalpam)",
          content: `ಹರಿಃ ಓಂ ತತ್\nಶ್ರೀ ಗೋವಿಂದ, ಗೋವಿಂದ, ಗೋವಿಂದ\n\nಅಸ್ಯ ಶ್ರೀ ಭಗವತೋ ಮಹಾಪುರುಷಸ್ಯ ವಿಷ್ಣೋರಾಜ್ಞಯಾ ಪ್ರವರ್ತಮಾನಸ್ಯ\nಆದ್ಯ ಬ್ರಹ್ಮಣಃ ದ್ವಿತೀಯ ಪರಾರ್ಧೇ ಶ್ರೀ ಶ್ವೇತವರಾಹ ಕಲ್ಪೇ\nವೈವಸ್ವತ ಮನ್ವಂತರೇ ಕಲಿಯುಗೇ ಪ್ರಥಮೇ ಪಾದೇ\nಜಂಬೂದ್ವೀಪೇ ಭಾರತವರ್ಷೇ ಭರತಖಂಡೇ\nಶಕಾಬ್ದೇ ಮೇರೋರ್ದಕ್ಷಿಣೇ ಪಾರ್ಶ್ವೇ ಅಸ್ಮಿನ್ ವರ್ತಮಾನೇ ವ್ಯಾವಹಾರಿಕೇ\nಪ್ರಭವಾದಿ ಷಷ್ಟಿ ಸಂವತ್ಸರಾಣಾಮ್ ಮಧ್ಯೇ\n\n{{SAMVATSARA}} ನಾಮ ಸಂವತ್ಸರೇ\n\n{{AYANA}}\n\n{{RITU}} ರುತೌ\n\n{{MASA}} ಮಾಸೇ\n\n{{PAKSHA}} ಪಕ್ಷೇ\n\n{{TITHI}}\n\n{{VARA}} ವಾಸರೇ\n\n{{NAKSHATRA}} ನಕ್ಷತ್ರ ಯುಕ್ತಾಯಾಮ್\n\n{{YOGA}} ಯೋಗೇ\n\n{{KARANA}} ಕರಣೇ\n\nಏವಂಗುಣ ವಿಶೇಷಣ ವಿಶಿಷ್ಟಾಯಾಮ್ ಅಸ್ಯಾಮ್\n\n{{TITHI}} ಶುಭ ತಿಥೌ\n\nಶ್ರೀ ಭಗವದಾಜ್ಞಾ ಶ್ರೀಮನ್ನಾರಾಯಣ ಪ್ರೀತ್ಯರ್ಥಮ್`,
          isFixed: false
        },
        {
          title: "ಯಜ್ಞೋಪವೀತ ಧಾರಣಮ್ (Yajñopaveeta Dharanam)",
          content: `ಮಮ ಶ್ರೌತಸ್ಮಾರ್ತ ವಿಹಿತ ನಿತ್ಯಕರ್ಮಾನುಷ್ಠಾನ ಯೋಗ್ಯತಾ ಸಿದ್ಧ್ಯರ್ಥಂ ಯಜ್ಞೋಪವೀತ ಧಾರಣಮ್ ಕರಿಷ್ಯೇ.\n\n---\n\n### ವಿನಿಯೋಗಃ\n\nಯಜ್ಞೋಪವೀತ ಧಾರಣ ಮಹಾಮಂತ್ರಸ್ಯ\nಬ್ರಹ್ಮ ಋಷಿಃ, ತ್ರಿಷ್ಟುಪ್ ಛಂದಃ, ತ್ರಯೀ ವಿದ್ಯಾ ದೇವತಾ,\nಯಜ್ಞೋಪವೀತ ಧಾರಣೇ ವಿನಿಯೋಗಃ\n\n---\n\n### ಯಜ್ಞೋಪವೀತ ಮಂತ್ರಃ\n\nಯಜ್ಞೋಪವೀತಂ ಪರಮಂ ಪವಿತ್ರಂ ಪ್ರಜಾಪತೇರ್ಯತ್ಸಹಜಂ ಪುರಸ್ತಾತ್ ।\nಆಯುಷ್ಯಮಗ್ರ್ಯಂ ಪ್ರತಿಮುಂಚ ಶುಭ್ರಂ ಯಜ್ಞೋಪವೀತಂ ಬಲಮಸ್ತು ತೇಜಃ ॥\n\n---\n\n### ದ್ವಿತೀಯ ಯಜ್ಞೋಪವೀತಮ್ (ವಿವಾಹಿತರಿಗೆ)\n\nಗಾರ್ಹಸ್ಥ್ಯ ಸಿದ್ಧ್ಯರ್ಥಂ ದ್ವಿತೀಯ ಯಜ್ಞೋಪವೀತ ಧಾರಣಮ್ ಕರಿಷ್ಯೇ`,
          isFixed: true
        },
        {
          title: "ಜೀರ್ಣ ಯಜ್ಞೋಪವೀತ ವಿಸರ್ಜನಮ್",
          content: `ಹೊಸ ಯಜ್ಞೋಪವೀತವನ್ನು ಧರಿಸಿದ ನಂತರ ಹಳೆಯದನ್ನು ವಿಸರ್ಜಿಸಬೇಕು.\n\nಉಪವೀತಂ ಭಿನ್ನತಂತುಂ ಜೀರ್ಣಂ ಕಶ್ಮಲದೂಷಿತಮ್ ।\nವಿಸೃಜಾಮಿ ಯಶೋ ವರ್ಚಃ ದೀರ್ಘಾಯುರಸ್ತು ಮೇ ಬಲಮ್ ॥\n\nಇದನ್ನು ನಿಮ್ಮ ಮನೆತನದ ಪದ್ಧತಿಯಂತೆ ವಿಸರ್ಜಿಸಿ ಆಚಮನವನ್ನು ಮಾಡಬೇಕು.`,
          isFixed: true
        },
        {
          title: "ಕಾಮೋऽಕಾರ್ಷೀತ್ ಮನ್ಯುರಕಾರ್ಷೀತ್ ಜಪಃ",
          content: `ಅಧ್ಯಾಯೋತ್ಸರ್ಜನ ಅಕರಣ ಪ್ರಾಯಶ್ಚಿತ್ತಾರ್ಥಂ\nಅಷ್ಟೋತ್ತರ ಸಹಸ್ರ ಸಂಖ್ಯಾಕಮ್ (೧೦೦೮) ಅಥವಾ ಅಷ್ಟೋತ್ತರ ಶತ ಸಂಖ್ಯಾಕಮ್ (೧೦೮)\n\"ಕಾಮೋऽಕಾರ್ಷೀತ್ ಮನ್ಯುರಕಾರ್ಷೀತ್\" ಇತಿ ಮಂತ್ರ ಜಪಮ್ ಕರಿಷ್ಯೇ.\n\n---\n\nಕಾಮೋऽಕಾರ್ಷೀತ್ ಮನ್ಯುರಕಾರ್ಷೀತ್\n\n(ಈ ಮಂತ್ರವನ್ನು ನಿಮ್ಮ ಶಕ್ತಿಯನುಸಾರ ೧೦೮ ಅಥವಾ ೧೦೦೮ ಬಾರಿ ಜಪಿಸಬೇಕು)`,
          isFixed: true
        },
        {
          title: "ಕಾಂಡರ್ಷಿ ತರ್ಪಣ ಸಂಕಲ್ಪಗಳು",
          content: `ಶ್ರಾವಣ್ಯಾಂ ಪೌರ್ಣಮಾಸ್ಯಾಂ ಅಧ್ಯಾಯೋಪಾಕರ್ಮ ಕರಿಷ್ಯೇ.\nತದಂಗಂ ಕಾವೇರೀ ಸ್ನಾನಮಹಂ ಕರಿಷ್ಯೇ.\nತದಂಗಂ ಯಜ್ಞೋಪವೀತ ಧಾರಣಮ್ ಕರಿಷ್ಯೇ.\nತದಂಗಂ ಮೌಂಜೀ ಅಜಿನ ಧಾರಣಾನಿ ಕರಿಷ್ಯೇ.\nತದಂಗಂ ಕಾಂಡರ್ಷಿ ತರ್ಪಣಮ್ ಕರಿಷ್ಯೇ.`,
          isFixed: true
        },
        {
          title: "ಕಾಂಡರ್ಷಿ ತರ್ಪಣಮ್ (Kanda Rishi Tarpanam)",
          content: `ಪ್ರಜಾಪತಿಂ ಕಾಂಡರ್ಷಿಂ ತರ್ಪಯಾಮಿ × ೩\nಸೋಮಂ ಕಾಂಡರ್ಷಿಂ ತರ್ಪಯಾಮಿ × ೩\nಅಗ್ನಿಂ ಕಾಂಡರ್ಷಿಂ ತರ್ಪಯಾಮಿ × ೩\nವಿಶ್ವbackground ದೇವbackground ಕಾಂಡರ್ಷೀನ್ ತರ್ಪಯಾಮಿ × ೩\nಸಂಹಿತೀರ್ ದೇವತಾಃ ಉಪನಿಷದಸ್ ತರ್ಪಯಾಮಿ × ೩\nಯಾಜ್ಞಿಕೀರ್ ದೇವತಾಃ ಉಪನಿಷದಸ್ ತರ್ಪಯಾಮಿ × ೩\nವಾರುಣೀರ್ ದೇವತಾಃ ಉಪನಿಷದಸ್ ತರ್ಪಯಾಮಿ × ೩\n\n---\n\n### ಬ್ರಹ್ಮತೀರ್ಥಮ್\n\nಬ್ರಹ್ಮಾಣಂ ಸ್ವಯಂಭುವಂ ತರ್ಪಯಾಮಿ × ೩\nಸದಸಸ್ಪತಿಂ ತರ್ಪಯಾಮಿ × ೩\n\n---\n\n### ವೈದಿಕ ತರ್ಪಣಗಳು\n\nವೇದಂ ತರ್ಪಯಾಮಿ\nಇತಿಹಾಸಮ್ ತರ್ಪಯಾಮಿ\nಪುರಾಣಮ್ ತರ್ಪಯಾಮಿ\nಕಲ್ಪಮ್ ತರ್ಪಯಾಮಿ`,
          isFixed: true
        },
        {
          title: "ಮುಕ್ತಾಯ (Conclusion)",
          content: `ಪವಿತ್ರವನ್ನು ವಿಸರ್ಜಿಸಿ ಎರಡು ಬಾರಿ ಆಚಮನ ಮಾಡಬೇಕು.\nನಂತರ ಆಚಾರ್ಯರಿಗೆ ಹಾಗೂ ಹಿರಿಯರಿಗೆ ನಮಸ್ಕರಿಸಿ ಆಶೀರ್ವಾದ ಪಡೆಯಬೇಕು.`,
          isFixed: true
        }
      ];

    case 'malayalam':
      return [
        {
          title: "ആചമനം (Achamanam)",
          content: `ഓം അച്യുതായ നമഃ\nഓം അനന്തായ നമഃ\nഓം ഗോവിന്ദായ നമഃ\n\nഎന്നു ചൊല്ലി ആചമനം ചെയ്ത ശേഷം കേശവാദി നാമങ്ങൾ ജപിക്കുക. നിങ്ങളുടെ നിത്യസന്ധ്യാവന്ദനത്തിലെ ആചമന വിധി തന്നെ ഇവിടെയും പിന്തുടരുക.`,
          isFixed: true
        },
        {
          title: "പ്രാണായാമം (Pranayamam)",
          content: `പവിത്രം ധരിച്ച് പ്രാണായാമം ചെയ്യുക.\n\nഓം ഭൂഃ ഓം ഭുവഃ ഓം സുവഃ ഓം മഹഃ ഓം ജനഃ ഓം തപഃ ഓം സത്യം\nഓം തത്സവിതുർവരേണ്യം ഭർഗോ ദേവസ്യ ധീമഹി ധിയോ യോ നഃ പ്രചോദയാത്\nഓം ആപോ ജ്യോതീരസോऽമൃതം ബ്രഹ്മ ഭൂർഭുവസ്സുവരോമ്`,
          isFixed: true
        },
        {
          title: "ശ്രീവൈഷ്ണവ ഗുരുപരമ്പരാ അനുസന്ധാനം",
          content: `ശ്രീമൻ വേങ്കടനാഥാര്യഃ കവിതാർകിക കേസരീ ।\nവേദാന്താചാര്യ വര്യോ മേ സന്നിധത്താം സദാ ഹൃദി ॥\n\nഗുരുഭ്യസ്തദ് ഗുരുഭ്യശ്ച നമോ വാഗമധീമഹേ ।\nവൃണീമഹേ ച തത്രാദ്യൌ ദമ്പതീ ജഗതാം പതീ ॥\n\nസ്വശേഷഭൂതേന മയാ സ്വീയൈഃ സർവപരിച്ഛദൈഃ ।\nവിധാതും പ്രീതമാത്മാനം ദേവഃ പ്രക്രമതേ സ്വയം ॥`,
          isFixed: true
        },
        {
          title: "വിഷ്വക്സേന ധ്യാനം",
          content: `ശുക്ലാംബരധരം വിഷ്ണും ശശിവർണ്ണം ചതുർഭുജം ।\nപ്രസന്നവദനം ധ്യായേത് സർവവിഘ്നോപശാന്തയേ ॥\n\nയസ്യ ദ്വിരദ വക്ത്രാദ്യാഃ പാരിഷദ്യാഃ പരശ്ശതം ।\nവിഘ്നം നിഘ്നന്തി സതതം വിഷ്വക്സേനം തമാശ്രയേ ॥`,
          isFixed: true
        },
        {
          title: "മഹാസങ്കല്പം (Maha Sankalpam)",
          content: `ഹരിഃ ഓം തത്\nശ്രീ ഗോവിന്ദ, ഗോവിന്ദ, ഗോവിന്ദ\n\nഅസ്യ ശ്രീ ഭഗവതോ മഹാപുരുഷസ്യ വിഷ്ണോരാജ്ഞയാ പ്രവർത്തമാനസ്യ\nആദ്യ ബ്രഹ്മണഃ ദ്വിതീയ പരMap-ാർദ്ധേ ശ്രീ ശ്വേതവരാഹ കല്പേ\nവൈവസ്വത മന്വന്തരേ കലിയുഗേ പ്രഥമേ പാദേ\nജംബുദ്വീപേ ഭാരതവർഷേ ഭരതഖണ്ഡേ\nശകാബ്ദേ മേരോർദക്ഷിണേ പാർശ്വേ അസ്മിൻ വർത്തമാനെ വ്യാവഹാരികെ\nപ്രഭവാദി ഷഷ്ടി സംവത്സരാണാം മധ്യേ\n\n{{SAMVATSARA}} നാമ സംവത്സരേ\n\n{{AYANA}}\n\n{{RITU}} ഋതൌ\n\n{{MASA}} മാസേ\n\n{{PAKSHA}} പക്ഷേ\n\n{{TITHI}}\n\n{{VARA}} വാസരേ\n\n{{NAKSHATRA}} നക്ഷത്ര യുക്തായാം\n\n{{YOGA}} യോഗേ\n\n{{KARANA}} കരണേ\n\nഏവം ഗുണ വിശേഷണ വിശിഷ്ടായാം അസ്യാം\n\n{{TITHI}} ശുഭ തിഥൌ\n\nശ്രീ ഭഗവദാജ്ഞാ ശ്രീമന്നാരായണ പ്രീത്യർത്ഥം`,
          isFixed: false
        },
        {
          title: "യജ്ഞോപവീത ധാരണം (Yajñopaveeta Dharanam)",
          content: `മമ ശ്രൌതസ്മാർത്ത വിഹിത നിത്യകർമ്മാനുഷ്ഠാന യോഗ്യതാ സിദ്ധ്യർത്ഥം യജ്ഞോപവീത ധാരണം കരിഷ്യേ.\n\n---\n\n### വിനിയോഗം\n\nയജ്ഞോപവീത ധാരണ മഹാമന്ത്രസ്യ\nബ്രഹ്മാ ഋഷിഃ, തൃഷ്ടുപ് ഛന്ദഃ, ത്രയീ വിദ്യാ ദേവതാ,\nയജ്ഞോപവീത ധാരണേ വിനിയോഗഃ\n\n---\n\n### പൂണൂൽ മന്ത്രം\n\nയജ്ഞോപവീതം പരമം പവിത്രം പ്രജാപതേര്യത്സഹജം പുരസ്താത് ।\nആയുഷ്യമഗ്ര്യം പ്രതിമുഞ്ച ശുഭ്രം യജ്ഞോപവീതം ബലമസ്തു തേജഃ ॥\n\n---\n\n### ദ്വിതീയ യജ്ഞോopവീതം (വിവാഹിതർക്ക് മാത്രം)\n\nഗാർഹസ്ഥ്യ സിദ്ധ്യർത്ഥം ദ്വിതീയ യജ്ഞോപവീത ധാരണം കരിഷ്യേ`,
          isFixed: true
        },
        {
          title: "പഴയ പൂണൂൽ ഉപേക്ഷിക്കൽ",
          content: `പുതിയ പൂണൂൽ ധരിച്ച ശേഷം പഴയത് മാറ്റേണ്ടതാണ്.\n\nഉപവീതം ഭിന്നതന്തും ജീർണ്ണം കശ്മലദൂഷിതം ।\nവിസൃജാമി യശോ വർചഃ ദീർഘായുരസ്തു മേ ബലം ॥\n\nപഴയ പൂണൂൽ മാറ്റി ആചമനം ചെയ്യേണ്ടതാണ്.`,
          isFixed: true
        },
        {
          title: "കാമോऽകാർഷീത് മന്യുരകാർഷീത് ജപം",
          content: `അദ്ധ്യായോത്സർജ്ജന അകരണ പ്രായശ്ചിത്താർത്ഥം\nഅഷ്ടോത്തര സഹസ്ര സംഖ്യാകം (1008) അല്ലെങ്കിൽ അഷ്ടോത്തര ശത സംഖ്യാകം (108)\n\"കാമോऽകാർഷീത് മന്യുരകാർഷീത്\" ഇതി മന്ത്ര ജപം കരിഷ്യേ.\n\n---\n\nകാമോऽകാർഷീത് മന്യുരകാർഷീത്\n\n(ഈ മന്ത്രം നിങ്ങളുടെ സൗകര്യാർത്ഥം 108 അല്ലെങ്കിൽ 1008 തവണ ജപിക്കുക)`,
          isFixed: true
        },
        {
          title: "കാണ്ടർഷി തർപ്പണ സങ്കല്പങ്ങൾ",
          content: `ശ്രാവണ്യാം പൗർണമാസ്യാം അദ്ധ്യായോപാകർമ്മ കരിഷ്യേ.\nതദംഗം കാവേരീ സ്നാനമഹം കരിഷ്യേ.\nതദംഗം യജ്ഞോപവീത ധാരണം കരിഷ്യേ.\nതദംഗം മൗഞ്ജീ അജിന ധാരണാനി കരിഷ്യേ.\nതദംഗം കാണ്ടർഷി തർപ്പണം കരിഷ്യേ.`,
          isFixed: true
        },
        {
          title: "കാണ്ടർഷി തർപ്പണം (Kanda Rishi Tarpanam)",
          content: `പ്രജാപതിം കാണ്ടർഷിം തർപ്പയാമി × 3\nസോമം കാണ്ടർഷിം തർപ്പയാമി × 3\nഅഗ്നിം കാണ്ടർഷിം തർപ്പയാമി × 3\nവിശ്വാൻ ദേവാൻ കാണ്ടർഷീൻ തർപ്പയാമി × 3\nസംഹിതീർ ദേവതാഃ ഉപനിഷദസ് തർപ്പയാമി × 3\nയാജ്ഞികീർ ദേവതാഃ ഉപനിഷദസ് തർപ്പയാമി × 3\nവാരുണീർ ദേവതാഃ ഉപനിഷദസ് തർപ്പയാമി × 3\n\n---\n\n### ബ്രഹ്മതീർത്ഥം\n\nബ്രഹ്മാണം സ്വയംഭുവം തർപ്പയാമി × 3\nസദസസ്പതിം തർപ്പയാമി × 3\n\n---\n\n### വൈദിക തർപ്പണങ്ങൾ\n\nവേദം തർപ്പയാമി\nഇതിഹാസം തർപ്പയാമി\nപുരാണം തർപ്പയാമി\nകല്പം തർപ്പയാമി`,
          isFixed: true
        },
        {
          title: "സമാപ്തി (Conclusion)",
          content: `പവിത്രം മാറ്റി രണ്ടു തവണ ആചമനം ചെയ്യുക.\nതുടർന്ന് ഗുരുക്കന്മാരെയും മുതിർന്നവരെയും നമസ്കരിച്ച് അനുഗ്രഹം വാങ്ങുക.`,
          isFixed: true
        }
      ];

    case 'english':
    default:
      return [
        {
          title: "Achamanam (Purification)",
          content: `Om Achyutaya Namah\nOm Anantaya Namah\nOm Govindaya Namah\n\nPerform ceremonial purification (Achamanam) by sipping water thrice, followed by touch recitations. It is highly recommended to follow your daily Sandhyavandanam achamana routine.`,
          isFixed: true
        },
        {
          title: "Pranayamam (Breath Control)",
          content: `Wear the sacred pavitram and perform pranayama:\n\nOm Bhuh, Om Bhuvah, Om Suvah, Om Mahah, Om Janah, Om Tapah, Om Satyam\nOm Tat Savitur Varenyam Bhargo Devasya Dheemahi Dhiyo Yo Nah Prachodayat\nOm Apo Jyotirasomrtam Brahma Bhurbhuvassuvarom`,
          isFixed: true
        },
        {
          title: "Sri Vaishnava Guru Parampara Anusandhanam",
          content: `Sriman Venkatanatharyah Kavitarkika Kesari |\nVedantacharya Varyo Me Sannidhattam Sada Hrdi ||\n\nGurubhyastad Gurubhyashcha Namo Vagama Dimahe |\nVrnimahashcha Tadradhyau Dampati Jagatam Pati ||\n\nSvasheshabhute Na Maya Sviyai Sarvaparichhadatai |\nVidhatum Pritamatmanam Devah Prakramate Svayam ||`,
          isFixed: true
        },
        {
          title: "Vishwaksena Dhyanam",
          content: `Shuklambaradharam Vishnum Shashivarnam Chaturbhujam |\nPrasannavadanam Dhyayet Sarvavighnopashantaye ||\n\nYasya Dvirada Vaktradya Parishadya Parashshatam |\nVighnam Nighnanti Satatham Vishvaksenam Tamashraye ||`,
          isFixed: true
        },
        {
          title: "Maha Sankalpam (The Great Resolution)",
          content: `Harih Om Tat\nSri Govinda, Govinda, Govinda\n\nAsya Sri Bhagavato Mahapurushasya Vishnorajñaya Pravartamanasya\nAdya Brahmanah Dvitiya Parardhe Sri Shvetavaraha Kalpe\nVaivasvata Manvantare Kaliyuge Prathame Pade\nJambudvipe Bharata Varshe Bharata Khande\nShakabde Meror Dakshine Parshve Asmin Vartamane Vyavaharike\nPrabhavadi Shashti Samvatsaranam Madhye\n\n{{SAMVATSARA}} Nama Samvatsare\n\n{{AYANA}}\n\n{{RITU}} Rutau\n\n{{MASA}} Mase\n\n{{PAKSHA}} Pakshe\n\n{{TITHI}}\n\n{{VARA}} Vasare\n\n{{NAKSHATRA}} Nakshatra Yuktayam\n\n{{YOGA}} Yoge\n\n{{KARANA}} Karane\n\nEvanguna Visheshana Vishishtayam\n\nAsyam\n\n{{TITHI}}\n\nShubha Tithou\n\nSri Bhagavadajña Sriman Narayana Preetyartham`,
          isFixed: false
        },
        {
          title: "Yajñopaveeta Dharanam (Wearing Sacred Thread)",
          content: `Mama Shrauta Smartha Vihi Vihita Nitya Karmanushthana Yogyata Siddhartham Yajñopaveeta Dharanam Karishye\n\n---\n\n### Viniyogah\n\nYajñopaveetadharana Maha Mantrasya\nBrahma Rishih, Trishtup Chandah, Trayi Vidya Devata,\nYajñopaveeta Dharane Viniyogah\n\n---\n\n### Yajñopaveeta Dharana Mantrah\n\nYajñopaveetam Paramam Pavitram Prajapateryat Sahajam Purastat |\nAyushyamagryam Pratimuncha Shubhram Yajñopaveetam Balamastu Tejah ||\n\n---\n\n### Wearing Second Thread (For Married Men Only)\n\nGarhasthya Siddhartham Dvitiya Yajñopaveeta Dharanam Karishye`,
          isFixed: true
        },
        {
          title: "Removing Old Yajñopaveeta",
          content: `After wearing the new thread, safely discard the worn, old thread:\n\nUpaveetam Bhinnadantum Jeernam Kashmala Dooshitam |\nVisrujami Yasho Varchah Deerghayurastu Me Balam ||\n\nDiscard according to your family custom, then perform Achamanam.`,
          isFixed: true
        },
        {
          title: "Kamokarsheet Manyurakarsheet Japam",
          content: `Adhyayotsarjana Akarana Prayashchittartham\nAshtottara Sahasra Sankhyakam (1008 times) or Ashtottara Shata Sankhyakam (108 times)\n"Kamokarsheet Manyurakarsheet" Iti Mantra Japam Karishye\n\n---\n\nKamokarsheet Manyurakarsheet\n\n(Recite either 108 or 1008 times depending on family custom)`,
          isFixed: true
        },
        {
          title: "Kanda Rishi Tarpanam Sankalpam",
          content: `Sravanyam Pournamasyam Adhyayopakarmam Karishye.\nTadangam Kaveri Snanamaham Karishye.\nTadangam Yajñopaveetadharanam Karishye.\nTadangam Mounji Ajina Dharanani Karishye.\nTadangam Kandarihsi Tarpanam Karishye.`,
          isFixed: true
        },
        {
          title: "Kanda Rishi Tarpanam (Deity Offerings)",
          content: `Prajapatim Kandarihsim Tarpayami × 3\nSomam Kandarihsim Tarpayami × 3\nAgnim Kandarihsim Tarpayami × 3\nVishvandeven Kandarihsin Tarpayami × 3\nSamhitir Devatah Upanishadas Tarpayami × 3\nYajñikeer Devatah Upanishadas Tarpayami × 3\nVaruneer Devatah Upanishadas Tarpayami × 3\n\n---\n\n### Brahma Sutram\n\nBrahmanam Svayambhuvam Tarpayami × 3\nSadasaspatim Tarpayami × 3\n\n---\n\n### Vedic Libations\n\nVedam Tarpayami\nItihasam Tarpayami\nPuranam Tarpayami\nKalpam Tarpayami`,
          isFixed: true
        },
        {
          title: "Conclusion",
          content: `Discard the pavitram, perform Achamanam twice.\nProstrate and seek blessings from Acharyas and elders.`,
          isFixed: true
        }
      ];
  }
}

function getGayatriTemplate(lang: SupportedLanguage): MultilingualSection[] {
  switch (lang) {
    case 'hindi':
      return [
        {
          title: "आचमनम् (Achamanam)",
          content: `ॐ अच्युताय नमः\nॐ अनन्ताय नमः\nॐ गोविन्दाय नमः\n\nइति आचम्य, केशव-कीर्तनादि अनुष्ठानं कुर्यात्।`,
          isFixed: true
        },
        {
          title: "प्राणायामः (Pranayamam)",
          content: `ॐ भूः ॐ भुवः ॐ सुवः ॐ महः ॐ जनः ॐ तपः ॐ सत्यम्\nॐ तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्\nॐ आपो ज्योतीरसोऽमृतं ब्रह्म भूर्भुवस्सुवरोम्`,
          isFixed: true
        },
        {
          title: "गुरुपरम्परा ध्यानम्",
          content: `श्रीमन् वेङ्कटनाथार्यः कविताार्किक केसरी ।\nवेदान्ताचार्य वर्यो मे सन्निधत्तां सदा हृदि ॥`,
          isFixed: true
        },
        {
          title: "विष्वक्सेन ध्यानम्",
          content: `शुक्लाम्बरधरं विष्णुं शशिवर्णं चतुर्भुजम् ।\nप्रसन्नवदनं ध्यायेत् सर्वविघ्नोपशान्तये ॥`,
          isFixed: true
        },
        {
          title: "गायत्री महासङ्कल्पः",
          content: `हरिः ॐ तत्\nश्री गोविन्द, गोविन्द, गोविन्द\n\nअस्य श्री भगवतो महापुरुषस्य विष्णोराज्ञया प्रवर्तमानस्य\nआद्य ब्रह्मणः द्वितीय परार्धे श्री श्वेतवाराह कल्पे\nवैवस्वत मन्वन्तरे कलियुगे प्रथमे पादे\nजम्बूद्वीपे भारतवर्षे भरतखण्डे\nशकाब्दे मेरोर्दक्षिणे पार्श्वे अस्मिन वर्तमाने व्यावहारिके\nप्रभवादि षष्टि संवत्सराणाम् मध्ये\n\n{{SAMVATSARA}} नाम संवत्सरे\n\n{{AYANA}}\n\n{{RITU}} ऋतौ\n\n{{MASA}} मासे\n\n{{PAKSHA}} पक्षे\n\n{{TITHI}}\n\n{{VARA}} वासरे\n\n{{NAKSHATRA}} नक्षत्र युक्तायाम्\n\n{{YOGA}} योगे\n\n{{KARANA}} करणे\n\nएवङ्गुण विशेषण विशिष्टायाम् अस्याम्\n\n{{TITHI}} शुभ तिथौ\n\nश्री भगवदाज्ञा श्रीमन्नारायण प्रीत्यर्थम्\n\nद्विजत्व अतिक्रम प्रायश्चित्तार्थम्,\nसावित्री गायत्री महामन्त्र जपम् करिष्ये।\nअष्टोत्तर सहस्र संख्यया (१००८) अथवा अष्टोत्तर शत संख्यया (१०८) गायत्री महामन्त्र जपम् करिष्ये।`,
          isFixed: false
        },
        {
          title: "गायत्री मन्त्र जपः (Gayatri Mantra Recitation)",
          content: `ॐ भूर्भुवः स्वः\nतत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि\nधियो यो नः प्रचोदयात् ॥\n\n(१०८ अथवा १००८ वारं जपेत्)`,
          isFixed: true
        },
        {
          title: "उपसंहारः",
          content: `पवित्रं विसृज्य आचम्य प्रणामां कुर्यात्।`,
          isFixed: true
        }
      ];

    case 'telugu':
      return [
        {
          title: "आचमनम् (Achamanam)",
          content: `ఓం అచ్యుతాయ నమః\nఓం అనంతాయ నమః\nఓం గోవిందాయ నమః\n\nఅని చెప్పుచు ఆచమనము చేయవలెను.`,
          isFixed: true
        },
        {
          title: "ప్రాణాయామము",
          content: `ఓం భూః ఓం భువః ఓం సువః ఓం మహః ఓం జనః ఓం தపః ఓం సత్యమ్\nఓం తత్సవితుర్వరేణ్యం భర్గో దేవస్య ధీమహి ధియో యో నః ప్రచోదయాత్\nఓం ఆపో జ్యోతీరసోऽమృతం బ్రహ్మ భూర్భువస్సువరోమ్`,
          isFixed: true
        },
        {
          title: "గురుపరంపరా ధ్యానమ్",
          content: `శ్రీమన్ వేంకటనాథార్యః కవితార్కిక కేసరీ ।\nవేదాంతాచార్య వర్यो మే సన్నిధత్తాం సదా హృది ॥`,
          isFixed: true
        },
        {
          title: "విష్వక్సేన ధ్యానమ్",
          content: `శుక్లాంబరధరం విష్ణుం శశివర్ణం చతుర్భుజమ్ ।\nప్రసన్నవదనం ధ్యాయేత్ సర్వవిఘ్నోపశాంతయే ॥`,
          isFixed: true
        },
        {
          title: "గాయత్రీ మహా సంకల్పము",
          content: `హరిః ఓం తత్\nశ్రీ గోవింద, గోవింద, గోవింద\n\nఅస్య శ్రీ భగవతో మహాపురుషస్య విష్ణోరాజ్ఞయా ప్రవర్తమానస్య\nఆద్య బ్రహ్మణః ద్వితీయ పరార్ధే శ్రీ శ్వేతవరాహ కల్పే\nవైవస్వత మన్వంతరే కలియుగే ప్రథమే పాదే\nజంబూద్వీపే భారతవర్షే భరతఖండే\nశకాబ్దే మేరోర్దక్షిణే పార్శ్వే అస్మిన్ వర్తమానే వ్యావహారికే\nప్రభవాది షష్టి సంవత్సరాణామ్ మధ్యే\n\n{{SAMVATSARA}} నామసంవత్సరే\n\n{{AYANA}}\n\n{{RITU}} రుతౌ\n\n{{MASA}} మాసే\n\n{{PAKSHA}} పక్షే\n\n{{TITHI}}\n\n{{VARA}} వాసరే\n\n{{NAKSHATRA}} నక్షత్ర యుక్తాయామ్\n\n{{YOGA}} యోగే\n\n{{KARANA}} కరణే\n\nఏవంగుణ విశేషణ విశిష్టాయామ్ అస్యామ్\n\n{{TITHI}} శుభ తిథౌ\n\nశ్రీ భగవదాజ్ఞా శ్రీమన్నారాయణ ప్రీత్యర్థమ్\n\nద్విజత్వ అతిక్రమ ప్రాయశ్చిత్తార్థమ్,\nసావిత్రీ గాయత్రీ మహామంత్ర జపమ్ కరిష్యే.\nఅష్టోత్తర సహస్ర సంఖ్యయా (1008 సార్లు) లేదా అష్టోత్తర శత సంఖ్యయా (108 సార్లు) గాయత్రీ మహామంత్ర జపమ్ కరిష్యే.`,
          isFixed: false
        },
        {
          title: "గాయత్రీ మంత్ర జపము (Gayatri Mantra)",
          content: `ఓం భూర్భువస్సువః\nతత్సవితుర్వరేణ్యం\nభర్గో దేవస్య ధీమహి\nధియో యో నః ప్రచోదయాత్ ॥\n\n(108 లేదా 1008 సార్లు జపించవలెను)`,
          isFixed: true
        },
        {
          title: "ముగింపు",
          content: `పవిత్రమును తొలగించి ఆచమనం చేసి నమస్కరించవలెను.`,
          isFixed: true
        }
      ];

    case 'kannada':
      return [
        {
          title: "ಆಚಮನಮ್ (Achamanam)",
          content: `ಓಂ ಅಚ್ಯುತಾಯ ನಮಃ\nಓಂ ಅನಂತಾಯ ನಮಃ\nಓಂ ಗೋವಿಂದಾಯ ನಮಃ\n\nಎಂದು ಆಚಮನ ಮಾಡಬೇಕು.`,
          isFixed: true
        },
        {
          title: "ಪ್ರಾಣಾಯಾಮಃ",
          content: `ಓಂ ಭೂಃ ಓಂ ಭುವಃ ಓಂ ಸುವಃ ಓಂ ಮಹಃ ಓಂ ಜನಃ ಓಂ ತಪಃ ಓಂ ಸತ್ಯಮ್\nಓಂ ತತ್ಸವಿತುರ್ವರೇಣ್ಯಂ ಭರ್ಗೋ ದೇವಸ್ಯ ಧೀಮಹಿ ಧಿಯೋ ಯೋ ನಃ ಪ್ರಚೋದಯಾತ್\nಓಂ ಆಪೋ ಜ್ಯೋತೀರಸೋऽಮೃತಂ ಬ್ರಹ್ಮ ಭೂರ್ಭುವಸ್ಸುವರೋಮ್`,
          isFixed: true
        },
        {
          title: "ಗುರುಪರಂಪರಾ ಧ್ಯಾನಮ್",
          content: `ಶ್ರೀಮನ್ ವೇಂಕಟನಾಥಾರ್ಯಃ ಕವಿತಾರ್ಕಿಕ ಕೇಸರೀ ।\nವೇದಾಂತಾಚಾರ್ಯ ವರ್ಯೋ ಮೇ ಸನ್ನಿಧತ್ತಾಂ ಸದಾ ಹೃದಿ ॥`,
          isFixed: true
        },
        {
          title: "ವಿಷ್ವಕ್ಸೇನ ಧ್ಯಾನಮ್",
          content: `ಶುಕ್ಲಾಂಬರಧರಂ ವಿಷ್ಣುಂ ಶಶಿವರ್ಣಂ ಚತುರ್ಭುಜಮ್ ।\nಪ್ರಸನ್ನವದನಂ ಧ್ಯಾಯೇತ್ ಸರ್ವವಿಘ್ನೋಪಶಾಂತಯೇ ॥`,
          isFixed: true
        },
        {
          title: "ಗಾಯತ್ರೀ ಮಹಾಸಂಕಲ್ಪಃ",
          content: `ಹರಿಃ ಓಂ ತತ್\nಶ್ರೀ ಗೋವಿಂದ, ಗೋವಿಂದ, ಗೋವಿಂದ\n\nಅಸ್ಯ ಶ್ರೀ ಭಗವತೋ ಮಹಾಪುರುಷಸ್ಯ ವಿಷ್ಣೋರಾಜ್ಞಯಾ ಪ್ರವರ್ತಮಾನಸ್ಯ\nಆದ್ಯ ಬ್ರಹ್ಮಣಃ ದ್ವಿತೀಯ ಪರಾರ್ಧೇ ಶ್ರೀ ಶ್ವೇತವರಾಹ ಕಲ್ಪೇ\nವೈವಸ್ವತ ಮನ್ವಂತರೇ ಕಲಿಯುಗೇ ಪ್ರಥಮೇ ಪಾದೇ\nಜಂಬೂದ್ವೀಪೇ ಭಾರತವರ್ಷೇ ಭರತಖಂಡೇ\nಶಕಾಬ್ದೇ ಮೇರೋರ್ದಕ್ಷಿಣೇ ಪಾರ್ಶ್ವೇ ಅಸ್ಮಿನ್ ವರ್ತಮಾನೇ ವ್ಯಾವಹಾರಿಕೇ\nಪ್ರಭವಾದಿ ಷಷ್ಟಿ ಸಂವತ್ಸರಾಣಾಮ್ ಮಧ್ಯೇ\n\n{{SAMVATSARA}} ನಾಮಸಂವತ್ಸರೇ\n\n{{AYANA}}\n\n{{RITU}} ರುತೌ\n\n{{MASA}} ಮಾಸೇ\n\n{{PAKSHA}} ಪಕ್ಷೇ\n\n{{TITHI}}\n\n{{VARA}} ವಾಸರೇ\n\n{{NAKSHATRA}} ನಕ್ಷತ್ರ ಯುಕ್ತಾಯಾಮ್\n\n{{YOGA}} ಯೋಗೇ\n\n{{KARANA}} ಕರಣೇ\n\nಏವಂಗುಣ ವಿಶೇಷಣ ವಿಶಿಷ್ಟಾಯಾಮ್ ಅಸ್ಯಾಮ್\n\n{{TITHI}} ಶುಭ ತಿಥೌ\n\nಶ್ರೀ ಭಗವದಾಜ್ಞಾ ಶ್ರೀಮನ್ನಾರಾಯಣ ಪ್ರೀತ್ಯರ್ಥಮ್\n\nದ್ವಿಜತ್ವ ಅತಿಕ್ರಮ ಪ್ರಾಯಶ್ಚಿತ್ತಾರ್ಥಮ್,\nಸಾವಿತ್ರೀ ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರ ಜಪಮ್ ಕರಿಷ್ಯೇ.\nಅಷ್ಟೋತ್ತರ ಸಹಸ್ರ ಸಂಖ್ಯಯಾ (೧೦೦೮) ಅಥವಾ ಅಷ್ಟೋತ್ತರ ಶತ ಸಂಖ್ಯಯಾ (೧೦೮) ಗಾಯತ್ರೀ ಮಹಾಮಂತ್ರ ಜಪಮ್ ಕರಿಷ್ಯೇ.`,
          isFixed: false
        },
        {
          title: "ಗಾಯತ್ರೀ ಮಂತ್ರ ಜಪಃ (Gayatri Mantra)",
          content: `ಓಂ ಭೂರ್ಭುವಸ್ಸುಮಃ\nತತ್ಸವಿತುರ್ವರೇಣ್ಯಂ\nಭರ್ಗೋ ದೇವಸ್ಯ ಧೀಮಹಿ\nಧಿಯೋ ಯೋ ನಃ ಪ್ರಚೋದಯಾತ್ ॥\n\n(೧೦೮ ಅಥವಾ ೧೦೦೮ ಬಾರಿ ಜಪಿಸಬೇಕು)`,
          isFixed: true
        },
        {
          title: "ಮುಕ್ತಾಯ",
          content: `ಪವಿತ್ರವನ್ನು ವಿಸರ್ಜಿಸಿ ಆಚಮನ ಮಾಡಬೇಕು.`,
          isFixed: true
        }
      ];

    case 'malayalam':
      return [
        {
          title: "ആചമനം (Achamanam)",
          content: `ഓം അച്യുതായ നമഃ\nഓം അനന്തായ നമഃ\nഓം ഗോവിന്ദായ നമഃ\n\nഎന്നു ചൊല്ലി ആചമനം ചെയ്യുക.`,
          isFixed: true
        },
        {
          title: "പ്രാണായാമം",
          content: `ഓം ഭൂഃ ഓം ഭുവഃ ഓം സുവഃ ഓം മഹഃ ഓം ജനഃ ഓം തപഃ ഓം സത്യം\nഓം തത്സവിതുർവരേണ്യം ഭർഗോ ദേവസ്യ ധീമഹി ധിയോ യോ നഃ പ്രചോദയാത്\nഓം ആപോ ജ്യോതീരസോऽമൃതം ബ്രഹ്മ ഭൂർഭുവസ്സുവരോമ്`,
          isFixed: true
        },
        {
          title: "ഗുരുപരമ്പരാ ധ്യാനം",
          content: `ശ്രീമൻ വേങ്കടനാഥാര്യഃ കവിതാർകിക കേസരീ ।\nവേദാന്താചാര്യ വര്യോ മേ സന്നിധത്താം സദാ ഹൃദി ॥`,
          isFixed: true
        },
        {
          title: "വിഷ്വക്സേന ധ്യാനം",
          content: `ശുക്ലാംബരധരം വിഷ്ണും ശശുവർണ്ണം ചതുർഭുജം ।\nപ്രസന്നവദനം ധ്യായേത് സർവവിഘ്നോപശാന്തയേ ॥`,
          isFixed: true
        },
        {
          title: "ഗായത്രീ മഹാസങ്കല്പം",
          content: `ഹരിഃ ഓം തത്\nശ്രീ ഗോവിന്ദ, ഗോവിന്ദ, ഗോവിന്ദ\n\nഅസ്യ ശ്രീ ഭഗവതോ മഹാപുരുഷസ്യ വിഷ്ണോരാജ്ഞയാ പ്രവർത്തമാനസ്യ\nആദ്യ ബ്രഹ്മണഃ ദ്വിതീയ പരMap-ാർദ്ധേ ശ്രീ ശ്വേതവരാഹ കല്പേ\nവൈവസ്വത മന്വന്തരേ കലിയുഗേ പ്രഥമേ പാദേ\nജംബുദ്വീപേ ഭാരതവർഷേ ഭരതഖണ്ഡേ\nശകാബ്ദേ മേരോർദക്ഷിണേ പാർശ്വേ അസ്മിൻ വർത്തമാനെ വ്യാവഹാരികെ\nപ്രഭവാദി ഷഷ്ടി സംവത്സരാണാം മധ്യേ\n\n{{SAMVATSARA}} നാമസംവത്സരേ\n\n{{AYANA}}\n\n{{RITU}} ഋതൌ\n\n{{MASA}} മാസേ\n\n{{PAKSHA}} പക്ഷേ\n\n{{TITHI}}\n\n{{VARA}} വാസരേ\n\n{{NAKSHATRA}} നക്ഷത്ര യുക്തായാം\n\n{{YOGA}} യോഗേ\n\n{{KARANA}} കരണേ\n\nഏവം ഗുണ വിശേഷണ വിശിഷ്ടായാം അസ്യാം\n\n{{TITHI}} ശുഭ തിഥൌ\n\nശ്രീ ഭഗവദാജ്ഞാ ശ്രീമന്നാരായണ പ്രീത്യർത്ഥം\n\nദ്വിജത്വ അതിക്രമ പ്രായശ്ചിത്താർത്ഥം,\nസാവിത്രീ ഗായത്രീ മഹാമന്ത്ര ജപം കരിഷ്യേ.\nഅഷ്ടോത്തര സഹസ്ര സംഖ്യയാ (1008 തവണ) അല്ലെങ്കിൽ അഷ്ടോത്തര ശത സംഖ്യയാ (108 തവണ) ഗായത്രീ മഹാമന്ത്ര ജപം കരിഷ്യേ.`,
          isFixed: false
        },
        {
          title: "ഗായത്രീ മന്ത്ര ജപം (Gayatri Mantra)",
          content: `ഓം ഭൂർഭുവസ്സുവഃ\nതത്സവിതുർവരേണ്യം\nഭർഗോ ദേവസ്യ ധീമഹി\nധിയോ യോ നഃ പ്രചോദയാത് ॥\n\n(108 അല്ലെങ്കിൽ 1008 തവണ ജപിക്കുക)`,
          isFixed: true
        },
        {
          title: "സമാപ്തി",
          content: `പവിത്രം മാറ്റി ആചമനം ചെയ്യുക.`,
          isFixed: true
        }
      ];

    case 'tamil':
      return [
        {
          title: "ஆசமனம்",
          content: `ஓம் அச்சுதாய நமஃ\nஓம் அனந்தாய நமஃ\nஓம் கோவிந்தாய நமஃ\n\nஎன்று சொல்லி ஆசமனம் செய்து, பின்னர் கேசவாதி நாமங்களை முறையாகச் செய்ய வேண்டும்.`,
          isFixed: true
        },
        {
          title: "ப்ராணாயாமம்",
          content: `ஓம் பூஃ ஓம் புவஃ ஓம் ஸுவஃ ஓம் மஹஃ ஓம் ஜனஃ ஓம் தபஃ ஓம் ஸத்யம்\nஓம் தத் ஸவிதுர் வரேண்யம் பர்கோ தேவஸ்ய தீமஹி தியோ யோ நஃ ப்ரசோதயாத்\nஓம் ஆபோ ஜ்யோதிரஸோऽம்ருதம் ப்ரஹ்ம பூர்புவஸ்ஸுவரோம்`,
          isFixed: true
        },
        {
          title: "ஸ்ரீவைஷ்ணவ குரு பரம்பரை அனுசந்தானம்",
          content: `ஸ்ரீமான் வேங்கடநாதார்யஃ கவிதார்க்கிக கேஸரீ ।\nவேதாந்தாசார்ய வர்யோ மே ஸந்நிதத்தாம் ஸதா ஹ்ருதி ॥`,
          isFixed: true
        },
        {
          title: "விஷ்வக்சேனர் தியானம்",
          content: `சுக்லாம்பரதரம் விஷ்ணும் சசிவர்ணம் சதுர்புஜம் ।\nப்ரஸன்னவதனம் த்யாயேத் ஸர்வவிக்னோபசாந்தயே ॥`,
          isFixed: true
        },
        {
          title: "காயத்ரி மஹா சங்கல்பம்",
          content: `ஹரி ஓம் தத்\nஸ்ரீ கோவிந்த, கோவிந்த, கோவிந்த\n\nஅஸ்ய ஸ்ரீ பகவதோ மஹாபுருஷஸ்ய விஷ்ணோராஜ்ஞயா ப்ரவர்த்தமானஸ்ய\nஆத்ய ப்ரஹ்மணஃ த்விதீய பரார்த்தே ஸ்ரீ ஸ்வேதவராஹ கல்பே\nவைவஸ்வத மன்வந்தரே கலியுகே ப்ரதமே பாதே\nஜம்பூத்வீபே பாரதவர்ஷே பரதகண்டே\nசகாப்தே மேரோர்தக்ஷிணே பார்ஶ்வே அஸ்மின் வர்த்தமானே வ்யாவஹாரிகே\nப்ரபவாதி ஷஷ்டி ஸம்வத்ஸராணாம் மத்யே\n\n{{SAMVATSARA}} நாம ஸம்வத்ஸரே\n\n{{AYANA}}\n\n{{RITU}} ருதௌ\n\n{{MASA}} மாஸே\n\n{{PAKSHA}} பக்ஷே\n\n{{TITHI}}\n\n{{VARA}} வாஸரே\n\n{{NAKSHATRA}} நக்ஷத்ர யுக்தாயாம்\n\n{{YOGA}} யோகே\n\n{{KARANA}} கரணே\n\nஏவங்குண விஶேஷண விஶிஷ்டாயாம் அஸ்யாம்\n\n{{TITHI}} சுப திதௌ\n\nஸ்ரீ பகவதாஜ்ஞா ஸ்ரீமந்நாராயண ப்ரீத்யர்த்தம்\n\nத்விஜத்வ அதிக்கிரம ப்ராயச்சித்தார்த்தம்,\nஸாவத்ரீ காயத்ரி மஹா மந்த்ர ஜபம் கரிஷ்யே.\nஅஷ்டோத்தர ஸஹஸ்ர ஸங்க்யா (1008 முறை) அல்லது அஷ்டோத்தர ஶத ஸங்க்யா (108 முறை) காயத்ரி மஹா மந்த்ர ஜபம் கரிஷ்யே.`,
          isFixed: false
        },
        {
          title: "காயத்ரி மந்த்ர ஜபம் (Gayatri Mantra)",
          content: `ஓம் பூர்புவஸ்ஸுவஃ\nதத்ஸவிதுர்வரேண்யம்\nபர்கோதேவஸ்ய தீமஹி\nதியோ யோ நஃ ப்ரசோதயாத் ॥\n\n(108 அல்லது 1008 முறை ஜபிக்க வேண்டும்.)`,
          isFixed: true
        },
        {
          title: "முடிவு",
          content: `பவித்ரத்தை அகற்றி ஆசமனம் செய்து, பெரியவர்களிடம் நமஸ்காரம் செய்ய வேண்டும்.`,
          isFixed: true
        }
      ];

    case 'english':
    default:
      return [
        {
          title: "Achamanam (Purification)",
          content: `Om Achyutaya Namah\nOm Anantaya Namah\nOm Govindaya Namah\n\nPerform purification (Achamanam) by sipping water, followed by naming rites.`,
          isFixed: true
        },
        {
          title: "Pranayamam (Breath Control)",
          content: `Om Bhuh, Om Bhuvah, Om Suvah, Om Mahah, Om Janah, Om Tapah, Om Satyam\nOm Tat Savitur Varenyam Bhargo Devasya Dheemahi Dhiyo Yo Nah Prachodayat\nOm Apo Jyotirasomrtam Brahma Bhurbhuvassuvarom`,
          isFixed: true
        },
        {
          title: "Guru Parampara",
          content: `Sriman Venkatanatharyah Kavitarkika Kesari |\nVedantacharya Varyo Me Sannidhattam Sada Hrdi ||`,
          isFixed: true
        },
        {
          title: "Vishwaksena Dhyanam",
          content: `Shuklambaradharam Vishnum Shashivarnam Chaturbhujam |\nPrasannavadanam Dhyayet Sarvavighnopashantaye ||`,
          isFixed: true
        },
        {
          title: "Gayatri Maha Sankalpam",
          content: `Harih Om Tat\nSri Govinda, Govinda, Govinda\n\nAsya Sri Bhagavato Mahapurushasya Vishnorajñaya Pravartamanasya\nAdya Brahmanah Dvitiya Parardhe Sri Shvetavaraha Kalpe\nVaivasvata Manvantare Kaliyuge Prathame Pade\nJambudvipe Bharata Varshe Bharata Khande\nShakabde Meror Dakshine Parshve Asmin Vartamane Vyavaharike\nPrabhavadi Shashti Samvatsaranam Madhye\n\n{{SAMVATSARA}} Nama Samvatsare\n\n{{AYANA}}\n\n{{RITU}} Rutau\n\n{{MASA}} Mase\n\n{{PAKSHA}} Pakshe\n\n{{TITHI}}\n\n{{VARA}} Vasare\n\n{{NAKSHATRA}} Nakshatra Yuktayam\n\n{{YOGA}} Yoge\n\n{{KARANA}} Karane\n\nEvanguna Visheshana Vishishtayam\n\nAsyam\n\n{{TITHI}}\n\nShubha Tithou\n\nSri Bhagavadajña Sriman Narayana Preetyartham\n\nDvija Atikrama Prayashchittartham,\nSavitri Gayatri Maha Mantra Japam Karishye.\nAshtottara Sahasra Sankhya (1008 times) or Ashtottara Shata Sankhya (108 times) Gayatri Maha Mantra Japam Karishye.`,
          isFixed: false
        },
        {
          title: "Gayatri Mantra Recitation",
          content: `Om Bhurbhuvassuvah\nTat Savitur Varenyam\nBhargo Devasya Dheemahi\nDhiyo Yo Nah Prachodayat ||\n\n(Recite 108 or 1008 times according to family custom)`,
          isFixed: true
        },
        {
          title: "Conclusion",
          content: `Discard pavitram, perform Achamanam and prostrate.`,
          isFixed: true
        }
      ];
  }
}

/**
 * Multilingual Rendering Engine for the Sankalpam.
 * Resolves placeholders using the requested language.
 */
export function renderMultilingualSankalpam(
  lang: SupportedLanguage,
  type: 'upakarma' | 'gayatri',
  variables: Panchanga
): MultilingualSection[] {
  const baseTemplate = getLocalizedTemplate(lang, type);
  
  return baseTemplate.map(section => {
    if (section.isFixed) {
      return { ...section };
    }

    let renderedContent = section.content;

    // Substitute with script-specific parameter translations
    const samvatsaraVal = translateParam('samvatsara', variables.samvatsara, lang);
    const ayanaVal = translateParam('ayana', variables.ayana, lang);
    const rituVal = translateParam('ritu', variables.ritu, lang);
    const masaVal = translateParam('masa', variables.masa, lang);
    const pakshaVal = translateParam('paksha', variables.paksha, lang);
    const tithiVal = translateParam('tithi', variables.tithi, lang);
    const varaVal = translateParam('vara', variables.vara, lang);
    const nakshatraVal = translateParam('nakshatra', variables.nakshatra, lang);
    const yogaVal = translateParam('yoga', variables.yoga, lang);
    const karanaVal = translateParam('karana', variables.karana, lang);

    renderedContent = renderedContent.replace(/\{\{SAMVATSARA\}\}/g, samvatsaraVal);
    renderedContent = renderedContent.replace(/\{\{AYANA\}\}/g, ayanaVal);
    renderedContent = renderedContent.replace(/\{\{RITU\}\}/g, rituVal);
    renderedContent = renderedContent.replace(/\{\{MASA\}\}/g, masaVal);
    renderedContent = renderedContent.replace(/\{\{PAKSHA\}\}/g, pakshaVal);
    renderedContent = renderedContent.replace(/\{\{TITHI\}\}/g, tithiVal);
    renderedContent = renderedContent.replace(/\{\{VARA\}\}/g, varaVal);
    renderedContent = renderedContent.replace(/\{\{NAKSHATRA\}\}/g, nakshatraVal);
    renderedContent = renderedContent.replace(/\{\{YOGA\}\}/g, yogaVal);
    renderedContent = renderedContent.replace(/\{\{KARANA\}\}/g, karanaVal);

    return {
      ...section,
      content: renderedContent
    };
  });
}
