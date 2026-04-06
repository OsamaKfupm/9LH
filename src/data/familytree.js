// data/familytree.js

export const rootId = "1";

export const familyNodes = {
  // ── Generation 1 ──────────────────────────────────────────
  "1": { id: "1", name: "إبراهيم الراشد", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: ["2", "3", "4", "5", "6"] },

  // ── Generation 2 ──────────────────────────────────────────
  "2":  { id: "2",  name: "خالد إبراهيم",   imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: ["20", "21", "22", "23"] },
  "3":  { id: "3",  name: "سعيد إبراهيم",   imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: ["24", "25", "26"] },
  "4":  { id: "4",  name: "ناصر إبراهيم",   imageUrl: "https://images.unsplash.com/photo-1506795660185-287aa1e5a2df?auto=format&fit=crop&w=300&q=80", childrenIds: ["27", "28", "29", "30"] },
  "5":  { id: "5",  name: "طارق إبراهيم",   imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: ["31", "32", "33"] },
  "6":  { id: "6",  name: "فهد إبراهيم",    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: ["34", "35", "36", "37"] },

  // ── Generation 3 ──────────────────────────────────────────
  // أبناء خالد
  "20": { id: "20", name: "عمر خالد",       imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: ["60", "61", "62"] },
  "21": { id: "21", name: "فيصل خالد",      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: ["63", "64"] },
  "22": { id: "22", name: "ماجد خالد",      imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: ["65", "66", "67"] },
  "23": { id: "23", name: "وليد خالد",      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: ["68", "69"] },
  // أبناء سعيد
  "24": { id: "24", name: "عبدالعزيز سعيد", imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: ["70", "71", "72"] },
  "25": { id: "25", name: "حمد سعيد",       imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: ["73", "74"] },
  "26": { id: "26", name: "بدر سعيد",       imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: ["75", "76"] },
  // أبناء ناصر
  "27": { id: "27", name: "سلطان ناصر",     imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: ["77", "78"] },
  "28": { id: "28", name: "فهد ناصر",       imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: ["79", "80", "81"] },
  "29": { id: "29", name: "تركي ناصر",      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: ["82", "83"] },
  "30": { id: "30", name: "مشعل ناصر",      imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: ["84"] },
  // أبناء طارق
  "31": { id: "31", name: "ريان طارق",      imageUrl: "https://images.unsplash.com/photo-1506795660185-287aa1e5a2df?auto=format&fit=crop&w=300&q=80", childrenIds: ["85", "86", "87"] },
  "32": { id: "32", name: "زياد طارق",      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: ["88", "89"] },
  "33": { id: "33", name: "معاذ طارق",      imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: ["90", "91"] },
  // أبناء فهد
  "34": { id: "34", name: "راشد فهد",       imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: ["92", "93"] },
  "35": { id: "35", name: "منصور فهد",      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: ["94", "95", "96"] },
  "36": { id: "36", name: "عادل فهد",       imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: ["97", "98"] },
  "37": { id: "37", name: "نواف فهد",       imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: ["99"] },

  // ── Generation 4 ──────────────────────────────────────────
  // أبناء عمر
  "60": { id: "60", name: "سلمان عمر",      imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: ["120", "121"] },
  "61": { id: "61", name: "يزيد عمر",       imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: ["122"] },
  "62": { id: "62", name: "جاسر عمر",       imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: ["123", "124"] },
  // أبناء فيصل
  "63": { id: "63", name: "نواف فيصل",      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: ["125"] },
  "64": { id: "64", name: "حاتم فيصل",      imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: ["126", "127"] },
  // أبناء ماجد
  "65": { id: "65", name: "ركان ماجد",      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: ["128"] },
  "66": { id: "66", name: "سعود ماجد",      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: ["129", "130"] },
  "67": { id: "67", name: "غازي ماجد",      imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء وليد
  "68": { id: "68", name: "أنس وليد",       imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: ["131", "132"] },
  "69": { id: "69", name: "بلال وليد",      imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: ["133"] },
  // أبناء عبدالعزيز
  "70": { id: "70", name: "منصور عبدالعزيز",imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: ["134", "135"] },
  "71": { id: "71", name: "طلال عبدالعزيز", imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "72": { id: "72", name: "بادر عبدالعزيز", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: ["136"] },
  // أبناء حمد
  "73": { id: "73", name: "خالد حمد",       imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: ["137", "138"] },
  "74": { id: "74", name: "نبيل حمد",       imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء بدر
  "75": { id: "75", name: "يوسف بدر",       imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: ["139"] },
  "76": { id: "76", name: "عمار بدر",       imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء سلطان
  "77": { id: "77", name: "فارس سلطان",     imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: ["140", "141"] },
  "78": { id: "78", name: "عادل سلطان",     imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء فهد ناصر
  "79": { id: "79", name: "ليث فهد",        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "80": { id: "80", name: "معاذ فهد",       imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "81": { id: "81", name: "تيم فهد",        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء تركي
  "82": { id: "82", name: "مروان تركي",     imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: ["142"] },
  "83": { id: "83", name: "ساري تركي",      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء مشعل
  "84": { id: "84", name: "رائد مشعل",      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء ريان
  "85": { id: "85", name: "هاشم ريان",      imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: ["143", "144"] },
  "86": { id: "86", name: "زهير ريان",      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "87": { id: "87", name: "قصي ريان",       imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء زياد
  "88": { id: "88", name: "باسل زياد",      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "89": { id: "89", name: "إياد زياد",      imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء معاذ
  "90": { id: "90", name: "وسام معاذ",      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: ["145"] },
  "91": { id: "91", name: "نايف معاذ",      imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء راشد
  "92": { id: "92", name: "عبدالله راشد",   imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: ["146", "147"] },
  "93": { id: "93", name: "محمد راشد",      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء منصور
  "94": { id: "94", name: "أحمد منصور",     imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "95": { id: "95", name: "علي منصور",      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: ["148"] },
  "96": { id: "96", name: "حسن منصور",      imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء عادل
  "97": { id: "97", name: "كريم عادل",      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "98": { id: "98", name: "سامي عادل",      imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء نواف
  "99": { id: "99", name: "جاد نواف",       imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: ["149", "150"] },

  // ── Generation 5 ──────────────────────────────────────────
  // أبناء سلمان
  "120": { id: "120", name: "آدم سلمان",    imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "121": { id: "121", name: "كريم سلمان",   imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء يزيد
  "122": { id: "122", name: "جاد يزيد",     imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء جاسر
  "123": { id: "123", name: "مالك جاسر",    imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "124": { id: "124", name: "رامي جاسر",    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء نواف فيصل
  "125": { id: "125", name: "داني نواف",    imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء حاتم
  "126": { id: "126", name: "سيف حاتم",     imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "127": { id: "127", name: "نور حاتم",     imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء ركان
  "128": { id: "128", name: "ليث ركان",     imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء سعود
  "129": { id: "129", name: "زين سعود",     imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "130": { id: "130", name: "طه سعود",      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء أنس
  "131": { id: "131", name: "لقمان أنس",    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "132": { id: "132", name: "ياسر أنس",     imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء بلال
  "133": { id: "133", name: "عمر بلال",     imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء منصور عبدالعزيز
  "134": { id: "134", name: "فراس منصور",   imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "135": { id: "135", name: "قيس منصور",    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء بادر
  "136": { id: "136", name: "حمزة بادر",    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء خالد حمد
  "137": { id: "137", name: "صالح خالد",    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "138": { id: "138", name: "وائل خالد",    imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء يوسف
  "139": { id: "139", name: "إلياس يوسف",   imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء فارس
  "140": { id: "140", name: "ناصر فارس",    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "141": { id: "141", name: "بشر فارس",     imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء مروان
  "142": { id: "142", name: "تميم مروان",   imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء هاشم
  "143": { id: "143", name: "جبريل هاشم",   imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "144": { id: "144", name: "إدريس هاشم",   imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء وسام
  "145": { id: "145", name: "أيمن وسام",    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء عبدالله راشد
  "146": { id: "146", name: "زيد عبدالله",  imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "147": { id: "147", name: "بكر عبدالله",  imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء علي منصور
  "148": { id: "148", name: "يحيى علي",     imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  // أبناء جاد نواف
  "149": { id: "149", name: "لؤي جاد",      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "150": { id: "150", name: "ضياء جاد",     imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },

  // ── Generation 6 (extra depth for key branches) ───────────
  "160": { id: "160", name: "يوسف آدم",     imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "161": { id: "161", name: "داود آدم",     imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "162": { id: "162", name: "نوح مالك",     imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "163": { id: "163", name: "عيسى مالك",    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "164": { id: "164", name: "سليم سيف",     imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "165": { id: "165", name: "أنور نور",     imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "166": { id: "166", name: "شاهر زين",     imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "167": { id: "167", name: "ماهر طه",      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "168": { id: "168", name: "وليد لقمان",   imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "169": { id: "169", name: "رامز ياسر",    imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "170": { id: "170", name: "طارق عمر",     imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "171": { id: "171", name: "كامل فراس",    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "172": { id: "172", name: "باسم قيس",     imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "173": { id: "173", name: "ربيع حمزة",    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "174": { id: "174", name: "وائل صالح",    imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "175": { id: "175", name: "حيدر وائل",    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "176": { id: "176", name: "سامر زيد",     imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "177": { id: "177", name: "عامر بكر",     imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "178": { id: "178", name: "أسامة يحيى",   imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "179": { id: "179", name: "رضا لؤي",      imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "180": { id: "180", name: "غيث ضياء",     imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "181": { id: "181", name: "نزار تميم",    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "182": { id: "182", name: "أديب جبريل",   imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "183": { id: "183", name: "شريف إدريس",   imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "184": { id: "184", name: "لبيب أيمن",    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "185": { id: "185", name: "نادر إلياس",   imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "186": { id: "186", name: "ثامر ناصر",    imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "187": { id: "187", name: "صقر بشر",      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "188": { id: "188", name: "حارث أحمد",    imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "189": { id: "189", name: "عبير علي",     imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "190": { id: "190", name: "ظافر حسن",     imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "191": { id: "191", name: "مؤيد كريم",    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "192": { id: "192", name: "رعد سامي",     imageUrl: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "193": { id: "193", name: "بهاء جاد",     imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "194": { id: "194", name: "ضرار داود",    imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "195": { id: "195", name: "مصعب نوح",     imageUrl: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "196": { id: "196", name: "أنس عيسى",     imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "197": { id: "197", name: "هلال سليم",    imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "198": { id: "198", name: "رشيد أنور",    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "199": { id: "199", name: "سالم شاهر",    imageUrl: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
  "200": { id: "200", name: "عزيز ماهر",    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80", childrenIds: [] },
};

// Wire Gen 5 → Gen 6 connections
familyNodes["120"].childrenIds = ["160", "161"];
familyNodes["123"].childrenIds = ["162", "163"];
familyNodes["126"].childrenIds = ["164"];
familyNodes["127"].childrenIds = ["165"];
familyNodes["129"].childrenIds = ["166"];
familyNodes["130"].childrenIds = ["167"];
familyNodes["131"].childrenIds = ["168"];
familyNodes["132"].childrenIds = ["169"];
familyNodes["133"].childrenIds = ["170"];
familyNodes["134"].childrenIds = ["171"];
familyNodes["135"].childrenIds = ["172"];
familyNodes["136"].childrenIds = ["173"];
familyNodes["137"].childrenIds = ["174"];
familyNodes["138"].childrenIds = ["175"];
familyNodes["146"].childrenIds = ["176"];
familyNodes["147"].childrenIds = ["177"];
familyNodes["148"].childrenIds = ["178"];
familyNodes["149"].childrenIds = ["179"];
familyNodes["150"].childrenIds = ["180"];
familyNodes["142"].childrenIds = ["181"];
familyNodes["143"].childrenIds = ["182"];
familyNodes["144"].childrenIds = ["183"];
familyNodes["145"].childrenIds = ["184"];
familyNodes["139"].childrenIds = ["185"];
familyNodes["140"].childrenIds = ["186"];
familyNodes["141"].childrenIds = ["187"];
familyNodes["95"].childrenIds  = ["188", "189"];
familyNodes["96"].childrenIds  = ["190"];
familyNodes["92"].childrenIds  = ["191", "192"];
familyNodes["85"].childrenIds  = ["193", "194"];
familyNodes["90"].childrenIds  = ["195", "196"];
familyNodes["75"].childrenIds  = ["197"];
familyNodes["82"].childrenIds  = ["198"];
familyNodes["83"].childrenIds  = ["199"];
familyNodes["84"].childrenIds  = ["200"];