export const menuCards = [
    {
        id: 1, title: "Hot Drinks", titleAr: "مشروبات ساخنة", color: "cream", icon: "hotDrink", slug: "hot-drinks",
        sections: [
            {
                name: "Espresso Drinks", nameAr: "مشروبات الإسبريسو",
                items: [
                    { name: "Espresso", nameAr: "اسبريسو", price: 12, cal: 2, slug: "espresso" },
                    { name: "Hot Americano", nameAr: "امريكانو حار", price: 13, cal: 2 },
                    { name: "Cortado", nameAr: "كورتادو", price: 15, cal: 62 },
                    { name: "Flat White", nameAr: "فلات وايت", price: 16, cal: 92, slug: "flat-white" },
                    { name: "Cappuccino", nameAr: "كابتشينو", price: 16, cal: 92 },
                    { name: "Latte", nameAr: "لاتيه", price: 17, cal: 122 },
                    { name: "Hot Spanish Latte", nameAr: "سبانيش لاتيه حار", price: 20, cal: 253, slug: "spanish-latte" },
                    { name: "Hot Llama Signature", nameAr: "لاما سيقنتشر حار", price: 19, cal: 253 },
                ]
            },
            {
                name: "Drip Coffee", nameAr: "قهوة التقطير",
                items: [
                    { name: "Hot V60", nameAr: "V60 حار", price: 18, cal: 2 },
                    { name: "Ice V60", nameAr: "V60 بارد", price: 20, cal: 2 },
                    { name: "Coffee of the Day", nameAr: "قهوة اليوم", price: 10, cal: 2 },
                ]
            }
        ],
        image: "/images/Menu/hot drink.webp",
    },
    {
        id: 2, title: "Cold Drinks", titleAr: "مشروبات باردة", color: "teal", icon: "coldDrink", slug: "cold-drinks",
        sections: [
            {
                name: "Espresso Drinks", nameAr: "مشروبات الإسبريسو الباردة",
                items: [
                    { name: "Ice Latte", nameAr: "لاتيه بارد", price: 19, cal: 122, slug: "ice-latte" },
                    { name: "Ice Americano", nameAr: "امريكانو بارد", price: 14, cal: 2 },
                    { name: "Ice Spanish Latte", nameAr: "سبانيش لاتيه بارد", price: 22, cal: 235 },
                    { name: "Ice Llama Signature", nameAr: "لاما سيقنتشر بارد", price: 22, cal: 235 },
                ]
            },
            {
                name: "Fresh Drinks", nameAr: "مشروبات منعشة",
                items: [
                    { name: "Llama Ice Tea", nameAr: "ايس تي لاما", price: 21, cal: 80 },
                    { name: "Violet Hibiscus", nameAr: "فايلوت كركديه", price: 21, cal: 84 },
                    { name: "Orange Juice", nameAr: "عصير برتقال", price: 17, cal: 35 },
                ]
            },
            {
                name: "Matcha", nameAr: "ماتشا",
                items: [
                    { name: "Iced Matcha", nameAr: "ايسد ماتشا", price: 19, cal: 161, slug: "matcha-latte" },
                    { name: "Floated Matcha", nameAr: "فلوتد ماتشا", price: 25, cal: 318 },
                ]
            }
        ],
        image: "/images/Menu/cold drinks.webp",
    },
    {
        id: 3, title: "Brunch", titleAr: "برنش", color: "teal", icon: "brunch", slug: "brunch",
        sections: [
            {
                name: "Brunch Selections", nameAr: "أطباق البرنش",
                items: [
                    { name: "Roasted Beef", nameAr: "روستد بيف", price: 23, cal: 192, ingredients: "Sourdough slice, smoked beef, onion, date syrup and tomato", ingredientsAr: "شريحة من خبزة الساوردو، لحم مقدد، بصل، قطر وطماطم", allergens: "Gluten", allergensAr: "الحبوب" },
                    { name: "Labnah & Zaatar", nameAr: "لبنة وزعتر", price: 17, cal: 190, ingredients: "Sourdough slice, zaatar, labneh, kalamata olives, mint, olive oil and balsamic vinegar", ingredientsAr: "شريحة من خبزة الساوردو، زعتر، لبنة، كالاماتا، نعناع، زيت زيتون وخل البلسمك", allergens: "Gluten, Milk", allergensAr: "الحبوب، الحليب" },
                    { name: "Peanut Butter & Berries", nameAr: "زبدة الفول السوداني والمربى", price: 17, cal: 178, ingredients: "Sourdough slice, peanut butter, berry jam, granola", ingredientsAr: "شريحة من خبزة الساوردو، زبدة الفول السوداني، مربى، قرانولا", allergens: "Gluten, Peanuts", allergensAr: "الحبوب، الفول السوداني" },
                    { name: "Aromatic French Toast", nameAr: "اروماتيك فرينش توست", price: 33, cal: 242 },
                ]
            }
        ],
        image: "/images/Menu/Labnah & Zaatar.webp",
    },
    {
        id: 4, title: "Grab & Go", titleAr: "استلم واذهب", color: "orange", icon: "grabGo", slug: "grab-go",
        sections: [
            {
                name: "Sandwiches", nameAr: "الساندويتشات",
                items: [
                    { name: "Sahara Chicken", nameAr: "دجاج صحاري ساندويتش", price: 27, cal: 558, ingredients: "Two sourdough slices, chicken, pesto, spinach, smoked beef, garlic sauce and Monterey Jack cheese", ingredientsAr: "شريحتين من خبزة الساوردو، دجاج، بيستو، سباتك، لحم مقدد، صوص الثوم وجبن المونتري جاك", allergens: "Gluten, Nuts", allergensAr: "الحبوب، المكسرات" },
                    { name: "Tuna Sandwich", nameAr: "سبايسي تونا ساندويتش", price: 27, cal: 360, ingredients: "Two sourdough slices, tuna, mayonnaise, cheddar cheese, black pepper, pickles", ingredientsAr: "شريحتين من خبزة الساوردو، تونا، مايونيز، جبن التشيدر، فلفل اسود، مخلل", allergens: "Gluten, Milk", allergensAr: "الحبوب، حليب" },
                    { name: "Halloumi Sandwich", nameAr: "حلومي ساندويتش", price: 29, cal: 291, ingredients: "Two sourdough slices, halloumi, kalamata olives, smoked beef, baby arugula, sweet drizzle", ingredientsAr: "شريحتين من خبزة الساوردو، فول سوداني، كالاماتا، لحم مقدد، جرجير صغير، حلو", allergens: "Gluten, Peanuts", allergensAr: "الحبوب، فول سوداني" },
                    { name: "Pesto Grilled Cheese", nameAr: "بيستو جريلد تشيز", price: 21, cal: 210, ingredients: "Two sourdough slices, pesto, provolone, cheddar and gouda cheese", ingredientsAr: "شريحتين من خبزة الساوردو، بيستو، جبن البارفلون، جبن التشيدر، جبن جودا", allergens: "Gluten, Nuts", allergensAr: "الحبوب، مكسرات" },
                ]
            }
        ],
        image: "/images/Menu/chicken.webp",
    },
    {
        id: 5, title: "Sweets", titleAr: "الحلويات", color: "brick", icon: "sweets", slug: "sweets",
        sections: [
            {
                name: "Bakery & Desserts", nameAr: "المخبوزات والحلويات",
                items: [
                    { name: "Pecan Cake", nameAr: "كيكة البيكان", price: 17, cal: 390 },
                    { name: "Orange Roll", nameAr: "رول البرتقال", price: 15, cal: 350 },
                    { name: "Choux Cake", nameAr: "تشو كيك", price: 19, cal: 275.4, slug: "london-cake" },
                    { name: "Chocolate & Walnut Cookies", nameAr: "كوكيز التشوكلت والجوز", price: 12, cal: 265, slug: "chocolate-cookies" },
                    { name: "Marble Brownies", nameAr: "ماربل براونيز", price: 15, cal: 402, slug: "chocolate-brownie" },
                    { name: "Madrid Cheese Cake", nameAr: "تشيز كيك مدريد", price: 19, cal: 635.6, slug: "cheesecake" },
                    { name: "French Toast Bites", nameAr: "قطع الفرنش توست", price: 21, cal: 170 },
                ]
            }
        ],
        image: "/images/Menu/sweets.webp",
    },
    {
        id: 6, title: "Ice Cream", titleAr: "الايسكريم", color: "cream", icon: "iceCream", slug: "ice-cream",
        sections: [
            {
                name: "Ice Cream Selection", nameAr: "تشكيلة الايسكريم",
                items: [
                    { name: "Soft Ice Cream", nameAr: "سوفت ايسكريم", price: 15, cal: 240 },
                    { name: "Avocado", nameAr: "افوجاتو", price: 19, cal: 241 },
                ]
            }
        ],
        image: "/images/Menu/icecream.webp",
    },
    {
        id: 7, title: "Seasonal", titleAr: "موسمي", color: "cream", icon: "seasonal", slug: "seasonal",
        sections: [
            {
                name: "Seasonal Specials", nameAr: "عروض موسمية",
                items: [
                    { name: "Chocolate Milkshake", nameAr: "ميلك شيك بالشوكولاتة", price: 25, cal: 330 },
                    { name: "Caramel Lamazing", nameAr: "لامازينج كراميل", price: 21, cal: 104 },
                ]
            }
        ],
        statement: "New drops, every season. Ask what's pouring today.",
        statementAr: "أصناف جديدة كل موسم، اسأل عن عرض اليوم.",
        image: "/images/Menu/milkshake.webp",
    },
    {
        id: 8, title: "Boxes & Sourdough", titleAr: "البوكسات والساوردو", color: "brick", icon: "boxes", slug: "boxes-sourdough",
        sections: [
            {
                name: "Boxes", nameAr: "البوكسات",
                items: [
                    { name: "Coffee Box", nameAr: "بوكس القهوة", price: 50, cal: 0, ingredients: "1.5L coffee box, served with 9 cups", ingredientsAr: "بوكس 1.5 لتر من القهوة يقدم مع 9 أكواب" },
                    { name: "Sweets Box 4", nameAr: "بوكس المفن (٤ قطع)", price: 13, cal: 154, ingredients: "Carrot & cream muffins with pumpkin, walnuts, date and tahini", ingredientsAr: "الجزر والكريمة مع القرع، النوت، تمر وطحينية" },
                    { name: "Sweets Box 10", nameAr: "بوكس المفن (١٠ قطع)", price: 27, cal: 653, ingredients: "Carrot & cream muffins with pumpkin, walnuts, date and tahini", ingredientsAr: "الجزر والكريمة مع القرع، النوت، تمر وطحينية" },
                    { name: "G&G Box", nameAr: "جي اند جي بوكس", price: 99, cal: 1419, ingredients: "Tuna, halloumi, sahara chicken, pesto grilled cheese", ingredientsAr: "تونا، حلومي، صحاري، بيستو جريلد تشيز" },
                ]
            },
            {
                name: "Sourdough", nameAr: "الساوردو",
                items: [
                    { name: "Sourdough Loaf", nameAr: "خبزة الساوردو", price: 29, cal: 1800 }
                ]
            }
        ],
        statement: "Fermented 24 hours, baked fresh every morning — the base of everything on this menu.",
        statementAr: "تختمر لمدة ٢٤ ساعة وتُخبز طازجة كل صباح — أساس كل شيء في هذا المنيو.",
        secondaryImage: "/images/Menu/Sourdough2.webp",
        image: "/images/Menu/boxes.webp",
    },
];